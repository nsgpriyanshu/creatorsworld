import AnimationContainer from "../../components/global/animation-container";
import GradientASCII from "../../components/global/gradient-ascii";
import Wrapper from "../../components/global/wrapper";

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

        <section className="relative isolate mx-auto flex min-h-[55vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-md border border-border px-6 py-16 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-80"
          >
            <GradientASCII
              className="h-full w-full"
              colors={["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"]}
              shape="horizon"
              characters=" =+xX0S8#@"
              cellSize={18}
              density={0.65}
              speed={0.5}
              mouseInteraction={false}
              clickEffect="none"
            />
          </div>
          <AnimationContainer animation="fadeUp">
            <h1 className="relative z-10 text-balance text-5xl font-semibold tracking-tight md:text-6xl">
              Creator&apos;s World
            </h1>
          </AnimationContainer>
        </section>
      </Wrapper>
    </div>
  );
};

export default HomePage;
