// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Metadata } from 'next'
import Wrapper from '@/components/global/wrapper'
import AnimationContainer from '@/components/global/animation-container'
import Image from 'next/image'
import { format } from 'date-fns'
import { Blog } from '@/types/blog'

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

  return {
    title: `${blog.title} | Blog - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: blog.content?.slice(0, 150) || 'Read our latest blog post.',
    openGraph: {
      title: blog.title,
      description: blog.content?.slice(0, 150) || '',
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

  return (
    <Wrapper className="py-16">
      <AnimationContainer animation="fadeUp" className="mx-auto max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-4xl leading-tight font-bold">{blog.title}</h1>
          <p className="text-muted-foreground text-sm">
            By <span className="font-medium">{blog.authors?.name}</span> on{' '}
            {format(new Date(blog.publish_date), 'MMMM dd, yyyy')}
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

          {blog.image_url && (
            <div className="my-6">
              <Image
                src={blog.image_url}
                alt={blog.title}
                width={900}
                height={500}
                className="rounded-xl object-cover"
              />
            </div>
          )}

          <article
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </AnimationContainer>
    </Wrapper>
  )
}
