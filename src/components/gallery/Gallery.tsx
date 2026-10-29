import { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
} from 'lucide-react'
import { CAFE_CONFIG, type GalleryItem } from '@/config/cafeConfig'
import { Container } from '@/components/layout/Container'

const galleryCategories = ['All', 'Interiors', 'Coffee', 'Food', 'Ambience', 'Details'] as const

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const filteredGallery =
    selectedCategory === 'All'
      ? CAFE_CONFIG.gallery
      : CAFE_CONFIG.gallery.filter((item) => item.category === selectedCategory)

  // Open native dialog modal (Modern Web Guidance)
  const openLightbox = (index: number) => {
    setActiveItemIndex(index)
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal()
    }
  }

  // Close native dialog modal
  const closeLightbox = () => {
    if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close()
    }
    setActiveItemIndex(null)
  }

  // Next / Previous navigation
  const nextItem = () => {
    setActiveItemIndex((prev) =>
      prev !== null ? (prev + 1) % filteredGallery.length : 0
    )
  }

  const prevItem = () => {
    setActiveItemIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredGallery.length) % filteredGallery.length
        : 0
    )
  }

  // Keyboard navigation (Arrow keys + Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!dialogRef.current?.open) return
      if (e.key === 'ArrowRight') {
        setActiveItemIndex((prev) =>
          prev !== null ? (prev + 1) % filteredGallery.length : 0
        )
      } else if (e.key === 'ArrowLeft') {
        setActiveItemIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredGallery.length) % filteredGallery.length
            : 0
        )
      } else if (e.key === 'Escape') {
        if (dialogRef.current?.open) {
          dialogRef.current.close()
        }
        setActiveItemIndex(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [filteredGallery.length])

  // Click outside backdrop to dismiss (Modern Web Guidance)
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      closeLightbox()
    }
  }

  const currentItem: GalleryItem | undefined =
    activeItemIndex !== null ? filteredGallery[activeItemIndex] : undefined

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#221813] text-[#F7F0E5] relative overflow-hidden">
      <Container size="lg">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#C78B45]/30 bg-[#2E2018] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#E6B629] mb-4 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#E6B629]" />
            <span>Visual Tour</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFFDF8] leading-tight"
          >
            Spaces &amp; <span className="italic font-normal text-[#E6B629]">Sips</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#F7F0E5]/75 leading-relaxed"
          >
            A glimpse into the warm light, natural wood textures, and cozy ambience waiting for you at Compylo.
          </motion.p>
        </div>

        {/* Gallery Filter Pills */}
        <div className="flex items-center justify-center mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#2E2018] border border-[#C78B45]/20 shadow-inner">
            {galleryCategories.map((category) => {
              const isActive = selectedCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629] ${
                    isActive
                      ? 'bg-[#E6B629] text-[#221813] font-bold shadow-sm'
                      : 'text-[#F7F0E5]/70 hover:text-[#FFFDF8] hover:bg-[#35271F]'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredGallery.map((item, index) => {
            const isWide = item.aspect === 'wide'
            const isTall = item.aspect === 'tall'

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden rounded-2xl bg-[#2E2018] border border-[#C78B45]/20 cursor-pointer shadow-md hover:border-[#E6B629] transition-all duration-300 ${
                  isWide ? 'sm:col-span-2' : ''
                } ${isTall ? 'sm:row-span-2' : ''}`}
              >
                <div className={`w-full overflow-hidden ${isTall ? 'h-96 sm:h-full min-h-[380px]' : 'h-64 sm:h-72'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#221813]/95 via-[#221813]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#E6B629]">
                      {item.category}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E6B629] text-[#221813] shadow-md">
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#FFFDF8]">{item.title}</h3>
                  <p className="text-xs text-[#F7F0E5]/80 mt-1 line-clamp-2">{item.caption}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>

      {/* Accessible Native <dialog> Modal Lightbox (Modern Web Guidance) */}
      <dialog
        ref={dialogRef}
        onClick={handleDialogClick}
        aria-labelledby="lightbox-title"
        className="fixed inset-0 m-auto z-50 max-w-4xl w-[92vw] bg-[#221813] text-[#F7F0E5] rounded-2xl border border-[#C78B45]/40 shadow-2xl p-0 backdrop:bg-[#1A120E]/85 backdrop:backdrop-blur-md outline-none"
      >
        {currentItem && (
          <div className="flex flex-col overflow-hidden max-h-[90vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#C78B45]/20 bg-[#2E2018]">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6B629] text-[#221813]">
                  <Camera className="h-4 w-4" />
                </span>
                <div>
                  <h3 id="lightbox-title" className="font-serif text-base sm:text-lg font-bold text-[#FFFDF8]">
                    {currentItem.title}
                  </h3>
                  <span className="text-xs text-[#E6B629] uppercase tracking-wider font-medium">
                    {currentItem.category} • {activeItemIndex! + 1} of {filteredGallery.length}
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#35271F] text-[#F7F0E5] hover:text-[#E6B629] hover:bg-[#35271F]/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629]"
                aria-label="Close photo preview"
                autoFocus
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Photo & Navigation Controls */}
            <div className="relative flex-1 bg-[#1A120E] flex items-center justify-center min-h-[320px] max-h-[65vh] p-3 sm:p-5 select-none">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[60vh] max-w-full w-auto object-contain rounded-xl shadow-2xl"
              />

              {/* Previous Button */}
              <button
                type="button"
                onClick={prevItem}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#221813]/90 text-[#F7F0E5] hover:text-[#E6B629] hover:bg-[#221813] transition-all border border-[#C78B45]/40 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629]"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextItem}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#221813]/90 text-[#F7F0E5] hover:text-[#E6B629] hover:bg-[#221813] transition-all border border-[#C78B45]/40 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629]"
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Caption & Keyboard Helper */}
            <div className="px-6 py-4 bg-[#2E2018] border-t border-[#C78B45]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#F7F0E5]/80">
              <p className="leading-relaxed">{currentItem.caption}</p>
              <span className="shrink-0 text-[#E3B47E] text-[11px] font-medium">
                Use Left / Right arrow keys to navigate • Esc to close
              </span>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
