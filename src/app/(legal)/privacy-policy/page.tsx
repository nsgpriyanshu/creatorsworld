import PrivacyPolicy from '@/components/legal/privacy'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Privacy Policy`,
  description: "Privacy Policy for Creator's World",
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Privacy Policy`,
    description: "Privacy Policy for Creator's World",
    images: [
      {
        url: '/assets/og_pp.png',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image',
      },
    ],
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
