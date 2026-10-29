import { useState, useEffect, useRef, useCallback } from 'react'
import { useLenis } from 'lenis/react'
import { CoffeeCup } from './CoffeeCup'
import { CoffeeStream } from './CoffeeStream'

interface ResponsiveCupConfig {
  width: number
  top: number
  left: number
  amplitude: number
}

function getResponsiveConfig(windowWidth: number): ResponsiveCupConfig {
  if (windowWidth >= 1024) {
    // Desktop (1024px, 1440px, 1920px) — comfortably cleared below the 80px navbar
    return {
      width: 72,
      top: 104,
      left: 28,
      amplitude: 2.8,
    }
  } else if (windowWidth >= 768) {
    // Tablet (768px - 1023px) — below the 72px navbar
    return {
      width: 62,
      top: 92,
      left: 20,
      amplitude: 2.4,
    }
  } else if (windowWidth >= 380) {
    // Standard Mobile (380px - 767px) — below the 64px mobile navbar
    return {
      width: 50,
      top: 80,
      left: 12,
      amplitude: 1.8,
    }
  } else {
    // Small Mobile (320px - 379px)
    return {
      width: 44,
      top: 76,
      left: 8,
      amplitude: 1.4,
    }
  }
}

/**
 * Signature Scroll-Linked Coffee Flow for Compylo Café.
 * 
 * Architecture:
 * - Positioned in a dedicated fixed viewport layer (pointer-events: none, z-30).
 * - Branded ceramic espresso cup mounted near the top-left corner below the navbar.
 * - Multi-layer liquid stream connects with zero gap to the cup outlet nozzle.
 * - Progress synchronized with page scroll (using Lenis smooth scroll engine + native fallback).
 * - Extends continuously downward as the user scrolls, reaching the bottom at max scroll,
 *   and retracts in exact reverse synchronization.
 * - Zero interference with existing navigation, typography, buttons, or page flow.
 */
export function CoffeeFlow() {
  const [progress, setProgress] = useState(0)

  const [viewportHeight, setViewportHeight] = useState(() =>
    typeof window !== 'undefined' ? window.innerHeight : 800
  )

  const [config, setConfig] = useState<ResponsiveCupConfig>(() =>
    typeof window !== 'undefined'
      ? getResponsiveConfig(window.innerWidth)
      : { width: 72, top: 104, left: 28, amplitude: 2.8 }
  )

  const [outletCoords, setOutletCoords] = useState<{ x: number; y: number }>(() => {
    const initialConfig =
      typeof window !== 'undefined'
        ? getResponsiveConfig(window.innerWidth)
        : { width: 72, top: 104, left: 28, amplitude: 2.8 }
    const estimatedHeight = initialConfig.width * (80 / 88)
    return {
      x: initialConfig.left + initialConfig.width * (36 / 88),
      y: initialConfig.top + estimatedHeight * (71.5 / 80),
    }
  })

  const [isReducedMotion, setIsReducedMotion] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )

  const outletRef = useRef<SVGCircleElement>(null)

  // 1. Measure and update outlet coordinates
  const updateMeasurements = useCallback(() => {
    if (typeof window === 'undefined') return

    const winW = window.innerWidth
    const winH = window.innerHeight
    setViewportHeight(winH)

    const nextConfig = getResponsiveConfig(winW)
    setConfig(nextConfig)

    // Accurate sub-pixel positioning from DOM element
    if (outletRef.current) {
      const rect = outletRef.current.getBoundingClientRect()
      if (rect.width > 0 || rect.top > 0) {
        setOutletCoords({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        })
        return
      }
    }

    // Mathematical fallback if bounding rect is not yet ready
    const estimatedHeight = nextConfig.width * (80 / 88)
    setOutletCoords({
      x: nextConfig.left + nextConfig.width * (36 / 88),
      y: nextConfig.top + estimatedHeight * (71.5 / 80),
    })
  }, [])

  // 2. Native scroll progress calculation (handles native scrolling or fallback)
  const calculateScrollProgress = useCallback(() => {
    if (typeof window === 'undefined') return

    const scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      0

    const docHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      document.documentElement.offsetHeight,
      1
    )
    const winHeight =
      window.innerHeight || document.documentElement.clientHeight || 1

    const maxScroll = Math.max(docHeight - winHeight, 1)
    const rawProgress = scrollY / maxScroll
    const clampedProgress = Math.min(Math.max(rawProgress, 0), 1)

    setProgress(clampedProgress)
  }, [])

  // 3. Lenis scroll listener (buttery 60fps/120fps sync)
  useLenis((lenis) => {
    if (typeof lenis?.progress === 'number') {
      const p = Math.min(Math.max(lenis.progress, 0), 1)
      setProgress(p)
    }
  })

  // 4. Setup listeners, resize observer, and reduced motion detection
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mediaHandler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    media.addEventListener('change', mediaHandler)

    // Window resize & scroll listeners
    const handleResize = () => {
      updateMeasurements()
      calculateScrollProgress()
    }

    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('scroll', calculateScrollProgress, { passive: true })

    // Observe document body for dynamic DOM changes (late-loading images/fonts)
    const resizeObserver = new ResizeObserver(() => {
      updateMeasurements()
      calculateScrollProgress()
    })

    if (document.body) {
      resizeObserver.observe(document.body)
    }

    // Refresh measurement after initial DOM paint to ensure outlet sub-pixel accuracy
    const rafId = requestAnimationFrame(() => {
      updateMeasurements()
      calculateScrollProgress()
    })

    return () => {
      cancelAnimationFrame(rafId)
      media.removeEventListener('change', mediaHandler)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', calculateScrollProgress)
      resizeObserver.disconnect()
    }
  }, [updateMeasurements, calculateScrollProgress])

  // Available travel distance: from outletY to the actual document bottom edge in the viewport
  const targetEndY = Math.max(viewportHeight - 14, outletCoords.y + 10)

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none"
      aria-hidden="true"
      style={{
        // Guaranteed zero touch or click interception
        pointerEvents: 'none',
      }}
    >
      {/* Scroll-Linked Continuous Coffee Stream */}
      <CoffeeStream
        startX={outletCoords.x}
        startY={outletCoords.y}
        targetEndY={targetEndY}
        progress={progress}
        amplitude={config.amplitude}
        wavelength={240}
        isReducedMotion={isReducedMotion}
      />

      {/* Branded Ceramic Espresso Cup (Near Top-Left Viewport) */}
      <div
        className="absolute transition-[left,top,width] duration-200 ease-out"
        style={{
          left: `${config.left}px`,
          top: `${config.top}px`,
          width: `${config.width}px`,
        }}
      >
        <CoffeeCup
          width={config.width}
          outletRef={outletRef}
          className="transition-transform duration-300 ease-out"
        />
      </div>
    </div>
  )
}
