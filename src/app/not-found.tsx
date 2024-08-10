import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md py-10 md:h-screen md:py-0 lg:h-screen xl:h-screen">
      <div className="relative z-10 p-4 text-center">
        <h2
          className="mt-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl"
          id="getting-started"
        >
          Error 404
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300 sm:text-lg md:text-xl">
          Could not find requested resource
        </p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  )
}
