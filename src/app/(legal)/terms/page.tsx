import TermsOfService from '@/components/legal/terms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Terms of Service`,
  description: "Terms of Service for Creator's World",
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Terms of Service`,
    description: "Terms of Service for Creator's World",
    images: [
      {
        url: '/assets/og_tos.png',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image',
      },
    ],
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
