import Image from "next/image";
import { BlogBlock } from "../../lib/db/types";

type Props = {
  blocks: BlogBlock[];
};

const BlogContent = ({ blocks }: Props) => {
  return (
    <div className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl px-4 md:px-0">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return block.level === 2 ? (
              <h2 key={index} className="mt-12 scroll-mt-24 text-primary">
                {block.text}
              </h2>
            ) : (
              <h3 key={index} className="mt-8 scroll-mt-24 text-secondary">
                {block.text}
              </h3>
            );

          case "paragraph":
            return (
              <p key={index} className="mt-6 leading-relaxed">
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
                className="my-8 overflow-x-auto rounded-2xl bg-muted p-5 text-sm"
              >
                <code>{block.code}</code>
              </pre>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogContent;
