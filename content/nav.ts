export type NavLink = {
  title: string
  href: string
  description?: string
}

export type NavColumn = {
  heading: string
  links: NavLink[]
}

export type NavPanel = {
  label: string
  columns: NavColumn[]
  footer: { label: string; href: string }
}

export const servicesPanel: NavPanel = {
  label: 'Services',
  columns: [
    {
      heading: 'AI & Intelligence',
      links: [
        { title: 'Enterprise AI & RAG', href: '/services/enterprise-ai-rag', description: 'Ground LLMs in your own financial data.' },
        { title: 'AI Agent Development', href: '/services/ai-agents', description: 'Autonomous agents for ops and support.' },
        { title: 'AI/ML Training & MLOps', href: '/services/mlops', description: 'Train, ship and monitor models at scale.' },
        { title: 'Financial Document AI', href: '/services/document-ai', description: 'Extract and validate data from statements.' },
      ],
    },
    {
      heading: 'Engineering',
      links: [
        { title: 'Custom Software', href: '/services/custom-software', description: 'Core platforms built for scale.' },
        { title: 'Data Engineering', href: '/services/data-engineering', description: 'Pipelines you can trust at 3am.' },
        { title: 'Cloud, DevOps & Security', href: '/services/cloud-devops-security', description: 'Ship faster, stay compliant.' },
      ],
    },
    {
      heading: 'Governance',
      links: [
        { title: 'AI Compliance', href: '/services/ai-compliance', description: 'Auditable models for regulated finance.' },
        { title: 'AI Governance', href: '/services/ai-governance', description: 'Policy, monitoring and risk controls.' },
      ],
    },
  ],
  footer: { label: 'Explore all Services', href: '/services' },
}

export const industriesPanel: NavPanel = {
  label: 'Industries',
  columns: [
    {
      heading: 'Industries',
      links: [
        { title: 'Fintech & Banking', href: '/industries/fintech-banking' },
        { title: 'Insurance', href: '/industries/insurance' },
        { title: 'Lending & NBFC', href: '/industries/lending-nbfc' },
        { title: 'Wealth & Capital Markets', href: '/industries/wealth-capital-markets' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { title: 'Case Studies', href: '/case-studies' },
        { title: 'Blog', href: '/blog' },
      ],
    },
  ],
  footer: { label: 'View all Case Studies', href: '/case-studies' },
}

export const companyPanel: NavPanel = {
  label: 'Company',
  columns: [
    {
      heading: 'Company',
      links: [
        { title: 'About', href: '/about' },
        { title: 'Careers', href: '/careers' },
        { title: 'Contact', href: '/contact' },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { title: 'Email', href: 'mailto:info@fincheque.cloud' },
        { title: 'WhatsApp', href: 'https://wa.me/91XXXXXXXXXX' },
        { title: 'LinkedIn', href: 'https://linkedin.com/company/fincheque' },
      ],
    },
  ],
  footer: { label: 'Learn about fincheque', href: '/about' },
}

export const navPanels = [
  { key: 'services', panel: servicesPanel },
  { key: 'industries', panel: industriesPanel },
  { key: 'company', panel: companyPanel },
] as const
