import NotFound from '@/components/global/not-found'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Not Found`,
  description: "Page not found - Creator's World",
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Not Found`,
    description: "Page not found - Creator's World",
    images: [
      {
        url: '/assets/og_nf.png',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image',
      },
    ],
  },
}

const NotFoundPage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <NotFound />
      </section>
    </div>
  )
}

export default NotFoundPage
