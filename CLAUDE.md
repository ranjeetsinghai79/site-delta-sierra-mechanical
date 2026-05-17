# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

AI Employee pipeline for local businesses. Two systems:

1. **Pipeline** — finds businesses with bad websites, scrapes their brand, generates a config, forks a template repo, deploys to Vercel, sends outreach email. Fully automated, zero human steps.
2. **Templates** — 11 niche-specific Next.js sites (hvac, roofing, dentist, medspa, lawfirm, remodeling, cleaning, junk-removal, daycare, auto-detailing, restaurant). Config-driven: swap `src/lib/config.ts` and the site is a different business.

## Commands

```bash
# Pipeline
npm run pipeline:dry          # dry-run (no GitHub/Vercel/email)
npm run pipeline              # live run
npm run check-deps            # check all open source deps for new releases

# Individual template dev servers
npm run dev:hvac
npm run dev:roofing
npm run dev:dentist
# ... dev:<niche> for any of the 11 niches

# Pipeline TypeScript check
cd pipeline && node_modules/.bin/tsc --noEmit

# Start Firecrawl (self-hosted, required for brand-analyst)
./start-firecrawl.sh
```

All commands run from the monorepo root.

## Pipeline Architecture

`pipeline/src/orchestrator.ts` drives 7 sequential agents per lead:

```
lead-hunter   → Google Places API → finds businesses with websites
site-scorer   → PageSpeed API → skips if mobile score ≥ 60 or < 2 issues
brand-analyst → Firecrawl scrape + Claude → extracts BrandData JSON
config-gen    → Claude → generates TypeScript config.ts for the template
builder       → GitHub API → forks ranjeetsinghai79/websitedeveloper, writes templates/<niche>/src/lib/config.ts
deployer      → Vercel API → creates project with rootDirectory=templates/<niche>, polls until READY
outreach      → Resend → sends demo email with live Vercel URL
```

`Lead.status` tracks position: `found → scored → analyzed → config_generated → built → deployed → outreach_sent`. Leads with `status: 'skipped'` had good sites. Every step persists to Supabase.

**Retention agents** (run separately, not in main pipeline loop):
- `seo-agent` — generates sitemap.xml, robots.txt, schema JSON-LD, keyword list
- `gbp-agent` — posts weekly update to Google Business Profile via GMB API
- `reviews-agent` — fetches unanswered Google reviews, posts Claude-generated replies
- `analytics-agent` — queries GSC for 28-day data, emails weekly summary to client
- `leads-agent` — handles contact form submissions → Supabase + Google Sheets + Resend notify
- `video-agent` — Remotion 15s MP4 outreach video (install `@remotion/bundler @remotion/renderer remotion` first)

## Template Architecture

Every template follows the same structure:
```
templates/<niche>/
  src/lib/config.ts          ← THE ONLY FILE that changes per client
  src/app/globals.css        ← @theme block with all CSS vars
  src/components/            ← nav, hero, services, why-us, reviews,
                                service-areas, contact, footer
  src/app/api/leads/route.ts ← POSTs to PIPELINE_API_URL/leads
```

**Design rules:**
- Tailwind v4 with `@theme {}` — ALL colors are CSS vars (`var(--color-*)`) never Tailwind color classes like `bg-green-500`
- Framer Motion: above-fold uses `animate`, below-fold uses `whileInView` + `viewport={{ once: true, margin: "-80px" }}`
- `EASE = [0.25, 0.46, 0.45, 0.94]` used everywhere for cinematic feel
- `next/link` is NOT used — plain `<a>` tags only
- Font weights `font-700`, `font-800`, `font-900` work as Tailwind utilities in v4

**config.ts exports:** `BUSINESS`, `SERVICES`, `TESTIMONIALS`, `TRUST_BADGES` — all template components read only from these.

When adding a new niche template, also update:
- `pipeline/src/types.ts` — add to `PipelineConfig.niche` union
- `pipeline/src/agents/builder.ts` — add to `NICHE_TEMPLATE_DIR`
- `pipeline/src/agents/config-generator.ts` — add fallback services
- `package.json` root — add `dev:<niche>` script

## Key Files

| File | Purpose |
|------|---------|
| `pipeline/src/types.ts` | `Lead`, `BrandData`, `PipelineConfig`, `AgentResult<T>` — all shared types |
| `pipeline/src/orchestrator.ts` | Main pipeline loop, sequential agent chaining |
| `pipeline/src/run.ts` | Entry point, reads env vars into `PipelineConfig` |
| `pipeline/src/db/schema.sql` | Supabase schema — run once to initialize |
| `pipeline/src/scripts/deps-tracker.ts` | Checks 12 tracked open source repos via GitHub API |
| `OPEN_SOURCE_DEPS.md` | Full catalog of all open source tools used |

## Environment Variables

Required in `pipeline/.env` (see `pipeline/.env.example`):

```
ANTHROPIC_API_KEY          # Claude API
GOOGLE_PLACES_API_KEY      # lead discovery + PageSpeed
FIRECRAWL_URL=http://localhost:3002
FIRECRAWL_API_KEY=local    # self-hosted default
GITHUB_TOKEN               # ranjeetsinghai79 classic PAT with repo scope
VERCEL_TOKEN               # ranjeetsinghai79 account
RESEND_API_KEY
SUPABASE_URL / SUPABASE_SERVICE_KEY
GOOGLE_SERVICE_ACCOUNT_JSON  # JSON blob for Sheets + GMB + GSC
GBP_ACCOUNT_ID / GBP_LOCATION_ID
LEADS_SHEET_ID
BUSINESS_OWNER_EMAIL

# Pipeline run config
NICHE=hvac                 # any of the 11 niche values
LOCATION=Tracy, CA
CITY=Tracy
STATE=CA
COUNT=10
DRY_RUN=true
TEMPLATE_OWNER=ranjeetsinghai79
TEMPLATE_REPO=websitedeveloper
DEPLOY_OWNER=ranjeetsinghai79
```

Deployed templates read `BUSINESS_NAME`, `BUSINESS_NICHE`, `PIPELINE_API_URL` from their Vercel project env.

## Google APIs Auth

Sheets, GMB (Google My Business), and GSC all use the same service account. Auth is JWT-based via `crypto.createSign('RSA-SHA256')` — no OAuth flow. Set `GOOGLE_SERVICE_ACCOUNT_JSON` to the full JSON blob from GCP Console → Service Accounts → Keys → JSON.

## Git Remotes

```
origin  → github.com/ranjeetsinghai79/websitedeveloper  (deploy account)
pavan   → github.com/pavankumarharati/websitedeveloper   (personal backup)
```

Push to both: `git push origin main && git push pavan main`

## Firecrawl

Self-hosted Docker at `localhost:3002`. Start with `./start-firecrawl.sh`. Requires Docker Desktop running. Used only by `brand-analyst` agent — if it's down, the agent falls back to Google Places data.
