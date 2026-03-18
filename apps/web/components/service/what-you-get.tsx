"use client";

import React from "react";
import {
  ArrowRight,
  CirclePlus,
  Braces,
  Share2,
  Blocks,
  ShieldCheck,
} from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiFramer,
  SiSupabase,
  SiReact,
} from "react-icons/si";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { AnimatedList } from "@repo/ui/components/ui/animated-list";
import { cn } from "@repo/ui/lib/utils";
import { WHAT_YOU_GET } from "../../constants/what-you-get";
import { ICChip } from "./ic-chip";

type CircleProps = {
  className?: string;
  children?: React.ReactNode;
};

const Circle = ({ className, children }: CircleProps) => (
  <div
    className={cn(
      "relative z-20 flex h-10 w-10 items-center justify-center rounded-full",
      "border border-dashed border-border",
      "bg-background/70",
      "transition-all duration-300 ease-out",
      "hover:z-30 hover:scale-105",
      "hover:bg-muted/40 hover:border-foreground/40",
      className,
    )}
  >
    <div className="relative z-30 text-foreground">{children}</div>
  </div>
);

const WhatYouGet = () => {
  const design =
    WHAT_YOU_GET.find((item) => item.title === "Design") ?? WHAT_YOU_GET[0];
  const development =
    WHAT_YOU_GET.find((item) => item.title === "Development") ??
    WHAT_YOU_GET[1];
  const performance =
    WHAT_YOU_GET.find((item) => item.title === "Performance") ??
    WHAT_YOU_GET[2];
  const management =
    WHAT_YOU_GET.find((item) => item.title === "Management") ?? WHAT_YOU_GET[3];

  const renderCard = (item: (typeof WHAT_YOU_GET)[number]) => {
    const Icon = item.icon;
    const isDevelopment = item.title === "Development";
    const isManagement = item.title === "Management";

    return (
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
        </div>

        <p className="mt-3 text-xs md:text-sm text-muted-foreground">
          {item.description}
        </p>

        <div className="mt-4">
          {isDevelopment ? (
            <AnimatedList className="items-start">
              {[
                {
                  label: "Performance first",
                  description: "Optimized for Core Web Vitals and fast TTI.",
                  icon: ArrowRight,
                  color: "text-blue-600",
                },
                {
                  label: "Clean codebase",
                  description: "Readable, maintainable, and easy to scale.",
                  icon: Braces,
                  color: "text-emerald-600",
                },
                {
                  label: "Scalable APIs",
                  description: "Built for growth and high-traffic workloads.",
                  icon: Share2,
                  color: "text-violet-600",
                },
                {
                  label: "Modular architecture",
                  description: "Composable building blocks across the app.",
                  icon: Blocks,
                  color: "text-amber-600",
                },
                {
                  label: "Security best-practices",
                  description: "Hardened defaults and secure workflows.",
                  icon: ShieldCheck,
                  color: "text-rose-600",
                },
              ].map(({ label, description, icon: Icon, color }) => (
                <div
                  key={label}
                  className="w-full rounded-md border border-dashed border-border bg-muted/30 px-4 py-3"
                >
                  <div className="flex items-start gap-2">
                    <Icon className={`mt-0.5 h-4 w-4 ${color}`} />
                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        {label}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </AnimatedList>
          ) : item.title === "Performance" ? (
            <div className="rounded-xl border border-dashed border-border bg-muted/30 px-4 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    Lighthouse Overview
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    SEO & performance signals
                  </p>
                </div>
                <span className="rounded-full border border-dashed border-border px-2 py-1 text-[10px] text-muted-foreground">
                  Mobile
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Performance",
                    score: 92,
                    color: "text-emerald-600",
                  },
                  { label: "Accessibility", score: 96, color: "text-blue-600" },
                  {
                    label: "Best Practices",
                    score: 95,
                    color: "text-violet-600",
                  },
                  { label: "SEO", score: 98, color: "text-amber-600" },
                ].map((itemScore) => (
                  <div
                    key={itemScore.label}
                    className="rounded-lg border border-dashed border-border bg-background/70 px-3 py-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">
                        {itemScore.label}
                      </span>
                      <span
                        className={`text-xs font-semibold ${itemScore.color}`}
                      >
                        {itemScore.score}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-border">
                      <div
                        className={`h-1.5 rounded-full ${itemScore.color}`}
                        style={{ width: `${itemScore.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-[10px] text-muted-foreground">
                Scores are representative and will vary by project scope.
              </p>
            </div>
          ) : item.title === "Design" ? (
            <div className="rounded-xl border border-dashed border-border bg-muted/30 p-3">
              <div className="flex items-center justify-between rounded-lg border border-dashed border-border bg-background/70 px-2 py-1">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="h-2 w-2 rounded-full bg-foreground" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                </div>
                <span className="text-[9px] text-muted-foreground">
                  design-preview
                </span>
              </div>
              <div className="mt-2 aspect-[16/10] rounded-lg border border-dashed border-border bg-muted/40 p-3">
                {/* Hero bar */}
                <div className="flex items-center justify-between">
                  <div className="h-2 w-28 rounded-full bg-blue-500/50" />
                  <div className="h-2 w-12 rounded-full bg-emerald-500/40" />
                </div>
                <div className="mt-2 h-1.5 w-44 rounded-full bg-muted-foreground/40" />

                {/* Grid row */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-12 rounded-md bg-indigo-500/25" />
                  <div className="h-12 rounded-md bg-rose-500/25" />
                  <div className="h-12 rounded-md bg-amber-500/25" />
                </div>

                {/* CTA row */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-6 w-16 rounded-full bg-blue-500/40" />
                  <div className="h-6 w-20 rounded-full bg-emerald-500/35" />
                </div>

                {/* Content blocks */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="h-10 rounded-md bg-muted-foreground/20" />
                  <div className="h-10 rounded-md bg-muted-foreground/25" />
                </div>

                {/* Footer line */}
                <div className="mt-3 h-1.5 w-24 rounded-full bg-muted-foreground/30" />
              </div>
            </div>
          ) : item.title === "Management" ? (
            <div className="rounded-xl border border-dashed border-border bg-muted/30 p-3">
              <div className="flex items-center justify-between rounded-lg border border-dashed border-border bg-background/70 px-2 py-1">
                <span className="text-[9px] text-muted-foreground">
                  Management Console
                </span>
                <span className="rounded-full border border-dashed border-border px-2 py-0.5 text-[9px] text-emerald-600">
                  Online
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-md border border-dashed border-border bg-background/70 p-2">
                  <div className="text-[10px] text-muted-foreground">
                    Uptime
                  </div>
                  <div className="mt-1 h-2 w-14 rounded-full bg-emerald-500/40" />
                </div>
                <div className="rounded-md border border-dashed border-border bg-background/70 p-2">
                  <div className="text-[10px] text-muted-foreground">
                    Incidents
                  </div>
                  <div className="mt-1 h-2 w-10 rounded-full bg-amber-500/40" />
                </div>
              </div>
              <div className="mt-3 h-16 rounded-md border border-dashed border-border bg-muted/40" />
              <div className="mt-3 flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-blue-500/30" />
                <div className="h-2 w-24 rounded-full bg-muted-foreground/40" />
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-muted/30 px-4 py-6 text-center text-xs text-muted-foreground">
              Image placeholder
            </div>
          )}
        </div>

        <ul className="mt-4 hidden space-y-1.5 text-xs md:block md:text-sm">
          {item.points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
              <span className="text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>

        <details className="mt-4 md:hidden">
          <summary className="cursor-pointer text-xs font-medium text-muted-foreground">
            View deliverables
          </summary>
          <ul className="mt-2 space-y-1.5 text-xs">
            {item.points.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </details>

        {isManagement && (
          <div className="mt-4">
            <Button size="lg" className={cn("gap-2 rounded-md px-6")}>
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <Wrapper className="relative w-full overflow-hidden pt-24 pb-12 md:pt-24 md:pb-16">
      {/* Grid Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12]"
      />

      <section className="mx-auto w-full max-w-6xl rounded-md border border-border">
        {/* Header */}
        <AnimationContainer animation="fadeDown">
          <div className="flex justify-center border-b border-dashed border-border p-4">
            <Badge
              variant="outline"
              className="group relative overflow-hidden border-border bg-background/70 px-3 py-1 md:px-4 md:py-1.5 backdrop-blur-md text-xs md:text-sm"
            >
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              <span className="relative flex items-center gap-2">
                <CirclePlus className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  What You Get
                </span>
              </span>
            </Badge>
          </div>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.15}>
          <div className="border-b border-dashed border-border px-6 py-10 text-center">
            <h2 className="mx-auto max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Everything you need to{" "}
              <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                launch & scale
              </span>
            </h2>
          </div>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <div className="border-b border-dashed border-border px-6 py-8 text-center">
            <p className="mx-auto max-w-3xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
              From design to deployment and beyond, we cover every step so you
              can focus on growing your business.
            </p>
          </div>
        </AnimationContainer>

        {/* Structured Layout */}
        <section className="border-b border-dashed border-border">
          <div className="grid border-t border-dashed border-border md:grid-cols-2">
            <div>{renderCard(design)}</div>
            <div className="md:border-l md:border-dashed md:border-border">
              {renderCard(development)}
            </div>
          </div>

          <div className="grid border-t border-dashed border-border md:grid-cols-2">
            <div>{renderCard(performance)}</div>
            <div className="md:border-l md:border-dashed md:border-border">
              {renderCard(management)}
            </div>
          </div>

          <div className="grid border-t border-dashed border-border md:grid-cols-2">
            <div className="p-6 md:p-8">
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Built on a{" "}
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  modern & scalable web stack
                </span>
              </h2>
            </div>
            <div className="hidden md:block md:border-l md:border-dashed md:border-border" />
          </div>

          <div className="grid md:grid-cols-2">
            <div className="flex flex-wrap items-center gap-3 border-t border-dashed border-border p-6 md:p-8">
              <Circle>
                <SiNextdotjs className="h-4 w-4 text-muted-foreground" />
              </Circle>
              <Circle>
                <SiReact className="h-4 w-4 text-muted-foreground" />
              </Circle>
              <Circle>
                <SiVercel className="h-4 w-4 text-muted-foreground" />
              </Circle>
              <Circle>
                <SiTypescript className="h-4 w-4 text-muted-foreground" />
              </Circle>
              <Circle>
                <SiTailwindcss className="h-4 w-4 text-muted-foreground" />
              </Circle>
              <Circle>
                <SiFramer className="h-4 w-4 text-muted-foreground" />
              </Circle>
              <Circle>
                <SiSupabase className="h-4 w-4 text-muted-foreground" />
              </Circle>
            </div>
            <div className="p-6 md:border-l md:border-dashed md:border-border md:p-8">
              <div className="aspect-[4/3] rounded-xl border border-dashed border-border bg-muted/30 p-3">
                <ICChip className="h-full w-full" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="border-t border-dashed border-border p-6 md:p-8">
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
                A refined ecosystem delivering performance, elegant UI, smooth
                animation, strict type safety, and seamless deployment.
              </p>
            </div>
            <div className="hidden md:block md:border-l md:border-dashed md:border-border" />
          </div>
        </section>
      </section>
    </Wrapper>
  );
};

export default WhatYouGet;
