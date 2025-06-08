import Brand from '@/components/legal/brand'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Brand`,
  description: "Brand guidelines and assets for Creator's World",
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Brand`,
    description: "Brand guidelines and assets for Creator's World",
    images: [
      {
        url: '/assets/og_bg.png',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image',
      },
    ],
  },
}

const BrandPage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <Brand />
      </section>
    </div>
  )
}

export default BrandPage
