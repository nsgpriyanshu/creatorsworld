"use client";

import React from "react";
import Image from "next/image";

import { Marquee } from "@repo/ui/components/ui/marquee";
import Wrapper from "./wrapper";
import AnimationContainer from "./animation-container";

type LogoItem = {
  src: string;
  alt: string;
};

interface LogosMarqueeProps {
  heading: string;
  images: LogoItem[];
  headingLevel?: "h3" | "h4";
}

const LogosMarquee: React.FC<LogosMarqueeProps> = ({
  heading,
  images,
  headingLevel = "h4",
}) => {
  const HeadingTag = headingLevel;

  return (
    <div className="flex w-full flex-col items-center justify-center py-16 lg:py-24">
      <Wrapper>
        {/* Heading */}
        <AnimationContainer animation="fadeUp" delay={0.5}>
          <div className="flex justify-center px-2 md:px-0">
            <HeadingTag className="text-center text-xl font-semibold tracking-tight lg:text-2xl">
              {heading}
            </HeadingTag>
          </div>
        </AnimationContainer>

        {/* Marquee */}
        <AnimationContainer animation="fadeUp" delay={1}>
          <div className="relative mt-10 w-full overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              <div className="flex items-center gap-10 md:gap-14">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width={1024}
                    height={1024}
                    className="h-12 w-24"
                  />
                ))}
              </div>
            </Marquee>

            {/* Fade edges */}
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r to-transparent" />
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l to-transparent" />
          </div>
        </AnimationContainer>
      </Wrapper>
    </div>
  );
};

export default LogosMarquee;
