import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'mustard' | 'caramel' | 'espresso' | 'cream' | 'outline' | 'default'
  children: ReactNode
  className?: string
}

export function Badge({
  variant = 'mustard',
  children,
  className = '',
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wider uppercase transition-colors'

  const variantStyles = {
    mustard: 'bg-[#E6B629] text-[#221813]',
    default: 'bg-[#E6B629] text-[#221813]',
    caramel: 'bg-[#C78B45]/15 text-[#C78B45] border border-[#C78B45]/30',
    espresso: 'bg-[#35271F] text-[#F7F0E5]',
    cream: 'bg-[#F7F0E5] text-[#35271F] border border-[#806B5B]/20',
    outline: 'border border-[#C78B45]/40 text-[#806B5B] bg-transparent',
  }

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </span>
  )
}
