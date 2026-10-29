import { motion } from 'motion/react'
import { Coffee, UtensilsCrossed, Armchair, Sparkles } from 'lucide-react'
import { CAFE_CONFIG } from '@/config/cafeConfig'
import { Container } from '@/components/layout/Container'

const highlightIcons = {
  Coffee: Coffee,
  Utensils: UtensilsCrossed,
  Armchair: Armchair,
  Sparkles: Sparkles,
}

const highlightNumbers = ['01', '02', '03', '04']

export function Highlights() {
  return (
    <section id="highlights" className="py-24 sm:py-32 bg-[#221813] text-[#F7F0E5] relative overflow-hidden">
      {/* Background Ambience Glows */}
      <div className="absolute top-0 right-1/4 -z-0 h-96 w-96 rounded-full bg-[#E6B629]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-0 h-80 w-80 rounded-full bg-[#C78B45]/10 blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#C78B45]/30 bg-[#2E2018] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#E6B629] mb-4 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#E6B629]" />
            <span>The A-Town Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFFDF8] leading-tight"
          >
            Crafted for Moments{' '}
            <span className="italic font-normal text-[#E6B629]">That Matter</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#F7F0E5]/75 leading-relaxed"
          >
            Four pillars that define the spirit of A-Town Café — from our beans to our welcoming atmosphere.
          </motion.p>
        </div>

        {/* 4 Cards Grid with Index Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {CAFE_CONFIG.highlights.map((item, index) => {
            const IconComponent = highlightIcons[item.icon as keyof typeof highlightIcons] || Sparkles

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#2E2018] border border-[#C78B45]/20 hover:border-[#E6B629]/60 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1.5"
              >
                {/* Image Container with Dark Gradient */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2018] via-[#2E2018]/40 to-transparent" />

                  {/* Icon & Index Numeral */}
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#221813]/90 text-[#E6B629] border border-[#E6B629]/30 shadow-md">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="absolute top-4 right-4 font-serif text-2xl font-bold text-[#E6B629]/40 group-hover:text-[#E6B629] transition-colors">
                    {highlightNumbers[index]}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-[#C78B45]">
                      {item.tagline}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#FFFDF8] mt-1.5 mb-2.5 group-hover:text-[#E6B629] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#F7F0E5]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-6 pt-4 border-t border-[#C78B45]/15 flex items-center justify-between text-xs text-[#E6B629] font-medium tracking-wider uppercase">
                    <span>Signature Touch</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
