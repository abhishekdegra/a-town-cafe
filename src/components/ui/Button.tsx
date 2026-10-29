import { type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  children?: ReactNode
  className?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none'

  const variantStyles = {
    // Primary Mustard Yellow CTA (High contrast against espresso or cream)
    primary:
      'bg-[#E6B629] text-[#221813] font-semibold hover:bg-[#D4A51F] active:bg-[#C2951B] focus-visible:ring-[#E6B629] shadow-sm hover:shadow-md',
    // Secondary Caramel accent
    secondary:
      'bg-[#C78B45] text-[#FFFDF8] font-medium hover:bg-[#B37835] active:bg-[#9F6728] focus-visible:ring-[#C78B45] shadow-xs hover:shadow-sm',
    // Outline for dark or light backgrounds
    outline:
      'border border-[#C78B45]/50 text-[#35271F] bg-transparent hover:bg-[#E6B629]/10 hover:border-[#C78B45] focus-visible:ring-[#C78B45]',
    // Dark Espresso button
    dark:
      'bg-[#35271F] text-[#F7F0E5] font-medium hover:bg-[#221813] active:bg-[#1A120E] focus-visible:ring-[#35271F] shadow-sm',
    // Ghost
    ghost:
      'bg-transparent text-[#35271F] hover:bg-[#35271F]/5 focus-visible:ring-[#C78B45]',
  }

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 uppercase tracking-wider',
    md: 'text-sm px-5 py-2.5 uppercase tracking-wider',
    lg: 'text-base px-7 py-3.5 uppercase tracking-wider',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  )
}
