import Hero from '@/components/main/hero'
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
    </div>
  )
}

export default HomePage
