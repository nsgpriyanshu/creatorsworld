"use client";

import * as React from "react";
import Link from "next/link";
import {
  Tag,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  PlusCircle,
  Users,
  Info,
  Wallet,
  Headset,
  Presentation,
  Rocket,
} from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { PRICING_PLANS, PRICING_META } from "../../constants/pricing";

import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";

const sectionTitleClass =
  "flex items-center gap-2 text-sm font-semibold text-foreground";

const planButtonConfig: Record<
  (typeof PRICING_PLANS)[number]["id"],
  {
    label: string;
    variant?: "default" | "outline" | "secondary";
    className: string;
  }
> = {
  base: {
    label: "Get Started",
    variant: "default",
    className: "gap-2 rounded-md px-8",
  },
  pro: {
    label: "Upgrade Now",
    variant: "secondary",
    className: "gap-2 rounded-md px-8",
  },
  "pro-max": {
    label: "Get Demo",
    variant: "default",
    className: "gap-2 rounded-md px-8 bg-blue-600 hover:bg-blue-700",
  },
};

function SectionTitle({
  icon,
  label,
  labelClassName,
}: {
  icon: React.ReactNode;
  label: string;
  labelClassName?: string;
}) {
  return (
    <div className={sectionTitleClass}>
      {icon}
      <span className={labelClassName}>{label}</span>
    </div>
  );
}

const Pricing = () => {
  return (
    <Wrapper className="relative w-full overflow-hidden pt-24 pb-12 md:pt-24 md:pb-16">
      {/* Grid Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12]"
      />

      <AnimationContainer animation="fadeUp" className="w-full">
        <div className="mx-auto max-w-6xl rounded-md border border-border">
          {/* Badge */}
          <AnimationContainer animation="fadeDown">
            <div className="flex justify-center border-b border-dashed border-border p-4">
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
            </div>
          </AnimationContainer>

          {/* Heading */}
          <AnimationContainer animation="fadeUp" delay={0.15}>
            <div className="border-b border-dashed border-border px-6 py-10 text-center">
              <h2 className="mx-auto max-w-4xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Tailored solutions for{" "}
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  every business stage
                </span>
              </h2>
            </div>
          </AnimationContainer>

          {/* Description */}
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <div className="border-b border-dashed border-border px-6 py-8 text-center">
              <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
                We don't sell fixed packages. We provide structured solutions
                built for clarity, scope, and long-term growth.
              </p>
            </div>
          </AnimationContainer>

          {/* Plans */}
          <div className="border-b border-dashed border-border">
            {PRICING_PLANS.map((plan, planIndex) => (
              <AnimationContainer
                key={plan.id}
                animation="fadeUp"
                delay={0.45 + planIndex * 0.15}
              >
                <div className="border-t border-dashed border-border px-6 py-8">
                  <div className="grid gap-8 md:grid-cols-[1.1fr_1.9fr] md:gap-0">
                    {/* Left summary */}
                    <div className="space-y-4 md:pr-8">
                      <div className="flex flex-wrap items-center gap-2 ">
                        <h3 className="text-2xl font-semibold">{plan.name}</h3>
                        {plan.highlighted && (
                          <Badge
                            variant="outline"
                            className="group relative overflow-hidden border-border bg-background/70 px-3 py-1"
                          >
                            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
                            <span className="relative flex items-center gap-1.5">
                              <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />
                              Recommended
                            </span>
                          </Badge>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Wallet className="h-4 w-4" />
                        <span>{plan.payment}</span>
                      </div>

                      <div className="border-t border-dashed border-border pt-4">
                        <span className="text-2xl md:text-3xl font-semibold">
                          {plan.price}
                        </span>
                      </div>

                      <div className="pt-2">
                        <Link href="/contact">
                          <Button
                            size="lg"
                            variant={planButtonConfig[plan.id]?.variant}
                            className={planButtonConfig[plan.id]?.className}
                          >
                            {planButtonConfig[plan.id]?.label ?? "Get Started"}
                            {plan.id === "pro" ? (
                              <Rocket className="h-4 w-4" />
                            ) : plan.id === "pro-max" ? (
                              <Presentation className="h-4 w-4" />
                            ) : (
                              <ArrowRight className="h-4 w-4" />
                            )}
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Right details */}
                    <div className="md:border-l md:border-dashed md:border-border md:pl-8">
                      <div className="grid gap-0">
                        <div className="grid gap-0 border-t border-dashed border-border md:grid-cols-2">
                          <div
                            className={`space-y-3 py-4 ${
                              "limitations" in plan &&
                              plan.limitations &&
                              plan.limitations.length > 0
                                ? "md:border-r md:border-dashed md:border-border md:pr-6"
                                : "md:col-span-2"
                            }`}
                          >
                            <SectionTitle
                              icon={
                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                              }
                              label="Features"
                              labelClassName="text-blue-600"
                            />
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {plan.features.map((feature) => (
                                <li key={feature}>- {feature}</li>
                              ))}
                            </ul>
                          </div>

                          {"limitations" in plan &&
                            plan.limitations &&
                            plan.limitations.length > 0 && (
                              <div className="space-y-3 py-4 md:pl-6">
                                <SectionTitle
                                  icon={
                                    <AlertTriangle className="h-4 w-4 text-red-600" />
                                  }
                                  label="Limitations"
                                  labelClassName="text-red-600"
                                />
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  {plan.limitations.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </div>

                        {(plan.optionalAddons?.length ||
                          plan.bestFor?.length) && (
                          <div className="grid gap-0 border-t border-dashed border-border md:grid-cols-2">
                            {plan.optionalAddons &&
                              plan.optionalAddons.length > 0 && (
                                <div
                                  className={`space-y-3 py-4 ${
                                    plan.bestFor && plan.bestFor.length > 0
                                      ? "md:border-r md:border-dashed md:border-border md:pr-6"
                                      : "md:col-span-2"
                                  }`}
                                >
                                  <SectionTitle
                                    icon={
                                      <PlusCircle className="h-4 w-4 text-green-600" />
                                    }
                                    label="Optional Add-ons"
                                    labelClassName="text-green-600"
                                  />
                                  <ul className="space-y-2 text-sm text-muted-foreground">
                                    {plan.optionalAddons.map((item) => (
                                      <li key={item}>- {item}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                            {plan.bestFor && plan.bestFor.length > 0 && (
                              <div className="space-y-3 py-4 md:pl-6">
                                <SectionTitle
                                  icon={
                                    <Users className="h-4 w-4 text-pink-600" />
                                  }
                                  label="Best For"
                                  labelClassName="text-pink-600"
                                />
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  {plan.bestFor.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}

                        {plan.notes && plan.notes.length > 0 && (
                          <div className="space-y-3 border-t border-dashed border-border py-4">
                            <SectionTitle
                              icon={<Info className="h-4 w-4" />}
                              label="Notes"
                            />
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {plan.notes.map((note) => (
                                <li key={note}>- {note}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationContainer>
            ))}
          </div>

          {/* Best option */}
          <AnimationContainer animation="fadeUp" delay={0.9}>
            <div className="border-t border-dashed border-border px-6 py-8 text-center">
              <div className="mx-auto max-w-3xl space-y-3">
                <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-muted-foreground" />
                  Best option for most teams
                </div>
                <p className="text-sm text-muted-foreground">
                  We recommend the Pro plan for the best balance of performance,
                  flexibility, and long-term scalability.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="gap-2 rounded-md px-8 bg-green-600 hover:bg-green-700"
                  >
                    Talk to Us
                    <Headset className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimationContainer>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default Pricing;
