'use client'

import { History, Users, Rocket, Globe, ShieldCheck, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { ABOUT } from '../../constants/about'
import Wrapper from '../global/wrapper'
import AnimationContainer from '../global/animation-container'
import { Badge } from '@repo/ui/components/ui/badge'
import { cn } from '@repo/ui/lib/utils'

const ICON_MAP: Record<'community' | 'growth' | 'global' | 'trust', LucideIcon> = {
  community: Users,
  growth: Rocket,
  global: Globe,
  trust: ShieldCheck,
}

export default function WhoWeAre() {
  return (
    <Wrapper className="relative w-full overflow-hidden py-24 lg:py-36">
      {/* Header */}
      <div className="relative z-10 flex w-full flex-col items-center text-center">
        <AnimationContainer animation="fadeDown" delay={0.1}>
          <Badge
            variant="outline"
            className="flex items-center gap-2 border-border bg-background px-4 py-1.5 text-secondary-foreground"
          >
            <History className="h-4 w-4 text-[#f10a0a]" />
            Backstory
          </Badge>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.2}>
          <h2 className="mt-8 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Who we are?
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-balance text-base text-muted-foreground md:text-lg">
            We&apos;re a passionate team building a global platform to connect and empower
            creators with innovative tools and resources.
          </p>
        </AnimationContainer>
      </div>

      {/* Content */}
      <div className="relative mt-24">
        <div className="relative z-10 grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:gap-y-28">
          {ABOUT.map((item, index) => {
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
                  delay={0.15 * (index + 1)}
                >
                  <div className="group flex max-w-xs flex-col items-center gap-4 text-center transition-transform duration-300 ease-out hover:-translate-y-1">
                    {/* Icon */}
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-card transition-all duration-300 group-hover:scale-105 lg:size-16">
                      <LucideIcon className="h-6 w-6 text-[#f10a0a]" />
                    </div>

                    {/* Text */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                        {item.title}
                      </h3>
                      <p className="max-w-64 text-xs leading-relaxed text-muted-foreground md:text-sm">
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
  )
}
