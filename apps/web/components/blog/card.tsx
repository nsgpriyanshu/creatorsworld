import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@repo/ui/components/ui/badge'
import { BlogPost } from '../../lib/db/types'

type Props = {
  post: BlogPost
}

const BlogCard = ({ post }: Props) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-border transition hover:border-[#f10a0a]/50">
        {/* Thumbnail */}
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={post.thumbnail_url}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          {/* Tags */}
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold leading-snug">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-muted-foreground">
            <Image
              src={post.author.avatar_url}
              alt={post.author.name}
              width={28}
              height={28}
              className="rounded-full"
            />

            <div className="flex flex-col">
              <span className="font-medium text-foreground">
                {post.author.name}
              </span>
              <span>{post.author.role}</span>
            </div>

            <span className="ml-auto">
              {post.reading_time} min
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BlogCard
