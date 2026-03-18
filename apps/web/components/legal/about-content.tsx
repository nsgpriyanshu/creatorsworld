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
      icon: <Zap className="h-5 w-5 text-muted-foreground" />,
      title: "Innovation First",
      description:
        "We continuously explore new technologies and approaches to create the best tools for our community.",
    },
    {
      icon: <Users className="h-5 w-5 text-muted-foreground" />,
      title: "Community Driven",
      description:
        "Our platform is built by and for the community, ensuring every voice matters.",
    },
    {
      icon: <Heart className="h-5 w-5 text-muted-foreground" />,
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
    <Wrapper className="relative w-full overflow-hidden pb-24">
      <div className="mx-auto max-w-6xl space-y-20">
        {/* Story Section */}
        <section className="grid gap-8 lg:grid-cols-3">
          <AnimationContainer animation="fadeUp" className="lg:col-span-1">
            <h2 className="text-5xl font-semibold md:text-6xl">Our Story</h2>
          </AnimationContainer>

          <AnimationContainer
            animation="fadeUp"
            delay={0.15}
            className="lg:col-span-2"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          </AnimationContainer>
        </section>

        {/* Stats Section */}
        <section className="grid gap-8 lg:grid-cols-3">
          <AnimationContainer animation="fadeUp" className="lg:col-span-1">
            <h2 className="text-5xl font-semibold md:text-6xl">
              By The Numbers
            </h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              A quick snapshot of our scale and community reach.
            </p>
          </AnimationContainer>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div
                  className={cn(
                    "group relative flex flex-col items-center rounded-2xl",
                    "border border-dashed border-border bg-background/70 px-8 py-10 text-center backdrop-blur",
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-1 hover:bg-muted/30",
                  )}
                >
                  <p className="relative text-4xl font-bold text-foreground md:text-5xl">
                    {stat.value}
                  </p>

                  <p className="relative mt-3 text-sm text-muted-foreground md:text-base">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="grid gap-8 lg:grid-cols-3">
          <AnimationContainer animation="fadeUp" className="lg:col-span-1">
            <h2 className="text-5xl font-semibold md:text-6xl">Our Values</h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              The principles that guide how we build and serve the community.
            </p>
          </AnimationContainer>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div
                  className={cn(
                    "group relative flex h-full flex-col rounded-2xl",
                    "border border-dashed border-border bg-background/70 px-8 py-9 backdrop-blur",
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-1 hover:bg-muted/30",
                  )}
                >
                  {/* Icon */}
                  <div className="mb-4 text-muted-foreground">
                    {feature.icon}
                  </div>

                  <h3 className="relative text-xl font-semibold tracking-tight text-foreground">
                    {feature.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="grid gap-6 rounded-2xl border border-dashed border-border bg-background/70 px-10 py-14 text-center backdrop-blur lg:grid-cols-3 lg:text-left">
          <AnimationContainer animation="fadeUp" className="lg:col-span-2">
            <h2 className="text-5xl font-semibold md:text-6xl">
              Join Our Community
            </h2>

            <p className="mt-4 text-muted-foreground">
              Be part of something bigger. Whether you're a developer, creator,
              or enthusiast, there's a place for you at Creator's World.
            </p>
          </AnimationContainer>

          <AnimationContainer
            animation="fadeUp"
            delay={0.15}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:col-span-1"
          >
            <Button size="lg" className="gap-2 rounded-md">
              Join Discord
            </Button>

            <Button size="lg" variant="outline" className="gap-2 rounded-md">
              Get in Touch
            </Button>
          </AnimationContainer>
        </section>
      </div>
    </Wrapper>
  );
};

export default AboutContent;
