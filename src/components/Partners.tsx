'use client'

import React from 'react'
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'
import { Button } from '@nextui-org/react'

function Partners() {
  return (
    <div className="relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md py-10 md:h-[20rem] md:py-0 lg:h-[30rem] xl:h-[40rem]">
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
      <div className="flex items-center justify-center px-5 py-5">
        <Image
          as={NextImage}
          isBlurred
          width={200}
          height={200}
          src="./assets/nexus-brand.png"
          alt="nexus"
        />
        <Image
          as={NextImage}
          isBlurred
          width={300}
          height={100}
          src="./assets/shadow-fight-fanclub-brand.png"
          alt="Shadow Fight Fanclub"
        />
      </div>
      <Button color="danger" variant="bordered">
        Your Community ❤️
      </Button>
    </div>
  )
}

export default Partners
