import { createMetadata } from "../../utils/metadata";

export const metadata = createMetadata({
  title: "Products - Creator's World",
  description:
    "Explore digital products, assets, and tools built for creators, developers, and modern online communities.",
  path: "/product",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: [
    "digital products",
    "creator tools",
    "Discord assets",
    "developer products",
  ],
});

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
