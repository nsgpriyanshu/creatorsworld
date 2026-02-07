"use client";

import React from "react";
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
/**
 * Returns JSX directly.
 * No component references, no indexing, no TS errors.
 */
function renderFeatureIcon(index: number) {
  const commonClass = "mt-0.5 h-4 w-4 text-muted-foreground";

  switch (index % 5) {
    case 0:
      return <Settings className={commonClass} />;
    case 1:
      return <Zap className={commonClass} />;
    case 2:
      return <Headphones className={commonClass} />;
    case 3:
      return <Shield className={commonClass} />;
    default:
      return <ArrowRight className={commonClass} />;
  }
}

/* ------------------------- Component ------------------------- */

const Pricing = () => {
  return (
    <Wrapper className="relative w-full overflow-hidden py-28">
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="group flex items-center gap-2 border-border bg-background/70 px-4 py-1.5 transition-all duration-300 hover:border-[#f10a0a]"
          >
            <Tag className="h-4 w-4 text-[#f10a0a] transition-transform duration-300 group-hover:rotate-12" />
            Pricing
          </Badge>
        </AnimationContainer>

        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h2 className="mt-8 max-w-4xl text-balance text-4xl font-semibold md:text-5xl">
            Simple pricing for{" "}
            <span className="bg-linear-to-r from-foreground to-[#f10a0a] bg-clip-text text-transparent">
              every stage
            </span>
          </h2>
        </AnimationContainer>

        {/* Description */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-muted-foreground md:text-lg">
            Transparent plans designed to scale with your business — no hidden
            costs, no surprises.
          </p>
        </AnimationContainer>

        {/* Pricing Cards */}
        <div className="mt-20 grid w-full max-w-6xl gap-8 md:grid-cols-2">
          {PRICING_PLANS.map((plan, planIndex) => (
            <AnimationContainer
              key={plan.id}
              animation="fadeUp"
              delay={0.45 + planIndex * 0.15}
            >
              <div
                className={`relative flex h-full flex-col rounded-3xl border bg-background px-8 py-10 ${
                  plan.highlighted ? "border-primary" : "border-border"
                }`}
              >
                {/* Recommended */}
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

                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-4xl font-semibold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">
                      {plan.duration}
                    </span>
                  </div>
                </div>

                <div className="my-8 h-px bg-border" />

                {/* Features */}
                <ul className="flex-1 space-y-4 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={feature} className="flex items-start gap-3">
                      {renderFeatureIcon(idx)}
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-10">
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
