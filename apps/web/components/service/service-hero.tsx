"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Zap,
  Shield,
  Smartphone,
  Presentation,
  Tag,
  Cog,
} from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";

/* Floating Orbs */

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />

      <div className="absolute right-[20%] top-[30%] h-40 w-40 rounded-full bg-primary/10 blur-2xl animate-[bounce_4s_ease-in-out_infinite]" />

      <div className="absolute left-[10%] bottom-[20%] h-48 w-48 rounded-full bg-primary/10 blur-2xl animate-[pulse_7s_ease-in-out_infinite]" />

      <div className="absolute right-[15%] top-[15%] h-32 w-32 rounded-lg border border-border bg-muted/40 backdrop-blur-sm -rotate-45 animate-[spin_18s_linear_infinite]" />

      <div className="absolute left-[8%] top-[45%] h-24 w-24 rounded-xl border border-border bg-muted/40 backdrop-blur-sm animate-[float_6s_ease-in-out_infinite]" />
    </div>
  );
}

/* Feature Card */

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group flex items-start gap-4 p-4 rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-muted">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
        <Icon className="h-5 w-5 text-primary" />
      </div>

      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
}

/* Hero */

export default function ServiceHero() {
  return (
    <Wrapper className="relative overflow-hidden pt-24 pb-24 border-b border-border">
      {/* grid background */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
        bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),
        linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
        bg-[size:48px_48px] opacity-[0.05]"
      />

      <FloatingOrbs />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center min-h-[85vh]">
          {/* LEFT SIDE */}

          <div className="space-y-10">
            {/* Badge */}

            <AnimationContainer animation="fadeUp" delay={0.1}>
              <Badge
                variant="outline"
                className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
              >
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

                <span className="relative flex items-center gap-2">
                  <Cog className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />

                  <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Services
                  </span>
                </span>
              </Badge>
            </AnimationContainer>

            {/* Heading */}

            <AnimationContainer animation="fadeUp" delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="block animate-[fadeIn_0.8s_ease]">We Build</span>
                <span className="relative inline-block">
                  <span className="text-primary animate-[fadeIn_1.2s_ease]">
                    Digital
                  </span>
                  <span className="absolute -bottom-2 left-0 h-1 w-24 bg-primary/60 blur-sm animate-pulse" />
                </span>
              </h1>
            </AnimationContainer>

            {/* Description */}

            <AnimationContainer animation="fadeUp" delay={0.3}>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                From web design and development to branding, we craft digital
                solutions for modern businesses that demand excellence.
              </p>
            </AnimationContainer>

            {/* CTA */}

            <AnimationContainer animation="fadeUp" delay={0.4}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gap-2 px-8 py-6 rounded-full group transition-all duration-300 hover:scale-105"
                >
                  Get a Demo
                  <Presentation className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </AnimationContainer>

            {/* Stats */}

            <AnimationContainer animation="fadeUp" delay={0.5}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                {[
                  { number: "1+", label: "Projects" },
                  { number: "1+", label: "Clients" },
                  { number: "1+", label: "Years" },
                ].map(({ number, label }) => (
                  <div
                    key={label}
                    className="transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-3xl font-mono font-bold text-primary">
                      {number}
                    </div>

                    <p className="text-sm text-muted-foreground mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimationContainer>
          </div>

          {/* RIGHT SIDE */}

          <div className="relative space-y-8">
            {/* Visual */}

            <AnimationContainer animation="fadeRight" delay={0.35}>
              <div className="relative h-80 rounded-3xl border border-border bg-card backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-32 w-32 rounded-full border-2 border-primary/40 animate-pulse" />

                  <div
                    className="absolute h-48 w-48 rounded-full border border-border animate-spin"
                    style={{ animationDuration: "10s" }}
                  />

                  <div className="absolute h-64 w-64 rounded-full border border-border animate-[pulse_6s_ease-in-out_infinite]" />

                  <div className="relative z-20 h-4 w-4 rounded-full bg-primary animate-ping" />
                </div>
              </div>
            </AnimationContainer>

            {/* Features */}

            <AnimationContainer animation="fadeUp" delay={0.45}>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                    What We Do
                  </p>

                  <h3 className="text-xl font-bold text-foreground mt-2">
                    Comprehensive Digital Solutions
                  </h3>
                </div>

                <div className="space-y-3">
                  <FeatureCard
                    icon={Code2}
                    title="Web Development"
                    description="Modern, scalable applications"
                  />

                  <FeatureCard
                    icon={Zap}
                    title="Performance"
                    description="Lightning-fast load times"
                  />

                  <FeatureCard
                    icon={Shield}
                    title="Security"
                    description="Enterprise-grade protection"
                  />

                  <FeatureCard
                    icon={Smartphone}
                    title="Responsive Design"
                    description="Perfect on all devices"
                  />
                </div>
              </div>
            </AnimationContainer>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
