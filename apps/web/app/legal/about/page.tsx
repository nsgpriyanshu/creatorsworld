"use client";

import type { JSX } from "react";
import { Info } from "lucide-react";
import AboutContent from "../../../features/legal/components/about-content";
import LegalHero from "../../../features/legal/components/legal-hero";
import { aboutDescription } from "../../../features/legal/data/legal";

export default function AboutPage(): JSX.Element {
  return (
    <div className="relative flex w-full flex-col">
      <LegalHero
        icon={<Info />}
        badge="Our Journey"
        title="About Creators World"
        description="From a simple dream to the world's largest verified Discord bot server, discover how we're revolutionizing community and innovation."
      />

      <section className="w-full px-6 pb-20">
        <AboutContent description={aboutDescription} />
      </section>
    </div>
  );
}
