import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { products } from "../../../lib/products";
import ItemDetails from "../../../components/product/item-details";
import {
  absoluteUrl,
  createMetadata,
  siteConfig,
} from "../../../utils/metadata";

type ItemPageProps = {
  params: Promise<{
    item: string;
  }>;
};

export async function generateMetadata({
  params,
}: ItemPageProps): Promise<Metadata> {
  const { item } = await params;
  const product = products[item];

  if (!product) {
    return createMetadata({
      title: "Product Not Found | Creator's World",
      description: "The requested product page could not be found.",
      path: `/product/${item}`,
      noIndex: true,
    });
  }

  const title = `${product.title} ${product.highlight ?? ""}`.trim();

  return createMetadata({
    title: `${title} | Creator's World`,
    description: product.description,
    path: `/product/${item}`,
    image: product.image.dark,
    keywords: [
      product.title,
      ...(product.highlight ? [product.highlight] : []),
      "digital product",
      "creator tools",
      "discord products",
    ],
  });
}

const ItemPage = async ({ params }: ItemPageProps) => {
  const { item } = await params;
  const product = products[item];

  if (!product) {
    notFound();
  }

  const title = `${product.title} ${product.highlight ?? ""}`.trim();
  const productUrl = absoluteUrl(`/product/${item}`);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description: product.description,
    image: [absoluteUrl(product.image.dark)],
    brand: {
      "@type": "Brand",
      name: siteConfig.siteName,
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "INR",
      price: product.price.toString(),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.siteName,
      },
    },
  };

  return (
    <div className="relative flex w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <section className="w-full">
        <ItemDetails {...product} />
      </section>
    </div>
  );
};

export default ItemPage;
