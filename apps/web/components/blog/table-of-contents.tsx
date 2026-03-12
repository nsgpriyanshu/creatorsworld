"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BlogBlock } from "../../lib/db/types";
import { cn } from "@repo/ui/lib/utils";
import AnimationContainer from "../global/animation-container";

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
    <AnimationContainer animation="fadeUp">
      <nav className="rounded-md border border-border bg-background/70 backdrop-blur overflow-hidden">
        <div className="border-b border-dashed border-border px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Contents
        </div>

        <ul className="p-3 space-y-1.5">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ marginLeft: `${(heading.level - 1) * 12}px` }}
            >
              <Link
                href={`#${heading.id}`}
                className={cn(
                  "flex items-start gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  activeId === heading.id &&
                    "bg-muted/40 text-foreground font-medium",
                )}
              >
                <span
                  className={cn(
                    "mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/60 transition-colors",
                    activeId === heading.id && "bg-primary",
                  )}
                />
                <span className="leading-snug">{heading.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </AnimationContainer>
  );
};

export default TableOfContents;
