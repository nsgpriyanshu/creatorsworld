"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Heart, Zap, Users } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";

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
      icon: <Zap className="h-5 w-5 text-[#f10a0a]" />,
      title: "Innovation First",
      description:
        "We continuously explore new technologies and approaches to create the best tools for our community.",
    },
    {
      icon: <Users className="h-5 w-5 text-[#f10a0a]" />,
      title: "Community Driven",
      description:
        "Our platform is built by and for the community, ensuring every voice matters.",
    },
    {
      icon: <Heart className="h-5 w-5 text-[#f10a0a]" />,
      title: "Passion & Dedication",
      description:
        "We're committed to excellence and go the extra mile to support our users.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Wrapper className="relative w-full overflow-hidden space-y-28 pb-28">
      {/* Story Section */}
      <section className="space-y-8">
        <AnimationContainer animation="fadeUp">
          <h2 className="text-3xl font-semibold md:text-4xl">Our Story</h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.15}>
          <p className="max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </AnimationContainer>
      </section>

      {/* Stats Section */}
      <section className="space-y-8">
        <AnimationContainer animation="fadeUp">
          <h2 className="text-3xl font-semibold md:text-4xl">By The Numbers</h2>
        </AnimationContainer>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div
                className={cn(
                  "group relative flex flex-col items-center rounded-3xl",
                  "border border-border bg-card px-8 py-10 text-center",
                  "transition-all duration-300 ease-out",
                  "hover:-translate-y-1",
                  "hover:border-[#f10a0a]/30",
                )}
              >
                {/* Red inner shine */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-[#f10a0a]/10 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Radial glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#f10a0a]/20 blur-3xl" />
                </div>

                <p className="relative text-4xl font-bold text-foreground md:text-5xl">
                  {stat.value}
                </p>

                <p className="relative mt-3 text-sm text-muted-foreground md:text-base">
                  {stat.label}
                </p>

                {/* Hover ring */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition-colors duration-300 group-hover:ring-[#f10a0a]/20" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="space-y-8">
        <AnimationContainer animation="fadeUp">
          <h2 className="text-3xl font-semibold md:text-4xl">Our Values</h2>
        </AnimationContainer>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div
                className={cn(
                  "group relative flex h-full flex-col rounded-3xl",
                  "border border-border bg-card px-8 py-9",
                  "transition-all duration-300 ease-out",
                  "hover:-translate-y-1",
                  "hover:border-[#f10a0a]/30",
                )}
              >
                {/* Red inner shine */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-[#f10a0a]/10 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Radial glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#f10a0a]/20 blur-3xl" />
                </div>

                {/* Icon */}
                <div
                  className={cn(
                    "relative mb-6 flex size-11 items-center justify-center rounded-2xl",
                    "border border-[#f10a0a]/20 bg-[#f10a0a]/10",
                    "transition-all duration-300",
                    "group-hover:bg-[#f10a0a]/15",
                    "group-hover:border-[#f10a0a]/40",
                  )}
                >
                  {feature.icon}
                </div>

                <h3 className="relative text-lg font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>

                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {feature.description}
                </p>

                {/* Hover ring */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition-colors duration-300 group-hover:ring-[#f10a0a]/20" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative rounded-3xl border border-border bg-card px-10 py-14 text-center">
        <AnimationContainer animation="fadeUp">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Join Our Community
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Be part of something bigger. Whether you're a developer, creator, or
            enthusiast, there's a place for you at Creator's World.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(241,10,10,0.3)]">
              Join Discord
            </Button>

            <Button
              variant="outline"
              className="transition-all duration-300 hover:border-[#f10a0a]/40 hover:text-[#f10a0a]"
            >
              Get in Touch
            </Button>
          </div>
        </AnimationContainer>
      </section>
    </Wrapper>
  );
};

export default AboutContent;
