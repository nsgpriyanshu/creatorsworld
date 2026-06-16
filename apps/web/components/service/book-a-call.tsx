"use client";

import Link from "next/link";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Button } from "@repo/ui/components/ui/button";
import {
  ArrowRight,
  CalendarCheck,
  MessageCircle,
  Pencil,
  PhoneCall,
  Sparkles,
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
    className: "left-[8%] top-10 lg:left-[8%] lg:top-[22%]",
  },
  {
    label: "project-discussion",
    className: "right-[8%] top-24 lg:right-[9%] lg:top-[26%]",
  },
  {
    label: "custom-solution",
    className: "left-[7%] bottom-10 lg:left-[12%] lg:bottom-[18%]",
  },
];

const DOTTED_BASE_POINTS = Array.from({ length: 120 }, (_, index) => {
  const cols = 20;
  const x = 6 + (index % cols) * 4.6;
  const y = 42 + Math.floor(index / cols) * 3.2;
  return [x, y] as const;
});

const CALL_STEPS = [
  {
    label: "Scope",
    accent: "bg-blue-500/45",
    surface: "bg-blue-500/8",
  },
  {
    label: "Stack",
    accent: "bg-emerald-500/45",
    surface: "bg-emerald-500/8",
  },
  {
    label: "Roadmap",
    accent: "bg-rose-500/45",
    surface: "bg-rose-500/8",
  },
] as const;

function DottedBase() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 64"
      className="h-full w-full text-foreground/18"
    >
      {DOTTED_BASE_POINTS.map(([cx, cy], index) => (
        <circle
          key={`${cx}-${cy}-${index}`}
          cx={cx}
          cy={cy}
          r="0.42"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

const BookCallCta = () => {
  return (
    <section className="relative overflow-hidden border-t border-dashed border-border py-16 lg:py-20">
      <Wrapper className="relative">
        {CURSOR_TAGS.map((tag, index) => {
          const Icon =
            index === 0 ? Pencil : index === 1 ? MessageCircle : Wand2;

          return (
            <AnimationContainer
              key={tag.label}
              animation="fadeUp"
              delay={0.12 + index * 0.1}
            >
              <div
                className={cn(
                  "absolute z-20 hidden items-center gap-2 rounded-md border border-border/50 bg-background/55 px-3 py-1.5 text-xs font-medium text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl md:flex",
                  tag.className,
                )}
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span>{tag.label}</span>
              </div>
            </AnimationContainer>
          );
        })}

        <AnimationContainer animation="fadeUp" delay={0.22}>
          <section className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-background/55 shadow-[0_16px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-foreground/15 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-foreground/[0.025] via-transparent to-transparent" />
            <div className="pointer-events-none absolute right-[-14%] top-[-26%] h-56 w-56 rounded-full bg-sky-400/14 blur-[80px]" />
            <div className="pointer-events-none absolute left-[-12%] bottom-[-24%] h-64 w-64 rounded-full bg-emerald-400/12 blur-[88px]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%]">
              <DottedBase />
              <div className="absolute inset-x-[18%] bottom-[-18%] h-32 rounded-full bg-primary/14 blur-[80px] md:h-40" />
              <div className="absolute inset-0 bg-linear-to-t from-background/84 via-background/28 to-transparent" />
            </div>

            <div className="relative z-10 grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-14 lg:px-14">
              <div className="max-w-xl text-left">
                <AnimationContainer animation="fadeUp" delay={0.14}>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/45 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl">
                    <CalendarCheck className="h-3.5 w-3.5 text-primary" />
                    Free discovery call
                  </div>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.24}>
                  <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                    Book a Free{" "}
                    <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      Strategy Call
                    </span>
                  </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.34}>
                  <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
                    Let us discuss your idea, goals, and constraints, then map
                    the cleanest path toward a scalable digital product.
                  </p>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.44}>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Button
                      nativeButton={false}
                      className="h-11 gap-2 rounded-xl bg-primary px-6 text-primary-foreground hover:bg-primary/90 md:h-12"
                      render={<Link href="/contact" />}
                    >
                      <PhoneCall className="h-4 w-4" />
                      Book a Call
                    </Button>

                    <Button
                      nativeButton={false}
                      variant="outline"
                      className="group h-11 gap-2 rounded-xl border-border/50 bg-background/45 px-6 text-foreground hover:bg-background/70 md:h-12"
                      render={<Link href="/contact" />}
                    >
                      Start Brief
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </AnimationContainer>
              </div>

              <AnimationContainer animation="fadeUp" delay={0.34}>
                <div className="relative rounded-[1.6rem] border border-border/40 bg-background/45 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl lg:ml-auto lg:max-w-[30rem]">
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 rounded-b-[1.6rem] bg-primary/12 blur-3xl" />
                  <div className="pointer-events-none absolute right-8 top-6 h-20 w-20 rounded-full bg-sky-400/10 blur-2xl" />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-center gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Sparkles
                          key={index}
                          className="h-4 w-4 fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-sm leading-7 text-muted-foreground md:text-[15px]">
                      We keep the call practical: scope, priorities, timeline,
                      and the tradeoffs that matter. You leave with a clearer
                      next step, whether we build together or simply point you
                      in the right direction.
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {CALL_STEPS.map((item) => (
                        <div
                          key={item.label}
                          className={cn(
                            "rounded-xl border border-border/40 px-3 py-3",
                            "bg-background/55",
                            item.surface,
                          )}
                        >
                          <div
                            className={cn(
                              "mb-2 h-1.5 w-8 rounded-full",
                              item.accent,
                            )}
                          />
                          <p className="text-xs font-medium text-foreground">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimationContainer>
            </div>
          </section>
        </AnimationContainer>
      </Wrapper>
    </section>
  );
};

export default BookCallCta;
