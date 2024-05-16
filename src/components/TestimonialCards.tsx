'use client'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const testimonial = [
  {
    quote: 'Testimonial',
    name: 'Name',
    title: 'Title',
  },
  {
    quote: 'Testimonial',
    name: 'Name',
    title: 'Title',
  },
  {
    quote: 'Testimonial',
    name: 'Name',
    title: 'Title',
  },
  {
    quote: 'Testimonial',
    name: 'Name',
    title: 'Title',
  },
  {
    quote: 'Testimonial',
    name: 'Name',
    title: 'Title',
  },
]

function Testimonialcards() {
  return (
    <div className="h-[35rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-center text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Creator Chronicles: Voices of our user Creators
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={testimonial} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  )
}

export default Testimonialcards
