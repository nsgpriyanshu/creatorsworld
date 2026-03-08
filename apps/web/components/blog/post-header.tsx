"use client";

import Image from "next/image";
import { Badge } from "@repo/ui/components/ui/badge";
import { BlogPost } from "../../lib/db/types";
import { PenLine, Hourglass, Calendar, Clock2, Verified } from "lucide-react";
import { useState, useEffect } from "react";

type Props = {
  post: BlogPost;
};

const BlogPostHeader = ({ post }: Props) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate(new Date(post.published_at).toLocaleDateString());
  }, [post.published_at]);

  return (
    <header className="mx-auto mb-16 max-w-4xl px-0 pt-12 pb-8 text-center">
      {/* Tags with enhanced styling */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {post.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="text-xs font-medium px-3 py-1 border-border bg-background/50 text-foreground"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4 tracking-tight">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
        {post.excerpt}
      </p>

      {/* Meta - Minimal layout */}
      <div className="flex flex-col items-center gap-2 sm:gap-3 sm:flex-row sm:justify-center sm:gap-4 text-xs sm:text-sm">
        {/* Author */}
        <div className="flex items-center gap-2">
          <Image
            src={post.author.avatar_url}
            alt={post.author.name}
            width={32}
            height={32}
            className="rounded-full border border-border"
          />
          <div>
            <span className="font-semibold text-foreground">
              {post.author.name}
            </span>
            <span className="text-muted-foreground mx-1">•</span>
            <span className="text-muted-foreground">{post.author.role}</span>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.published_at}>{formattedDate}</time>
        </div>

        {/* Reading time */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock2 className="h-4 w-4" />
          <span>{post.reading_time} min read</span>
        </div>
      </div>
    </header>
  );
};

export default BlogPostHeader;
