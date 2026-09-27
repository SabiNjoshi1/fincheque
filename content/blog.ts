export type BlogPost = {
  slug: string
  title: string
  tag: string
  date: string
  cover: string
  excerpt: string
  body: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'core-banking-compliance-2025',
    title: 'What regulated fintechs get wrong about core banking migrations',
    tag: 'Engineering',
    date: '2025-03-04',
    cover: '/images/blog-core-banking.png',
    excerpt: 'The teams that survive a core migration treat compliance as a design constraint, not a final review step.',
    body: [
      'Most core banking migrations fail on timeline, not technology. The root cause is usually a compliance review that starts after the architecture is already locked in.',
      'We walk through the sequencing that has worked across our own engagements: mapping regulatory obligations before writing a data model, not after.',
    ],
  },
  {
    slug: 'ai-underwriting-explainability',
    title: 'Explainability is the price of admission for AI underwriting',
    tag: 'AI',
    date: '2025-02-18',
    cover: '/images/blog-ai-underwriting.png',
    excerpt: 'A credit model that cannot explain its decision to a regulator is a liability, however accurate it is.',
    body: [
      'Accuracy gets the headlines, but explainability is what gets a model past a risk committee.',
      'Here is the documentation and monitoring stack we build alongside every underwriting model we ship.',
    ],
  },
  {
    slug: 'reconciliation-automation-playbook',
    title: 'A practical playbook for automating reconciliation',
    tag: 'Operations',
    date: '2025-01-22',
    cover: '/images/blog-reconciliation.png',
    excerpt: 'Automating reconciliation is less about the matching algorithm and more about exception handling.',
    body: [
      'Teams tend to over-invest in matching precision and under-invest in the exception workflow around it.',
      'We break down the reconciliation architecture pattern we reuse across payments and lending clients.',
    ],
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((b) => b.slug === slug)
}
