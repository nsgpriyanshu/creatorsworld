'use client'

import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'
import Image from 'next/image'

const content = [
  {
    title: 'Explore Specialized Categories',
    description:
      'We have separate categories for better user experience. This ensures that users can easily navigate through our server and find the content they are interested in. Explore our diverse range of categories and discover something new!',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/demos/categories.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Discover Diverse Channels',
    description:
      "We have a ton of different channels for different purposes so users can use their respective channels as per their needs. With a wide variety of channels available, there's something for everyone. Join the conversation and engage with like-minded individuals!",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/demos/community.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Stay Informed with Important Updates',
    description:
      'This is our main necessary category where all the necessary announcements, giveaways, and event-related announcements are made. Stay updated on all the latest happenings and never miss out on important information. Join us in this central hub of activity!',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/demos/importantChannels.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Connect with Partner Networks',
    description:
      "These are our partner hubs where other servers' important announcements are logged. Collaborate with our partners and stay connected with the wider community. Explore new opportunities and expand your network!",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/demos/partnersChannels.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Express Your Creativity',
    description:
      'These are our creative zones where different types of creators come and share their creativity. Here, you can find various channels dedicated to art, cooking, sports, and more. Unleash your creativity and express yourself!',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/demos/creativeChannels.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Ensure Secure and Transparent Logging',
    description:
      'This is the logging zone of our server where all the logs are maintained for better security, feedback, and service. Rest assured that your interactions are logged securely and transparently. Your privacy and security are our top priorities!',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/demos/logChannels.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
]

function Features() {
  return (
    <>
      <div className="relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md py-10 md:h-[10rem] md:py-0 lg:h-[15rem] xl:h-[20rem]">
        <div className="relative z-10 p-4 text-center">
          <h2 className="mt-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl">
            Features
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300 sm:text-lg md:text-xl">
            Our community offers diverse apps, channels, updates, partnerships, creativity zones,
            and secure logging for a rich user experience
          </p>
        </div>
      </div>
      <div>
        <StickyScroll content={content} />
      </div>
    </>
  )
}

export default Features
