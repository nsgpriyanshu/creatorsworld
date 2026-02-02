import { notFound } from 'next/navigation'
import BlogContent from '../../../components/blog/content'
import BlogPostHeader from '../../../components/blog/post-header'
import { getPostBySlug } from '../../../lib/db/queries'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <BlogPostHeader post={post} />
      <BlogContent blocks={post.content} />
    </>
  )
}
