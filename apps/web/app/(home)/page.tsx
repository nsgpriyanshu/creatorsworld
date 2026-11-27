import Wrapper from "../../components/global/wrapper";
import { ClientShowcase } from "../../components/home/client-showcase";
import { HomeHero } from "../../components/home/home-hero";
import { ServicesPreview } from "../../components/home/services-preview";

const HomePage = () => {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden">
      <Wrapper className="relative w-full overflow-hidden pt-24 pb-16 md:pt-24 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        >
          <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <HomeHero />
        <ServicesPreview />
        <ClientShowcase />
      </Wrapper>
    </div>
  );
};

export default HomePage;
