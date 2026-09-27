import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/content/blog'
import { whitepapers } from '@/content/whitepapers'
import { Reveal } from '@/components/ui/reveal'
import { PillButton } from '@/components/ui/pill-button'

export function KnowledgeBox() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium text-accent">From the knowledge box</p>
            <h2 className="font-heading mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              Notes from the field.
            </h2>
          </Reveal>
          <PillButton href="/blog" variant="secondary" size="sm">
            Visit the blog
          </PillButton>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={post.cover || '/placeholder.svg'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full border border-border px-2.5 py-1 text-accent">{post.tag}</span>
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-heading mt-3 text-lg font-medium leading-snug transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border-t border-border pt-14">
          <p className="text-sm font-medium text-accent">Whitepapers</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whitepapers.map((paper) => (
              <div key={paper.title} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
                  <Image
                    src={paper.cover || '/placeholder.svg'}
                    alt={paper.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-xs font-medium text-accent">{paper.category}</p>
                <h4 className="font-heading mt-1 text-sm font-medium leading-snug">{paper.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{paper.downloads}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
