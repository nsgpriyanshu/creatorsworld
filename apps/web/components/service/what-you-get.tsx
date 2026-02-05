"use client";

import React from "react";
import { WHAT_YOU_GET } from "../../constants/what-you-get";
import { ArrowRight, CirclePlus } from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

import { Badge } from "@repo/ui/components/ui/badge";
import { Card, CardContent } from "@repo/ui/components/ui/card";

const WhatYouGet = () => {
  return (
    <section className="relative w-full overflow-hidden py-28">
      <Wrapper>
        <div className="flex flex-col items-center text-center">
          <AnimationContainer animation="fadeDown">
            <Badge
              variant="outline"
              className="group flex items-center gap-2 border-border bg-background/70 px-4 py-1.5 text-secondary-foreground transition-all duration-300 hover:border-[#f10a0a]"
            >
              <CirclePlus className="h-4 w-4 text-[#f10a0a] transition-transform duration-300 group-hover:rotate-12" />
              What You Get
            </Badge>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.15}>
            <h2 className="mt-8 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Everything you need to{" "}
              <span className="bg-linear-to-r from-foreground to-[#f10a0a] bg-clip-text text-transparent">
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

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_YOU_GET.map((item, index) => {
            const Icon = item.icon;

            return (
              <AnimationContainer
                key={item.title}
                animation="scaleUp"
                delay={0.45 + index * 0.1}
              >
                <Card className="group h-full rounded-3xl border-border transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      {/* ICON — ONLY COLOR UPDATED */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background">
                        <Icon className="h-5 w-5 text-[#f10a0a]" />
                      </div>

                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground">
                      {item.description}
                    </p>

                    <ul className="mt-6 space-y-2 text-sm">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimationContainer>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default WhatYouGet;
