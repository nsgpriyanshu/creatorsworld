import BookCallCta from "../../components/service/book-a-call";
import Pricing from "../../components/service/pricing";
import ServiceHero from "../../components/service/service-hero";
import WhatYouGet from "../../components/service/what-you-get";

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
        <BookCallCta />
      </section>
    </div>
  );
};

export default ServicePage;
