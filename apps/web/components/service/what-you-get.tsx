"use client";

import React from "react";
import {
  ArrowRight,
  CirclePlus,
  Braces,
  Share2,
  Blocks,
  ShieldCheck,
} from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiFramer,
  SiSupabase,
  SiReact,
} from "react-icons/si";
import type { IconType } from "react-icons";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { AnimatedList } from "@repo/ui/components/ui/animated-list";
import { cn } from "@repo/ui/lib/utils";
import { WHAT_YOU_GET } from "../../constants/what-you-get";
import { ICChip } from "./ic-chip";

type CircleProps = {
  className?: string;
  children?: React.ReactNode;
};

type ConnectorProps = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  active: boolean;
};

type StackPoint = Readonly<{
  x: number;
  y: number;
}>;

type PinId = 0 | 2 | 5 | 6 | 8 | 9 | 11;

type StackItem = Readonly<{
  label: string;
  icon: IconType;
  pin: PinId;
  mobile: StackPoint;
  desktop: StackPoint;
}>;

const STACK_ITEMS = [
  {
    label: "Next.js",
    icon: SiNextdotjs,
    pin: 0,
    mobile: { x: 20, y: 20 },
    desktop: { x: 12, y: 14 },
  },
  {
    label: "React",
    icon: SiReact,
    pin: 2,
    mobile: { x: 38, y: 12 },
    desktop: { x: 30, y: 4 },
  },
  {
    label: "Vercel",
    icon: SiVercel,
    pin: 5,
    mobile: { x: 80, y: 20 },
    desktop: { x: 88, y: 14 },
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
    pin: 6,
    mobile: { x: 20, y: 80 },
    desktop: { x: 12, y: 86 },
  },
  {
    label: "Tailwind CSS",
    icon: SiTailwindcss,
    pin: 8,
    mobile: { x: 38, y: 88 },
    desktop: { x: 32, y: 96 },
  },
  {
    label: "Framer",
    icon: SiFramer,
    pin: 9,
    mobile: { x: 62, y: 88 },
    desktop: { x: 68, y: 96 },
  },
  {
    label: "Supabase",
    icon: SiSupabase,
    pin: 11,
    mobile: { x: 80, y: 80 },
    desktop: { x: 88, y: 86 },
  },
] as const satisfies readonly StackItem[];

const PIN_COORDINATES: Record<PinId, StackPoint> = {
  0: { x: 29.17, y: 24 },
  2: { x: 45.83, y: 24 },
  5: { x: 70.83, y: 24 },
  6: { x: 29.17, y: 76 },
  8: { x: 45.83, y: 76 },
  9: { x: 54.17, y: 76 },
  11: { x: 70.83, y: 76 },
};

const Circle = ({ className, children }: CircleProps) => (
  <div
    className={cn(
      "relative z-20 flex h-10 w-10 items-center justify-center rounded-full",
      "md:h-10 md:w-10 h-8 w-8",
      "border border-dashed border-border",
      "bg-background/70",
      "transition-all duration-300 ease-out",
      "hover:z-30 hover:scale-105",
      "hover:bg-muted/40 hover:border-foreground/40",
      className,
    )}
  >
    <div className="relative z-30 text-foreground">{children}</div>
  </div>
);

const Connector = ({ startX, startY, endX, endY, active }: ConnectorProps) => {
  const strokeColor = active
    ? "rgb(59 130 246 / 0.9)"
    : "rgb(100 116 139 / 0.45)";
  const strokeThickness = active ? 2 : 1;
  const dashLength = active ? 7 : 5;
  const gapLength = active ? 5 : 4;
  const startAnchorY = startY < endY ? startY + 5.4 : startY - 5.4;
  const endAnchorY = startY < endY ? endY - 0.2 : endY + 0.2;
  const bendY = startY < endY ? startAnchorY + 10 : startAnchorY - 10;
  const top = Math.min(bendY, endAnchorY);
  const height = Math.abs(endAnchorY - bendY);
  const horizontalStart = Math.min(startX, endX);
  const horizontalWidth = Math.abs(endX - startX);
  const pulseStart = startX < endX ? startX : endX;
  const pulseWidth = Math.abs(endX - startX);
  const dashHorizontal = `repeating-linear-gradient(to right, ${strokeColor} 0 ${dashLength}px, transparent ${dashLength}px ${dashLength + gapLength}px)`;
  const dashVertical = `repeating-linear-gradient(to bottom, ${strokeColor} 0 ${dashLength}px, transparent ${dashLength}px ${dashLength + gapLength}px)`;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
      <div
        className="absolute rounded-full"
        style={{
          left: `calc(${startX}% - ${strokeThickness / 2}px)`,
          top: `${Math.min(startAnchorY, bendY)}%`,
          height: `${Math.abs(bendY - startAnchorY)}%`,
          width: `${strokeThickness}px`,
          backgroundImage: dashVertical,
          backgroundRepeat: "repeat-y",
          backgroundSize: `${strokeThickness}px ${dashLength + gapLength}px`,
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          left: `${horizontalStart}%`,
          top: `calc(${bendY}% - ${strokeThickness / 2}px)`,
          width: `${horizontalWidth}%`,
          height: `${strokeThickness}px`,
          backgroundImage: dashHorizontal,
          backgroundRepeat: "repeat-x",
          backgroundSize: `${dashLength + gapLength}px ${strokeThickness}px`,
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          left: `calc(${endX}% - ${strokeThickness / 2}px)`,
          top: `${top}%`,
          height: `${height}%`,
          width: `${strokeThickness}px`,
          backgroundImage: dashVertical,
          backgroundRepeat: "repeat-y",
          backgroundSize: `${strokeThickness}px ${dashLength + gapLength}px`,
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          left: `calc(${endX}% - 2px)`,
          top: `calc(${endAnchorY}% - 2px)`,
          width: "4px",
          height: "4px",
          backgroundColor: active
            ? "rgb(147 197 253 / 0.95)"
            : "rgb(148 163 184 / 0.7)",
          boxShadow: active ? "0 0 10px rgba(147,197,253,0.65)" : "none",
        }}
      />
      <div
        className={cn(
          "absolute rounded-full transition-opacity duration-300",
          active ? "opacity-100" : "opacity-0",
        )}
        style={{
          left: `${pulseStart}%`,
          top: `${bendY}%`,
          width: `${pulseWidth}%`,
          height: "0",
        }}
      >
        <span
          className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.9)]"
          style={{
            animation: "architecture-flow 1.8s linear infinite",
          }}
        />
      </div>
    </div>
  );
};

const WhatYouGet = () => {
  const [activeStackPin, setActiveStackPin] = React.useState<
    number | undefined
  >(2);
  const design =
    WHAT_YOU_GET.find((item) => item.title === "Design") ?? WHAT_YOU_GET[0];
  const development =
    WHAT_YOU_GET.find((item) => item.title === "Development") ??
    WHAT_YOU_GET[1];
  const performance =
    WHAT_YOU_GET.find((item) => item.title === "Performance") ??
    WHAT_YOU_GET[2];
  const management =
    WHAT_YOU_GET.find((item) => item.title === "Management") ?? WHAT_YOU_GET[3];

  const renderCard = (item: (typeof WHAT_YOU_GET)[number]) => {
    const Icon = item.icon;
    const isDevelopment = item.title === "Development";
    const isManagement = item.title === "Management";

    return (
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
        </div>

        <p className="mt-3 text-xs md:text-sm text-muted-foreground">
          {item.description}
        </p>

        <div className="mt-4">
          {isDevelopment ? (
            <AnimatedList className="items-start">
              {[
                {
                  label: "Performance first",
                  description: "Optimized for Core Web Vitals and fast TTI.",
                  icon: ArrowRight,
                  color: "text-blue-600",
                },
                {
                  label: "Clean codebase",
                  description: "Readable, maintainable, and easy to scale.",
                  icon: Braces,
                  color: "text-emerald-600",
                },
                {
                  label: "Scalable APIs",
                  description: "Built for growth and high-traffic workloads.",
                  icon: Share2,
                  color: "text-violet-600",
                },
                {
                  label: "Modular architecture",
                  description: "Composable building blocks across the app.",
                  icon: Blocks,
                  color: "text-amber-600",
                },
                {
                  label: "Security best-practices",
                  description: "Hardened defaults and secure workflows.",
                  icon: ShieldCheck,
                  color: "text-rose-600",
                },
              ].map(({ label, description, icon: Icon, color }) => (
                <div
                  key={label}
                  className="w-full rounded-md border border-dashed border-border bg-muted/30 px-4 py-3"
                >
                  <div className="flex items-start gap-2">
                    <Icon className={`mt-0.5 h-4 w-4 ${color}`} />
                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        {label}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </AnimatedList>
          ) : item.title === "Performance" ? (
            <div className="rounded-xl border border-dashed border-border bg-muted/30 px-4 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    Lighthouse Overview
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    SEO & performance signals
                  </p>
                </div>
                <span className="rounded-full border border-dashed border-border px-2 py-1 text-[10px] text-muted-foreground">
                  Mobile
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Performance",
                    score: 92,
                    color: "text-emerald-600",
                  },
                  { label: "Accessibility", score: 96, color: "text-blue-600" },
                  {
                    label: "Best Practices",
                    score: 95,
                    color: "text-violet-600",
                  },
                  { label: "SEO", score: 98, color: "text-amber-600" },
                ].map((itemScore) => (
                  <div
                    key={itemScore.label}
                    className="rounded-lg border border-dashed border-border bg-background/70 px-3 py-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">
                        {itemScore.label}
                      </span>
                      <span
                        className={`text-xs font-semibold ${itemScore.color}`}
                      >
                        {itemScore.score}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-border">
                      <div
                        className={`h-1.5 rounded-full ${itemScore.color}`}
                        style={{ width: `${itemScore.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-[10px] text-muted-foreground">
                Scores are representative and will vary by project scope.
              </p>
            </div>
          ) : item.title === "Design" ? (
            <div className="rounded-xl border border-dashed border-border bg-muted/30 p-3">
              <div className="flex items-center justify-between rounded-lg border border-dashed border-border bg-background/70 px-2 py-1">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="h-2 w-2 rounded-full bg-foreground" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                </div>
                <span className="text-[9px] text-muted-foreground">
                  design-preview
                </span>
              </div>
              <div className="mt-2 aspect-[16/10] rounded-lg border border-dashed border-border bg-muted/40 p-3">
                {/* Hero bar */}
                <div className="flex items-center justify-between">
                  <div className="h-2 w-28 rounded-full bg-blue-500/50" />
                  <div className="h-2 w-12 rounded-full bg-emerald-500/40" />
                </div>
                <div className="mt-2 h-1.5 w-44 rounded-full bg-muted-foreground/40" />

                {/* Grid row */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-12 rounded-md bg-indigo-500/25" />
                  <div className="h-12 rounded-md bg-rose-500/25" />
                  <div className="h-12 rounded-md bg-amber-500/25" />
                </div>

                {/* CTA row */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-6 w-16 rounded-full bg-blue-500/40" />
                  <div className="h-6 w-20 rounded-full bg-emerald-500/35" />
                </div>

                {/* Content blocks */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="h-10 rounded-md bg-muted-foreground/20" />
                  <div className="h-10 rounded-md bg-muted-foreground/25" />
                </div>

                {/* Footer line */}
                <div className="mt-3 h-1.5 w-24 rounded-full bg-muted-foreground/30" />
              </div>
            </div>
          ) : item.title === "Management" ? (
            <div className="rounded-xl border border-dashed border-border bg-muted/30 p-3">
              <div className="flex items-center justify-between rounded-lg border border-dashed border-border bg-background/70 px-2 py-1">
                <span className="text-[9px] text-muted-foreground">
                  Management Console
                </span>
                <span className="rounded-full border border-dashed border-border px-2 py-0.5 text-[9px] text-emerald-600">
                  Online
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-md border border-dashed border-border bg-background/70 p-2">
                  <div className="text-[10px] text-muted-foreground">
                    Uptime
                  </div>
                  <div className="mt-1 h-2 w-14 rounded-full bg-emerald-500/40" />
                </div>
                <div className="rounded-md border border-dashed border-border bg-background/70 p-2">
                  <div className="text-[10px] text-muted-foreground">
                    Incidents
                  </div>
                  <div className="mt-1 h-2 w-10 rounded-full bg-amber-500/40" />
                </div>
              </div>
              <div className="mt-3 h-16 rounded-md border border-dashed border-border bg-muted/40" />
              <div className="mt-3 flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-blue-500/30" />
                <div className="h-2 w-24 rounded-full bg-muted-foreground/40" />
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-muted/30 px-4 py-6 text-center text-xs text-muted-foreground">
              Image placeholder
            </div>
          )}
        </div>

        <ul className="mt-4 hidden space-y-1.5 text-xs md:block md:text-sm">
          {item.points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
              <span className="text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>

        <details className="mt-4 md:hidden">
          <summary className="cursor-pointer text-xs font-medium text-muted-foreground">
            View deliverables
          </summary>
          <ul className="mt-2 space-y-1.5 text-xs">
            {item.points.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </details>

        {isManagement && (
          <div className="mt-4">
            <Button size="lg" className={cn("gap-2 rounded-md px-6")}>
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <Wrapper className="relative w-full overflow-x-hidden pt-24 pb-12 md:pt-24 md:pb-16">
      {/* Grid Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12]"
      />

      <section className="mx-auto w-full max-w-6xl min-w-0 overflow-x-hidden rounded-md border border-border">
        {/* Header */}
        <AnimationContainer animation="fadeDown">
          <div className="flex justify-center border-b border-dashed border-border p-4">
            <Badge
              variant="outline"
              className="group relative overflow-hidden border-border bg-background/70 px-3 py-1 md:px-4 md:py-1.5 backdrop-blur-md text-xs md:text-sm"
            >
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              <span className="relative flex items-center gap-2">
                <CirclePlus className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  What You Get
                </span>
              </span>
            </Badge>
          </div>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.15}>
          <div className="border-b border-dashed border-border px-6 py-10 text-center">
            <h2 className="mx-auto max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Everything you need to{" "}
              <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                launch & scale
              </span>
            </h2>
          </div>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <div className="border-b border-dashed border-border px-6 py-8 text-center">
            <p className="mx-auto max-w-3xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
              From design to deployment and beyond, we cover every step so you
              can focus on growing your business.
            </p>
          </div>
        </AnimationContainer>

        {/* Structured Layout */}
        <section className="border-b border-dashed border-border">
          <div className="grid border-t border-dashed border-border md:grid-cols-2">
            <div>{renderCard(design)}</div>
            <div className="md:border-l md:border-dashed md:border-border">
              {renderCard(development)}
            </div>
          </div>

          <div className="grid border-t border-dashed border-border md:grid-cols-2">
            <div>{renderCard(performance)}</div>
            <div className="md:border-l md:border-dashed md:border-border">
              {renderCard(management)}
            </div>
          </div>

          <div className="grid border-t border-dashed border-border md:grid-cols-2">
            <div className="p-6 md:p-8">
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Built on a{" "}
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  modern & scalable web stack
                </span>
              </h2>
            </div>
            <div className="hidden md:block md:border-l md:border-dashed md:border-border" />
          </div>

          <div className="grid min-w-0 overflow-hidden border-t border-dashed border-border md:grid-cols-[0.8fr_1.2fr]">
            <div className="min-w-0 p-6 md:p-8">
              <p className="max-w-sm text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
                A refined ecosystem delivering performance, elegant UI, smooth
                animation, strict type safety, and seamless deployment.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {STACK_ITEMS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.label}
                      type="button"
                      onMouseEnter={() => setActiveStackPin(item.pin)}
                      onFocus={() => setActiveStackPin(item.pin)}
                      onMouseLeave={() => setActiveStackPin(2)}
                      onBlur={() => setActiveStackPin(2)}
                      className="rounded-full border border-dashed border-border bg-background/70 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="min-w-0 overflow-hidden p-4 sm:p-6 md:border-l md:border-dashed md:border-border md:p-8">
              <div className="relative mx-auto aspect-[1.05/1] w-[min(100%,18rem)] max-w-full overflow-hidden rounded-xl sm:aspect-[4/3] sm:w-[min(100%,22rem)] md:w-full">
                <div className="absolute inset-0 md:hidden">
                  {STACK_ITEMS.map((item) => {
                    const pin = PIN_COORDINATES[item.pin];
                    const isActive = activeStackPin === item.pin;

                    return (
                      <Connector
                        key={`${item.label}-path-mobile`}
                        startX={item.mobile.x}
                        startY={item.mobile.y}
                        endX={pin.x}
                        endY={pin.y}
                        active={isActive}
                      />
                    );
                  })}

                  {STACK_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeStackPin === item.pin;

                    return (
                      <button
                        key={`${item.label}-mobile`}
                        type="button"
                        className="absolute z-20"
                        style={{
                          left: `${item.mobile.x}%`,
                          top: `${item.mobile.y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        onMouseEnter={() => setActiveStackPin(item.pin)}
                        onFocus={() => setActiveStackPin(item.pin)}
                        onMouseLeave={() => setActiveStackPin(2)}
                        onBlur={() => setActiveStackPin(2)}
                        aria-label={item.label}
                      >
                        <Circle
                          className={cn(
                            "h-8 w-8 shadow-[0_8px_30px_rgba(0,0,0,0.14)]",
                            isActive &&
                              "border-foreground/40 bg-muted/40 shadow-[0_10px_40px_rgba(59,130,246,0.12)]",
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-4 w-4 text-muted-foreground",
                              isActive && "text-foreground",
                            )}
                          />
                        </Circle>
                      </button>
                    );
                  })}
                </div>

                <div className="absolute inset-0 hidden md:block">
                  {STACK_ITEMS.map((item) => {
                    const pin = PIN_COORDINATES[item.pin];
                    const isActive = activeStackPin === item.pin;

                    return (
                      <Connector
                        key={`${item.label}-path-desktop`}
                        startX={item.desktop.x}
                        startY={item.desktop.y}
                        endX={pin.x}
                        endY={pin.y}
                        active={isActive}
                      />
                    );
                  })}

                  {STACK_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeStackPin === item.pin;

                    return (
                      <button
                        key={`${item.label}-desktop`}
                        type="button"
                        className="absolute z-20"
                        style={{
                          left: `${item.desktop.x}%`,
                          top: `${item.desktop.y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        onMouseEnter={() => setActiveStackPin(item.pin)}
                        onFocus={() => setActiveStackPin(item.pin)}
                        onMouseLeave={() => setActiveStackPin(2)}
                        onBlur={() => setActiveStackPin(2)}
                        aria-label={item.label}
                      >
                        <Circle
                          className={cn(
                            "h-10 w-10 shadow-[0_8px_30px_rgba(0,0,0,0.14)]",
                            isActive &&
                              "border-foreground/40 bg-muted/40 shadow-[0_10px_40px_rgba(59,130,246,0.12)]",
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-4 w-4 text-muted-foreground",
                              isActive && "text-foreground",
                            )}
                          />
                        </Circle>
                      </button>
                    );
                  })}
                </div>

                <div className="absolute inset-0">
                  <ICChip
                    className="h-full w-full"
                    activePin={activeStackPin}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          @keyframes architecture-flow {
            from {
              left: 0%;
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            85% {
              opacity: 1;
            }
            to {
              left: calc(100% - 0.5rem);
              opacity: 0;
            }
          }
        `}</style>
      </section>
    </Wrapper>
  );
};

export default WhatYouGet;
