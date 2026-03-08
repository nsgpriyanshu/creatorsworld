"use client";

import Image from "next/image";
import { Badge } from "@repo/ui/components/ui/badge";
import { BlogPost } from "../../lib/db/types";
import { PenLine, Hourglass, Calendar, Clock2, Verified } from "lucide-react";
import { useState, useEffect } from 'react';

type Props = {
  post: BlogPost;
};

const BlogPostHeader = ({ post }: Props) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(new Date(post.published_at).toLocaleDateString());
  }, [post.published_at]);

  return (
    <header className="mx-auto mb-20 max-w-4xl px-4 text-center md:px-0">
      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-medium px-3 py-1">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed mb-8">
        {post.excerpt}
      </p>

      {/* Meta */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
        {/* Author */}
        <div className="flex items-center gap-4">
          <Image
            src={post.author.avatar_url}
            alt={post.author.name}
            width={48}
            height={48}
            className="rounded-full border border-border"
          />
          <div className="text-left">
            <div className="flex items-center gap-2 text-foreground">
              <Verified className="h-4 w-4 text-primary" />
              <span className="font-semibold">{post.author.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">{post.author.role}</p>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.published_at} className="font-medium">
            {formattedDate}
          </time>
        </div>

        {/* Reading time */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock2 className="h-4 w-4" />
          <span className="font-medium">{post.reading_time} min read</span>
        </div>
      </div>
    </header>
  );
};

export default BlogPostHeader;
