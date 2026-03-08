"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { BlogPost } from "../../lib/db/types";
import { Calendar, Clock2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import AnimationContainer from "../global/animation-container";

type Props = {
  post: BlogPost;
};

const FALLBACK_IMAGE = "/assets/brand/logo-dark-1024x1024.png";

const BlogCard = ({ post }: Props) => {
  const [imgSrc, setImgSrc] = React.useState(
    post.thumbnail_url && post.thumbnail_url.trim() !== ""
      ? post.thumbnail_url
      : FALLBACK_IMAGE,
  );
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate(new Date(post.published_at).toLocaleDateString());
  }, [post.published_at]);

  return (
    <AnimationContainer animation="fadeUp">
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="flex flex-col overflow-hidden rounded-xl border border-border/50 bg-background transition-all duration-300 hover:shadow-lg hover:shadow-muted/20 hover:border-border">
          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden rounded-t-xl">
            <Image
              src={imgSrc}
              alt={post.title}
              width={400}
              height={300}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgSrc(FALLBACK_IMAGE)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-6">
            <div>
              {/* Tags */}
              <div className="mb-3 flex flex-wrap gap-1.5">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-2 py-0.5 text-xs font-medium"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h3 className="line-clamp-2 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-3 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Meta */}
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                {/* Author */}
                <div className="flex items-center gap-2">
                  <Image
                    src={post.author.avatar_url || FALLBACK_IMAGE}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="rounded-full border border-border"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        FALLBACK_IMAGE;
                    }}
                  />
                  <span className="font-medium text-foreground">
                    {post.author.name}
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <time dateTime={post.published_at}>{formattedDate}</time>
                </div>
              </div>

              {/* Reading time */}
              <div className="flex items-center gap-1">
                <Clock2 className="h-3 w-3" />
                <span>{post.reading_time} min</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </AnimationContainer>
  );
};

export default BlogCard;
