import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - World's largest discord app hub`,
  description: 'World&apos;s largest discord app hub',
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
