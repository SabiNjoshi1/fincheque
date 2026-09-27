import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type PillButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
  className?: string
  icon?: boolean
  external?: boolean
}

export function PillButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon = true,
  external = false,
}: PillButtonProps) {
  const base =
    'group inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap'

  const variants = {
    primary: 'bg-accent text-accent-foreground hover:bg-[#b3e63e]',
    secondary: 'border border-border text-foreground hover:border-accent hover:text-accent',
    ghost: 'text-foreground hover:text-accent',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
  }

  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
      {icon && (
        <ArrowUpRight className="size-4 shrink-0 -translate-y-px transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1" />
      )}
    </Link>
  )
}
