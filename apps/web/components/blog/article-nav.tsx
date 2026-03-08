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
    <nav className="mt-16 md:mt-24 border-t border-border pt-12">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Previous Article */}
        {previousPost ? (
          <Link href={`/blog/${previousPost.slug}`} className="group">
            <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-muted/30 hover:shadow-sm">
              <ArrowLeft className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Previous
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
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
            <div className="flex items-start justify-end gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-muted/30 hover:shadow-sm">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Next</div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {nextPost.title}
                </h3>
              </div>
              <ArrowRight className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
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
