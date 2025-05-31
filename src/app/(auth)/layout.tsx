import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Authentication`,
  description: 'Sign in / Sign up - to access your account',
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Authentication`,
    description: 'Sign in / Sign up - to access your account',
    images: [
      {
        url: '/assets/og_main.png',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image',
      },
    ],
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
