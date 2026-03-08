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
    <nav className="mt-12 md:mt-24 border-t border-border pt-8 md:pt-12">
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
        {/* Previous Article */}
        {previousPost ? (
          <Link href={`/blog/${previousPost.slug}`} className="group">
            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg transition-all duration-300 hover:bg-muted/30">
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 mt-1 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs md:text-sm text-muted-foreground mb-1">
                  Previous
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {previousPost.title}
                </h3>
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {/* Next Article */}
        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="group md:text-right">
            <div className="flex items-start justify-start md:justify-end gap-3 md:gap-4 p-3 md:p-4 rounded-lg transition-all duration-300 hover:bg-muted/30">
              <div className="min-w-0">
                <div className="text-xs md:text-sm text-muted-foreground mb-1">
                  Next
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {nextPost.title}
                </h3>
              </div>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 mt-1 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
};

export default ArticleNav;
