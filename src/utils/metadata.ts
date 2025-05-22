import { Metadata } from 'next'

const siteConfig = {
  siteName: `${process.env.NEXT_PUBLIC_APP_NAME}`,
  siteDescription:
    'The ultimate destination for creators to showcase their work, connect with like-minded individuals, and explore a world of creativity. Join us today and unleash your creative potential!',
  links: {
    discord: 'https://discord.gg/VUMVuArkst',
    twitter: '@nsgpriyanshu',
    siteUrl: 'https://nsgpriyanshu.github.io/creatorsworld/',
    ogImage: 'https://nsgpriyanshu.github.io/creatorsworld/assets/previewv.png',
    twitterImage: 'https://nsgpriyanshu.github.io/creatorsworld/assets/previewv.png',
  },
}

export const generateMetadata = ({
  title = `${siteConfig.siteName} - Home`,
  description = siteConfig.siteDescription,
  icons = [
    {
      rel: 'apple-touch-icon',
      sizes: '32x32',
      url: '/icons/cwfavicon_dark.ico',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      url: '/icons/cwfavicon_dark.ico',
    },
  ],
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string | null
  icons?: Metadata['icons']
  noIndex?: boolean
} = {}): Metadata => ({
  title,
  description,
  icons,
  ...(noIndex && { robots: { index: false, follow: false } }),

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
})
