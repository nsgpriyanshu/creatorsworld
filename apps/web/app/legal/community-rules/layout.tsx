import type { ReactNode } from "react";
import { createMetadata } from "../../../utils/metadata";

export const metadata = createMetadata({
  title: "Community Rules - Creator's World",
  description:
    "Review the community rules that keep Creator's World respectful, safe, and useful for everyone.",
  path: "/legal/community-rules",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: [
    "community rules",
    "community guidelines",
    "server rules",
    "user conduct policy",
  ],
});

interface CommunityRulesLayoutProps {
  children: ReactNode;
}

export default function CommunityRulesLayout({
  children,
}: CommunityRulesLayoutProps) {
  return <main className="relative w-full">{children}</main>;
}
