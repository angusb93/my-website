import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import type { CollectionConfig } from "payload";
import { slugField } from "payload";
import { anyone } from "@/access/anyone";
import { authenticated } from "@/access/authenticated";
import { LatestArticleBlock } from "@/blocks/LatestArticle";
import { LatestProjectBlock } from "@/blocks/LatestProject";
import { RichTextBlock } from "@/blocks/RichText";

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
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "blocks",
              type: "blocks",
              blocks: [RichTextBlock, LatestArticleBlock, LatestProjectBlock],
            },
          ],
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({ hasGenerateFn: true }),
            MetaImageField({ relationTo: "media" }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
    },
    slugField(),
  ],
};
