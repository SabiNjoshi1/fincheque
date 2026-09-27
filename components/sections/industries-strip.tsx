import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { industries } from '@/content/industries'
import { Reveal } from '@/components/ui/reveal'

export function IndustriesStrip() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">Industries</p>
          <h2 className="font-heading mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
            Deep in the sectors that can&apos;t afford downtime.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 0.05} className="bg-background">
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex h-full flex-col justify-between gap-3 p-6 transition-colors hover:bg-card"
              >
                <div>
                  <h3 className="font-heading text-lg font-medium">{industry.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{industry.summary}</p>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
