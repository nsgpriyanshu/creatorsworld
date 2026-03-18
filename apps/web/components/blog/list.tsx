"use client";

import BlogCard from "./card";
import { BlogPost } from "../../lib/db/types";
import AnimationContainer from "../global/animation-container";

type Props = {
  posts: BlogPost[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <section className="overflow-x-hidden">
      <AnimationContainer animation="fadeUp">
        <div className="w-full rounded-md border border-border p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </AnimationContainer>
    </section>
  );
};

export default BlogList;
