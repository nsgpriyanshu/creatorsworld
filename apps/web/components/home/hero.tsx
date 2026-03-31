"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Compass, Terminal } from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import CobeGlobe from "./cobe-globe";

import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";

const Hero: React.FC = () => {
  return (
    <Wrapper className="relative w-full overflow-hidden pt-24 pb-12 md:pt-24 md:pb-16">
      {/* subtle background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <section className="mx-auto w-full max-w-6xl rounded-md border border-border">
        {/* Badge */}
        <AnimationContainer animation="fadeDown">
          <div className="flex justify-center border-b border-dashed border-border p-4">
            <Badge
              variant="outline"
              className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

              <span className="relative flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  World's Largest Bot Server
                </span>
              </span>
            </Badge>
          </div>
        </AnimationContainer>

        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0.15}>
          <div className="border-b border-dashed border-border px-6 py-10 text-center">
            <h1 className="mx-auto max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Step into the
              <span className="block text-muted-foreground">
                Creator's World
              </span>
            </h1>
          </div>
        </AnimationContainer>

        {/* Description */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <div className="border-b border-dashed border-border px-6 py-8 text-center">
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              Build bots, collaborate with developers, and deploy powerful tools
              for communities around the world.
            </p>
          </div>
        </AnimationContainer>

        {/* CTA row */}
        <AnimationContainer animation="fadeUp" delay={0.45}>
          <div className="grid md:grid-cols-2 border-b border-dashed border-border">
            <div className="flex items-center justify-center border-r border-dashed border-border p-6">
              <Button
                nativeButton={false}
                size="lg"
                className="h-11 gap-2 rounded-md px-8 text-base md:h-12"
                render={
                  <Link
                    href="https://discord.gg/VUMVuArkst"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <Compass className="h-4 w-4" />
                Explore Community
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground p-6">
              <Terminal className="h-4 w-4" />
              creatorworlds
            </div>
          </div>
        </AnimationContainer>

        {/* Globe panel */}
        <AnimationContainer animation="fadeUp" delay={0.6}>
          <div className="px-4 py-8 md:px-8 md:py-10">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
              <CobeGlobe />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Terminal className="h-4 w-4" />
                creatorsworldserver
              </div>
            </div>
          </div>
        </AnimationContainer>
      </section>
    </Wrapper>
  );
};

export default Hero;
