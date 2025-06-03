'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import dynamic from 'next/dynamic'
import { v4 as uuidv4 } from 'uuid'

import { createClient } from '@/lib/supabase/client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Wrapper from '@/components/global/wrapper'
import AnimationContainer from '@/components/global/animation-container'

// Dynamically import TiptapEditor
const TiptapEditor = dynamic(() => import('@/components/blog/editor'), { ssr: false })

function UploadBlogPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>(null)

  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (!data.user) {
        router.push('/sign-in') // redirect if not authenticated
      } else {
        setUser(data.user)
      }
    }
    fetchUser()
  }, [router, supabase])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !content || !user) {
      toast.error('Please complete all required fields.')
      return
    }

    setLoading(true)

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    let imageUrl = ''

    if (image) {
      const filePath = `covers/${uuidv4()}-${image.name}`

      const { data, error } = await supabase.storage.from('blog-images').upload(filePath, image)

      if (error) {
        console.error('Upload error:', error)
        toast.error(`Image upload failed: ${error.message}`)
        setLoading(false)
        return
      }

      const projectUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      imageUrl = `${projectUrl}/storage/v1/object/public/blog-images/${filePath}`
    }

    // --- START: Check if author exists and insert if not ---
    let { data: author, error: authorError } = await supabase
      .from('authors')
      .select('*')
      .eq('id', user.id)
      .single()

    if (authorError && authorError.code === 'PGRST116') {
      // no author found, insert new author
      const { data: newAuthor, error: insertAuthorError } = await supabase
        .from('authors')
        .insert({
          id: user.id,
          name: user.user_metadata?.name || 'Unknown',
          email: user.email,
          profile_picture: user.user_metadata?.avatar_url || null,
        })
        .select()
        .single()

      if (insertAuthorError) {
        toast.error('Failed to create author: ' + insertAuthorError.message)
        setLoading(false)
        return
      }
      author = newAuthor
    } else if (authorError) {
      toast.error('Error fetching author: ' + authorError.message)
      setLoading(false)
      return
    }
    // --- END ---

    const { error } = await supabase.from('blogs').insert({
      title,
      slug,
      content,
      tags: tags
        .split(',')
        .map(tag => tag.trim())
        .filter(Boolean),
      author_id: author.id,
      publish_date: new Date().toISOString(),
      image_url: imageUrl || null,
    })

    if (error) {
      toast.error(error.message)
      setLoading(false)
      return
    }

    toast.success('Blog uploaded successfully!')
    router.push('/blog')
    setLoading(false)
  }

  return (
    <Wrapper className="py-12">
      <AnimationContainer animation="fadeUp">
        <h1 className="mb-6 text-3xl font-bold">Upload a Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            placeholder="Blog Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <Input
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={e => setTags(e.target.value)}
          />
          <Input
            type="file"
            accept="image/*"
            onChange={e => setImage(e.target.files?.[0] ?? null)}
          />
          <TiptapEditor content={content} setContent={setContent} />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Uploading...' : 'Submit Blog'}
          </Button>
        </form>
      </AnimationContainer>
    </Wrapper>
  )
}

export default UploadBlogPage
