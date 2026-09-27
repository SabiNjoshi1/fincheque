export type Whitepaper = {
  category: string
  title: string
  description: string
  cover: string
  downloads: string
}

export const whitepapers: Whitepaper[] = [
  {
    category: 'Core Banking',
    title: 'The Evolution of Core Banking for Global Compliance',
    description: 'How regulated institutions are re-platforming core banking systems without breaking compliance commitments.',
    cover: '/images/whitepaper-core-banking.png',
    downloads: '2,400+ downloads',
  },
  {
    category: 'RegTech',
    title: "RegTech's impact on fintech innovation",
    description: 'A survey of how automated compliance tooling is reshaping product velocity across fintech.',
    cover: '/images/whitepaper-regtech.png',
    downloads: '1,850+ downloads',
  },
  {
    category: 'Security',
    title: 'Cybersecurity for Hybrid Financial Teams',
    description: 'Practical security controls for finance organisations running hybrid cloud and on-prem infrastructure.',
    cover: '/images/whitepaper-cybersecurity.png',
    downloads: '1,320+ downloads',
  },
  {
    category: 'Cloud',
    title: 'Legacy to Cloud: Modernising Lending Platforms',
    description: 'A migration framework for moving lending platforms off legacy infrastructure with minimal downtime.',
    cover: '/images/whitepaper-legacy-cloud.png',
    downloads: '3,100+ downloads',
  },
]
