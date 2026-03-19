import { createMetadata } from "../../../utils/metadata";

export const metadata = createMetadata({
  title: "Terms of Service - Creator's World",
  description:
    "Review the terms, conditions, and responsibilities that govern use of Creator's World.",
  path: "/legal/terms",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "platform terms",
  ],
});

export default function ToSLayout({ children }: { children: React.ReactNode }) {
  return <main className="relative w-full">{children}</main>;
}
