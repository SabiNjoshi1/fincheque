import { Marquee } from '@/components/ui/marquee'

const logos = [
  'Regional Banks',
  'NBFCs',
  'Payment Aggregators',
  'Insurers',
  'Wealth Platforms',
  'Neobanks',
  'Lending Cos.',
  'Capital Markets',
]

export function TrustedBy() {
  return (
    <section className="border-y border-border py-10">
      <p className="mx-auto mb-6 max-w-6xl px-6 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Trusted across regulated finance
      </p>
      <Marquee>
        {logos.map((logo) => (
          <span key={logo} className="text-lg font-medium text-muted-foreground/50 font-heading whitespace-nowrap">
            {logo}
          </span>
        ))}
      </Marquee>
    </section>
  )
}
