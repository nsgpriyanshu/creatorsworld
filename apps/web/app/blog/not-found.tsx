"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Home,
  SearchX,
  Sparkles,
  Rss,
} from "lucide-react";

import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";

import AnimationContainer from "../../components/global/animation-container";
import Wrapper from "../../components/global/wrapper";

export default function BlogNotFound() {
  return (
    <Wrapper className="relative w-full overflow-hidden pt-24 pb-12 md:pt-24 md:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.14]"
      />

      <section className="mx-auto w-full max-w-6xl rounded-md border border-border">
        <AnimationContainer animation="fadeDown">
          <div className="flex justify-center border-b border-dashed border-border p-4">
            <Badge
              variant="outline"
              className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              <span className="relative flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Blog Error 404
                </span>
              </span>
            </Badge>
          </div>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.15}>
          <div className="border-b border-dashed border-border px-6 py-10 text-center">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
              <div className="rounded-md border border-dashed border-border bg-background/70 p-4 backdrop-blur">
                <SearchX className="h-8 w-8 text-muted-foreground" />
              </div>
              <h1 className="text-balance text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                Article not found,
                <span className="block text-muted-foreground">
                  this post is unavailable
                </span>
              </h1>
            </div>
          </div>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <div className="border-b border-dashed border-border px-6 py-8 text-center">
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              The requested article may have been removed, renamed, or never
              published. Use the blog index or return home to continue browsing.
            </p>
          </div>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.45}>
          <div className="grid border-b border-dashed border-border md:grid-cols-2">
            <div className="flex items-center justify-center border-b border-dashed border-border p-6 md:border-b-0 md:border-r md:border-dashed md:border-border">
              <Button
                size="lg"
                className="h-11 gap-2 rounded-md px-8 text-base md:h-12"
                render={<Link href="/blog" />}
              >
                <BookOpen className="h-4 w-4" />
                Browse Blog
              </Button>
            </div>
            <div className="flex items-center justify-center p-6">
              <Button
                size="lg"
                variant="outline"
                className="h-11 gap-2 rounded-md px-8 text-base md:h-12"
                render={<Link href="/" />}
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Button>
            </div>
          </div>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="border-b border-dashed border-border p-6 transition-colors hover:bg-muted/30 md:border-b-0 md:border-r md:border-dashed md:border-border">
              <Rss className="mb-3 h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Content Status</p>
              <h3 className="text-xl font-semibold">Post Missing</h3>
            </div>
            <div className="border-b border-dashed border-border p-6 transition-colors hover:bg-muted/30 md:border-b-0 md:border-r md:border-dashed md:border-border">
              <ArrowLeft className="mb-3 h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Best Next Step</p>
              <h3 className="text-xl font-semibold">Open the blog archive</h3>
            </div>
            <div className="p-6 transition-colors hover:bg-muted/30">
              <BookOpen className="mb-3 h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Recommended Route</p>
              <h3 className="text-xl font-semibold">/blog</h3>
            </div>
          </div>
        </AnimationContainer>
      </section>
    </Wrapper>
  );
}
