import { Reveal } from '@/components/ui/reveal'
import { PillButton } from '@/components/ui/pill-button'
import { site } from '@/lib/site'

export function BigCta() {
  return (
    <section className="relative overflow-hidden py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(200,255,77,0.14), transparent 70%)',
        }}
        aria-hidden
      />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-heading text-balance text-3xl font-medium tracking-tight sm:text-5xl">
            Ready to build something that scales with your compliance team, not against it?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Tell us about the system you need. We&apos;ll respond with a straight answer on scope,
            timeline and what it&apos;ll take to make it audit-ready.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <PillButton href="/contact">Start a project</PillButton>
            <PillButton href={`mailto:${site.email}`} variant="secondary" icon={false}>
              {site.email}
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
