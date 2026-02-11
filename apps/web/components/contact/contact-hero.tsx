"use client";

import React from "react";
import { Mail, MailOpen } from "lucide-react";

import { Badge } from "@repo/ui/components/ui/badge";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

const ContactHero: React.FC = () => {
  return (
    <Wrapper className="relative w-full overflow-hidden pt-28 pb-16">
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
          >
            {/* moving shine */}
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

            <span className="relative flex items-center gap-2">
              <MailOpen className="h-4 w-4 text-[#f10a0a] transition-transform duration-300 group-hover:rotate-12" />
              <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Let's Connect
              </span>
            </span>
          </Badge>
        </AnimationContainer>

        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            Get in Touch!
          </h1>
        </AnimationContainer>

        {/* Description */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            Have questions, feedback, or collaboration opportunities? We'd love
            to hear from you. Reach out to our team and let's build something
            amazing together.
          </p>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};

export default ContactHero;
