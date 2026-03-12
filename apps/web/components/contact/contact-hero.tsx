"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

import { Badge } from "@repo/ui/components/ui/badge";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

const ContactHero: React.FC = () => {
  return (
    <Wrapper className="relative w-full overflow-x-hidden pt-24 pb-12 md:pt-24 md:pb-16">
      <AnimationContainer animation="fadeUp">
        <div className="w-full rounded-md border border-border">
          {/* Badge */}
          <div className="flex justify-center border-b border-dashed border-border p-4 md:p-5">
            <Badge
              variant="outline"
              className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

              <span className="relative flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Contact
                </span>
              </span>
            </Badge>
          </div>

          {/* Heading */}
          <div className="border-b border-dashed border-border px-6 py-8 md:py-10 text-center">
            <AnimationContainer animation="fadeUp" delay={0.15}>
              <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                Let’s Talk
              </h1>
            </AnimationContainer>
          </div>

          {/* Description */}
          <div className="px-6 py-6 md:py-8 text-center">
            <AnimationContainer animation="fadeUp" delay={0.3}>
              <p className="mx-auto max-w-2xl text-sm md:text-base leading-relaxed text-muted-foreground">
                Have questions, feedback, or collaboration opportunities? We'd
                love to hear from you. Reach out and let's build something
                meaningful together.
              </p>
            </AnimationContainer>
          </div>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default ContactHero;
