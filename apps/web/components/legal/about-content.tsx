"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Heart, Zap, Users } from "lucide-react";
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
      icon: <Zap className="h-6 w-6 text-[#f10a0a]" />,
      title: "Innovation First",
      description:
        "We continuously explore new technologies and approaches to create the best tools for our community.",
    },
    {
      icon: <Users className="h-6 w-6 text-[#f10a0a]" />,
      title: "Community Driven",
      description:
        "Our platform is built by and for the community, ensuring every voice matters.",
    },
    {
      icon: <Heart className="h-6 w-6 text-[#f10a0a]" />,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Wrapper className="space-y-24 pb-24 overflow-hidden">
      {/* Story Section */}
      <section className="space-y-8">
        <AnimationContainer animation="fadeUp">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Our Story
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.15}>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg max-w-4xl">
            {description}
          </p>
        </AnimationContainer>
      </section>

      {/* Stats Section */}
      <section className="space-y-8">
        <AnimationContainer animation="fadeUp">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            By The Numbers
          </h2>
        </AnimationContainer>

        <motion.div
          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-lg border border-border/50 bg-background/50 p-6 sm:p-8 text-center backdrop-blur-sm min-w-0"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary break-words">
                {stat.value}
              </p>
              <p className="mt-3 text-xs sm:text-sm md:text-base font-medium text-muted-foreground break-words">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="space-y-8">
        <AnimationContainer animation="fadeUp">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Our Values
          </h2>
        </AnimationContainer>

        <motion.div
          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-lg border border-border/50 bg-background/50 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-background/80 hover:shadow-lg min-w-0"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background ring-1 ring-border/50">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-base sm:text-lg md:text-xl font-semibold text-foreground break-words">
                {feature.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground break-words">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg border border-border/50 bg-background/50 p-8 text-center backdrop-blur-sm md:p-12">
        <AnimationContainer animation="fadeUp">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Join Our Community
          </h2>
          <p className="mt-4 text-muted-foreground">
            Be part of something bigger. Whether you're a developer, creator, or
            enthusiast, there's a place for you at Creator's World.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button>
              <a
                href="https://discord.gg/creatorsworld"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
              </a>
            </Button>
            <Button variant="outline">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </AnimationContainer>
      </section>
    </Wrapper>
  );
};

export default AboutContent;
