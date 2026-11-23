import About from "../../components/home/about";
import Feature from "../../components/home/features";
import Hero from "../../components/home/hero";
import Milestones from "../../components/home/milestone";
import Reviews from "../../components/home/review";
import ServicesCta from "../../components/home/services-cta";
import Wrapper from "../../components/global/wrapper";
import { Archive, ArrowRight } from "lucide-react";
import Link from "next/link";

const ArchivePage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <div className="border-b border-dashed border-border bg-muted/20 py-3 text-center text-xs text-muted-foreground">
        <Wrapper className="flex flex-wrap items-center justify-center gap-2 px-4">
          <Archive className="h-3.5 w-3.5 text-muted-foreground" />
          <span>
            <strong>Community Archive:</strong> Preserving our founding Discord bot server & developer community roots.
          </span>
          <Link
            href="/"
            className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            Explore our Web Development Services
            <ArrowRight className="h-3 w-3" />
          </Link>
        </Wrapper>
      </div>

      <section className="w-full">
        <Hero />
      </section>
      <section className="w-full">
        <About />
      </section>
      <section className="w-full">
        <Feature />
      </section>
      <section className="w-full">
        <Milestones />
      </section>
      <section className="w-full">
        <Reviews />
      </section>
      <section className="w-full">
        <ServicesCta />
      </section>
    </div>
  );
};

export default ArchivePage;
