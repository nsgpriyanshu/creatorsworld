"use client";

import type { JSX } from "react";
import { Scale } from "lucide-react";
import LegalContent from "../../../components/legal/legal-content";
import LegalHero from "../../../components/legal/legal-hero";
import { terms } from "../../../constants/legal";

export default function TermsPage(): JSX.Element {
  return (
    <div className="relative flex w-full flex-col">
      <LegalHero
        icon={<Scale />}
        badge="Terms of Service"
        title="Terms of Service"
        description="Please read our Terms of Service carefully. By using Creators World, you agree to these terms and conditions."
        effectiveDate="March 13, 2026"
      />

      <section className="w-full pb-24">
        <LegalContent items={terms} />
      </section>
    </div>
  );
}
