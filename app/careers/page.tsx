import { Metadata } from 'next'
import { PillButton } from '@/components/ui/pill-button'
import { Reveal } from '@/components/ui/reveal'

export const metadata: Metadata = {
  title: 'Careers | fincheque',
  description: 'Join our team and help transform financial technology.',
}

export default function CareersPage() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h1 className="text-5xl font-bold md:text-7xl">
              Build the future of{' '}
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                finance with us
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
              We're hiring talented engineers, designers, and product minds who want to make an impact in fintech.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Join */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Why Join fincheque?</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Impact at Scale',
                description: 'Work on problems that affect millions. Build products used by major financial institutions.',
              },
              {
                title: 'World-Class Team',
                description: 'Collaborate with engineers and experts from leading fintech companies and banks.',
              },
              {
                title: 'Cutting-Edge Tech',
                description: 'Work with AI, cloud infrastructure, and modern engineering practices.',
              },
              {
                title: 'Growth & Learning',
                description: 'Continuous learning opportunities in fintech, AI, and regulated finance.',
              },
              {
                title: 'Flexible Work',
                description: 'Remote-first culture with flexibility to work how and where you do your best.',
              },
              {
                title: 'Competitive Compensation',
                description: 'Competitive salary, equity, and benefits package.',
              },
            ].map((benefit, idx) => (
              <Reveal key={benefit.title} delay={idx * 0.05}>
                <div className="rounded-lg border border-border bg-background/50 p-6">
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Open Opportunities</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We're currently hiring across engineering, product, and design. Check back soon for specific openings or reach out to learn about upcoming roles.
            </p>
          </Reveal>
          <div className="mt-12 space-y-4">
            {[
              'Senior Full-Stack Engineer',
              'ML/AI Engineer',
              'DevOps & Infrastructure Engineer',
              'Data Engineer',
              'Product Manager',
              'Product Designer',
            ].map((role, idx) => (
              <Reveal key={role} delay={0.1 + idx * 0.03}>
                <div className="rounded-lg border border-border bg-background/50 p-4 flex items-center justify-between hover:border-accent transition-colors">
                  <p className="font-medium text-foreground">{role}</p>
                  <p className="text-sm text-muted-foreground">Coming soon</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Our Culture</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We believe the best work happens when talented people collaborate on meaningful problems. We foster a culture of:
            </p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {[
              { title: 'Excellence', desc: 'High standards for quality and impact' },
              { title: 'Ownership', desc: 'You own your projects from conception to execution' },
              { title: 'Collaboration', desc: 'Cross-functional teamwork and knowledge sharing' },
              { title: 'Learning', desc: 'Continuous growth and development' },
              { title: 'Inclusivity', desc: 'Diverse perspectives make us stronger' },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={0.1 + idx * 0.03}>
                <div className="flex gap-4">
                  <div className="size-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Ready to join us?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted-foreground">
              Send us a message or check back soon for specific job openings.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <PillButton href="/contact">
                Get in touch
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
