export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import config from '@payload-config'

type Args = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Args) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'articles',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const article = docs[0]
  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.excerpt ?? undefined,
  }
}

export default async function ArticlePage({ params }: Args) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'articles',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const article = docs[0]
  if (!article) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-light tracking-tight text-white">{article.title}</h1>
      {article.publishedDate && (
        <time className="mb-8 block text-sm text-white/40">
          {new Date(article.publishedDate).toLocaleDateString('en-AU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      )}
      {article.excerpt && (
        <p className="mb-8 text-lg text-white/60">{article.excerpt}</p>
      )}
      <div className="prose prose-invert max-w-none">
        {/* Rich text rendered as JSON for now — add RichText renderer when needed */}
        <pre className="text-sm text-white/60">{JSON.stringify(article.content, null, 2)}</pre>
      </div>
    </main>
  )
}
