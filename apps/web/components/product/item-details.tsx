"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@repo/ui/components/ui/alert-dialog";

import { ArrowRight, Package2 } from "lucide-react";

export type ItemDetailsProps = {
  title: string;
  highlight?: string;
  description: string;
  price: number;
  image: {
    light: string;
    dark: string;
    alt: string;
  };
  discordLink: string;
};

const ItemDetails = ({
  title,
  highlight,
  description,
  price,
  image,
  discordLink,
}: ItemDetailsProps) => {
  const { resolvedTheme } = useTheme();

  const productImage = resolvedTheme === "dark" ? image.dark : image.light;

  return (
    <Wrapper className="relative overflow-x-hidden py-12 lg:py-16">
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

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="flex min-w-0 flex-col">
              {/* Title */}
              <AnimationContainer animation="fadeUp" delay={0.15}>
                <div className="border-b border-dashed border-border p-6">
                  <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                    {title}{" "}
                    {highlight && (
                      <span className="text-foreground">{highlight}</span>
                    )}
                  </h1>
                </div>
              </AnimationContainer>

              {/* Description */}
              <AnimationContainer animation="fadeUp" delay={0.3}>
                <div className="border-b border-dashed border-border p-6">
                  <p className="text-base text-muted-foreground md:text-lg">
                    {description}
                  </p>
                </div>
              </AnimationContainer>

              {/* Price */}
              <AnimationContainer animation="fadeUp" delay={0.45}>
                <div className="border-b border-dashed border-border p-6">
                  <p className="text-lg font-medium">
                    Price:{" "}
                    <span className="text-xl font-semibold text-foreground">
                      ₹{price}
                    </span>
                  </p>
                </div>
              </AnimationContainer>

              {/* Buttons */}
              <AnimationContainer animation="fadeUp" delay={0.6}>
                <div className="p-6">
                  <div className="flex flex-wrap gap-4">
                    {/* Buy Now */}
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Button
                          size="lg"
                          variant="default"
                          className="rounded-md border border-border"
                        >
                          Buy Now
                        </Button>
                      </AlertDialogTrigger>

                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Payments Coming Soon
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Our payment gateway is currently under deployment.
                            To purchase this product, please contact us directly
                            on Discord and we’ll assist you manually.
                          </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                          <AlertDialogCancel>Close</AlertDialogCancel>

                          <AlertDialogAction>
                            <Link href={discordLink} target="_blank">
                              Contact on Discord
                            </Link>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    {/* Discord */}
                    <Link href={discordLink} target="_blank">
                      <Button
                        size="lg"
                        variant="outline"
                        className="group rounded-md border border-border"
                      >
                        Discord
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimationContainer>
            </div>

            {/* RIGHT PREVIEW */}
            <div className="border-t border-dashed border-border lg:border-t-0 lg:border-l">
              <div className="flex h-full items-center justify-center p-8">
                <AnimationContainer animation="scaleUp" delay={0.25}>
                  <div className="relative w-full max-w-sm rounded-md border border-border bg-muted/40 p-4">
                    <Image
                      src={productImage}
                      alt={image.alt}
                      width={600}
                      height={600}
                      priority
                      className="w-full rounded-md object-contain"
                    />
                  </div>
                </AnimationContainer>
              </div>
            </div>
          </div>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default ItemDetails;
