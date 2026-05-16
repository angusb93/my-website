export const dynamic = "force-dynamic";

import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

type Args = {
  params: Promise<{ slug: string }>;
};

async function findArticle(slug: string) {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "articles",
    where: { slug: { equals: slug } },
    draft: false,
    limit: 1,
  });
  return docs[0] ?? null;
}

export async function generateMetadata({ params }: Args) {
  const { slug } = await params;
  const article = await findArticle(slug);
  if (!article) {
    return {};
  }
  return {
    title: article.meta?.title ?? article.title,
    description: article.meta?.description ?? article.excerpt ?? undefined,
  };
}

export default async function ArticlePage({ params }: Args) {
  const { slug } = await params;
  const article = await findArticle(slug);
  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-light tracking-tight text-white">
        {article.title}
      </h1>
      {article.publishedAt ? (
        <time className="mb-8 block text-sm text-white/40">
          {new Date(article.publishedAt).toLocaleDateString("en-AU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      ) : null}
      {article.excerpt ? (
        <p className="mb-8 text-lg text-white/60">{article.excerpt}</p>
      ) : null}
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
