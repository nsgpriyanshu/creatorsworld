import BlogHero from "../../components/blog/blog-hero";
import FeaturedBlogCard from "../../components/blog/featured-card";
import BlogList from "../../components/blog/list";
import CategoryFilter from "../../components/blog/category-filter";
import Wrapper from "../../components/global/wrapper";
import { getFeaturedPost, getAllPosts } from "../../lib/db/queries";

interface BlogPageProps {
  searchParams?: {
    category?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const category = searchParams?.category;

  const [featured, posts] = await Promise.all([
    getFeaturedPost(),
    getAllPosts(),
  ]);

  // apply category filter if one is specified (and not "all")
  let filteredPosts = posts;
  if (category && category !== "all") {
    const normalized = category.toLowerCase();
    filteredPosts = posts.filter((post) =>
      post.tags.some(
        (tag) => tag.toLowerCase().replace(/\s+/g, "-") === normalized,
      ),
    );
  }

  // determine which featured post (if any) should be shown
  let displayFeatured = featured;
  if (category && category !== "all") {
    if (
      displayFeatured &&
      !filteredPosts.some((p) => p.id === displayFeatured?.id)
    ) {
      displayFeatured = null;
    }
  }

  const restPosts = displayFeatured
    ? filteredPosts.filter((post) => post.id !== displayFeatured?.id)
    : filteredPosts;

  return (
    <div className="relative flex w-full flex-col">
      {/* Hero */}
      <section className="w-full pt-12 pb-6 md:pt-8 md:pb-8">
        <BlogHero />
      </section>

      {/* Content */}
      <Wrapper className="space-y-4 md:space-y-6 pt-0 pb-8 md:pb-12 px-4 md:px-0">
        {/* Category Navigation */}
        <CategoryFilter />

        {/* Featured post (if applicable) */}
        {displayFeatured && (
          <section>
            <FeaturedBlogCard post={displayFeatured} />
          </section>
        )}

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
