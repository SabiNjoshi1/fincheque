import { CountUp } from '@/components/ui/count-up'
import { Reveal } from '@/components/ui/reveal'

const stats = [
  { value: 25, suffix: '+', label: 'Banks & NBFCs live on our platforms' },
  { value: 90, suffix: '+', label: 'Merchants on our reconciliation engine' },
  { value: 20, suffix: 'x', label: 'Faster card issuance vs. legacy vendors' },
  { value: 5000, suffix: '+', label: 'Loan applications decisioned daily' },
]

export function Stats() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <p className="font-heading text-4xl font-medium text-accent sm:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
