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
    <Wrapper className="relative w-full overflow-hidden pt-24 pb-12 md:pt-24 md:pb-16">
      {/* Grid Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12]"
      />

      <section className="mx-auto w-full max-w-6xl rounded-md border border-border">
        {/* Header */}
        <AnimationContainer animation="fadeDown">
          <div className="flex justify-center border-b border-dashed border-border p-4">
            <Badge
              variant="outline"
              className="group relative overflow-hidden border-border bg-background/70 px-3 py-1 md:px-4 md:py-1.5 backdrop-blur-md text-xs md:text-sm"
            >
              <span className="relative flex items-center gap-2">
                <Code2 className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Showcase
                </span>
              </span>
            </Badge>
          </div>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.15}>
          <div className="border-b border-dashed border-border px-6 py-10 text-center">
            <h2 className="mx-auto max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-6xl">
              Real-world{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                production websites
              </span>
            </h2>
          </div>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <div className="border-b border-dashed border-border px-6 py-8 text-center">
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Carefully crafted web experiences built with performance,
              scalability, elegant UI, and modern development standards.
            </p>
          </div>
        </AnimationContainer>

        {/* Showcase Grid */}
        <div className="border-b border-dashed border-border p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
            {SHOWCASE.map((project, index) => (
              <AnimationContainer
                key={project.url}
                animation="scaleUp"
                delay={0.45 + index * 0.08}
              >
                <div className="group relative rounded-2xl border border-dashed border-border bg-background/70 p-3 md:p-4 transition-all duration-500 hover:-translate-y-1.5 hover:bg-muted/30">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between rounded-xl border border-dashed border-border bg-muted/40 px-2 py-1 md:px-3 md:py-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-primary md:h-2.5 md:w-2.5" />
                      <div className="h-2 w-2 rounded-full bg-foreground md:h-2.5 md:w-2.5" />
                      <div className="h-2 w-2 rounded-full bg-muted-foreground md:h-2.5 md:w-2.5" />
                    </div>

                    <span className="max-w-[55%] truncate text-[10px] text-muted-foreground md:text-[11px]">
                      {project.url}
                    </span>
                  </div>

                  {/* Preview */}
                  <div className="relative mt-2 aspect-[16/10] overflow-hidden rounded-xl border border-dashed border-border bg-muted">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/40" />
                  </div>

                  {/* Footer */}
                  <div className="mt-3 flex items-center justify-between md:mt-4">
                    <h3 className="text-base font-semibold md:text-xl">
                      {project.name}
                    </h3>

                    <Link
                      href={project.url}
                      target="_blank"
                      className={cn(
                        "flex items-center gap-1 rounded-md border border-dashed border-border px-2 py-1 text-xs md:gap-1.5 md:px-3 md:py-1.5",
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
        </div>
      </section>
    </Wrapper>
  );
};

export default Showcase;
