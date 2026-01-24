'use client'

import {
  History,
  Users,
  Rocket,
  Globe,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { WHO_WE_ARE } from '@/constants/whoweare'
import Wrapper from '../global/wrapper'
import AnimationContainer from '../global/animation-container'
import { Badge } from '../ui/badge'
import { cn } from '@/lib/utils'

/**
 * Icon map must use identifiers, NOT display text.
 * Fully type-safe and future-proof.
 */
const ICON_MAP: Record<
  'community' | 'growth' | 'global' | 'trust',
  LucideIcon
> = {
  community: Users,
  growth: Rocket,
  global: Globe,
  trust: ShieldCheck,
}

export default function WhoWeAre() {
  return (
    <div className="relative w-full overflow-hidden py-20 lg:py-32">
      <Wrapper>
        {/* Header */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <AnimationContainer animation="fadeDown" delay={1}>
            <Badge
              variant="outline"
              className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300"
            >
              <History className="h-4 w-4 text-[#f10a0a]" />
              Backstory
            </Badge>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={1}>
            <h2 className="text-foreground mt-6 text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Who we are?
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={2}>
            <p className="text-muted-foreground mt-5 max-w-3xl text-base text-balance md:text-lg">
              We&apos;re a passionate team building a global platform to connect and empower creators
              with innovative tools and resources.
            </p>
          </AnimationContainer>
        </div>

        {/* Content */}
        <div className="relative mt-20">
          <div className="relative z-10 grid grid-cols-2 gap-y-16 lg:gap-y-28">
            {WHO_WE_ARE.map((item, index) => {
              const LucideIcon = ICON_MAP[item.icon] ?? Sparkles

              return (
                <div
                  key={item.icon}
                  className={cn(
                    'flex px-4 md:px-16',
                    index % 2 === 0 ? 'justify-end' : 'justify-start',
                  )}
                >
                  <AnimationContainer
                    animation={index % 2 === 0 ? 'fadeRight' : 'fadeLeft'}
                    delay={2 * (index + 1)}
                  >
                    <div className="group flex flex-col items-center gap-4 text-center transition-transform duration-300 ease-out hover:-translate-y-1">
                      <div className="flex size-14 lg:size-16 items-center justify-center rounded-2xl border border-neutral-200/50 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 transition-all duration-300 group-hover:scale-105">
                        <LucideIcon className="h-6 w-6 text-[#f10a0a]" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground max-w-65 text-xs leading-relaxed md:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimationContainer>
                </div>
              )
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
