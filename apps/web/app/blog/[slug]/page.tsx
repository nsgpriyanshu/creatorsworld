import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogContent from "../../../components/blog/content";
import BlogPostHeader from "../../../components/blog/post-header";
import TableOfContents from "../../../components/blog/table-of-contents";
import ArticleNav from "../../../components/blog/article-nav";
import { getPostBySlug, getPreviousPost, getNextPost } from "../../../lib/db/queries";
import Wrapper from "../../../components/global/wrapper";
import { Separator } from "@repo/ui/components/ui/separator";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.seo_title || `${post.title} | Creators World`,
    description: post.seo_description || post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.seo_title || `${post.title} | Creators World`,
      description: post.seo_description || post.excerpt,
      type: "article",
      publishedTime: post.published_at,
      authors: [post.author.name],
      images: [
        {
          url: post.seo_image || post.thumbnail_url,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt,
      images: [post.seo_image || post.thumbnail_url],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get previous and next posts for navigation
  const [previousPost, nextPost] = await Promise.all([
    getPreviousPost(post.published_at),
    getNextPost(post.published_at),
  ]);

  return (
    <>
      {/* Breadcrumb */}
      <Wrapper className="py-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground truncate">{post.title}</span>
        </div>
      </Wrapper>

      <Wrapper className="relative py-8 lg:py-12">
        {/* Header */}
        <BlogPostHeader post={post} />
        <Separator className="my-12" />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Main Content - 3 cols */}
          <div className="lg:col-span-3">
            <BlogContent blocks={post.content} />
          </div>

          {/* Sidebar - 1 col (sticky on desktop) */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-12">
              {/* Table of Contents */}
              <div className="hidden lg:block border-l border-border pl-6">
                <TableOfContents blocks={post.content} />
              </div>
            </div>
          </aside>
        </div>

        {/* Article Navigation */}
        <ArticleNav previousPost={previousPost} nextPost={nextPost} />
      </Wrapper>
    </>
  );
}
