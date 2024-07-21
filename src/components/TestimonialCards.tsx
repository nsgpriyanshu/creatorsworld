'use client'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const testimonial = [
  {
    quote: 'Overall the UI looks neat. You may add some more features to make it more interesting.',
    name: 'Adarsh',
    title: 'Owner of Shadow Fight Fanclub, Youtuber',
  },
  {
    quote: 'Such a cool website with a modern look',
    name: 'Sourav',
    title: 'Admin of Nexus',
  },
  {
    quote: 'Omg its so cool',
    name: 'Azza',
    title: 'Early Supporter',
  },
  // {
  //   quote: 'Testimonial',
  //   name: 'Name',
  //   title: 'Title',
  // },
  // {
  //   quote: 'Testimonial',
  //   name: 'Name',
  //   title: 'Title',
  // },
]

function Testimonialcards() {
  return (
    <div className="relative flex h-[25rem] w-full flex-col items-center justify-center overflow-hidden dark:bg-black dark:bg-grid-white/[0.1]">
      <div className="relative z-10 p-4 text-center">
        <h2
          className="mt-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl"
          id="getting-started"
        >
          Creator Chronicles: Voices of our user Creators
        </h2>
      </div>
      <div className="flex w-full justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={testimonial} direction="right" speed="normal" />
        </div>
      </div>
    </div>
  )
}

export default Testimonialcards
