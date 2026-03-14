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
        "relative h-full w-48 sm:w-56 md:w-64 shrink-0 overflow-hidden",
        "rounded-md border border-dashed border-border",
        "bg-background/70 backdrop-blur-md",
        "p-3 md:p-4",
        "transition-all duration-300",
        "hover:bg-muted/40",
      )}
    >
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="relative size-8 md:size-9 shrink-0">
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
            <h4 className="text-xs md:text-sm font-medium text-foreground">
              {name}
            </h4>
            <p className="text-xs text-muted-foreground">{userrole}</p>
          </div>
        </div>

        {/* Body */}
        <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <Wrapper className="relative w-full overflow-hidden pt-24 pb-16">
      {/* Grid Background (Hero style) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
        bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),
        linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
        bg-[size:64px_64px]
        opacity-[0.1]"
      />

      <AnimationContainer animation="fadeUp" className="w-full">
        <div className="mx-auto max-w-6xl rounded-md border border-border bg-background/60 backdrop-blur-sm">
          {/* Badge Section */}
          <div className="flex justify-center border-b border-dashed border-border p-4">
            <AnimationContainer animation="fadeDown">
              <Badge
                variant="outline"
                className="group relative overflow-hidden border-border bg-background/70 px-3 py-1 md:px-4 md:py-1.5 backdrop-blur-md text-xs md:text-sm"
              >
                <span className="relative flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                  <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Testimonials
                  </span>
                </span>
              </Badge>
            </AnimationContainer>
          </div>

          {/* Title Section */}
          <div className="border-b border-dashed border-border px-6 py-10 text-center">
            <AnimationContainer animation="fadeUp" delay={0.2}>
              <h2 className="mx-auto max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                What Our Clients Say
              </h2>
            </AnimationContainer>
          </div>

          {/* Description Section */}
          <div className="border-b border-dashed border-border px-6 py-8 text-center">
            <AnimationContainer animation="fadeUp" delay={0.3}>
              <p className="mx-auto max-w-3xl text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base lg:text-lg">
                Hear from our clients about their transformative journeys with
                Creator's World and how our solutions helped them build scalable
                digital experiences.
              </p>
            </AnimationContainer>
          </div>

          {/* Marquee Testimonials Section */}
          <div className="relative flex h-96 w-full items-center justify-center overflow-hidden border-b border-dashed border-border perspective-[1000px] md:h-[550px]">
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

            {/* Edge fade effects */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-background to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background to-transparent" />
          </div>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default Reviews;
