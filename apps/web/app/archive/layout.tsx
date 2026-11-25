import { createMetadata } from "../../utils/metadata";

export const metadata = createMetadata({
  title: "Community Archive - Coming Soon",
  description: "The Creator's World community archive is being rebuilt.",
  path: "/archive",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: ["Creator's World archive"],
  noIndex: true,
});

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
