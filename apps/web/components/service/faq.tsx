"use client";

import * as React from "react";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/ui/accordion";

import { FAQS } from "../../constants/faq";
import { FileQuestion } from "lucide-react";
import { Badge } from "@repo/ui/components/ui/badge";

const FAQ = () => {
  return (
    <Wrapper className="relative w-full overflow-hidden pt-24 pb-16">
      {/* Grid Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
        bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),
        linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
        bg-[size:64px_64px]
        opacity-[0.12]"
      />

      <section className="mx-auto w-full max-w-6xl rounded-md border border-border bg-background/60 backdrop-blur-sm">
        {/* GRID HEADER LAYOUT */}
        <div className="grid md:grid-cols-[1fr_220px]">
          {/* Badge Row */}
          <div className="border-b border-dashed border-border p-4 md:px-6">
            <AnimationContainer animation="fadeDown">
              <Badge
                variant="outline"
                className="group inline-flex items-center gap-2 border-border bg-background/70 px-3 py-1 md:px-4 md:py-1.5 backdrop-blur text-xs md:text-sm"
              >
                <FileQuestion className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                FAQs
              </Badge>
            </AnimationContainer>
          </div>

          {/* Right empty column */}
          <div className="border-l border-dashed border-border border-b" />

          {/* Heading */}
          <div className="border-b border-dashed border-border px-6 py-10">
            <AnimationContainer animation="fadeUp" delay={0.15}>
              <h2 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight md:text-6xl">
                Frequently asked{" "}
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  questions
                </span>
              </h2>
            </AnimationContainer>
          </div>

          {/* Right side label */}
          <div className="border-l border-dashed border-border border-b" />

          {/* Description */}
          <div className="border-b border-dashed border-border px-6 py-8">
            <AnimationContainer animation="fadeUp" delay={0.3}>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Answers to common questions about our product, security,
                integrations, and workflow. If you need more details feel free
                to reach out to our team anytime.
              </p>
            </AnimationContainer>
          </div>

          {/* Right empty column */}
          <div className="border-l border-dashed border-border border-b" />
        </div>

        {/* Accordion Section */}
        <AnimationContainer animation="fadeUp" delay={0.45}>
          <div className="px-6 py-8">
            <Accordion className="w-full overflow-hidden border-t border-dashed border-border">
              {FAQS.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="group border-b border-dashed border-border transition-colors"
                >
                  <AccordionTrigger
                    className="
                        py-4 md:py-5 text-left text-xs sm:text-sm md:text-base font-medium
                        transition-all duration-300 ease-out
                        hover:opacity-80
                        [&[data-state=open]>svg]:rotate-180
                      "
                  >
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent
                    className="
                        overflow-hidden
                        pb-4 md:pb-5 pr-2
                        text-xs sm:text-sm md:text-base
                        leading-relaxed text-muted-foreground
                        data-[state=open]:animate-accordion-down
                        data-[state=closed]:animate-accordion-up
                        transition-[height,opacity] duration-300
                      "
                  >
                    <div className="pt-1">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimationContainer>
      </section>
    </Wrapper>
  );
};

export default FAQ;
