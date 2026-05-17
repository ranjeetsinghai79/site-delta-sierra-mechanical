# Open Source Dependencies

All open source tools used in WebsiteDeveloper. Check daily: `npm run check-deps --workspace=pipeline`

## Pipeline

| Tool | Repo | Purpose | Status |
|------|------|---------|--------|
| **Firecrawl** | [firecrawl/firecrawl](https://github.com/mendableai/firecrawl) | Web scraping for brand analysis | Self-hosted @ localhost:3002 |
| **Anthropic SDK** | [anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) | Claude API (claude-sonnet-4-6) | npm |
| **Supabase JS** | [supabase/supabase-js](https://github.com/supabase/supabase-js) | Lead database | npm |
| **Resend** | [resend/resend-node](https://github.com/resend/resend-node) | Outreach + lead notification emails | npm |
| **Remotion** | [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | Programmatic video for outreach | install when ready |
| **tsx** | [privatenumber/tsx](https://github.com/privatenumber/tsx) | TypeScript runner (dev) | npm |

## Templates (all 10 niches)

| Tool | Repo | Purpose |
|------|------|---------|
| **Next.js** | [vercel/next.js](https://github.com/vercel/next.js) | App framework (v16) |
| **Framer Motion** | [framer/motion](https://github.com/framer/motion) | Cinematic scroll animations |
| **Tailwind CSS v4** | [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) | Utility CSS with @theme |
| **Lucide React** | [lucide-icons/lucide](https://github.com/lucide-icons/lucide) | SVG icon set |

## Design System

| Tool | Repo | Purpose |
|------|------|---------|
| **Impeccable** | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | AI design vocabulary — anti-patterns, typography, color, motion references |

## Client Sites (deployed)

| Tool | Repo | Purpose |
|------|------|---------|
| **PostHog** | [PostHog/posthog](https://github.com/PostHog/posthog) | Analytics snippet on deployed client sites |

## Infrastructure

| Service | Purpose |
|---------|---------|
| **Vercel** | Deploy client sites |
| **GitHub API** | Fork template repos per client |
| **Google Places API** | Find leads |
| **Google My Business API** | GBP management |
| **Google Search Console API** | Weekly SEO analytics |
| **Google Sheets API** | Lead capture rows |

---

## Daily Check

```bash
cd /Users/pavanharati/Documents/WebsiteDeveloper
npm run check-deps --workspace=pipeline
```

Output: latest release tags + breaking change warnings for all tracked repos.
