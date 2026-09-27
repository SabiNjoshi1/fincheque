import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PillButton } from '@/components/ui/pill-button'
import { Reveal } from '@/components/ui/reveal'
import { industries } from '@/content/industries'

interface IndustryPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)

  if (!industry) {
    return { title: 'Not Found' }
  }

  return {
    title: `${industry.name} | fincheque`,
    description: industry.description,
  }
}

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }))
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)

  if (!industry) {
    notFound()
  }

  const currentIndex = industries.findIndex((i) => i.slug === slug)
  const nextIndustry = industries[(currentIndex + 1) % industries.length]
  const prevIndustry = industries[(currentIndex - 1 + industries.length) % industries.length]

  return (
    <main className="pt-32">
      {/* Breadcrumb */}
      <section className="border-b border-border px-6 py-4">
        <div className="mx-auto max-w-6xl">
          <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="size-4" />
            Back to Industries
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h1 className="text-5xl font-bold md:text-7xl">{industry.name}</h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
              {industry.description}
            </p>
          </Reveal>
          {false && (
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {false}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.15}>
            <div className="mt-8">
              <PillButton href="/contact" size="md">
                Discuss your needs
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
              href={`/industries/${prevIndustry.slug}`}
              className="group rounded-lg border border-border bg-background/50 p-6 transition-all hover:border-accent hover:bg-accent/5"
            >
              <div className="flex items-center gap-3">
                <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Previous</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">{prevIndustry.name}</p>
                </div>
              </div>
            </Link>
            <Link
              href={`/industries/${nextIndustry.slug}`}
              className="group rounded-lg border border-border bg-background/50 p-6 transition-all hover:border-accent hover:bg-accent/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Next</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">{nextIndustry.name}</p>
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
