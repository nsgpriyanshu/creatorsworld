import BookCallCta from "../../components/service/book-a-call";
import FAQ from "../../components/service/faq";
import Pricing from "../../components/service/pricing";
import ServiceHero from "../../components/service/service-hero";
import WhatYouGet from "../../components/service/what-you-get";
import TechStackOrbit from "../../components/service/tech-stack";

const ServicePage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <ServiceHero />
      </section>
      <section className="w-full">
        <Pricing />
      </section>
      <section className="w-full">
        <WhatYouGet />
      </section>
      <section className="w-full">
        <TechStackOrbit />
      </section>
      <section className="w-full">
        <FAQ />
      </section>
      <section className="w-full">
        <BookCallCta />
      </section>
    </div>
  );
};

export default ServicePage;
