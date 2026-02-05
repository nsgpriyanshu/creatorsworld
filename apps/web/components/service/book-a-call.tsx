"use client";

import Link from "next/link";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Button } from "@repo/ui/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
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
    className: "lg:right-[16%] lg:top-[34%] right-6 top-28",
  },
  {
    label: "custom-solution",
    className: "lg:left-[20%] lg:bottom-[28%] left-4 bottom-20",
  },
];

const BookCallCta = () => {
  return (
    <Wrapper className="relative py-24">
      {/* Floating cursor tags */}
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
            <PhoneCall className="h-4 w-4 text-[#f10a0a]" />
            {tag.label}
          </div>
        </AnimationContainer>
      ))}

      {/* Main CTA box */}
      <AnimationContainer animation="fadeUp" delay={0.25}>
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-[#f10a0a] bg-red-400/10 px-8 py-14 text-center md:px-16">
          <AnimationContainer animation="fadeUp" delay={0.35}>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Book a Free Strategy Call
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.45}>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Let’s discuss your idea, goals, and challenges — and see how we
              can build a scalable solution tailored for you.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.55}>
            <div className="mt-10 flex items-center justify-center gap-2">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  <PhoneCall className="h-5 w-5" />
                  Book a Call
                </Button>
              </Link>

              <Button size="icon" variant="outline" className="group">
                <Link href="/contact">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimationContainer>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default BookCallCta;
