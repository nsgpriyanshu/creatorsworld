"use client";

import type { JSX } from "react";
import { Palette } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import Wrapper from "../../../components/global/wrapper";
import AnimationContainer from "../../../components/global/animation-container";
import ColorPalette from "../../../components/legal/color-palette";
import LogosShowcase from "../../../components/legal/logos-showcase";
import BrandGuidelines from "../../../components/legal/brand-guidelines";
import {
  brandColors,
  brandLogos,
  brandGuidelines,
} from "../../../constants/legal";

export default function BrandPage(): JSX.Element {
  return (
    <div className="relative flex w-full flex-col">
      {/* Header Section (Replaces LegalHero) */}
      <section className="relative flex w-full flex-col items-center gap-6 px-6 py-20 sm:py-24 text-center">
        {/* Subtle background glow */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-muted/40 via-transparent to-transparent" />

        <Badge
          variant="outline"
          className="group relative overflow-hidden border-border bg-background/60 px-6 py-2 backdrop-blur-md transition-all duration-300 hover:shadow-md"
        >
          <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

          <span className="relative flex items-center gap-2">
            <Palette className="h-4 w-4 text-[#f10a0a] transition-transform duration-300 group-hover:rotate-12" />
            <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent text-sm font-semibold tracking-wide">
              Brand Resources
            </span>
          </span>
        </Badge>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Brand Guidelines
        </h1>

        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          Everything you need to represent Creator's World consistently.
          Download our logos, explore our color palette, and learn our design
          principles.
        </p>
      </section>

      {/* Content Sections */}
      <Wrapper className="space-y-24 px-6 pb-24">
        {/* Color Palette */}
        <section className="space-y-12">
          <AnimationContainer animation="fadeUp">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Color Palette
              </h2>
              <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
                Our carefully curated color palette ensures consistency across
                all platforms. Each color has a specific purpose and usage.
                Click on any color value to copy it to your clipboard.
              </p>
            </div>
          </AnimationContainer>

          <ColorPalette colors={brandColors} />
        </section>

        {/* Logos */}
        <section className="space-y-12 border-t border-border/50 pt-24">
          <AnimationContainer animation="fadeUp">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Logos & Assets
              </h2>
              <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
                Download our logos in various formats and sizes. Choose the
                version that works best for your use case. All logos are
                available in PNG and SVG formats for maximum flexibility.
              </p>
            </div>
          </AnimationContainer>

          <LogosShowcase logos={brandLogos} />
        </section>

        {/* Guidelines */}
        <section className="space-y-12 border-t border-border/50 pt-24">
          <AnimationContainer animation="fadeUp">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Brand Guidelines
              </h2>
              <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
                Follow these guidelines to maintain consistency and strengthen
                our brand. These principles guide our design decisions and help
                us deliver a cohesive experience.
              </p>
            </div>
          </AnimationContainer>

          <BrandGuidelines guidelines={brandGuidelines} />
        </section>

        {/* Logo Usage Rules */}
        <section className="space-y-12 border-t border-border/50 pt-24">
          <AnimationContainer animation="fadeUp">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Logo Usage Rules
              </h2>
              <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
                To maintain brand integrity, please follow these guidelines when
                using our logo.
              </p>
            </div>
          </AnimationContainer>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "✓ Do's",
                items: [
                  "Use the logo on both light and dark backgrounds",
                  "Maintain clear space around the logo",
                  "Use transparent version on complex backgrounds",
                  "Scale proportionally without distortion",
                  "Use official brand colors",
                ],
              },
              {
                title: "✗ Don'ts",
                items: [
                  "Rotate or skew the logo",
                  "Change the colors or proportions",
                  "Add effects like shadows or glows",
                  "Use low-resolution versions",
                  "Combine with competing logos",
                ],
              },
            ].map((section, index) => (
              <AnimationContainer
                key={section.title}
                animation={index === 0 ? "fadeLeft" : "fadeRight"}
              >
                <div className="space-y-4 rounded-xl border border-border/50 bg-background/60 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-lg font-semibold text-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimationContainer>
            ))}
          </div>
        </section>
      </Wrapper>

      {/* Footer CTA */}
      <section className="w-full border-t border-border/50 bg-background/50 py-20 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Questions About Our Brand?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Need clarification on how to use our brand? Our team is happy to
            help you get it right.
          </p>

          <Button className="mt-6">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
