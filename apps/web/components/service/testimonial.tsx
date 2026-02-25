"use client";

import { TESTIMONIALS } from "../../constants/testimonials";
import { cn } from "@repo/ui/lib/utils";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";
import { Marquee } from "@repo/ui/components/ui/marquee";
import Image from "next/image";
import { Code2 } from "lucide-react";
import { Badge } from "@repo/ui/components/ui/badge";

const half = Math.ceil(TESTIMONIALS.length / 2);

const firstRow = TESTIMONIALS.slice(0, half);
const secondRow = TESTIMONIALS.slice(half);
const thirdRow = TESTIMONIALS.slice(0, half);
const fourthRow = TESTIMONIALS.slice(half);

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
        "relative h-full w-64 shrink-0 overflow-hidden rounded-2xl border p-4 transition-all duration-300",
        "bg-neutral-50/80 backdrop-blur-md",
        "dark:border-neutral-800 dark:bg-neutral-900/60",
        "hover:bg-neutral-100 dark:hover:bg-neutral-800/60",
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
              sizes="36px"
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
    <Wrapper className="py-20 lg:py-32">
      {/* Header */}
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <Badge
            variant="outline"
            className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex items-center gap-2">
              <Code2 className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
              <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Testimonials
              </span>
            </span>
          </Badge>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Get started with us!
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground text-balance md:text-lg">
            Hear from our clients about their transformative journeys with
            CreatorsWorld.
          </p>
        </AnimationContainer>
      </div>

      {/* 3D Marquee Section */}
      <div className="relative flex h-150 w-full items-center justify-center overflow-hidden perspective-[1000px]">
        <div
          className="flex items-center gap-6"
          style={{
            transform:
              "translateX(-80px) translateZ(-120px) rotateX(20deg) rotateY(-15deg)",
          }}
        >
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:35s] [--gap:1.5rem]"
          >
            {firstRow.map((testimonial, index) => (
              <ReviewCard
                key={`${testimonial.name}-1-${index}`}
                {...testimonial}
              />
            ))}
          </Marquee>

          <Marquee
            reverse
            pauseOnHover
            vertical
            className="[--duration:35s] [--gap:1.5rem]"
          >
            {secondRow.map((testimonial, index) => (
              <ReviewCard
                key={`${testimonial.name}-2-${index}`}
                {...testimonial}
              />
            ))}
          </Marquee>

          <Marquee
            reverse
            pauseOnHover
            vertical
            className="[--duration:35s] [--gap:1.5rem]"
          >
            {thirdRow.map((testimonial, index) => (
              <ReviewCard
                key={`${testimonial.name}-3-${index}`}
                {...testimonial}
              />
            ))}
          </Marquee>

          <Marquee
            pauseOnHover
            vertical
            className="[--duration:35s] [--gap:1.5rem]"
          >
            {fourthRow.map((testimonial, index) => (
              <ReviewCard
                key={`${testimonial.name}-4-${index}`}
                {...testimonial}
              />
            ))}
          </Marquee>
        </div>

        {/* Edge Fade Effects */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background to-transparent" />
      </div>
    </Wrapper>
  );
};

export default Reviews;
