export interface Author {
  id: string
  name: string
  email: string
  role?: string
  profile_picture?: string
  created_at?: string
}

export interface Blog {
  id: string
  title: string
  slug: string
  content: any
  author_id: string
  tags?: string[]
  publish_date: string
  created_at?: string
  updated_at?: string
  author?: Author
  image_url?: string
}
