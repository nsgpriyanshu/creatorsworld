'use client'

import React from 'react'
import Image from 'next/image'

import { Marquee } from '../ui/marquee'
import Wrapper from '../global/wrapper'
import AnimationContainer from '../global/animation-container'

const Partners: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-16 lg:py-24">
      <Wrapper>
        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={1}>
          <div className="flex flex-col items-center justify-center px-2 md:px-0">
            <h4 className="text-center text-xl font-semibold tracking-tight lg:text-2xl">
              Our Trusted Partners
            </h4>
          </div>
        </AnimationContainer>

        {/* Marquee */}
        <AnimationContainer animation="fadeUp" delay={2}>
          <div className="relative mt-10 w-full overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              <div className="flex gap-8 md:gap-12">
                <Image
                  src="/assets/partner-1-logo.svg"
                  alt="partner- 1 logo"
                  width={1024}
                  height={1024}
                  className="h-12 w-24"
                />
                {/* <Image
                  src="/assets/partner-1.svg"
                  alt="partner- 1"
                  width={1024}
                  height={1024}
                  className="w-24 h-12"
                /> */}
                <Image
                  src="/assets/partner-2-logo.svg"
                  alt="partner- 2 logo"
                  width={1024}
                  height={1024}
                  className="h-12 w-24"
                />
                {/* <Image
                  src="/assets/partner-2.svg"
                  alt="partner- 2"
                  width={1024}
                  height={1024}
                  className="w-24 h-12"
                /> */}
              </div>
            </Marquee>

            {/* Fade edges */}
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r to-transparent" />
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l to-transparent" />
          </div>
        </AnimationContainer>
      </Wrapper>
    </div>
  )
}

export default Partners
