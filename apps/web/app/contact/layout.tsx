import { Toaster } from "@repo/ui/components/ui/sonner";
import { createMetadata } from "../../utils/metadata";

export const metadata = createMetadata({
  title: "Contact - Creator's World",
  description:
    "Contact Creator's World for product inquiries, web services, Discord app work, collaborations, or support.",
  path: "/contact",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: ["contact", "support", "Discord support", "project inquiry"],
});

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
