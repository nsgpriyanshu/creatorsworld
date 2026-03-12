"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  Link2,
} from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { BlogBlock } from "../../lib/db/types";
import CodeBlock from "./code-block";

type Props = {
  blocks: BlogBlock[];
};

const BlogContent = ({ blocks }: Props) => {
  return (
    <div className="w-full rounded-md border border-border overflow-hidden">
      {/* Back Button */}
      <div className="border-b border-dashed border-border p-4">
        <Link href="/blog" className="inline-block group">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Button>
        </Link>
      </div>

      <div className="p-6 md:p-8">
        {blocks.map((block, index) => {
          switch (block.type) {
            case "heading": {
              const getHeadingClass = (level: number) => {
                const baseClass =
                  "text-foreground font-semibold tracking-tight scroll-mt-24";
                const marginClass = "mt-10 md:mt-12";

                switch (level) {
                  case 1:
                    return `${marginClass} ${baseClass} text-balance text-3xl sm:text-4xl md:text-5xl leading-tight`;
                  case 2:
                    return `${marginClass} pt-2 ${baseClass} text-balance text-2xl sm:text-3xl md:text-4xl leading-snug border-t border-border/30 pb-2`;
                  case 3:
                    return `mt-8 md:mt-10 ${baseClass} text-balance text-xl sm:text-2xl md:text-3xl leading-snug`;
                  case 4:
                    return `mt-6 md:mt-8 ${baseClass} text-lg sm:text-xl md:text-2xl leading-snug`;
                  default:
                    return `${marginClass} ${baseClass} text-xl`;
                }
              };

              return React.createElement(
                `h${block.level}` as any,
                {
                  key: index,
                  id: `heading-${index}`,
                  className: getHeadingClass(block.level),
                },
                block.text,
              );
            }

            case "paragraph":
              return (
                <p
                  key={index}
                  className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed"
                >
                  {block.text}
                </p>
              );

            case "image":
              return (
                <figure key={index} className="my-8">
                  <div className="relative aspect-video overflow-hidden rounded-md border border-border">
                    <Image
                      src={block.src}
                      alt={block.alt ?? ""}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {block.alt && (
                    <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                      {block.alt}
                    </figcaption>
                  )}
                </figure>
              );

            case "code":
              return (
                <div key={index} className="my-8">
                  <CodeBlock code={block.code} language={block.language} />
                </div>
              );

            case "quote":
              return (
                <blockquote
                  key={index}
                  className="my-8 border-l-2 border-border pl-4 italic text-muted-foreground"
                >
                  {block.text}
                </blockquote>
              );

            case "link":
              return (
                <a
                  key={index}
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary mt-6"
                >
                  <Link2 className="h-4 w-4" />
                  {block.text}
                </a>
              );

            case "list":
              return (
                <div
                  key={index}
                  className="mt-8 rounded-md border border-dashed border-border p-4"
                >
                  {block.ordered ? (
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );

            case "callout":
              const icons = {
                info: <Info className="h-5 w-5" />,
                warning: <AlertCircle className="h-5 w-5" />,
                success: <CheckCircle className="h-5 w-5" />,
                error: <XCircle className="h-5 w-5" />,
              };

              return (
                <div
                  key={index}
                  className="mt-8 flex gap-3 rounded-md border border-dashed border-border p-4"
                >
                  <div className="text-muted-foreground">
                    {icons[block.variant]}
                  </div>
                  <p className="text-muted-foreground">{block.text}</p>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default BlogContent;
