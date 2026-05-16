import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";
import { getPayload } from "payload";
import type { Page } from "@/payload-types";

type Block = NonNullable<Page["blocks"]>[number];

async function LatestArticleCard() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "articles",
    where: { status: { equals: "published" } },
    sort: "-publishedDate",
    limit: 1,
  });
  const article = docs[0];

  if (!article) {
    return null;
  }

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block max-w-sm rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/40">
        Latest Article
      </p>
      <h2 className="mb-2 text-xl font-light text-white group-hover:text-white/90">
        {article.title}
      </h2>
      {article.excerpt ? (
        <p className="text-sm text-white/50">{article.excerpt}</p>
      ) : null}
      <span className="mt-4 block text-sm text-white/30 transition group-hover:text-white/60">
        Read →
      </span>
    </Link>
  );
}

async function LatestProjectCard() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "projects",
    where: { status: { equals: "published" } },
    sort: "-createdAt",
    limit: 1,
  });
  const project = docs[0];
  if (!project) {
    return null;
  }
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block max-w-sm rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/40">
        Latest Project
      </p>
      <h2 className="mb-2 text-xl font-light text-white group-hover:text-white/90">
        {project.title}
      </h2>
      {project.excerpt ? (
        <p className="text-sm text-white/50">{project.excerpt}</p>
      ) : null}
      <span className="mt-4 block text-sm text-white/30 transition group-hover:text-white/60">
        View →
      </span>
    </Link>
  );
}

/**
 * Renders an array of Payload blocks. Handles richText, latestArticle, and latestProject.
 * Used by the Home global and single-item collection pages.
 */
export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block) => {
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
        if (block.blockType === "latestArticle") {
          return <LatestArticleCard key={block.id} />;
        }
        if (block.blockType === "latestProject") {
          return <LatestProjectCard key={block.id} />;
        }
        return null;
      })}
    </>
  );
}
