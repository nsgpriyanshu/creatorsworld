'use client'
import Image from 'next/image'
import Link from 'next/link'
import AnimationContainer from '../global/animation-container'
import Wrapper from '../global/wrapper'
import { Button } from '../ui/button'
import { Marquee } from '../ui/marquee'
import { Badge } from '../ui/badge'
import { Sparkles } from 'lucide-react'

const Hero = () => {
  const companies = ['/assets/partner_one.webp', '/assets/partner_two.webp']

  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1 pt-20 lg:pt-32">
      <div className="flex h-full w-full flex-col lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col items-start gap-10 py-8">
          <div className="flex flex-col items-start gap-4">
            <AnimationContainer animation="fadeUp" delay={0.2}>
              <Badge variant="outline" className="bg-neutral-50 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300">
                <Sparkles data-icon="inline-start" className='text-[#f10a0a]' />
                Worlds largest bot server
              </Badge>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.4}>
                <h1 className="text-5xl leading-tight! font-medium text-foreground lg:text-6xl">
                  You have stepped into the{' '}
                  <span className="text-foreground">
                    <span className="text-[#f10a0a]">C</span>reator's{' '}
                    <span className="text-[#f10a0a]">W</span>orlds
                  </span>
                </h1>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.6}>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
                The ultimate destination for creators to showcase their work, connect with
                like-minded individuals, and explore a world of creativity. Join us today and
                unleash your creative potential!
              </p>
            </AnimationContainer>
          </div>

          <AnimationContainer animation="fadeUp" delay={0.8}>
            <div className="w-full">
              <Link href="https://discord.gg/VUMVuArkst">
                <Button variant="default" size="lg" className="w-full md:w-auto">
                  Explore More
                </Button>
              </Link>
            </div>
          </AnimationContainer>

          {/* <AnimationContainer animation="fadeUp" delay={1}>
            <div className="flex flex-col items-start gap-4 py-4">
              <p className="text-muted-foreground text-sm md:text-base">Our Partners</p>
              <div className="relative w-full max-w-[calc(100vw-2rem)] lg:max-w-lg">
                <Marquee className="select-none [--duration:40s] [--gap:2rem]">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="text-muted-foreground flex h-16 items-center justify-center"
                    >
                      <Image
                        src={companies[index % companies.length]}
                        alt={`Partner ${index + 1}`}
                        width={100}
                        height={40}
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 -right-1 z-40 w-1/3 bg-gradient-to-l dark:from-[#000000]"></div>
                <div className="pointer-events-none absolute inset-y-0 -left-1 z-40 w-1/3 bg-gradient-to-r dark:from-[#000000]"></div>
              </div>
            </div>
          </AnimationContainer> */}
        </div>
      </div>
    </Wrapper>
  )
}

export default Hero