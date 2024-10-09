import AnimationContainer from './global/animation-container'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'

function GettingStarted() {
  return (
    <div className="relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md py-10 md:h-[30rem] md:py-0 lg:h-[40rem]">
      <AnimationContainer delay={0.1}>
        <div className="relative z-10 p-4 text-center">
          <h2
            className="mt-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl"
            id="getting-started"
          >
            Getting Started
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300 sm:text-lg md:text-xl">
            Explore different channels where you can engage and enjoy. Dive deeper into our
            community to discover more!
          </p>
        </div>
      </AnimationContainer>
      <AnimationContainer delay={0.2}>
        <div className="flex flex-wrap items-center justify-center py-10">
          <PinContainer title="/nsgpriyanshu" href="https://nsgpriyanshu.github.io">
            <a
              href="https://nsgpriyanshu.github.io"
              className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2"
            >
              <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">
                Educational Contents
              </h3>
              <div className="!m-0 !p-0 text-base font-normal">
                <span className="text-slate-500">
                  We provide different types of videos related to AI and programming
                </span>
              </div>
              <div className="mt-4 flex w-full flex-1 overflow-hidden rounded-lg bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500">
                <Image
                  src="https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/icons/colourfull-pfp.jpg"
                  width={800}
                  height={800}
                  alt="colourfull-pfp"
                />
              </div>
            </a>
          </PinContainer>

          <PinContainer title="/shadowfighters" href="https://www.youtube.com/@shadow_fighters_3">
            <a
              href="https://www.youtube.com/@shadow_fighters_3"
              className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2"
            >
              <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">
                Gaming Contents
              </h3>
              <div className="!m-0 !p-0 text-base font-normal">
                <span className="text-slate-500">
                  We provide gaming-related videos also, for example leaks
                </span>
              </div>
              <div className="mt-4 flex w-full flex-1 overflow-hidden rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                <Image
                  src="https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/demos/shadowfightlogo.jpg"
                  width={600}
                  height={600}
                  alt="colourfull-pfp"
                />
              </div>
            </a>
          </PinContainer>
        </div>
      </AnimationContainer>
    </div>
  )
}

export default GettingStarted
