import { Lock } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import LegalHero from "../../../components/legal/legal-hero";
import LegalContent from "../../../components/legal/legal-content";
import { policies } from "../../../constants/legal";

export default function PrivacyPage() {
  return (
    <div className="relative flex w-full flex-col">
      {/* Hero */}
      <section className="w-full">
        <LegalHero
          icon={<Lock className="h-4 w-4 text-[#f10a0a]" />}
          badge="Your Privacy Matters"
          title="Privacy Policy"
          description="We believe in transparency and protecting your privacy. Learn how we collect, use, and safeguard your information."
        />
      </section>

      {/* Content */}
      <section className="w-full">
        <LegalContent items={policies} />
      </section>

      {/* Footer CTA */}
      <section className="w-full border-t border-border/50 bg-background/50 py-16 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-20">
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
