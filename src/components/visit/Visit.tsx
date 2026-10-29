import { useState } from 'react'
import { motion } from 'motion/react'
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  Wifi,
  Sparkles,
  Car,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react'
import { InstagramIcon } from '@/components/ui/Icons'
import { CAFE_CONFIG } from '@/config/cafeConfig'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { LiveStatusPill } from '@/components/ui/LiveStatusPill'

export function Visit() {
  const [copied, setCopied] = useState(false)

  const copyAddress = () => {
    const fullAddress = `${CAFE_CONFIG.contact.addressLine1}, ${CAFE_CONFIG.contact.addressLine2}, ${CAFE_CONFIG.contact.cityStateZip}`
    navigator.clipboard.writeText(fullAddress).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <section id="visit" className="py-24 sm:py-32 bg-[#F7F0E5] text-[#35271F] relative">
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
            <span>Find Your Corner</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-[#221813] leading-tight"
          >
            Come Visit Us at{' '}
            <span className="italic font-normal text-[#C78B45]">A-Town Café</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#5C4A3E] leading-relaxed"
          >
            Whether for your morning brew, afternoon brainstorming, or evening catch-up, our doors
            are open every day.
          </motion.p>
        </div>

        {/* Dual Column Layout: Info Cards & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Details & Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6"
          >
            {/* Address & Directions Card */}
            <div className="rounded-2xl bg-[#FFFDF8] border border-[#806B5B]/15 p-6 sm:p-8 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6B629]/20 text-[#221813]">
                  <MapPin className="h-6 w-6 text-[#C78B45]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#221813]">
                      Café Location
                    </h3>
                    <button
                      type="button"
                      onClick={copyAddress}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF5EE] hover:bg-[#F7F0E5] text-xs font-semibold text-[#5C4A3E] transition-colors border border-[#806B5B]/15 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629]"
                      aria-label="Copy café address to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-[#C78B45]" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-3 text-sm text-[#5C4A3E] space-y-0.5 leading-relaxed">
                    <p className="font-semibold text-[#221813]">{CAFE_CONFIG.contact.addressLine1}</p>
                    <p>{CAFE_CONFIG.contact.addressLine2}</p>
                    <p>{CAFE_CONFIG.contact.cityStateZip}</p>
                    <p className="text-xs text-[#C78B45] font-medium pt-1">
                      Landmark: {CAFE_CONFIG.contact.landmark}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#806B5B]/15">
                    <a
                      href={CAFE_CONFIG.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="primary"
                        size="sm"
                        icon={<Navigation className="h-3.5 w-3.5" />}
                        className="font-bold text-xs"
                      >
                        Get Directions on Google Maps
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="rounded-2xl bg-[#FFFDF8] border border-[#806B5B]/15 p-6 sm:p-8 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6B629]/20 text-[#221813]">
                  <Clock className="h-6 w-6 text-[#C78B45]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#221813]">
                      Opening Hours
                    </h3>
                    <LiveStatusPill size="sm" showDetail={false} />
                  </div>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center justify-between pb-2 border-b border-[#806B5B]/10">
                      <span className="text-[#5C4A3E]">Monday – Friday</span>
                      <span className="font-semibold text-[#221813]">8:00 AM – 10:30 PM</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-[#806B5B]/10">
                      <span className="text-[#5C4A3E]">Saturday – Sunday</span>
                      <span className="font-semibold text-[#221813]">8:00 AM – 11:30 PM</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#5C4A3E] mt-2 italic">
                    {CAFE_CONFIG.timings.kitchenCloses}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Connect Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={CAFE_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-xs">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#221813]">
                    WhatsApp Chat
                  </h4>
                  <p className="text-xs text-[#5C4A3E]">Table Reservations</p>
                </div>
              </a>

              <a
                href={CAFE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#E1306C]/10 border border-[#E1306C]/30 hover:bg-[#E1306C]/20 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E1306C] text-white shadow-xs">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#221813]">
                    {CAFE_CONFIG.contact.instagramHandle}
                  </h4>
                  <p className="text-xs text-[#5C4A3E]">Daily Café Stories</p>
                </div>
              </a>
            </div>

            {/* Amenities Bar */}
            <div className="rounded-xl bg-[#FAF5EE] border border-[#806B5B]/15 p-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#5C4A3E]">
              <span className="flex items-center gap-1.5 font-medium">
                <Wifi className="h-4 w-4 text-[#C78B45]" /> Fast Free Wi-Fi
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Car className="h-4 w-4 text-[#C78B45]" /> Dedicated Parking
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Phone className="h-4 w-4 text-[#C78B45]" /> {CAFE_CONFIG.contact.phoneDisplay}
              </span>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Interactive Embed & Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative flex-1 min-h-[440px] rounded-2xl overflow-hidden border-2 border-[#806B5B]/20 shadow-md bg-[#FAF5EE]">
              <iframe
                title="A-Town Café Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5348398437937!2d75.78727091500001!3d26.912433600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjgiTiA3NcKwNDcnMjIuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[440px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Float badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#221813]/95 text-[#FFFDF8] backdrop-blur-md p-4 rounded-xl border border-[#C78B45]/30 shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E6B629] text-[#221813] font-bold">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#FFFDF8]">
                        {CAFE_CONFIG.brand.name}
                      </h4>
                      <p className="text-xs text-[#E6B629]">
                        Open today until 10:30 PM • Dine-in &amp; Takeaway
                      </p>
                    </div>
                  </div>
                  <a
                    href={CAFE_CONFIG.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#35271F] hover:bg-[#35271F]/80 text-[#E6B629] transition-colors"
                    aria-label="Open in Google Maps"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
