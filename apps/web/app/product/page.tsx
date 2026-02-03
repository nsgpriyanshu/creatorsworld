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
    <Wrapper className="relative py-20 lg:py-32">
      {/* Header */}
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <AnimationContainer animation="fadeUp" delay={0.1}>
          <Badge
            variant="outline"
            className="mx-auto mb-4 flex w-fit items-center gap-2"
          >
            <Package2 className="h-4 w-4 text-[#f10a0a]" />
            Products
          </Badge>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.2}>
          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            Explore Our Products
          </h1>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            Carefully crafted digital products built for creators, communities,
            and modern Discord ecosystems.
          </p>
        </AnimationContainer>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {productList.map((product, index) => (
          <AnimationContainer
            key={product.slug}
            animation="fadeUp"
            delay={0.2 + index * 0.1}
          >
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background p-6 transition hover:border-[#f10a0a]/60">
              {/* Image */}
              <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={product.image.light}
                  alt={product.image.alt}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold">
                {product.title}{" "}
                {product.highlight && (
                  <span className="text-[#f10a0a]">{product.highlight}</span>
                )}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {product.description}
              </p>

              {/* CTA */}
              <div className="mt-auto pt-6">
                <Link href={`/product/${product.slug}`}>
                  <Button className="group w-full">
                    View Product
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimationContainer>
        ))}
      </div>
    </Wrapper>
  );
}
