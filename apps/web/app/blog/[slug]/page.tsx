import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogContent from "../../../components/blog/content";
import BlogPostHeader from "../../../components/blog/post-header";
import TableOfContents from "../../../components/blog/table-of-contents";
import ArticleNav from "../../../components/blog/article-nav";
import {
  getPostBySlug,
  getPreviousPost,
  getNextPost,
} from "../../../lib/db/queries";
import Wrapper from "../../../components/global/wrapper";
import Link from "next/link";
import { ChevronDown, ChevronRight, Home } from "lucide-react";
import {
  absoluteUrl,
  createMetadata,
  siteConfig,
} from "../../../utils/metadata";

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
    return createMetadata({
      title: "Post Not Found | Creator's World",
      description: "The article you are looking for could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: post.seo_title || `${post.title} | Creator's World`,
    description: post.seo_description || post.excerpt,
    path: `/blog/${slug}`,
    image: post.seo_image || post.thumbnail_url,
    keywords: post.tags,
    type: "article",
    publishedTime: post.published_at,
    modifiedTime: post.updated_at || post.published_at,
    authors: [{ name: post.author.name }],
  });
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
  const articleUrl = absoluteUrl(`/blog/${slug}`);
  const articleImage = absoluteUrl(post.seo_image || post.thumbnail_url);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo_description || post.excerpt,
    image: [articleImage],
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icons/light/android-chrome-512x512.png"),
      },
    },
    mainEntityOfPage: articleUrl,
    keywords: post.tags.join(", "),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <Wrapper className="relative overflow-x-hidden py-12 lg:py-16 px-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Breadcrumb */}
      <div className="px-4 lg:px-0">
        <nav className="mx-auto mt-12 md:mt-0 flex max-w-6xl flex-wrap items-center justify-center gap-2 text-xs md:justify-start md:text-sm">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            <Home className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1.5 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            Blog
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="inline-flex max-w-full items-center rounded-full border border-border bg-muted/40 px-3 py-1.5 text-foreground">
            <span className="truncate">{post.title}</span>
          </span>
        </nav>
      </div>

      {/* Header */}
      <div className="mt-6 px-4 lg:px-0">
        <div className="mx-auto max-w-6xl">
          <BlogPostHeader post={post} />
        </div>
      </div>
      <div className="my-8 md:my-10 h-px bg-border/60" />

      {/* Mobile TOC - visible on small screens */}
      <div className="lg:hidden mb-8 px-4 lg:px-0">
        <details className="group mx-auto max-w-6xl">
          <summary className="flex items-center justify-between rounded-md border border-border bg-background/70 px-4 py-2.5 backdrop-blur transition-colors hover:bg-muted/40">
            <span className="text-sm font-semibold text-foreground">
              Table of Contents
            </span>
            <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
          </summary>
          <div className="mt-3">
            <TableOfContents blocks={post.content} />
          </div>
        </details>
      </div>

      {/* Two-column layout */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:gap-10 lg:grid-cols-4 px-4 lg:px-0">
        {/* Main Content - 3 cols */}
        <div className="lg:col-span-3 overflow-hidden">
          <BlogContent blocks={post.content} />
        </div>

        {/* Sidebar - 1 col (sticky on desktop) */}
        <aside className="lg:col-span-1 hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents blocks={post.content} />
          </div>
        </aside>
      </div>

      {/* Article Navigation */}
      <div className="px-4 lg:px-0">
        <div className="mx-auto max-w-6xl">
          <ArticleNav previousPost={previousPost} nextPost={nextPost} />
        </div>
      </div>
    </Wrapper>
  );
}
