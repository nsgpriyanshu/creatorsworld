import { notFound } from "next/navigation";
import type { Metadata } from "next";

import CheckoutForm from "../../../../features/product/components/checkout-form";
import { products } from "../../../../features/product/data/products";
import { createMetadata } from "../../../../utils/metadata";

type CheckoutPageProps = {
  params: Promise<{ item: string }>;
};

export async function generateMetadata({
  params,
}: CheckoutPageProps): Promise<Metadata> {
  const { item } = await params;
  const product = products[item];
  const title = product
    ? `${product.title} ${product.highlight ?? ""}`.trim()
    : "Product";

  return createMetadata({
    title: `Checkout ${title} | Creator's World`,
    description: "Complete your product purchase with GPay or UPI.",
    path: `/product/${item}/checkout`,
    noIndex: true,
  });
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { item } = await params;
  const product = products[item];

  if (!product) {
    notFound();
  }

  return (
    <div className="relative flex w-full flex-col px-4 py-12 md:py-16">
      <CheckoutForm product={product} />
    </div>
  );
}
