import { Button } from "@repo/ui/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import AnimationContainer from "../global/animation-container";
import GradientASCII from "../global/gradient-ascii";

export function HomeHero() {
  return (
    <section className="relative isolate mx-auto flex min-h-[62vh] w-full max-w-7xl items-center justify-center overflow-hidden rounded-md border border-border px-6 py-16 text-center md:min-h-[66vh]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
      >
        <GradientASCII
          className="h-full w-full"
          colors={["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"]}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.65}
          speed={0.5}
          mouseInteraction={false}
          clickEffect="none"
        />
      </div>
      <AnimationContainer animation="fadeUp">
        <div className="relative z-10 flex flex-col items-center gap-5">
          <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-6xl">
            Creator&apos;s World
          </h1>
          <ul
            aria-label="Build, manage, and ship"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          >
            {["Build", "Manage", "Ship"].map((label, index) => (
              <li key={label} className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-muted-foreground">
                  0{index + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                  {label}
                </span>
              </li>
            ))}
          </ul>
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="mt-2 gap-2"
          >
            Start Building
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </AnimationContainer>
    </section>
  );
}
