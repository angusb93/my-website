import config from "@payload-config";
import Link from "next/link";
import { getPayload } from "payload";
import HomeBackground from "@/components/HomeBackground";

export const dynamic = "force-dynamic";

export default async function Home() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "articles",
    where: { status: { equals: "published" } },
    sort: "-publishedDate",
    limit: 1,
  });

  const article = docs[0] ?? null;

  return (
    <main className="min-h-screen w-screen relative">
      <HomeBackground />
      <div>
        <div className="h-screen w-screen flex items-center justify-center">
          <div className="flex w-3/4 justify-between font-thin text-6xl text-white">
            <div>Angus</div>
            <div>Buick</div>
          </div>
        </div>
        <div className="relative p-8">
          {article && (
            <Link
              href={`/articles/${article.slug.replace(/^\/+/, "")}`}
              className="group block max-w-sm rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/40">
                Latest
              </p>
              <h2 className="mb-2 text-xl font-light text-white group-hover:text-white/90">
                {article.title}
              </h2>
              {article.excerpt && (
                <p className="text-sm text-white/50">{article.excerpt}</p>
              )}
              <span className="mt-4 block text-sm text-white/30 group-hover:text-white/60 transition">
                Read →
              </span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
