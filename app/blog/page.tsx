import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PillButton } from '@/components/ui/pill-button'
import { Reveal } from '@/components/ui/reveal'
import { blogPosts } from '@/content/blog'

export const metadata: Metadata = {
  title: 'Blog | fincheque',
  description: 'Insights, updates, and resources on fintech and financial technology.',
}

export default function BlogPage() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h1 className="text-5xl font-bold md:text-7xl">
              Insights on{' '}
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                modern finance
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
              Thoughts on AI, engineering, and transforming financial services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, idx) => (
              <Reveal key={post.slug} delay={idx * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-lg border border-border transition-all hover:border-accent"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-background">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {post.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">{3} min read</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold md:text-5xl">Stay updated on fintech</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted-foreground">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
