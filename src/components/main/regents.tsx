'use client'

import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AnimationContainer from '../global/animation-container'
import Wrapper from '../global/wrapper'
import { Button } from '../ui/button'
import SectionBadge from '../ui/section-badge'
import { FlickeringGrid } from '../ui/flickering-grid'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import { REGENTS } from '@/constants'

const Regents = () => {
  return (
    <Wrapper className="py-16 lg:py-24">
      <div className="relative z-0 flex flex-col items-center gap-6 overflow-hidden py-16 text-center lg:py-24">
        {/* Subtle Background Gradient Overlay */}
        <div className="from-bg-background absolute inset-x-0 bottom-0 z-10 h-1/2 w-full bg-gradient-to-t"></div>

        {/* Gradient Line */}
        <AnimationContainer animation="scaleUp" delay={0.3}>
          <div className="from-foreground/0 via-foreground/50 to-foreground/0 absolute inset-x-0 top-0 mx-auto h-px w-4/5 bg-gradient-to-r"></div>
        </AnimationContainer>

        {/* FlickeringGrid Background */}
        <AnimationContainer animation="scaleUp" delay={0.2}>
          <FlickeringGrid
            className="absolute inset-0 -z-10 h-full w-[120%]"
            squareSize={4}
            gridGap={6}
            color="#525252"
            maxOpacity={0.2}
            flickerChance={0.1}
            height={800}
          />
        </AnimationContainer>

        {/* Main Content */}
        <div className="z-30 flex w-full flex-col items-center justify-center gap-8">
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <SectionBadge title="Regents of Creator's World" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h2 className="from-foreground bg-gradient-to-b to-neutral-400 bg-clip-text text-3xl !leading-tight font-medium text-transparent md:text-5xl lg:text-6xl">
              The Creator&apos;s Council
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.5}>
            <p className="text-muted-foreground mx-auto mt-2 max-w-lg text-sm md:text-base lg:text-lg">
              Meet with the regents of creators council, the pillar of creator's world
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <div className="mt-6 flex items-center">
              <div className="flex flex-wrap items-center justify-center gap-6 rounded-3xl border border-white/20 bg-[#191919]/20 px-6 py-4 shadow-xl backdrop-blur-lg">
                <AnimatedTooltip items={REGENTS} />
              </div>
            </div>
          </AnimationContainer>
        </div>
      </div>
    </Wrapper>
  )
}

export default Regents
