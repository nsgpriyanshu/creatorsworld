import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Authentication`,
  description:
    "Sign in or sign up to access your Creator's World account and manage your apps, assets, and settings.",
  keywords: [
    'Sign in',
    'Sign up',
    'Authentication',
    'Login',
    'Register',
    "Creator's World Account",
    'User Access',
  ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Authentication`,
    description:
      "Sign in or sign up to access your Creator's World account and manage your apps, assets, and settings.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/auth`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Authentication`,
    description:
      "Access your Creator's World account to manage your profile, submissions, and more.",
    site: '@creatorsworld',
    creator: '@creatorsworld',
  },
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative w-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
