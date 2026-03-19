import { createMetadata } from "../../../utils/metadata";

export const metadata = createMetadata({
  title: "Brand Guidelines - Creator's World",
  description:
    "Access logos, color references, and usage guidance for Creator's World brand assets.",
  path: "/legal/brand",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: ["brand guidelines", "brand assets", "logo usage", "brand kit"],
});

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
