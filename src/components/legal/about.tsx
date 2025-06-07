'use client'

import React from 'react'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'
import AnimationContainer from '@/components/global/animation-container'
import { MagicCard } from '../ui/magic-card'

const AboutUs = () => {
  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1 pt-20 lg:pt-32">
      <div className="flex h-full w-full flex-col items-start gap-10 py-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="Founded: 19 June 2021" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h1 className="from-foreground bg-gradient-to-b to-neutral-400 bg-clip-text text-2xl !leading-tight font-medium text-transparent md:text-4xl lg:text-5xl">
              Backstory and Origin of Creator&apos;s World
            </h1>
          </AnimationContainer>
          <MagicCard className="mt-10 rounded-xl p-6 md:p-8">
            <AnimationContainer animation="fadeUp" delay={0.6}>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
                Creator&apos;s World began as a simple dream of a 13-year-old who wanted to build a
                big Discord server but had no clear direction. A year later, with a deeper look into
                the Discord ecosystem, it became evident that while there were many large
                communities, there was a gap—there wasn&apos;t a truly large Discord bot hub. That
                realization sparked the transformation of a test server into what is now known as
                Creator&apos;s World, with the vision of building the biggest and most organized
                bot-focused server. After months of searching, collecting, and curating bots, the
                server grew steadily and eventually became the largest verified bot server in the
                world, featuring over 1,000 bots and a thriving community. Today, Creator&apos;s
                World has evolved into more than just a server—it is now a company dedicated to
                creating open-source projects, building modern web applications for clients, and
                providing a space for innovation, tools, and collaboration for users, developers,
                and partners around the world.
              </p>
            </AnimationContainer>
          </MagicCard>
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutUs
