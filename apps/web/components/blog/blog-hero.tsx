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
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Wrapper className="relative pt-12 md:pt-16 pb-4 md:pb-8 w-full">
        <div className="relative z-10 mx-auto max-w-4xl text-center space-y-4 md:space-y-6">
          {/* Badge Skeleton */}
          <div className="flex justify-center px-4">
            <Skeleton className="h-6 md:h-8 w-32 md:w-40 rounded-full" />
          </div>
          {/* Heading Skeleton */}
          <div className="space-y-2 md:space-y-3 px-4">
            <Skeleton className="h-8 md:h-10 w-full mx-auto rounded" />
            <Skeleton className="h-8 md:h-10 w-5/6 mx-auto rounded" />
          </div>
          {/* Paragraph Skeleton */}
          <div className="space-y-1.5 md:space-y-2 pt-2 md:pt-4 px-4">
            <Skeleton className="h-4 md:h-6 w-full mx-auto rounded" />
            <Skeleton className="h-4 md:h-6 w-4/5 mx-auto rounded" />
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="relative pt-16 md:pt-24 pb-4 md:pb-8 w-full px-4 md:px-0">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -z-10 mx-auto h-40 w-2/3 rounded-full bg-[radial-gradient(86%_172%_at_50%_-40%,var(--accent)/20_0%,rgba(5,5,5,0)_80%)] blur-[5rem]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <AnimationContainer animation="fadeDown" delay={0.1}>
          <Badge
            variant="outline"
            className="group relative overflow-hidden border-border bg-background/70 px-3 py-1 md:px-4 md:py-1.5 backdrop-blur-md text-xs md:text-sm"
          >
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
            <span className="relative flex items-center gap-1.5 md:gap-2">
              <Newspaper className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
              <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Blog
              </span>
            </span>
          </Badge>
        </AnimationContainer>

        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <h1 className="mt-4 md:mt-6 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight tracking-tight text-foreground">
            Insights & Stories from the Community
          </h1>
        </AnimationContainer>

        {/* Paragraph */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-2 md:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the latest trends, tutorials, and perspectives from our
            community.
          </p>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};

export default BlogHero;
