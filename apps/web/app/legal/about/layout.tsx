import { createMetadata } from "../../../utils/metadata";

export const metadata = createMetadata({
  title: "About Us - Creator's World",
  description:
    "Learn about Creator's World, our engineering philosophy, our values, and the high-performance digital systems we build for businesses and founders.",
  path: "/legal/about",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: [
    "about",
    "web development agency",
    "engineering studio",
    "mission",
    "values",
    "fullstack studio",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
