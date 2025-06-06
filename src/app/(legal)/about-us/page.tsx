import About from '@/components/legal/about'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - About`,
  description: "Origin and backstory of Creator's World",
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - About`,
    description: "Origin and backstory of Creator's World",
    images: [
      {
        url: '/assets/og_as.png',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image',
      },
    ],
  },
}

const AboutUsPage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <About />
      </section>
    </div>
  )
}

export default AboutUsPage
