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
    <Wrapper className={cn("space-y-12 pb-24 overflow-hidden", className)}>
      <motion.div
        className="space-y-8 md:space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="space-y-3 min-w-0"
          >
            <h3 className="text-lg font-semibold text-foreground md:text-xl break-words">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base max-w-3xl break-words">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Wrapper>
  );
};

export default LegalContent;
