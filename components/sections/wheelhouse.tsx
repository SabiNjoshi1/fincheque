import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/content/services'
import { Reveal } from '@/components/ui/reveal'

const groups = Array.from(new Set(services.map((s) => s.group)))

export function Wheelhouse() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">What we do</p>
          <h2 className="font-heading mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
            Our wheelhouse
          </h2>
          <p className="mt-4 text-muted-foreground">
            From AI-native platforms to the compliance scaffolding that keeps them auditable, we
            cover the full stack regulated finance needs.
          </p>
        </Reveal>

        <div className="mt-14 space-y-14">
          {groups.map((group) => (
            <div key={group}>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{group}</p>
              <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((s) => s.group === group)
                  .map((service, i) => (
                    <Reveal key={service.slug} delay={i * 0.05} className="bg-background">
                      <Link
                        href={`/services/${service.slug}`}
                        className="group flex h-full flex-col justify-between gap-4 p-6 transition-colors hover:bg-card"
                      >
                        <div>
                          <h3 className="font-heading text-lg font-medium">{service.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                          Learn more <ArrowRight className="size-3.5" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
