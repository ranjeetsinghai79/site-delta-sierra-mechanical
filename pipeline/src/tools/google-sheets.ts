export async function appendSheetRow(params: {
  spreadsheetId: string
  sheetName: string
  values: string[]
}): Promise<boolean> {
  const token = await getAccessToken()
  if (!token) return false

  const range = `${params.sheetName}!A1`
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${params.spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED`

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: [params.values] }),
  })

  if (!res.ok) {
    console.error('[Sheets] append failed:', await res.text())
    return false
  }
  return true
}

async function getAccessToken(): Promise<string | null> {
  // Use service account JSON from env
  const serviceAccount = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (!serviceAccount) {
    console.error('[Sheets] GOOGLE_SERVICE_ACCOUNT_JSON not set')
    return null
  }

  const sa = JSON.parse(serviceAccount)
  const now = Math.floor(Date.now() / 1000)

  const header = btoa(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const payload = btoa(JSON.stringify({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  }))

  // Sign with private key using Node.js crypto
  const { createSign } = await import('crypto')
  const sign = createSign('RSA-SHA256')
  sign.update(`${header}.${payload}`)
  const signature = sign.sign(sa.private_key, 'base64url')

  const jwt = `${header}.${payload}.${signature}`

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  })

  const tokenData = await tokenRes.json() as any
  return tokenData.access_token || null
}
