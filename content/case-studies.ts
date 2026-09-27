export type CaseStudy = {
  slug: string
  title: string
  client: string
  cover: string
  stats: { label: string; value: string }[]
  summary: string
  body: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'secure-pin-card-issuance',
    title: 'Secure PIN generation and card issuance for banks.',
    client: 'Confidential regional bank',
    cover: '/images/case-pin-issuance.png',
    stats: [
      { label: 'Banks live', value: '25+' },
      { label: 'Faster issuance', value: '20x' },
    ],
    summary: 'A HSM-backed PIN generation and instant card issuance platform used by regional banks across India.',
    body: [
      'The client needed to replace a batch, vendor-locked card issuance process with something that could issue and activate a card in minutes rather than weeks.',
      'We built a hardened issuance service that integrates with HSMs for PIN block generation, exposes a simple API to branch and app channels, and logs every action for audit.',
      'The platform now powers instant card issuance for 25+ partner banks, cutting time-to-card by 20x while passing every PCI DSS control it was tested against.',
    ],
  },
  {
    slug: 'lending-origination-at-scale',
    title: 'A lending origination system handling millions of concurrent requests.',
    client: 'Confidential NBFC',
    cover: '/images/case-lending-origination.png',
    stats: [
      { label: 'Applications daily', value: '5,000+' },
      { label: 'Faster approvals', value: '3x' },
    ],
    summary: 'A horizontally-scaled origination engine that decisions loan applications in seconds, not days.',
    body: [
      'The NBFC was losing applicants to slow, manual underwriting during peak demand windows.',
      'We re-architected the origination flow around an event-driven pipeline with a real-time decision engine, autoscaling to absorb demand spikes without degrading latency.',
      'The system now processes over 5,000 applications a day with approvals landing 3x faster than the legacy stack.',
    ],
  },
  {
    slug: 'ai-reconciliation-engine',
    title: 'AI-based reconciliation engine with automated settlement.',
    client: 'Confidential payments aggregator',
    cover: '/images/case-reconciliation.png',
    stats: [
      { label: 'Merchants using', value: '90+' },
      { label: 'Ops automated', value: '40%' },
    ],
    summary: 'A machine-learning reconciliation engine that matches transactions across ledgers and auto-settles the rest.',
    body: [
      'Manual reconciliation across banking partners and merchants was consuming a full finance team every settlement cycle.',
      'We introduced an ML-assisted matching engine that learns from historical exceptions, flags true anomalies, and automatically settles matched batches.',
      'Now used across 90+ merchants, the engine has automated roughly 40% of what used to be manual operations work.',
    ],
  },
]

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}
