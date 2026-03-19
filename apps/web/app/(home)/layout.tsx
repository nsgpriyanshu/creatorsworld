import { createMetadata } from "../../utils/metadata";

export const metadata = createMetadata({
  title: "Creator's World - Discord Apps, Creator Tools, and Services",
  description:
    "Explore Discord apps, creator tools, digital products, and technical services built for communities, creators, and developers.",
  path: "/",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: [
    "Discord app hub",
    "Discord bot marketplace",
    "creator tools",
    "Discord tools",
    "technical services",
  ],
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
