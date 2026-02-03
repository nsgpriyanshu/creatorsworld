"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@repo/ui/components/ui/badge";
import { BlogPost } from "../../lib/db/types";
import { Calendar, Clock2, Star } from "lucide-react";
import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

type Props = {
  post: BlogPost;
};

const FeaturedBlogCard = ({ post }: Props) => {
  return (
    <Wrapper className="relative pb-20 lg:pb-32">
      {/* Glow Effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(241,10,10,0.15)_0%,rgba(241,10,10,0)_70%)] blur-3xl" />

      <AnimationContainer animation="scaleUp" delay={0.1}>
        <Link href={`/blog/${post.slug}`} className="group block">
          <article className="relative overflow-hidden rounded-3xl border border-border/50 bg-linear-to-br from-muted/60 to-muted/30 p-6 shadow-lg transition-all duration-300  md:grid md:grid-cols-2 md:gap-8">
            {/* Featured Badge */}
            <div className="absolute top-1 right-6 z-10">
              <Badge className="bg-linear-to-r from-[#f10a0a] to-[#ff4444] text-neutral-fill-neutral-50 border-0 flex items-center gap-1 px-3 py-1">
                <Star className="h-3 w-3 dark:fill-neutral-50 fill-neutral-950" />
                Featured
              </Badge>
            </div>

            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden rounded-2xl md:row-span-2">
              <Image
                src={post.thumbnail_url}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
                width={600}
                height={400}
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between mt-6 md:mt-0">
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="px-2 py-1 text-xs "
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-[#f10a0a] line-clamp-3">
                  {post.title}
                </h2>

                <p className="mt-4 line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Meta */}
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                {/* Author */}
                <div className="flex items-center gap-2">
                  <Image
                    src={post.author.avatar_url}
                    alt={post.author.name}
                    width={36}
                    height={36}
                    className="rounded-full border-2 object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground text-xs">
                      By
                    </span>
                    <span className="font-semibold text-foreground">
                      {post.author.name}
                    </span>
                  </div>
                </div>

                {/* Published date */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-muted/40">
                  <Calendar className="h-4 w-4 " />
                  <time dateTime={post.published_at} className="font-medium">
                    {new Date(post.published_at).toLocaleDateString()}
                  </time>
                </div>

                {/* Reading time */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-muted/40">
                  <Clock2 className="h-4 w-4 " />
                  <span className="font-medium">
                    {post.reading_time} min read
                  </span>
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
