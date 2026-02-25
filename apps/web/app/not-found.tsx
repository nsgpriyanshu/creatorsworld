"use client";

import Link from "next/link";
import { Bot, Sparkles, Home } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import AnimationContainer from "../components/global/animation-container";
import Wrapper from "../components/global/wrapper";

export default function NotFound() {
    return (
        <Wrapper className="relative flex min-h-screen items-center justify-center overflow-hidden py-32">
            {/* Brand Radial Glow */}
            <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 mx-auto h-72 w-3/4 rounded-full bg-[radial-gradient(86%_172%_at_50%_-40%,rgba(241,10,10,0.8)_0%,rgba(5,5,5,0)_80%)] blur-[6rem]" />

            {/* Floating Bot Icons */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <Bot className="absolute left-[10%] top-[20%] h-8 w-8 text-foreground/60 animate-[float_6s_ease-in-out_infinite]" />
                <Bot className="absolute right-[15%] top-[30%] h-10 w-10 text-primary/50 animate-[float_8s_ease-in-out_infinite]" />
                <Bot className="absolute bottom-[25%] left-[20%] h-7 w-7 text-foreground/60 animate-[float_7s_ease-in-out_infinite]" />
                <Bot className="absolute bottom-[15%] right-[18%] h-9 w-9 text-primary/50 animate-[float_9s_ease-in-out_infinite]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Badge */}
                <AnimationContainer animation="fadeDown">
                    <Badge
                        variant="outline"
                        className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
                    >
                        {/* moving shine */}
                        <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

                        <span className="relative flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-[#f10a0a] transition-transform duration-300 group-hover:rotate-12" />
                            <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                               Page Not Found
                            </span>
                        </span>
                    </Badge>
                </AnimationContainer>

                {/* 404 */}
                <AnimationContainer animation="fadeUp" delay={0.15}>
                    <h1 className="mt-10 text-7xl font-semibold tracking-tight md:text-8xl">
                        <span className="bg-linear-to-r from-foreground to-[#f10a0a] bg-clip-text text-transparent">
                            404
                        </span>
                    </h1>
                </AnimationContainer>

                {/* Message */}
                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="mt-6 text-2xl font-medium md:text-3xl">
                        You’ve stepped into the void
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.45}>
                    <p className="mt-4 max-w-xl text-muted-foreground">
                        The page you’re looking for doesn’t exist or has drifted beyond the
                        server boundaries. Let’s guide you back home.
                    </p>
                </AnimationContainer>

                {/* CTA */}
                <AnimationContainer animation="scaleUp" delay={0.6}>
                    <div className="mt-10">
                        <Link href="/">
                            <Button size="lg" className="gap-2 px-8 py-6">
                                <Home className="h-5 w-5" />
                                Go Back Home
                            </Button>
                        </Link>
                    </div>
                </AnimationContainer>
            </div>

            {/* Custom floating animation */}
            <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
        </Wrapper>
    );
}