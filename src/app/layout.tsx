import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Providers } from './providers'
import Link from 'next/link'
import { siteConfig } from '@/config/siteconfig'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.links.siteUrl),
  title: {
    default: siteConfig.siteName,
    template: `%s - ${siteConfig.siteName}`,
  },
  description: siteConfig.siteDescription,
  keywords: 'Discord, app hub, creators, collaboration, innovation',
  creator: 'nsgpriyanshu',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.svg',
  },
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    url: siteConfig.links.siteUrl,
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.links.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    images: [
      {
        url: siteConfig.links.twitterImage,
        alt: siteConfig.siteName,
      },
    ],
    site: siteConfig.links.twitter,
    creator: siteConfig.links.twitter,
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
        <meta property="og:image" content={siteConfig.links.ogImage} />
        <meta property="og:site_name" content={siteConfig.siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteConfig.links.twitter} />
        <meta name="twitter:creator" content={siteConfig.links.twitter} />
        <meta name="twitter:title" content={siteConfig.siteName} />
        <meta name="twitter:description" content={siteConfig.siteDescription} />
        <meta name="twitter:image" content={siteConfig.links.twitterImage} />
        <link rel="canonical" href={siteConfig.links.siteUrl} />
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
