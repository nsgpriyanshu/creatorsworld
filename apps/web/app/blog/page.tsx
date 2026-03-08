import BlogHero from "../../components/blog/blog-hero";
import BlogList from "../../components/blog/list";
import CategoryFilter from "../../components/blog/category-filter";
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
      <Wrapper className="space-y-8 md:space-y-12 py-8 md:py-16 px-4 md:px-0">
        {/* Category Navigation */}
        <CategoryFilter />

        {/* Blog list */}
        {restPosts.length > 0 ? (
          <section>
            <BlogList posts={restPosts} />
          </section>
        ) : (
          <section className="flex flex-col items-center justify-center py-12 md:py-20 text-center">
            <div className="space-y-3 md:space-y-4 px-4">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                No Blogs Yet
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
                We're working on some great content. Check back soon for
                insightful articles and stories!
              </p>
            </div>
          </section>
        )}
      </Wrapper>
    </div>
  );
}
