import { type RefObject } from 'react'

export interface CoffeeCupProps {
  width?: number
  className?: string
  outletRef?: RefObject<SVGCircleElement | null>
}

/**
 * Custom Branded Ceramic Espresso Cup SVG for A-Town Café.
 * 
 * Includes:
 * - Handcrafted ceramic silhouette with ergonomic handle.
 * - Warm cream/ivory ceramic glaze (#FFFDF8 / #EDE2D0).
 * - Multi-layer espresso interior with golden crema swirl.
 * - Thin mustard-gold accent ring (#E6B629).
 * - Refined, high-legibility "A-TOWN CAFÉ" editorial wordmark.
 * - Precision bottom extraction spout & outlet nozzle.
 */
export function CoffeeCup({ width = 72, className = '', outletRef }: CoffeeCupProps) {
  // Base SVG aspect ratio: 88w x 80h (scale height proportionally)
  const height = Math.round(width * (80 / 88))

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 88 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible ${className}`}
      style={{
        filter: 'drop-shadow(0 8px 18px rgba(36, 25, 18, 0.45)) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.22))',
      }}
      aria-label="A-Town Café Ceramic Espresso Cup"
    >
      <defs>
        {/* Warm Ivory Ceramic Body Gradient */}
        <linearGradient id="cupCeramicBody" x1="12" y1="18" x2="62" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="35%" stopColor="#FAF4EA" />
          <stop offset="75%" stopColor="#EFE5D5" />
          <stop offset="100%" stopColor="#D5C5B0" />
        </linearGradient>

        {/* Ceramic Handle Gradient */}
        <linearGradient id="cupCeramicHandle" x1="56" y1="24" x2="84" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="50%" stopColor="#EFE6D6" />
          <stop offset="100%" stopColor="#D0C0AA" />
        </linearGradient>

        {/* Inner Liquid Espresso */}
        <linearGradient id="cupInnerEspresso" x1="16" y1="12" x2="56" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#140C07" />
          <stop offset="45%" stopColor="#241912" />
          <stop offset="85%" stopColor="#3D291C" />
          <stop offset="100%" stopColor="#180F0A" />
        </linearGradient>

        {/* Artisanal Golden Crema Swirl */}
        <linearGradient id="cupCremaSwirl" x1="22" y1="15" x2="50" y2="19" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C78B45" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#E6B629" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#9C6424" stopOpacity="0.85" />
        </linearGradient>

        {/* Signature Mustard-Gold Metallic Trim */}
        <linearGradient id="cupGoldTrim" x1="13" y1="27" x2="60" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C78B45" />
          <stop offset="30%" stopColor="#FCE590" />
          <stop offset="65%" stopColor="#E6B629" />
          <stop offset="100%" stopColor="#A8751B" />
        </linearGradient>

        {/* Bottom Bronze/Ceramic Extraction Spout */}
        <linearGradient id="cupSpoutGrad" x1="31" y1="62" x2="41" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D5C5B0" />
          <stop offset="35%" stopColor="#C78B45" />
          <stop offset="70%" stopColor="#35271F" />
          <stop offset="100%" stopColor="#1A120D" />
        </linearGradient>
      </defs>

      {/* 1. Ceramic Handle (Right Side) */}
      <path
        d="M 54 26 C 72 25, 77 48, 60 57 L 55 52 C 67 45, 65 32, 54 31 Z"
        fill="url(#cupCeramicHandle)"
        stroke="#BCA993"
        strokeWidth="0.8"
      />
      {/* Handle Specular Edge */}
      <path
        d="M 56 29 C 67 32, 68 43, 58 51"
        stroke="#FFFDF8"
        strokeWidth="0.85"
        strokeLinecap="round"
        fill="none"
        opacity={0.8}
      />

      {/* 2. Ceramic Cup Body Silhouette */}
      <path
        d="M 12 18 C 12 46, 20 60, 31 62 L 41 62 C 52 60, 60 46, 60 18 Z"
        fill="url(#cupCeramicBody)"
        stroke="#BCA993"
        strokeWidth="0.8"
      />

      {/* Right-side Ceramic Ambient Shadow */}
      <path
        d="M 36 18 C 48 18, 60 25, 60 18 C 60 46, 52 60, 41 62 C 46 60, 51 50, 53 34 C 54 24, 46 19, 36 18 Z"
        fill="#725E49"
        opacity={0.16}
      />

      {/* Left-side Specular Ceramic Light Sheen */}
      <path
        d="M 14 20 C 14 40, 18 52, 24 58 C 19 52, 16 42, 16 22 Z"
        fill="#FFFDF8"
        opacity={0.9}
      />

      {/* 3. Thin Mustard-Gold Decorative Accent Band */}
      <path
        d="M 13 27 C 24 31, 48 31, 59 27"
        stroke="url(#cupGoldTrim)"
        strokeWidth="1.35"
        fill="none"
        strokeLinecap="round"
      />

      {/* 4. Top Opening Rim & Coffee Surface */}
      <ellipse
        cx="36"
        cy="18"
        rx="24"
        ry="6.5"
        fill="url(#cupCeramicBody)"
        stroke="#BCA993"
        strokeWidth="0.8"
      />
      {/* Liquid Espresso Surface */}
      <ellipse cx="36" cy="18" rx="22" ry="5.1" fill="url(#cupInnerEspresso)" />

      {/* Artisanal Crema Swirl inside Cup */}
      <path
        d="M 21 18 C 24 15.8, 31 15.5, 37 17 C 43 18.2, 48 16.5, 51 18 C 48 19.8, 39 20.2, 31 19.4 Z"
        fill="url(#cupCremaSwirl)"
        opacity={0.92}
      />
      <ellipse cx="30" cy="17.2" rx="3.2" ry="1" fill="#FFFDF8" opacity={0.5} />

      {/* 5. A-TOWN CAFÉ Branded Editorial Wordmark */}
      <g id="cup-brand" transform="translate(36, 42)">
        {/* A-TOWN Headline */}
        <text
          x="0"
          y="0"
          textAnchor="middle"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="7.2"
          fontWeight="800"
          letterSpacing="1.1"
          fill="#2C1E16"
        >
          A-TOWN
        </text>

        {/* CAFÉ Sub-Brand */}
        <text
          x="0"
          y="7.2"
          textAnchor="middle"
          fontFamily="'DM Sans', system-ui, sans-serif"
          fontSize="4"
          fontWeight="700"
          letterSpacing="1.5"
          fill="#B87834"
        >
          CAFÉ
        </text>

        {/* Signature Mustard Gold Accent Diamond */}
        <polygon points="0,10.2 1.3,11.5 0,12.8 -1.3,11.5" fill="#E6B629" />
      </g>

      {/* 6. Precision Bottom Extraction Spout */}
      <path
        d="M 31 62 L 33.5 70.5 C 34 71.8, 38 71.8, 38.5 70.5 L 41 62 Z"
        fill="url(#cupSpoutGrad)"
        stroke="#7A5636"
        strokeWidth="0.55"
      />

      {/* Spout Nozzle Rim */}
      <ellipse
        cx="36"
        cy="71"
        rx="2.6"
        ry="1.2"
        fill="#241912"
        stroke="#E6B629"
        strokeWidth="0.5"
      />

      {/* Coffee Outlet Reference Anchor (Zero Gap Precision Point) */}
      <circle
        ref={outletRef}
        id="coffee-outlet-anchor"
        cx="36"
        cy="71.5"
        r="0.5"
        fill="transparent"
        opacity={0}
      />

      {/* Subtle Resting Espresso Bead under Nozzle */}
      <circle cx="36" cy="72.6" r="1.4" fill="#35271F" />
      <circle cx="35.5" cy="72.2" r="0.45" fill="#FFFDF8" opacity={0.8} />
    </svg>
  )
}
