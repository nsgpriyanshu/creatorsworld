import { FileText } from "lucide-react";
import LegalHero from "../../../components/legal/legal-hero";
import LegalContent from "../../../components/legal/legal-content";
import { terms } from "../../../constants/legal";

export default function ToSPage() {
  return (
    <div className="relative flex w-full flex-col">
      {/* Hero */}
      <section className="w-full">
        <LegalHero
          icon={<FileText className="h-4 w-4 text-amber-500" />}
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
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
