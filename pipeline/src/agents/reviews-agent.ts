import Anthropic from '@anthropic-ai/sdk'
import { listReviews, replyToReview } from '../tools/google-my-business.js'
import type { Lead, AgentResult } from '../types.js'

const client = new Anthropic()

export async function runReviewsAgent(
  lead: Lead
): Promise<AgentResult<{ replied: number; skipped: number }>> {
  console.log(`[Reviews] Processing reviews for ${lead.name}`)

  if (!process.env.GBP_ACCOUNT_ID || !process.env.GBP_LOCATION_ID) {
    return { success: false, error: 'GBP credentials not set' }
  }

  try {
    const reviews = await listReviews({
      accountId: process.env.GBP_ACCOUNT_ID,
      locationId: process.env.GBP_LOCATION_ID,
    })

    // Only process reviews without existing replies
    const unanswered = reviews.filter((r: any) => !r.reviewReply)
    let replied = 0
    let skipped = 0

    for (const review of unanswered.slice(0, 10)) {
      const rating = review.starRating // ONE through FIVE
      const text = review.comment || ''
      const reviewer = review.reviewer?.displayName || 'Customer'

      const response = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 200,
        messages: [{
          role: 'user',
          content: `Write a professional Google review reply for ${lead.name} (${lead.niche} business).
Reviewer: ${reviewer}
Rating: ${rating}
Review: "${text}"

Keep it 2-3 sentences. Thank them, address their specific feedback, invite them back.
If negative, apologize and offer to make it right. No emojis.`,
        }],
      })

      const replyText = response.content[0].type === 'text' ? response.content[0].text : ''

      const success = await replyToReview({
        accountId: process.env.GBP_ACCOUNT_ID!,
        locationId: process.env.GBP_LOCATION_ID!,
        reviewId: review.reviewId,
        replyText,
      })

      if (success) replied++
      else skipped++
    }

    return { success: true, data: { replied, skipped } }
  } catch (e: any) {
    return { success: false, error: e.message }
  }
}
