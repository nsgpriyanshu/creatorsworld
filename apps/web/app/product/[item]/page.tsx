import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { products } from "../../../lib/products";
import ItemDetails from "../../../components/product/item-details";

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
    return {
      title: "Product Not Found | Creator’s World",
    };
  }

  const title = `${product.title} ${product.highlight ?? ""}`.trim();

  return {
    title: `${title} | Creator’s World`,
    description: product.description,
    openGraph: {
      title,
      description: product.description,
      images: [
        {
          url: product.image.dark,
          alt: product.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.description,
      images: [product.image.dark],
    },
  };
}

const ItemPage = async ({ params }: ItemPageProps) => {
  const { item } = await params;
  const product = products[item];

  if (!product) {
    notFound();
  }

  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <ItemDetails {...product} />
      </section>
    </div>
  );
};

export default ItemPage;
