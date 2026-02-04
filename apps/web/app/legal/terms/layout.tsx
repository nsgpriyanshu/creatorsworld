import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – Creators World",
  description:
    "Read the Terms of Service for Creators World. Understand the rules and guidelines that govern your use of our platform and Discord server.",
  keywords: [
    "Terms of Service",
    "ToS",
    "Terms",
    "Conditions",
    "User Agreement",
    "Community Guidelines",
    "Discord Terms",
  ],
  openGraph: {
    title: "Terms of Service – Creators World",
    description:
      "Review our Terms of Service and conditions of use for Creators World.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/legal/tos`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: "og/og-legal.png",
        width: 1200,
        height: 630,
        alt: "Creators World Terms of Service – Open Graph Image",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service – Creators World",
    description: "Review our Terms of Service and community guidelines.",
    site: "@creatorsworld",
    creator: "@creatorsworld",
    images: ["og/og-legal.png"],
  },
};

export default function ToSLayout({ children }: { children: React.ReactNode }) {
  return <main className="relative w-full">{children}</main>;
}
