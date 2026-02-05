import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Creators World – Services`,
  description:
    "Explore services offered by Creators World — integrations, support, and professional services for communities and developers.",
  keywords: ["Services", "Creators World", "Discord Services", "Support"],
  openGraph: {
    title: `Creators World – Services`,
    description:
      "Explore services offered by Creators World — integrations, support, and professional services.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: "og/og-service.png",
        width: 1200,
        height: 630,
        alt: "Creators World Services – Open Graph Image",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Creators World – Services`,
    description:
      "Professional services, integrations and support for Creators World.",
    site: "@creatorsworld",
    creator: "@creatorsworld",
    images: ["og/og-service.png"],
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
