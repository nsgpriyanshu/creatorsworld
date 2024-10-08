import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button, Image } from '@nextui-org/react'
import { BorderBeam } from '@/components/magicui/border-beam'

function HeroSection() {
  return (
    <div className="relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md py-10 bg-grid-white/[0.02] md:h-[40rem] md:py-0 lg:h-[50rem] xl:h-[60rem]">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <div className="relative z-10 p-4 text-center">
        <h1
          className="mt-20 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:mt-0 md:text-6xl lg:text-7xl"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #fcd675, #b27fd2)',
          }}
        >
          Creator's World
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300 sm:text-lg md:text-xl">
          Creator's world's largest Discord's app hub, where creators of all kinds come together in
          a friendly and supportive environment. Whether you're a seasoned content creator or just
          starting out, our server welcomes everyone with open arms. Click the button below to join
          our vibrant community today!
        </p>
        <div className="mt-4">
          <Link href={'https://discord.gg/7SAcEv7MDd'}>
            <Button
              color="success"
              variant="flat"
              className="px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base md:px-10 md:py-5 md:text-lg"
            >
              Join Now
            </Button>
          </Link>
        </div>

        <div className="relative mt-4 rounded-xl">
          <img
            src="https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/demos/cwlobby.png"
            alt="Hero Image"
            className="hidden w-[700px] rounded-[inherit] border object-contain shadow-lg dark:block"
          />
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
