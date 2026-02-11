import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://creatorsworld.vercel.app";

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Creators World";

export const metadata: Metadata = {
  title: "Community Rules – Creators World",
  description:
    "Read the official Community Rules of Creators World. These guidelines ensure a safe, respectful, and welcoming environment across our website and Discord server.",
  keywords: [
    "Creators World Community Rules",
    "Community Guidelines",
    "Discord Rules",
    "Server Rules",
    "User Conduct Policy",
    "Platform Guidelines",
  ],
  openGraph: {
    title: "Community Rules – Creators World",
    description:
      "Review the official Community Rules that maintain a safe and respectful environment at Creators World.",
    url: `${siteUrl}/legal/community-rules`,
    siteName: appName,
    images: [
      {
        url: `${siteUrl}/og/og-legal.png`,
        width: 1200,
        height: 630,
        alt: "Creators World Community Rules – Open Graph Image",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Rules – Creators World",
    description: "Review the Community Rules and guidelines of Creators World.",
    site: "@creatorsworld",
    creator: "@creatorsworld",
    images: [`${siteUrl}/og/og-legal.png`],
  },
};

interface CommunityRulesLayoutProps {
  children: ReactNode;
}

export default function CommunityRulesLayout({
  children,
}: CommunityRulesLayoutProps) {
  return <main className="relative w-full">{children}</main>;
}
