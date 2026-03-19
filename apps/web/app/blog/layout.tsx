import { createMetadata } from "../../utils/metadata";

export const metadata = createMetadata({
  title: "Blog - Creator's World",
  description:
    "Read articles on Discord apps, creator tools, product thinking, development workflows, and community growth.",
  path: "/blog",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: [
    "Discord blog",
    "developer blog",
    "creator economy",
    "Discord development",
    "technical articles",
  ],
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
