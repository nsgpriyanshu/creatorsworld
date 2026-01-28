'use client'

import React from 'react'
import Image from 'next/image'
import Wrapper from '../global/wrapper'
import AnimationContainer from '../global/animation-container'
import { Badge } from '@repo/ui/components/ui/badge'
import { Sparkles, Users, Rocket, Globe } from 'lucide-react'
import { cn } from '@repo/ui/lib/utils'

import { FEATURES } from '../../constants/features'

interface Feature {
  title: string
  description: string
  image: string
  size: 'large' | 'small'
  icon?: 'community' | 'growth' | 'global'
}

// Icon map for features
const ICON_MAP: Record<'community' | 'growth' | 'global', React.ComponentType<{ className?: string }>> = {
  community: Users,
  growth: Rocket,
  global: Globe,
}

export default function Feature() {
  return (
    <Wrapper className="relative w-full overflow-hidden py-24 lg:py-36">
      {/* Section Header */}
      <div className="relative z-10 flex w-full flex-col items-center text-center">
        <AnimationContainer animation="fadeDown" delay={0.1}>
          <Badge
            variant="outline"
            className="flex items-center gap-2 border-border bg-background px-4 py-1.5 text-secondary-foreground"
          >
            <Sparkles className="h-4 w-4 text-[#f10a0a]" />
            Features
          </Badge>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.2}>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Built for creators. Backed by community.
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-balance text-base text-muted-foreground md:text-lg">
            Explore our key offerings that empower creators, build community, and drive innovation.
          </p>
        </AnimationContainer>
      </div>

      {/* Features Grid */}
      <div className="relative mt-24 grid grid-cols-1 gap-y-16 lg:gap-y-28">
        {FEATURES.map((feature, index) => {
          const isLarge = feature.size === 'large'
          const lightImage = feature.image.replace('.png', '-light.png')
          const darkImage = feature.image.replace('.png', '-dark.png')
          const FeatureIcon = feature.icon ? ICON_MAP[feature.icon] : null

          return (
            <AnimationContainer
              key={feature.title}
              animation={isLarge ? (index % 2 === 0 ? 'fadeRight' : 'fadeLeft') : 'fadeUp'}
              delay={0.15 * (index + 1)}
            >
              <div
                className={cn(
                  'flex flex-col items-center gap-6 px-4 md:px-16',
                  isLarge
                    ? 'md:flex-row md:items-center md:gap-16'
                    : 'md:flex-col md:items-center',
                  index % 2 === 0 && isLarge ? 'md:flex-row-reverse' : ''
                )}
              >
                {/* Image */}
                {isLarge && (
                  <div className="relative w-full max-w-md flex-shrink-0 md:max-w-lg">
                    <Image
                      src={lightImage}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="rounded-2xl border border-border bg-card dark:hidden"
                    />
                    <Image
                      src={darkImage}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="hidden rounded-2xl border border-border bg-card dark:block"
                    />
                  </div>
                )}

                {/* Text */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-xl">
                  {/* Icon */}
                  {FeatureIcon && (
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-card text-[#f10a0a] md:mb-4">
                      <FeatureIcon className="h-6 w-6" />
                    </div>
                  )}

                  <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl lg:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground md:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimationContainer>
          )
        })}
      </div>
    </Wrapper>
  )
}
