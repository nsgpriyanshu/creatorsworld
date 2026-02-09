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
    <Wrapper className="py-20 md:py-28">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_2fr] lg:gap-16">
        {/* LEFT */}
        <AnimationContainer animation="fadeRight">
          <div className="max-w-lg">
            <AnimationContainer animation="fadeDown">
              <Badge
                variant="outline"
                className="group inline-flex items-center gap-2 border-border bg-background/70 px-4 py-1.5 backdrop-blur transition-all duration-300"
              >
                <FileQuestion className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                FAQs
              </Badge>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.15}>
              <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                Frequently asked{" "}
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  questions
                </span>
              </h2>
            </AnimationContainer>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
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
                    py-5 text-left text-sm font-medium md:text-base
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
                    pb-5 pr-2
                    text-sm leading-relaxed text-muted-foreground
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
