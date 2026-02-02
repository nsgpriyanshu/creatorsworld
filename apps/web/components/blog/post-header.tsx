import Image from 'next/image'
import { Badge } from '@repo/ui/components/ui/badge'
import { BlogPost } from '../../lib/db/types'

type Props = {
  post: BlogPost
}

const BlogPostHeader = ({ post }: Props) => {
  return (
    <header className="mb-16 text-center">
      <div className="flex justify-center gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="mt-6 text-balance text-4xl font-semibold md:text-5xl">
        {post.title}
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
        {post.excerpt}
      </p>

      <div className="mt-8 flex justify-center items-center gap-4 text-sm text-muted-foreground">
        <Image
          src={post.author.avatar_url}
          alt={post.author.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="text-left">
          <p className="font-medium text-foreground">
            {post.author.name}
          </p>
          <p>{post.author.role}</p>
        </div>
        <span>·</span>
        <span>{post.reading_time} min read</span>
      </div>
    </header>
  )
}

export default BlogPostHeader
