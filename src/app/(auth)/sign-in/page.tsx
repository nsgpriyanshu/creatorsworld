import SignInPage from '@/components/auth/signin'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Sign In`,
  description:
    "Sign in to your Creator's World account to access your dashboard, apps, and settings.",
  keywords: [
    'Sign In',
    'Login',
    'User Authentication',
    'Access Account',
    "Creator's World Sign In",
    'User Login',
  ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Sign In`,
    description:
      "Sign in to your Creator's World account to access your dashboard, apps, and settings.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/signin`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: '/assets/og_signin.png',
        width: 1200,
        height: 630,
        alt: "Sign In – Creator's World",
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Sign In`,
    description: "Log in to manage your Creator's World account, apps, and submissions.",
    site: '@creatorsworld',
    creator: '@creatorsworld',
    images: ['/assets/og_signin.png'],
  },
}

const SignIn = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <SignInPage />
      </section>
    </div>
  )
}

export default SignIn
