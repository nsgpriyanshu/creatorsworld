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
    <nav className="space-y-4">
      <div className="text-sm font-semibold text-foreground">On this page</div>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{
              marginLeft: `${(heading.level - 1) * 12}px`,
            }}
          >
            <a
              href={`#${heading.id}`}
              className={cn(
                "inline-block text-muted-foreground transition-colors duration-200 hover:text-foreground break-words max-w-full",
                activeId === heading.id && "text-[#f10a0a] font-medium",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
