import React from 'react'
import { Post } from '@/app/blog/types'
import { Image, Chip } from '@nextui-org/react'

// Allowed colors for Chip
type ChipColor = 'primary' | 'default' | 'secondary' | 'success' | 'warning' | 'danger'

// Utility function to get valid gradient classes
const getGradientClass = (color: string | undefined): string => {
  switch (color) {
    case 'teal':
      return 'from-teal-900/25 to-black/20'
    case 'blue':
      return 'from-blue-900/25 to-black/20'
    case 'orange':
      return 'from-orange-900/25 to-black/20'
    default:
      return 'from-neutral-900/25 to-black/20' // Default gradient
  }
}

interface BlogPostProps {
  post: Post
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const chipColor: ChipColor = (post.chip as ChipColor) || 'primary'
  const bgGradientClass = `bg-gradient-to-b ${getGradientClass(post.color)}`

  return (
    <div className="min-h-screen bg-black py-12 pt-0">
      <div
        className={`h-72 w-full items-center justify-start ${bgGradientClass} p-4 backdrop-blur-3xl md:h-96 md:w-auto md:pe-[38rem] md:ps-24`}
      >
        <div className="relative z-10 p-3 sm:mt-3 md:mt-3 md:p-4 lg:p-0">
          <Chip color={chipColor} variant="flat" size="lg">
            {post.section}
          </Chip>
        </div>
        <div className="relative z-10 p-3 sm:mt-3 md:mt-3 md:p-4 lg:p-0">
          <h2 className="mt-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl">
            {post.title}
          </h2>
          <p className="mx-auto mt-5 text-lg font-normal text-neutral-400 md:mt-7 md:text-2xl">
            {post.overview}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col md:flex-row">
        <div className="w-full flex-1 items-center justify-start border-b-1 border-neutral-800 md:w-4/6 md:border-b-0 md:border-r-1">
          <Image src={post.image} alt={post.title} className="mt-4 rounded-md px-5 md:ps-24" />
          <div
            className="mt-6 max-w-4xl p-5 text-lg text-neutral-300 md:ps-24"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <div className="h-auto w-full md:w-2/6">
          <div className="mt-4 flex flex-col items-center justify-center text-center">
            <Image
              src={post.profilePicture}
              alt={`${post.author} profile picture`}
              width={90}
              height={90}
              className="mt-8 items-center justify-center rounded-full"
            />
            <p className="mx-auto mt-4 text-base font-normal text-neutral-100 sm:text-lg md:text-xl">
              {post.author}, {post.role}
            </p>
            <p className="mx-auto mt-2 text-base font-normal text-neutral-400 sm:text-lg md:text-xl">
              {post.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
