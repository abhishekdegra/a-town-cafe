import { useMemo } from 'react'
import { getStreamPoint, generateStreamSvgPath } from './coffeeStreamMath'

export interface CoffeeStreamProps {
  startX: number
  startY: number
  targetEndY: number
  progress: number
  amplitude?: number
  wavelength?: number
  isReducedMotion?: boolean
}

export function CoffeeStream({
  startX,
  startY,
  targetEndY,
  progress,
  amplitude = 2.5,
  wavelength = 240,
  isReducedMotion = false,
}: CoffeeStreamProps) {
  // Memoize the SVG path string
  const pathD = useMemo(() => {
    return generateStreamSvgPath(startX, startY, targetEndY, amplitude, wavelength)
  }, [startX, startY, targetEndY, amplitude, wavelength])

  // Compute total arc length analytically (arc-length correction for subtle waver)
  const totalLength = useMemo(() => {
    const rawDist = Math.max(targetEndY - startY, 1)
    // For amplitude 2.5 and wave 240, arc length is ~1.001x straight distance
    return Math.round(rawDist * 1.001)
  }, [targetEndY, startY])

  // Tip position calculated analytically (no DOM ref or layout thrashing)
  const tipPosition = useMemo(() => {
    return getStreamPoint(progress, startX, startY, targetEndY, amplitude, wavelength)
  }, [progress, startX, startY, targetEndY, amplitude, wavelength])

  // Stroke dashoffset for scroll synchronization
  const strokeDashoffset = isReducedMotion
    ? 0
    : Math.max(totalLength * (1 - progress), 0)

  // Document bottom reached? (Progress >= 98.5%)
  const isAtBottom = progress >= 0.985

  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none overflow-visible"
      aria-hidden="true"
    >
      <defs>
        {/* Caramel Outer Ribbon Gradient */}
        <linearGradient id="streamCaramelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C78B45" />
          <stop offset="40%" stopColor="#E6B629" />
          <stop offset="75%" stopColor="#C78B45" />
          <stop offset="100%" stopColor="#B87C38" />
        </linearGradient>

        {/* Deep Espresso Core Gradient */}
        <linearGradient id="streamEspressoGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241912" />
          <stop offset="30%" stopColor="#35271F" />
          <stop offset="70%" stopColor="#241912" />
          <stop offset="100%" stopColor="#1A120D" />
        </linearGradient>

        {/* Soft Golden Amber Glow Filter */}
        <filter id="streamGlowFilter" x="-40%" y="-10%" width="180%" height="120%">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
        </filter>
      </defs>

      {/* Visible Multi-Layered Liquid Stream */}
      {totalLength > 0 && progress > 0.001 && (
        <g id="flowing-coffee-layers">
          {/* Layer 1: Ambient Golden Amber Aura */}
          <path
            d={pathD}
            fill="none"
            stroke="#E6B629"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeDasharray={totalLength}
            strokeDashoffset={strokeDashoffset}
            opacity={0.25}
            filter="url(#streamGlowFilter)"
          />

          {/* Layer 2: Rich Caramel Liquid Ribbon */}
          <path
            d={pathD}
            fill="none"
            stroke="url(#streamCaramelGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeDasharray={totalLength}
            strokeDashoffset={strokeDashoffset}
            opacity={0.95}
          />

          {/* Layer 3: Deep Espresso Core */}
          <path
            d={pathD}
            fill="none"
            stroke="url(#streamEspressoGrad)"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeDasharray={totalLength}
            strokeDashoffset={strokeDashoffset}
          />

          {/* Layer 4: Specular Crema Highlight Reflection */}
          <path
            d={pathD}
            fill="none"
            stroke="#FFFDF8"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeDasharray={totalLength}
            strokeDashoffset={strokeDashoffset}
            opacity={0.65}
          />

          {/* Layer 5: Leading Liquid Droplet at Stream Tip */}
          {!isReducedMotion && (
            <g transform={`translate(${tipPosition.x}, ${tipPosition.y})`}>
              {/* Outer Amber Glow */}
              <circle cx="0" cy="0" r="4.2" fill="#E6B629" opacity={0.4} />
              {/* Caramel Body */}
              <circle cx="0" cy="0" r="3.2" fill="#C78B45" />
              {/* Espresso Core */}
              <circle cx="0" cy="0" r="2.1" fill="#241912" />
              {/* Specular Glint */}
              <circle cx="-0.7" cy="-0.7" r="0.7" fill="#FFFDF8" opacity={0.9} />
            </g>
          )}

          {/* Layer 6: Tasteful Grounding Crema Landing Pool (At Document Bottom) */}
          {isAtBottom && (
            <g transform={`translate(${tipPosition.x}, ${targetEndY})`}>
              {/* Soft gold halo */}
              <ellipse
                cx="0"
                cy="0"
                rx="14"
                ry="4"
                fill="#E6B629"
                opacity={0.35}
                filter="url(#streamGlowFilter)"
              />
              {/* Caramel crema landing rim */}
              <ellipse
                cx="0"
                cy="0"
                rx="10"
                ry="3"
                fill="#C78B45"
                stroke="#E6B629"
                strokeWidth="0.6"
              />
              {/* Espresso pool center */}
              <ellipse cx="0" cy="0" rx="6.5" ry="2" fill="#241912" />
              {/* Crema shimmer fleck */}
              <circle cx="-2.5" cy="-0.6" r="0.8" fill="#FFFDF8" opacity={0.85} />
            </g>
          )}
        </g>
      )}
    </svg>
  )
}
