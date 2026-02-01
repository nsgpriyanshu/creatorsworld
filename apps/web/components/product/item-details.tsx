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
    <Wrapper className="relative py-20 lg:py-32">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* Left content */}
        <div className="flex flex-col gap-6">
          <AnimationContainer animation="fadeUp" delay={0.1}>
            <Badge variant="outline" className="flex w-fit items-center gap-2">
              <Package2 className="h-4 w-4 text-[#f10a0a]" />
              Products
            </Badge>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.2}>
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              {title}{" "}
              {highlight && <span className="text-[#f10a0a]">{highlight}</span>}
            </h1>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.3}>
            <p className="max-w-xl text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <p className="text-lg font-medium">
              Price:{" "}
              <span className="text-xl font-semibold text-foreground">
                ₹{price}
              </span>
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.5}>
            <div className="mt-4 flex flex-wrap gap-4">
              {/* Buy Now – Alert Dialog */}
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button size="lg">Buy Now</Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Payments Coming Soon</AlertDialogTitle>
                    <AlertDialogDescription>
                      Our payment gateway is currently under deployment. To
                      purchase this product, please contact us directly on
                      Discord and we’ll assist you manually.
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

              {/* Secondary CTA */}
              <Link href={discordLink} target="_blank">
                <Button size="lg" variant="outline" className="group">
                  Discord
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </AnimationContainer>
        </div>

        {/* Right preview */}
        <AnimationContainer animation="fadeRight" delay={0.3}>
          <div className="relative mx-auto max-w-md rounded-3xl border border-[#f10a0a]/30 p-4">
            <Image
              src={productImage}
              alt={image.alt}
              width={600}
              height={600}
              priority
              className="rounded-2xl object-contain"
            />
          </div>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};

export default ItemDetails;
