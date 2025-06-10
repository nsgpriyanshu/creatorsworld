import { NextResponse } from 'next/server'

// Base URL from environment variable with validation
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://creatorsworld.vercel.app/'

export async function GET() {
  try {
    // Define robots.txt content
    const robotsContent = `
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /auth/
Sitemap: ${SITE_URL}/sitemap.xml
`.trim()

    return new NextResponse(robotsContent, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200', // Cache for 1 hour, revalidate for 2 hours
      },
    })
  } catch (error) {
    console.error('Error generating robots.txt:', error)
    // Return a minimal robots.txt to avoid breaking crawlers
    return new NextResponse(
      `
User-agent: *
Disallow: /
      `.trim(),
      {
        status: 500,
        headers: { 'Content-Type': 'text/plain' },
      },
    )
  }
}
