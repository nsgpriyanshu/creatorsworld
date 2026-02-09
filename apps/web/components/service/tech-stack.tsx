"use client";

import * as React from "react";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Badge } from "@repo/ui/components/ui/badge";
import { motion } from "framer-motion";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiNodedotjs,
  SiVercel,
  SiCodeblocks,
} from "react-icons/si";
import { Computer } from "lucide-react";

type Tech = {
  name: string;
  icon: React.ElementType;
};

const TECH_STACK: Tech[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Vercel", icon: SiVercel },
];

const TechStackOrbit = () => {
  const [active, setActive] = React.useState<number | null>(null);

  return (
    <Wrapper className="relative overflow-hidden py-28">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <AnimationContainer animation="fadeDown">
          <Badge
            variant="outline"
            className="group flex items-center gap-2 border-border bg-background/70 px-4 py-1.5 backdrop-blur"
          >
            <SiReact className="h-4 w-4 text-foreground/70 transition-transform duration-300 group-hover:rotate-12" />
            Technology Stack
          </Badge>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.15}>
          <h2 className="mt-8 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-5xl">
            Built with tools that{" "}
            <span className="opacity-60">stay out of the way</span>
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-balance text-muted-foreground md:text-lg">
            A modern, performance-first stack engineered for speed, scalability,
            and long-term maintainability.
          </p>
        </AnimationContainer>
      </div>

      {/* Orbit */}
      <div className="relative mx-auto mt-24 h-105 w-full max-w-5xl sm:h-130">
        {/* Center node */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center text-sm font-medium backdrop-blur sm:h-36 sm:w-36"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Computer className="mb-1 h-10 w-10 text-foreground/70" />
          Your Website
        </motion.div>

        {/* Rotating ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 140,
            ease: "linear",
          }}
        >
          {TECH_STACK.map((tech, index) => {
            const angle = (index / TECH_STACK.length) * 360;
            const radius = 190;
            const Icon = tech.icon;
            const isActive = active === index;

            return (
              <div
                key={tech.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px)`,
                }}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Counter-rotate */}
                <div
                  className="flex items-center gap-3"
                  style={{ transform: `rotate(${-angle}deg)` }}
                >
                  <div
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      active === null || isActive ? "opacity-100" : "opacity-35"
                    }`}
                  >
                    <Icon className="h-10 w-10 text-foreground/70" />

                    {isActive && (
                      <span className="whitespace-nowrap text-sm text-muted-foreground">
                        {tech.name}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Footer */}
      <AnimationContainer animation="fadeUp" delay={0.2}>
        <p className="mx-auto mt-16 max-w-xl text-center text-sm text-muted-foreground">
          Performance, accessibility, and developer experience — all aligned.
        </p>
      </AnimationContainer>
    </Wrapper>
  );
};

export default TechStackOrbit;
