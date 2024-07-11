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
const ogImage = `${siteUrl}assets/preview.png`
const twitterImage = `${siteUrl}assets/preview.png`

export const metadata: Metadata = {
  metadataBase: new URL('https://nsgpriyanshu.github.io/creatorsworld/'),
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description: siteDescription,
  keywords: 'Discord, app hub, creators, collaboration, innovation, app',
  creator: 'nsgpriyanshu',
  icons: {
    icon: './favicon.ico',
    apple: './logo.svg',
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
        alt: siteName,
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
        alt: siteName,
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
        <meta name="robots" content="index, follow, nocache" />
        <link rel="canonical" href={siteUrl} />
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
              title="Creators World"
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