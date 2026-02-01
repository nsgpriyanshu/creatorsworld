import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product – Creators World",
  description: "Explore premium developer products built for real communities.",
  openGraph: {
    title: "Creators World Products",
    description: "High-quality digital products for creators and developers.",
    type: "website",
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
