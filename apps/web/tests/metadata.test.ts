import { describe, expect, it } from "vitest";

import { absoluteUrl, createMetadata, siteConfig } from "../utils/metadata";
import robots from "../app/robots";

const getOgImageUrl = (image: unknown) => {
  if (!image || typeof image !== "object") return undefined;
  if ("url" in image && typeof image.url === "string") return image.url;
  return undefined;
};

describe("metadata helpers", () => {
  it("builds absolute urls from the configured site url", () => {
    expect(absoluteUrl("/blog")).toBe(`${siteConfig.siteUrl}/blog`);
  });

  it("creates canonical metadata with robots and social image", () => {
    const metadata = createMetadata({
      title: "Test Page | Creator's World",
      description: "SEO test page",
      path: "/test",
      keywords: ["test"],
    });
    const openGraphImages = Array.isArray(metadata.openGraph?.images)
      ? metadata.openGraph.images
      : metadata.openGraph?.images
        ? [metadata.openGraph.images]
        : [];

    expect(metadata.alternates?.canonical).toBe(`${siteConfig.siteUrl}/test`);
    expect(metadata.robots).toMatchObject({
      index: true,
      follow: true,
    });
    expect(getOgImageUrl(openGraphImages[0])).toBe(
      `${siteConfig.siteUrl}/assets/brand/logo-main-dark-1024x1024.png`,
    );
  });

  it("marks noindex pages correctly", () => {
    const metadata = createMetadata({
      title: "Hidden",
      path: "/hidden",
      noIndex: true,
    });

    expect(metadata.robots).toMatchObject({
      index: false,
      follow: false,
    });
  });
});

describe("robots metadata route", () => {
  it("publishes the sitemap and host", () => {
    const result = robots();

    expect(result.host).toBe(siteConfig.siteUrl);
    expect(result.sitemap).toBe(`${siteConfig.siteUrl}/sitemap.xml`);
    expect(result.rules).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userAgent: "*",
          allow: "/",
        }),
      ]),
    );
  });
});
