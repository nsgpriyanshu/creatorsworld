import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Products`,
  description: "All products from Creator's World",
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Products`,
    description: "All products from Creator's World",
    images: [
      {
        url: '/assets/og_product.png',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image',
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
