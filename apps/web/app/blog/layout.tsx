import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Creators World",
  description:
    "Explore insightful articles, tutorials, and stories from the Creators World blog. Learn about Discord apps, development tips, and community insights.",
  keywords: [
    "Discord Blog",
    "Discord Tutorials",
    "Web Development",
    "Discord Apps Guide",
    "Creator Stories",
    "Tech Articles",
    "Development Tips",
  ],
  openGraph: {
    title: "Blog – Creators World",
    description:
      "Read the latest articles and insights from Creators World community.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: "og/og-blog.png",
        width: 1200,
        height: 630,
        alt: "Creators World Blog – Open Graph Image",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Creators World",
    description: "Discover articles, guides, and insights on our blog.",
    site: "@creatorsworld",
    creator: "@creatorsworld",
    images: ["og/og-blog.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
