"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Sparkles, Users, Rocket, Globe } from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Badge } from "@repo/ui/components/ui/badge";
import { cn } from "@repo/ui/lib/utils";

import { FEATURES } from "../../constants/features";

type FeatureIcon = "community" | "growth" | "global";

const ICON_MAP: Record<FeatureIcon, React.FC<{ className?: string }>> = {
  community: Users,
  growth: Rocket,
  global: Globe,
};

export default function Features() {
  const { resolvedTheme } = useTheme();

  return (
    <Wrapper className="relative w-full overflow-hidden py-24 lg:py-36">
      {/* Header */}
      <div className="relative z-10 flex w-full flex-col items-center text-center">
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="flex items-center gap-2 border-border bg-background px-4 py-1.5 text-secondary-foreground"
          >
            <Sparkles className="h-4 w-4 text-[#f10a0a]" />
            Features
          </Badge>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Built for creators. Backed by community.
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.2}>
          <p className="mt-6 max-w-3xl text-balance text-base text-muted-foreground md:text-lg">
            Everything you need to build, collaborate, and grow — together.
          </p>
        </AnimationContainer>
      </div>

      {/* Hybrid Layout */}
      <div className="relative mt-24 flex flex-col gap-24">
        {FEATURES.map((feature, index) => {
          const isLarge = feature.size === "large";
          const Icon = ICON_MAP[feature.icon];
          const imageSrc =
            resolvedTheme === "dark" ? feature.image.dark : feature.image.light;

          return (
            <AnimationContainer
              key={feature.title}
              animation={
                isLarge
                  ? index % 2 === 0
                    ? "fadeRight"
                    : "fadeLeft"
                  : "fadeUp"
              }
              delay={0.15 * (index + 1)}
            >
              <div
                className={cn(
                  "mx-auto flex max-w-6xl flex-col items-center gap-10 px-4",
                  isLarge && "md:flex-row md:gap-16",
                  isLarge && index % 2 === 0 && "md:flex-row-reverse",
                )}
              >
                {/* Image */}
                <div className="relative w-full max-w-lg">
                  <Image
                    src={imageSrc}
                    alt={feature.title}
                    width={900}
                    height={600}
                    className="rounded-3xl border border-border bg-card"
                  />
                </div>

                {/* Content */}
                <div className="flex max-w-xl flex-col items-center text-center md:items-start md:text-left ">
                  {/* Icon */}
                  <div className="mb-4 flex size-14 items-center justify-center rounded-2xl border border-border bg-card ">
                    <Icon className="h-6 w-6 text-[#f10a0a]" />
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimationContainer>
          );
        })}
      </div>
    </Wrapper>
  );
}
