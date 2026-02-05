"use client";

import Link from "next/link";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Button } from "@repo/ui/components/ui/button";
import { ArrowRight, MousePointer2 } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

type CursorTag = {
  label: string;
  className: string;
};

const CURSOR_TAGS: CursorTag[] = [
  {
    label: "web-dev",
    className: "lg:left-[12%] lg:top-[28%] left-6 top-16",
  },
  {
    label: "ui/ux-design",
    className: "lg:right-[14%] lg:top-[32%] right-6 top-32",
  },
  {
    label: "discord-bot-development",
    className: "lg:left-[22%] lg:bottom-[30%] left-4 bottom-20",
  },
];

const ServicesCta = () => {
  return (
    <Wrapper className="relative py-24">
      {/* Cursor tags */}
      {CURSOR_TAGS.map((tag, index) => (
        <AnimationContainer
          key={tag.label}
          animation="fadeUp"
          delay={0.15 + index * 0.1}
        >
          <div
            className={cn(
              "absolute flex items-center gap-2 rounded-xl border-2 border-primary bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm",
              tag.className,
            )}
          >
            <MousePointer2 className="h-4 w-4 text-[#f10a0a]" />
            {tag.label}
          </div>
        </AnimationContainer>
      ))}

      {/* Main bordered CTA box */}
      <AnimationContainer animation="fadeUp" delay={0.25}>
        <div className="mx-auto max-w-4xl rounded-3xl border-2 bg-red-400/10 border-[#f10a0a] px-8 py-14 text-center md:px-16">
          <AnimationContainer animation="fadeUp" delay={0.35}>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Explore Our Services
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.45}>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              From full-stack development to UI/UX and Discord automation — we
              build systems that scale with creators and communities.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.55}>
            <div className="mt-10 flex items-center justify-center">
              <Link href="/services">
                <Button variant="default" size="lg">
                  Explore Services
                </Button>
                <Button size="icon" className="group gap-2">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </AnimationContainer>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default ServicesCta;
