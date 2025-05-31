'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'

import { toast } from 'sonner'
import Wrapper from '@/components/global/wrapper'
import AnimationContainer from '@/components/global/animation-container'
import SectionBadge from '@/components/ui/section-badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ListRestartIcon } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const { resolvedTheme } = useTheme()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // TODO: Replace this with your actual forgot password logic/API call
      console.log('Reset password request sent to:', email)
      toast.success('Password reset link has been sent to your email.')
      setEmail('')
      // Optionally redirect or keep on the same page
    } catch (error) {
      console.error('Error sending reset password email:', error)
      toast.error('Failed to send reset password email. Please try again.')
    }
  }

  return (
    <Wrapper className="flex min-h-screen items-center justify-center py-16">
      <AnimationContainer animation="fadeUp" delay={0.2} className="w-auto max-w-4xl">
        <div className="relative grid grid-cols-1 overflow-hidden rounded-[40px] bg-black/10 backdrop-blur-md lg:grid-cols-2 dark:bg-white/5">
          {/* Left Panel */}
          <div className="from-bg-[#000000] via-bg-[#000000] to-background text-primary hidden h-full flex-col justify-center bg-gradient-to-b px-10 py-16 lg:flex">
            <SectionBadge title="Creator's World" />
            <h2 className="mt-4 text-4xl font-extrabold">Reset Your Password</h2>
            <p className="mt-4 text-base opacity-90">
              Enter your email below and we&apos;ll send you a link to reset your password.
            </p>
          </div>

          {/* Right Panel (Form) */}
          <div className="flex items-center justify-center px-8 py-12">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
              <div className="space-y-2 text-left">
                <h2 className="text-3xl font-bold">Forgot Password</h2>
                <p className="text-muted-foreground text-sm">
                  Enter your email address to receive a password reset link.
                </p>
              </div>

              <Input
                placeholder="azure@creatorsworld.com"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />

              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 h-12 w-full text-[#f10a0a] transition-colors"
              >
                <ListRestartIcon className="mr-2 h-5 w-5" />
                Send Reset Link
              </Button>

              <p className="text-muted-foreground text-center text-sm">
                Remember your password?{' '}
                <Link href="/sign-in" className="text-foreground underline hover:opacity-80">
                  Log in
                </Link>
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
