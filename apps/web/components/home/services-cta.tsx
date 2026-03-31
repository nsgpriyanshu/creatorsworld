"use client";

import Link from "next/link";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Button } from "@repo/ui/components/ui/button";
import { PlayCircle, Sparkles, Code2, Palette, Bot, Cog } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";
import Image from "next/image";

type FloatingBadge = {
  label: string;
  mobileClassName: string;
  desktopClassName: string;
};

const FLOATING_BADGES: FloatingBadge[] = [
  {
    label: "web-development",
    mobileClassName: "left-[10%] top-10",
    desktopClassName: "lg:left-[8%] lg:top-[22%]",
  },
  {
    label: "ui/ux-design",
    mobileClassName: "right-[10%] top-24",
    desktopClassName: "lg:right-[9%] lg:top-[22%]",
  },
  {
    label: "discord-bot-development",
    mobileClassName: "left-[8%] bottom-10",
    desktopClassName: "lg:left-[12%] lg:bottom-[18%]",
  },
];

const DOTTED_BASE_POINTS = Array.from({ length: 120 }, (_, index) => {
  const cols = 20;
  const x = 6 + (index % cols) * 4.6;
  const y = 42 + Math.floor(index / cols) * 3.2;
  return [x, y] as const;
});

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

const ServicesCta = () => {
  return (
    <section className="relative overflow-hidden border-t border-dashed border-border py-16 lg:py-20">
      <Wrapper className="relative">
        {FLOATING_BADGES.map((badge, index) => {
          const Icon = index === 0 ? Code2 : index === 1 ? Palette : Bot;

          return (
            <AnimationContainer
              key={badge.label}
              animation="fadeUp"
              delay={0.12 + index * 0.1}
            >
              <div
                className={cn(
                  "absolute z-20 hidden items-center gap-2 rounded-md border border-border/50 bg-background/55 px-3 py-1.5 text-xs font-medium text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl md:flex",
                  badge.mobileClassName,
                  badge.desktopClassName,
                )}
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span>{badge.label}</span>
              </div>
            </AnimationContainer>
          );
        })}

        <section className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-background/55 shadow-[0_16px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-foreground/15 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-foreground/[0.02] via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%]">
            <DottedBase />
            <div className="absolute inset-x-[18%] bottom-[-18%] h-32 rounded-full bg-purple-500/28 blur-[80px] md:h-40 dark:bg-purple-400/24" />
            <div className="absolute inset-x-[34%] bottom-[-26%] h-24 rounded-full bg-purple-400/14 blur-[90px] md:h-28 dark:bg-purple-300/12" />
            <div className="absolute inset-0 bg-linear-to-t from-background/82 via-background/24 to-transparent" />
          </div>

          <div className="relative z-10 grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-14">
            <div className="max-w-xl text-left">
              <AnimationContainer animation="fadeUp" delay={0.15}>
                <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  Shape Your Digital Fortune Today
                </h2>
              </AnimationContainer>

              <AnimationContainer animation="fadeUp" delay={0.28}>
                <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
                  Hundreds of creators and brands have already made the move. If
                  you're ready to launch something sharper, we can help you
                  build it.
                </p>
              </AnimationContainer>

              <AnimationContainer animation="fadeUp" delay={0.4}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button
                    nativeButton={false}
                    variant="outline"
                    className="h-11 gap-2 rounded-xl border-border/50 bg-background/45 px-6 text-foreground hover:bg-background/70 md:h-12"
                    render={
                      <Link
                        href="https://discord.gg/VUMVuArkst"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <PlayCircle className="h-4 w-4" />
                    Explore Community
                  </Button>

                  <Button
                    nativeButton={false}
                    className="h-11 rounded-xl bg-primary px-6 text-primary-foreground hover:bg-primary/90 md:h-12"
                    render={<Link href="/service" />}
                  >
                    <Cog className="h-4 w-4" />
                    Services
                  </Button>
                </div>
              </AnimationContainer>
            </div>

            <AnimationContainer animation="fadeUp" delay={0.35}>
              <div className="relative rounded-[1.6rem] border border-border/40 bg-background/45 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl lg:ml-auto lg:max-w-[30rem]">
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 rounded-b-[1.6rem] bg-primary/12 blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-5 flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Sparkles key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground md:text-[15px]">
                    We provide end-to-end solutions for creators and brands
                    looking to build and scale their digital presence. From
                    custom bot development to UI/UX design, our team of experts
                    is here to help you every step of the way.
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border/40 bg-background/65 text-sm font-semibold text-foreground">
                      <Image
                        src="/icons/ca.png"
                        alt="Mimma Avatar"
                        width={34}
                        height={34}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-foreground">
                        Mimma
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Chief Administrative Officer, Creators World
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationContainer>
          </div>
        </section>
      </Wrapper>
    </section>
  );
};

export default ServicesCta;
