import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PillButton } from '@/components/ui/pill-button'
import { Reveal } from '@/components/ui/reveal'
import { services } from '@/content/services'

export const metadata: Metadata = {
  title: 'Services | fincheque',
  description: 'AI-powered financial software, engineering, and governance services for banks and fintech.',
}

export default function ServicesPage() {
  const aiServices = services.filter((s) => s.group === 'AI & Intelligence')
  const engineeringServices = services.filter((s) => s.group === 'Engineering')
  const governanceServices = services.filter((s) => s.group === 'Governance')

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h1 className="text-5xl font-bold md:text-7xl">
              Expert financial software,{' '}
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                simplified
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
              From AI agents to cloud infrastructure, we build the full stack for regulated finance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services by Category */}
      {[
        { title: 'AI & Intelligence', items: aiServices },
        { title: 'Engineering', items: engineeringServices },
        { title: 'Governance', items: governanceServices },
      ].map((category, idx) => (
        <section key={category.title} className="border-t border-border px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal delay={idx * 0.05}>
              <h2 className="text-4xl font-bold md:text-5xl">{category.title}</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {category.items.map((service, i) => (
                <Reveal key={service.slug} delay={idx * 0.05 + (i + 1) * 0.05}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block rounded-lg border border-border bg-background/50 p-6 transition-all hover:border-accent hover:bg-accent/5"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                        <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                      <ArrowRight className="mt-1 size-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Ready to transform your finance stack?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's explore which services fit your needs.
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
