export const dynamic = "force-dynamic";

import config from "@payload-config";
import Link from "next/link";
import { getPayload } from "payload";

export const metadata = {
  title: "Articles",
  description: "Writing and thoughts",
};

export default async function ArticlesPage() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "articles",
    where: { status: { equals: "published" } },
    sort: "-publishedDate",
  });

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-light tracking-tight text-white">
        Articles
      </h1>
      {docs.length === 0 && <p className="text-white/50">No articles yet.</p>}
      <ul className="space-y-8">
        {docs.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.slug}`} className="group block">
              <h2 className="text-xl font-medium text-white group-hover:text-white/80 transition-colors">
                {article.title}
              </h2>
              {article.publishedDate && (
                <time className="mt-1 block text-sm text-white/40">
                  {new Date(article.publishedDate).toLocaleDateString("en-AU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
              {article.excerpt && (
                <p className="mt-2 text-white/60">{article.excerpt}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
