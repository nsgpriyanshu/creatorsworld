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
    <Wrapper className="relative w-full overflow-x-hidden py-24 lg:py-36">
      <AnimationContainer animation="fadeUp">
        <div className="mx-auto max-w-6xl rounded-md border border-border">
          {/* Badge */}
          <div className="flex justify-center border-b border-dashed border-border p-4">
            <Badge
              variant="outline"
              className="flex items-center gap-2 rounded-md px-3 py-1"
            >
              <Goal className="h-4 w-4" />
              Achievements
            </Badge>
          </div>

          {/* Heading */}
          <div className="border-b border-dashed border-border px-6 py-10 text-center">
            <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Milestones we achieved
            </h2>
          </div>

          {/* Description */}
          <div className="border-b border-dashed border-border px-6 py-8 text-center">
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              A glimpse into the goals we’ve conquered and the impact we’ve
              created along the way.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left CTA */}
            <div className="flex flex-col items-center justify-center gap-6 border-b border-dashed border-border p-8 lg:border-b-0 lg:border-r">
              <p className="text-sm text-muted-foreground text-center max-w-xs">
                Become part of the community shaping the future of our platform.
              </p>

              <Link href="https://discord.gg/VUMVuArkst" target="_blank">
                <Button size="lg" className="gap-2">
                  <Building2 className="h-5 w-5" />
                  Join Community
                </Button>
              </Link>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {METRICS.map((metric, index) => {
                const Icon = METRIC_ICONS[index] ?? Trophy;

                return (
                  <AnimationContainer
                    key={index}
                    animation="fadeUp"
                    delay={0.08 * index}
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

                      <p className="text-sm text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  </AnimationContainer>
                );
              })}
            </div>
          </div>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default Milestones;
