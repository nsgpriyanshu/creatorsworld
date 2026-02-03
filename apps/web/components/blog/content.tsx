import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, AlertCircle, CheckCircle, XCircle, Info, Link2 } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { BlogBlock } from "../../lib/db/types";
import CodeBlock from "./code-block";

type Props = {
  blocks: BlogBlock[];
};

const BlogContent = ({ blocks }: Props) => {
  return (
    <>
      <Link href="/blog" className="mb-8 mt-2 inline-block">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>
      <div className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl px-4 md:px-0">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading": {
            switch (block.level) {
              case 1:
                return (
                  <h1
                    key={index}
                    id={`heading-${index}`}
                    className="mt-10 text-foreground text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl scroll-mt-24"
                  >
                    {block.text}
                  </h1>
                );

              case 2:
                return (
                  <h2
                    key={index}
                    id={`heading-${index}`}
                    className="mt-10 text-foreground text-balance text-3xl font-semibold leading-snug tracking-tight md:text-4xl scroll-mt-24"
                  >
                    {block.text}
                  </h2>
                );

              case 3:
                return (
                  <h3
                    key={index}
                    id={`heading-${index}`}
                    className="mt-8 text-foreground text-balance text-2xl font-semibold leading-snug md:text-3xl scroll-mt-24"
                  >
                    {block.text}
                  </h3>
                );

              case 4:
                return (
                  <h4
                    key={index}
                    id={`heading-${index}`}
                    className="mt-6 text-foreground text-xl font-semibold leading-snug md:text-2xl scroll-mt-24"
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
                className="mt-6 text-muted-foreground text-base leading-relaxed md:text-lg"
              >
                {block.text}
              </p>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="my-8 border-l-4 border-border pl-6 italic text-muted-foreground"
              >
                {block.text}
              </blockquote>
            );

          case "image":
            return (
              <figure key={index} className="my-10">
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  <Image
                    src={block.src}
                    alt={block.alt ?? ""}
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
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
              <CodeBlock
                key={index}
                code={block.code}
                language={block.language}
              />
            );

          case "link":
            return (
              <div key={index} className="mt-6">
                <a
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  {block.text}
                  <span className="text-sm"><Link2 className="h-4 w-4" /></span>
                </a>
              </div>
            );

          case "list":
            return (
              <div key={index} className="mt-6">
                {block.ordered ? (
                  <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-base leading-relaxed md:text-lg">
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-base leading-relaxed md:text-lg">
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
              info: "border-l-blue-500 bg-blue-50 dark:bg-blue-950/20",
              warning: "border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950/20",
              success: "border-l-green-500 bg-green-50 dark:bg-green-950/20",
              error: "border-l-red-500 bg-red-50 dark:bg-red-950/20",
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
                className={`mt-6 rounded-lg border-l-4 p-4 ${calloutStyles[block.variant]}`}
              >
                <div className="flex gap-3">
                  <div className={`${calloutIconColors[block.variant]} shrink-0`}>
                    {calloutIcons[block.variant]}
                  </div>
                  <p className="text-base leading-relaxed md:text-lg text-foreground">
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
    </>
  );
};

export default BlogContent;
