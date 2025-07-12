import About from '@/components/legal/about'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - About`,
  description:
    "Discover the origin, mission, and evolution of Creator's World — the platform built for creators, by creators.",
  keywords: [
    "About Creator's World",
    "Creator's World Story",
    'Platform Origin',
    'Mission Statement',
    "Team Behind Creator's World",
    'Startup Journey',
    'Creator Platform History',
  ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - About`,
    description:
      "Discover the origin, mission, and evolution of Creator's World — the platform built for creators, by creators.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: '/assets/og_as.png',
        width: 1200,
        height: 630,
        alt: "About Us – Creator's World",
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - About`,
    description:
      "Learn the story behind Creator's World and meet the team shaping the future for creators.",
    site: '@creatorsworld',
    creator: '@creatorsworld',
    images: ['/assets/og_as.png'],
  },
}

const AboutUsPage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <About />
      </section>
    </div>
  )
}

export default AboutUsPage
