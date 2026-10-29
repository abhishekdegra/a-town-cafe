import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Coffee, MapPin, Phone, MessageCircle, Clock } from 'lucide-react'
import { CAFE_CONFIG } from '@/config/cafeConfig'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

interface NavLinkItem {
  name: string
  href: string
}

const navLinks: NavLinkItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'Our Story', href: '#story' },
  { name: 'Experience', href: '#highlights' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Visit Us', href: '#visit' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Scroll spy & background transition
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 40)

      const sections = ['hero', 'story', 'highlights', 'menu', 'gallery', 'reviews', 'visit']
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll and handle Escape key for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#221813]/95 backdrop-blur-md shadow-xl border-b border-[#C78B45]/20 py-3 text-[#F7F0E5]'
            : 'bg-gradient-to-b from-[#221813]/85 via-[#221813]/40 to-transparent py-4 sm:py-5 text-[#FFFDF8]'
        }`}
      >
        <Container size="lg">
          <div className="flex items-center justify-between">
            {/* Wordmark Logo */}
            <a
              href="#hero"
              className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629] rounded-lg p-1"
              aria-label="A-Town Café - Home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6B629] text-[#221813] transition-transform duration-300 group-hover:scale-105 shadow-md">
                <Coffee className="h-5 w-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#FFFDF8] group-hover:text-[#E6B629] transition-colors">
                  {CAFE_CONFIG.brand.wordmark}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#E6B629] font-medium -mt-1">
                  Artisanal Coffee & Kitchen
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative text-xs font-semibold uppercase tracking-widest transition-colors duration-200 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629] rounded ${
                      isActive
                        ? 'text-[#E6B629]'
                        : 'text-[#F7F0E5]/80 hover:text-[#FFFDF8]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="navActiveUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E6B629]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                )
              })}
            </nav>

            {/* Desktop Visit CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a href="#visit">
                <Button
                  variant="primary"
                  size="sm"
                  icon={<MapPin className="h-3.5 w-3.5" />}
                  className="font-bold text-xs shadow-md"
                >
                  Visit Café
                </Button>
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#F7F0E5] hover:text-[#E6B629] hover:bg-[#35271F]/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629] min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-[#1A120E]/85 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#221813] border-l border-[#C78B45]/25 p-6 flex flex-col justify-between shadow-2xl lg:hidden text-[#F7F0E5] overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[#C78B45]/20">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6B629] text-[#221813]">
                      <Coffee className="h-4 w-4" />
                    </div>
                    <span className="font-serif text-lg font-bold tracking-wider text-[#FFFDF8]">
                      {CAFE_CONFIG.brand.wordmark}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-[#F7F0E5]/80 hover:text-[#E6B629] hover:bg-[#35271F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629]"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="mt-6 flex flex-col gap-1.5">
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.href.replace('#', '')
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * idx }}
                        className={`flex items-center justify-between min-h-[48px] px-4 rounded-xl text-base font-serif transition-colors ${
                          isActive
                            ? 'bg-[#35271F] text-[#E6B629] font-bold'
                            : 'text-[#F7F0E5] hover:bg-[#35271F]/60 hover:text-[#E6B629]'
                        }`}
                      >
                        <span>{link.name}</span>
                        <span className="text-xs font-sans text-[#E6B629]">→</span>
                      </motion.a>
                    )
                  })}
                </nav>
              </div>

              {/* Mobile Drawer Quick Actions & Contact Details */}
              <div className="pt-6 border-t border-[#C78B45]/20 space-y-4">
                <a
                  href="#visit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <Button variant="primary" size="md" className="w-full font-bold min-h-[48px]">
                    Visit Café Today
                  </Button>
                </a>

                {/* Quick Call & WhatsApp Buttons */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={CAFE_CONFIG.contact.phoneCall}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#35271F] hover:bg-[#35271F]/80 text-[#F7F0E5] border border-[#C78B45]/20 font-medium"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#E6B629]" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={CAFE_CONFIG.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#FFFDF8] border border-[#25D366]/40 font-medium"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="text-[11px] text-[#A59282] space-y-1 pt-1">
                  <div className="flex items-center gap-1.5 text-[#F7F0E5]">
                    <MapPin className="h-3.5 w-3.5 text-[#E6B629] shrink-0" />
                    <span>{CAFE_CONFIG.contact.addressLine1}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#E6B629] shrink-0" />
                    <span>Mon–Sun: 8:00 AM – 10:30 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
