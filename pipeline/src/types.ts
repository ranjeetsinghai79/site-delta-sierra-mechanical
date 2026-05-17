export interface Lead {
  id?: string
  place_id: string
  name: string
  phone?: string
  email?: string
  website?: string
  address: string
  city: string
  state: string
  niche: string
  site_score?: number
  site_issues?: string[]
  brand_data?: BrandData
  config_ts?: string
  github_repo?: string
  vercel_url?: string
  outreach_sent?: boolean
  outreach_sent_at?: string
  status: LeadStatus
  created_at?: string
}

export type LeadStatus =
  | 'found'
  | 'scored'
  | 'analyzed'
  | 'config_generated'
  | 'built'
  | 'deployed'
  | 'outreach_sent'
  | 'skipped'
  | 'error'

export interface BrandData {
  name: string
  tagline?: string
  phone?: string
  email?: string
  address?: string
  services?: string[]
  colors?: { primary?: string; secondary?: string; accent?: string }
  tone?: string
  unique_selling_points?: string[]
  years_in_business?: number
  license?: string
  service_areas?: string[]
  testimonials?: Array<{ name: string; text: string; rating: number }>
  google_rating?: string
  review_count?: string
}

export interface PipelineConfig {
  niche:
    | 'hvac'
    | 'roofing'
    | 'dentist'
    | 'medspa'
    | 'lawfirm'
    | 'remodeling'
    | 'cleaning'
    | 'junk-removal'
    | 'daycare'
    | 'auto-detailing'
    | 'restaurant'
  location: string
  city: string
  state: string
  count: number
  templateOwner: string
  templateRepo: string
  deployOwner: string
  dryRun?: boolean
}

export interface AgentResult<T> {
  success: boolean
  data?: T
  error?: string
}
