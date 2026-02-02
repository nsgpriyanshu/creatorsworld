import { createSupabaseServer } from '../supabase/server'
import { BlogPost } from './types'

const BLOG_SELECT = `
  id,
  slug,
  title,
  excerpt,
  content,
  thumbnail_url,
  tags,
  reading_time,
  published_at,
  updated_at,
  is_featured,
  seo_title,
  seo_description,
  seo_image,
  author:authors (
    id,
    name,
    role,
    avatar_url
  )
`

export async function getAllPosts(): Promise<BlogPost[]> {
  const supabase = await createSupabaseServer()

  const { data, error } = await supabase
    .from('blogs')
    .select(BLOG_SELECT)
    .order('published_at', { ascending: false })

  if (error) throw error
  return data as unknown as BlogPost[]
}

export async function getFeaturedPost(): Promise<BlogPost | null> {
  const supabase = await createSupabaseServer()

  const { data } = await supabase
    .from('blogs')
    .select(BLOG_SELECT)
    .eq('is_featured', true)
    .single()

  return (data as unknown as BlogPost) ?? null
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const supabase = await createSupabaseServer()

  const { data } = await supabase
    .from('blogs')
    .select(BLOG_SELECT)
    .eq('slug', slug)
    .single()

  return (data as unknown as BlogPost) ?? null
}
