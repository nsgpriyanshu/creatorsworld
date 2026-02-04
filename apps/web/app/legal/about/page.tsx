import { Sparkles } from "lucide-react";
import LegalHero from "../../../components/legal/legal-hero";
import AboutContent from "../../../components/legal/about-content";
import { aboutDescription } from "../../../constants/legal";

export default function AboutPage() {
  return (
    <div className="relative flex w-full flex-col">
      {/* Hero */}
      <section className="w-full">
        <LegalHero
          icon={<Sparkles className="h-4 w-4 text-[#f10a0a]" />}
          badge="Our Journey"
          title="About Creators World"
          description="From a simple dream to the world's largest verified Discord bot server, discover how we're revolutionizing community and innovation."
        />
      </section>

      {/* Content */}
      <section className="w-full">
        <AboutContent description={aboutDescription} />
      </section>
    </div>
  );
}
