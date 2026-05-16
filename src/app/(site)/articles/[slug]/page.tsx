export const dynamic = "force-dynamic";

import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

type Args = {
  params: Promise<{ slug: string }>;
};

/** Normalise a slug value so leading slashes don't cause mismatches. */
function normaliseSlug(slug: string) {
  return slug.replace(/^\/+/, "");
}

async function findArticle(slug: string) {
  const payload = await getPayload({ config });
  // Try the bare slug first, then with a leading slash (handles legacy data).
  for (const candidate of [slug, `/${slug}`]) {
    const { docs } = await payload.find({
      collection: "articles",
      where: { slug: { equals: candidate } },
      limit: 1,
    });
    if (docs[0]) {
      return docs[0];
    }
  }
  return null;
}

export async function generateMetadata({ params }: Args) {
  const { slug } = await params;
  const article = await findArticle(normaliseSlug(slug));
  if (!article) {
    return {};
  }
  return {
    title: article.title,
    description: article.excerpt ?? undefined,
  };
}

export default async function ArticlePage({ params }: Args) {
  const { slug } = await params;
  const article = await findArticle(normaliseSlug(slug));
  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-light tracking-tight text-white">
        {article.title}
      </h1>
      {article.publishedDate && (
        <time className="mb-8 block text-sm text-white/40">
          {new Date(article.publishedDate).toLocaleDateString("en-AU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      )}
      {article.excerpt && (
        <p className="mb-8 text-lg text-white/60">{article.excerpt}</p>
      )}
      {article.content?.map((block) => {
        if (block.blockType === "richText") {
          return (
            <div
              key={block.id}
              className="prose prose-invert max-w-none text-white/80"
            >
              <RichText data={block.richText} />
            </div>
          );
        }
        return null;
      })}
    </main>
  );
}
