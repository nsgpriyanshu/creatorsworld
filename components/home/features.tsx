'use client'

import { FEATURES } from '@/constants'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import AnimationContainer from '../global/animation-container'
import Wrapper from '../global/wrapper'
import { Badge } from '../ui/badge'
import { StarsIcon } from 'lucide-react'

/**
 * Feature type (DO NOT change the FEATURES constant itself)
 */
type Feature = {
  title: string
  description: string
  image: string
}

/**
 * Type-safe accessor to avoid runtime crashes
 */
const getFeature = (index: number): Feature | null => {
  const feature = FEATURES[index] as Feature | undefined
  return feature ?? null
}

/**
 * Resolve image based on theme
 */
const getThemedImage = (image: string, theme?: string) => {
  if (theme === 'light') {
    return image.replace('-dark.png', '-light.png')
  }
  return image
}

const Features = () => {
  const { theme } = useTheme()

  const feature0 = getFeature(0)
  const feature1 = getFeature(1)
  const feature2 = getFeature(2)
  const feature3 = getFeature(3)

  return (
    <Wrapper className="py-20 lg:py-32">
      {/* Header */}
      <div className="relative z-10 flex w-full flex-col items-center overflow-hidden py-20 text-center lg:py-32">
        <AnimationContainer animation="fadeDown" delay={1}>
          <Badge
            variant="outline"
            className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300"
          >
            <StarsIcon className="h-4 w-4 text-[#f10a0a]" />
            Features
          </Badge>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={1}>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
            What we offer?
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={2}>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground text-balance md:text-lg">
            We provide a suite of powerful features designed to help creators thrive,
            collaborate, and grow their audiences effectively.
          </p>
        </AnimationContainer>
      </div>

      <div className="flex flex-col gap-6 px-1 md:px-0">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] gap-6">
          {feature0 && (
            <AnimationContainer animation="fadeRight" delay={0.5}>
              <FeatureCard feature={feature0} theme={theme} imageHeight="h-60" />
            </AnimationContainer>
          )}

          {feature1 && (
            <AnimationContainer animation="fadeLeft" delay={0.6}>
              <FeatureCard feature={feature1} theme={theme} imageHeight="h-48" />
            </AnimationContainer>
          )}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-[.65fr_1fr] gap-6">
          {feature2 && (
            <AnimationContainer animation="fadeRight" delay={0.7}>
              <FeatureCard feature={feature2} theme={theme} imageHeight="h-48" />
            </AnimationContainer>
          )}

          {feature3 && (
            <AnimationContainer animation="fadeLeft" delay={0.8}>
              <FeatureCard feature={feature3} theme={theme} imageHeight="h-48" />
            </AnimationContainer>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default Features

/* ------------------------------------------------------------------ */
/* Feature Card                                                        */
/* ------------------------------------------------------------------ */

interface FeatureCardProps {
  feature: Feature
  theme?: string
  imageHeight: string
}

const FeatureCard = ({ feature, theme, imageHeight }: FeatureCardProps) => {
  const imageSrc = getThemedImage(feature.image, theme)

  return (
    <div className="relative min-h-[350px] overflow-hidden rounded-3xl border border-neutral-200/50 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        <AnimationContainer animation="fadeUp" delay={0.6}>
          <div className="space-y-4">
            <h3 className="text-[#f10a0a] text-xl font-medium md:text-2xl">
              {feature.title}
            </h3>
            <p className="max-w-md text-sm text-muted-foreground md:text-base">
              {feature.description}
            </p>
          </div>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.7}>
          <div className={`relative ${imageHeight}`}>
            <Image
              src={imageSrc}
              alt={feature.title}
              fill
              className="object-contain"
            />
          </div>
        </AnimationContainer>
      </div>

      {/* Smooth bottom blending */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-neutral-100 to-transparent dark:from-neutral-900" />
    </div>
  )
}
