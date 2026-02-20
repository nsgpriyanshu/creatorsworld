"use client";

import type { JSX } from "react";
import { Lock } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import LegalContent from "../../../components/legal/legal-content";
import { policies } from "../../../constants/legal";

export default function PrivacyPage(): JSX.Element {
  return (
    <div className="relative flex w-full flex-col">
      {/* Header Section (Replaces LegalHero) */}
      <section className="relative flex w-full flex-col items-center gap-6 px-6 py-20 sm:py-24 text-center">
        {/* Subtle background glow */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-muted/40 via-transparent to-transparent" />

        <Badge
          variant="outline"
          className="group relative overflow-hidden border-border bg-background/60 px-6 py-2 backdrop-blur-md transition-all duration-300 hover:shadow-md"
        >
          <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

          <span className="relative flex items-center gap-2">
            <Lock className="h-4 w-4 text-[#f10a0a] transition-transform duration-300 group-hover:rotate-12" />
            <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent text-sm font-semibold tracking-wide">
              Your Privacy Matters
            </span>
          </span>
        </Badge>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Privacy Policy
        </h1>

        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          We believe in transparency and protecting your privacy. Learn how we
          collect, use, and safeguard your information.
        </p>
      </section>

      {/* Content Section */}
      <section className="w-full px-6 pb-24">
        <LegalContent items={policies} />
      </section>

      {/* Footer CTA */}
      <section className="w-full border-t border-border/50 bg-background/50 py-20 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Questions About Your Privacy?
          </h2>

          <p className="mt-4 text-muted-foreground">
            If you have any concerns about your personal data or how we handle
            information, please don't hesitate to reach out to us.
          </p>

          <Button className="mt-6">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
