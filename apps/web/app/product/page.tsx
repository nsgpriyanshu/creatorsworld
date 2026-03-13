"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { ArrowRight, Package2 } from "lucide-react";

import AnimationContainer from "../../components/global/animation-container";
import Wrapper from "../../components/global/wrapper";
import { products } from "../../lib/products";

export default function ProductPage() {
  const productList = Object.values(products);

  return (
    <Wrapper className="relative overflow-x-hidden pt-24 pb-12 md:pt-24 md:pb-16">
      <AnimationContainer animation="fadeUp">
        <div className="mx-auto w-full max-w-6xl rounded-md border border-border">
          {/* Badge */}
          <AnimationContainer animation="fadeDown">
            <div className="flex justify-center border-b border-dashed border-border p-4">
              <Badge
                variant="outline"
                className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
              >
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

                <span className="relative flex items-center gap-2">
                  <Package2 className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                  <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Products
                  </span>
                </span>
              </Badge>
            </div>
          </AnimationContainer>

          {/* Heading */}
          <AnimationContainer animation="fadeUp" delay={0.15}>
            <div className="border-b border-dashed border-border px-6 py-10 text-center">
              <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                Explore Our Products
              </h1>
            </div>
          </AnimationContainer>

          {/* Description */}
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <div className="border-b border-dashed border-border px-6 py-8 text-center">
              <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                Carefully crafted digital products built for creators,
                communities, and modern Discord ecosystems.
              </p>
            </div>
          </AnimationContainer>

          {/* Product Grid */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productList.map((product, index) => (
                <AnimationContainer
                  key={product.slug}
                  animation="fadeUp"
                  delay={0.1 + index * 0.08}
                >
                  <div className="group flex h-full min-w-0 flex-col overflow-hidden rounded-md border border-border bg-background">
                    {/* Image */}
                    <div className="relative aspect-square w-full border-b border-dashed  border-border bg-muted">
                      <Image
                        src={product.image.light}
                        alt={product.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-6 transition-transform duration-300 rounded-2xl group-hover:scale-[1.04]"
                      />
                    </div>

                    {/* Title */}
                    <div className="border-b border-dashed border-border p-5">
                      <h3 className="text-lg font-semibold leading-tight">
                        {product.title}{" "}
                        {product.highlight && (
                          <span className="text-foreground">
                            {product.highlight}
                          </span>
                        )}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="border-b border-dashed border-border p-5">
                      <p className="text-sm text-muted-foreground">
                        {product.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto p-5">
                      <Link href={`/product/${product.slug}`}>
                        <Button
                          variant="default"
                          className="group w-full rounded-md border border-border"
                        >
                          View Product
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </AnimationContainer>
              ))}
            </div>
          </div>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
}
