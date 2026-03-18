"use client";

import Image from "next/image";
import { Badge } from "@repo/ui/components/ui/badge";
import { BlogPost } from "../../lib/db/types";
import { Calendar, Clock2 } from "lucide-react";
import { useState, useEffect } from "react";
import AnimationContainer from "../global/animation-container";

type Props = {
  post: BlogPost;
};

const BlogPostHeader = ({ post }: Props) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate(new Date(post.published_at).toLocaleDateString());
  }, [post.published_at]);

  return (
    <header className="mb-8 md:mb-10 w-full rounded-md border border-border overflow-hidden">
      {/* Tags */}
      <AnimationContainer animation="fadeDown">
        <div className="flex flex-wrap justify-center gap-2 border-b border-dashed border-border p-4">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="group relative overflow-hidden border-border bg-background/70 px-2 py-0.5 text-xs font-medium backdrop-blur-md"
            >
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              <span className="relative bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                {tag}
              </span>
            </Badge>
          ))}
        </div>
      </AnimationContainer>

      {/* Title */}
      <AnimationContainer animation="fadeUp" delay={0.15}>
        <div className="border-b border-dashed border-border px-6 py-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            {post.title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            {post.excerpt}
          </p>
        </div>
      </AnimationContainer>

      {/* Meta */}
      <AnimationContainer animation="fadeUp" delay={0.3}>
        <div className="flex flex-wrap justify-center items-center gap-4 p-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.avatar_url}
              alt={post.author.name}
              width={28}
              height={28}
              className="rounded-full border border-border"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-foreground">{post.author.name}</span>
              <span className="text-xs text-muted-foreground">
                {post.author.role}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formattedDate}
          </div>

          <div className="flex items-center gap-1">
            <Clock2 className="h-4 w-4" />
            {post.reading_time} min read
          </div>
        </div>
      </AnimationContainer>
    </header>
  );
};

export default BlogPostHeader;
