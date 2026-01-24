'use client'

import { FEATURES } from '@/constants'
import AnimationContainer from '../global/animation-container'
import Wrapper from '../global/wrapper'
import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'
import { Star } from 'lucide-react'

const Features = () => {
  return (
    <Wrapper className="py-20 lg:py-32">
      {/* Header */}
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <AnimationContainer animation="fadeUp" delay={1}>
          <Badge
            variant="outline"
            className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300"
          >
            <Star className="h-4 w-4 text-[#f10a0a]" />
            Features
          </Badge>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={2}>
          <h2 className="text-foreground mt-6 text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Horizons
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={2.5}>
          <p className="text-muted-foreground mt-5 max-w-3xl text-base text-balance md:text-lg">
            Explore our ecosystem built for creators — fast, secure, collaborative, and designed to
            scale with you.
          </p>
        </AnimationContainer>
      </div>

      {/* Grid */}
      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_.65fr]">
          <AnimationContainer animation="fadeRight" delay={2.5}>
            <FeatureCard title={FEATURES[0].title} description={FEATURES[0].description} />
          </AnimationContainer>

          <AnimationContainer animation="fadeLeft" delay={2.7}>
            <FeatureCard title={FEATURES[1].title} description={FEATURES[1].description} />
          </AnimationContainer>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[.65fr_1fr]">
          <AnimationContainer animation="fadeRight" delay={2.9}>
            <FeatureCard title={FEATURES[2].title} description={FEATURES[2].description} />
          </AnimationContainer>

          <AnimationContainer animation="fadeLeft" delay={3}>
            <FeatureCard title={FEATURES[3].title} description={FEATURES[3].description} />
          </AnimationContainer>
        </div>
      </div>
    </Wrapper>
  )
}

export default Features

/* ------------------------------------------------------------------ */
/* Minimal Feature Card */
/* ------------------------------------------------------------------ */

const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div
      className={cn(
        'relative flex min-h-[320px] flex-col justify-between',
        'rounded-3xl border p-8',
        'bg-neutral-100/70 backdrop-blur-xl',
        'dark:bg-neutral-900/60',
        'border-neutral-200/60 dark:border-neutral-800',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:border-neutral-300 dark:hover:border-neutral-700',
      )}
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>

        <p className="text-muted-foreground max-w-md text-sm leading-relaxed md:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}
