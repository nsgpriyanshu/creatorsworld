'use client'

import { REVIEWS } from '@/constants'
import { cn } from '@/lib/utils'
import AnimationContainer from '../global/animation-container'
import Wrapper from '../global/wrapper'
import { Marquee } from '../ui/marquee'
import Image from 'next/image'
import { HeartHandshake } from 'lucide-react'
import { Badge } from '../ui/badge'

const firstRow = REVIEWS.slice(0, REVIEWS.length / 2)
const secondRow = REVIEWS.slice(REVIEWS.length / 2)

type ReviewCardProps = {
  img: string
  name: string
  userrole: string
  body: string
}

const ReviewCard = ({ img, name, userrole, body }: ReviewCardProps) => {
  return (
    <div
      className={cn(
        'relative h-full w-64 overflow-hidden rounded-2xl border p-4',
        'bg-neutral-50/80 backdrop-blur-md',
        'dark:border-neutral-800 dark:bg-[#191919]/60',
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 shrink-0">
            <Image
              className="rounded-full object-cover"
              width={32}
              height={32}
              alt={name}
              src={img}
              onError={e => {
                ;(e.currentTarget as HTMLImageElement).src =
                  'https://ui-avatars.com/api/?name=' + encodeURIComponent(name)
              }}
            />
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm font-medium text-foreground">{name}</h4>
            <p className="text-xs font-medium text-muted-foreground">{userrole}</p>
          </div>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  )
}

const Reviews = () => {
  return (
    <Wrapper className="py-20 lg:py-32">
      {/* Header */}
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <Badge
            variant="outline"
            className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300"
          >
            <HeartHandshake className="h-4 w-4 text-[#f10a0a]" />
            Reviews
          </Badge>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Creator Chronicles
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground text-balance md:text-lg">
            Hear from our community about their experiences with Creator&apos;s Worlds—how it&apos;s
            helped them connect, create, and grow.
          </p>
        </AnimationContainer>
      </div>

      {/* Marquee */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:2rem]">
          {firstRow.map(review => (
            <ReviewCard key={review.userrole} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:2rem]">
          {secondRow.map(review => (
            <ReviewCard key={review.userrole} {...review} />
          ))}
        </Marquee>

        {/* Smooth edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
      </div>
    </Wrapper>
  )
}

export default Reviews
