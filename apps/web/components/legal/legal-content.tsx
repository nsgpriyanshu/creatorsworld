"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

import Wrapper from "../global/wrapper";
import { cn } from "@repo/ui/lib/utils";

interface LegalItem {
  title: string;
  description: string;
}

interface LegalContentProps {
  items: LegalItem[];
  className?: string;
}

const LegalContent: React.FC<LegalContentProps> = ({ items, className }) => {
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
    <Wrapper className={cn("pb-24 overflow-hidden", className)}>
      <motion.div
        className="mx-auto w-full max-w-6xl rounded-md border border-dashed border-border bg-background/70 backdrop-blur"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={cn(
              "grid grid-cols-1 gap-4 px-6 py-6 md:grid-cols-12 md:items-start",
              index !== 0 && "border-t border-dashed border-border",
            )}
          >
            <div className="md:col-span-4 md:border-r md:border-dashed md:border-border md:pr-6">
              <div className="text-sm font-mono text-blue-600">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-2 text-lg font-semibold text-foreground md:text-xl break-words">
                {item.title}
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base break-words">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Wrapper>
  );
};

export default LegalContent;
