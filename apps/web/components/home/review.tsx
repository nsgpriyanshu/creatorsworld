"use client";

import { REVIEWS } from "../../constants";
import { cn } from "@repo/ui/lib/utils";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";
import { Marquee } from "@repo/ui/components/ui/marquee";
import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import { Badge } from "@repo/ui/components/ui/badge";

const firstRow = REVIEWS.slice(0, Math.ceil(REVIEWS.length / 2));
const secondRow = REVIEWS.slice(Math.ceil(REVIEWS.length / 2));

type ReviewCardProps = {
  img: string;
  name: string;
  userrole: string;
  body: string;
};

const ReviewCard = ({ img, name, userrole, body }: ReviewCardProps) => {
  return (
    <div
      className={cn(
        "relative h-full w-64 border border-dashed border-border p-4",
        "transition-colors hover:bg-muted/30",
      )}
    >
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="relative size-9 shrink-0">
            <Image
              src={img}
              alt={name}
              fill
              className="rounded-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://ui-avatars.com/api/?name=" +
                  encodeURIComponent(name);
              }}
            />
          </div>

          <div className="flex flex-col leading-tight">
            <h4 className="text-sm font-medium text-foreground">{name}</h4>
            <p className="text-xs text-muted-foreground">{userrole}</p>
          </div>
        </div>

        {/* Body */}
        <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <Wrapper className="py-12 lg:py-16 overflow-x-hidden">
      <AnimationContainer animation="fadeUp">
        <div className="mx-auto max-w-6xl rounded-md border border-border">
          {/* Badge */}
          <AnimationContainer animation="fadeDown">
            <div className="flex justify-center border-b border-dashed border-border p-4">
              <Badge
                variant="outline"
                className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
              >
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

                <span className="relative flex items-center gap-2">
                  <HeartHandshake className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                  <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Reviews
                  </span>
                </span>
              </Badge>
            </div>
          </AnimationContainer>

          {/* Heading */}
          <AnimationContainer animation="fadeUp" delay={0.15}>
            <div className="border-b border-dashed border-border px-6 py-10 text-center">
              <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                Creator Chronicles
              </h2>
            </div>
          </AnimationContainer>

          {/* Description */}
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <div className="border-b border-dashed border-border px-6 py-8 text-center">
              <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                Hear from our community about their experiences with Creator's
                World — how it has helped them connect, create, and grow.
              </p>
            </div>
          </AnimationContainer>

          {/* Marquee */}
          <AnimationContainer animation="fadeUp" delay={0.45}>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee pauseOnHover className="[--duration:40s] [--gap:2rem]">
                {firstRow.map((review, index) => (
                  <ReviewCard key={`${review.name}-${index}`} {...review} />
                ))}
              </Marquee>

              <Marquee
                reverse
                pauseOnHover
                className="[--duration:40s] [--gap:2rem]"
              >
                {secondRow.map((review, index) => (
                  <ReviewCard key={`${review.name}-${index}`} {...review} />
                ))}
              </Marquee>

              {/* Edge fades */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background to-transparent" />
            </div>
          </AnimationContainer>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default Reviews;
