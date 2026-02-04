"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Download } from "lucide-react";
import { BrandAsset } from "../../../constants/legal";
import Image from "next/image";

interface LogosShowcaseProps {
  logos: BrandAsset[];
}

const LogosShowcase: React.FC<LogosShowcaseProps> = ({ logos }) => {
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
    <motion.div
      className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="overflow-hidden rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-background/80 hover:shadow-lg flex flex-col min-w-0"
        >
          {/* Logo Preview */}
          <div className="flex items-center justify-center bg-background/30 px-4 py-8 flex-grow">
            <div className="relative h-24 w-full">
              <Image
                src={logo.path}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Logo Details */}
          <div className="space-y-3 border-t border-border/30 bg-background/60 p-4 min-w-0">
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground line-clamp-2 break-words">
                {logo.name}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2 break-words">
                {logo.description}
              </p>
            </div>

            <div className="flex flex-col gap-2 min-w-0">
              <p className="text-xs font-mono text-muted-foreground truncate">
                {logo.format}
              </p>
              <div className="flex flex-wrap gap-1 min-w-0">
                {logo.variants?.map((variant, variantIndex) => (
                  <a
                    key={variantIndex}
                    href={`/assets/brand/${variant}`}
                    download
                    className="inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground transition-all hover:opacity-90"
                    title={`Download ${variant}`}
                  >
                    <Download className="h-3 w-3" />
                    <span className="hidden sm:inline">
                      {variant.split(".").pop()?.toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LogosShowcase;
