import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Creators World",
  description:
    "Learn about how Creators World handles your data and privacy. We are committed to protecting your information with transparent policies.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "Privacy",
    "User Privacy",
    "Data Security",
    "GDPR",
    "Privacy Rights",
  ],
  openGraph: {
    title: "Privacy Policy – Creators World",
    description:
      "Understand our privacy practices and how we protect your information.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/legal/privacy`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: "og/og-legal.png",
        width: 1200,
        height: 630,
        alt: "Creators World Privacy Policy – Open Graph Image",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – Creators World",
    description:
      "Understand our privacy practices and data protection policies.",
    site: "@creatorsworld",
    creator: "@creatorsworld",
    images: ["og/og-legal.png"],
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
