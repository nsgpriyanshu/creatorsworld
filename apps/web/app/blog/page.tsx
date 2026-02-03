import BlogHero from "../../components/blog/blog-hero";
import FeaturedBlogCard from "../../components/blog/featured-card";
import FeaturedBlogCardSkeleton from "../../components/blog/featured-card-skeleton";
import BlogList from "../../components/blog/list";
import Wrapper from "../../components/global/wrapper";
import { getFeaturedPost, getAllPosts } from "../../lib/db/queries";

export default async function BlogPage() {
  const [featured, posts] = await Promise.all([
    getFeaturedPost(),
    getAllPosts(),
  ]);

  const restPosts = featured
    ? posts.filter((post) => post.id !== featured.id)
    : posts;

  return (
    <div className="relative flex w-full flex-col">
      {/* Hero */}
      <section className="w-full">
        <BlogHero />
      </section>

      {/* Content */}
      <Wrapper className="space-y-16 pb-24">
        {/* Featured */}
        <section>
          {featured ? (
            <FeaturedBlogCard post={featured} />
          ) : (
            <FeaturedBlogCardSkeleton />
          )}
        </section>

        {/* Blog list */}
        {restPosts.length > 0 && (
          <section>
            <BlogList posts={restPosts} />
          </section>
        )}
      </Wrapper>
    </div>
  );
}
