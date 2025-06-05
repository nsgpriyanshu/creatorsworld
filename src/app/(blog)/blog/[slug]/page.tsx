// blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Metadata } from 'next'
import Wrapper from '@/components/global/wrapper'
import AnimationContainer from '@/components/global/animation-container'
import Image from 'next/image'
import { format } from 'date-fns'
import { Blog } from '@/types/blog'
import { MagicCard } from '@/components/ui/magic-card'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const supabase = await createClient()
  const { data: blog } = await supabase
    .from('blogs')
    .select('title, content')
    .eq('slug', params.slug)
    .single()

  if (!blog) return {}

  // Sanitize content for description to avoid XSS in metadata
  const sanitizedContent = DOMPurify.sanitize(blog.content || '', { ALLOWED_TAGS: [] })
  const description = sanitizedContent.slice(0, 150) || 'Read our latest blog post.'

  return {
    title: `${blog.title} | Blog - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    description,
    openGraph: {
      title: blog.title,
      description,
      images: [
        {
          url: '/assets/og_blog.png',
          width: 1200,
          height: 630,
          alt: 'Open Graph Image',
        },
      ],
    },
  }
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient()

  const { data: blog } = await supabase
    .from('blogs')
    .select('*, authors(*)')
    .eq('slug', params.slug)
    .single()

  if (!blog) return notFound()

  // Sanitize and parse content
  const sanitizedContent = DOMPurify.sanitize(blog.content || '', {
    ALLOWED_TAGS: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'a',
      'img',
      'ul',
      'ol',
      'li',
      'strong',
      'em',
      'blockquote',
      'code',
      'pre',
      'span',
      'div',
      'br',
    ],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'class', 'style'],
  })
  const parsedContent = parse(sanitizedContent)

  return (
    <Wrapper className="py-20">
      <MagicCard className="mt-10 rounded-xl p-6 md:p-8">
        <Link
          href="/blog"
          className="text-muted-foreground mb-6 inline-flex items-center gap-2 text-sm font-medium transition hover:text-[#f10a0a]"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to Blogs
        </Link>
        <AnimationContainer animation="fadeUp" className="mx-auto max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-4xl leading-tight font-bold">{blog.title}</h1>
            <p className="text-muted-foreground text-sm">
              Published on {format(new Date(blog.publish_date), 'MMMM dd, yyyy')}
            </p>
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {blog.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </AnimationContainer>

        <div className="mx-auto mt-4 flex max-w-6xl flex-col gap-8 md:flex-row">
          <AnimationContainer animation="fadeUp" className="w-full md:w-[70%] lg:px-24">
            <div>
              {blog.image_url && (
                <div className="my-6">
                  <Image
                    src={blog.image_url}
                    alt={blog.title}
                    width={900}
                    height={500}
                    className="w-full rounded-xl object-cover"
                    priority
                  />
                </div>
              )}

              <article className="prose dark:prose-invert prose-lg max-w-none leading-relaxed">
                {parsedContent}
              </article>
            </div>
          </AnimationContainer>

          <div className="border-border w-full border-t md:w-[30%] md:border-t-0 md:border-l md:pl-6">
            <AnimationContainer animation="fadeUp">
              <div className="flex flex-col items-center space-y-3 text-center">
                {blog.authors?.profile_picture && (
                  <Image
                    src={blog.authors.profile_picture}
                    alt={blog.authors.name}
                    width={96}
                    height={96}
                    className="mt-4 rounded-full"
                  />
                )}
                <div>
                  <p className="text-muted-foreground text-sm">
                    By <span className="text-foreground font-semibold">{blog.authors?.name}</span>
                    {blog.authors?.role && (
                      <>
                        , <span className="text-muted-foreground">{blog.authors.role}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </AnimationContainer>
          </div>
        </div>
      </MagicCard>
    </Wrapper>
  )
}
