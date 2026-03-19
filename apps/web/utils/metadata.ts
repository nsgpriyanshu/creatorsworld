import type { Metadata } from "next";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string | null;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: { name: string; url?: string }[];
  noIndex?: boolean;
};

const normalizeUrl = (url: string) => url.replace(/\/+$/, "");

export const siteConfig = {
  siteName: process.env.NEXT_PUBLIC_APP_NAME || "Creator's World",
  siteDescription:
    "Creator's World is a premium platform for Discord apps, creator tools, web products, and technical services built for communities, founders, and developers.",
  siteUrl: normalizeUrl(
    process.env.NEXT_PUBLIC_SITE_URL || "https://creatorsworld.vercel.app",
  ),
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@nsgpriyanshu",
  discordUrl: "https://discord.gg/VUMVuArkst",
  githubUrl: "https://github.com/nsgpriyanshu",
  defaultOgImage: "/assets/brand/logo-main-dark-1024x1024.png",
  locale: "en_US",
} as const;

export const absoluteUrl = (path = "/") =>
  new URL(path, `${siteConfig.siteUrl}/`).toString();

const defaultIcons: Metadata["icons"] = {
  apple: [{ url: "/icons/light/apple-touch-icon.ico" }],
  icon: [
    { url: "/icons/light/favicon.ico", sizes: "32x32" },
    { url: "/icons/light/android-chrome-512x512.png", sizes: "512x512" },
  ],
};

export const createMetadata = ({
  title = siteConfig.siteName,
  description = siteConfig.siteDescription,
  path = "/",
  image = siteConfig.defaultOgImage,
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}: MetadataInput = {}): Metadata => {
  const canonical = absoluteUrl(path);
  const imageUrl = image
    ? absoluteUrl(image)
    : absoluteUrl(siteConfig.defaultOgImage);
  const uniqueKeywords = Array.from(
    new Set([
      "Creators World",
      "Discord apps",
      "Discord bots",
      "creator tools",
      "web development",
      ...keywords,
    ]),
  );

  return {
    metadataBase: new URL(`${siteConfig.siteUrl}/`),
    title,
    description,
    applicationName: siteConfig.siteName,
    manifest: "/icons/light/site.webmanifest",
    referrer: "origin-when-cross-origin",
    authors,
    creator: siteConfig.twitterHandle,
    publisher: siteConfig.siteName,
    keywords: uniqueKeywords,
    category: "technology",
    alternates: {
      canonical,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: defaultIcons,
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors ? { authors: authors.map((author) => author.name) } : {}),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
  };
};

export const generateMetadata = createMetadata;
