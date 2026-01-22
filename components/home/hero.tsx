 'use client'
  import React from 'react'
  import Image from 'next/image'
  import Link from 'next/link'
  import Wrapper from '../global/wrapper'
  import Container from '../global/animation-container'
  import AnimationContainer from '../global/animation-container'
  import { Button } from '../ui/button'
  import { Badge } from '../ui/badge'
  import { Sparkles } from 'lucide-react'
  
  const Hero = () => {
    return (
      <div className="relative z-0 w-full h-full">
        <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-40 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(241,10,10,1)_0%,rgba(5,5,5,0)_80%)]"></div>

        <Image
          src="/images/hero.svg"
          alt=""
          width={1024}
          height={1024}
          className="absolute inset-x-0 -top-16 w-full z-10 min-w-full"
        />
  
        <Wrapper className="py-20">
          <div className="flex flex-col items-center justify-center w-full z-10">
            <Container>
              <AnimationContainer animation="fadeUp" delay={0.1}>
               <Badge variant="outline" className="bg-neutral-50 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300">
                <Sparkles data-icon="inline-start" className='text-[#f10a0a]' />
                Worlds largest bot server
              </Badge>
              </AnimationContainer>
            </Container>
  
            <Container delay={0.2}>
              <AnimationContainer animation="fadeUp" delay={0.2}>
                <h1 className="text-balance !leading-[1.25] text-center text-5xl md:text-6xl font-semibold tracking-tight mt-6 w-full text-foreground">
                  You have stepped into the{' '}
                  <span className="text-[#f10a0a]">Creator's Worlds</span>
                </h1>
              </AnimationContainer>
            </Container>
  
            <Container delay={0.3}>
              <AnimationContainer animation="fadeUp" delay={0.3}>
                <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
                  The ultimate destination for creators to showcase their work, connect with like-minded individuals, and explore a world of creativity. Join us today and unleash your creative potential!
                </p>
              </AnimationContainer>
            </Container>
  
            <Container delay={0.4}>
              <AnimationContainer animation="fadeUp" delay={0.4}>
                <div className="mt-6">
                  <Link href="https://discord.gg/VUMVuArkst">
                    <Button size="lg">
                      Explore More
                    </Button>
                  </Link>
                </div>
              </AnimationContainer>
            </Container>
  
            <Container className="w-full z-30" delay={0.5}>
              <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="relative mx-auto max-w-7xl rounded-2xl md:rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 mt-10 md:mt-14">
                  <div className="rounded-lg md:rounded-[24px] border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black">
                    <Image
                      src="/backgrounds/hero-dark.png"
                      alt="Dashboard"
                      priority
                      width={2932}
                      height={1664}
                      loading="eager"
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