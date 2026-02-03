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
    <div className="mt-20 grid gap-6 border-t border-border pt-12 md:grid-cols-2">
      {/* Previous Article */}
      {previousPost ? (
        <Link href={`/blog/${previousPost.slug}`} className="group">
          <div className="flex flex-col gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowLeft className="h-4 w-4" />
              Previous
            </div>
            <h3 className="font-semibold text-foreground transition-colors group-hover:text-[#f10a0a] line-clamp-2">
              {previousPost.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1">
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
          <div className="flex flex-col gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50">
            <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
              Next
              <ArrowRight className="h-4 w-4" />
            </div>
            <h3 className="text-right font-semibold text-foreground transition-colors group-hover:text-[#f10a0a] line-clamp-2">
              {nextPost.title}
            </h3>
            <p className="text-right text-sm text-muted-foreground line-clamp-1">
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
