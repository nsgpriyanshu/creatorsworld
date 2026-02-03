import Wrapper from "../global/wrapper";
import { Skeleton } from "@repo/ui/components/ui/skeleton";
import AnimationContainer from "../global/animation-container";

const FeaturedBlogCardSkeleton = () => {
  return (
    <Wrapper className="relative pb-20 lg:pb-32">
      <AnimationContainer animation="scaleUp" delay={0.1}>
        <article className="grid gap-8 rounded-3xl border border-border bg-muted/30 p-6 md:grid-cols-2">
          {/* Thumbnail */}
          <Skeleton className="aspect-video w-full rounded-2xl" />

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div className="space-y-3">
              {/* Badge */}
              <Skeleton className="h-5 w-20 rounded-full" />

              {/* Title */}
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-4/5" />

              {/* Excerpt */}
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>

              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </article>
      </AnimationContainer>
    </Wrapper>
  );
};

export default FeaturedBlogCardSkeleton;
