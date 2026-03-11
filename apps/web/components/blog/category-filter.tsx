"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Badge } from "@repo/ui/components/ui/badge";
import { Filter } from "lucide-react";

import AnimationContainer from "../global/animation-container";
import { supabase } from "../../lib/supabase/client";

interface Category {
  id: string;
  label: string;
}

interface CategoryFilterProps {
  onCategoryChange?: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  onCategoryChange,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams?.get("category") || "all";

  const [categories, setCategories] = useState<Category[]>([
    { id: "all", label: "All Posts" },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data: blogs, error } = await supabase
          .from("blogs")
          .select("tags")
          .eq("status", "published");

        if (error) throw error;

        const uniqueTags = new Set<string>();

        blogs?.forEach((blog) => {
          if (blog.tags && Array.isArray(blog.tags)) {
            blog.tags.forEach((tag: string) => {
              uniqueTags.add(tag);
            });
          }
        });

        const fetchedCategories: Category[] = [
          { id: "all", label: "All Posts" },
          ...Array.from(uniqueTags)
            .sort()
            .map((tag) => ({
              id: tag.toLowerCase().replace(/\s+/g, "-"),
              label: tag.charAt(0).toUpperCase() + tag.slice(1),
            })),
        ];

        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([{ id: "all", label: "All Posts" }]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    const params = new URLSearchParams();

    if (categoryId !== "all") {
      params.set("category", categoryId);
    }

    const query = params.toString();
    router.push(query ? `/blog?${query}` : "/blog");
    onCategoryChange?.(categoryId);
  };

  return (
    <div className="overflow-x-hidden">
      {" "}
      <AnimationContainer animation="fadeUp">
        {" "}
        <div className="w-full rounded-md border border-border">
          {/* Badge */}
          <div className="flex justify-center border-b border-dashed border-border p-3 md:p-4">
            <Badge
              variant="outline"
              className="group relative overflow-hidden border-border bg-background/70 px-3 py-1.5 backdrop-blur-md"
            >
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

              <span className="relative flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Categories
                </span>
              </span>
            </Badge>
          </div>

          {/* Heading */}
          <div className="border-b border-dashed border-border px-4 md:px-6 py-4">
            <h3 className="text-sm md:text-base font-semibold text-foreground">
              Filter by Topic
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Explore posts by category
            </p>
          </div>

          {/* Categories */}
          <div className="px-4 md:px-6 py-4">
            <div className="flex flex-wrap gap-2">
              {loading
                ? [...Array(4)].map((_, i) => (
                    <div
                      key={`skeleton-${i}`}
                      className="h-8 w-24 rounded-md bg-muted animate-pulse"
                    />
                  ))
                : categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className={`px-3 py-1.5 text-xs md:text-sm font-medium rounded-md border transition-all duration-300 ${
                        currentCategory === category.id
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
            </div>
          </div>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default CategoryFilter;
