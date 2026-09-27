import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('font-heading inline-flex items-center gap-1.5 text-lg font-semibold tracking-tight', className)}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="text-accent">
        <path d="M4 4H20V10H10V13H18V19H4V4Z" fill="currentColor" />
      </svg>
      fincheque
    </span>
  )
}
