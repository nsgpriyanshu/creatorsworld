import Features from '@/components/main/features'
import Hero from '@/components/main/hero'
import Regents from '@/components/main/regents'
import Reviews from '@/components/main/reviews'
import WWA from '@/components/main/who_we_are'

const HomePage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <Hero />
      </section>
      <section className="w-full">
        <WWA />
      </section>
      <section className="w-full">
        <Features />
      </section>
      <section className="w-full">
        <Reviews />
      </section>
      <section className="w-full">
        <Regents />
      </section>
    </div>
  )
}

export default HomePage
