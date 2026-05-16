export const dynamic = "force-dynamic";

import config from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { BlockRenderer } from "@/components/BlockRenderer";

type Args = {
  params: Promise<{ slug: string }>;
};

async function findPage(slug: string) {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "pages",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return docs[0] ?? null;
}

export async function generateMetadata({ params }: Args) {
  const { slug } = await params;
  const page = await findPage(slug);
  if (!page) {
    return {};
  }
  return { title: page.title };
}

export default async function PageRoute({ params }: Args) {
  const { slug } = await params;

  // Home page lives at "/" — /home should not be a valid URL.
  if (slug === "home") {
    notFound();
  }

  const page = await findPage(slug);
  if (!page) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-light tracking-tight text-white">
        {page.title}
      </h1>
      <BlockRenderer blocks={page.blocks ?? []} />
    </main>
  );
}
