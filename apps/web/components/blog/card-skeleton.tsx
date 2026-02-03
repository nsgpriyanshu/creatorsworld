import { Skeleton } from "@repo/ui/components/ui/skeleton";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";

const BlogCardSkeleton = () => {
  return (
    <AnimationContainer animation="fadeUp">
      <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-muted/20">
        {/* Thumbnail */}
        <Skeleton className="aspect-video w-full rounded-t-2xl" />

        {/* Content */}
        <div className="flex flex-col justify-between p-4">
          <div className="space-y-2">
            {/* Tags */}
            <div className="flex gap-1">
              <Skeleton className="h-5 w-12 rounded" />
              <Skeleton className="h-5 w-10 rounded" />
            </div>

            {/* Title */}
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />

            {/* Excerpt */}
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-4 w-16" />
            </div>

            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </article>
    </AnimationContainer>
  );
};

export default BlogCardSkeleton;
