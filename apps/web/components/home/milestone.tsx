"use client";

import Link from "next/link";
import {
  Goal,
  Trophy,
  Package,
  Bot,
  Rocket,
  type LucideIcon,
  Building2,
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
              className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

              <span className="relative flex items-center gap-2">
                <Goal className="h-4 w-4 text-[#f10a0a] transition-transform duration-300 group-hover:rotate-12" />
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Achievements
                </span>
              </span>
            </Badge>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.1}>
            <h2 className="mt-8 max-w-xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Milestones we achieved
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.2}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              A glimpse into the goals we’ve conquered and the impact we’ve
              created along the way.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.3}>
            <Link href="https://discord.gg/VUMVuArkst" target="_blank">
              <Button size="lg" className="mt-8 gap-2">
                <Building2 className="h-5 w-5" />
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
                <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-[#f10a0a]/30">
                  {/* Subtle inner red shine */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-[#f10a0a]/10 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Soft radial glow */}
                  <div
                    className={cn(
                      "pointer-events-none absolute -bottom-1/2 right-0 size-40 rounded-full bg-[#f10a0a]/20 blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100",
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

                    {/* Icon with subtle red accent bg */}
                    <div
                      className={cn(
                        "flex size-14 items-center justify-center rounded-2xl lg:size-16",
                        "border border-[#f10a0a]/20",
                        "bg-[#f10a0a]/10",
                        "transition-all duration-300",
                        "group-hover:bg-[#f10a0a]/15",
                        "group-hover:border-[#f10a0a]/40",
                      )}
                    >
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
