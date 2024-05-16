'use client'

import Image from 'next/image'
import { Tabs } from './ui/tabs'

const Content = () => {
  return (
    <Image
      src="/blogImages/tab.png"
      alt="blogImage"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  )
}

function Blog() {
  const tabs = [
    {
      title: 'WhatsNew',
      value: 'whatsNew',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 ">
          <p>Whats New</p>
          <Content />
        </div>
      ),
    },
    {
      title: 'Safety & Moderation',
      value: 'safetyMod',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#22ce68] to-[#2c951d] ">
          <p>Safety & Moderation</p>
          <Content />
        </div>
      ),
    },
  ]

  return (
    <div className="h-auto md:h-[75rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <h1 className="mt-5 md:mt-0 text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Creators Blog
      </h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Explore our blogs from our creators
      </p>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto sm:mx-4 w-full  items-start justify-start my-40">
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}

export default Blog

