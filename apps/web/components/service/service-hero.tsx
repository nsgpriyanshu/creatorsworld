"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Presentation, CogIcon } from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import { Marquee } from "@repo/ui/components/ui/marquee";

export default function ServiceHero() {
  return (
    <Wrapper className="relative w-full overflow-hidden pt-24 pb-12 md:pt-24 md:pb-16">
      {/* subtle background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <AnimationContainer animation="fadeUp" className="w-full">
        <div className="mx-auto max-w-6xl rounded-md border border-border">
          {/* Badge */}
          <AnimationContainer animation="fadeDown">
            <div className="flex justify-center border-b border-dashed border-border p-4">
              <Badge
                variant="outline"
                className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
              >
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

                <span className="relative flex items-center gap-2">
                  <CogIcon className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                  <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Services
                  </span>
                </span>
              </Badge>
            </div>
          </AnimationContainer>

          {/* Content + Image */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left */}
            <div className="border-b border-dashed border-border md:border-b-0 md:border-r">
              <AnimationContainer animation="fadeUp" delay={0.15}>
                <div className="border-b border-dashed border-border px-6 py-10 text-left">
                  <h1 className="mx-auto max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                    We Build
                    <span className="block text-muted-foreground">
                      Digital Experiences
                    </span>
                  </h1>
                </div>
              </AnimationContainer>

              <AnimationContainer animation="fadeUp" delay={0.3}>
                <div className="border-b border-dashed border-border px-6 py-8 text-left">
                  <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                    From web development to scalable backend systems,
                    we craft digital products designed for performance,
                    reliability, and modern user experiences.
                  </p>
                </div>
              </AnimationContainer>

              <AnimationContainer animation="fadeUp" delay={0.45}>
                <div className="px-6 py-8">
                  <Link href="/contact">
                    <Button size="lg" className="gap-2 rounded-md px-8">
                      Get a Demo
                      <Presentation className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </AnimationContainer>
            </div>

            {/* Right */}
            <AnimationContainer animation="fadeUp" delay={0.6}>
              <div className="relative h-[240px] md:h-full">
                <Image
                  src="/backgrounds/cw-hand.png"
                  alt="Service visual"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </AnimationContainer>
          </div>

          {/* Marquee */}
          <AnimationContainer animation="fadeUp" delay={0.75}>
            <div className="border-t border-dashed border-border py-6">
              <Marquee pauseOnHover className="[--duration:32s] [--gap:2.5rem]">
                {[
                  "Web Development",
                  "Brand Systems",
                  "UI/UX Design",
                  "APIs & Integrations",
                  "Performance",
                  "Security",
                  "Automation",
                  "Scalability",
                ].map((item) => (
                  <div
                    key={item}
                    className="text-sm font-medium text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </Marquee>
            </div>
          </AnimationContainer>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
}
