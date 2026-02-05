"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { BlogPost } from "../../lib/db/types";
import { Calendar, Clock2, ArrowRight } from "lucide-react";
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

  return (
    <AnimationContainer animation="fadeUp">
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-muted/20 transition-colors hover:bg-muted/40">
          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden rounded-t-2xl">
            <Image
              src={imgSrc}
              alt={post.title}
              width={400}
              height={300}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImgSrc(FALLBACK_IMAGE)}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-4">
            <div>
              {/* Tags */}
              <div className="mb-2 flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="px-2 py-0.5 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h3 className="line-clamp-2 text-base font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {post.excerpt}
              </p>
            </div>

            {/* Meta */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              {/* Author */}
              <div className="flex items-center gap-1.5">
                <Image
                  src={post.author.avatar_url || FALLBACK_IMAGE}
                  alt={post.author.name}
                  width={24}
                  height={24}
                  className="rounded-full border border-border"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
                  }}
                />
                <span className="truncate font-medium text-foreground">
                  {post.author.name}
                </span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <time dateTime={post.published_at}>
                  {new Date(post.published_at).toLocaleDateString()}
                </time>
              </div>

              {/* Reading time */}
              <div className="flex items-center gap-1">
                <Clock2 className="h-3 w-3" />
                <span>{post.reading_time} min</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-4 border-t border-border pt-4">
              <Button className="group w-full">
                Read Blog
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </article>
      </Link>
    </AnimationContainer>
  );
};

export default BlogCard;
