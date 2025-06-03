'use client'

import AnimationContainer from '@/components/global/animation-container'
import Wrapper from '@/components/global/wrapper'
import { Input } from '@/components/ui/input'
import { Blog } from '@/types/blog'
import { createClient } from '@supabase/supabase-js'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const LandingPage: React.FC = () => {
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
        .select('*, authors:author_id(*)')
        .order('publish_date', { ascending: false })

      if (!error && data) {
        setBlogs(data)
        setFilteredBlogs(data)
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
          b.content.toLowerCase().includes(search.toLowerCase()),
      )
    }
    if (activeTag) {
      results = results.filter(b => b.tags?.includes(activeTag))
    }
    setFilteredBlogs(results)
  }, [search, activeTag, blogs])

  const uniqueTags = Array.from(new Set(blogs.flatMap(b => b.tags || [])))

  return (
    <Wrapper className="min-h-screen py-16">
      <AnimationContainer animation="fadeUp" className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold">Latest Blog Posts</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Discover articles, tips, and updates from our team.
        </p>
      </AnimationContainer>

      <div className="mx-auto mb-6 flex max-w-xl flex-col items-center gap-3">
        <Input
          placeholder="Search blogs..."
          className="w-full"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          {uniqueTags.map(tag => (
            <Badge
              key={tag}
              variant={tag === activeTag ? 'default' : 'outline'}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className="cursor-pointer"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map(blog => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="group border-border bg-card rounded-2xl border p-5 shadow transition duration-200 hover:shadow-lg"
          >
            <div className="mb-3 h-48 w-full overflow-hidden rounded-xl">
              <Image
                src={`/storage/v1/object/public/blog-images/covers/${blog.slug}.png`}
                alt={blog.title}
                width={400}
                height={200}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-1 line-clamp-2 text-xl font-bold">{blog.title}</h3>
            <p className="text-muted-foreground line-clamp-3 text-sm">
              {blog.content.replace(/<[^>]*>?/gm, '').slice(0, 150)}...
            </p>
            <p className="text-foreground mt-2 text-xs opacity-70">
              {new Date(blog.publish_date).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </Wrapper>
  )
}

export default LandingPage
