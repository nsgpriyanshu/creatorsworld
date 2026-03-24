"use client";

import Link from "next/link";
import Image from "next/image";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Button } from "@repo/ui/components/ui/button";
import { ArrowRight, Cog, Code2, Palette, Bot } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

type CursorTag = {
  label: string;
  mobileClassName: string;
  desktopClassName: string;
};

const CURSOR_TAGS: CursorTag[] = [
  {
    label: "web-development",
    mobileClassName: "left-[10%] top-16",
    desktopClassName: "lg:left-[14%] lg:top-[26%]",
  },
  {
    label: "ui/ux-design",
    mobileClassName: "right-[10%] top-28",
    desktopClassName: "lg:right-[16%] lg:top-[40%]",
  },
  {
    label: "discord-bot-development",
    mobileClassName: "left-[8%] bottom-24",
    desktopClassName: "lg:left-[20%] lg:bottom-[28%]",
  },
];

const ServicesCta = () => {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden border-t border-dashed border-white/10 bg-transparent text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20 bg-[#030303] justify-center items-center">
        <Image
          src="/backgrounds/cw-hand.png"
          alt="background"
          height={600}
          width={600}
          priority
          sizes="100vw"
          className="object-contain object-center "
        />
      </div>

      <Wrapper className="relative">
        <section className="relative overflow-hidden">
          {/* Floating tags */}
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
                    "absolute z-30 flex max-w-[10rem] items-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-2xl sm:max-w-none sm:px-3 sm:py-1.5 sm:text-xs",
                    tag.mobileClassName,
                    tag.desktopClassName,
                  )}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-white/80 sm:h-4 sm:w-4" />
                  <span className="truncate">{tag.label}</span>
                </div>
              </AnimationContainer>
            );
          })}

          {/* CTA CARD */}
          <AnimationContainer animation="fadeUp" delay={0.25}>
            <div className="relative z-10 mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-14 text-center shadow-[0_10px_60px_rgba(0,0,0,0.4)] backdrop-blur-3xl md:px-14">
              {/* subtle top shine */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

              <AnimationContainer animation="fadeUp" delay={0.35}>
                <h2 className="text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl">
                  Explore Our{" "}
                  <span className="bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent">
                    Services
                  </span>
                </h2>
              </AnimationContainer>

              <AnimationContainer animation="fadeUp" delay={0.45}>
                <p className="mx-auto mt-6 max-w-xl text-base text-white/70 md:text-lg">
                  From full-stack engineering to UI/UX design and Discord
                  automation — we build scalable systems tailored for creators
                  and communities.
                </p>
              </AnimationContainer>

              <AnimationContainer animation="fadeUp" delay={0.55}>
                <div className="mt-10 flex items-center justify-center gap-3">
                  <Button
                    nativeButton={false}
                    size="lg"
                    className="gap-2 bg-white text-black hover:bg-white/90"
                    render={<Link href="/service" />}
                  >
                    <Cog className="h-5 w-5" />
                    Explore Services
                  </Button>

                  <Button
                    nativeButton={false}
                    size="icon"
                    variant="outline"
                    className="group border-white/30 text-white hover:bg-white/10"
                    render={
                      <Link href="/service" aria-label="Explore services" />
                    }
                  >
                    <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </AnimationContainer>
            </div>
          </AnimationContainer>
        </section>
      </Wrapper>
    </section>
  );
};

export default ServicesCta;
