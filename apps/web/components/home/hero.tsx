"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Compass, Sparkles } from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import { Skeleton } from "@repo/ui/components/ui/skeleton";

const Hero: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading (replace with real data readiness)
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const heroImageSrc =
    resolvedTheme === "light"
      ? "/backgrounds/hero-light.png"
      : "/backgrounds/hero-dark.png";

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
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-48 w-3/4 rounded-full bg-[radial-gradient(86%_172%_at_50%_-40%,rgba(241,10,10,0.9)_0%,rgba(5,5,5,0)_80%)] blur-[6rem]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="flex items-center gap-2 border-border bg-background px-4 py-1.5 text-secondary-foreground"
          >
            <Sparkles className="h-4 w-4 text-[#f10a0a]" />
            World’s largest bot server
          </Badge>
        </AnimationContainer>

        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            You have stepped into the{" "}
            <span>
              <span className="text-[#f10a0a]">C</span>reator&apos;s{" "}
              <span className="text-[#f10a0a]">W</span>orld
            </span>
          </h1>
        </AnimationContainer>

        {/* Description */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            The ultimate destination for creators to showcase their work,
            connect with like-minded individuals, and explore a world of
            creativity. Join us and unleash your creative potential.
          </p>
        </AnimationContainer>

        {/* CTA */}
        <AnimationContainer animation="scaleUp" delay={0.45}>
          <div className="mt-10">
            <Link
              href="https://discord.gg/VUMVuArkst"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="px-10 py-6 gap-2">
                <Compass className="h-5 w-5" />
                Explore More
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
                alt="Creator World preview"
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

export default Hero;
