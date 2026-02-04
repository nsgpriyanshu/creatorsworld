"use client";

import React from "react";
import { Shield } from "lucide-react";

import { Badge } from "@repo/ui/components/ui/badge";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

interface LegalHeroProps {
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
}

const LegalHero: React.FC<LegalHeroProps> = ({
  icon,
  badge,
  title,
  description,
}) => {
  return (
    <Wrapper className="relative w-full overflow-hidden pt-28 pb-16">
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="flex items-center gap-2 border-border bg-background px-4 py-1.5 text-secondary-foreground"
          >
            {icon}
            {badge}
          </Badge>
        </AnimationContainer>

        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            {title}
          </h1>
        </AnimationContainer>

        {/* Description */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};

export default LegalHero;
