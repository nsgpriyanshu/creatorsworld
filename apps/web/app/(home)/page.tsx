import About from "../../components/home/about";
import Feature from "../../components/home/features";
import Hero from "../../components/home/hero";
import Milestones from "../../components/home/milestone";
import Regents from "../../components/home/regents";
import Reviews from "../../components/home/review";
import ServicesCta from "../../components/home/services-cta";

const HomePage = () => {
  return (
    <div className="relative flex w-full flex-col">
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
        <Regents />
      </section>
      <section className="w-full">
        <ServicesCta />
      </section>
    </div>
  );
};

export default HomePage;
