import { createMetadata } from "../../utils/metadata";

export const metadata = createMetadata({
  title: "Creator's World | Web Development Studio & Technical Solutions",
  description:
    "We build modern, high-performance websites, scalable web applications, and digital experiences for businesses, founders, and creators.",
  path: "/",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: [
    "web development services",
    "web design agency",
    "Next.js development",
    "React development",
    "frontend engineering",
    "custom web apps",
    "performance optimization",
    "technical consulting",
  ],
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
