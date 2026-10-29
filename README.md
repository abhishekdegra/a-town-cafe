# ☕ Compylo Café — Premium Cinematic Hospitality Website

A bespoke, production-ready café brand website built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, **Motion for React**, and **Lucide React**.

Designed with warm pendant lighting aesthetics, natural oak textures, woven accents, and a rich palette of **Warm Cream (`#F7F0E5`)**, **Mustard Yellow (`#E6B629`)**, **Espresso Brown (`#35271F`)**, and **Caramel (`#C78B45`)**.

---

## ✨ Features

- **Cinematic Hero**: Full-viewport atmospheric background video with seamless crossfade and high-resolution Ken Burns image fallback.
- **Brand Story**: Editorial asymmetric magazine layout with warm authentic storytelling and core hospitality pillars.
- **Experience Highlights**: 4 pillars featuring specialty roasts, comfort bakery plates, cozy ambient seating, and daily rituals.
- **Interactive Editorial Menu**: Working category tabs with fluid Motion layout transitions, editable ₹ prices, dietary indicators (Veg/Vegan), and signature badges.
- **Visual Tour & Native Lightbox**: Responsive asymmetric masonry grid with an accessible native `<dialog>` modal lightbox (keyboard navigation, light dismiss, and touch controls).
- **Guest Testimonials**: Community review cards with 5-star ratings and direct Google Maps review integration.
- **Visit & Contact Hub**: Interactive Google Maps embed, operating hours, direct one-click WhatsApp reservations, phone calling, and 1-click address copy.
- **Mobile Navigation Drawer**: Fluid slide-out drawer with quick actions, accessible keyboard controls, and body scroll lock.
- **Accessibility & Performance**: Passes WCAG AA contrast guidelines (> 5.5:1), supports `prefers-reduced-motion`, and loads in under a second.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org) (strict types)
- **Bundler & Tooling**: [Vite 8](https://vite.dev) + `@tailwindcss/vite`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (zero-config CSS `@theme` tokens)
- **Animations**: [Motion for React](https://motion.dev) (`motion/react`)
- **Icons**: [Lucide React](https://lucide.dev)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering)
- **Linter**: [Oxlint](https://oxc.rs)

---

## 📁 Project Structure

```text
compylo/
├── public/                 # Static assets (favicons, SVG icons)
├── src/
│   ├── assets/             # Brand images and graphic assets
│   ├── components/
│   │   ├── hero/           # Cinematic Hero section
│   │   ├── story/          # Brand Story section
│   │   ├── highlights/     # Experience Highlights
│   │   ├── menu/           # Filterable Menu
│   │   ├── gallery/        # Photo Gallery & Native Lightbox
│   │   ├── reviews/        # Community Testimonials
│   │   ├── visit/          # Location, Contact & Google Maps
│   │   ├── navigation/     # Header & Mobile Navigation Drawer
│   │   ├── layout/         # Container & Footer
│   │   ├── providers/      # Lenis SmoothScrollProvider
│   │   └── ui/             # Reusable UI primitives (Button, Card, Badge)
│   ├── config/
│   │   └── cafeConfig.ts   # Centralized café branding, menu, images & contact
│   ├── lib/
│   │   └── utils.ts        # Helper utilities
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces
│   ├── App.tsx             # Root application orchestrator
│   ├── index.css           # Tailwind CSS v4 & theme variables
│   └── main.tsx            # React 19 entry point
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── index.html              # HTML entry & SEO Open Graph metadata
├── package.json            # Dependencies and scripts
├── tsconfig.app.json       # Frontend TypeScript config
├── tsconfig.node.json      # Node TypeScript config
└── vite.config.ts          # Vite configuration
```

---

## ⚙️ Easy Customization & Rebranding

All content, branding, contact details, timings, menu items, prices, and gallery photos are centralized in **[`src/config/cafeConfig.ts`](src/config/cafeConfig.ts)**. 

To adapt the site for any other café or restaurant, simply modify `cafeConfig.ts` without touching the UI component codebase.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `v18+` or `v20+` (tested on Node v24)
- npm, pnpm, or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

### 6. Lint Codebase
```bash
npm run lint
```

---

## 🌐 Deploy to Production

### Vercel / Netlify
1. Connect your GitHub repository to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Output Directory: `dist`
4. Deploy!

---

## 📄 License

MIT License. Crafted with care for coffee lovers and great company.
