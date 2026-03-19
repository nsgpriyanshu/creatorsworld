import { createMetadata } from "../../utils/metadata";

export const metadata = createMetadata({
  title: "Services - Creator's World",
  description:
    "Professional web development, product design, performance optimization, and technical consulting for creators and internet businesses.",
  path: "/service",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: [
    "web development services",
    "product design",
    "performance optimization",
    "technical consulting",
  ],
});

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
