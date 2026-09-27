'use client'

import { motion } from 'framer-motion'
import { PillButton } from '@/components/ui/pill-button'

const words = ['Financial', 'infrastructure,', 'engineered', 'for', 'scale.']

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,255,77,0.12), transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(245,245,242,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,245,242,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-accent" />
          Trusted by banks, fintechs &amp; NBFCs since 2021
        </motion.div>

        <h1 className="font-heading text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block ${word === 'engineered' ? 'text-accent' : ''}`}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          We design and build AI-powered payment, lending and compliance systems for regulated
          finance — production-ready, audit-safe, live in months, not years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <PillButton href="/contact">Start a project</PillButton>
          <PillButton href="/case-studies" variant="secondary">
            See our work
          </PillButton>
        </motion.div>
      </div>
    </section>
  )
}
