export type Author = {
  id: string;
  name: string;
  role: string;
  avatar_url: string;
};

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 1 | 2 | 3 | 4; text: string }
  | { type: "image"; src: string; alt?: string }
  | { type: "code"; language: string; code: string }
  | { type: "quote"; text: string };

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: BlogBlock[];

  thumbnail_url: string;
  tags: string[];
  reading_time: number;

  published_at: string;
  updated_at: string | null;

  is_featured: boolean;
  author: Author;

  seo_title?: string | null;
  seo_description?: string | null;
  seo_image?: string | null;
};
