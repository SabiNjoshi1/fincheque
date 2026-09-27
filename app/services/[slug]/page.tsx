import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PillButton } from '@/components/ui/pill-button'
import { Reveal } from '@/components/ui/reveal'
import { services } from '@/content/services'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return { title: 'Not Found' }
  }

  return {
    title: `${service.title} | fincheque`,
    description: service.description,
  }
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const currentIndex = services.findIndex((s) => s.slug === slug)
  const nextService = services[(currentIndex + 1) % services.length]
  const prevService = services[(currentIndex - 1 + services.length) % services.length]

  return (
    <main className="pt-32">
      {/* Breadcrumb */}
      <section className="border-b border-border px-6 py-4">
        <div className="mx-auto max-w-6xl">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="size-4" />
            Back to Services
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-4">
              {service.group}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-5xl font-bold md:text-7xl">{service.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
              {service.description}
            </p>
          </Reveal>
          {false && (
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {false}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.2}>
            <div className="mt-8">
              <PillButton href="/contact" size="md">
                Learn more
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>


      {/* Navigation */}
      <section className="border-t border-border px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href={`/services/${prevService.slug}`}
              className="group rounded-lg border border-border bg-background/50 p-6 transition-all hover:border-accent hover:bg-accent/5"
            >
              <div className="flex items-center gap-3">
                <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Previous</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">{prevService.title}</p>
                </div>
              </div>
            </Link>
            <Link
              href={`/services/${nextService.slug}`}
              className="group rounded-lg border border-border bg-background/50 p-6 transition-all hover:border-accent hover:bg-accent/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Next</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">{nextService.title}</p>
                </div>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
