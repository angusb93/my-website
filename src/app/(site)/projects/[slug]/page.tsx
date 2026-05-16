export const dynamic = "force-dynamic";

import config from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { BlockRenderer } from "@/components/BlockRenderer";

type Args = {
  params: Promise<{ slug: string }>;
};

async function findProject(slug: string) {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "projects",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return docs[0] ?? null;
}

export async function generateMetadata({ params }: Args) {
  const { slug } = await params;
  const project = await findProject(slug);
  if (!project) {
    return {};
  }
  return {
    title: project.title,
    description: project.excerpt ?? undefined,
  };
}

export default async function ProjectPage({ params }: Args) {
  const { slug } = await params;
  const project = await findProject(slug);
  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-light tracking-tight text-white">
        {project.title}
      </h1>
      {project.excerpt ? (
        <p className="mb-8 text-lg text-white/60">{project.excerpt}</p>
      ) : null}
      <BlockRenderer blocks={project.content ?? []} />
    </main>
  );
}
