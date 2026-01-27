import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Creators World – World's Largest Discord App Hub`,
  description:
    "Discover and explore the world's largest collection of Discord apps, bots, and tools. Built for communities, creators, and developers.",
  keywords: [
    "Discord Apps",
    "Discord Bots",
    "Bot Hub",
    "Discord Tools",
    "Discord Marketplace",
    "Discord App Directory",
    "Open Source Discord Apps",
  ],
  openGraph: {
    title: `Creators World – World's Largest Discord App Hub`,
    description:
      "Explore the most comprehensive hub for Discord apps, bots, and tools.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: "og/og-home.png",
        width: 1200,
        height: 630,
        alt: "Discord App Hub – Open Graph Image",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Creators World – World's Largest Discord App Hub`,
    description: "Browse powerful Discord apps and bots, all in one place.",
    site: "@creatorsworld",
    creator: "@creatorsworld",
    images: ["og/og-home.png"],
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
