'use client'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'
import AnimationContainer from './global/animation-container'

const creators = [
  {
    id: 1,
    name: 'nsgpriyanshu',
    designation: 'CEO',
    image:
      'https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/icons/colourfull-pfp.jpg',
  },
  {
    id: 4,
    name: 'xevientt',
    designation: 'Cheif Administrator',
    image:
      'https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/icons/xevy.jpg',
  },
  {
    id: 2,
    name: 'rejistrado',
    designation: 'COO / Owner of Shadow Fighters',
    image:
      'https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/icons/rejistrado.jpg',
  },
  {
    id: 5,
    name: '_azure_931_',
    designation: 'Cheif Administrator',
    image:
      'https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/icons/azure.jpg',
  },
  {
    id: 3,
    name: 'mcpepandagaming',
    designation: 'COO / Owner of Nexus',
    image:
      'https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/icons/mcpepandagaming.jpg',
  },
  {
    id: 6,
    name: 'mnemos_the_ancient',
    designation: 'Cheif Administrator',
    image:
      'https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/icons/mnemos.jpg',
  },
]

function Moderators() {
  return (
    <div className="relative flex h-[35rem] items-center justify-center overflow-hidden">
      <WavyBackground className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center">
        <AnimationContainer delay={0.2}>
          <div className="relative z-10 p-4 text-center">
            <h2 className="mt-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl">
              Discover: Creators Council
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300 sm:text-lg md:text-xl">
              Meet with the regents of creators council, the pillar of creator's world
            </p>
          </div>
        </AnimationContainer>
        <AnimationContainer delay={0.3}>
          <div className="mb-10 flex w-full flex-row items-center justify-center">
            <AnimatedTooltip items={creators} />
          </div>
        </AnimationContainer>
      </WavyBackground>
    </div>
  )
}

export default Moderators
