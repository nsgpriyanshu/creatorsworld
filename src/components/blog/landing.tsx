'use client'

import AnimationContainer from '@/components/global/animation-container'
import Wrapper from '@/components/global/wrapper'
import { Input } from '@/components/ui/input'
import { Blog } from '@/types/blog'
import { createClient } from '@supabase/supabase-js'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import SectionBadge from '@/components/ui/section-badge'
import { MagicCard } from '@/components/ui/magic-card'
import { Particles } from '@/components/ui/particles'
import { useTheme } from 'next-themes'

const BlogPage: React.FC = () => {
  const { resolvedTheme } = useTheme()
  const [particleColor, setParticleColor] = useState('#ffffff')

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  )
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([])
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*, author:author_id(*)') // alias here is 'author', singular
        .order('publish_date', { ascending: false })

      if (!error && data) {
        setBlogs(data)
        setFilteredBlogs(data)
      } else {
        console.error('Error fetching blogs:', error)
      }
    }

    fetchBlogs()
  }, [])

  useEffect(() => {
    let results = blogs
    if (search) {
      results = results.filter(
        b =>
          b.title.toLowerCase().includes(search.toLowerCase()) ||
          JSON.stringify(b.content).toLowerCase().includes(search.toLowerCase()),
      )
    }
    if (activeTag) {
      results = results.filter(b => b.tags?.includes(activeTag))
    }
    setFilteredBlogs(results)
  }, [search, activeTag, blogs])

  useEffect(() => {
    setParticleColor(resolvedTheme === 'dark' ? '#ffffff' : '#333333')
  }, [resolvedTheme])

  const uniqueTags = Array.from(new Set(blogs.flatMap(b => b.tags || [])))

  return (
    <Wrapper className="relative min-h-screen py-20 lg:py-32">
      {/* Header Section */}
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="Creator's Blogs" />
        </AnimationContainer>
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h1 className="from-foreground bg-gradient-to-b to-neutral-400 bg-clip-text text-3xl !leading-tight font-medium text-transparent md:text-4xl lg:text-5xl">
            Explore the Creator&apos;s Universe
          </h1>
        </AnimationContainer>
        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-base lg:text-lg">
            Dive into a vibrant collection of articles, tips, and stories crafted by our community
            of creators. Discover inspiration, learn new techniques, and stay updated with the
            latest trends in the Creator&apos;s Worlds.
          </p>
        </AnimationContainer>
      </div>

      {/* Search and Tags */}
      <AnimationContainer animation="fadeUp" delay={0.5}>
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4">
          <Input
            placeholder="Search for inspiration..."
            className="w-full rounded-lg border border-white/20 bg-black/10 p-3 text-sm backdrop-blur-md md:text-base"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="flex flex-wrap justify-center gap-2">
            {uniqueTags.map(tag => (
              <Badge
                key={tag}
                variant={tag === activeTag ? 'default' : 'outline'}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className="cursor-pointer rounded-lg px-3 py-1 text-xs transition-all duration-200 hover:bg-[#f10a0a] hover:text-white md:text-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </AnimationContainer>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog, index) => (
          <AnimationContainer key={blog.id} animation="fadeUp" delay={0.2 * ((index % 3) + 1)}>
            <MagicCard className="relative min-h-[400px] overflow-hidden rounded-2xl border border-white/20 bg-[#191919] backdrop-blur-lg">
              <Particles color={particleColor} className="absolute inset-0 z-0" />
              <Link
                href={`/blog/${blog.slug}`}
                className="group relative z-10 flex h-full flex-col p-5"
              >
                <div className="mb-4 h-48 w-full overflow-hidden rounded-xl">
                  <Image
                    src={`/storage/v1/object/public/blog-images/covers/${blog.slug}.png`}
                    alt={blog.title}
                    width={400}
                    height={200}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 line-clamp-2 text-xl font-medium md:text-2xl">{blog.title}</h3>
                <p className="text-muted-foreground line-clamp-3 text-sm md:text-base">
                  {/* Strip HTML tags if content is stored as JSON string */}
                  {typeof blog.content === 'string'
                    ? blog.content.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...'
                    : JSON.stringify(blog.content).slice(0, 150) + '...'}
                </p>
                {/* Author Info */}
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src={blog.author?.profile_picture || '/assets/default-avatar.png'}
                    alt={blog.author?.name || 'Author'}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-foreground text-sm font-semibold">
                      {blog.author?.name || 'Unknown Author'}
                    </span>
                    {blog.author?.role && (
                      <span className="text-muted-foreground text-xs">{blog.author.role}</span>
                    )}
                    <p className="text-muted-foreground text-xs">
                      {new Date(blog.publish_date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            </MagicCard>
          </AnimationContainer>
        ))}
      </div>

      {/* CTA Button */}
      <AnimationContainer animation="fadeUp" delay={0.6}>
        <div className="mt-12 text-center">
          <Link href="/blog/upload">
            <Button
              size="lg"
              className="w-full bg-[#f10a0a] text-white transition-all duration-200 hover:bg-[#d10909] md:w-auto"
            >
              Share Your Story
            </Button>
          </Link>
        </div>
      </AnimationContainer>

      {/* Background Gradient */}
      <AnimationContainer
        animation="scaleUp"
        delay={0.8}
        className="absolute -top-[20%] left-1/4 -z-10 h-auto w-2/3"
      >
        <Image
          src="/assets/hero_gradient.png"
          alt="Blog Gradient Background"
          width={1024}
          height={1024}
          className="h-auto w-full object-cover"
        />
      </AnimationContainer>
    </Wrapper>
  )
}

export default BlogPage
