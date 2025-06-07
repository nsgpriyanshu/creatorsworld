import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// Base URL from environment variable with strict validation
const SITE_URL = (() => {
  const url = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '')
  if (!url || !/^https?:\/\//.test(url)) {
    throw new Error('Missing or invalid NEXT_PUBLIC_BASE_URL')
  }
  return url
})()

// Static pages with metadata
const staticPages = [
  { path: '', changefreq: 'monthly', priority: 1.0 },
  { path: 'sign-up', changefreq: 'monthly', priority: 0.8 },
  { path: 'sign-in', changefreq: 'monthly', priority: 0.8 },
  { path: 'contact', changefreq: 'monthly', priority: 0.7 },
  { path: 'product', changefreq: 'monthly', priority: 0.5 },
  { path: 'blog', changefreq: 'weekly', priority: 0.6 },
]

export async function GET() {
  try {
    const supabase = createClient()

    // Example dynamic page fetch (commented; implement as needed)
    let dynamicPages: { path: string; lastmod: string }[] = []
    /*
    const { data: bots, error } = await supabase
      .from('bots')
      .select('slug, updated_at')
      .eq('published', true);

    if (bots) {
      dynamicPages = bots.map(bot => ({
        path: `bots/${bot.slug}`,
        lastmod: new Date(bot.updated_at).toISOString().split('T')[0],
      }));
    }
    */

    // Today's date as fallback
    const today = new Date().toISOString().split('T')[0]

    // Merge static and dynamic entries
    const allPages = [
      ...staticPages.map(page => ({
        loc: `${SITE_URL}/${page.path}`,
        lastmod: today,
        changefreq: page.changefreq,
        priority: page.priority,
      })),
      ...dynamicPages.map(page => ({
        loc: `${SITE_URL}/${page.path}`,
        lastmod: page.lastmod || today,
        changefreq: 'weekly' as const,
        priority: 0.6,
      })),
    ]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(page =>
    `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`.trim(),
  )
  .join('\n')}
</urlset>`

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return new NextResponse(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" />`,
      {
        status: 500,
        headers: { 'Content-Type': 'application/xml' },
      },
    )
  }
}
