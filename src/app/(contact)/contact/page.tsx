'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Mail, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import AnimationContainer from '@/components/global/animation-container'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { resolvedTheme } = useTheme()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('message', form.message)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully!')
        setForm({ name: '', email: '', message: '' })
      } else {
        toast.error(result.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error submitting contact form:', error)
      toast.error('An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Wrapper className="flex min-h-screen items-center justify-center py-16">
      <AnimationContainer animation="fadeUp" delay={0.2} className="w-auto max-w-4xl">
        <div className="relative grid grid-cols-1 overflow-hidden rounded-[40px] bg-black/10 backdrop-blur-md lg:grid-cols-2 dark:bg-white/5">
          {/* Left Panel */}
          <div className="from-bg-[#000000] via-bg-[#000000] to-background text-primary hidden h-full flex-col justify-center bg-gradient-to-b px-10 py-16 lg:flex">
            <SectionBadge title="Get in Touch" />
            <h2 className="mt-4 text-4xl font-extrabold">Contact Us</h2>
            <p className="mt-4 text-base opacity-90">
              Reach out to the Creator's World team with your questions or feedback!
            </p>
          </div>

          {/* Right Panel (Form) */}
          <div className="flex items-center justify-center px-8 py-12">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
              <div className="space-y-2 text-left">
                <h2 className="text-3xl font-bold">Send a Message</h2>
                <p className="text-muted-foreground text-sm">
                  Fill out the form below to get in touch with us.
                </p>
              </div>

              <Input
                placeholder="Your name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="Your email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Textarea
                placeholder="Your message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="min-h-[120px]"
              />

              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 h-12 w-full text-[#f10a0a] transition-colors"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-muted-foreground text-center text-sm">
                Need help?{' '}
                <a
                  href="https://discord.gg/eG34B6JVtM"
                  className="text-foreground underline hover:opacity-80"
                >
                  Visit our discord server
                </a>
              </p>
            </form>
          </div>
        </div>
      </AnimationContainer>

      {/* Background glow or image */}
      <AnimationContainer
        animation="scaleUp"
        delay={1}
        className="absolute -top-30 left-1/2 -z-10 w-2/3 -translate-x-1/2"
      >
        <Image
          src="/assets/hero_gradient.png"
          alt="Background Glow"
          width={1024}
          height={1024}
          className="h-auto w-full object-cover opacity-70 mix-blend-screen"
        />
      </AnimationContainer>
    </Wrapper>
  )
}
