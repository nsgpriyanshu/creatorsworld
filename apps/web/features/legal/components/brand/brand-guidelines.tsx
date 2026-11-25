"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface Guideline {
  title: string;
  description: string;
}

interface BrandGuidelinesProps {
  guidelines: Guideline[];
}

const BrandGuidelines: React.FC<BrandGuidelinesProps> = ({ guidelines }) => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {guidelines.map((guideline, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="space-y-3 rounded-lg border border-border/50 bg-background/50 p-4 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-background/80 min-w-0"
        >
          <h3 className="text-lg font-semibold text-foreground">
            {guideline.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {guideline.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BrandGuidelines;
