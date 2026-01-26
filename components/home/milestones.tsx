'use client'

import { METRICS } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import AnimationContainer from '../global/animation-container'
import Wrapper from '../global/wrapper'
import { Button } from '../ui/button'
import {
  Goal,
  Users,
  Star,
  Rocket,
  Globe,
  Trophy,
  type LucideIcon,
  Package,
  Bot,
} from 'lucide-react'
import { Badge } from '../ui/badge'

/**
 * Icon mapping (index-based, METRICS untouched)
 */
const METRIC_ICONS: Record<number, LucideIcon> = {
  0: Package,
  1: Bot,
  2: Rocket,
}

const Milestones = () => {
  return (
    <Wrapper className="py-20 lg:py-32">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left content */}
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <Badge
              variant="outline"
              className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300"
            >
              <Goal className="h-4 w-4 text-[#f10a0a]" />
              Achivements
            </Badge>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.3}>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Milestones we achived!
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <p className="mt-5 max-w-3xl text-base text-muted-foreground text-balance md:text-lg">
              A glimpse into the goals we&apos;ve conquered and the impact we&apos;ve created along
              the way.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.5}>
            <Link href="https://discord.gg/VUMVuArkst">
              <Button size="lg" className="mt-4 w-full md:w-auto">
                Join
              </Button>
            </Link>
          </AnimationContainer>
        </div>

        {/* Metrics */}
        <div className="flex flex-col gap-6 px-1 md:px-0">
          {METRICS.map((metric, index) => {
            const Icon = METRIC_ICONS[index] ?? Trophy

            return (
              <AnimationContainer
                key={index}
                animation={metric.reverse ? 'fadeLeft' : 'fadeRight'}
                delay={0.6 + index * 0.2}
              >
                <div className="relative overflow-hidden rounded-3xl p-4 lg:p-6 ">
                  {/* Glow */}
                  <AnimationContainer animation="scaleUp" delay={0.7 + index * 0.2}>
                    <div
                      className={cn(
                        'bg-primary absolute -bottom-1/2 right-0 size-20 rounded-full blur-[3rem] lg:size-32 lg:blur-[5rem]',
                        metric.reverse && 'left-0 right-auto',
                      )}
                    />
                  </AnimationContainer>

                  {/* Content */}
                  <div
                    className={cn(
                      'relative z-10 flex items-center justify-between gap-6',
                      metric.reverse && 'flex-row-reverse',
                    )}
                  >
                    {/* Text */}
                    <AnimationContainer animation="fadeUp" delay={0.8 + index * 0.2}>
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-1">
                          <span className="text-5xl font-mono font-medium lg:text-6xl">
                            {metric.number}
                          </span>
                          {metric.suffix && (
                            <span className="text-5xl font-mono font-medium lg:text-6xl">
                              {metric.suffix}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">{metric.label}</p>
                      </div>
                    </AnimationContainer>

                    {/* Icon (fixed alignment) */}
                    <AnimationContainer
                      animation={metric.reverse ? 'fadeRight' : 'fadeLeft'}
                      delay={0.9 + index * 0.2}
                    >
                      <div className="flex items-center">
                        <div className="flex size-14 items-center justify-center rounded-2xl border border-neutral-200/50 bg-neutral-50 transition-all duration-300 lg:size-16 dark:border-neutral-800 dark:bg-neutral-900">
                          <Icon className="h-6 w-6 text-[#f10a0a]" />
                        </div>
                      </div>
                    </AnimationContainer>
                  </div>
                </div>
              </AnimationContainer>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Milestones
