'use client'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'

const creators = [
  {
    id: 1,
    name: 'nsgpriyanshu',
    designation: 'CEO',
    image: './images/colourfull-pfp.jpg',
  },
  {
    id: 4,
    name: 'xevientt',
    designation: 'Cheif Administrator',
    image: './images/xevy.jpg',
  },
  {
    id: 2,
    name: 'rejistrado',
    designation: 'COO / Owner of Shadow Fighters',
    image: './images/rejistrado.jpg',
  },
  {
    id: 5,
    name: '_azure_931_',
    designation: 'Cheif Administrator',
    image: './images/azure.jpg',
  },
  {
    id: 3,
    name: 'mcpepandagaming',
    designation: 'COO / Owner of Nexus',
    image: './images/mcpepandagaming.jpg',
  },
  {
    id: 6,
    name: 'mnemos_the_ancient',
    designation: 'Cheif Administrator',
    image: '/images/mnemos.jpg',
  },
  {
    id: 7,
    name: 'lordmikey3093',
    designation: 'Cheif Administrator',
    image: './images/lordmikey.jpg',
  },
]

function Moderators() {
  return (
    <div className="relative h-[35rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold text-center mb-8">
          Discover: Creators Council
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Meet with the regents of creators council, the pillar of creatos world
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={creators} />
        </div>
      </WavyBackground>
    </div>
  )
}

export default Moderators
