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
    <nav className="sticky top-8 space-y-6">
      <div className="text-sm font-semibold text-foreground uppercase tracking-wide">
        Table of Contents
      </div>
      <ul className="space-y-3 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{
              marginLeft: `${(heading.level - 1) * 16}px`,
            }}
          >
            <Link
              href={`#${heading.id}`}
              className={cn(
                "block py-1 text-muted-foreground transition-all duration-200 hover:text-foreground hover:translate-x-1 border-l-2 border-transparent hover:border-primary/50",
                activeId === heading.id && "text-primary font-medium border-primary translate-x-1",
              )}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
