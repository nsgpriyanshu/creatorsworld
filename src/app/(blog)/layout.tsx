import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Blog`,
  description: "Latest updates, tips, and stories from the team at Creator's World.",
  keywords: [
    "Creator's World Blog",
    'Product Updates',
    'Creator Tips',
    'Platform News',
    'Announcements',
    'Behind the Scenes',
    'Creative Insights',
  ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Blog`,
    description: 'Stay updated with news, tips, and behind-the-scenes insights.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: '/assets/og_blog.png',
        width: 1200,
        height: 630,
        alt: `${process.env.NEXT_PUBLIC_APP_NAME} Blog Open Graph Image`,
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Blog`,
    description: "Read the latest stories, announcements, and insights from Creator's World.",
    site: '@creatorsworld',
    creator: '@creatorsworld',
    images: ['/assets/og_blog.png'],
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
