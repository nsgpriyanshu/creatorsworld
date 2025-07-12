import TermsOfService from '@/components/legal/terms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Terms of Service`,
  description:
    "Terms of Service for Creator's World. Learn the rules and conditions for using our platform.",
  keywords: [
    'Terms of Service',
    "Creator's World Terms",
    'User Agreement',
    'Platform Rules',
    'Legal',
    'Usage Policy',
    'TOS',
  ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Terms of Service`,
    description:
      "Terms of Service for Creator's World. Learn the rules and conditions for using our platform.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/terms-of-service`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: '/assets/og_tos.png',
        width: 1200,
        height: 630,
        alt: "Terms of Service – Creator's World",
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Terms of Service`,
    description: "Read the Terms of Service that govern your use of Creator's World.",
    site: '@creatorsworld',
    creator: '@creatorsworld',
    images: ['/assets/og_tos.png'],
  },
}

const TermsPage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <TermsOfService />
      </section>
    </div>
  )
}

export default TermsPage
