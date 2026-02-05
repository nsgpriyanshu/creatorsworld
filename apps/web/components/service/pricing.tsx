"use client";

import React from "react";
import Link from "next/link";
import { Tag, Check, Sparkles } from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

import { PRICING_PLANS } from "../../constants/pricing";

import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import { Card, CardContent } from "@repo/ui/components/ui/card";

const Pricing = () => {
  return (
    <Wrapper className="relative w-full overflow-hidden py-28">
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="group flex items-center gap-2 border-border bg-background/70 px-4 py-1.5 text-secondary-foreground transition-all duration-300 hover:border-[#f10a0a]"
          >
            <Tag className="h-4 w-4 text-[#f10a0a] transition-transform duration-300 group-hover:rotate-12" />
            Pricing
          </Badge>
        </AnimationContainer>

        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h2 className="mt-8 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            Simple pricing for{" "}
            <span className="bg-linear-to-r from-foreground to-[#f10a0a] bg-clip-text text-transparent">
              every stage
            </span>
          </h2>
        </AnimationContainer>

        {/* Description */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            Whether you’re just starting out or scaling a business, our pricing
            is transparent, flexible, and built around real value.
          </p>
        </AnimationContainer>

        {/* Cards */}
        <div className="mt-20 grid w-full max-w-5xl gap-8 md:grid-cols-2">
          {PRICING_PLANS.map((plan, index) => (
            <AnimationContainer
              key={plan.id}
              animation="scaleUp"
              delay={0.45 + index * 0.15}
            >
              <Card
                className={`relative h-full rounded-3xl border transition-all duration-300 ${
                  plan.highlighted
                    ? "border-[#f10a0a] shadow-lg shadow-[#f10a0a]/20"
                    : "border-border hover:shadow-md"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5" />
                      Enterprise
                    </Badge>
                  </div>
                )}

                <CardContent className="flex h-full flex-col p-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.description}
                    </p>

                    <div className="mt-6 flex items-end gap-2">
                      <span className="text-4xl font-semibold">
                        {plan.price}
                      </span>
                    </div>

                    <ul className="mt-8 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Check className="h-4 w-4 text-[#f10a0a]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        variant={plan.highlighted ? "default" : "outline"}
                        className="w-full"
                      >
                        {plan.highlighted ? "Contact Sales" : "Get Started"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Pricing;
