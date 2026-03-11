"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BlogBlock } from "../../lib/db/types";
import { cn } from "@repo/ui/lib/utils";

type Heading = {
  id: string;
  text: string;
  level: number;
};

type Props = {
  blocks: BlogBlock[];
};

const TableOfContents = ({ blocks }: Props) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const extracted = blocks
      .filter((b) => b.type === "heading")
      .map((b, i) => ({
        id: `heading-${i}`,
        text: (b as any).text,
        level: (b as any).level,
      }));

    setHeadings(extracted);
  }, [blocks]);

  if (!headings.length) return null;

  return (
    <nav className="sticky top-8 rounded-md border border-border overflow-hidden">
      <div className="border-b border-dashed border-border p-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        On this page
      </div>

      <ul className="p-3 space-y-1">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: `${(heading.level - 1) * 12}px` }}
          >
            <Link
              href={`#${heading.id}`}
              className={cn(
                "block px-2 py-1 rounded-md text-muted-foreground hover:text-foreground transition",
                activeId === heading.id && "text-primary font-medium",
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
