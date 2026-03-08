"use client";

import React from "react";
import { Badge } from "@repo/ui/components/ui/badge";
import AnimationContainer from "../global/animation-container";
import { Newspaper } from "lucide-react";
import Wrapper from "../global/wrapper";
import { Skeleton } from "@repo/ui/components/ui/skeleton";

const BlogHero: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading (replace with real data readiness)
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);
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
  return (
    <Wrapper className="relative pt-32 pb-20 w-full">
      {/* Brand Glow
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-48 w-3/4 rounded-full bg-[radial-gradient(86%_172%_at_50%_-40%,rgba(241,10,10,0.9)_0%,rgba(5,5,5,0)_80%)] blur-[6rem]" /> */}

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="secondary"
            className="mx-auto mb-6 px-4 py-2 text-sm font-medium"
          >
            <Newspaper className="h-4 w-4 mr-2" />
            Blog
          </Badge>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground">
            Stories & Insights from <br />
            <span className="text-primary">Creator's World</span>
          </h1>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground">
            Discover the latest trends, tutorials, and community stories. Join
            thousands of creators sharing their journey and expertise.
          </p>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};

export default BlogHero;
