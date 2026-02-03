import { notFound } from "next/navigation";
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
