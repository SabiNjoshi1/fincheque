import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '@/content/case-studies'
import { Reveal } from '@/components/ui/reveal'
import { PillButton } from '@/components/ui/pill-button'

export function OurWork() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium text-accent">Our work</p>
            <h2 className="font-heading mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              Systems running in production, at scale.
            </h2>
          </Reveal>
          <PillButton href="/case-studies" variant="secondary" size="sm">
            All case studies
          </PillButton>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.08}>
              <Link href={`/case-studies/${study.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={study.cover || '/placeholder.svg'}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0" />
                  <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-6">
                  {study.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-heading text-xl font-medium text-accent">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <h3 className="font-heading mt-4 text-lg font-medium leading-snug transition-colors group-hover:text-accent">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{study.client}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
