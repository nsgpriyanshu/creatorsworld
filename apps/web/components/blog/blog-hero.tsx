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
      <Wrapper className="relative overflow-x-hidden py-12 lg:py-16">
        <div className="mx-auto w-full max-w-6xl rounded-md border border-border">
          {/* Badge Skeleton */}
          <div className="flex justify-center border-b border-dashed border-border p-4">
            <Skeleton className="h-6 w-32 rounded-md" />
          </div>
          {/* Heading Skeleton */}
          <div className="border-b border-dashed border-border px-6 py-8 text-center space-y-3">
            <Skeleton className="h-8 w-full max-w-xl mx-auto rounded-md" />
            <Skeleton className="h-8 w-3/4 mx-auto rounded-md" />
          </div>
          {/* Paragraph Skeleton */}
          <div className="px-6 py-6 text-center space-y-2">
            <Skeleton className="h-4 w-full max-w-lg mx-auto rounded-md" />
            <Skeleton className="h-4 w-3/4 mx-auto rounded-md" />
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="relative overflow-x-hidden py-12 lg:py-16">
      <AnimationContainer animation="fadeUp">
        <div className="mx-auto w-full max-w-6xl rounded-md border border-border">
          {/* Badge */}
          <AnimationContainer animation="fadeDown">
            <div className="flex justify-center border-b border-dashed border-border p-4">
              <Badge
                variant="outline"
                className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
              >
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

                <span className="relative flex items-center gap-2">
                  <Newspaper className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                  <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Blog
                  </span>
                </span>
              </Badge>
            </div>
          </AnimationContainer>

          {/* Heading */}
          <AnimationContainer animation="fadeUp" delay={0.15}>
            <div className="border-b border-dashed border-border px-6 py-10 text-center">
              <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                Insights & Stories from the Community
              </h1>
            </div>
          </AnimationContainer>

          {/* Description */}
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <div className="px-6 py-8 text-center">
              <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                Explore the latest trends, tutorials, and perspectives from our
                community.
              </p>
            </div>
          </AnimationContainer>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default BlogHero;
