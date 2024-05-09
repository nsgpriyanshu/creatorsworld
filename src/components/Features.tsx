'use client'
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'
import Image from 'next/image'

const aicontent = [
  {
    title: 'Explore Specialized Categories',
    description:
      'We have separate categories for better user experience. This ensures that users can easily navigate through our server and find the content they are interested in. Explore our diverse range of categories and discover something new!',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="./categories.jpg"
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
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="./community.jpg"
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
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="./importantChannels.jpg"
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
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="./partnersChannels.jpg"
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
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="./creativeChannels.jpg"
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
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="./logChannels.jpg"
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
      <div className="h-auto md:h-[10rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <h1 className="mt-5 md:mt-0 text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Features
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          These are some our features
        </p>
      </div>
      <div>
        <StickyScroll content={aicontent} />
      </div>
    </>
  )
}

export default Features
