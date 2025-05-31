import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Blog`,
  description: 'Latest updates, tips, and stories from our team.',
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Blog`,
    description: 'Stay updated with news, tips, and behind-the-scenes insights.',
    images: [
      {
        url: '/assets/og_blog.png',
        width: 1200,
        height: 630,
        alt: `${process.env.NEXT_PUBLIC_APP_NAME} Blog Open Graph Image`,
      },
    ],
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
