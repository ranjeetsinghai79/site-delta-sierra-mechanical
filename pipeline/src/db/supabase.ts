import { createClient } from '@supabase/supabase-js'
import type { Lead } from '../types.js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export async function saveLead(lead: Lead): Promise<Lead | null> {
  const { data, error } = await supabase
    .from('leads')
    .upsert(
      {
        place_id: lead.place_id,
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        website: lead.website,
        address: lead.address,
        city: lead.city,
        state: lead.state,
        niche: lead.niche,
        status: lead.status,
      },
      { onConflict: 'place_id' }
    )
    .select()
    .single()

  if (error) console.error('[DB] save error:', error.message)
  return data
}

export async function updateLead(lead: Lead): Promise<void> {
  if (!lead.id) return

  const { error } = await supabase
    .from('leads')
    .update({
      site_score: lead.site_score,
      site_issues: lead.site_issues,
      brand_data: lead.brand_data,
      config_ts: lead.config_ts,
      github_repo: lead.github_repo,
      vercel_url: lead.vercel_url,
      outreach_sent: lead.outreach_sent,
      outreach_sent_at: lead.outreach_sent_at,
      status: lead.status,
    })
    .eq('id', lead.id)

  if (error) console.error('[DB] update error:', error.message)
}

export async function getLeadsByStatus(status: string): Promise<Lead[]> {
  const { data } = await supabase
    .from('leads')
    .select('*')
    .eq('status', status)
    .order('created_at', { ascending: false })

  return (data || []) as Lead[]
}
