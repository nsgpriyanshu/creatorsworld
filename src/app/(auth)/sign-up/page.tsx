import SignUpPage from '@/components/auth/signup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Sign Up`,
  description:
    "Create your Creator's World account to publish apps, access tools, and join our creator community.",
  keywords: [
    'Sign Up',
    'Register',
    'Create Account',
    "Join Creator's World",
    'New User',
    'User Registration',
  ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Sign Up`,
    description:
      "Create your Creator's World account to publish apps, access tools, and join our creator community.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/signup`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: '/assets/og_signup.png',
        width: 1200,
        height: 630,
        alt: "Sign Up – Creator's World",
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Sign Up`,
    description:
      "Join Creator's World and start building, sharing, and growing your apps with our community.",
    site: '@creatorsworld',
    creator: '@creatorsworld',
    images: ['/assets/og_signup.png'],
  },
}

const SignUp = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <SignUpPage />
      </section>
    </div>
  )
}

export default SignUp
