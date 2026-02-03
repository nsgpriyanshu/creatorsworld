import Wrapper from "../global/wrapper";
import BlogCardSkeleton from "./card-skeleton";

const BlogListSkeleton = () => {
  return (
    <Wrapper>
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </section>
    </Wrapper>
  );
};

export default BlogListSkeleton;
