'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import AnimationContainer from '@/components/global/animation-container'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'
import { LogIn } from 'lucide-react'

export default function SignInPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  const router = useRouter()
  const supabase = createClient()
  const { resolvedTheme } = useTheme()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    })

    if (error) {
      console.error('Sign-in error:', error.message)
      toast.error(error.message)
    } else {
      toast.success('Signin successful! Redirecting...')
      router.push('/blog')
    }
  }

  return (
    <Wrapper className="flex min-h-screen items-center justify-center py-16">
      <AnimationContainer animation="fadeUp" delay={0.2} className="w-auto max-w-4xl">
        <div className="relative grid grid-cols-1 overflow-hidden rounded-[40px] bg-black/10 backdrop-blur-md lg:grid-cols-2 dark:bg-white/5">
          {/* Left Panel */}
          <div className="from-[#000000] via-[#000000] to-background hidden h-full flex-col justify-center bg-gradient-to-b px-10 py-16 lg:flex">
            <SectionBadge title="Creator's World" />
            <h2 className="mt-4 text-4xl font-extrabold text-foreground">Welcome back</h2>
            <p className="mt-4 text-base text-muted-foreground">Sign in to access your account.</p>
            {/* <Image
              src={resolvedTheme === 'light' ? '/icons/cwicon_light.png' : '/icons/cwicon_dark.png'}
              alt="CW Icon"
              width={200}
              height={200}
              className="mt-8 rounded-lg shadow-lg"
            /> */}
          </div>

          {/* Right Panel (Form) */}
          <div className="flex items-center justify-center px-8 py-12">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
              <div className="space-y-2 text-left">
                <h2 className="text-3xl font-bold">Sign in</h2>
                <p className="text-muted-foreground text-sm">
                  Enter your credentials to access your Creator&apos;s World account.
                </p>
              </div>

              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={form.email}
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
                <div className="mt-1 flex justify-end text-xs">
                  <Link href="/forgot-password" className="text-muted-foreground hover:underline">
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                className="h-12 w-full text-primary-foreground"
              >
                <LogIn className="mr-2 h-5 w-5" />
                Sign In
              </Button>

              <p className="text-muted-foreground text-center text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/sign-up" className="text-foreground underline hover:opacity-80">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
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
