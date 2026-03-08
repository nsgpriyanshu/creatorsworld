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
    <Wrapper className="py-12 md:py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-[1fr_2fr] lg:gap-14">
        {/* LEFT */}
        <AnimationContainer animation="fadeRight">
          <div className="max-w-lg">
            <AnimationContainer animation="fadeDown">
              <Badge
                variant="outline"
                className="group inline-flex items-center gap-2 border-border bg-background/70 px-3 py-1 md:px-4 md:py-1.5 backdrop-blur transition-all duration-300 text-xs md:text-sm"
              >
                <FileQuestion className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                FAQs
              </Badge>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.15}>
              <h2 className="mt-3 md:mt-6 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Frequently asked{" "}
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  questions
                </span>
              </h2>
            </AnimationContainer>

            <p className="mt-3 md:mt-4 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed text-muted-foreground">
              Answers to common questions about our product, security, and
              integrations. If you need more clarity, feel free to reach out.
            </p>
          </div>
        </AnimationContainer>

        {/* RIGHT */}
        <AnimationContainer animation="fadeUp">
          <Accordion className="w-full overflow-hidden border-t">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="group border-b transition-colors"
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
                    text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground
                    data-[state=open]:animate-accordion-down
                    data-[state=closed]:animate-accordion-up
                  "
                >
                  <div className="pt-1">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};

export default FAQ;
