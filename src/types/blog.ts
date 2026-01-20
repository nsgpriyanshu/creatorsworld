export interface Author {
  id: string
  name: string
  email: string
  role?: 'admin' | 'editor' | 'author' | 'user'
  profile_picture?: string
  created_at?: string
  updated_at?: string
}

export interface Blog {
  id: string
  title: string
  slug: string
  content: string | Record<string, unknown>
  author_id: string
  tags?: string[]
  publish_date: string
  created_at?: string
  updated_at?: string
  author?: Author
  image_url?: string
  status?: 'draft' | 'published' | 'archived'
}

export type BlogFormData = Omit<Blog, 'id' | 'created_at' | 'updated_at' | 'author'>
