"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@repo/ui/components/ui/badge";
import { BlogPost } from "../../lib/db/types";
import { Calendar, Clock2 } from "lucide-react";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";

type Props = {
  post: BlogPost;
};

const BlogCard = ({ post }: Props) => {
  return (
    <AnimationContainer animation="fadeUp">
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-muted/20 transition-colors hover:bg-muted/40">
          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden rounded-t-2xl">
            <Image
              src={post.thumbnail_url}
              alt={post.title}
              className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
              width={400}
              height={300}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-4">
            <div>
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

              <h3 className="text-base font-semibold text-primary transition-colors duration-300 group-hover:text-secondary line-clamp-2">
                {post.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {post.excerpt}
              </p>
            </div>

            {/* Meta */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              {/* Author */}
              <div className="flex items-center gap-1.5">
                <Image
                  src={post.author.avatar_url}
                  alt={post.author.name}
                  width={24}
                  height={24}
                  className="rounded-full border border-border"
                />
                <span className="font-medium text-foreground truncate">
                  {post.author.name}
                </span>
              </div>

              {/* Published date */}
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
          </div>
        </article>
      </Link>
    </AnimationContainer>
  );
};

export default BlogCard;
