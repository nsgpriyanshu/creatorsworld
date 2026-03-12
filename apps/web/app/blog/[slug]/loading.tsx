import Wrapper from "../../../components/global/wrapper";
import { Skeleton } from "@repo/ui/components/ui/skeleton";

export default function BlogPostLoading() {
  return (
    <Wrapper className="relative overflow-x-hidden py-12 lg:py-16 px-0">
      <div className="px-4 lg:px-0">
        <div className="mx-auto flex max-w-6xl items-center justify-center rounded-md border border-border bg-background/80 px-3 py-2">
          <Skeleton className="h-4 w-48 rounded-md" />
        </div>
      </div>

      <div className="mt-6 px-4 lg:px-0">
        <div className="mx-auto max-w-6xl rounded-md border border-border overflow-hidden">
          <div className="border-b border-dashed border-border p-4 flex justify-center gap-2">
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-14 rounded-full" />
          </div>
          <div className="border-b border-dashed border-border px-6 py-8 text-center space-y-3">
            <Skeleton className="h-10 w-full max-w-2xl mx-auto rounded-md" />
            <Skeleton className="h-10 w-3/4 mx-auto rounded-md" />
            <Skeleton className="h-4 w-2/3 mx-auto rounded-md" />
          </div>
          <div className="p-4 flex justify-center gap-4">
            <Skeleton className="h-4 w-32 rounded-md" />
            <Skeleton className="h-4 w-24 rounded-md" />
            <Skeleton className="h-4 w-28 rounded-md" />
          </div>
        </div>
      </div>

      <div className="my-8 md:my-10 h-px bg-border/60" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:gap-10 lg:grid-cols-4 px-4 lg:px-0">
        <div className="lg:col-span-3 rounded-md border border-border overflow-hidden">
          <div className="border-b border-dashed border-border p-4">
            <Skeleton className="h-4 w-32 rounded-md" />
          </div>
          <div className="p-6 space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-full rounded-md" />
            ))}
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="rounded-md border border-border overflow-hidden">
            <div className="border-b border-dashed border-border p-3">
              <Skeleton className="h-3 w-24 rounded-md" />
            </div>
            <div className="p-3 space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-3 w-full rounded-md" />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Wrapper>
  );
}
