"use client";

import React from "react";
import Link from "next/link";
import { Heart, Users, Zap } from "lucide-react";

import { Button } from "@repo/ui/components/ui/button";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

interface Stat {
  value: string;
  label: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AboutContentProps {
  description: string;
}

const AboutContent: React.FC<AboutContentProps> = ({ description }) => {
  const stats: Stat[] = [
    { value: "1000+", label: "Discord Bots" },
    { value: "#1", label: "Verified Bot Server" },
  ];

  const features: Feature[] = [
    {
      icon: <Zap className="h-5 w-5 text-muted-foreground" />,
      title: "Innovation First",
      description:
        "We continuously explore better tooling, stronger systems, and more thoughtful ways to serve the community.",
    },
    {
      icon: <Users className="h-5 w-5 text-muted-foreground" />,
      title: "Community Driven",
      description:
        "The platform evolves with community feedback so the work stays useful, relevant, and grounded in real needs.",
    },
    {
      icon: <Heart className="h-5 w-5 text-muted-foreground" />,
      title: "Long-Term Care",
      description:
        "We focus on reliability, support, and steady iteration instead of shipping quickly and leaving gaps behind.",
    },
  ];

  return (
    <Wrapper className="relative w-full overflow-hidden pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12]"
      />

      <section className="mx-auto w-full max-w-6xl rounded-md border border-border">
        <div className="grid md:grid-cols-3">
          <AnimationContainer
            animation="fadeUp"
            className="border-b border-dashed border-border p-6 md:col-span-1 md:border-r md:p-8"
          >
            <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Our Story
            </h2>
          </AnimationContainer>

          <AnimationContainer
            animation="fadeUp"
            delay={0.15}
            className="border-b border-dashed border-border p-6 md:col-span-2 md:p-8"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          </AnimationContainer>
        </div>

        <div className="grid md:grid-cols-3">
          <AnimationContainer
            animation="fadeUp"
            delay={0.2}
            className="border-b border-dashed border-border p-6 md:col-span-1 md:border-r md:p-8"
          >
            <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
              By The Numbers
            </h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              A quick snapshot of our scale and community reach.
            </p>
          </AnimationContainer>

          <div className="grid border-b border-dashed border-border sm:grid-cols-2 md:col-span-2">
            {stats.map((stat, index) => (
              <AnimationContainer
                key={stat.label}
                animation="fadeUp"
                delay={0.3 + index * 0.08}
                className={[
                  "p-6 md:p-8",
                  index === 0
                    ? "border-b border-dashed border-border sm:border-b-0 sm:border-r"
                    : "",
                ].join(" ")}
              >
                <p className="text-4xl font-semibold text-foreground md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">
                  {stat.label}
                </p>
              </AnimationContainer>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3">
          <AnimationContainer
            animation="fadeUp"
            delay={0.35}
            className="border-b border-dashed border-border p-6 md:col-span-1 md:border-r md:p-8"
          >
            <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Our Values
            </h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              The principles that guide how we build and serve the community.
            </p>
          </AnimationContainer>

          <div className="grid border-b border-dashed border-border md:col-span-2 md:grid-cols-3">
            {features.map((feature, index) => (
              <AnimationContainer
                key={feature.title}
                animation="fadeUp"
                delay={0.45 + index * 0.08}
                className={[
                  "p-6 md:p-8",
                  index < features.length - 1
                    ? "border-b border-dashed border-border md:border-b-0 md:border-r"
                    : "",
                ].join(" ")}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {feature.description}
                </p>
              </AnimationContainer>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3">
          <AnimationContainer
            animation="fadeUp"
            delay={0.55}
            className="border-b border-dashed border-border p-6 text-center md:col-span-2 md:border-r md:p-8 md:text-left"
          >
            <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Join Our Community
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Be part of something bigger. Whether you are a developer, creator,
              or enthusiast, there is a place for you at Creator's World.
            </p>
          </AnimationContainer>

          <AnimationContainer
            animation="fadeUp"
            delay={0.65}
            className="flex flex-col items-center justify-center gap-4 border-b border-dashed border-border p-6 sm:flex-row md:border-b-0 md:p-8"
          >
            <Button
              size="lg"
              className="h-11 gap-2 rounded-md px-8 text-base md:h-12"
              render={
                <Link
                  href="https://discord.gg/VUMVuArkst"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Join Discord
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-11 gap-2 rounded-md px-8 text-base md:h-12"
              render={<Link href="/contact" />}
            >
              Get in Touch
            </Button>
          </AnimationContainer>
        </div>
      </section>
    </Wrapper>
  );
};

export default AboutContent;
