import { Palette } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import LegalHero from "../../../components/legal/legal-hero";
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

export default function BrandPage() {
  return (
    <div className="relative flex w-full flex-col">
      {/* Hero */}
      <section className="w-full">
        <LegalHero
          icon={<Palette className="h-4 w-4 text-[#f10a0a]" />}
          badge="Brand Resources"
          title="Brand Guidelines"
          description="Everything you need to represent Creator's World consistently. Download our logos, explore our color palette, and learn our design principles."
        />
      </section>

      {/* Color Palette Section */}
      <Wrapper className="space-y-24 py-24">
        {/* Colors */}
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

        {/* Logo Usage Section */}
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
                key={index}
                animation={index === 0 ? "fadeLeft" : "fadeRight"}
              >
                <div className="space-y-4 rounded-lg border border-border/50 bg-background/50 p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-sm text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimationContainer>
            ))}
          </div>
        </section>

        {/* Download Kit Section */}
        <section className="border-t border-border/50 pt-24">
          <div className="space-y-8 rounded-lg border border-border/50 bg-background/50 p-8 text-center backdrop-blur-sm md:p-12">
            <AnimationContainer animation="fadeUp">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                  Need Everything at Once?
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Download our complete brand kit including all logos, color
                  swatches, and guidelines for easy access offline.
                </p>
              </div>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.15}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button>
                  <a href="/assets/brand">Browse All Assets</a>
                </Button>
                <Button variant="outline">
                  <a href="/contact">Request Custom Assets</a>
                </Button>
              </div>
            </AnimationContainer>
          </div>
        </section>
      </Wrapper>

      {/* Footer CTA */}
      <section className="w-full border-t border-border/50 bg-background/50 py-16 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-20">
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
