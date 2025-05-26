import { WHO_WE_ARE } from '@/constants/whoweare'
import AnimationContainer from '../global/animation-container'
import Wrapper from '../global/wrapper'
import SectionBadge from '../ui/section-badge'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function WhoWeAre() {
  return (
    <Wrapper className="relative py-20 lg:py-32">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="Backstory" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="from-foreground bg-gradient-to-b to-neutral-400 bg-clip-text text-2xl !leading-tight font-medium text-transparent md:text-4xl lg:text-5xl">
            Who we are?
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-base lg:text-lg">
            We&apos;re a passionate team building a global platform to connect and empower creators
            with innovative tools and resources.
          </p>
        </AnimationContainer>
      </div>
      {/* WHO_WE_ARE Grid */}
      <div className="relative pt-10">
        {/* Background Grid Animation (Only for Large Screens) */}
        <div className="absolute top-1/2 left-1/2 z-10 hidden h-full w-full -translate-x-1/2 -translate-y-1/2 lg:block">
          <AnimationContainer animation="scaleUp" delay={0.5}>
            <Image
              src="/assets/grid_lines.svg"
              alt="Grid Background"
              width={32}
              height={32}
              className="size-full"
            />
          </AnimationContainer>
        </div>

        {/* List of WHO_WE_ARE */}
        <div className="relative z-20 grid grid-cols-2">
          {WHO_WE_ARE.map((wwaperk, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center p-2 md:p-16',
                index % 2 === 0 ? 'justify-end' : 'justify-start',
              )}
            >
              <AnimationContainer
                animation={index % 2 === 0 ? 'fadeRight' : 'fadeLeft'}
                delay={0.2 * (index + 1)}
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  {/* Icon Container */}
                  <div className="flex size-12 items-center justify-center rounded-lg bg-neutral-900 lg:size-16 lg:rounded-2xl">
                    <Image
                      src={wwaperk.icon}
                      alt={wwaperk.title}
                      width={1024}
                      height={1024}
                      className="size-8 lg:size-10"
                    />
                  </div>
                  {/* wwaPerk Details */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium md:text-xl">{wwaperk.title}</h3>
                    <p className="text-muted-foreground max-w-[250px] text-xs md:text-sm">
                      {wwaperk.description}
                    </p>
                  </div>
                </div>
              </AnimationContainer>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
