"use client";

import React from "react";
import { Badge } from "@repo/ui/components/ui/badge";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

interface LegalHeroProps {
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  effectiveDate?: string;
}

const LegalHero: React.FC<LegalHeroProps> = ({
  icon,
  badge,
  title,
  description,
  effectiveDate,
}) => {
  return (
    <Wrapper className="relative w-full overflow-hidden pt-24 pb-12 md:pt-24 md:pb-16">
      {/* subtle background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <section className="mx-auto w-full max-w-6xl rounded-md border border-border">
        {/* Badge */}
        <AnimationContainer animation="fadeDown">
          <div className="flex justify-center border-b border-dashed border-border p-4">
            <Badge
              variant="outline"
              className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

              <span className="relative flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-muted-foreground [&_svg]:transition-transform [&_svg]:duration-300 group-hover:[&_svg]:rotate-12">
                {icon}
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  {badge}
                </span>
              </span>
            </Badge>
          </div>
        </AnimationContainer>

        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0.15}>
          <div className="border-b border-dashed border-border px-6 py-10 text-center">
            <h1 className="mx-auto max-w-3xl text-balance text-5xl font-semibold tracking-tight md:text-6xl">
              {title}
            </h1>
          </div>
        </AnimationContainer>

        {/* Description */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <div className="px-6 py-8 text-center">
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          </div>
        </AnimationContainer>

        {effectiveDate && (
          <AnimationContainer animation="fadeUp" delay={0.45}>
            <div className="border-t border-dashed border-border px-6 py-4 ">
              <div className="flex items-center justify-center md:justify-end">
                <div className="inline-flex items-center gap-2 rounded-md border border-dashed border-border bg-background/70 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
                  Effective Date:{" "}
                  <span className="font-semibold text-blue-600">
                    {effectiveDate}
                  </span>
                </div>
              </div>
            </div>
          </AnimationContainer>
        )}
      </section>
    </Wrapper>
  );
};

export default LegalHero;
