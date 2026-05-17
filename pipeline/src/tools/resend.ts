export async function sendOutreachEmail(params: {
  to: string
  businessName: string
  demoUrl: string
  niche: string
}): Promise<boolean> {
  const { to, businessName, demoUrl, niche } = params

  const nicheLabel: Record<string, string> = {
    hvac: 'HVAC & plumbing',
    plumbing: 'plumbing',
    restaurant: 'restaurant',
    medspa: 'med spa',
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.OUTREACH_FROM_EMAIL || 'hello@builtai.dev',
      to,
      subject: `I built a new website for ${businessName} — free to see`,
      html: `
        <p>Hi,</p>
        <p>I specialize in building websites for ${nicheLabel[niche] || niche} businesses. I noticed ${businessName}'s current site could be working harder for you, so I built a free demo.</p>
        <p><a href="${demoUrl}" style="font-weight:bold;">👉 View your new website demo</a></p>
        <p>Mobile-optimized, fast, and designed to convert visitors into customers. No cost to look — I just want to show you what's possible.</p>
        <p>If you want it live on your domain, I can have it up within 24 hours.</p>
        <p>Best,<br>Ranjeet<br>${process.env.OUTREACH_FROM_EMAIL || 'hello@builtai.dev'}</p>
      `,
    }),
  })

  return res.ok
}
