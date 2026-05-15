import config from "@payload-config";
import { getPayload } from "payload";
import { HomeWrapper } from "@/components/HomeWrapper";

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
      <HomeWrapper article={article} />
    </main>
  );
}
