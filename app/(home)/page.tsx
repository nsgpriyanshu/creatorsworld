import Hero from '@/components/home/hero'
import LogosMarquee from '@/components/global/logo-marquee'

const HomePage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <Hero />
      </section>
      <section className="w-full">
        <LogosMarquee
        heading="OUR PARTNERS"
        headingLevel="h4"
        images={[
          {
            src: '/assets/partner-1-logo.svg',
            alt: 'Partner 1',
          },
          {
            src: '/assets/partner-2-logo.svg',
            alt: 'Partner 2',
          },
        ]}
      />
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
