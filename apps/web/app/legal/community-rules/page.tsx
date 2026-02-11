import { ShieldCheck } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import LegalHero from "../../../components/legal/legal-hero";
import LegalContent from "../../../components/legal/legal-content";
import { rules } from "../../../constants/legal";

export default function CRPage() {
  return (
    <div className="relative flex w-full flex-col">
      {/* Hero */}
      <section className="w-full">
        <LegalHero
          icon={<ShieldCheck className="h-5 w-5 text-[#f10a0a]" />}
          badge="Community Rules"
          title="Community Rules"
          description="Please read our Community Rules carefully. By participating in Creators World, you agree to follow these guidelines to maintain a safe and respectful environment."
        />
      </section>

      {/* Content */}
      <section className="w-full">
        <LegalContent items={rules} />
      </section>

      {/* Footer CTA */}
      <section className="w-full border-t border-border/50 bg-background/50 py-16 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-20">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Have Questions About Our Community Rules?
          </h2>
          <p className="mt-4 text-muted-foreground">
            If you need clarification about our guidelines or moderation
            policies, feel free to contact our team.
          </p>
          <Button className="mt-6">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
