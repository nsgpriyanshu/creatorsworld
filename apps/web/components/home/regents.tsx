"use client";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";
import { Badge } from "@repo/ui/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/ui/tooltip";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { Crown, Verified } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";
import { REGENTS } from "../../constants";

type Regent = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

const Regents = () => {
  const regents = REGENTS as Regent[];

  return (
    <Wrapper className="relative w-full overflow-x-hidden py-12 lg:py-16">
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
                  <Verified className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                  <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Regents
                  </span>
                </span>
              </Badge>
            </div>
          </AnimationContainer>

          {/* Heading */}
          <AnimationContainer animation="fadeUp" delay={0.15}>
            <div className="border-b border-dashed border-border px-6 py-10 text-center">
              <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                Regents of Creator&apos;s World
              </h2>
            </div>
          </AnimationContainer>

          {/* Description */}
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <div className="border-b border-dashed border-border px-6 py-8 text-center">
              <p className="mx-auto max-w-xl text-base text-muted-foreground md:text-lg">
                The core leadership guiding the vision, operations, and growth
                of Creator&apos;s World.
              </p>
            </div>
          </AnimationContainer>

          {/* Regents avatars */}
          <TooltipProvider>
            <AnimationContainer animation="fadeUp" delay={0.45}>
              <div className="flex flex-wrap items-center justify-center gap-6 px-8 py-12">
                {regents.map((regent, index) => {
                  const isCEO = regent.designation
                    .toLowerCase()
                    .includes("chief executive");

                  return (
                    <AnimationContainer
                      key={regent.id}
                      animation="fadeUp"
                      delay={0.1 + index * 0.07}
                    >
                      <Tooltip>
                        <TooltipTrigger>
                          <div
                            className={cn(
                              "group relative cursor-default rounded-full p-1",
                              isCEO && "ring-2 ring-border",
                            )}
                          >
                            {/* Hover glow */}
                            <div
                              aria-hidden
                              className={cn(
                                "absolute inset-0 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100",
                                "bg-foreground/20",
                              )}
                            />

                            <Avatar className="size-16 transition-transform duration-300 group-hover:scale-105 md:size-20">
                              <AvatarImage
                                src={regent.image}
                                alt={regent.name}
                              />
                              <AvatarFallback>
                                {regent.name
                                  .replace("@", "")
                                  .slice(0, 2)
                                  .toUpperCase()}
                              </AvatarFallback>
                            </Avatar>

                            {isCEO && (
                              <div className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-background shadow">
                                <Crown className="h-3 w-3 text-foreground" />
                              </div>
                            )}
                          </div>
                        </TooltipTrigger>

                        <TooltipContent
                          side="top"
                          className="rounded-xl border bg-background px-4 py-2 text-center shadow-lg"
                        >
                          <p className="text-sm font-semibold text-foreground">
                            {regent.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {regent.designation}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </AnimationContainer>
                  );
                })}
              </div>
            </AnimationContainer>
          </TooltipProvider>

          {/* Footer */}
          <AnimationContainer animation="fadeUp" delay={0.6}>
            <div className="border-t border-dashed border-border px-6 py-6 text-center">
              <p className="mx-auto max-w-lg text-sm text-muted-foreground">
                Regents are responsible for leadership decisions, platform
                integrity, and long-term direction.
              </p>
            </div>
          </AnimationContainer>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default Regents;
