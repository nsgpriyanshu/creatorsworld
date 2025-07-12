import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Legal`,
  description: "Privacy Policy and Terms of Service for Creator's World",
  keywords: [
    'Privacy Policy',
    'Terms of Service',
    'Legal',
    'Data Policy',
    "Creator's World Legal",
    'User Agreement',
    'Content Guidelines',
  ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Legal`,
    description:
      "Review our Privacy Policy and Terms of Service to understand your rights and responsibilities on Creator's World.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/legal`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Legal`,
    description: "Privacy Policy and Terms of Service for Creator's World",
    site: '@creatorsworld',
    creator: '@creatorsworld',
  },
}

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative w-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
