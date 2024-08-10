import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { Button, Image } from '@nextui-org/react'
import NextImage from 'next/image'
import DOMPurify from 'dompurify'

const BlogPage = () => {
  const posts = getAllPosts()

  return (
    <div className="flex min-h-screen w-auto flex-col justify-center gap-6 bg-black py-12 pt-36">
      <div className="relative z-10 p-4 text-center">
        <h2 className="mt-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:mt-0 md:text-4xl lg:text-5xl">
          Creators Blog
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300 sm:text-lg md:text-xl">
          Explore the Tech secret behind the scenes an upcoming innovation
        </p>
      </div>
      <div className="flex w-auto flex-col items-center justify-center px-5 md:flex-row">
        <ul>
          {posts.map((post) => (
            <li
              key={post.slug}
              className="mb-6 w-auto rounded-lg bg-neutral-900 p-6 md:max-w-[48rem]"
            >
              <Link href={`/blog/${post.slug}`} passHref>
                <a>
                  <h3 className="text-xl font-bold text-neutral-50">
                    {DOMPurify.sanitize(post.title)}
                  </h3>
                  <p className="mt-2 text-neutral-400">
                    {DOMPurify.sanitize(post.description)}
                  </p>
                  <Image
                    as={NextImage}
                    width={30}
                    height={30}
                    src={post.profilePicture}
                    alt={DOMPurify.sanitize(post.author)}
                    className="mt-4 rounded-md"
                  />
                  <p className="mt-2 text-neutral-50">
                    {DOMPurify.sanitize(post.author)}, {DOMPurify.sanitize(post.role)}
                  </p>
                  <p className="mt-2 text-neutral-400">{DOMPurify.sanitize(post.date)}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BlogPage

