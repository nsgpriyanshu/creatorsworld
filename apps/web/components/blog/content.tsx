import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { BlogBlock } from "../../lib/db/types";

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
                    className="mt-10 text-foreground text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
                  >
                    {block.text}
                  </h1>
                );

              case 2:
                return (
                  <h2
                    key={index}
                    className="mt-10 text-foreground text-balance text-3xl font-semibold leading-snug tracking-tight md:text-4xl"
                  >
                    {block.text}
                  </h2>
                );

              case 3:
                return (
                  <h3
                    key={index}
                    className="mt-8 text-foreground text-balance text-2xl font-semibold leading-snug md:text-3xl"
                  >
                    {block.text}
                  </h3>
                );

              case 4:
                return (
                  <h4
                    key={index}
                    className="mt-6 text-foreground text-xl font-semibold leading-snug md:text-2xl"
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
              <pre
                key={index}
                className="my-8 overflow-x-auto rounded-2xl bg-muted p-5 text-sm leading-relaxed"
              >
                <code>{block.code}</code>
              </pre>
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
