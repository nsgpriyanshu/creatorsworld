import BookCallCta from "../../components/service/book-a-call";
import FAQ from "../../components/service/faq";
import Pricing from "../../components/service/pricing";
import ServiceHero from "../../components/service/service-hero";
import WhatYouGet from "../../components/service/what-you-get";
import TechStack from "../../components/service/tech-stack";
import Showcase from "../../components/service/showcase";
import Reviews from "../../components/service/testimonial";

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
        <TechStack />
      </section>
      <section className="w-full">
        <Showcase />
      </section>
      <section className="w-full">
        <Reviews />
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
