import { notFound } from 'next/navigation'
import { getPostBySlug, getPostSlugs, markdownToHtml } from '@/lib/posts'
import BlogPost from '@/components/BlogPost'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map(slug => ({ slug: slug.replace(/\.md$/, '') }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return notFound()
  }
  const contentHtml = await markdownToHtml(post.content)
  return <BlogPost post={{ ...post, content: contentHtml }} />
}
