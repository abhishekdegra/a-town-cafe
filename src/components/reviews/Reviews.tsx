import { motion } from 'motion/react'
import { Sparkles, Star, Quote, MessageSquare, CheckCircle } from 'lucide-react'
import { CAFE_CONFIG } from '@/config/cafeConfig'
import { Container } from '@/components/layout/Container'

const authorInitials: Record<string, string> = {
  'rev-1': 'AS',
  'rev-2': 'RM',
  'rev-3': 'PK',
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#FAF5EE] text-[#35271F] relative">
      <Container size="lg">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#806B5B]/25 bg-[#FFFDF8] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C78B45] mb-4 shadow-xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#E6B629]" />
            <span>Community Love</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-[#221813] leading-tight"
          >
            Warm Words From Our{' '}
            <span className="italic font-normal text-[#C78B45]">Guests</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#5C4A3E] leading-relaxed"
          >
            A sample of community impressions and notes from our guests who made A-Town their daily coffee haven.
          </motion.p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {CAFE_CONFIG.reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col justify-between rounded-2xl bg-[#FFFDF8] border border-[#806B5B]/15 p-7 shadow-xs hover:shadow-xl hover:border-[#C78B45]/40 transition-all duration-300 relative"
            >
              {/* Background Quote Icon */}
              <div className="absolute top-6 right-6 text-[#E6B629]/20 pointer-events-none">
                <Quote className="h-10 w-10 rotate-180" />
              </div>

              <div>
                {/* 5-Star Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#E6B629]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/50">
                    <CheckCircle className="h-3 w-3" /> Verified Guest
                  </span>
                </div>

                {/* Comment */}
                <p className="text-[#221813] text-base leading-relaxed italic mb-6 font-serif">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info with Monogram Avatar */}
              <div className="pt-4 border-t border-[#806B5B]/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6B629]/25 text-[#221813] font-serif font-bold text-xs border border-[#E6B629]/40 shadow-xs">
                    {authorInitials[review.id] || 'AG'}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#221813]">{review.author}</h4>
                    <p className="text-xs text-[#5C4A3E]">{review.role}</p>
                  </div>
                </div>
                <span className="text-[11px] text-[#C78B45] font-medium bg-[#E6B629]/10 px-2.5 py-0.5 rounded-full">
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guest Note & Google Review Callout */}
        <div className="mt-14 max-w-xl mx-auto text-center rounded-2xl bg-[#FFFDF8] border border-[#806B5B]/15 p-6 shadow-xs">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E6B629]/20 text-[#221813] mb-3">
            <MessageSquare className="h-5 w-5 text-[#C78B45]" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#221813]">Have you visited us recently?</h3>
          <p className="text-xs sm:text-sm text-[#5C4A3E] mt-1 max-w-md mx-auto leading-relaxed">
            We love hearing about your favorite brews and moments. Leave a review on Google or tag us on Instagram.
          </p>
          <div className="mt-4">
            <a
              href={CAFE_CONFIG.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C78B45] hover:text-[#221813] transition-colors"
            >
              <span>Review Us on Google Maps</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
