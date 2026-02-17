"use client";

import React, { forwardRef, useRef } from "react";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Badge } from "@repo/ui/components/ui/badge";
import { cn } from "@repo/ui/lib/utils";

import {
  SiNextdotjs,
  SiFramer,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

import { Monitor } from "lucide-react";
import { AnimatedBeam } from "@repo/ui/components/ui/animated-beam";
import { Code2 } from "lucide-react";

type CircleProps = {
  className?: string;
  children?: React.ReactNode;
};

const Circle = forwardRef<HTMLDivElement, CircleProps>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex size-14 items-center justify-center rounded-2xl lg:size-16",
          "border border-black/15 dark:border-white/20",
          "bg-black/5 dark:bg-white/5",
          "transition-all duration-300",
          "hover:bg-black/10 dark:hover:bg-white/10",
          "hover:border-black/30 dark:hover:border-white/40",
          "hover:scale-105",
          className
        )}
      >
        {/* Soft inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-black/10 dark:from-white/10 via-transparent to-transparent opacity-70 transition-opacity duration-300 hover:opacity-100" />

        <div className="relative text-black dark:text-white">
          {children}
        </div>
      </div>
    );
  }
);

Circle.displayName = "Circle";

const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  return (
    <Wrapper className="relative overflow-hidden py-28">
      <div className="flex flex-col items-center text-center">
        {/* Badge */}
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex items-center gap-2">
              <Code2 className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
              <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Tech Stack
              </span>
            </span>
          </Badge>
        </AnimationContainer>

        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h2 className="mt-8 max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Built on a{" "}
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              modern & scalable web stack
            </span>
          </h2>
        </AnimationContainer>

        {/* Description */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-muted-foreground md:text-lg leading-relaxed">
            A carefully selected ecosystem powering performance, elegant
            interfaces, smooth animations, and reliable deployment —
            engineered for speed and long-term scalability.
          </p>
        </AnimationContainer>
      </div>

      {/* Beam Layout */}
      <div
        ref={containerRef}
        className="relative mt-20 flex h-80 w-full items-center justify-center "
      >
        <div className="z-10 flex size-full max-w-xl flex-col items-stretch justify-between gap-14">
          <div className="flex items-center justify-between">
            <Circle ref={div1Ref}>
              <SiNextdotjs className="h-6 w-6 z-10" />
            </Circle>

            <Circle ref={div5Ref}>
              <SiVercel className="h-6 w-6 z-10" />
            </Circle>
          </div>

          <div className="flex items-center justify-between">
            <Circle ref={div2Ref}>
              <SiFramer className="h-6 w-6 z-10" />
            </Circle>

            {/* Center (Website / Platform Core) */}
            <Circle ref={div4Ref} className="size-20 z-10">
              <Monitor className="h-8 w-8 z-10" />
            </Circle>

            <Circle ref={div6Ref}>
              <SiTypescript className="h-6 w-6 z-10" />
            </Circle>
          </div>

          <div className="flex items-center justify-center">
            <Circle ref={div3Ref}>
              <SiTailwindcss className="h-6 w-6 z-10" />
            </Circle>
          </div>
        </div>

        {/* Beams */}
        <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} />
        <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
        <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} />
        <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-75} reverse />
        <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
      </div>
    </Wrapper>
  );
};

export default TechStack;
