import { deployRepo } from '../tools/vercel.js'
import type { Lead, AgentResult } from '../types.js'

export async function runDeployerAgent(lead: Lead): Promise<AgentResult<Lead>> {
  if (!lead.github_repo) return { success: false, error: 'No GitHub repo' }

  console.log(`[Deployer] Deploying ${lead.name} to Vercel`)

  // Extract owner/repo from github_repo URL
  const match = lead.github_repo.match(/github\.com\/([^/]+)\/([^/]+)/)
  if (!match) return { success: false, error: 'Cannot parse GitHub repo URL' }

  const [, repoOwner, repoName] = match
  const projectName = repoName.replace(/\./g, '-')

  const rootDirectory = (lead.brand_data as any)?._templateDir as string | undefined

  try {
    const result = await deployRepo({ repoOwner, repoName, projectName, rootDirectory })

    if (!result) return { success: false, error: 'Vercel deployment failed' }

    return {
      success: true,
      data: { ...lead, vercel_url: result.url, status: 'deployed' },
    }
  } catch (e: any) {
    return { success: false, error: e.message }
  }
}
