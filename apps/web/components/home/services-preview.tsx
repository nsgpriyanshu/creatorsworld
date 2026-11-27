import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { WHAT_YOU_GET } from "../../features/service/data/what-you-get";

export function ServicesPreview() {
  return (
    <section
      aria-labelledby="services-heading"
      className="mx-auto mt-16 w-full max-w-7xl border-t border-border pt-10 md:mt-20 md:pt-12"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2
          id="services-heading"
          className="text-2xl font-semibold tracking-tight"
        >
          What we do
        </h2>
        <Link
          href="/service"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Explore services
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
      <Accordion
        defaultValue={[WHAT_YOU_GET[0].title]}
        className="mt-7 w-full overflow-hidden rounded-lg border border-border/70 bg-muted/10 md:hidden"
      >
        {WHAT_YOU_GET.map(({ title, description }, index) => (
          <AccordionItem
            key={title}
            value={title}
            className="border-b border-border/70 px-4 transition-colors last:border-b-0 data-[open]:bg-muted/20"
          >
            <AccordionTrigger className="min-h-14 gap-3 py-4 text-sm hover:no-underline">
              <span className="font-mono text-[10px] text-muted-foreground">
                0{index + 1}
              </span>
              <span className="flex-1 text-left font-semibold">{title}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-4 pl-8 pr-4 text-left text-sm leading-relaxed text-muted-foreground">
              {description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <ul className="mt-7 hidden grid-cols-1 gap-x-8 gap-y-7 md:grid sm:grid-cols-2 lg:grid-cols-4">
        {WHAT_YOU_GET.map(({ title, description }, index) => (
          <li key={title} className="border-t border-border/70 pt-4">
            <span className="font-mono text-[10px] text-muted-foreground">
              0{index + 1}
            </span>
            <h3 className="mt-2 text-base font-semibold">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
