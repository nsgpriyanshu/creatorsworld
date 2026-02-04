import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Creators World",
  description:
    "Learn about Creators World's journey, mission, and values. Discover how we're building the largest Discord bot hub and web3 platform.",
  keywords: [
    "About Us",
    "Our Story",
    "Creators World",
    "Discord Bot Hub",
    "Community",
    "Mission",
    "Vision",
  ],
  openGraph: {
    title: "About Us – Creators World",
    description:
      "Discover our journey and mission to create the best Discord bot hub and community platform.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/legal/about-us`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: "og/og-about.png",
        width: 1200,
        height: 630,
        alt: "Creators World About Us – Open Graph Image",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – Creators World",
    description: "Learn about our journey and mission at Creators World.",
    site: "@creatorsworld",
    creator: "@creatorsworld",
    images: ["og/og-about.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
