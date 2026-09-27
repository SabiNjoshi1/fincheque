export type Service = {
  slug: string
  title: string
  group: string
  summary: string
  description: string
}

export const services: Service[] = [
  { slug: 'enterprise-ai-rag', title: 'Enterprise AI & RAG', group: 'AI & Intelligence', summary: 'Ground LLMs in your own financial data.', description: 'We design retrieval-augmented systems that let your teams query policies, filings and transaction histories in plain language, without leaking sensitive data outside your perimeter.' },
  { slug: 'ai-agents', title: 'AI Agent Development', group: 'AI & Intelligence', summary: 'Autonomous agents for ops and support.', description: 'From reconciliation bots to KYC assistants, we build agents that take action inside your existing systems, with human-in-the-loop approvals where it matters.' },
  { slug: 'mlops', title: 'AI/ML Training & MLOps', group: 'AI & Intelligence', summary: 'Train, ship and monitor models at scale.', description: 'End-to-end pipelines for credit scoring, fraud detection and forecasting models, with drift monitoring and retraining built in from day one.' },
  { slug: 'document-ai', title: 'Financial Document AI', group: 'AI & Intelligence', summary: 'Extract and validate data from statements.', description: 'Automated extraction from bank statements, invoices and KYC documents, with confidence scoring and exception routing for review teams.' },
  { slug: 'custom-software', title: 'Custom Software', group: 'Engineering', summary: 'Core platforms built for scale.', description: 'Ledgers, origination systems and internal tools engineered for the throughput and audit trails regulated finance demands.' },
  { slug: 'data-engineering', title: 'Data Engineering', group: 'Engineering', summary: 'Pipelines you can trust at 3am.', description: 'Batch and streaming pipelines that move money-adjacent data reliably, with lineage, testing and alerting baked in.' },
  { slug: 'cloud-devops-security', title: 'Cloud, DevOps & Security', group: 'Engineering', summary: 'Ship faster, stay compliant.', description: 'Infrastructure-as-code, zero-downtime releases and security hardening aligned to RBI, PCI DSS and ISO 27001 expectations.' },
  { slug: 'ai-compliance', title: 'AI Compliance', group: 'Governance', summary: 'Auditable models for regulated finance.', description: 'Documentation, explainability tooling and testing frameworks that make your models defensible to auditors and regulators.' },
  { slug: 'ai-governance', title: 'AI Governance', group: 'Governance', summary: 'Policy, monitoring and risk controls.', description: 'Guardrails, approval workflows and monitoring dashboards that keep AI systems accountable as they scale across your organisation.' },
]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
