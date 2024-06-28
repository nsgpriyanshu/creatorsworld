import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
import { BorderBeam } from "@/components/magicui/border-beam";

function HeroSection() {
  return (
    <div className="relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md py-10 md:h-[60rem] md:py-0">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <div className="relative z-10 p-4 text-center">
        <h1
          className="mt-20 bg-clip-text text-4xl font-bold text-transparent md:mt-0 md:text-7xl"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #fcd675, #b27fd2)',
          }}
        >
          Creator's World
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300 md:text-lg">
          Creator's world's largest Discord's app hub, where creators of all kinds come
          together in a friendly and supportive environment. Whether you're a seasoned content
          creator or just starting out, our server welcomes everyone with open arms. Click the
          button given below to join our vibrant community today!
        </p>
        <div className="mt-4">
          <Link href={'https://discord.gg/7SAcEv7MDd'}>
            <Button
              borderRadius="1.75rem"
              className="border-neutral-200 bg-white text-black text-sm md:text-sm dark:border-slate-800 dark:bg-black dark:text-white"
            >
              Join Now
            </Button>
          </Link>
        </div>

        <div className="mt-4 relative rounded-xl">
          <img
            src="demos/cwlobby.png"
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
