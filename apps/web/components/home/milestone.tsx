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

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";

const METRIC_ICONS: Record<number, LucideIcon> = {
  0: Package,
  1: Bot,
  2: Rocket,
};

const Milestones = () => {
  return (
    <Wrapper className="relative w-full overflow-x-hidden py-12 lg:py-16">
      <section className="mx-auto w-full max-w-6xl rounded-md border border-border">
        {/* Badge */}
        <AnimationContainer animation="fadeDown">
          <div className="flex justify-center border-b border-dashed border-border p-4">
            <Badge
              variant="outline"
              className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

              <span className="relative flex items-center gap-2">
                <Goal className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Achievements
                </span>
              </span>
            </Badge>
          </div>
        </AnimationContainer>

        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0.15}>
          <div className="border-b border-dashed border-border px-6 py-10 text-center">
            <h2 className="mx-auto max-w-3xl text-balance text-5xl font-semibold tracking-tight md:text-6xl">
              Milestones we achieved
            </h2>
          </div>
        </AnimationContainer>

        {/* Description */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <div className="border-b border-dashed border-border px-6 py-8 text-center">
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              A glimpse into the goals we’ve conquered and the impact we’ve
              created along the way.
            </p>
          </div>
        </AnimationContainer>

        {/* Content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left CTA */}
          <AnimationContainer animation="fadeUp" delay={0.45}>
            <div className="flex flex-col items-center justify-center gap-6 border-b border-dashed border-border p-8 lg:border-b-0 lg:border-r">
              <p className="max-w-xs text-center text-base text-muted-foreground md:text-lg">
                Become part of the community shaping the future of our platform.
              </p>

              <Button
                size="lg"
                className="gap-2"
                render={
                  <Link
                    href="https://discord.gg/VUMVuArkst"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <Building2 className="h-5 w-5" />
                Join Community
              </Button>
            </div>
          </AnimationContainer>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {METRICS.map((metric, index) => {
              const Icon = METRIC_ICONS[index] ?? Trophy;

              return (
                <AnimationContainer
                  key={index}
                  animation="fadeUp"
                  delay={0.53 + index * 0.08}
                >
                  <div className="flex flex-col items-center justify-center gap-3 border-dashed p-6 text-center sm:border sm:border-border sm:border-r last:border-r-0">
                    <Icon className="h-5 w-5 text-muted-foreground" />

                    <div className="flex items-baseline gap-1">
                      <span className="font-mono text-4xl font-semibold">
                        {metric.number}
                      </span>

                      {metric.suffix && (
                        <span className="font-mono text-4xl font-semibold">
                          {metric.suffix}
                        </span>
                      )}
                    </div>

                    <p className="text-base text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                </AnimationContainer>
              );
            })}
          </div>
        </section>
      </section>
    </Wrapper>
  );
};

export default Milestones;
