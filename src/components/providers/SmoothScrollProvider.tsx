import { type ReactNode } from 'react'
import { ReactLenis } from 'lenis/react'

export interface SmoothScrollProviderProps {
  children: ReactNode
  enabled?: boolean
}

export function SmoothScrollProvider({
  children,
  enabled = true,
}: SmoothScrollProviderProps) {
  if (!enabled) {
    return <>{children}</>
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
