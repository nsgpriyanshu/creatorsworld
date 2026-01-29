"use client";

import Link from "next/link";
import {
  Goal,
  Trophy,
  Package,
  Bot,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import { METRICS } from "../../constants";
import { cn } from "@repo/ui/lib/utils";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";

/**
 * Icon mapping (index-based, METRICS untouched)
 */
const METRIC_ICONS: Record<number, LucideIcon> = {
  0: Package,
  1: Bot,
  2: Rocket,
};

const Milestones = () => {
  return (
    <Wrapper className="relative w-full overflow-hidden py-24 lg:py-36">
      <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        {/* Left content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <AnimationContainer animation="fadeDown">
            <Badge
              variant="outline"
              className="flex items-center gap-2 border-border bg-background px-4 py-1.5 text-secondary-foreground"
            >
              <Goal className="h-4 w-4 text-[#f10a0a]" />
              Achievements
            </Badge>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.1}>
            <h2 className="mt-8 max-w-xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Milestones we achieved
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.2}>
            <p className="mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
              A glimpse into the goals we’ve conquered and the impact we’ve
              created along the way.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.3}>
            <Link href="https://discord.gg/VUMVuArkst" target="_blank">
              <Button size="lg" className="mt-8">
                Join Community
              </Button>
            </Link>
          </AnimationContainer>
        </div>

        {/* Metrics */}
        <div className="relative flex flex-col gap-8">
          {METRICS.map((metric, index) => {
            const Icon = METRIC_ICONS[index] ?? Trophy;

            return (
              <AnimationContainer
                key={index}
                animation={metric.reverse ? "fadeLeft" : "fadeRight"}
                delay={0.4 + index * 0.15}
              >
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6">
                  {/* Glow */}
                  <div
                    className={cn(
                      "pointer-events-none absolute -bottom-1/2 right-0 size-24 rounded-full bg-[#f10a0a]/20 blur-[4rem]",
                      metric.reverse && "left-0 right-auto",
                    )}
                  />

                  {/* Content */}
                  <div
                    className={cn(
                      "relative z-10 flex items-center justify-between gap-6",
                      metric.reverse && "flex-row-reverse",
                    )}
                  >
                    {/* Metric */}
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="font-mono text-5xl font-medium text-foreground lg:text-6xl">
                          {metric.number}
                        </span>
                        {metric.suffix && (
                          <span className="font-mono text-5xl font-medium text-foreground lg:text-6xl">
                            {metric.suffix}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>

                    {/* Icon */}
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-background lg:size-16">
                      <Icon className="h-6 w-6 text-[#f10a0a]" />
                    </div>
                  </div>
                </div>
              </AnimationContainer>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Milestones;
