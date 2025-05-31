'use client'
import { METRICS } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import AnimationContainer from '../global/animation-container'
import Wrapper from '../global/wrapper'
import { Button } from '../ui/button'
import SectionBadge from '../ui/section-badge'
import Image from 'next/image'

const PlatformMetrics = () => {
  return (
    <Wrapper className="py-20 lg:py-32">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="Achievements" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.3}>
            <h1 className="from-foreground bg-gradient-to-r to-neutral-500 bg-clip-text text-5xl !leading-tight font-medium text-transparent lg:text-6xl">
              Milestones We&apos;ve Proudly Achieved
            </h1>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <p className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-base lg:text-lg">
              A glimpse into the goals we&apos;ve conquered and the impact we've created along the
              way.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.5}>
            <Link href="/signup">
              <Button size="lg" className="mt-4 w-full md:w-auto">
                Start Exploring Now
              </Button>
            </Link>
          </AnimationContainer>
        </div>

        <div className="flex flex-col gap-6 px-1 md:px-0">
          {METRICS.map((metric, index) => (
            <AnimationContainer
              key={index}
              animation={metric.reverse ? 'fadeLeft' : 'fadeRight'}
              delay={0.6 + index * 0.2}
            >
              <div className="relative z-0 overflow-hidden rounded-3xl p-4 lg:p-6 dark:bg-[#191919]">
                <AnimationContainer animation="scaleUp" delay={0.7 + index * 0.2}>
                  <div
                    className={cn(
                      'bg-primary absolute right-0 -bottom-1/2 -z-10 size-20 rounded-full blur-[3rem] lg:size-32 lg:blur-[5rem]',
                      metric.reverse && 'left-0',
                    )}
                  ></div>
                </AnimationContainer>

                <div
                  className={cn(
                    'z-30 flex items-center justify-between gap-6',
                    metric.reverse && 'flex-row-reverse',
                  )}
                >
                  <AnimationContainer animation="fadeUp" delay={0.8 + index * 0.2}>
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-medium lg:text-6xl">{metric.number}</span>
                        {metric.suffix && (
                          <span className="text-5xl font-medium lg:text-6xl">{metric.suffix}</span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">{metric.label}</p>
                    </div>
                  </AnimationContainer>

                  <AnimationContainer
                    animation={metric.reverse ? 'fadeRight' : 'fadeLeft'}
                    delay={0.9 + index * 0.2}
                  >
                    <div
                      className={cn(
                        'absolute inset-y-0 right-0 my-auto flex h-32 items-center justify-center rounded-2xl',
                        metric.reverse && 'right-auto left-0',
                      )}
                    >
                      <div className="m-6 flex size-12 items-center justify-center rounded-lg bg-neutral-900 lg:size-16 lg:rounded-2xl">
                        <Image
                          src={metric.image}
                          alt={metric.label}
                          width={1024}
                          height={1024}
                          className="m-6 h-10 w-full"
                        />
                      </div>
                    </div>
                  </AnimationContainer>
                </div>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default PlatformMetrics
