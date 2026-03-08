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

        // Extract unique tags from all blogs
        const uniqueTags = new Set<string>();
        blogs?.forEach((blog) => {
          if (blog.tags && Array.isArray(blog.tags)) {
            blog.tags.forEach((tag: string) => {
              uniqueTags.add(tag);
            });
          }
        });

        // Transform tags into categories
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
        // Fallback to default categories on error
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
    router.push(`/blog?${params.toString()}`);
    onCategoryChange?.(categoryId);
  };

  return (
    <div className="space-y-3 md:space-y-4 mb-6 md:mb-10 lg:mb-12">
      {/* Badge */}
      <AnimationContainer animation="fadeDown">
        <Badge
          variant="outline"
          className="group relative overflow-hidden border-border bg-background/70 px-2.5 py-0.5 md:px-4 md:py-1.5 backdrop-blur-md text-xs md:text-sm"
        >
          <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
          <span className="relative flex items-center gap-1 md:gap-2">
            <Filter className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12 flex-shrink-0" />
            <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent whitespace-nowrap">
              Categories
            </span>
          </span>
        </Badge>
      </AnimationContainer>

      {/* Heading */}
      <AnimationContainer animation="fadeUp" delay={0.1}>
        <div>
          <h3 className="text-sm md:text-base font-semibold text-foreground">
            Filter by Topic
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Explore posts by category
          </p>
        </div>
      </AnimationContainer>

      {/* Categories */}
      <AnimationContainer animation="fadeUp" delay={0.2}>
        <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1">
          {loading
            ? // Skeleton loading state
              [...Array(3)].map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className="h-8 md:h-9 w-20 md:w-28 rounded-full bg-muted/50 animate-pulse"
                />
              ))
            : categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`px-2.5 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                    currentCategory === category.id
                      ? "bg-foreground text-background border border-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                  }`}
                >
                  {category.label}
                </button>
              ))}
        </div>
      </AnimationContainer>
    </div>
  );
};

export default CategoryFilter;
