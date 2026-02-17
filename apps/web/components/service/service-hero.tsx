"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Cog,
  Presentation,
  Code2,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import { Skeleton } from "@repo/ui/components/ui/skeleton";

const ServiceHero: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  const heroImageSrc = "/backgrounds/servcie-hero.png";

  /* -------------------------------------------------------------------------- */
  /*                                  SKELETON                                   */
  /* -------------------------------------------------------------------------- */
  if (isLoading) {
    return (
      <Wrapper className="relative overflow-hidden pt-28 pb-24">
        <div className="flex flex-col items-center text-center">
          <Skeleton className="h-7 w-56 rounded-full" />

          <div className="mt-8 space-y-3">
            <Skeleton className="h-12 w-[320px] md:w-130" />
            <Skeleton className="h-12 w-65 md:w-105" />
          </div>

          <div className="mt-6 space-y-2">
            <Skeleton className="h-4 w-[320px] md:w-130" />
            <Skeleton className="h-4 w-65 md:w-105" />
          </div>

          <Skeleton className="mt-10 h-14 w-44 rounded-xl" />
          <Skeleton className="mt-16 h-64 w-full max-w-6xl rounded-3xl" />
        </div>
      </Wrapper>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                   CONTENT                                  */
  /* -------------------------------------------------------------------------- */
  return (
    <Wrapper className="relative overflow-hidden pt-28 pb-24">
      {/* Subtle Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-size-[48px_48px] opacity-[0.15]"
      />

      {/* Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-12%] -z-10 h-105 w-105 -translate-x-1/2 rounded-full bg-accent/25 blur-[130px]"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* ------------------------------------------------------------------ */}
        {/* Animated Badge (Title Effect Preserved + Smoothened)                */}
        {/* ------------------------------------------------------------------ */}
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
          >
            {/* moving shine */}
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

            <span className="relative flex items-center gap-2">
              <Cog className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
              <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Our Services
              </span>
            </span>
          </Badge>
        </AnimationContainer>

        {/* ------------------------------------------------------------------ */}
        {/* Heading                                                            */}
        {/* ------------------------------------------------------------------ */}
        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-6xl">
            Focus on your{" "}
            <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Buisness
            </span>{" "}
            while we will manage the{" "}
            <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              digital experience
            </span>
          </h1>
        </AnimationContainer>

        {/* ------------------------------------------------------------------ */}
        {/* Description                                                        */}
        {/* ------------------------------------------------------------------ */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            We design, develop, secure, and maintain high-quality digital
            experiences—so you can focus entirely on growing your business.
          </p>
        </AnimationContainer>

        {/* ------------------------------------------------------------------ */}
        {/* Feature Icons (Staggered Hover + Lift)                              */}
        {/* ------------------------------------------------------------------ */}
        <AnimationContainer animation="fadeUp" delay={0.45}>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: Code2, label: "Development" },
              { icon: Layers, label: "Design Systems" },
              { icon: ShieldCheck, label: "Security" },
              { icon: Cog, label: "Maintenance" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
              >
                <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                <span className="text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </AnimationContainer>

        {/* ------------------------------------------------------------------ */}
        {/* CTA                                                                */}
        {/* ------------------------------------------------------------------ */}
        <AnimationContainer animation="scaleUp" delay={0.6}>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="gap-2 px-10 py-6">
                <Presentation className="h-5 w-5" />
                Request a Demo
              </Button>
            </Link>
          </div>
        </AnimationContainer>

        {/* ------------------------------------------------------------------ */}
        {/* Preview Image (Float + Depth)                                       */}
        {/* ------------------------------------------------------------------ */}
        <AnimationContainer animation="fadeUp" delay={0.75} className="w-full">
          <div className="relative mx-auto mt-20 max-w-7xl rounded-3xl border border-border bg-card p-2 shadow-sm transition-transform duration-500 hover:-translate-y-0.5">
            <div className="rounded-2xl border border-border bg-background">
              <Image
                src={heroImageSrc}
                alt="Creator World Services"
                priority
                width={2932}
                height={1664}
                className="rounded-2xl"
              />
            </div>
          </div>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};

export default ServiceHero;
