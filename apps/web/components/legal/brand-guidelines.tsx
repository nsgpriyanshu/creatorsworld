"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Guideline } from "../../constants/legal";

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
      className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-md border border-dashed border-border [&>*]:border-dashed [&>*:not(:last-child)]:border-b sm:[&>*:nth-child(odd)]:border-r sm:[&>*:not(:nth-last-child(-n+2))]:border-b"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {guidelines.map((guideline, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="space-y-3 bg-background/70 p-4 sm:p-6 backdrop-blur transition-all duration-300 hover:bg-muted/30 min-w-0"
        >
          <h3 className="text-xl font-semibold text-foreground">
            {guideline.title}
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {guideline.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BrandGuidelines;
