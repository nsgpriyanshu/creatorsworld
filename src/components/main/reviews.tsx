'use client'

import { REVIEWS } from '@/constants'
import { cn } from '@/lib/utils'
import AnimationContainer from '../global/animation-container'
import Wrapper from '../global/wrapper'
import SectionBadge from '../ui/section-badge'
import { Marquee } from '../ui/marquee'

const firstRow = REVIEWS.slice(0, REVIEWS.length / 2)
const secondRow = REVIEWS.slice(REVIEWS.length / 2)

const ReviewCard = ({
  img,
  name,
  userrole,
  body,
}: {
  img: string
  name: string
  userrole: string
  body: string
}) => {
  return (
    <div
      className={cn(
        'relative h-full w-64 overflow-hidden rounded-xl border border-white/30 bg-[#191919]/20 p-4 shadow-xl backdrop-blur-lg',
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <h4 className="text-foreground text-sm font-medium">{name}</h4>
            <p className="text-muted-foreground text-xs font-medium">{userrole}</p>
          </div>
        </div>
        <p className="text-muted-foreground mt-2 text-sm">{body}</p>
      </div>
    </div>
  )
}

const Reviews = () => {
  return (
    <Wrapper className="py-20 lg:py-32">
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="Reviews" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="from-foreground bg-gradient-to-b to-neutral-400 bg-clip-text text-2xl !leading-tight font-medium text-transparent md:text-4xl lg:text-5xl">
            Creator Chronicles
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-base lg:text-lg">
            Hear from our community about their experiences with Creator&apos;s Worlds—how it&apos;s
            helped them connect, create, and grow.
          </p>
        </AnimationContainer>
      </div>

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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r dark:from-[#000000]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l dark:from-[#000000]"></div>
      </div>
    </Wrapper>
  )
}

export default Reviews
