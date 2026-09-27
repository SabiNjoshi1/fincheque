import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { blogPosts } from '@/content/blog'

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return { title: 'Not Found' }
  }

  return {
    title: `${post.title} | fincheque Blog`,
    description: post.excerpt,
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length]
  const prevPost = blogPosts[(currentIndex - 1 + blogPosts.length) % blogPosts.length]

  return (
    <main className="pt-32">
      {/* Breadcrumb */}
      <section className="border-b border-border px-6 py-4">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="size-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {post.tag}
              </span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{3} min read</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-5xl font-bold md:text-6xl">{post.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted-foreground">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-3xl">
          <Reveal delay={0.15}>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal delay={0.2}>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {post.body.join(' ')}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group rounded-lg border border-border bg-background/50 p-6 transition-all hover:border-accent hover:bg-accent/5"
            >
              <div className="flex items-center gap-3">
                <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Previous</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">{prevPost.title}</p>
                </div>
              </div>
            </Link>
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group rounded-lg border border-border bg-background/50 p-6 transition-all hover:border-accent hover:bg-accent/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Next</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">{nextPost.title}</p>
                </div>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
