import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PillButton } from '@/components/ui/pill-button'
import { Reveal } from '@/components/ui/reveal'
import { caseStudies } from '@/content/case-studies'

export const metadata: Metadata = {
  title: 'Case Studies | fincheque',
  description: 'Real-world examples of how we\'ve transformed financial businesses.',
}

export default function CaseStudiesPage() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h1 className="text-5xl font-bold md:text-7xl">
              How we&apos;ve{' '}
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                transformed finance
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
              Real stories from real partners who built big with fincheque.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study, idx) => (
              <Reveal key={study.slug} delay={idx * 0.05}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group block overflow-hidden rounded-lg border border-border transition-all hover:border-accent"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-background">
                    <Image
                      src={study.cover}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-accent mb-2">
                      {study.client}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{study.summary}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                      Read more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
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
            <h2 className="text-4xl font-bold md:text-5xl">Ready to write your success story?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's explore how fincheque can drive impact for your business.
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
