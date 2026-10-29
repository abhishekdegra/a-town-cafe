import { type HTMLAttributes, type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
  variant?: 'cream' | 'white' | 'espresso'
}

export function Card({
  children,
  className = '',
  hoverEffect = false,
  variant = 'white',
  ...props
}: CardProps) {
  const variantStyles = {
    white: 'bg-[#FFFDF8] border border-[#806B5B]/15 text-[#35271F] shadow-xs',
    cream: 'bg-[#F7F0E5] border border-[#806B5B]/20 text-[#35271F]',
    espresso: 'bg-[#2E2018] border border-[#C78B45]/20 text-[#F7F0E5] shadow-md',
  }

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25, ease: 'easeOut' } } : undefined}
      className={cn(
        'rounded-xl p-6 transition-all duration-300',
        variantStyles[variant],
        hoverEffect && 'hover:shadow-lg hover:border-[#C78B45]/40',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-4 flex flex-col space-y-1.5', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'font-serif text-xl font-bold tracking-tight text-inherit',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

export function CardDescription({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-sm text-[#806B5B] leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  )
}

export function CardContent({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('text-sm text-inherit', className)} {...props}>
      {children}
    </div>
  )
}
