import { createMetadata } from "../../../utils/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy - Creator's World",
  description:
    "Review how Creator's World collects, uses, stores, and protects your information.",
  path: "/legal/privacy",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
  keywords: [
    "privacy policy",
    "data protection",
    "privacy rights",
    "data security",
  ],
});

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
