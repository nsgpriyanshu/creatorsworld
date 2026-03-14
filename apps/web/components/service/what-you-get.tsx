"use client";

import React, { forwardRef, useRef } from "react";
import { ArrowRight, CirclePlus, Code2, Monitor } from "lucide-react";
import {
  SiNextdotjs,
  SiFramer,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Badge } from "@repo/ui/components/ui/badge";
import { cn } from "@repo/ui/lib/utils";
import { WHAT_YOU_GET } from "../../constants/what-you-get";
import { AnimatedBeam } from "@repo/ui/components/ui/animated-beam";

type CircleProps = {
  className?: string;
  children?: React.ReactNode;
};

const Circle = forwardRef<HTMLDivElement, CircleProps>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative z-20 flex size-11 items-center justify-center rounded-full",
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
  ),
);

Circle.displayName = "Circle";

const WhatYouGet = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  return (
    <Wrapper className="relative w-full overflow-hidden pt-24 pb-12 md:pt-24 md:pb-16">
      {/* Grid Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12]"
      />

      <AnimationContainer animation="fadeUp" className="w-full">
        <div className="mx-auto max-w-6xl rounded-md border border-border">
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
              <h2 className="mx-auto max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Everything you need to{" "}
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  launch & scale
                </span>
              </h2>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.3}>
            <div className="border-b border-dashed border-border px-6 py-8 text-center">
              <p className="mx-auto max-w-3xl text-balance text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base lg:text-lg">
                From design to deployment and beyond, we cover every step so you
                can focus on growing your business.
              </p>
            </div>
          </AnimationContainer>

          {/* What You Get Grid */}
          <div className="border-b border-dashed border-border">
            <div className="grid md:grid-cols-2">
              {WHAT_YOU_GET.map((item, index) => {
                const Icon = item.icon;

                return (
                  <AnimationContainer
                    key={item.title}
                    animation="fadeUp"
                    delay={0.4 + index * 0.1}
                  >
                    <div
                      className={cn(
                        "border-t border-dashed border-border p-6 md:p-8",
                        index % 2 === 1 && "md:border-l md:border-dashed",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "relative flex h-10 w-10 items-center justify-center rounded-2xl",
                            "border border-border",
                            "bg-muted/40",
                            "transition-all duration-300",
                            "group-hover:bg-muted",
                            "group-hover:border-foreground/20",
                          )}
                        >
                          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-foreground/5 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                          <Icon className="relative h-5 w-5 text-muted-foreground" />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-xs md:text-sm text-muted-foreground">
                        {item.description}
                      </p>

                      {["Design", "Development", "Performance"].includes(
                        item.title,
                      ) && (
                        <div className="mt-4 rounded-xl border border-dashed border-border bg-muted/30 px-4 py-6 text-center text-xs text-muted-foreground">
                          Image placeholder
                        </div>
                      )}

                      <ul className="mt-4 hidden space-y-1.5 text-xs md:block md:text-sm">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
                            <span className="text-muted-foreground">
                              {point}
                            </span>
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
                              <span className="text-muted-foreground">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </div>
                  </AnimationContainer>
                );
              })}
            </div>
          </div>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <div className="border-b border-dashed border-border px-6 py-10">
              <div className="mx-auto grid max-w-5xl items-center gap-6 text-left md:grid-cols-[1.4fr_0.6fr]">
                <div>
                  <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                    Built on a{" "}
                    <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      modern & scalable web stack
                    </span>
                  </h2>
                </div>
                <div className="flex items-center justify-start gap-3 md:justify-end">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-border bg-background/70">
                    <SiNextdotjs className="h-4 w-4 text-muted-foreground" />
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-border bg-background/70">
                    <SiTypescript className="h-4 w-4 text-muted-foreground" />
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-border bg-background/70">
                    <SiTailwindcss className="h-4 w-4 text-muted-foreground" />
                  </span>
                </div>
              </div>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.75}>
            <div className="border-b border-dashed border-border px-6 py-8 text-center">
              <p className="mx-auto max-w-3xl text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base lg:text-lg">
                A refined ecosystem delivering performance, elegant UI, smooth
                animation, strict type safety, and seamless deployment.
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
                Selected for speed, DX, and long-term maintainability
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {["Performance", "Scalability", "DX", "Security"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-dashed border-border px-3 py-1 text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.9}>
            <div className="px-6 py-10">
              <div
                ref={containerRef}
                className="group relative isolate flex h-64 w-full items-center justify-center"
              >
                <div className="relative z-10 flex size-full max-w-xl flex-col justify-between gap-12">
                  <div className="flex items-center justify-between">
                    <Circle ref={div1Ref}>
                      <SiNextdotjs className="h-5 w-5 text-muted-foreground" />
                    </Circle>
                    <Circle ref={div5Ref}>
                      <SiVercel className="h-5 w-5 text-muted-foreground" />
                    </Circle>
                  </div>

                  <div className="flex items-center justify-between">
                    <Circle ref={div2Ref}>
                      <SiFramer className="h-5 w-5 text-muted-foreground" />
                    </Circle>

                    <Circle ref={div4Ref} className="size-14">
                      <Monitor className="h-6 w-6 text-muted-foreground" />
                    </Circle>

                    <Circle ref={div6Ref}>
                      <SiTypescript className="h-5 w-5 text-muted-foreground" />
                    </Circle>
                  </div>

                  <div className="flex items-center justify-center">
                    <Circle ref={div3Ref}>
                      <SiTailwindcss className="h-5 w-5 text-muted-foreground" />
                    </Circle>
                  </div>
                </div>

                <AnimatedBeam
                  className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  containerRef={containerRef}
                  fromRef={div1Ref}
                  toRef={div4Ref}
                  curvature={-75}
                />
                <AnimatedBeam
                  className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  containerRef={containerRef}
                  fromRef={div2Ref}
                  toRef={div4Ref}
                />
                <AnimatedBeam
                  className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  containerRef={containerRef}
                  fromRef={div3Ref}
                  toRef={div4Ref}
                  curvature={75}
                />
                <AnimatedBeam
                  className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  containerRef={containerRef}
                  fromRef={div5Ref}
                  toRef={div4Ref}
                  curvature={-75}
                  reverse
                />
                <AnimatedBeam
                  className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  containerRef={containerRef}
                  fromRef={div6Ref}
                  toRef={div4Ref}
                  reverse
                />
              </div>
            </div>
          </AnimationContainer>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default WhatYouGet;
