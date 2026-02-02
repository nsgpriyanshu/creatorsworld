import BlogCard from './card'
import { BlogPost } from '../../lib/db/types'

type Props = {
  posts: BlogPost[]
}

const BlogList = ({ posts }: Props) => {
  return (
    <section className="grid gap-8 md:grid-cols-2">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </section>
  )
}

export default BlogList
