export type SiteConfig = typeof siteConfig

export const siteConfig = {
  siteName: 'Creators World',
  siteDescription:
    "It's the world's largest Discord app hub. It's also the place where creators collaborate and innovate new ways.",
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Products',
      href: '/products',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
  ],
  navMenuItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Products',
      href: '/products',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
  ],
  links: {
    discord: 'https://discord.com',
    twitter: 'https://twitter.com/nsgpriyanshu',
    siteUrl: 'https://nsgpriyanshu.github.io/creatorsworld/',
    ogImage: 'https://nsgpriyanshu.github.io/creatorsworld/preview.png', // Predefined paths
    twitterImage: 'https://nsgpriyanshu.github.io/creatorsworld/preview.png',
  },
}
