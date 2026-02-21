"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Cog,
  Presentation,
  Code2,
  Layers,
  ShieldCheck,
  Sparkles,
  Database,
  GitBranch,
  Table2,
} from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import { Skeleton } from "@repo/ui/components/ui/skeleton";

/* ─────────────────────────────────────────────────────────── */
/* Small floating accent dot                                   */
/* ─────────────────────────────────────────────────────────── */
const Dot = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <span
    aria-hidden
    className={`absolute h-1.5 w-1.5 rounded-full bg-primary/40 ${className ?? ""}`}
    style={style}
  />
);

/* ─────────────────────────────────────────────────────────── */
/* Eco card — left side text cards                             */
/* ─────────────────────────────────────────────────────────── */
const EcoCard = ({
  icon: Icon,
  label,
  sub,
  className,
}: {
  icon: React.ElementType;
  label: string;
  sub: string;
  className?: string;
}) => (
  <div
    className={`group absolute overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#f10a0a]/30 ${className ?? ""}`}
  >
    {/* Inner gradient shine */}
    <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-[#f10a0a]/8 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
    {/* Radial glow */}
    <div className="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-[#f10a0a]/15 blur-2xl opacity-50 transition-all duration-300 group-hover:opacity-90" />

    <div className="relative z-10 flex items-center gap-3 px-4 py-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#f10a0a]/20 bg-[#f10a0a]/10 transition-colors duration-300 group-hover:bg-[#f10a0a]/20">
        <Icon className="h-4 w-4 text-[#f10a0a]" />
      </span>
      <div>
        <p className="text-sm font-medium leading-none text-foreground">
          {label}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────── */
/* Eco icon button — right side icon tiles                     */
/* ─────────────────────────────────────────────────────────── */
const EcoIcon = ({
  icon: Icon,
  label,
  className,
}: {
  icon: React.ElementType;
  label: string;
  className?: string;
}) => (
  <div
    className={`group absolute flex flex-col items-center gap-1.5 ${className ?? ""}`}
  >
    <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-[#f10a0a]/25 bg-[#f10a0a]/10 shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#f10a0a]/18 hover:border-[#f10a0a]/45">
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-[#f10a0a]/15 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
      <Icon className="relative z-10 h-5 w-5 text-[#f10a0a]" />
    </div>
    <span className="text-[10px] font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
      {label}
    </span>
  </div>
);

/* ─────────────────────────────────────────────────────────── */
/* Main Component                                              */
/* ─────────────────────────────────────────────────────────── */
const ServiceHero: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                SKELETON                                    */
  /* -------------------------------------------------------------------------- */
  if (isLoading) {
    return (
      <Wrapper className="relative overflow-hidden pt-28 pb-24">
        <div className="flex flex-col items-center text-center">
          <Skeleton className="h-7 w-56 rounded-full" />
          <div className="mt-8 space-y-3">
            <Skeleton className="h-12 w-[320px] md:w-130" />
            <Skeleton className="h-12 w-65 md:w-105" />
          </div>
          <div className="mt-6 space-y-2">
            <Skeleton className="h-4 w-[320px] md:w-130" />
            <Skeleton className="h-4 w-65 md:w-105" />
          </div>
          <Skeleton className="mt-10 h-14 w-44 rounded-xl" />
          <Skeleton className="mt-16 h-72 w-full max-w-6xl rounded-3xl" />
        </div>
      </Wrapper>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                  CONTENT                                   */
  /* -------------------------------------------------------------------------- */
  return (
    <Wrapper className="relative overflow-hidden pt-28 pb-24">
      {/* Subtle Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.15]"
      />

      {/* Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-12%] -z-10 h-105 w-105 -translate-x-1/2 rounded-full bg-accent/25 blur-[130px]"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* ------------------------------------------------------------------ */}
        {/* Animated Badge                                                     */}
        {/* ------------------------------------------------------------------ */}
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
            <span className="relative flex items-center gap-2">
              <Cog className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Our Services
              </span>
            </span>
          </Badge>
        </AnimationContainer>

        {/* ------------------------------------------------------------------ */}
        {/* Heading                                                            */}
        {/* ------------------------------------------------------------------ */}
        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-6xl">
            Focus on your{" "}
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Business
            </span>{" "}
            while we manage the{" "}
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              digital experience
            </span>
          </h1>
        </AnimationContainer>

        {/* ------------------------------------------------------------------ */}
        {/* Description                                                        */}
        {/* ------------------------------------------------------------------ */}
        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            We design, develop, secure, and maintain high-quality digital
            experiences—so you can focus entirely on growing your business.
          </p>
        </AnimationContainer>

        {/* ------------------------------------------------------------------ */}
        {/* Feature Chips                                                      */}
        {/* ------------------------------------------------------------------ */}
        <AnimationContainer animation="fadeUp" delay={0.45}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              { icon: Code2, label: "Development" },
              { icon: Layers, label: "Design Systems" },
              { icon: ShieldCheck, label: "Security" },
              { icon: Cog, label: "Maintenance" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f10a0a]/30 hover:shadow-sm"
              >
                <Icon className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-[#f10a0a]" />
                <span className="text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </AnimationContainer>

        {/* ------------------------------------------------------------------ */}
        {/* CTA                                                                */}
        {/* ------------------------------------------------------------------ */}
        <AnimationContainer animation="scaleUp" delay={0.6}>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="gap-2 px-10 py-6">
                <Presentation className="h-5 w-5" />
                Request a Demo
              </Button>
            </Link>
          </div>
        </AnimationContainer>

        {/* ================================================================== */}
        {/*  CUSTOM ECOSYSTEM VISUAL                                           */}
        {/* ================================================================== */}
        <AnimationContainer animation="fadeUp" delay={0.75} className="w-full">
          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* MOBILE ORBITAL  (< md)                                         */}
          {/* Compact layout: center at (195, 190), cards close-in, 390×430  */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <div className="relative mt-16 block w-full md:hidden">
            {/* Fixed-size container that fits a phone screen */}
            <div className="relative mx-auto h-[430px] w-full max-w-[390px] select-none">
              {/* SVG lines — viewBox matches 390×430 */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 390 430"
                preserveAspectRatio="none"
              >
                <defs>
                  <style>{`
                    .m-eco-line { stroke: hsl(215 18% 52%); }
                    [data-theme="dark"] .m-eco-line,
                    .dark .m-eco-line { stroke: hsl(215 18% 68%); }
                  `}</style>
                </defs>
                {/*
                  Center node: left-1/2 top-[175px] → (195, 175+40=215), radius 40px
                    left:  (155, 215)   right: (235, 215)   bottom: (195, 255)
                  Snowflake  left-2 top-6 w-36   → right-center: (24+144, 6+26)  = (168, 32) — too close
                  Actually: left-2=8px, w-36=144px → right=152, centre-y=top+26
                  Let me use real px for 390px container:
                    Snowflake  left-2 top-6 w-36  → right(8+144=152), y(24+24=48)
                    MySQL      left-2 bottom-6 w-36 → right(152), y(430-24-48=358)
                    Jira       left-8 top-[195px] w-40 → right(32+160=192), y(195+24=219)
                    Sparkles   right-3 top-4      → left(390-12-52=326), y(16+26=42)
                    Security   right-3 top-[185px]→ left(326), y(185+26=211)
                    Layers     right-3 bottom-4   → left(326), y(430-16-80=334 → icon centre 334+26=360)
                */}
                {[
                  // left(155,215) → Snowflake right (152,48): goes left slightly → up → left
                  "M155,215 H168 Q152,215 152,200 V64 Q152,48 136,48 H8",
                  // left(155,215) → MySQL right (152,358): goes left → down → left
                  "M155,215 H168 Q152,215 152,231 V342 Q152,358 136,358 H8",
                  // left(155,215) → Jira right (192,219): straight left
                  "M155,215 H192",
                  // right(235,215) → Sparkles left (326,42): right → up → right
                  "M235,215 H310 Q326,215 326,199 V58 Q326,42 342,42 H346",
                  // right(235,215) → Security left (326,211): straight right
                  "M235,215 H326",
                  // right(235,215) → Layers left (326,352): right → down → right
                  "M235,215 H310 Q326,215 326,231 V336 Q326,352 342,352 H346",
                  // bottom(195,255) → Terminal top
                  "M195,255 V390",
                ].map((d, i) => (
                  <path
                    key={i}
                    d={d}
                    className="m-eco-line"
                    fill="none"
                    strokeWidth="1.2"
                    strokeDasharray="4 7"
                    strokeOpacity="0.55"
                    strokeLinecap="round"
                  />
                ))}

                {/* Animated dots */}
                {[
                  "M155,215 H168 Q152,215 152,200 V64 Q152,48 136,48 H8",
                  "M155,215 H168 Q152,215 152,231 V342 Q152,358 136,358 H8",
                  "M155,215 H192",
                  "M235,215 H310 Q326,215 326,199 V58 Q326,42 342,42 H346",
                  "M235,215 H326",
                  "M235,215 H310 Q326,215 326,231 V336 Q326,352 342,352 H346",
                  "M195,255 V390",
                ].map((pathD, i) => (
                  <circle
                    key={`m-dot-${i}`}
                    r="3"
                    fill="#f10a0a"
                    fillOpacity="0.85"
                  >
                    <animateMotion
                      dur={`${2.4 + i * 0.35}s`}
                      repeatCount="indefinite"
                      path={pathD}
                    />
                  </circle>
                ))}
              </svg>

              {/* Center logo */}
              <div className="absolute left-1/2 top-[175px] -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden
                  className="absolute inset-0 -m-3 rounded-full border border-[#f10a0a]/20 animate-ping"
                  style={{ animationDuration: "2.8s" }}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 -m-1.5 rounded-full border border-[#f10a0a]/10"
                />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-border bg-background shadow-xl">
                  <Image
                    src={
                      resolvedTheme === "dark"
                        ? "/icons/light/android-chrome-512x512.png"
                        : "/icons/dark/android-chrome-512x512.png"
                    }
                    alt="Company Logo"
                    width={52}
                    height={52}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Left cards — compact w-36 */}
              <EcoCard
                icon={Database}
                label="DB"
                sub="Cloud warehouse"
                className="left-2 top-6       w-36 !py-2.5"
              />
              <EcoCard
                icon={Table2}
                label="React"
                sub="UI Framework"
                className="left-2 bottom-6    w-36 !py-2.5"
              />
              <EcoCard
                icon={GitBranch}
                label="Vercel"
                sub="Deployment"
                className="left-8 top-[195px] w-40 !py-2.5"
              />

              {/* Right icon tiles */}
              <EcoIcon
                icon={Sparkles}
                label="AI Enhance"
                className="right-3 top-4"
              />
              <EcoIcon
                icon={ShieldCheck}
                label="Security"
                className="right-3 top-[185px]"
              />
              <EcoIcon
                icon={Layers}
                label="Layers"
                className="right-3 bottom-[42px]"
              />
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* DESKTOP ORBITAL  (≥ md)                                        */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <div className="mt-20 hidden w-full md:block">
            <div className="relative mx-auto h-[540px] w-full max-w-7xl select-none">
              {/* ── Floating accent dots ─────────────────────────────────────── */}
              <Dot className="left-[8%]  top-[12%]" />
              <Dot className="left-[18%] top-[72%]" />
              <Dot className="right-[14%] top-[18%]" />
              <Dot className="right-[22%] bottom-[14%]" />
              <Dot className="left-[45%] top-[8%]" />
              <Dot className="right-[38%] bottom-[8%]" />

              {/* ── SVG connection lines ─────────────────────────────────────── */}
              {/*
                  viewBox="0 0 1280 540" matches the CSS container (max-w-7xl × h-[540px])
                  so path coordinates ARE CSS pixel positions — no scaling math needed.

                  Center node:  left-1/2 top-1/2 → (640, 270), radius 56px
                    left edge  = (584, 270)
                    right edge = (696, 270)
                    bottom     = (640, 326)

                  Card right-edge centres (for left cards):
                    Snowflake  left-6   top-16      w-52  → (232, 90)
                    MySQL      left-20  bottom-16   w-52  → (288, 450)
                    Jira       left-36  top-[250px] w-56  → (368, 276)

                  Icon left-edge centres (for right tiles, h-14 = 56px tile):
                    Sparkles   right-[14%] top-[18%]    → left=(1280-179-56=1045), y=97+28=125  → (1045,125)
                    Security   right-[10%] top-[46%]    → left=(1280-128-56=1096), y=248+28=276 → (1096,276)
                    Layers     right-[22%] bottom-[16%] → left=(1280-282-56=942),  y=404+28=432 → (942,432)

                  Terminal: center-top at (640, 326+) → draw down to y=540
                */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1280 540"
                preserveAspectRatio="none"
              >
                <defs>
                  <style>{`
                      .eco-line { stroke: hsl(215 18% 52%); }
                      [data-theme="dark"] .eco-line,
                      .dark .eco-line { stroke: hsl(215 18% 68%); }
                    `}</style>
                </defs>

                {[
                  // CENTER-LEFT (584,270) → Snowflake right (232,90): left→Q up→Q left
                  "M584,270 H368 Q350,270 350,252 V108 Q350,90 332,90 H232",
                  // CENTER-LEFT (584,270) → MySQL right (288,450): left→Q down→Q left
                  "M584,270 H343 Q325,270 325,288 V432 Q325,450 307,450 H288",
                  // CENTER-LEFT (584,270) → Jira right (368,276): straight left
                  "M584,270 H368",
                  // CENTER-RIGHT (696,270) → Sparkles left (1045,125): right→Q up→Q right
                  "M696,270 H882 Q900,270 900,252 V143 Q900,125 918,125 H1045",
                  // CENTER-RIGHT (696,270) → Security left (1096,276): straight right
                  "M696,270 H1096",
                  // CENTER-RIGHT (696,270) → Layers left (942,432): right→Q down→Q right
                  "M696,270 H824 Q842,270 842,288 V414 Q842,432 860,432 H942",
                  // CENTER-BOTTOM (640,326) → Terminal: straight down
                  "M640,326 V540",
                ].map((d, i) => (
                  <path
                    key={i}
                    d={d}
                    className="eco-line"
                    fill="none"
                    strokeWidth="1.2"
                    strokeDasharray="4 7"
                    strokeOpacity="0.55"
                    strokeLinecap="round"
                  />
                ))}

                {/* Animated dots travelling along each path */}
                {[
                  "M584,270 H368 Q350,270 350,252 V108 Q350,90 332,90 H232",
                  "M584,270 H343 Q325,270 325,288 V432 Q325,450 307,450 H288",
                  "M584,270 H368",
                  "M696,270 H882 Q900,270 900,252 V143 Q900,125 918,125 H1045",
                  "M696,270 H1096",
                  "M696,270 H824 Q842,270 842,288 V414 Q842,432 860,432 H942",
                  "M640,326 V540",
                ].map((pathD, i) => (
                  <circle
                    key={`dot-${i}`}
                    r="3"
                    fill="#f10a0a"
                    fillOpacity="0.85"
                  >
                    <animateMotion
                      dur={`${2.4 + i * 0.35}s`}
                      repeatCount="indefinite"
                      path={pathD}
                    />
                  </circle>
                ))}
              </svg>

              {/* ── Center logo with pulse ring ─────────────────────────────── */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden
                  className="absolute inset-0 -m-4 rounded-full border border-[#f10a0a]/20 animate-ping"
                  style={{ animationDuration: "2.8s" }}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 -m-2 rounded-full border border-border"
                />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-border bg-background">
                  <Image
                    src={
                      resolvedTheme === "dark"
                        ? "/icons/light/android-chrome-512x512.png"
                        : "/icons/dark/android-chrome-512x512.png"
                    }
                    alt="Company Logo"
                    width={72}
                    height={72}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>

              {/* ── Left ecosystem cards ─────────────────────────────────────── */}
              {/* Snowflake: right-center at (232, 90) in CSS px */}
              <EcoCard
                icon={Database}
                label="DB"
                sub="Cloud Servers"
                className="left-6 top-14 w-52"
              />
              {/* MySQL: right-center at (288, 450) in CSS px */}
              <EcoCard
                icon={Table2}
                label="React"
                sub="UI Framework"
                className="left-20 bottom-14 w-52"
              />
              {/* Jira: right-center at (368, 276) in CSS px */}
              <EcoCard
                icon={GitBranch}
                label="Vercel"
                sub="Deployment"
                className="left-36 top-[250px] w-56"
              />

              {/* ── Right icon tiles ─────────────────────────────────────────── */}
              {/* Sparkles: left-center at (1045, 125) in CSS px */}
              <EcoIcon
                icon={Sparkles}
                label="AI Enhance"
                className="right-[14%] top-[15%]"
              />
              {/* Security: left-center at (1096, 276) in CSS px */}
              <EcoIcon
                icon={ShieldCheck}
                label="Security"
                className="right-[10%] top-[46%]"
              />
              {/* Layers: left-center at (942, 432) in CSS px */}
              <EcoIcon
                icon={Layers}
                label="Layers"
                className="right-[22%] bottom-[14%]"
              />
            </div>
            {/* end desktop orbital inner */}
          </div>
          {/* end desktop orbital outer */}

          {/* ── Terminal / Code preview — sits BELOW both layouts ────────── */}
          <div className="mx-auto mt-4 w-full max-w-[460px] overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            {/* Terminal title bar */}
            <div className="flex items-center gap-1.5 border-b border-border bg-muted/40 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="ml-3 text-[10px] font-medium text-muted-foreground tracking-wide">
                ServiceCard.tsx
              </span>
            </div>

            {/* Code body — TypeScript React snippet */}
            <pre className="px-5 py-4 text-left text-xs leading-6">
              <span className="text-primary/80">const </span>
              <span className="text-foreground font-medium">ServiceCard</span>
              <span className="text-muted-foreground">
                : React.FC&lt;Props&gt; = (&#123;
              </span>
              {"\n"}
              {"  "}
              <span className="text-foreground">title</span>
              <span className="text-muted-foreground">, </span>
              <span className="text-foreground">icon</span>
              <span className="text-muted-foreground">, </span>
              <span className="text-foreground">description</span>
              {"\n"}
              <span className="text-muted-foreground">&#125;) =&gt; (</span>
              {"\n"}
              {"  "}
              <span className="text-muted-foreground">&lt;</span>
              <span className="text-foreground">div</span>
              <span className="text-muted-foreground"> className=</span>
              <span className="text-primary/70">"card group"</span>
              <span className="text-muted-foreground">&gt;</span>
              {"\n"}
              {"    "}
              <span className="text-muted-foreground">&lt;</span>
              <span className="text-foreground">span</span>
              <span className="text-muted-foreground">
                &gt;&#123;icon&#125;&lt;/
              </span>
              <span className="text-foreground">span</span>
              <span className="text-muted-foreground">&gt;</span>
              {"\n"}
              {"    "}
              <span className="text-muted-foreground">&lt;</span>
              <span className="text-foreground">h3</span>
              <span className="text-muted-foreground">
                &gt;&#123;title&#125;&lt;/
              </span>
              <span className="text-foreground">h3</span>
              <span className="text-muted-foreground">&gt;</span>
              {"\n"}
              {"  "}
              <span className="text-muted-foreground">&lt;/</span>
              <span className="text-foreground">div</span>
              <span className="text-muted-foreground">&gt;</span>
              {"\n"}
              <span className="text-muted-foreground">);</span>
            </pre>
          </div>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};

export default ServiceHero;
