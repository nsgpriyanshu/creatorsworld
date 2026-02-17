"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Code2 } from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Badge } from "@repo/ui/components/ui/badge";
import { SHOWCASE } from "../../constants/showcase";
import { cn } from "@repo/ui/lib/utils";

const Showcase = () => {
  return (
    <section className="relative w-full overflow-hidden py-28">
      <Wrapper>
        {/* ------------------------------------------------------------------ */}
        {/* Header (Matched Tech Stack)                                        */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex flex-col items-center text-center">
          <AnimationContainer animation="fadeDown">
            <Badge
              variant="outline"
              className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex items-center gap-2">
                <Code2 className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Showcase
                </span>
              </span>
            </Badge>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.15}>
            <h2 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
              Real-world{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                production websites
              </span>
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.3}>
            <p className="mt-6 max-w-3xl text-muted-foreground md:text-lg leading-relaxed">
              Carefully crafted web experiences built with performance,
              scalability, elegant UI, and modern development standards.
            </p>
          </AnimationContainer>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Showcase Grid                                                      */}
        {/* ------------------------------------------------------------------ */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE.map((project, index) => (
            <AnimationContainer
              key={project.url}
              animation="scaleUp"
              delay={0.4 + index * 0.1}
            >
              <div className="group relative rounded-2xl border border-border bg-background p-3 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg">
                {/* Browser Bar */}
                <div className="flex items-center justify-between rounded-xl border border-border bg-muted/40 px-3 py-1.5">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                    <div className="h-2.5 w-2.5 rounded-full bg-foreground" />
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />
                  </div>

                  <span className="truncate text-[11px] text-muted-foreground max-w-[55%]">
                    {project.url}
                  </span>
                </div>

                {/* Preview */}
                <div className="relative mt-2 overflow-hidden rounded-xl border border-border aspect-[16/10] bg-muted">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/40" />
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold">{project.name}</h3>

                  <Link
                    href={project.url}
                    target="_blank"
                    className={cn(
                      "flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs",
                      "transition-all duration-300",
                      "hover:bg-muted",
                      "hover:gap-2",
                    )}
                  >
                    Visit
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Showcase;
