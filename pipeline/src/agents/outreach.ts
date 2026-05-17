import { sendOutreachEmail } from '../tools/resend.js'
import type { Lead, AgentResult } from '../types.js'

export async function runOutreachAgent(lead: Lead): Promise<AgentResult<Lead>> {
  if (!lead.email) return { success: false, error: 'No email address' }
  if (!lead.vercel_url) return { success: false, error: 'No demo URL' }

  console.log(`[Outreach] Emailing ${lead.email}`)

  try {
    const sent = await sendOutreachEmail({
      to: lead.email,
      businessName: lead.name,
      demoUrl: lead.vercel_url,
      niche: lead.niche,
    })

    if (!sent) return { success: false, error: 'Resend API failed' }

    return {
      success: true,
      data: {
        ...lead,
        outreach_sent: true,
        outreach_sent_at: new Date().toISOString(),
        status: 'outreach_sent',
      },
    }
  } catch (e: any) {
    return { success: false, error: e.message }
  }
}
