import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button, Image } from '@nextui-org/react'
import { BorderBeam } from '@/components/magicui/border-beam'
import AnimationContainer from './global/animation-container'

function HeroSection() {
  return (
    <div className="relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden py-10 md:h-[60rem] md:py-0 lg:h-[70rem] xl:h-[80rem]">
      {/* <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" /> */}
      <div className="relative z-10 p-4 text-center">
        <h1 className="font-heading w-full max-w-[900px] text-balance py-6 text-center text-4xl font-semibold !leading-[1.15] tracking-normal text-foreground sm:text-6xl md:text-6xl lg:text-7xl">
          You have stepped into the{' '}
          <span className="inline-block bg-gradient-to-r from-[#fcd675] to-[#b27fd2] bg-clip-text font-bold text-transparent">
            Creator&apos;s Worlds
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-400 sm:text-lg md:text-xl">
          Creator's world's largest Discord's app hub, where creators of all kinds come together in
          a friendly and supportive environment. Whether you're a seasoned content creator or just
          starting out, our server welcomes everyone with open arms. Click the button below to join
          our vibrant community today!
        </p>
        <div className="mt-4">
          <Link href={'https://discord.gg/7SAcEv7MDd'}>
            <Button
              color="default"
              variant="flat"
              className="px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base md:px-10 md:py-5 md:text-lg"
            >
              Join Now
            </Button>
          </Link>
        </div>
        {/* <AnimationContainer delay={0.1} className="relative bg-transparent w-full">
        <div className="absolute  left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
        <div className="relative mt-4 rounded-xl">
          <img
            src="https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/demos/cwlobby.png"
            alt="Hero Image"
            className="hidden w-[700px] rounded-[inherit] border object-contain shadow-lg dark:block"
          />
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
        </AnimationContainer> */}
        <AnimationContainer
          delay={0.2}
          className="relative w-full bg-transparent px-2 pb-20 pt-20 md:py-32"
        >
          <div className="gradient absolute inset-0 left-1/2 h-1/4 w-3/4 -translate-x-1/2 animate-image-glow blur-[5rem] md:top-[10%] md:h-1/3"></div>
          <div className="-m-2 rounded-xl bg-opacity-50 p-2 ring-1 ring-inset ring-foreground/20 backdrop-blur-3xl lg:-m-4 lg:rounded-2xl">
            <BorderBeam size={250} duration={12} delay={9} borderWidth={2} />
            <Image
              src="https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/demos/cwlobby.png"
              alt="Hero Image"
              className="ring-border w-[900px] rounded-md bg-foreground/10 ring-1 lg:rounded-xl"
            />
            <div className="absolute inset-x-0 -bottom-4 z-40 h-1/2 w-full bg-gradient-to-t from-background"></div>
            <div className="absolute inset-x-0 bottom-0 z-50 h-1/4 w-full bg-gradient-to-t from-background md:-bottom-8"></div>
          </div>
        </AnimationContainer>
      </div>
    </div>
  )
}

export default HeroSection
