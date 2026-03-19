import type { MetadataRoute } from "next";

import { products } from "../lib/products";
import { getAllPosts } from "../lib/db/queries";
import { absoluteUrl } from "../utils/metadata";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/service", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/product", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.9, changeFrequency: "daily" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/legal/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/legal/brand", priority: 0.5, changeFrequency: "monthly" as const },
  {
    path: "/legal/community-rules",
    priority: 0.4,
    changeFrequency: "yearly" as const,
  },
  { path: "/legal/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/legal/terms", priority: 0.4, changeFrequency: "yearly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const productEntries: MetadataRoute.Sitemap = Object.values(products).map(
    (product) => ({
      url: absoluteUrl(`/product/${product.slug}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  let postEntries: MetadataRoute.Sitemap = [];

  try {
    const posts = await getAllPosts();
    postEntries = posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updated_at || post.published_at),
      changeFrequency: "monthly",
      priority: post.is_featured ? 0.85 : 0.75,
    }));
  } catch {
    postEntries = [];
  }

  return [...staticEntries, ...productEntries, ...postEntries];
}
