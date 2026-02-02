import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@repo/ui/components/ui/badge'
import { BlogPost } from '../../lib/db/types'

type Props = {
  post: BlogPost
}

const FeaturedBlogCard = ({ post }: Props) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group grid gap-8 rounded-3xl border border-border p-6 md:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <Image
            src={post.thumbnail_url}
            alt={post.title}
            fill
            className="object-cover transition group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <Badge variant="outline" className="mb-3">
              Featured
            </Badge>

            <h2 className="text-2xl font-semibold">{post.title}</h2>

            <p className="mt-3 text-muted-foreground">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <Image
              src={post.author.avatar_url}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{post.author.name}</span>
            <span>·</span>
            <span>{post.reading_time} min read</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedBlogCard
