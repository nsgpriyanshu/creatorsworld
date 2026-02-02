import BlogHero from "../../components/blog/blog-hero"
import FeaturedBlogCard from "../../components/blog/featured-card"
import BlogList from "../../components/blog/list"
import { getFeaturedPost, getAllPosts } from "../../lib/db/queries"


export default async function BlogPage() {
  const [featured, posts] = await Promise.all([
    getFeaturedPost(),
    getAllPosts(),
  ])

  const rest = featured
    ? posts.filter((p) => p.id !== featured.id)
    : posts

  return (
    <main className="space-y-20">
      <BlogHero />
      {featured && <FeaturedBlogCard post={featured} />}
      <BlogList posts={rest} />
    </main>
  )
}
