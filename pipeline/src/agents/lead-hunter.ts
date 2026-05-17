import { searchPlaces } from '../tools/google-places.js'
import type { Lead, PipelineConfig, AgentResult } from '../types.js'

export async function runLeadHunterAgent(
  config: PipelineConfig
): Promise<AgentResult<Lead[]>> {
  console.log(`[LeadHunter] Searching: ${config.niche} in ${config.location}`)

  try {
    const places = await searchPlaces(config.niche, config.location, config.count)

    // Only leads that have an existing website (we're replacing it)
    const leads: Lead[] = places
      .filter(p => p.website)
      .map(p => ({
        place_id: p.place_id,
        name: p.name,
        phone: p.phone,
        website: p.website,
        address: p.address,
        city: config.city,
        state: config.state,
        niche: config.niche,
        status: 'found' as const,
      }))

    console.log(`[LeadHunter] ${leads.length} leads with websites found`)
    return { success: true, data: leads }
  } catch (e: any) {
    return { success: false, error: e.message }
  }
}
