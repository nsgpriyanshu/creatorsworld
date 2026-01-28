import About from "../../components/home/about"
import Feature from "../../components/home/features"
import Hero from "../../components/home/hero"

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
    </div>
  )
}

export default HomePage