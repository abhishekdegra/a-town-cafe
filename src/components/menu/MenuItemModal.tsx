import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Sparkles, Clock, Coffee, MessageCircle, Leaf } from 'lucide-react'
import { type MenuItem, CAFE_CONFIG } from '@/config/cafeConfig'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export interface MenuItemModalProps {
  item: MenuItem | null
  onClose: () => void
}

export function MenuItemModal({ item, onClose }: MenuItemModalProps) {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!item) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose])

  if (!item) return null

  const whatsappMessage = encodeURIComponent(
    `Hi Compylo Café! I'm interested in ordering the ${item.name} (₹${item.price}). Is it currently available for dine-in or takeaway?`
  )
  const whatsappUrl = `https://wa.me/${CAFE_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-item-title"
      >
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#241912]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl bg-[#FFFDF8] border border-[#C78B45]/25 shadow-2xl text-[#35271F]"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#241912]/70 text-[#FFFDF8] backdrop-blur-md hover:bg-[#241912] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629]"
            aria-label="Close details"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Photo Header */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#241912]">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241912]/80 via-transparent to-transparent" />

            {/* Badges Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#FFFDF8]">
              <div className="flex items-center gap-2">
                {item.badge && (
                  <Badge variant="mustard" className="shadow-md">
                    <Sparkles className="h-3 w-3" />
                    <span>{item.badge}</span>
                  </Badge>
                )}
                {item.dietary && (
                  <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFFDF8] text-emerald-800 text-[11px] font-semibold shadow-md">
                    <Leaf className="h-3 w-3 fill-current text-emerald-600" />
                    <span className="capitalize">{item.dietary}</span>
                  </span>
                )}
              </div>

              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E6B629] bg-[#241912]/80 px-3 py-1 rounded-full backdrop-blur-md">
                {item.category}
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8">
            {/* Title & Price Row */}
            <div className="flex items-start justify-between gap-4 border-b border-[#806B5B]/15 pb-5">
              <div>
                <h3
                  id="modal-item-title"
                  className="font-serif text-2xl sm:text-3xl font-extrabold text-[#221813] leading-snug"
                >
                  {item.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#C78B45] font-semibold">
                  Artisanal House Recipe
                </p>
              </div>

              <span className="font-serif text-2xl sm:text-3xl font-black text-[#221813] shrink-0">
                ₹{item.price}
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              {item.description}
            </p>

            {/* Tasting Notes Pills */}
            {item.tastingNotes && item.tastingNotes.length > 0 && (
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#806B5B] mb-2">
                  Tasting &amp; Flavor Profile
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#F7F0E5] px-3 py-1 text-xs font-semibold text-[#35271F] border border-[#C78B45]/20"
                    >
                      <Sparkles className="h-3 w-3 text-[#E6B629]" />
                      <span>{note}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Brew & Preparation Metadata Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl bg-[#F7F0E5]/70 p-4 border border-[#806B5B]/15 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6B629]/20 text-[#221813]">
                  <Coffee className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#806B5B] block font-bold">
                    Brew Style
                  </span>
                  <span className="font-semibold text-[#221813]">
                    {item.brewMethod || 'Handcrafted Fresh'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6B629]/20 text-[#221813]">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#806B5B] block font-bold">
                    Est. Prep Time
                  </span>
                  <span className="font-semibold text-[#221813]">
                    {item.prepTime || '4-6 minutes'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={<MessageCircle className="h-4 w-4" />}
                  className="w-full font-bold shadow-md hover:shadow-lg transition-all min-h-[46px]"
                >
                  Order / Inquire on WhatsApp
                </Button>
              </a>

              <Button
                variant="outline"
                size="md"
                onClick={onClose}
                className="w-full sm:w-auto font-medium min-h-[46px]"
              >
                Back to Menu
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
