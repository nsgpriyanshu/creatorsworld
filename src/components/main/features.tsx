'use client'

import { FEATURES } from '@/constants'
import Image from 'next/image'
import AnimationContainer from '../global/animation-container'
import Wrapper from '../global/wrapper'
import SectionBadge from '../ui/section-badge'
import { MagicCard } from '../ui/magic-card'
import { Ripple } from '../ui/ripple'
import { color } from 'framer-motion'
import { Particles } from '../ui/particles'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Features = () => {
  const { resolvedTheme } = useTheme()
  const [particleColor, setParticleColor] = useState('#ffffff')

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      setParticleColor('#ffffff') // light particles on dark bg
    } else {
      setParticleColor('#000000') // dark particles on light bg
    }
  }, [resolvedTheme])

  return (
    <Wrapper className="py-20 lg:py-32">
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="Features" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="from-foreground bg-gradient-to-b to-neutral-400 bg-clip-text text-2xl !leading-tight font-medium text-transparent md:text-4xl lg:text-5xl">
            Horizons
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-base lg:text-lg">
            Explore our vibrant community with innovative apps, dedicated channels, timely updates,
            collaborative partnerships, creative hubs, and robust secure login—all designed to
            deliver an exceptional and seamless user experience.
          </p>
        </AnimationContainer>
      </div>

      <div className="flex flex-col gap-6 px-1 md:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_.65fr]">
          <AnimationContainer animation="fadeRight" delay={0.5}>
            <MagicCard className="relative min-h-[400px] overflow-hidden rounded-3xl bg-[#191919] backdrop-blur-lg">
              <Ripple className="absolute inset-0 z-0" />
              <div className="relative inset-0 z-10 flex flex-col justify-between p-8">
                <AnimationContainer animation="fadeUp" delay={0.6}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium md:text-2xl">{FEATURES[0].title}</h3>
                    <p className="text-muted-foreground max-w-md text-sm md:text-base">
                      {FEATURES[0].description}
                    </p>
                  </div>
                </AnimationContainer>
                {/* <AnimationContainer animation="fadeUp" delay={0.7}>
                  <div className="relative h-60">
                    <Image
                      src={FEATURES[0].image}
                      alt={FEATURES[0].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </AnimationContainer> */}
              </div>
            </MagicCard>
          </AnimationContainer>
          <AnimationContainer animation="fadeLeft" delay={0.6}>
            <MagicCard className="relative min-h-[400px] overflow-hidden rounded-3xl bg-[#191919] backdrop-blur-3xl">
              <Particles color={particleColor} />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <AnimationContainer animation="fadeUp" delay={0.7}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium md:text-2xl">{FEATURES[1].title}</h3>
                    <p className="text-muted-foreground max-w-md text-sm md:text-base">
                      {FEATURES[1].description}
                    </p>
                  </div>
                </AnimationContainer>
                {/* <AnimationContainer animation="fadeUp" delay={0.8}>
                  <div className="relative h-48">
                    <Image
                      src={FEATURES[1].image}
                      alt={FEATURES[1].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </AnimationContainer> */}
              </div>
            </MagicCard>
          </AnimationContainer>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[.65fr_1fr]">
          <AnimationContainer animation="fadeRight" delay={0.7}>
            <MagicCard className="relative min-h-[350px] overflow-hidden rounded-3xl bg-[#191919] backdrop-blur-3xl">
              <Particles color={particleColor} />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <AnimationContainer animation="fadeUp" delay={0.8}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium md:text-2xl">{FEATURES[2].title}</h3>
                    <p className="text-muted-foreground max-w-md text-sm md:text-base">
                      {FEATURES[2].description}
                    </p>
                  </div>
                </AnimationContainer>
                {/* <AnimationContainer animation="fadeUp" delay={0.9}>
                  <div className="relative h-48">
                    <Image
                      src={FEATURES[2].image}
                      alt={FEATURES[2].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </AnimationContainer> */}
              </div>
            </MagicCard>
          </AnimationContainer>

          <AnimationContainer animation="fadeLeft" delay={0.8}>
            <MagicCard className="relative min-h-[350px] overflow-hidden rounded-3xl bg-[#191919] backdrop-blur-3xl">
              <Particles color={particleColor} />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <AnimationContainer animation="fadeUp" delay={0.9}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium md:text-2xl">{FEATURES[3].title}</h3>
                    <p className="text-muted-foreground max-w-md text-sm md:text-base">
                      {FEATURES[3].description}
                    </p>
                  </div>
                </AnimationContainer>
                {/* <AnimationContainer animation="fadeUp" delay={1}>
                  <div className="relative h-48">
                    <Image
                      src={FEATURES[3].image}
                      alt={FEATURES[3].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </AnimationContainer> */}
              </div>
            </MagicCard>
          </AnimationContainer>
        </div>
      </div>
    </Wrapper>
  )
}

export default Features
