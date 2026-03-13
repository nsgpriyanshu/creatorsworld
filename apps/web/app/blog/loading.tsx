import Wrapper from "../../components/global/wrapper";
import { Skeleton } from "@repo/ui/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <Wrapper className="relative overflow-x-hidden  pt-24 pb-12 md:pt-24 md:pb-16">
      <div className="mx-auto w-full max-w-6xl rounded-md border border-border">
        <div className="flex justify-center border-b border-dashed border-border p-4">
          <Skeleton className="h-6 w-28 rounded-md" />
        </div>
        <div className="border-b border-dashed border-border px-6 py-10 text-center space-y-3">
          <Skeleton className="h-10 w-full max-w-2xl mx-auto rounded-md" />
          <Skeleton className="h-10 w-3/4 mx-auto rounded-md" />
        </div>
        <div className="border-b border-dashed border-border px-6 py-8 text-center space-y-2">
          <Skeleton className="h-4 w-full max-w-lg mx-auto rounded-md" />
          <Skeleton className="h-4 w-3/4 mx-auto rounded-md" />
        </div>
        <div className="p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-md border border-border"
              >
                <Skeleton className="h-40 w-full rounded-none" />
                <div className="space-y-3 border-t border-dashed border-border p-4">
                  <Skeleton className="h-4 w-20 rounded-md" />
                  <Skeleton className="h-5 w-3/4 rounded-md" />
                  <Skeleton className="h-4 w-full rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
