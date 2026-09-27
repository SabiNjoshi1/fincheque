'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/logo'
import { PillButton } from '@/components/ui/pill-button'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-background/90 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300',
          scrolled ? 'py-4' : 'py-6',
        )}
      >
        <Link href="/" aria-label="fincheque home">
          <Logo />
        </Link>

        <div className="hidden lg:block">
          <PillButton href="/contact" size="sm">
            Start a project
          </PillButton>
        </div>

        <button
          className="lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-[73px] z-40 overflow-y-auto bg-background px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-8">
            <PillButton href="/contact" className="justify-center">
              Start a project
            </PillButton>
            <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground">
              {site.email}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
