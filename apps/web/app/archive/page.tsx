import Link from "next/link";
import { Archive, ArrowLeft } from "lucide-react";

import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";

import AnimationContainer from "../../components/global/animation-container";
import Wrapper from "../../components/global/wrapper";

export default function ArchivePage() {
  return (
    <Wrapper className="relative w-full overflow-hidden pt-24 pb-16 md:pt-24 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
      >
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <section className="mx-auto flex min-h-[55vh] w-full max-w-6xl flex-col items-center justify-center gap-6 rounded-md border border-border px-6 py-16 text-center">
        <AnimationContainer animation="fadeUp">
          <div className="flex flex-col items-center gap-6">
            <Badge
              variant="outline"
              className="gap-2 border-border px-4 py-1.5"
            >
              <Archive className="h-4 w-4" />
              Community Archive
            </Badge>
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                The archive is being rebuilt
              </h1>
              <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                Archived community content is temporarily unavailable while we
                focus on the new Creator&apos;s World site.
              </p>
            </div>
            <Button
              nativeButton={false}
              size="lg"
              className="h-11 gap-2 rounded-md px-8 text-base md:h-12"
              render={<Link href="/" />}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </AnimationContainer>
      </section>
    </Wrapper>
  );
}
