import { MetadataRoute } from 'next'
import blogData from '@/app/blog/page'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nsgpriyanshu.github.io/creatorsworld/',
      lastModified: new Date('11-10-2024'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://nsgpriyanshu.github.io/creatorsworld/project/project1',
      lastModified: new Date('11-10-2024'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://nsgpriyanshu.github.io/creatorsworld/product/',
      lastModified: new Date('11-10-2024'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://nsgpriyanshu.github.io/creatorsworld/blogs/',
      lastModified: new Date('11-10-2024'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
