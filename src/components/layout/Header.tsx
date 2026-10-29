import { MapPin, Sparkles } from 'lucide-react'
import { Container } from './Container'
import { Badge } from '@/components/ui/Badge'

export interface HeaderProps {
  title?: string
  subtitle?: string
}

export function Header({
  title = 'A-Town',
  subtitle = 'Community & Exploration',
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-900/80">
      <Container size="lg">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-xs">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {title}
                </span>
                <Badge variant="default" className="hidden sm:inline-flex">
                  <Sparkles className="h-3 w-3" />
                  Ready
                </Badge>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-300">
            <span className="text-xs text-gray-400">React + TS + Tailwind v4 + Motion</span>
          </nav>
        </div>
      </Container>
    </header>
  )
}
