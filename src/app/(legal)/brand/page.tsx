import Brand from '@/components/legal/brand'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Brand`,
  description:
    "Brand guidelines and downloadable assets for Creator's World. Learn how to use our logo, colors, and more.",
  keywords: [
    'Brand Guidelines',
    "Creator's World Brand",
    'Logo Usage',
    'Brand Assets',
    'Media Kit',
    'Design System',
    'Visual Identity',
  ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Brand`,
    description:
      "Brand guidelines and downloadable assets for Creator's World. Learn how to use our logo, colors, and more.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/brand`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: '/assets/og_bg.png',
        width: 1200,
        height: 630,
        alt: "Brand Assets – Creator's World",
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Brand`,
    description: "Download Creator's World brand assets and explore our official visual identity.",
    site: '@creatorsworld',
    creator: '@creatorsworld',
    images: ['/assets/og_bg.png'],
  },
}

const BrandPage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <Brand />
      </section>
    </div>
  )
}

export default BrandPage
