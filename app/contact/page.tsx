import Link from 'next/link'
import { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

export const metadata: Metadata = {
  title: 'Contact | fincheque',
  description: 'Get in touch with fincheque. We\'d love to hear about your project.',
}

export default function ContactPage() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h1 className="text-5xl font-bold md:text-7xl">
              Let's build something{' '}
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                great together
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
              Have a project in mind? Let's chat about how fincheque can help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Get in Touch</h2>
          </Reveal>
          <div className="mt-12 max-w-md">
            <Reveal delay={0.05}>
              <a
                href="mailto:info@fincheque.cloud"
                className="group block rounded-lg border border-border bg-background/50 p-8 transition-all hover:border-accent hover:bg-accent/5"
              >
                <Mail className="size-8 text-accent" />
                <h3 className="mt-4 text-xl font-semibold text-foreground">Email</h3>
                <p className="mt-2 text-sm text-muted-foreground">info@fincheque.cloud</p>
                <p className="mt-4 text-sm font-medium text-accent group-hover:underline">
                  Send us an email →
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">What to Expect</h2>
          </Reveal>
          <div className="mt-12 space-y-6">
            {[
              {
                title: 'Quick Response',
                description: 'We typically respond within 24 hours. Send us an email and our team will get back to you.',
              },
              {
                title: 'Initial Consultation',
                description: 'We\'ll learn about your project, challenges, and goals. No pressure, just a conversation.',
              },
              {
                title: 'Custom Proposal',
                description: 'Based on our discussion, we\'ll outline how fincheque can help and what it might look like.',
              },
            ].map((step, idx) => (
              <Reveal key={step.title} delay={0.05 + idx * 0.05}>
                <div className="rounded-lg border border-border bg-background/50 p-6">
                  <div className="flex gap-4">
                    <div className="text-2xl font-bold text-accent">{idx + 1}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Common Questions</h2>
          </Reveal>
          <div className="mt-12 space-y-4">
            {[
              {
                q: 'What industries do you serve?',
                a: 'We specialize in fintech, banking, insurance, lending, and capital markets. Essentially, anywhere financial regulation meets technology.',
              },
              {
                q: 'How do you price projects?',
                a: 'Every project is unique. We provide custom quotes based on scope, timeline, and your specific requirements.',
              },
              {
                q: 'Can you work with existing systems?',
                a: 'Yes. We\'re experienced in integrating with legacy systems, APIs, and existing infrastructure.',
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Absolutely. We build long-term partnerships and provide post-launch support and optimization.',
              },
            ].map((item, idx) => (
              <Reveal key={item.q} delay={0.1 + idx * 0.03}>
                <details className="group rounded-lg border border-border bg-background/50 p-6 cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-foreground">
                    {item.q}
                    <span className="transition-transform group-open:rotate-180">→</span>
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
