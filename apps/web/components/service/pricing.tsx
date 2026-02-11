"use client";

import * as React from "react";
import Link from "next/link";
import {
  Tag,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Settings,
  Headphones,
} from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { PRICING_PLANS } from "../../constants/pricing";

import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";

/* ------------------------- Icon Resolver ------------------------- */
function renderFeatureIcon(index: number) {
  const base =
    "mt-0.5 h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground";

  switch (index % 5) {
    case 0:
      return <Settings className={base} />;
    case 1:
      return <Zap className={base} />;
    case 2:
      return <Headphones className={base} />;
    case 3:
      return <Shield className={base} />;
    default:
      return <ArrowRight className={base} />;
  }
}

/* ------------------------- Component ------------------------- */

const Pricing = () => {
  return (
    <Wrapper className="relative w-full overflow-hidden py-28">
      {/* Grid Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-size-[56px_56px] opacity-[0.12]"
      />

      {/* Ambient Glow */}
      {/* <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-15%] -z-10 h-120 w-120 -translate-x-1/2 rounded-full bg-accent/25 blur-[140px]"
      /> */}

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
            <span className="relative flex items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
              <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Pricing
              </span>
            </span>
          </Badge>
        </AnimationContainer>

        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h2 className="mt-8 max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Tailored solutions for{" "}
            <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              every business stage
            </span>
          </h2>
        </AnimationContainer>

        {/* Description */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-muted-foreground md:text-lg">
            We don’t sell fixed packages. We provide structured solutions —
            clearly scoped, transparently defined, and built for long-term
            growth.
          </p>
        </AnimationContainer>

        {/* Pricing Cards */}
        <div className="mt-20 grid w-full max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, planIndex) => (
            <AnimationContainer
              key={plan.id}
              animation="fadeUp"
              delay={0.45 + planIndex * 0.15}
            >
              <div
                className={`group relative flex h-full flex-col rounded-3xl border px-8 py-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                  plan.highlighted
                    ? "border-accent bg-accent/10"
                    : "border-border bg-background"
                }`}
              >
                {/* Recommended Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-6">
                    <Badge className="flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5" />
                      Recommended
                    </Badge>
                  </div>
                )}

                {/* Header */}
                <div>
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>

                  <div className="mt-6">
                    <span className="text-3xl font-semibold">{plan.price}</span>
                  </div>
                </div>

                {/* Tiers (if exist) */}
                {"tiers" in plan && plan.tiers && (
                  <div className="mt-6 space-y-3 rounded-xl border border-border bg-muted/30 p-4 text-left text-sm">
                    {plan.tiers.map((tier) => (
                      <div key={tier.id}>
                        <p className="font-medium">{tier.name}</p>
                        <p className="text-muted-foreground text-xs">
                          {tier.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="my-8 h-px bg-border" />

                {/* Features */}
                <ul className="flex-1 space-y-4 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={feature} className="group flex items-start gap-3">
                      {renderFeatureIcon(idx)}
                      <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Notes */}
                {"notes" in plan && plan.notes && (
                  <div className="mt-6 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                    {plan.notes.map((note) => (
                      <p key={note}>• {note}</p>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="mt-8">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant={plan.highlighted ? "default" : "outline"}
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Pricing;
