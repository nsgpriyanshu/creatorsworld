"use client";

import BlogCard from "./card";
import { BlogPost } from "../../lib/db/types";

type Props = {
  posts: BlogPost[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <section className="overflow-x-hidden">
      <div className="w-full rounded-md border border-border p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
