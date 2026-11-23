import { createMetadata } from "../../utils/metadata";

export const metadata = createMetadata({
  title: "Community Archive - Creator's World",
  description:
    "Explore the founding Discord bot server, creator community milestones, and bot hub heritage of Creator's World.",
  path: "/archive",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: [
    "Discord bot archive",
    "bot server",
    "creator community",
    "Creator's World archive",
  ],
});

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
