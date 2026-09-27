'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { NavPanel } from '@/content/nav'

export function MegaMenu({ panel, open }: { panel: NavPanel; open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-full w-screen border-t border-border bg-background"
        >
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid grid-cols-3 gap-10">
              {panel.columns.map((column) => (
                <div key={column.heading}>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {column.heading}
                  </p>
                  <ul className="mt-4 space-y-4">
                    {column.links.map((link) => (
                      <li key={link.title}>
                        <Link href={link.href} className="group block">
                          <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                            {link.title}
                          </span>
                          {link.description && (
                            <span className="mt-0.5 block text-xs text-muted-foreground">{link.description}</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-border pt-5">
              <Link
                href={panel.footer.href}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent"
              >
                {panel.footer.label}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
