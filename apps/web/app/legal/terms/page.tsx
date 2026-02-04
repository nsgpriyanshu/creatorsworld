import { FileText } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import LegalHero from "../../../components/legal/legal-hero";
import LegalContent from "../../../components/legal/legal-content";
import { terms } from "../../../constants/legal";

export default function ToSPage() {
  return (
    <div className="relative flex w-full flex-col">
      {/* Hero */}
      <section className="w-full">
        <LegalHero
          icon={<FileText className="h-4 w-4 text-[#f10a0a]" />}
          badge="Community Rules"
          title="Terms of Service"
          description="Please read our Terms of Service carefully. By using Creators World, you agree to these terms and conditions."
        />
      </section>

      {/* Content */}
      <section className="w-full">
        <LegalContent items={terms} />
      </section>

      {/* Footer CTA */}
      <section className="w-full border-t border-border/50 bg-background/50 py-16 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-20">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Have Questions About Our Terms?
          </h2>
          <p className="mt-4 text-muted-foreground">
            If you need clarification on any of our terms or have concerns about
            how they apply to you, our team is here to help.
          </p>
          <Button className="mt-6">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
