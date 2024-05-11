import { PinContainer } from './ui/3d-pin'

function GettingStarted() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <h1
        className="mt-5 md:mt-0 text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        id="getting-started"
      >
        Getting Started
      </h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Explore our branches and domains
      </p>

      <div className="flex flex-wrap justify-center items-center py-10">
        <PinContainer title="/nsgpriyanshu" href="https://nsgpriyanshu.github.io">
          <a
            href="https://nsgpriyanshu.github.io"
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]"
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Educational Contents
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                We provide different types of videos related to AI and programming
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500" />
          </a>
        </PinContainer>

        <PinContainer title="/shadowfighters" href="https://www.youtube.com/@shadow_fighters_3">
          <a
            href="https://www.youtube.com/@shadow_fighters_3"
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]"
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Gaming Contents
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                We provide gaming-related videos also, for example leaks
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </a>
        </PinContainer>

        {/* <PinContainer title="/soon" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Soon
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">Something coming soon</span>
            </div>
             <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-[#ef629f] via-[#eecda3] to-[#db4385]" />
          </div>
        </PinContainer> */}
      </div>
    </div>
  )
}

export default GettingStarted
