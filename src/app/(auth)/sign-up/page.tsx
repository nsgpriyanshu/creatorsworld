'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import Image from 'next/image'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import AnimationContainer from '@/components/global/animation-container'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'
import { UserPlus } from 'lucide-react'

export default function SignUpPage() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    discord_id: '',
  })

  const router = useRouter()
  const supabase = createClient()
  const { resolvedTheme } = useTheme()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Step 1: Check if Discord ID exists in the 'staff' table
    const { data: staffEntry, error: staffError } = await supabase
      .from('staff')
      .select('discord_id')
      .eq('discord_id', form.discord_id)
      .single()

    if (!staffEntry || staffError) {
      toast.error('You are not authorized to sign up.')
      return
    }

    // Step 2: Proceed with sign-up if authorized
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          first_name: form.first_name,
          last_name: form.last_name,
          discord_id: form.discord_id,
        },
      },
    })

    if (error) {
      console.error('Sign-up error:', error.message)
      toast.error(error.message)
    } else {
      toast.success('Signup successful! Please check your email for verification.')
    }
  }

  return (
    <Wrapper className="flex min-h-screen items-center justify-center py-16">
      <AnimationContainer animation="fadeUp" delay={0.2} className="w-auto max-w-4xl">
        <div className="relative grid grid-cols-1 overflow-hidden rounded-[40px] bg-black/10 backdrop-blur-md lg:grid-cols-2 dark:bg-white/5">
          {/* Left Panel */}
          <div className="from-bg-[#000000] via-bg-[#000000] to-background text-primary hidden h-full flex-col justify-center bg-gradient-to-b px-10 py-16 lg:flex">
            <SectionBadge title="Creator's World" />
            <h2 className="mt-4 text-4xl font-extrabold">Start your journey</h2>
            <p className="mt-4 text-base opacity-90">
              Join the world&apos;s largest hub for Discord apps and bots!
            </p>
          </div>

          {/* Right Panel (Form) */}
          <div className="flex items-center justify-center px-8 py-12">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
              <div className="space-y-2 text-left">
                <h2 className="text-3xl font-bold">Create an Account</h2>
                <p className="text-muted-foreground text-sm">
                  Enter your info to create your Creator&apos;s World account.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  placeholder="First name"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  required
                />
                <Input
                  placeholder="Last name"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="Discord ID"
                name="discord_id"
                value={form.discord_id}
                onChange={handleChange}
                required
              />
              <div>
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  minLength={8}
                  required
                />
                <p className="text-muted-foreground mt-1 text-xs">Minimum 8 characters required.</p>
              </div>

              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 h-12 w-full text-[#f10a0a] transition-colors"
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Create Account
              </Button>

              <p className="text-muted-foreground text-center text-sm">
                Already have an account?{' '}
                <a href="/sign-in" className="text-foreground underline hover:opacity-80">
                  Log in
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
