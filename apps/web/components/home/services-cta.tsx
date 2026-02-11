"use client";

import Link from "next/link";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Button } from "@repo/ui/components/ui/button";
import { ArrowRight, Cog, Code2, Palette, Bot } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

type CursorTag = {
  label: string;
  className: string;
};

const CURSOR_TAGS: CursorTag[] = [
  {
    label: "web-development",
    className: "lg:left-[14%] lg:top-[26%] left-6 top-14",
  },
  {
    label: "ui/ux-design",
    className: "lg:right-[16%] lg:top-[40%] right-6 top-28",
  },
  {
    label: "discord-bot-development",
    className: "lg:left-[20%] lg:bottom-[28%] left-4 bottom-20",
  },
];

const ServicesCta = () => {
  return (
    <Wrapper className="relative py-24 overflow-hidden border-t-2 border-[#f10a0a]/20">
      {/* Top red glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-48 w-3/4 rounded-full bg-linear-to-r from-[#f10a0a]/30 via-[#f10a0a]/10 to-transparent blur-[6rem]" />

      {/* Bottom red glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 mx-auto h-56 w-3/4 rounded-full bg-linear-to-r from-[#f10a0a]/20 via-[#f10a0a]/10 to-transparent blur-[7rem]" />

      {/* Floating cursor tags */}
      {CURSOR_TAGS.map((tag, index) => {
        const Icon = index === 0 ? Code2 : index === 1 ? Palette : Bot;

        return (
          <AnimationContainer
            key={tag.label}
            animation="fadeUp"
            delay={0.15 + index * 0.1}
          >
            <div
              className={cn(
                "absolute z-30 flex items-center gap-2 rounded-xl border border-[#f10a0a]/30 bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur shadow-sm transition-all",
                tag.className,
              )}
            >
              <Icon className="h-4 w-4 text-[#f10a0a]" />
              {tag.label}
            </div>
          </AnimationContainer>
        );
      })}

      {/* Main CTA box */}
      <AnimationContainer animation="fadeUp" delay={0.25}>
        <div className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-[#f10a0a]/30 bg-card/60 px-8 py-14 text-center backdrop-blur md:px-16">
          {/* Subtle inner red glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-linear-to-br from-[#f10a0a]/10 via-transparent to-transparent" />

          <AnimationContainer animation="fadeUp" delay={0.35}>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Explore Our{" "}
              <span className="bg-linear-to-r from-foreground to-[#f10a0a] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.45}>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              From full-stack engineering to UI/UX design and Discord automation
              — we build scalable systems tailored for creators and communities.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.55}>
            <div className="mt-10 flex items-center justify-center">
              <Link href="/service">
                <Button
                  size="lg"
                  className="gap-2 bg-[#f10a0a] hover:bg-[#d60909] text-primary"
                >
                  <Cog className="h-5 w-5" />
                  Explore Services
                </Button>
              </Link>

              <Button size="icon" className="group border-border ">
                <Link href="/service">
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

export default ServicesCta;
