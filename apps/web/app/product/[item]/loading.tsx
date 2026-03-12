import Wrapper from "../../../components/global/wrapper";
import { Skeleton } from "@repo/ui/components/ui/skeleton";

export default function ProductItemLoading() {
  return (
    <Wrapper className="relative overflow-x-hidden py-12 lg:py-16">
      <div className="mx-auto w-full max-w-6xl rounded-md border border-border">
        <div className="flex justify-center border-b border-dashed border-border p-4">
          <Skeleton className="h-6 w-28 rounded-md" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex min-w-0 flex-col">
            <div className="border-b border-dashed border-border p-6 space-y-3">
              <Skeleton className="h-8 w-3/4 rounded-md" />
              <Skeleton className="h-8 w-1/2 rounded-md" />
            </div>
            <div className="border-b border-dashed border-border p-6 space-y-2">
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-5/6 rounded-md" />
            </div>
            <div className="border-b border-dashed border-border p-6">
              <Skeleton className="h-6 w-32 rounded-md" />
            </div>
            <div className="p-6 flex gap-4">
              <Skeleton className="h-10 w-32 rounded-md" />
              <Skeleton className="h-10 w-32 rounded-md" />
            </div>
          </div>
          <div className="border-t border-dashed border-border lg:border-t-0 lg:border-l">
            <div className="flex h-full items-center justify-center p-8">
              <Skeleton className="aspect-square w-full max-w-sm rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
