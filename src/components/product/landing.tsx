'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimationContainer from '../global/animation-container'
import Wrapper from '../global/wrapper'
import { Button } from '../ui/button'
import { Marquee } from '../ui/marquee'
import SectionBadge from '../ui/section-badge'
import { useTheme } from 'next-themes'

const LandingPage = () => {
  const { resolvedTheme } = useTheme()
  const companies = ['/assets/pay_one.svg', '/assets/pay_two.svg', '/assets/pay_three.svg']

  // Select image based on theme
  const productImageSrc =
    resolvedTheme === 'light' ? '/assets/product_one.webp' : '/assets/product_one.webp'
  const productImageAlt =
    resolvedTheme === 'light' ? 'Emo Pack Preview (Light)' : 'Emo Pack Preview (Dark)'

  return (
    <Wrapper className="relative h-full min-h-screen w-[100vw] max-w-[100vw] flex-1 overflow-x-hidden pt-16 pb-16 sm:pt-20 sm:pb-20 md:w-full lg:pt-32">
      <div className="flex h-full w-full flex-col lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col items-start gap-10 py-8">
          <div className="flex flex-col items-start gap-4">
            <AnimationContainer animation="fadeUp" delay={0.2}>
              <SectionBadge title="Products" />
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.4}>
              <h1 className="from-foreground bg-gradient-to-r to-neutral-500 bg-clip-text text-5xl !leading-tight font-medium text-transparent lg:text-6xl">
                Express Yourself with{' '}
                <span className="bg-[#f10a0a] bg-clip-text text-5xl !leading-tight font-medium text-transparent lg:text-6xl">
                  Emo Pack
                </span>
              </h1>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.6}>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
                Get the exclusive Emo Pack with over 40 utility emojis crafted for nsCore. Enhance
                your Discord server for only{' '}
                <span className="text-foreground font-bold">₹ 899</span>.
              </p>
            </AnimationContainer>
          </div>

          <AnimationContainer animation="fadeUp" delay={0.8}>
            <div className="w-full">
              <Link href="https://discord.gg/VUMVuArkst">
                <Button size="lg" className="w-full md:w-auto">
                  Order Now
                </Button>
              </Link>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={1}>
            <div className="flex flex-col items-start gap-4 py-4">
              <p className="text-muted-foreground text-sm md:text-base">Payment Methods</p>
              <div className="relative w-full max-w-[calc(100vw-2rem)] overflow-hidden md:max-w-lg">
                <Marquee className="select-none [--duration:40s] [--gap:2rem]">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="text-muted-foreground flex h-16 items-center justify-center"
                    >
                      <Image
                        src={companies[index % companies.length]}
                        alt={`Partner ${index + 1}`}
                        width={80}
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
          </AnimationContainer>
        </div>

        <AnimationContainer animation="fadeRight" delay={0.4}>
          <div className="relative flex h-min w-full flex-col items-start justify-start overflow-visible">
            <div className="relative w-full lg:aspect-[1.3884514435695539/1] lg:h-[auto,720px] lg:w-[450px]">
              <div className="lg:absolute lg:inset-0">
                <div className="light:bg-white/10 absolute -top-4 -right-4 -bottom-4 -left-4 z-10 m-1 rounded-2xl border border-white/20 bg-black/10 backdrop-blur-lg lg:m-0 lg:h-[450px] lg:rounded-2xl dark:bg-black/10">
                  {/* Glassmorphism effect: semi-transparent [#000000] with blur, theme-responsive */}
                </div>
                <Image
                  src={productImageSrc}
                  alt={productImageAlt}
                  sizes="(max-width: 768px) 100vw, 450px"
                  width={400}
                  height={400}
                  className="relative z-20 h-auto min-w-full rounded-xl object-contain lg:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </AnimationContainer>
      </div>
      <AnimationContainer
        animation="scaleUp"
        delay={1.2}
        className="absolute -top-[8%] left-2/5 -z-10 h-auto w-full md:w-2/3"
      >
        <Image
          src="/assets/hero_gradient.png"
          alt="Emo Pack Gradient Background"
          width={1024}
          height={1024}
          className="h-auto w-full object-cover opacity-75"
        />
      </AnimationContainer>
    </Wrapper>
  )
}

export default LandingPage
