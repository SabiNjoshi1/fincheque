import { Metadata } from 'next'
import { PillButton } from '@/components/ui/pill-button'
import { Reveal } from '@/components/ui/reveal'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About | fincheque',
  description: 'Learn more about fincheque and our mission to transform finance with AI and engineering.',
}

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h1 className="text-5xl font-bold md:text-7xl">
              Building the future of{' '}
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                financial technology
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
              fincheque combines AI, engineering excellence, and deep financial expertise to help institutions modernize and scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Our Mission</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We believe financial institutions deserve better technology partners. Partners who understand regulation, who build for scale, and who deliver tangible business outcomes.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From AI agents that handle complex workflows to data pipelines built for trust, we engineer the full stack of modern finance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Our Values</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Excellence', description: 'We obsess over quality, scale, and reliability. No shortcuts.' },
              { title: 'Partnership', description: 'Your success is our success. We think long-term and invest accordingly.' },
              { title: 'Innovation', description: 'We stay ahead of the curve in AI, engineering, and financial regulation.' },
              { title: 'Integrity', description: 'We build for regulated finance with security and compliance baked in.' },
              { title: 'Expertise', description: 'Deep technical and domain knowledge across fintech, banking, and beyond.' },
              { title: 'Impact', description: 'We measure ourselves by the real business outcomes we deliver.' },
            ].map((value, idx) => (
              <Reveal key={value.title} delay={idx * 0.05}>
                <div className="rounded-lg border border-border bg-background/50 p-6">
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">What We Do</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We combine three core capabilities:
            </p>
          </Reveal>
          <div className="mt-8 space-y-6">
            {[
              {
                title: 'AI & Intelligence',
                description: 'Enterprise LLMs, agents, and ML systems grounded in your financial data.',
              },
              {
                title: 'Engineering',
                description: 'Custom platforms, data pipelines, and cloud infrastructure built to scale.',
              },
              {
                title: 'Governance',
                description: 'Compliance, security, and risk frameworks for regulated finance.',
              },
            ].map((area, idx) => (
              <Reveal key={area.title} delay={0.1 + idx * 0.05}>
                <div className="rounded-lg border border-border bg-background/50 p-6">
                  <h3 className="text-2xl font-semibold text-foreground">{area.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{area.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Built by Experts</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our team brings together engineers, data scientists, and financial professionals with experience at leading fintech companies, banks, and startups.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Let's build together</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a challenge in mind? We'd love to explore how fincheque can help.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <PillButton href="/contact">
                Get in touch
              </PillButton>
              <PillButton href="/case-studies" variant="secondary">
                See our work
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
