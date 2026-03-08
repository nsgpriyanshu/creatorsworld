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
    <>
      <Link href="/blog" className="mb-12 inline-block group">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors duration-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Blog
        </Button>
      </Link>
      <div className="mx-auto max-w-4xl px-0 overflow-hidden">
        {blocks.map((block, index) => {
          switch (block.type) {
            case "heading": {
              switch (block.level) {
                case 1:
                  return (
                    <h1
                      key={index}
                      id={`heading-${index}`}
                      className="mt-10 text-foreground text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight scroll-mt-24"
                    >
                      {block.text}
                    </h1>
                  );

                case 2:
                  return (
                    <h2
                      key={index}
                      id={`heading-${index}`}
                      className="mt-10 md:mt-12 pt-2 text-foreground text-balance text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug tracking-tight scroll-mt-24 border-t border-border/30 pb-2"
                    >
                      {block.text}
                    </h2>
                  );

                case 3:
                  return (
                    <h3
                      key={index}
                      id={`heading-${index}`}
                      className="mt-8 md:mt-10 text-foreground text-balance text-xl sm:text-2xl md:text-3xl font-semibold leading-snug scroll-mt-24"
                    >
                      {block.text}
                    </h3>
                  );

                case 4:
                  return (
                    <h4
                      key={index}
                      id={`heading-${index}`}
                      className="mt-6 md:mt-8 text-foreground text-lg sm:text-xl md:text-2xl font-semibold leading-snug scroll-mt-24"
                    >
                      {block.text}
                    </h4>
                  );

                default:
                  return null;
              }
            }

            case "paragraph":
              return (
                <p
                  key={index}
                  className="mt-6 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed"
                >
                  {block.text}
                </p>
              );

            case "quote":
              return (
                <blockquote
                  key={index}
                  className="my-6 md:my-8 border-l-4 border-primary pl-4 md:pl-6 py-2 italic text-muted-foreground bg-muted/30 rounded-r-lg"
                >
                  {block.text}
                </blockquote>
              );

            case "image":
              return (
                <figure key={index} className="my-8 md:my-10">
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/30 w-full">
                    <Image
                      src={block.src}
                      alt={block.alt ?? ""}
                      fill
                      sizes="(min-width: 1024px) 704px, (min-width: 768px) 672px, (min-width: 640px) 576px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  {block.alt && (
                    <figcaption className="mt-4 text-center text-sm font-medium text-muted-foreground">
                      {block.alt}
                    </figcaption>
                  )}
                </figure>
              );

            case "code":
              return (
                <CodeBlock
                  key={index}
                  code={block.code}
                  language={block.language}
                />
              );

            case "link":
              return (
                <div key={index} className="mt-4 md:mt-6 mb-4 md:mb-6">
                  <a
                    href={block.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 break-words transition-colors duration-200 text-sm sm:text-base"
                  >
                    <Link2 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="underline underline-offset-2">
                      {block.text}
                    </span>
                  </a>
                </div>
              );

            case "list":
              return (
                <div
                  key={index}
                  className="mt-8 mb-6 p-3 md:p-5 rounded-lg bg-card border border-border/30"
                >
                  {block.ordered ? (
                    <ol className="space-y-2 md:space-y-3 list-decimal list-outside pl-6 text-muted-foreground">
                      {block.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-sm md:text-base md:text-lg leading-relaxed break-words marker:text-primary marker:font-semibold"
                        >
                          {item}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="space-y-2 md:space-y-3 list-disc list-outside pl-6 text-muted-foreground">
                      {block.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-sm md:text-base md:text-lg leading-relaxed break-words marker:text-primary"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );

            case "callout":
              const calloutIcons = {
                info: <Info className="h-5 w-5" />,
                warning: <AlertCircle className="h-5 w-5" />,
                success: <CheckCircle className="h-5 w-5" />,
                error: <XCircle className="h-5 w-5" />,
              };

              const calloutStyles: Record<string, string> = {
                info: "border-l-blue-500/50 bg-blue-50/50 dark:bg-blue-950/20",
                warning:
                  "border-l-yellow-500/50 bg-yellow-50/50 dark:bg-yellow-950/20",
                success:
                  "border-l-green-500/50 bg-green-50/50 dark:bg-green-950/20",
                error: "border-l-red-500/50 bg-red-50/50 dark:bg-red-950/20",
              };

              const calloutIconColors: Record<string, string> = {
                info: "text-blue-500",
                warning: "text-yellow-500",
                success: "text-green-500",
                error: "text-red-500",
              };

              return (
                <div
                  key={index}
                  className={`mt-8 rounded-lg border-l-4 border-border/60 p-3 md:p-6 ${calloutStyles[block.variant]}`}
                >
                  <div className="flex gap-2 md:gap-4">
                    <div
                      className={`${calloutIconColors[block.variant]} shrink-0 mt-0.5`}
                    >
                      {calloutIcons[block.variant]}
                    </div>
                    <p className="text-sm md:text-base md:text-lg leading-relaxed text-muted-foreground break-words">
                      {block.text}
                    </p>
                  </div>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
      {/* Footer spacing */}
      <div className="mt-20 pt-12 border-t border-border/30" />
    </>
  );
};

export default BlogContent;
