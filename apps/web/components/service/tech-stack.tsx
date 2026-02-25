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

import { Monitor, Code2 } from "lucide-react";
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
        "relative z-20 flex size-14 items-center justify-center rounded-2xl lg:size-16",
        "border border-border",
        "bg-muted/40",
        "transition-all duration-300 ease-out",
        "hover:z-30 hover:scale-105",
        "hover:bg-muted/60 hover:border-foreground/40",
        className,
      )}
    >
      {/* Subtle Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-foreground/10 via-transparent to-transparent opacity-60 transition-opacity duration-300 hover:opacity-100" />

      <div className="relative z-30 text-foreground">{children}</div>
    </div>
  ),
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

        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h2 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
            Built on a{" "}
            <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              modern & scalable web stack
            </span>
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-muted-foreground md:text-lg leading-relaxed">
            A refined ecosystem delivering performance, elegant UI, smooth
            animation, strict type safety, and seamless deployment.
          </p>
        </AnimationContainer>
      </div>

      <div
        ref={containerRef}
        className="relative isolate mt-20 flex h-80 w-full items-center justify-center"
      >
        {/* ICONS (Above Beams) */}
        <div className="relative z-10 flex size-full max-w-xl flex-col justify-between gap-20">
          <div className="flex items-center justify-between">
            <Circle ref={div1Ref}>
              <SiNextdotjs className="h-6 w-6" />
            </Circle>
            <Circle ref={div5Ref}>
              <SiVercel className="h-6 w-6" />
            </Circle>
          </div>

          <div className="flex items-center justify-between">
            <Circle ref={div2Ref}>
              <SiFramer className="h-6 w-6" />
            </Circle>

            <Circle ref={div4Ref} className="size-20">
              <Monitor className="h-8 w-8" />
            </Circle>

            <Circle ref={div6Ref}>
              <SiTypescript className="h-6 w-6" />
            </Circle>
          </div>

          <div className="flex items-center justify-center">
            <Circle ref={div3Ref}>
              <SiTailwindcss className="h-6 w-6" />
            </Circle>
          </div>
        </div>

        {/* BEAMS (Always Behind) */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
      </div>
    </Wrapper>
  );
};

export default TechStack;
