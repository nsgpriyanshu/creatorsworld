import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Products`,
  description: "Explore a curated collection of creative products from Creator's World.",
  keywords: [
    'Creator',
    "Creator's World",
    'Products',
    'Digital Products',
    'Creative Marketplace',
    'Download Assets',
    'Creative Tools',
  ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Products`,
    description: "Explore a curated collection of creative products from Creator's World.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/products`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: '/assets/og_product.png',
        width: 1200,
        height: 630,
        alt: "Product Showcase – Creator's World",
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Products`,
    description: "Discover and download premium creative products from Creator's World.",
    site: '@creatorsworld',
    creator: '@creatorsworld',
    images: ['/assets/og_product.png'],
  },
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative w-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
