import { scoreSite } from '../tools/pagespeed.js'
import type { Lead, AgentResult } from '../types.js'

const BAD_SITE_THRESHOLD = 60

export async function runSiteScorerAgent(lead: Lead): Promise<AgentResult<Lead>> {
  if (!lead.website) return { success: false, error: 'No website' }

  console.log(`[SiteScorer] Scoring ${lead.name}`)

  try {
    const score = await scoreSite(lead.website)
    const isBadSite = score.mobile_score < BAD_SITE_THRESHOLD || score.issues.length >= 2

    if (!isBadSite) {
      return {
        success: true,
        data: { ...lead, site_score: score.mobile_score, status: 'skipped' },
      }
    }

    return {
      success: true,
      data: {
        ...lead,
        site_score: score.mobile_score,
        site_issues: score.issues,
        status: 'scored',
      },
    }
  } catch (e: any) {
    return { success: false, error: e.message }
  }
}
