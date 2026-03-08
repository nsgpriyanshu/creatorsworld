"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@repo/ui/components/ui/badge";
import { BlogPost } from "../../lib/db/types";
import { Calendar, Clock2, Star } from "lucide-react";
import { useState, useEffect } from "react";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

type Props = {
  post: BlogPost;
};

const FeaturedBlogCard = ({ post }: Props) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate(new Date(post.published_at).toLocaleDateString());
  }, [post.published_at]);

  return (
    <Wrapper className="relative pb-16 lg:pb-24">
      <AnimationContainer animation="scaleUp" delay={0.1}>
        <Link href={`/blog/${post.slug}`} className="group block">
          <article className="relative overflow-hidden rounded-2xl border border-border/50 bg-background shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-muted/10 hover:border-border md:grid md:grid-cols-2 md:gap-8">
            {/* Featured Badge */}
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-primary text-primary-foreground border-0 px-3 py-1 text-xs font-medium">
                <Star className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            </div>

            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-t-none md:row-span-2">
              <Image
                src={post.thumbnail_url}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-6 md:p-8">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="px-2 py-1 text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary line-clamp-3 leading-tight">
                  {post.title}
                </h2>

                <p className="mt-4 line-clamp-3 text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Meta */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <Image
                    src={post.author.avatar_url}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full border border-border object-cover"
                  />
                  <div>
                    <span className="text-xs text-muted-foreground">By</span>
                    <p className="font-semibold text-foreground">
                      {post.author.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {/* Published date */}
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.published_at} className="font-medium">
                      {formattedDate}
                    </time>
                  </div>

                  {/* Reading time */}
                  <div className="flex items-center gap-1.5">
                    <Clock2 className="h-4 w-4" />
                    <span className="font-medium">{post.reading_time} min</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Link>
      </AnimationContainer>
    </Wrapper>
  );
};

export default FeaturedBlogCard;
