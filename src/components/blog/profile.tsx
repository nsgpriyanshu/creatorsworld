'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import Image from 'next/image'

import { toast } from 'sonner'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AnimationContainer from '@/components/global/animation-container'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'

import { Particles } from '@/components/ui/particles'
import { Blog } from '@/types/blog'
import { Edit2, Lock, PenIcon, TrashIcon } from 'lucide-react'
import Link from 'next/link'
import { MagicCard } from '../ui/magic-card'

export default function ProfilePage() {
  const { resolvedTheme } = useTheme()
  const [particleColor, setParticleColor] = useState('#ffffff')
  const router = useRouter()
  const supabase = createClient()

  // User state
  const [user, setUser] = useState<any>(null)
  const [author, setAuthor] = useState<any>(null)
  const [form, setForm] = useState({
    name: '',
    profile_picture: null as File | null,
    profile_picture_url: '',
  })
  const [isEditing, setIsEditing] = useState(false)
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(false)

  // Fetch user, author, and blog data
  useEffect(() => {
    const fetchUser = async () => {
      const { data: userData, error: userError } = await supabase.auth.getUser()
      if (userError || !userData.user) {
        toast.error('Please sign in to view your profile.')
        router.push('/sign-in')
        return
      }
      setUser(userData.user)

      // Fetch author data (name, email, role, profile_picture)
      const { data: authorData, error: authorError } = await supabase
        .from('authors')
        .select('name, email, role, profile_picture')
        .eq('id', userData.user.id)
        .single()

      if (authorError) {
        toast.error('Failed to fetch profile data: ' + authorError.message)
        console.error('Author fetch error:', authorError.message)
        return
      }
      setAuthor(authorData)
      setForm({
        name: authorData.name || userData.user.user_metadata?.name || '',
        profile_picture: null,
        profile_picture_url: authorData.profile_picture || '/assets/default-avatar.png',
      })

      // Fetch user's blogs
      const { data: blogData, error: blogError } = await supabase
        .from('blogs')
        .select('*')
        .eq('author_id', userData.user.id)
        .order('publish_date', { ascending: false })

      if (blogError) {
        toast.error('Failed to fetch blogs: ' + blogError.message)
        console.error('Blog fetch error:', blogError.message)
        return
      }
      setBlogs(blogData || [])
      console.log('Fetched blogs:', blogData) // Debug log
    }
    fetchUser()
  }, [router, supabase])

  // Update particle color based on theme
  useEffect(() => {
    setParticleColor(resolvedTheme === 'dark' ? '#ffffff' : '#333333')
  }, [resolvedTheme])

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'profile_picture') {
      const file = e.target.files?.[0]
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          toast.error('Profile picture must be under 5MB.')
          return
        }
        setForm({
          ...form,
          profile_picture: file,
          profile_picture_url: URL.createObjectURL(file),
        })
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    let profilePictureUrl = author?.profile_picture || null

    // Upload new profile picture if provided
    if (form.profile_picture) {
      const fileExt = form.profile_picture.name.split('.').pop()
      const filePath = `profiles/${user.id}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, form.profile_picture, { upsert: true })

      if (uploadError) {
        toast.error('Failed to upload profile picture: ' + uploadError.message)
        setLoading(false)
        return
      }

      profilePictureUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${filePath}`
    }

    // Update author table
    const { error: authorError } = await supabase
      .from('authors')
      .update({
        name: form.name,
        profile_picture: profilePictureUrl,
      })
      .eq('id', user.id)

    if (authorError) {
      toast.error('Failed to update profile: ' + authorError.message)
      setLoading(false)
      return
    }

    // Update Supabase Auth user metadata
    const { error: authError } = await supabase.auth.updateUser({
      data: { name: form.name },
    })

    if (authError) {
      toast.error('Failed to update user metadata: ' + authError.message)
      setLoading(false)
      return
    }

    toast.success('Profile updated successfully!')
    setIsEditing(false)
    setAuthor({ ...author, name: form.name, profile_picture: profilePictureUrl })
    setLoading(false)
  }

  // Handle password reset
  const handlePasswordReset = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(user?.email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) {
      toast.error('Failed to send password reset email: ' + error.message)
    } else {
      toast.success('Password reset email sent!')
    }
  }

  // Handle blog deletion
  const handleDeleteBlog = async (blogId: string, blogTitle: string) => {
    toast.custom(
      t => (
        <div className="max-w-sm rounded-lg border bg-white/30 p-4 shadow-lg backdrop-blur-lg dark:bg-[#191919]/60">
          <p className="text-sm font-medium">
            Are you sure you want to delete "{blogTitle}" blog post?
          </p>
          <div className="mt-4 flex space-x-2">
            <Button
              variant="default"
              size="sm"
              className="bg-primary flex-1 hover:bg-[#d10909]"
              onClick={async () => {
                const { error } = await supabase.from('blogs').delete().eq('id', blogId)

                if (error) {
                  toast.error('Failed to delete blog: ' + error.message)
                } else {
                  setBlogs(blogs.filter(blog => blog.id !== blogId))
                  toast.success('Blog deleted successfully!')
                }
                toast.dismiss(t)
              }}
            >
              Confirm
            </Button>
            <Button variant="outline" size="sm" className="flex-1" onClick={() => toast.dismiss(t)}>
              Cancel
            </Button>
          </div>
        </div>
      ),
      { duration: Infinity },
    )
  }

  if (!user || !author) return null

  return (
    <Wrapper className="flex min-h-screen flex-col items-center justify-center py-16">
      {/* Profile Card - UNCHANGED */}
      <AnimationContainer animation="fadeUp" delay={0.2} className="w-auto max-w-4xl">
        <div className="relative grid grid-cols-1 overflow-hidden rounded-[40px] bg-black/10 backdrop-blur-md lg:grid-cols-2 dark:bg-white/5">
          {/* Left Panel */}
          <div className="from-bg-[#000000] via-bg-[#000000] to-background text-primary flex flex-col items-center justify-center bg-gradient-to-b px-10 py-16">
            <SectionBadge title="Creator's World" />
            <div className="relative mt-6">
              <Image
                src={form.profile_picture_url}
                alt={form.name}
                width={120}
                height={120}
                className="h-40 w-40 rounded-full border-4 border-white/20 object-cover shadow-lg transition-transform duration-300 hover:scale-105 md:h-80 md:w-80"
              />
              {isEditing && (
                <button
                  type="button"
                  onClick={() => {
                    const input = document.createElement('input')
                    input.type = 'file'
                    input.accept = 'image/*'
                    input.onchange = e => {
                      const file = (e.target as HTMLInputElement).files?.[0]
                      if (file) {
                        if (file.size > 5 * 1024 * 1024) {
                          toast.error('Profile picture must be under 5MB.')
                          return
                        }
                        setForm({
                          ...form,
                          profile_picture: file,
                          profile_picture_url: URL.createObjectURL(file),
                        })
                      }
                    }
                    input.click()
                  }}
                  className="absolute right-0 bottom-0 rounded-full bg-[#f10a0a] p-2 text-white hover:bg-[#d10909]"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Panel (Profile/Settings) */}
          <div className="flex items-center justify-center px-8 py-12">
            <div className="w-full max-w-md space-y-6">
              <div className="space-y-2 text-left">
                <h2 className="text-3xl font-bold">Profile Settings</h2>
                <p className="text-muted-foreground text-sm">
                  View and update your Creator's World account.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    required
                  />
                </div>

                {/* Email (Read-only) */}
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input value={author.email || 'N/A'} disabled />
                </div>

                {/* Role (Read-only) */}
                <div>
                  <label className="text-sm font-medium">Role</label>
                  <Input value={author.role || 'Creator'} disabled />
                </div>

                {/* Password (Masked) */}
                <div>
                  <label className="text-sm font-medium">Password</label>
                  <div className="flex items-center space-x-2">
                    <Input value="********" disabled />
                    <Button type="button" variant="outline" size="sm" onClick={handlePasswordReset}>
                      <Lock className="mr-2 h-4 w-4" />
                      Reset
                    </Button>
                  </div>
                </div>

                {/* Edit/Save Buttons */}
                {isEditing ? (
                  <div className="flex flex-col gap-2 space-x-2">
                    <Button
                      type="submit"
                      variant="default"
                      disabled={loading}
                      className="bg-primary hover:bg-primary/90 h-12 w-full text-[#f10a0a] transition-colors"
                    >
                      {loading ? 'Saving...' : 'Save Changes'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-primary hover:bg-primary/90 h-12 w-full text-[#f10a0a] transition-colors"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button
                    type="button"
                    variant="default"
                    onClick={() => setIsEditing(true)}
                    className="bg-primary hover:bg-primary/90 h-12 w-full text-[#f10a0a] transition-colors"
                  >
                    <PenIcon className="mr-2 h-5 w-5" /> Edit Profile
                  </Button>
                )}
              </form>
            </div>
          </div>
        </div>
      </AnimationContainer>

      {/* Blog List Card - MODIFIED FOR DELETE FEATURE */}
      <AnimationContainer animation="fadeUp" delay={0.3} className="mt-8 w-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[40px] bg-black/10 p-8 backdrop-blur-md dark:bg-white/5">
          <div className="mb-6 text-center">
            <h2 className="mt-4 text-3xl font-bold">Your Published Stories</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Explore all the blogs you've shared with the community.
            </p>
          </div>

          {blogs.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {blogs.map((blog, index) => (
                <AnimationContainer
                  key={blog.id}
                  animation="fadeUp"
                  delay={0.2 * ((index % 3) + 1)}
                >
                  <MagicCard className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/20 bg-[#191919] backdrop-blur-lg">
                    <Particles color={particleColor} className="absolute inset-0 z-0" />
                    {/* Delete Button */}
                    <Button
                      variant="default"
                      size="sm"
                      className="absolute top-2 right-2 z-20 text-[#f10a0a] hover:bg-[#f10a0a]/20"
                      onClick={() => handleDeleteBlog(blog.id, blog.title)}
                      aria-label={`Delete ${blog.title}`}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="group relative z-10 flex h-full flex-col p-5"
                    >
                      <div className="mb-4 h-48 w-full overflow-hidden rounded-xl">
                        <Image
                          src={blog.image_url || '/assets/default-blog-image.png'}
                          alt={blog.title}
                          width={400}
                          height={200}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="mb-2 line-clamp-2 text-xl font-medium md:text-2xl">
                        {blog.title}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        {new Date(blog.publish_date).toLocaleDateString()}
                      </p>
                    </Link>
                  </MagicCard>
                </AnimationContainer>
              ))}
            </div>
          ) : (
            <AnimationContainer animation="fadeUp" delay={0.4}>
              <p className="text-muted-foreground text-center">
                You haven't published any blogs yet.{' '}
                <Link href="/blog/upload" className="text-[#f10a0a] hover:underline">
                  Share your first story!
                </Link>
              </p>
            </AnimationContainer>
          )}
        </div>
      </AnimationContainer>

      {/* Background Glow */}
      <AnimationContainer
        animation="scaleUp"
        delay={1}
        className="absolute -top-20 left-1/2 -z-10 w-2/3 -translate-x-1/2"
      >
        <Image
          src="/assets/hero_gradient.png"
          alt="Background Glow"
          width={1024}
          height={1024}
          className="h-auto w-full object-cover opacity-80 mix-blend-screen"
        />
      </AnimationContainer>
    </Wrapper>
  )
}
