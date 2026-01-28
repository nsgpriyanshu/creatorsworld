import { Skeleton } from "@repo/ui/components/ui/skeleton"

type SkeletonBlock =
  | { type: "title"; size?: "sm" | "md" | "lg" }
  | { type: "text"; lines?: number }
  | { type: "icon" }
  | { type: "badge" }
  | { type: "button"; width?: string }

const TITLE_SIZE_MAP = {
  sm: "h-6 w-1/3",
  md: "h-8 w-1/2",
  lg: "h-10 w-2/3",
}

export function AutoSkeleton({
  blocks,
  className,
}: {
  blocks: SkeletonBlock[]
  className?: string
}) {
  return (
    <div className={["space-y-4", className].join(" ")}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "title":
            return (
              <Skeleton
                key={i}
                className={TITLE_SIZE_MAP[block.size ?? "md"]}
              />
            )

          case "text":
            return (
              <div key={i} className="space-y-2">
                {Array.from({ length: block.lines ?? 3 }).map((_, j) => (
                  <Skeleton key={j} className="h-4 w-full" />
                ))}
              </div>
            )

          case "icon":
            return <Skeleton key={i} className="h-14 w-14 rounded-2xl" />

          case "badge":
            return <Skeleton key={i} className="h-6 w-24 rounded-full" />

          case "button":
            return (
              <Skeleton
                key={i}
                className={`h-10 ${block.width ?? "w-32"} rounded-md`}
              />
            )
        }
      })}
    </div>
  )
}
