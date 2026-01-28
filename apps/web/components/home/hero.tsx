'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sparkles } from 'lucide-react'

import Wrapper from '../global/wrapper'
import AnimationContainer from '../global/animation-container'

import { Button } from '@repo/ui/components/ui/button'
import { Badge } from '@repo/ui/components/ui/badge'

const Hero: React.FC = () => {
  const { resolvedTheme } = useTheme()

  const heroImageSrc =
    resolvedTheme === 'light' ? '/backgrounds/hero-light.png' : '/backgrounds/hero-dark.png'

  return (
    <div className="relative z-0 w-full overflow-hidden">
      {/* Red Glow */}
      <div className="absolute inset-x-0 -top-16 -z-10 mx-auto h-32 w-3/4 rounded-full bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(241,10,10,1)_0%,rgba(5,5,5,0)_80%)] blur-[5rem] lg:h-40" />

      {/* Background SVG */}
      {/* <Image
        src="/background/hero.svg"
        alt="Hero Background"
        width={1024}
        height={1024}
        priority
        className="absolute inset-x-0 -top-16 z-10 w-full min-w-full"
      /> */}

      <Wrapper className="pt-24">
        <div className="relative z-20 flex flex-col items-center text-center">
          {/* Badge */}
          <AnimationContainer animation="fadeDown" delay={0}>
            <Badge
              variant="outline"
              className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300"
            >
              <Sparkles className="text-[#f10a0a]" />
              Worlds largest bot server
            </Badge>
          </AnimationContainer>

          {/* Heading */}
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <h1 className="text-foreground mt-6 text-5xl leading-tight font-semibold tracking-tight text-balance md:text-6xl">
              You have stepped into the{' '}
              <span>
                <span className="text-[#f10a0a]">C</span>reator&apos;s{' '}
                <span className="text-[#f10a0a]">W</span>orlds
              </span>
            </h1>
          </AnimationContainer>

          {/* Description */}
          <AnimationContainer animation="fadeUp" delay={0.35}>
            <p className="text-muted-foreground mt-5 max-w-3xl text-base text-balance md:text-lg">
              The ultimate destination for creators to showcase their work, connect with like-minded
              individuals, and explore a world of creativity. Join us today and unleash your
              creative potential!
            </p>
          </AnimationContainer>

          {/* CTA */}
          <AnimationContainer animation="scaleUp" delay={0.5}>
            <div className="mt-8">
              <Link href="https://discord.gg/VUMVuArkst" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-8 py-6">
                  Explore More
                </Button>
              </Link>
            </div>
          </AnimationContainer>

          {/* Server Preview */}
          <AnimationContainer animation="fadeUp" delay={0.65} className="w-full">
            <div className="relative mx-auto mt-12 max-w-7xl rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg md:mt-16 dark:border-neutral-700 dark:bg-neutral-800/50">
              <div className="rounded-[24px] border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black">
                <Image
                  src={heroImageSrc}
                  alt="Server Preview"
                  priority
                  width={2932}
                  height={1664}
                  className="rounded-[24px]"
                />
              </div>
            </div>
          </AnimationContainer>
        </div>
      </Wrapper>
    </div>
  )
}

export default Hero