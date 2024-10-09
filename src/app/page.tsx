import Features from '@/components/Features'
import Footer from '@/components/Footer'
import GettingStarted from '@/components/GettingStarted'
import HeroSection from '@/components/HeroSection'
import Moderators from '@/components/Moderators'
import Partners from '@/components/Partners'
import Testimonialcards from '@/components/TestimonialCards'
import WorldWide from '@/components/WorldWide'

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      <HeroSection />
      <GettingStarted />
      <Features />
      <WorldWide />
      <Partners />
      <Testimonialcards />
      <Moderators />
    </main>
  )
}
