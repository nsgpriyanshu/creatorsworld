import Blog from '@/components/Blog'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import GettingStarted from '@/components/GettingStarted'
import HeroSection from '@/components/HeroSection'
import Moderators from '@/components/Moderators'
import Testimonialcards from '@/components/TestimonialCards'
import WorldWide from '@/components/WorldWide'

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <GettingStarted />
      <Features />
      <WorldWide />
      <Testimonialcards />
      <Blog />
      <Moderators />
      <Footer />
    </main>
  )
}
