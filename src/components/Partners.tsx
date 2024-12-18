'use client'

import React from 'react'
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'
import { Button } from '@nextui-org/react'
import AnimationContainer from './global/animation-container'
import { HeartFilledIcon } from './global/icons'

function Partners() {
  return (
    <div className="relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md py-10 md:h-[20rem] md:py-0 lg:h-[30rem] xl:h-[40rem]">
      <AnimationContainer delay={0.2}>
        <div className="relative z-10 p-4 text-center">
          <h2
            className="mt-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl"
            id="getting-started"
          >
            Creator's Partners
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300 sm:text-lg md:text-xl">
            Backed by our official partners of Creators World
          </p>
        </div>
      </AnimationContainer>
      <AnimationContainer delay={0.3}>
        <div className="flex items-center justify-center px-5 py-5">
          <Image
            as={NextImage}
            isBlurred={true}
            width={250}
            height={250}
            src="https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/assets/nexus-brand.png"
            alt="nexus"
          />
          <Image
            as={NextImage}
            isBlurred={true}
            width={350}
            height={150}
            src="https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/assets/shadow-fight-fanclub-brand.png"
            alt="Shadow Fight Fanclub"
          />
        </div>
      </AnimationContainer>
      <AnimationContainer delay={0.4}>
        <Button color="danger" variant="flat">
          Your Community <HeartFilledIcon />
        </Button>
      </AnimationContainer>
    </div>
  )
}

export default Partners
