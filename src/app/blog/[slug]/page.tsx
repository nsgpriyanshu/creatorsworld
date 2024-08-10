import { notFound } from 'next/navigation'
import { getPostBySlug, getPostSlugs, markdownToHtml } from '@/lib/posts'
import BlogPost from '@/components/BlogPost'
import { JSDOM } from 'jsdom'
import DOMPurify from 'dompurify'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map(slug => ({ slug: slug.replace(/\.md$/, '') }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return notFound()
  }

  const dirtyHtml = await markdownToHtml(post.content)

  const window = new JSDOM('').window
  const purify = DOMPurify(window)
  const contentHtml = purify.sanitize(dirtyHtml)

  return <BlogPost post={{ ...post, content: contentHtml }} />
}
