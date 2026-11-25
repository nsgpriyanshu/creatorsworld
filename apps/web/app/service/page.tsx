import BookCallCta from "../../features/service/components/book-a-call";
import FAQ from "../../features/service/components/faq";
import Pricing from "../../features/service/components/pricing";
import ServiceHero from "../../features/service/components/service-hero";
import Showcase from "../../features/service/components/showcase";
import WhatYouGet from "../../features/service/components/what-you-get";

const ServicePage = () => {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden">
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
        <Showcase />
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
