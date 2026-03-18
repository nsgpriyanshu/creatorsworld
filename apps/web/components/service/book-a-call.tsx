"use client";

import Link from "next/link";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Button } from "@repo/ui/components/ui/button";
import {
  ArrowRight,
  PhoneCall,
  Pencil,
  MessageCircle,
  Wand2,
} from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

type CursorTag = {
  label: string;
  className: string;
};

const CURSOR_TAGS: CursorTag[] = [
  {
    label: "project-design",
    className: "lg:left-[14%] lg:top-[26%] left-6 top-14",
  },
  {
    label: "project-discussion",
    className: "lg:right-[16%] lg:top-[40%] right-6 top-28",
  },
  {
    label: "custom-solution",
    className: "lg:left-[20%] lg:bottom-[28%] left-4 bottom-20",
  },
];

const BookCallCta = () => {
  return (
    <Wrapper className="relative py-12 md:py-24 overflow-hidden border-t-2">
      {/* Top hero-style glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-12 md:-top-24 -z-10 mx-auto h-32 md:h-48 w-3/4 rounded-full bg-linear-to-r from-primary/30 via-primary/10 to-transparent blur-[6rem]" />

      {/* Bottom soft glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 mx-auto h-40 md:h-56 w-3/4 rounded-full bg-linear-to-r from-primary/20 via-primary/10 to-transparent blur-[7rem]" />

      {/* Floating cursor tags (FORCED ABOVE CARD) */}
      {CURSOR_TAGS.map((tag, index) => {
        const Icon = index === 0 ? Pencil : index === 1 ? MessageCircle : Wand2;

        return (
          <AnimationContainer
            key={tag.label}
            animation="fadeUp"
            delay={0.15 + index * 0.1}
          >
            <div
              className={cn(
                "absolute z-30 flex items-center gap-2 rounded-xl border border-border bg-background/70 px-2 py-1 md:px-3 md:py-1.5 text-xs font-medium text-foreground backdrop-blur shadow-sm transition-all",
                tag.className,
              )}
            >
              <Icon className="h-4 w-4 text-primary" />
              {tag.label}
            </div>
          </AnimationContainer>
        );
      })}

      {/* Main CTA box */}
      <AnimationContainer animation="fadeUp" delay={0.25}>
        <div className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-border bg-card/60 px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-14 text-center backdrop-blur">
          {/* Subtle inner glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-linear-to-br from-primary/10 via-transparent to-transparent" />

          <AnimationContainer animation="fadeUp" delay={0.35}>
            <h2 className="text-balance text-5xl font-semibold tracking-tight md:text-6xl">
              Book a Free{" "}
              <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
                Strategy Call
              </span>
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.45}>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:mt-6 md:text-lg">
              Let's discuss your idea, goals, and challenges — and see how we
              can build a scalable solution tailored for you.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.55}>
            <div className="mt-6 md:mt-10 flex items-center justify-center gap-2">
              <Button
                size="lg"
                className="gap-2"
                render={<Link href="/contact" />}
              >
                <PhoneCall className="h-5 w-5" />
                Book a Call
              </Button>

              <Button
                size="icon"
                className="group border-border"
                render={<Link href="/contact" aria-label="Book a call" />}
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </AnimationContainer>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default BookCallCta;
