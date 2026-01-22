'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import Wrapper from '../global/wrapper'
import Container from '../global/animation-container'
import AnimationContainer from '../global/animation-container'

import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Sparkles } from 'lucide-react'

const Hero: React.FC = () => {
  const { resolvedTheme } = useTheme()

  const heroImageSrc: string =
    resolvedTheme === 'light'
      ? '/backgrounds/hero-light.png'
      : '/backgrounds/hero-dark.png'

  return (
    <div className="relative z-0 w-full h-full">
      {/* Red Glow */}
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-40 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(241,10,10,1)_0%,rgba(5,5,5,0)_80%)]" />

      {/* Background SVG */}
      <Image
        src="/images/hero.svg"
        alt="Hero Background"
        width={1024}
        height={1024}
        className="absolute inset-x-0 -top-16 w-full z-10 min-w-full"
        priority
      />

      <Wrapper className="py-24">
        <div className="flex flex-col items-center justify-center w-full z-10">
          {/* Badge */}
          <Container>
            <AnimationContainer animation="fadeUp" delay={0.1}>
              <Badge
                variant="outline"
                className="flex items-center gap-2 bg-neutral-50 py-1.5 px-3 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300"
              >
                <Sparkles className="text-[#f10a0a]" />
                Worlds largest bot server
              </Badge>
            </AnimationContainer>
          </Container>

          {/* Heading */}
          <Container delay={0.2}>
            <AnimationContainer animation="fadeUp" delay={0.2}>
              <h1 className="mt-6 w-full text-balance text-center text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-tight">
                You have stepped into the{' '}
                <span>
                  <span className="text-[#f10a0a]">C</span>reator&apos;s{' '}
                  <span className="text-[#f10a0a]">W</span>orlds
                </span>
              </h1>
            </AnimationContainer>
          </Container>

          {/* Description */}
          <Container delay={0.3}>
            <AnimationContainer animation="fadeUp" delay={0.3}>
              <p className="mt-5 max-w-3xl text-center text-base md:text-lg font-normal text-muted-foreground text-balance py-1">
                The ultimate destination for creators to showcase their work,
                connect with like-minded individuals, and explore a world of
                creativity. Join us today and unleash your creative potential!
              </p>
            </AnimationContainer>
          </Container>

          {/* CTA */}
          <Container delay={0.4}>
            <AnimationContainer animation="fadeUp" delay={0.4}>
              <div className="mt-8 py-1">
                <Link href="https://discord.gg/VUMVuArkst" target="_blank">
                  <Button size="lg" className="px-8 py-6">
                    Explore More
                  </Button>
                </Link>
              </div>
            </AnimationContainer>
          </Container>

          {/* Dashboard Preview */}
          <Container className="w-full z-30" delay={0.5}>
            <AnimationContainer animation="fadeUp" delay={0.5}>
              <div className="relative mx-auto mt-12 md:mt-16 max-w-7xl rounded-2xl md:rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50">
                <div className="rounded-lg md:rounded-[24px] border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black">
                  <Image
                    src={heroImageSrc}
                    alt="Dashboard Preview"
                    priority
                    width={2932}
                    height={1664}
                    className="rounded-[16px] md:rounded-[26px]"
                  />
                </div>
              </div>
            </AnimationContainer>
          </Container>
        </div>
      </Wrapper>
    </div>
  )
}

export default Hero