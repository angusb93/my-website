export const dynamic = "force-dynamic";

import config from "@payload-config";
import Link from "next/link";
import { getPayload } from "payload";

export const metadata = {
  title: "Projects",
  description: "Work and projects",
};

export default async function ProjectsPage() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "projects",
    where: { _status: { equals: "published" } },
    sort: "-publishedAt",
    draft: false,
  });

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-light tracking-tight text-white">
        Projects
      </h1>
      {docs.length === 0 ? (
        <p className="text-white/50">No projects yet.</p>
      ) : null}
      <ul className="space-y-8">
        {docs.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.slug}`} className="group block">
              <h2 className="text-xl font-medium text-white transition-colors group-hover:text-white/80">
                {project.title}
              </h2>
              {project.excerpt ? (
                <p className="mt-2 text-white/60">{project.excerpt}</p>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
