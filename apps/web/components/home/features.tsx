"use client";

import React from "react";
import { Sparkles, Users, Rocket, Globe } from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Badge } from "@repo/ui/components/ui/badge";

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
    <Wrapper className="relative w-full overflow-x-hidden py-24 lg:py-36">
      {/* subtle background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <AnimationContainer animation="fadeUp">
        <div className="mx-auto max-w-6xl rounded-md border border-border">
          {/* Badge */}
          <div className="flex justify-center border-b border-dashed border-border p-4">
            <Badge
              variant="outline"
              className="flex items-center gap-2 rounded-md px-3 py-1"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Features
            </Badge>
          </div>

          {/* Heading */}
          <div className="border-b border-dashed border-border px-6 py-10 text-center">
            <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Built for creators. Backed by community
            </h2>
          </div>

          {/* Description */}
          <div className="border-b border-dashed border-border px-6 py-8 text-center">
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              Everything you need to build, collaborate, and grow together.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, index) => {
              const Icon = ICON_MAP[feature.icon];

              return (
                <AnimationContainer
                  key={feature.title}
                  animation="fadeUp"
                  delay={0.08 * index}
                >
                  <div
                    className="
                      border-dashed
                      p-6
                      transition-colors
                      hover:bg-muted/30
                      md:border
                      md:border-border
                      md:border-r
                      md:border-b
                    "
                  >
                    <Icon className="mb-3 h-5 w-5 text-muted-foreground" />

                    <h3 className="text-lg font-semibold tracking-tight">
                      {feature.title}
                    </h3>

                    <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-muted-foreground md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </AnimationContainer>
              );
            })}
          </div>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
}
