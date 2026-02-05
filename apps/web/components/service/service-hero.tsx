"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Cog, Sparkles } from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import { Skeleton } from "@repo/ui/components/ui/skeleton";

const ServiceHero: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading (replace with real data readiness)
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const heroImageSrc =
    resolvedTheme === "light"
      ? "/backgrounds/servcie-hero.png"
      : "/backgrounds/servcie-hero.png";

  /* -------------------------------------------------------------------------- */
  /*                                  SKELETON                                   */
  /* -------------------------------------------------------------------------- */
  if (isLoading) {
    return (
      <Wrapper className="relative w-full overflow-hidden pt-28 pb-24">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <Skeleton className="h-7 w-56 rounded-full" />

          {/* Heading */}
          <div className="mt-8 space-y-3">
            <Skeleton className="h-12 w-[320px] md:w-130" />
            <Skeleton className="h-12 w-65 md:w-105" />
          </div>

          {/* Description */}
          <div className="mt-6 space-y-2">
            <Skeleton className="h-4 w-[320px] md:w-140" />
            <Skeleton className="h-4 w-70 md:w-120" />
          </div>

          {/* CTA */}
          <Skeleton className="mt-10 h-14 w-44 rounded-xl" />

          {/* Preview */}
          <Skeleton className="mt-16 h-55 w-full max-w-5xl rounded-3xl md:h-90" />
        </div>
      </Wrapper>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                   CONTENT                                  */
  /* -------------------------------------------------------------------------- */
  return (
    <Wrapper className="relative w-full overflow-hidden pt-28 pb-24">
      {/* Brand Glow (intentional hardcoded brand color) */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-64 w-3/4 rounded-full bg-[radial-gradient(86%_172%_at_50%_-40%,rgba(241,10,10,0.9)_0%,rgba(5,5,5,0)_80%)] blur-[6rem]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="flex items-center gap-2 border-border bg-background/70 px-4 py-1.5 text-secondary-foreground"
          >
            <Cog className="h-4 w-4 text-[#f10a0a]" />
            Services
          </Badge>
        </AnimationContainer>

        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            Focus on your{" "}
            <span className="bg-gradient-to-r from-foreground to-[#f10a0a] bg-clip-text text-transparent">
              business
            </span>
            , we will handle the{" "}
            <span className="bg-gradient-to-r from-foreground to-[#1f3fad] bg-clip-text text-transparent">
              Website
            </span>
            .
          </h1>
        </AnimationContainer>

        {/* Description */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            We offer services like website desing, development, management, to
            help you build and maintain your online presence, so you can focus
            on what matters most – your business.
          </p>
        </AnimationContainer>

        <AnimationContainer animation="scaleUp" delay={0.45}>
          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg" className="px-10 py-6">
                Book a Call
              </Button>
            </Link>
          </div>
        </AnimationContainer>

        {/* Preview */}
        <AnimationContainer animation="fadeUp" delay={0.6} className="w-full">
          <div className="relative mx-auto mt-16 max-w-7xl rounded-3xl border border-border bg-card p-2">
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
