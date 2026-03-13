"use client";

import type { JSX } from "react";
import { ShieldCheck } from "lucide-react";
import LegalContent from "../../../components/legal/legal-content";
import LegalHero from "../../../components/legal/legal-hero";
import { rules } from "../../../constants/legal";

export default function CRPage(): JSX.Element {
  return (
    <div className="relative flex w-full flex-col">
      <LegalHero
        icon={<ShieldCheck />}
        badge="Community Rules"
        title="Community Rules"
        description="Please read our Community Rules carefully. By participating in Creators World, you agree to follow these guidelines to maintain a safe and respectful environment."
        effectiveDate="March 13, 2026"
      />

      <section className="w-full pb-24">
        <LegalContent items={rules} />
      </section>
    </div>
  );
}
