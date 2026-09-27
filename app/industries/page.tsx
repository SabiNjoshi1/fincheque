import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PillButton } from '@/components/ui/pill-button'
import { Reveal } from '@/components/ui/reveal'
import { industries } from '@/content/industries'

export const metadata: Metadata = {
  title: 'Industries | fincheque',
  description: 'Specialized solutions for fintech, banking, insurance, lending, and capital markets.',
}

export default function IndustriesPage() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h1 className="text-5xl font-bold md:text-7xl">
              Built for every{' '}
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                financial vertical
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
              Deep expertise across fintech, banking, insurance, lending, and wealth management.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry, idx) => (
              <Reveal key={industry.slug} delay={idx * 0.05}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group block rounded-lg border border-border bg-background/50 p-8 transition-all hover:border-accent hover:bg-accent/5"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {industry.name}
                      </h3>
                      <p className="mt-3 text-base text-muted-foreground">{industry.description}</p>
                      {false && (
                        <ul className="mt-4 space-y-2">
                          {[].slice(0, 2).map((highlight, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="size-1.5 rounded-full bg-accent" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <ArrowRight className="mt-1 size-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Let's discuss your industry challenges</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team has solved problems across every corner of finance.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <PillButton href="/contact" size="md">
                Start a project
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
