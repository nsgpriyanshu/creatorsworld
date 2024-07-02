import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Providers } from './providers'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const siteName = 'Creators World'
const siteDescription =
  "It's the world's largest Discord app hub. It's also the place where creators collaborate and innovate new ways."
const twitter = 'https://twitter.com/nsgpriyanshu'
const siteUrl = 'https://nsgpriyanshu.github.io/creatorsworld/'
const ogImage = `${siteUrl}og-image.jpg`
const twitterImage = `${siteUrl}twitter-image.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description: siteDescription,
  keywords: ['Discord', 'app hub', 'creators', 'collaboration', 'innovation'],
  creator: 'nsgpriyanshu',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    type: 'website',
    locale: 'en_US',
    siteName: siteName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteName} Open Graph Image`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: twitterImage,
        alt: `${siteName} Twitter Image`,
      },
    ],
    site: twitter,
    creator: twitter,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href={siteUrl} />
        <meta name="robots" content="noindex, follow, nocache" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="relative flex w-full items-center">
            <Navbar />
          </div>
          {children}
          <footer className="flex w-full items-center justify-center py-3">
            <Link
              className="flex items-center gap-1 text-current"
              href="https://discord.gg/VUMVuArkst"
              title="nextui.org homepage"
            >
              <span className="text-default-600">Developed by</span>
              <p className="text-primary">@nsgpriyanshu</p>
            </Link>
          </footer>
        </Providers>
      </body>
    </html>
  )
}