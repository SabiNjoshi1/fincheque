export type Industry = {
  slug: string
  name: string
  summary: string
  description: string
}

export const industries: Industry[] = [
  { slug: 'fintech-banking', name: 'Fintech & Banking', summary: 'Core banking and digital-first banking stacks.', description: 'We partner with banks and neobanks to modernise core systems and ship new products without disrupting existing rails.' },
  { slug: 'insurance', name: 'Insurance', summary: 'Underwriting and claims automation.', description: 'AI-assisted underwriting, claims triage and fraud detection for insurers moving off legacy policy administration systems.' },
  { slug: 'lending-nbfc', name: 'Lending & NBFC', summary: 'Origination, underwriting and collections.', description: 'End-to-end lending platforms that handle high-volume origination with real-time credit decisioning.' },
  { slug: 'wealth-capital-markets', name: 'Wealth & Capital Markets', summary: 'Portfolio, trading and reporting systems.', description: 'Low-latency infrastructure and reporting tools for wealth managers and capital markets participants.' },
  { slug: 'payments', name: 'Payments', summary: 'Card issuance and settlement.', description: 'Secure PIN generation, card issuance and settlement automation for payment processors and issuers.' },
  { slug: 'saas', name: 'SaaS', summary: 'Embedded finance for software platforms.', description: 'Embedded lending, payments and compliance tooling for vertical SaaS platforms entering fintech.' },
]

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug)
}
