import type { CollectionConfig } from "payload";
import { RichTextBlock } from "@/blocks/RichText";
import { LatestArticleBlock } from "@/blocks/LatestArticle";
import { LatestProjectBlock } from "@/blocks/LatestProject";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: { useAsTitle: "title" },
  access: {
    read: () => true,
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
