"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface AnimationContainerProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleUp";
  delay?: number;
}

const getAnimationVariants = (animation: string) => {
  switch (animation) {
    case "fadeUp":
      return { opacity: 0, y: 14 };
    case "fadeDown":
      return { opacity: 0, y: -14 };
    case "fadeLeft":
      return { opacity: 0, x: -14 };
    case "fadeRight":
      return { opacity: 0, x: 14 };
    case "scaleUp":
      return { opacity: 0, scale: 0.98 };
    default:
      return { opacity: 0, y: 14 };
  }
};

const AnimationContainer = ({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
}: AnimationContainerProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : getAnimationVariants(animation)}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.35,
        delay: prefersReducedMotion ? 0 : delay * 0.15,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
