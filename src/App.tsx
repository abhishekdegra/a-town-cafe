import { Navbar } from '@/components/navigation/Navbar'
import { Hero } from '@/components/hero/Hero'
import { Story } from '@/components/story/Story'
import { Highlights } from '@/components/highlights/Highlights'
import { Menu } from '@/components/menu/Menu'
import { Gallery } from '@/components/gallery/Gallery'
import { Reviews } from '@/components/reviews/Reviews'
import { Visit } from '@/components/visit/Visit'
import { Footer } from '@/components/layout/Footer'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

export default function App() {
  return (
    <SmoothScrollProvider>
      <div className="flex min-h-screen flex-col bg-[#F7F0E5] text-[#35271F] font-sans selection:bg-[#E6B629]/30 selection:text-[#35271F]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Sections */}
        <main className="flex-1">
          {/* Cinematic Hero */}
          <Hero />

          {/* Brand Story */}
          <Story />

          {/* Experience Highlights */}
          <Highlights />

          {/* Editorial Menu */}
          <Menu />

          {/* Photo Gallery & Lightbox */}
          <Gallery />

          {/* Community Reviews & Testimonials */}
          <Reviews />

          {/* Location, Contact & Map */}
          <Visit />
        </main>

        {/* Brand Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}
