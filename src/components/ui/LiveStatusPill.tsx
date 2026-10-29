import { useState, useEffect } from 'react'
import { getCafeLiveStatus, type CafeLiveStatus } from '@/lib/cafeStatus'

export interface LiveStatusPillProps {
  className?: string
  showDetail?: boolean
  size?: 'sm' | 'md'
}

export function LiveStatusPill({
  className = '',
  showDetail = false,
  size = 'sm',
}: LiveStatusPillProps) {
  const [status, setStatus] = useState<CafeLiveStatus>(() => getCafeLiveStatus())

  useEffect(() => {
    // Re-check status every 60 seconds
    const interval = setInterval(() => {
      setStatus(getCafeLiveStatus())
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  const isSmall = size === 'sm'

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border transition-all ${
        status.isOpen
          ? 'border-emerald-500/35 bg-emerald-950/40 text-emerald-300'
          : 'border-amber-500/35 bg-amber-950/40 text-amber-300'
      } ${isSmall ? 'px-3 py-1 text-[11px]' : 'px-4 py-1.5 text-xs'} ${className}`}
      aria-label={`Café status: ${status.label}. ${status.detail}`}
    >
      {/* Pulsing Status Dot */}
      <span className="relative flex h-2 w-2">
        {status.isOpen && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            status.isOpen ? 'bg-emerald-400' : 'bg-amber-400'
          }`}
        />
      </span>

      <span className="font-semibold tracking-wide uppercase">{status.label}</span>

      {showDetail && (
        <>
          <span className="opacity-40">·</span>
          <span className="opacity-90 font-normal">
            {status.isOpen ? `Until ${status.closingOrOpeningTime}` : `Opens ${status.closingOrOpeningTime}`}
          </span>
        </>
      )}
    </div>
  )
}
