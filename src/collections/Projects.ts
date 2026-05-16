import type { CollectionConfig } from "payload";
import { RichTextBlock } from "@/blocks/RichText";

export const Projects: CollectionConfig = {
  slug: "projects",
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
      name: "status",
      type: "select",
      options: ["draft", "published"],
      defaultValue: "draft",
      admin: { position: "sidebar" },
    },
    { name: "excerpt", type: "textarea" },
    {
      name: "content",
      type: "blocks",
      blocks: [RichTextBlock],
    },
  ],
};
