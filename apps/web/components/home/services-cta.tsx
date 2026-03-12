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
                  "absolute z-30 flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium backdrop-blur-2xl text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]",
                  tag.className,
                )}
              >
                <Icon className="h-4 w-4 text-white/80" />
                {tag.label}
              </div>
            </AnimationContainer>
          );
        })}

        {/* CTA CARD */}
        <AnimationContainer animation="fadeUp" delay={0.25}>
          <div className="relative z-10 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-3xl px-8 py-14 text-center md:px-14 shadow-[0_10px_60px_rgba(0,0,0,0.4)]">
            {/* subtle top shine */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

            <AnimationContainer animation="fadeUp" delay={0.35}>
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-white">
                Explore Our{" "}
                <span className="bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.45}>
              <p className="mx-auto mt-6 max-w-xl text-base text-white/70 md:text-lg">
                From full-stack engineering to UI/UX design and Discord
                automation — we build scalable systems tailored for creators and
                communities.
              </p>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.55}>
              <div className="mt-10 flex items-center justify-center gap-3">
                <Link href="/service">
                  <Button
                    size="lg"
                    className="gap-2 bg-white text-black hover:bg-white/90"
                  >
                    <Cog className="h-5 w-5" />
                    Explore Services
                  </Button>
                </Link>

                <Link href="/service">
                  <Button
                    size="icon"
                    variant="outline"
                    className="group border-white/30 text-white hover:bg-white/10"
                  >
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-white" />
                  </Button>
                </Link>
              </div>
            </AnimationContainer>
          </div>
        </AnimationContainer>
      </Wrapper>
    </section>
  );
};

export default ServicesCta;
