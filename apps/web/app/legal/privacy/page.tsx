"use client";

import type { JSX } from "react";
import { Lock } from "lucide-react";
import LegalContent from "../../../features/legal/components/legal-content";
import LegalHero from "../../../features/legal/components/legal-hero";
import { policies } from "../../../features/legal/data/legal";

export default function PrivacyPage(): JSX.Element {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden">
      <LegalHero
        icon={<Lock />}
        badge="Your Privacy Matters"
        title="Privacy Policy"
        description="We believe in transparency and protecting your privacy. Learn how we collect, use, and safeguard your information."
        effectiveDate="March 13, 2026"
      />

      <section className="w-full pb-24">
        <LegalContent items={policies} />
      </section>
    </div>
  );
}
