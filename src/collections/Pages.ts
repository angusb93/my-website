import type { CollectionConfig } from "payload";
import { authenticated } from "@/access/authenticated";
import { anyone } from "@/access/anyone";
import { RichTextBlock } from "@/blocks/RichText";
import { LatestArticleBlock } from "@/blocks/LatestArticle";
import { LatestProjectBlock } from "@/blocks/LatestProject";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: { useAsTitle: "title" },
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { position: "sidebar" },
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: [RichTextBlock, LatestArticleBlock, LatestProjectBlock],
    },
  ],
};
