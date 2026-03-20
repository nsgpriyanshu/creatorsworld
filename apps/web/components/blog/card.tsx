"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { BlogPost } from "../../lib/db/types";
import { Calendar, Clock2, ArrowRight } from "lucide-react";
import { useState } from "react";
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
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(post.published_at));

  return (
    <AnimationContainer animation="fadeUp">
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="flex flex-col overflow-hidden rounded-2xl border border-border/20 bg-background transition-colors duration-300 hover:bg-muted/10">
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
          <div className="flex flex-col justify-between p-4 md:p-6">
            <div>
              {/* Tags */}
              <div className="mb-2 md:mb-3 flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((tag) => (
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

              {/* Title */}
              <h3 className="line-clamp-2 text-base md:text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-2 md:mt-3 line-clamp-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Meta */}
            <div className="mt-4 md:mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2 md:gap-4 min-w-0">
                {/* Author */}
                <div className="flex items-center gap-1.5 md:gap-2 min-w-0">
                  <Image
                    src={post.author.avatar_url || FALLBACK_IMAGE}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="rounded-full border border-border flex-shrink-0"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        FALLBACK_IMAGE;
                    }}
                  />
                  <span className="font-medium text-foreground truncate text-xs md:text-sm">
                    {post.author.name}
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <Calendar className="h-3 w-3 flex-shrink-0" />
                  <time dateTime={post.published_at} className="text-xs">
                    {formattedDate}
                  </time>
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
