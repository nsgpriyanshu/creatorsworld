'use client'

import React from 'react'
import Image from 'next/image'

import { Marquee } from '../ui/marquee'
import Wrapper from '../global/wrapper'
import AnimationContainer from './animation-container'


type LogoItem = {
  src: string
  alt: string
}

interface LogosMarqueeProps {
  heading: string
  images: LogoItem[]
  headingLevel?: 'h3' | 'h4'
}

const LogosMarquee: React.FC<LogosMarqueeProps> = ({
  heading,
  images,
  headingLevel = 'h4',
}) => {
  const HeadingTag = headingLevel

  return (
    <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
      <Wrapper>
        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0}>
          <div className="flex justify-center px-2 md:px-0">
            <HeadingTag className="text-xl lg:text-2xl font-semibold text-center tracking-tight">
              {heading}
            </HeadingTag>
          </div>
        </AnimationContainer>

        {/* Marquee */}
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <div className="mt-10 w-full relative overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              <div className="flex items-center gap-10 md:gap-14">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width={1024}
                    height={1024}
                    className="
                      w-32 md:w-40 lg:w-44
                      h-auto
                      opacity-80
                      transition-opacity
                      dark:invert
                      hover:opacity-100
                    "
                  />
                ))}
              </div>
            </Marquee>

            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
          </div>
        </AnimationContainer>
      </Wrapper>
    </div>
  )
}

export default LogosMarquee
