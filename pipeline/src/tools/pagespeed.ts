export interface SiteScore {
  url: string
  mobile_score: number
  desktop_score: number
  issues: string[]
}

export async function scoreSite(url: string): Promise<SiteScore> {
  const issues: string[] = []
  let mobile_score = 0
  let desktop_score = 0

  try {
    const base = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'
    const key = process.env.GOOGLE_PLACES_API_KEY!

    const [mobileRes, desktopRes] = await Promise.all([
      fetch(`${base}?url=${encodeURIComponent(url)}&strategy=mobile&key=${key}`),
      fetch(`${base}?url=${encodeURIComponent(url)}&strategy=desktop&key=${key}`),
    ])

    const [mobile, desktop] = await Promise.all([
      mobileRes.json() as Promise<any>,
      desktopRes.json() as Promise<any>,
    ])

    mobile_score = Math.round((mobile.lighthouseResult?.categories?.performance?.score ?? 0) * 100)
    desktop_score = Math.round((desktop.lighthouseResult?.categories?.performance?.score ?? 0) * 100)

    if (mobile_score < 50) issues.push('Poor mobile performance')
    if (desktop_score < 60) issues.push('Poor desktop performance')

    const viewport = mobile.lighthouseResult?.audits?.['viewport']?.score
    if (viewport === 0) issues.push('Not mobile-friendly')

    const fcp = mobile.lighthouseResult?.audits?.['first-contentful-paint']?.numericValue
    if (fcp > 3000) issues.push('Slow load time (>3s)')

    const noHttps = !url.startsWith('https')
    if (noHttps) issues.push('No HTTPS')
  } catch {
    issues.push('Site unreachable or broken')
    mobile_score = 0
    desktop_score = 0
  }

  return { url, mobile_score, desktop_score, issues }
}
