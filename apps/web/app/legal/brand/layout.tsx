import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Guidelines – Creators World",
  description:
    "Access our brand guidelines, color palette, logos, and design resources. Everything you need to represent Creator's World consistently.",
  keywords: [
    "Brand Guidelines",
    "Brand Kit",
    "Logo",
    "Color Palette",
    "Design System",
    "Brand Resources",
    "Design Guidelines",
  ],
  openGraph: {
    title: "Brand Guidelines – Creators World",
    description:
      "Download our logos, explore our color palette, and learn our brand guidelines.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/legal/brand`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: "og/og-brand.png",
        width: 1200,
        height: 630,
        alt: "Creators World Brand Guidelines – Open Graph Image",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Guidelines – Creators World",
    description: "Download our logos and explore our brand guidelines.",
    site: "@creatorsworld",
    creator: "@creatorsworld",
    images: ["og/og-brand.png"],
  },
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
