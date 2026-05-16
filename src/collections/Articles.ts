import type { CollectionConfig } from "payload";
import { authenticated } from "@/access/authenticated";
import { authenticatedOrPublished } from "@/access/authenticatedOrPublished";
import { RichTextBlock } from "@/blocks/RichText";

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: { useAsTitle: "title" },
  access: {
    create: authenticated,
    read: authenticatedOrPublished,
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
      hooks: {
        beforeChange: [
          ({ value }) => {
            const validatedValue = String(value);
            return validatedValue.replace(/^\/+/, "");
          },
        ],
      },
    },
    { name: "publishedDate", type: "date", admin: { position: "sidebar" } },
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
