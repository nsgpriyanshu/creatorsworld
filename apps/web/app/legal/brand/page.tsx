"use client";

import type { JSX } from "react";
import { CheckCircle2, Palette, XCircle } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import Wrapper from "../../../components/global/wrapper";
import AnimationContainer from "../../../components/global/animation-container";
import ColorPalette from "../../../components/legal/color-palette";
import LogosShowcase from "../../../components/legal/logos-showcase";
import BrandGuidelines from "../../../components/legal/brand-guidelines";
import LegalHero from "../../../components/legal/legal-hero";
import {
  brandColors,
  brandLogos,
  brandGuidelines,
} from "../../../constants/legal";

export default function BrandPage(): JSX.Element {
  return (
    <div className="relative flex w-full flex-col">
      <LegalHero
        icon={<Palette />}
        badge="Brand Resources"
        title="Brand Guidelines"
        description="Everything you need to represent Creator's World consistently. Download our logos, explore our color palette, and learn our design principles."
      />

      {/* Content Sections */}
      <Wrapper className="space-y-20 pb-24">
        {/* Color Palette */}
        <section className="space-y-8">
          <AnimationContainer animation="fadeUp">
            <div className="space-y-3">
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
        <section className="space-y-8 border-t border-dashed border-border pt-16">
          <AnimationContainer animation="fadeUp">
            <div className="space-y-3">
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
        <section className="space-y-8 border-t border-dashed border-border pt-16">
          <AnimationContainer animation="fadeUp">
            <div className="space-y-3">
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
        <section className="space-y-8 border-t border-dashed border-border pt-16">
          <AnimationContainer animation="fadeUp">
            <div className="space-y-3">
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
                title: "Do's",
                items: [
                  "Use the logo on both light and dark backgrounds",
                  "Maintain clear space around the logo",
                  "Use transparent version on complex backgrounds",
                  "Scale proportionally without distortion",
                  "Use official brand colors",
                ],
              },
              {
                title: "Don'ts",
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
                <div className="space-y-4 rounded-xl border border-dashed border-border bg-background/70 p-6 backdrop-blur transition-all duration-300 hover:bg-muted/30">
                  <h3 className="text-lg font-semibold text-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        {section.title.startsWith("Do's") ? (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                        ) : (
                          <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                        )}
                        <span>{item}</span>
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
      <section className="w-full border-t border-dashed border-border bg-background/70 py-16 backdrop-blur">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-0">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Questions About Our Brand?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Need clarification on how to use our brand? Our team is happy to
            help you get it right.
          </p>

          <Button variant="default" size="lg" className="mt-6 gap-2 rounded-md">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
