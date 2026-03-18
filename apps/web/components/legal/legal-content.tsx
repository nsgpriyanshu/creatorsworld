"use client";

import React from "react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
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
  return (
    <Wrapper className={cn("pb-24 overflow-hidden", className)}>
      <section className="mx-auto w-full max-w-6xl rounded-md border border-dashed border-border bg-background/70 backdrop-blur">
        {items.map((item, index) => (
          <AnimationContainer
            key={index}
            animation="fadeUp"
            delay={0.2 + index * 0.08}
          >
            <div
              className={cn(
                "grid grid-cols-1 gap-4 px-6 py-6 md:grid-cols-12 md:items-start",
                index !== 0 && "border-t border-dashed border-border",
              )}
            >
              <div className="md:col-span-4 md:border-r md:border-dashed md:border-border md:pr-6">
                <div className="text-sm font-mono text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-2 break-words text-xl font-semibold text-foreground md:text-2xl">
                  {item.title}
                </h2>
              </div>

              <div className="md:col-span-8">
                <p className="break-words text-base leading-relaxed text-muted-foreground md:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          </AnimationContainer>
        ))}
      </section>
    </Wrapper>
  );
};

export default LegalContent;
