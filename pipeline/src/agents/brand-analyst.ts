import Anthropic from '@anthropic-ai/sdk'
import { scrapeSite } from '../tools/firecrawl.js'
import type { Lead, BrandData, AgentResult } from '../types.js'

const client = new Anthropic()

export async function runBrandAnalystAgent(lead: Lead): Promise<AgentResult<Lead>> {
  console.log(`[BrandAnalyst] Analyzing ${lead.name}`)

  try {
    const content = await scrapeSite(lead.website!)

    if (!content) {
      // Fallback: use what we already have from Places API
      const brandData: BrandData = {
        name: lead.name,
        phone: lead.phone,
        address: lead.address,
        services: [],
      }
      return { success: true, data: { ...lead, brand_data: brandData, status: 'analyzed' } }
    }

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1500,
      messages: [
        {
          role: 'user',
          content: `Extract structured brand data from this business website. Return valid JSON only, no markdown.

Website content:
${content.slice(0, 8000)}

Return this exact JSON:
{
  "name": "business name",
  "tagline": "slogan if any",
  "phone": "phone number",
  "email": "email if found",
  "address": "full address",
  "services": ["service1", "service2"],
  "tone": "professional|friendly|urgent|luxury",
  "unique_selling_points": ["usp1", "usp2"],
  "years_in_business": 0,
  "license": "license number if any",
  "service_areas": ["city1", "city2"],
  "google_rating": "4.8",
  "review_count": "150",
  "testimonials": [
    {"name": "Customer Name", "text": "review text", "rating": 5}
  ]
}`,
        },
      ],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) throw new Error('No JSON in Claude response')

    const brandData: BrandData = JSON.parse(jsonMatch[0])

    return {
      success: true,
      data: { ...lead, brand_data: brandData, status: 'analyzed' },
    }
  } catch (e: any) {
    return { success: false, error: e.message }
  }
}
