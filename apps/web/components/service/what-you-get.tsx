"use client";

import * as React from "react";
import { WHAT_YOU_GET } from "../../constants/what-you-get";
import { ArrowRight, CirclePlus } from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Badge } from "@repo/ui/components/ui/badge";
import { cn } from "@repo/ui/lib/utils";

const WhatYouGet = () => {
  return (
    <section className="relative w-full overflow-hidden py-28">
      <Wrapper>
        {/* ------------------------------------------------------------------ */}
        {/* Header                                                             */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex flex-col items-center text-center">
          <AnimationContainer animation="fadeDown">
            <Badge
              variant="outline"
              className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
            >
              {/* shine */}
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

              <span className="relative flex items-center gap-2">
                <CirclePlus className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  What You Get
                </span>
              </span>
            </Badge>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.15}>
            <h2 className="mt-8 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                launch & scale
              </span>
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.3}>
            <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
              From design to deployment and beyond, we cover every step so you
              can focus on growing your business.
            </p>
          </AnimationContainer>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Flow                                                               */}
        {/* ------------------------------------------------------------------ */}
        <div className="relative mt-24">
          {/* Curved connectors (desktop only) */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 1200 300"
            fill="none"
          >
            {WHAT_YOU_GET.slice(0, -1).map((_, index) => {
              const startX = 200 + index * 260;
              const endX = startX + 260;

              return (
                <path
                  key={index}
                  d={`M ${startX} 150 C ${
                    startX + 130
                  } 40, ${endX - 130} 260, ${endX} 150`}
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
              );
            })}
          </svg>

          {/* Items */}
          <div className="relative z-10 grid gap-10 lg:grid-flow-col lg:auto-cols-fr">
            {WHAT_YOU_GET.map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimationContainer
                  key={item.title}
                  animation="scaleUp"
                  delay={0.4 + index * 0.1}
                >
                  <div className="group relative h-full rounded-3xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    {/* Step Badge */}
                    <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background text-sm font-medium">
                      {index + 1}
                    </div>

                    {/* Header */}
                    <div className="flex items-center gap-3 pt-6">
                      {/* Icon Container — Monochrome Subtle Style */}
                      <div
                        className={cn(
                          "relative flex h-12 w-12 items-center justify-center rounded-2xl",
                          "border border-border",
                          "bg-muted/40",
                          "transition-all duration-300",
                          "group-hover:bg-muted",
                          "group-hover:border-foreground/20",
                          "group-hover:scale-105",
                        )}
                      >
                        {/* Soft inner glow */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/5 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                        <Icon className="relative h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                      </div>

                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm text-muted-foreground">
                      {item.description}
                    </p>

                    {/* Points */}
                    <ul className="mt-6 space-y-2 text-sm">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
                          <span className="text-muted-foreground transition-colors group-hover:text-foreground/80">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimationContainer>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default WhatYouGet;
