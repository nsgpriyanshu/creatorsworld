"use client";

import { Badge } from "@repo/ui/components/ui/badge";
import AnimationContainer from "../global/animation-container";
import { Newspaper } from "lucide-react";
import Wrapper from "../global/wrapper";

const BlogHero = () => {
  return (
    <Wrapper className="relative pt-28 pb-24 w-full overflow-hidden">
      {/* Brand Glow
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-48 w-3/4 rounded-full bg-[radial-gradient(86%_172%_at_50%_-40%,rgba(241,10,10,0.9)_0%,rgba(5,5,5,0)_80%)] blur-[6rem]" /> */}

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="mx-auto mb-5 flex w-fit items-center gap-2 border-border bg-background px-4 py-1.5 text-secondary-foreground"
          >
            <Newspaper className="h-4 w-4 text-[#f10a0a]" />
            Blog
          </Badge>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            Discover Stories & Insights
          </h1>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            Stay updated with the latest news, articles, and insights from the
            Creator's World community. Explore diverse perspectives and creative
            content.
          </p>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};

export default BlogHero;
