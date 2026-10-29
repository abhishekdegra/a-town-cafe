import { useState, useRef } from 'react'
import { motion } from 'motion/react'
import { ArrowDown, Coffee, MapPin, Sparkles } from 'lucide-react'
import { CAFE_CONFIG } from '@/config/cafeConfig'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#221813]"
      aria-label="Welcome to A-Town Café"
    >
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Poster Image Always Present as Base to Prevent Any Flash */}
        <img
          src={CAFE_CONFIG.media.heroPoster}
          alt="Warm interior of A-Town Café with pendant lights and natural oak tables"
          fetchPriority="high"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-0' : 'opacity-100 animate-ken-burns'
          }`}
        />

        {/* Video Player */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
            onError={() => {
              setVideoError(true)
              setVideoLoaded(false)
            }}
            className={`absolute inset-0 h-full w-full object-cover object-center scale-105 transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={CAFE_CONFIG.media.heroVideoUrl} type="video/mp4" />
            <source src={CAFE_CONFIG.media.heroVideoFallbackUrl} type="video/mp4" />
          </video>
        )}

        {/* Cinematic Warm Atmosphere & Overlays */}
        {/* 1. Pendant Light Top Glow Flare */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(230,182,41,0.22)_0%,rgba(199,139,69,0.08)_45%,transparent_70%)]"
          aria-hidden="true"
        />

        {/* 2. Deep Espresso Vignette for Text Contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#221813] via-[#221813]/70 to-[#221813]/40"
          aria-hidden="true"
        />

        {/* 3. Radial Vignette for Editorial Depth */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(34,24,19,0.85)_100%)]"
          aria-hidden="true"
        />

        {/* 4. Fine Warm Stipple Texture */}
        <div
          className="absolute inset-0 bg-[radial-gradient(#E6B629_1px,transparent_1px)] [background-size:36px_36px] opacity-10"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <Container size="lg" className="relative z-10 pt-28 pb-16 sm:py-32">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E6B629]/50 bg-[#2E2018]/80 px-4 py-1.5 backdrop-blur-md shadow-md mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#E6B629]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#E6B629]">
              {CAFE_CONFIG.brand.eyebrow}
            </span>
          </motion.div>

          {/* Subtitle / Brand Sub-mark */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center gap-2 text-xs font-semibold tracking-[0.35em] uppercase text-[#E3B47E] mb-2"
          >
            <span className="h-px w-6 bg-[#C78B45]/60" />
            <span>{CAFE_CONFIG.brand.name} • EST. 2026</span>
            <span className="h-px w-6 bg-[#C78B45]/60" />
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#FFFDF8] leading-[1.06]"
          >
            Good Coffee.{' '}
            <span className="italic font-normal text-[#E6B629]">Great Company.</span>
          </motion.h1>

          {/* Editorial Decorative Flourish */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            className="my-5 flex items-center justify-center gap-3 w-48"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#E6B629]" />
            <div className="h-1.5 w-1.5 rotate-45 bg-[#E6B629]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#E6B629]" />
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-[#F7F0E5]/90 font-normal leading-relaxed tracking-wide px-4"
          >
            {CAFE_CONFIG.brand.heroSupporting}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4"
          >
            <a href="#menu" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={<Coffee className="h-4 w-4" />}
                className="w-full sm:w-auto min-h-[48px] font-bold tracking-wider shadow-lg hover:shadow-[#E6B629]/25 hover:scale-[1.02] transition-transform"
              >
                {CAFE_CONFIG.brand.primaryCta}
              </Button>
            </a>
            <a href="#visit" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                icon={<MapPin className="h-4 w-4" />}
                className="w-full sm:w-auto min-h-[48px] border-[#FFFDF8]/40 text-[#FFFDF8] hover:bg-[#FFFDF8]/10 hover:border-[#E6B629] font-medium transition-all"
              >
                {CAFE_CONFIG.brand.secondaryCta}
              </Button>
            </a>
          </motion.div>

          {/* Frosted Glass Metrics Capsule */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 w-full max-w-3xl rounded-2xl bg-[#2E2018]/70 backdrop-blur-md border border-[#C78B45]/25 p-4 sm:p-5 shadow-2xl"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#C78B45]/20">
              <div className="flex flex-col items-center pt-2 sm:pt-0">
                <span className="text-[#E6B629] font-serif font-bold text-xl sm:text-2xl">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-[#F7F0E5]/80 mt-0.5">
                  Arabica Beans
                </span>
              </div>
              <div className="flex flex-col items-center pt-2 sm:pt-0">
                <span className="text-[#E6B629] font-serif font-bold text-xl sm:text-2xl">Small Batch</span>
                <span className="text-[11px] uppercase tracking-wider text-[#F7F0E5]/80 mt-0.5">
                  In-House Roasts
                </span>
              </div>
              <div className="flex flex-col items-center pt-2 sm:pt-0">
                <span className="text-[#E6B629] font-serif font-bold text-xl sm:text-2xl">Baked Fresh</span>
                <span className="text-[11px] uppercase tracking-wider text-[#F7F0E5]/80 mt-0.5">
                  Artisan Pastries
                </span>
              </div>
              <div className="flex flex-col items-center pt-2 sm:pt-0">
                <span className="text-[#E6B629] font-serif font-bold text-xl sm:text-2xl">4.9 ★</span>
                <span className="text-[11px] uppercase tracking-wider text-[#F7F0E5]/80 mt-0.5">
                  Community Love
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Subtle Scroll Down Link */}
      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="Scroll down to Our Story"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#F7F0E5]/60 hover:text-[#E6B629] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629] rounded p-1"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  )
}
