import Image from "next/image";
import { Badge } from "@repo/ui/components/ui/badge";
import { BlogPost } from "../../lib/db/types";
import { PenLine, Hourglass, Calendar, Clock2, Verified } from "lucide-react";

type Props = {
  post: BlogPost;
};

const BlogPostHeader = ({ post }: Props) => {
  return (
    <header className="mx-auto mb-16 max-w-3xl px-4 text-center md:px-0">
      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-primary mb-4">{post.title}</h1>

      {/* Excerpt */}
      <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
        {post.excerpt}
      </p>

      {/* Meta */}
      <div className="mt-8 flex flex-col items-center gap-4 text-sm text-muted-foreground sm:flex-row sm:justify-center">
        {/* Author */}
        <div className="flex items-center gap-3">
          <Image
            src={post.author.avatar_url}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full border border-border"
          />
          <div className="text-left">
            <div className="flex items-center gap-1 text-foreground">
              <Verified className="h-4 w-4" />
              <span className="font-medium">{post.author.name}</span>
            </div>
            <p className="text-xs">{post.author.role}</p>
          </div>
        </div>

        {/* Divider */}
        <span className="hidden sm:inline">·</span>

        {/* Date */}
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.published_at}>
            {new Date(post.published_at).toLocaleDateString()}
          </time>
        </div>

        {/* Reading time */}
        <span className="hidden sm:inline">·</span>

        <div className="flex items-center gap-1">
          <Clock2 className="h-4 w-4" />
          <span>{post.reading_time} min read</span>
        </div>
      </div>
    </header>
  );
};

export default BlogPostHeader;
