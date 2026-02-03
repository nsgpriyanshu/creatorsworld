"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@repo/ui/components/ui/button";
import { BlogPost } from "../../lib/db/types";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ArticleNavProps = {
  previousPost?: BlogPost | null;
  nextPost?: BlogPost | null;
};

const ArticleNav = ({ previousPost, nextPost }: ArticleNavProps) => {
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <div className="mt-12 md:mt-20 grid gap-4 md:gap-6 border-t border-border pt-8 md:pt-12 md:grid-cols-2">
      {/* Previous Article */}
      {previousPost ? (
        <Link href={`/blog/${previousPost.slug}`} className="group">
          <div className="flex flex-col gap-2 md:gap-3 rounded-lg border border-border p-3 md:p-4 transition-colors hover:bg-muted/50 active:bg-muted/70">
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 shrink-0" />
              <span>Previous</span>
            </div>
            <h3 className="font-semibold text-sm md:text-base text-foreground transition-colors group-hover:text-[#f10a0a] line-clamp-2">
              {previousPost.title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
              {previousPost.excerpt}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {/* Next Article */}
      {nextPost ? (
        <Link href={`/blog/${nextPost.slug}`} className="group md:col-start-2">
          <div className="flex flex-col gap-2 md:gap-3 rounded-lg border border-border p-3 md:p-4 transition-colors hover:bg-muted/50 active:bg-muted/70">
            <div className="flex items-center justify-end gap-2 text-xs md:text-sm text-muted-foreground">
              <span>Next</span>
              <ArrowRight className="h-3 w-3 md:h-4 md:w-4 shrink-0" />
            </div>
            <h3 className="text-right font-semibold text-sm md:text-base text-foreground transition-colors group-hover:text-[#f10a0a] line-clamp-2">
              {nextPost.title}
            </h3>
            <p className="text-right text-xs md:text-sm text-muted-foreground line-clamp-2">
              {nextPost.excerpt}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default ArticleNav;
