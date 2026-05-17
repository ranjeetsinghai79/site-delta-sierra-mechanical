import Anthropic from '@anthropic-ai/sdk'
import type { Lead, AgentResult } from '../types.js'

const client = new Anthropic()

const FALLBACK_SERVICES: Record<string, string[]> = {
  hvac: ['AC Repair', 'Heating', 'Plumbing', 'Emergency Service', 'Maintenance', 'Installation'],
  roofing: ['Roof Replacement', 'Storm Damage Repair', 'Insurance Claims', 'Emergency Tarping', 'Gutter Installation', 'Free Inspections'],
  dentist: ['Teeth Whitening', 'Preventive Cleanings', 'Dental Implants', 'Invisalign', 'Emergency Dental', 'Cosmetic Dentistry'],
  medspa: ['Botox & Fillers', 'Laser Hair Removal', 'HydraFacial', 'Chemical Peels', 'Microneedling', 'Body Contouring'],
  lawfirm: ['Personal Injury', 'Family Law', 'Criminal Defense', 'Business Law', 'Estate Planning', 'Immigration Law'],
  remodeling: ['Kitchen Remodel', 'Bathroom Renovation', 'Room Additions', 'Flooring', 'Deck & Outdoor', 'Full Home Renovation'],
  cleaning: ['Deep Cleaning', 'Weekly / Bi-Weekly', 'Move In / Move Out', 'Commercial Cleaning', 'Post-Construction', 'Airbnb Turnover'],
  'junk-removal': ['Furniture Removal', 'Appliance Removal', 'Estate Cleanouts', 'Construction Debris', 'Yard Debris', 'Same-Day Service'],
  daycare: ['Infant Care', 'Toddler Program', 'Pre-K Curriculum', 'After-School Care', 'Summer Camp', 'Drop-In Care'],
  'auto-detailing': ['Ceramic Coating', 'Paint Correction', 'Full Detail Package', 'Interior Detail', 'PPF', 'Window Tinting'],
  restaurant: ['Dine In', 'Takeout', 'Catering', 'Private Events', 'Delivery', 'Bar & Drinks'],
  plumbing: ['Drain Cleaning', 'Water Heater', 'Leak Repair', 'Emergency Service', 'Pipe Repair', 'Fixture Install'],
}

export async function runConfigGeneratorAgent(lead: Lead): Promise<AgentResult<Lead>> {
  console.log(`[ConfigGenerator] Generating config for ${lead.name}`)

  const bd = lead.brand_data!
  const services = bd.services?.length ? bd.services : FALLBACK_SERVICES[lead.niche] || []

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 2000,
      system: `You are a local business website configurator. Apply Impeccable design principles:
TYPOGRAPHY: Match font weight to hierarchy — headlines 800-900, subheads 600-700, body 400-500. Never Inter for everything.
COLOR: Use tinted neutrals (warm/cool), not pure grays. Ensure 4.5:1 contrast minimum.
MOTION: Taglines should feel cinematic — short, punchy, present tense. Max 6 words.
ANTI-PATTERNS TO AVOID:
- Taglines that end with "?" or start with "Welcome to"
- Generic "Professional [niche] services" as a tagline
- Service descriptions over 2 sentences
- Trust badges that say "Quality Work" or "Best in Class" (too vague)
- Testimonials under 30 words (too short to feel real)
- Testimonials that sound like marketing copy vs real customers
TRUST BADGES: Be specific — "NATE Certified" beats "Certified", "GAF Master Elite" beats "Licensed"
TESTIMONIALS: Real customer voice, specific detail (time/price/outcome), emotional hook`,
      messages: [
        {
          role: 'user',
          content: `Generate a TypeScript config file for this business website. Return ONLY valid TypeScript code, no markdown fences.

Business data:
${JSON.stringify(bd, null, 2)}

Services: ${services.join(', ')}
Niche: ${lead.niche}

Output this exact file structure:

import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "...",
  tagline: "...",
  phone: "...",
  phoneHref: "tel:+1...",
  email: "...",
  address: "...",
  serviceAreas: ["city1", "city2"],
  license: "...",
  since: "...",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
} as const

export const SERVICES: Service[] = [
  {
    icon: "thermometer",
    title: "...",
    description: "One sentence about this service.",
    badge: "Most Popular",
    emergency: false,
  }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "...", location: "...", text: "...", rating: 5, service: "..." }
]

export const TRUST_BADGES: TrustBadge[] = [
  { icon: "shield-check", text: "Licensed & Insured" },
  { icon: "zap", text: "Same-Day Service" },
  { icon: "star", text: "5-Star Rated" },
  { icon: "clock", text: "24/7 Emergency" }
]

Rules:
- icon must be one of: thermometer, flame, droplets, zap, shield-check, wrench, star, heart, scissors, sparkles, clock
- phone format: (XXX) XXX-XXXX
- phoneHref: tel:+1XXXXXXXXXX (digits only)
- Include 3 services minimum, 6 maximum
- Include 3 testimonials (realistic names and reviews)
- since: year founded as string`,
        },
      ],
    })

    const configContent = response.content[0].type === 'text' ? response.content[0].text : ''

    return {
      success: true,
      data: { ...lead, config_ts: configContent, status: 'config_generated' },
    }
  } catch (e: any) {
    return { success: false, error: e.message }
  }
}
