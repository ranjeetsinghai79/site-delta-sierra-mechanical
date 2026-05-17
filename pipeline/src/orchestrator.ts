import { runLeadHunterAgent } from './agents/lead-hunter.js'
import { runSiteScorerAgent } from './agents/site-scorer.js'
import { runBrandAnalystAgent } from './agents/brand-analyst.js'
import { runConfigGeneratorAgent } from './agents/config-generator.js'
import { runBuilderAgent } from './agents/builder.js'
import { runDeployerAgent } from './agents/deployer.js'
import { runOutreachAgent } from './agents/outreach.js'
import { saveLead, updateLead } from './db/supabase.js'
import type { PipelineConfig, Lead } from './types.js'

export async function runPipeline(config: PipelineConfig) {
  console.log(`\n=== AI Pipeline Starting ===`)
  console.log(`Niche: ${config.niche} | Location: ${config.location}`)
  console.log(`Target: ${config.count} leads | Dry run: ${config.dryRun ?? false}\n`)

  // Step 1: Find leads
  const leadResult = await runLeadHunterAgent(config)
  if (!leadResult.success || !leadResult.data?.length) {
    console.error('Lead hunting failed:', leadResult.error)
    return
  }

  const leads = leadResult.data
  console.log(`Found ${leads.length} leads\n`)

  const summary = { processed: 0, skipped: 0, deployed: 0, outreached: 0, errors: 0 }

  for (const rawLead of leads) {
    console.log(`\n→ ${rawLead.name} | ${rawLead.website}`)
    let lead: Lead = rawLead
    summary.processed++

    try {
      // Persist to DB
      const saved = await saveLead(lead)
      if (saved?.id) lead = { ...lead, id: saved.id }

      // Step 2: Score site
      const scoreResult = await runSiteScorerAgent(lead)
      if (!scoreResult.success) {
        console.log(`  [!] Score failed: ${scoreResult.error}`)
        summary.errors++
        continue
      }
      lead = scoreResult.data!
      await updateLead(lead)

      if (lead.status === 'skipped') {
        console.log(`  [skip] Site score OK (${lead.site_score}/100)`)
        summary.skipped++
        continue
      }

      console.log(`  Score: ${lead.site_score}/100 — ${lead.site_issues?.join(', ')}`)

      // Step 3: Analyze brand
      const analyzeResult = await runBrandAnalystAgent(lead)
      if (!analyzeResult.success) {
        console.log(`  [!] Brand analysis failed: ${analyzeResult.error}`)
        summary.errors++
        continue
      }
      lead = analyzeResult.data!
      await updateLead(lead)
      console.log(`  Brand analyzed: ${lead.brand_data?.name}`)

      // Step 4: Generate config
      const configResult = await runConfigGeneratorAgent(lead)
      if (!configResult.success) {
        console.log(`  [!] Config generation failed: ${configResult.error}`)
        summary.errors++
        continue
      }
      lead = configResult.data!
      await updateLead(lead)
      console.log(`  Config generated (${lead.config_ts?.length} chars)`)

      if (config.dryRun) {
        console.log(`  [DRY RUN] Skipping build/deploy/outreach`)
        console.log(`  Config preview:\n${lead.config_ts?.slice(0, 300)}...\n`)
        continue
      }

      // Step 5: Build (GitHub fork + update config)
      const buildResult = await runBuilderAgent(lead, config)
      if (!buildResult.success) {
        console.log(`  [!] Build failed: ${buildResult.error}`)
        summary.errors++
        continue
      }
      lead = buildResult.data!
      await updateLead(lead)
      console.log(`  Repo: ${lead.github_repo}`)

      // Step 6: Deploy to Vercel
      const deployResult = await runDeployerAgent(lead)
      if (!deployResult.success) {
        console.log(`  [!] Deploy failed: ${deployResult.error}`)
        summary.errors++
        continue
      }
      lead = deployResult.data!
      await updateLead(lead)
      console.log(`  LIVE: ${lead.vercel_url}`)
      summary.deployed++

      // Step 7: Outreach
      if (lead.email) {
        const outreachResult = await runOutreachAgent(lead)
        if (outreachResult.success) {
          lead = outreachResult.data!
          await updateLead(lead)
          console.log(`  Email sent to ${lead.email}`)
          summary.outreached++
        } else {
          console.log(`  [!] Outreach failed: ${outreachResult.error}`)
        }
      } else {
        console.log(`  No email — manual outreach needed for ${lead.vercel_url}`)
      }
    } catch (e: any) {
      console.error(`  [ERROR] ${lead.name}:`, e.message)
      await updateLead({ ...lead, status: 'error' })
      summary.errors++
    }
  }

  console.log('\n=== Pipeline Complete ===')
  console.log(`Processed: ${summary.processed}`)
  console.log(`Skipped (good sites): ${summary.skipped}`)
  console.log(`Deployed: ${summary.deployed}`)
  console.log(`Emails sent: ${summary.outreached}`)
  console.log(`Errors: ${summary.errors}`)
}
