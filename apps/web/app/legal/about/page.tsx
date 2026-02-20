"use client";

import type { JSX } from "react";
import { Info } from "lucide-react";
import { Badge } from "@repo/ui/components/ui/badge";
import AboutContent from "../../../components/legal/about-content";
import { aboutDescription } from "../../../constants/legal";

export default function AboutPage(): JSX.Element {
  return (
    <div className="relative flex w-full flex-col">
      {/* About Header Section */}
      <section className="relative flex w-full flex-col items-center gap-6 px-6 py-20 sm:py-24 text-center">
        {/* Subtle background glow */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-muted/40 via-transparent to-transparent" />

        {/* Highlight Badge */}
        <Badge
          variant="outline"
          className="group relative overflow-hidden border-border bg-background/60 px-6 py-2 backdrop-blur-md transition-all duration-300 hover:shadow-md"
        >
          {/* Moving shine */}
          <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

          <span className="relative flex items-center gap-2">
            <Info className="h-4 w-4 text-[#f10a0a] transition-transform duration-300 group-hover:rotate-12" />
            <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent text-sm font-semibold tracking-wide">
              Our Journey
            </span>
          </span>
        </Badge>

        {/* Page Title */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          About Creators World
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          From a simple dream to the world's largest verified Discord bot
          server, discover how we're revolutionizing community and innovation.
        </p>
      </section>

      {/* About Content Section */}
      <section className="w-full px-6 pb-20">
        <AboutContent description={aboutDescription} />
      </section>
    </div>
  );
}
