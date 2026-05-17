import Anthropic from '@anthropic-ai/sdk'
import type { Lead, AgentResult } from '../types.js'

const client = new Anthropic()

export interface SeoPackage {
  sitemap_xml: string
  robots_txt: string
  schema_json: string
  meta_strategy: string
  keywords: string[]
}

export async function runSeoAgent(lead: Lead): Promise<AgentResult<SeoPackage>> {
  console.log(`[SEO] Generating SEO package for ${lead.name}`)

  const bd = lead.brand_data!
  const domain = lead.vercel_url || `https://${lead.name.toLowerCase().replace(/\s+/g, '')}.com`

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 3000,
      messages: [{
        role: 'user',
        content: `Generate a complete SEO package for this local business. Return valid JSON only.

Business: ${JSON.stringify({ name: bd.name, address: bd.address, phone: bd.phone, services: bd.services, areas: bd.service_areas }, null, 2)}
Domain: ${domain}
Niche: ${lead.niche}
City: ${lead.city}, ${lead.state}

Return this JSON:
{
  "sitemap_xml": "<?xml version...(full sitemap.xml content)",
  "robots_txt": "User-agent: *\\nAllow: /\\nSitemap: ${domain}/sitemap.xml",
  "schema_json": "{full LocalBusiness schema.org JSON-LD}",
  "meta_strategy": "Title tag formula and description formula for this business",
  "keywords": ["keyword1", "keyword2", "...15 local SEO keywords"]
}`,
      }],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) throw new Error('No JSON in response')

    const seoPackage: SeoPackage = JSON.parse(jsonMatch[0])
    return { success: true, data: seoPackage }
  } catch (e: any) {
    return { success: false, error: e.message }
  }
}
