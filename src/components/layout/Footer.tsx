import { Coffee, MapPin, Phone, MessageCircle, Heart, ArrowUp } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/Icons'
import { CAFE_CONFIG } from '@/config/cafeConfig'
import { Container } from './Container'

const footerLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Our Story', href: '#story' },
  { name: 'Experience', href: '#highlights' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Visit Us', href: '#visit' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1A120E] text-[#F7F0E5] border-t border-[#C78B45]/20 pt-16 pb-12">
      <Container size="lg">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#C78B45]/20">
          {/* Brand & Wordmark Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6B629] text-[#221813] shadow-md">
                <Coffee className="h-5 w-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-[#FFFDF8]">
                {CAFE_CONFIG.brand.wordmark}
              </span>
            </div>

            <p className="text-sm text-[#F7F0E5]/75 leading-relaxed pr-4">
              {CAFE_CONFIG.brand.heroSupporting}
            </p>

            {/* Social Icons with Accessible Labels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2E2018] text-[#F7F0E5] hover:text-[#E6B629] hover:bg-[#35271F] transition-colors border border-[#C78B45]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629]"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={CAFE_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2E2018] text-[#F7F0E5] hover:text-[#E6B629] hover:bg-[#35271F] transition-colors border border-[#C78B45]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629]"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={CAFE_CONFIG.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2E2018] text-[#F7F0E5] hover:text-[#E6B629] hover:bg-[#35271F] transition-colors border border-[#C78B45]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629]"
                aria-label="Google Maps Directions"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#FFFDF8] uppercase tracking-wider">
              Explore Compylo
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#F7F0E5]/75 hover:text-[#E6B629] transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#FFFDF8] uppercase tracking-wider">
              Opening Hours
            </h4>
            <div className="text-xs sm:text-sm text-[#F7F0E5]/75 space-y-2">
              <div>
                <p className="font-semibold text-[#FFFDF8]">Weekdays</p>
                <p className="text-xs text-[#E6B629]">8:00 AM – 10:30 PM</p>
              </div>
              <div>
                <p className="font-semibold text-[#FFFDF8]">Weekends</p>
                <p className="text-xs text-[#E6B629]">8:00 AM – 11:30 PM</p>
              </div>
              <p className="text-[11px] text-[#A59282] italic pt-1">
                Open all 7 days of the week
              </p>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#FFFDF8] uppercase tracking-wider">
              Find &amp; Contact
            </h4>
            <div className="text-xs sm:text-sm text-[#F7F0E5]/75 space-y-2.5">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#E6B629] shrink-0 mt-0.5" />
                <span>
                  {CAFE_CONFIG.contact.addressLine1}, {CAFE_CONFIG.contact.cityStateZip}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#E6B629] shrink-0" />
                <a
                  href={CAFE_CONFIG.contact.phoneCall}
                  className="hover:text-[#E6B629] transition-colors font-medium"
                >
                  {CAFE_CONFIG.contact.phoneDisplay}
                </a>
              </p>
              <div className="pt-2">
                <span className="inline-block rounded-lg bg-[#2E2018] px-3 py-1.5 text-[11px] text-[#E6B629] border border-[#C78B45]/20 font-medium">
                  Dine-In • Takeaway • Fresh Beans
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A59282]">
          <p>© 2026 {CAFE_CONFIG.brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1.5">
              <span>Crafted with</span>
              <Heart className="h-3.5 w-3.5 text-[#E6B629] fill-current" />
              <span>for coffee lovers and great company</span>
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2E2018] text-[#F7F0E5] hover:text-[#E6B629] hover:bg-[#35271F] transition-colors border border-[#C78B45]/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629]"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  )
}
