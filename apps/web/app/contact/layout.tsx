import { Metadata } from "next";
import { Toaster } from "@repo/ui/components/ui/sonner";

export const metadata: Metadata = {
  title: `Contact – Creators World`,
  description:
    "Get in touch with Creators World. We'd love to hear from you about our Discord app hub.",
  keywords: ["Contact Us", "Support", "Discord Support", "Creators World"],
  openGraph: {
    title: `Contact – Creators World`,
    description: "Get in touch with Creators World.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    images: [
      {
        url: "og/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Creators World – Open Graph Image",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact – Creators World`,
    description: "Get in touch with Creators World.",
    site: "@creatorsworld",
    creator: "@creatorsworld",
    images: ["og/og-contact.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative w-full">
      {children}
      <Toaster />
    </main>
  );
}
