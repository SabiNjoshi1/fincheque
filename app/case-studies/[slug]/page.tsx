import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PillButton } from '@/components/ui/pill-button'
import { Reveal } from '@/components/ui/reveal'
import { caseStudies } from '@/content/case-studies'

interface CaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    return { title: 'Not Found' }
  }

  return {
    title: `${study.title} | fincheque`,
    description: study.summary,
  }
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    notFound()
  }

  const currentIndex = caseStudies.findIndex((s) => s.slug === slug)
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length]
  const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length]

  return (
    <main className="pt-32">
      {/* Breadcrumb */}
      <section className="border-b border-border px-6 py-4">
        <div className="mx-auto max-w-6xl">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="size-4" />
            Back to Case Studies
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-4">
              {study.client}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-5xl font-bold md:text-7xl">{study.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
              {study.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Image */}
      <section className="border-t border-border px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <Reveal delay={0.15}>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
              <Image
                src={study.cover}
                alt={study.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href={`/case-studies/${prevStudy.slug}`}
              className="group rounded-lg border border-border bg-background/50 p-6 transition-all hover:border-accent hover:bg-accent/5"
            >
              <div className="flex items-center gap-3">
                <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Previous</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">{prevStudy.title}</p>
                </div>
              </div>
            </Link>
            <Link
              href={`/case-studies/${nextStudy.slug}`}
              className="group rounded-lg border border-border bg-background/50 p-6 transition-all hover:border-accent hover:bg-accent/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Next</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">{nextStudy.title}</p>
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
