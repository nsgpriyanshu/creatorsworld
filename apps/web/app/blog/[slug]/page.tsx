import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogContent from "../../../components/blog/content";
import BlogPostHeader from "../../../components/blog/post-header";
import { getPostBySlug } from "../../../lib/db/queries";
import Wrapper from "../../../components/global/wrapper";
import { Separator } from "@repo/ui/components/ui/separator";

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
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.seo_title || post.title,
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

  return (
    <Wrapper className="relative py-20 lg:py-32">
      <BlogPostHeader post={post} />
      <Separator />
      <BlogContent blocks={post.content} />
    </Wrapper>
  );
}
