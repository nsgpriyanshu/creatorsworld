"use client";

import React from "react";
import { Sparkles, Users, Rocket, Globe } from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Badge } from "@repo/ui/components/ui/badge";
import { cn } from "@repo/ui/lib/utils";

import { FEATURES } from "../../constants/features";

type FeatureIcon = "community" | "growth" | "global";

const ICON_MAP: Record<
  FeatureIcon,
  React.ComponentType<{ className?: string }>
> = {
  community: Users,
  growth: Rocket,
  global: Globe,
};

export default function Features() {
  return (
    <Wrapper className="relative w-full overflow-hidden py-24 lg:py-36">
      {/* Header */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
          >
            {/* moving shine */}
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

            <span className="relative flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#f10a0a] transition-transform duration-300 group-hover:rotate-12" />
              <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Features
              </span>
            </span>
          </Badge>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.08}>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Built for creators. Backed by community
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.16}>
          <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
            Everything you need to build, collaborate, and grow — together.
          </p>
        </AnimationContainer>
      </div>

      {/* Vercel-style Feature Grid */}
      <div className="relative z-10 mx-auto mt-24 max-w-7xl px-4">
        <div
          className={cn(
            "grid grid-cols-1 gap-6",
            "sm:grid-cols-2",
            "lg:grid-cols-3",
          )}
        >
          {FEATURES.map((feature, index) => {
            const Icon = ICON_MAP[feature.icon];

            return (
              <AnimationContainer
                key={feature.title}
                animation="fadeUp"
                delay={0.06 * index}
              >
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border border-border",
                    "bg-card px-8 py-9",
                    "transition-transform duration-200 ease-out",
                    "hover:-translate-y-1",
                  )}
                >
                  {/* Icon */}
                  <div className="mb-6 flex size-11 items-center justify-center rounded-2xl border border-border bg-background">
                    <Icon className="h-5 w-5 text-[#f10a0a]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-muted-foreground md:text-base">
                    {feature.description}
                  </p>

                  {/* Hover ring (cheap + CLS safe) */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition-colors hover:ring-[#f10a0a]/20" />
                </div>
              </AnimationContainer>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
