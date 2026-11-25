import { createMetadata } from "../../utils/metadata";

export const metadata = createMetadata({
  title: "Creators World",
  description: "Welcome to Creators World.",
  path: "/",
  image: "/assets/brand/logo-main-dark-1024x1024.png",
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative w-full">{children}</main>;
}
