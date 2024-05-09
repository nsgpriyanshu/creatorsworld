import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 relative z-10 text-center">
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #EF629F, #EECDA3)',
          }}
        >
          Creator's World
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Creator's world's largest Discord's bot community, where creators of all kinds come
          together in a friendly and supportive environment. Whether you're a seasoned content
          creator or just starting out, our server welcomes everyone with open arms. Click the
          button given below to join our vibrant community today!
        </p>
        <div className="mt-4">
          <Link href={'https://discord.gg/7SAcEv7MDd'}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
