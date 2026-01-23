import Hero from '@/components/home/hero'
import Partners from '@/components/home/partners'

const HomePage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <Hero />
      </section>
      <section className="w-full">
        <Partners />
      </section>
      {/* <section className="w-full">
        <WWA />
      </section>
      <section className="w-full">
        <Features />
      </section>
      <section className="w-full">
        <PlatformMetrics />
      </section>
      <section className="w-full">
        <Reviews />
      </section>
      <section className="w-full">
        <Regents />
      </section> */}
    </div>
  )
}

export default HomePage
