import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Contact`,
  description:
    "Get in touch with the team at Creator's World. We're here to help with inquiries, support, and collaborations.",
  keywords: [
    "Contact Creator's World",
    'Support',
    'Customer Service',
    'Creator Help',
    'Contact Page',
    'Get in Touch',
    'Help Center',
  ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Contact`,
    description:
      "Get in touch with the team at Creator's World. We're here to help with inquiries, support, and collaborations.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: '/assets/og_contact.png',
        width: 1200,
        height: 630,
        alt: "Contact Us – Creator's World",
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Contact`,
    description:
      "Reach out to Creator's World for support, questions, or partnership opportunities.",
    site: '@creatorsworld',
    creator: '@creatorsworld',
    images: ['/assets/og_contact.png'],
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
