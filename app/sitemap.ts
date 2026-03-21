import { MetadataRoute } from 'next'
import { NAV_CONTENT } from '@/lib/navConst'
import { supabase } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.teams24.co'
  const careersUrl = 'https://careers.teams24.co'

  // 1. Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]

  // 2. Hire Routes (from NAV_CONTENT)
  // We slugify tags like the navbar does: .toLowerCase().replace(/ /g, "-")
  const hireRoutes: MetadataRoute.Sitemap = NAV_CONTENT.companies.tags.map((tag) => ({
    url: `${baseUrl}/hire/${tag.toLowerCase().replace(/ /g, "-")}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // 3. Career Routes (from Supabase jobs table)
  let careerRoutes: MetadataRoute.Sitemap = []
  try {
    const { data: jobs } = await supabase
      .from('jobs')
      .select('slug')
      .eq('status', 'published')

    if (jobs) {
      careerRoutes = jobs.map((job) => ({
        url: `${careersUrl}/${job.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
    }
  } catch (error) {
    console.error('Error fetching jobs for sitemap:', error)
  }

  return [...staticRoutes, ...hireRoutes, ...careerRoutes]
}
