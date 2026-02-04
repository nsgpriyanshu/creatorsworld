"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { BrandColor } from "../../constants/legal";
import { useState } from "react";

interface ColorPaletteProps {
  colors: BrandColor[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

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
      className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {colors.map((color, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="overflow-hidden rounded-lg border border-border/50 backdrop-blur-sm min-w-0"
        >
          {/* Color Preview */}
          <div
            className="h-32 w-full transition-transform duration-300"
            style={{ backgroundColor: color.hex }}
          />

          {/* Color Details */}
          <div className="space-y-4 bg-background/50 p-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {color.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {color.usage}
              </p>
            </div>

            {/* Color Values */}
            <div className="space-y-3">
              {/* HEX */}
              <div className="flex items-center justify-between gap-2 min-w-0">
                <div className="min-w-0 overflow-hidden">
                  <p className="text-xs font-medium text-muted-foreground">
                    HEX
                  </p>
                  <p className="font-mono text-sm text-foreground truncate">
                    {color.hex}
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(color.hex, index)}
                  className="inline-flex items-center gap-1 sm:gap-2 rounded-md bg-background px-2 sm:px-3 py-2 text-xs font-medium transition-all hover:bg-border/50 flex-shrink-0"
                >
                  {copiedIndex === index ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* RGB */}
              <div className="flex items-center justify-between gap-2 min-w-0">
                <div className="min-w-0 overflow-hidden">
                  <p className="text-xs font-medium text-muted-foreground">
                    RGB
                  </p>
                  <p className="font-mono text-sm text-foreground truncate">
                    {color.rgb}
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(color.rgb, index)}
                  className="inline-flex items-center gap-1 sm:gap-2 rounded-md bg-background px-2 sm:px-3 py-2 text-xs font-medium transition-all hover:bg-border/50 flex-shrink-0"
                >
                  {copiedIndex === index ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ColorPalette;
