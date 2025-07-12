import PrivacyPolicy from '@/components/legal/privacy'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Privacy Policy`,
  description:
    "Privacy Policy for Creator's World. Learn how we collect, use, and protect your data.",
  keywords: [
    'Privacy Policy',
    'Data Protection',
    'User Privacy',
    'Data Collection',
    'Security Policy',
    "Creator's World Privacy",
  ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Privacy Policy`,
    description:
      "Privacy Policy for Creator's World. Learn how we collect, use, and protect your data.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: '/assets/og_pp.png',
        width: 1200,
        height: 630,
        alt: "Privacy Policy – Creator's World",
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Privacy Policy`,
    description:
      "Learn how Creator's World handles your personal information and protects your privacy.",
    site: '@creatorsworld',
    creator: '@creatorsworld',
    images: ['/assets/og_pp.png'],
  },
}

const PrivacyPolicyPage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <PrivacyPolicy />
      </section>
    </div>
  )
}

export default PrivacyPolicyPage
