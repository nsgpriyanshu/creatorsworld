import { div } from 'three/examples/jsm/nodes/math/OperatorNode.js'
import blogData from '@/data/blog.json'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'

function blogPosts() {
  return (
    <div className="sm:py-32 min-h-screen bg-black py-12 pt-36 items-center justify-center w-ful  dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-auto md:h-28 w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
          <h1
            className="mt-5 md:mt-0 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            id="getting-started"
          >
            Creator's Blog
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Read about the blogs written by our creators
          </p>
        </div>
        <div className="w-full mt-16 justify-center items-center mx-auto space-y-16">
          {blogData.blogs.map(blogs => (
            <article key={blogs.id} className="flex max-w-4xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-md">
                <time dateTime={blogs.date} className="text-white-400">
                  {blogs.date}
                </time>
                <a
                  href={blogs.section}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {blogs.section}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-3xl font-semibold leading-6 text-white-400 group-hover:text-neutra-300">
                  <a href={blogs.link}>
                    <span className="absolute inset-0" />
                    {blogs.title}
                  </a>
                </h3>
                <Image
                  src={blogs.image}
                  height={200}
                  width={400}
                  className="mt-5 md:h-[300px] md:w-[600px] h-[200px] w-[400px] object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={blogs.description}
                />
                <p className="mt-5 text-lg leading-6 text-neutral-400">{blogs.content}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={blogs.profilePicture}
                  alt="author"
                  className="h-14 w-14 rounded-full bg-gray-50"
                />
                <div className="text-md leading-6">
                  <p className="font-semibold text-neutral-500">Author</p>
                  <p className="font-semibold text-neutral-400">{blogs.author}</p>
                  <p className="text-neutral-300">{blogs.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default blogPosts
