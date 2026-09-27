import { Reveal } from '@/components/ui/reveal'

export function Manifesto() {
  return (
    <section className="border-b border-border py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-heading text-balance text-2xl font-medium leading-snug tracking-tight sm:text-4xl">
            Regulated finance doesn&apos;t reward the fastest ship —{' '}
            <span className="text-accent">it rewards the one that still passes audit two years later.</span>{' '}
            We build software that survives contact with real regulators, real auditors, and real
            production load.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
