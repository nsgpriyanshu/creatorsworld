import React from 'react'
import { Post } from '@/app/blog/types'
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'

interface BlogPostProps {
  post: Post
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="flex min-h-screen w-auto flex-wrap items-center justify-center gap-6 bg-black py-12 pt-36">
      <div className='flex flex-wrap items-center justify-center w-[60rem]'>
        <div className="relative z-10 p-4 text-center justify-start items-center">
          <h2 className="mt-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl">
            {post.title}
          </h2>
        </div>
        <Image
          as={NextImage}
          src={post.image}
          alt={post.title}
          width={400}
          height={400}
          className="mt-4 rounded-md"
        />
        <div
          className="mx-auto mt-6 max-w-3xl px-4 text-lg text-neutral-300 justify-start items-center"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <div className='justify-center items-center w-96 bg-white'>
      <div className="flex flex-col items-center justify-center">
          <Image
            as={NextImage}
            src={post.profilePicture}
            alt={`${post.author} profile picture`}
            width={50}
            height={50}
            className="mt-4 rounded-full"
          />
          <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-100 sm:text-lg md:text-xl">
            {post.author}, {post.role}
          </p>
          <p className="mx-auto mt-2 max-w-lg text-center text-base font-normal text-neutral-400 sm:text-lg md:text-xl">
            {post.date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
