import config from "@payload-config";
import { getPayload } from "payload";
import { BlockRenderer } from "@/components/BlockRenderer";
import { HomeWrapper } from "@/components/HomeWrapper";

export const dynamic = "force-dynamic";

export default async function Home() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "pages",
    where: { slug: { equals: "home" } },
    limit: 1,
  });
  const home = docs[0] ?? null;

  return (
    <main className="min-h-screen w-screen relative">
      <HomeWrapper>
        <BlockRenderer blocks={home?.blocks ?? []} />
      </HomeWrapper>
    </main>
  );
}
