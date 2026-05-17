import { createRepoFromTemplate, updateFile } from '../tools/github.js'
import type { Lead, PipelineConfig, AgentResult } from '../types.js'

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40)
}

const NICHE_TEMPLATE_DIR: Record<string, string> = {
  hvac: 'templates/hvac',
  roofing: 'templates/roofing',
  dentist: 'templates/dentist',
  medspa: 'templates/medspa',
  lawfirm: 'templates/lawfirm',
  remodeling: 'templates/remodeling',
  cleaning: 'templates/cleaning',
  'junk-removal': 'templates/junk-removal',
  daycare: 'templates/daycare',
  'auto-detailing': 'templates/auto-detailing',
  restaurant: 'templates/restaurant',
}

export async function runBuilderAgent(
  lead: Lead,
  config: PipelineConfig
): Promise<AgentResult<Lead>> {
  console.log(`[Builder] Creating repo for ${lead.name}`)

  const repoName = `site-${slugify(lead.name)}`
  const templateDir = NICHE_TEMPLATE_DIR[config.niche] || `templates/${config.niche}`
  const configPath = `${templateDir}/src/lib/config.ts`

  try {
    const repo = await createRepoFromTemplate({
      templateOwner: config.templateOwner,
      templateRepo: config.templateRepo,
      newOwner: config.deployOwner,
      newRepoName: repoName,
    })

    if (!repo) return { success: false, error: 'Failed to create repo from template' }

    const updated = await updateFile({
      owner: config.deployOwner,
      repo: repoName,
      path: configPath,
      content: lead.config_ts!,
      message: `Configure for ${lead.name}`,
    })

    if (!updated) return { success: false, error: `Failed to update ${configPath}` }

    return {
      success: true,
      data: {
        ...lead,
        github_repo: repo.html_url,
        status: 'built',
        // Store templateDir so deployer knows which rootDirectory to set
        brand_data: { ...lead.brand_data!, _templateDir: templateDir } as any,
      },
    }
  } catch (e: any) {
    return { success: false, error: e.message }
  }
}
