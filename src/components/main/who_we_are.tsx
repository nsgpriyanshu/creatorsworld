"use client";

import { WHO_WE_ARE } from '@/constants';
import AnimationContainer from '../global/animation-container';
import Wrapper from '../global/wrapper';
import SectionBadge from '../ui/section-badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function WhoWeAre() {

  return (
    <Wrapper className="relative py-20 lg:py-32">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="Backstory" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="bg-gradient-to-b from-foreground to-neutral-400 bg-clip-text text-2xl font-medium !leading-tight text-transparent md:text-4xl lg:text-5xl">
            Who we are?
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base lg:text-lg">
            We're a passionate team building a global platform to connect and empower creators with innovative tools and resources.
          </p>
        </AnimationContainer>
      </div>
      {/* Glassmorphism Cards */}
      <div className="relative pt-10">
        <div className="flex flex-col gap-6 px-1 md:px-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_.65fr]">
            <AnimationContainer animation="fadeRight" delay={0.5}>
              <div
                className={cn(
                  "relative min-h-[350px] overflow-hidden rounded-3xl border border-white/20 bg-[#000000]/50 backdrop-blur-3xl",
                  "dark:bg-black/10 light:bg-white/10"
                )}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <AnimationContainer animation="fadeUp" delay={0.6}>
                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-[#f10a0a] dark:text-[#f10a0a] light:text-[#d10909] md:text-2xl">
                        {WHO_WE_ARE[0].title}
                      </h3>
                      <p className="max-w-md text-sm text-muted-foreground md:text-base">
                        {WHO_WE_ARE[0].description}
                      </p>
                    </div>
                  </AnimationContainer>
                  <AnimationContainer animation="fadeUp" delay={0.7}>
                    <div className="relative h-48 md:h-60">
                      <Image
                        src={WHO_WE_ARE[0].image}
                        alt={WHO_WE_ARE[0].title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </AnimationContainer>
                </div>
              </div>
            </AnimationContainer>

            <AnimationContainer animation="fadeLeft" delay={0.6}>
              <div
                className={cn(
                  "relative min-h-[350px] overflow-hidden rounded-3xl border border-white/20 bg-[#000000]/50 backdrop-blur-3xl",
                  "dark:bg-black/10 light:bg-white/10"
                )}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <AnimationContainer animation="fadeUp" delay={0.7}>
                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-[#f10a0a] dark:text-[#f10a0a] light:text-[#d10909] md:text-2xl">
                        {WHO_WE_ARE[1].title}
                      </h3>
                      <p className="max-w-md text-sm text-muted-foreground md:text-base">
                        {WHO_WE_ARE[1].description}
                      </p>
                    </div>
                  </AnimationContainer>
                  <AnimationContainer animation="fadeUp" delay={0.8}>
                    <div className="relative h-48 md:h-60">
                      <Image
                        src={WHO_WE_ARE[1].image}
                        alt={WHO_WE_ARE[1].title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </AnimationContainer>
                </div>
              </div>
            </AnimationContainer>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[.65fr_1fr]">
            <AnimationContainer animation="fadeRight" delay={0.7}>
              <div
                className={cn(
                  "relative min-h-[350px] overflow-hidden rounded-3xl border border-white/20 bg-[#000000]/50 backdrop-blur-3xl",
                  "dark:bg-black/10 light:bg-white/10"
                )}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <AnimationContainer animation="fadeUp" delay={0.8}>
                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-[#f10a0a] dark:text-[#f10a0a] light:text-[#d10909] md:text-2xl">
                        {WHO_WE_ARE[2].title}
                      </h3>
                      <p className="max-w-md text-sm text-muted-foreground md:text-base">
                        {WHO_WE_ARE[2].description}
                      </p>
                    </div>
                  </AnimationContainer>
                  <AnimationContainer animation="fadeUp" delay={0.9}>
                    <div className="relative h-48 md:h-60">
                      <Image
                        src={WHO_WE_ARE[2].image}
                        alt={WHO_WE_ARE[2].title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </AnimationContainer>
                </div>
              </div>
            </AnimationContainer>

            <AnimationContainer animation="fadeLeft" delay={0.8}>
              <div
                className={cn(
                  "relative min-h-[350px] overflow-hidden rounded-3xl border border-white/20 bg-[#000000]/50 backdrop-blur-3xl",
                  "dark:bg-black/10 light:bg-white/10"
                )}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <AnimationContainer animation="fadeUp" delay={0.9}>
                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-[#f10a0a] dark:text-[#f10a0a] light:text-[#d10909] md:text-2xl">
                        {WHO_WE_ARE[3].title}
                      </h3>
                      <p className="max-w-md text-sm text-muted-foreground md:text-base">
                        {WHO_WE_ARE[3].description}
                      </p>
                    </div>
                  </AnimationContainer>
                  <AnimationContainer animation="fadeUp" delay={1}>
                    <div className="relative h-48 md:h-60">
                      <Image
                        src={WHO_WE_ARE[3].image}
                        alt={WHO_WE_ARE[3].title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </AnimationContainer>
                </div>
              </div>
            </AnimationContainer>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}



