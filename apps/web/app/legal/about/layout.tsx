import { createMetadata } from "../../../utils/metadata";

export const metadata = createMetadata({
  title: "About - Creator's World",
  description:
    "Learn about Creator's World, our mission, our values, and the systems we build for online communities.",
  path: "/legal/about",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: ["about", "company", "mission", "values", "creator platform"],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
