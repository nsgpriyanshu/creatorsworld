"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BlogBlock } from "../../lib/db/types";
import { cn } from "@repo/ui/lib/utils";

type TableOfContentsProps = {
  blocks: BlogBlock[];
};

type Heading = {
  id: string;
  text: string;
  level: number;
};

const TableOfContents = ({ blocks }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from blocks
    const extracted: Heading[] = blocks
      .filter((block) => block.type === "heading")
      .map((block, index) => {
        if (block.type === "heading") {
          const id = `heading-${index}`;
          return {
            id,
            text: block.text,
            level: block.level,
          };
        }
        return null;
      })
      .filter(Boolean) as Heading[];

    setHeadings(extracted);

    // Setup intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" },
    );

    // Observe all headings in the content
    const headingElements = document.querySelectorAll("h1, h2, h3, h4");
    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
  }, [blocks]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-8 space-y-3 p-4 rounded-lg bg-background border border-border/40 backdrop-blur-sm">
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
        On this page
      </div>
      <ul className="space-y-1.5 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{
              marginLeft: `${(heading.level - 1) * 12}px`,
            }}
          >
            <Link
              href={`#${heading.id}`}
              className={cn(
                "group relative block py-1.5 px-2 text-muted-foreground transition-all duration-300 rounded-md",
                "hover:text-foreground after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-0 after:bg-primary after:rounded-r after:transition-all after:duration-300 hover:after:h-4",
                activeId === heading.id &&
                  "text-primary font-medium after:h-6 after:bg-primary",
              )}
            >
              <span className="relative z-10">{heading.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
