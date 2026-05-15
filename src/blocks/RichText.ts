import type { Block } from "payload";

export const RichTextBlock: Block = {
  slug: "richText",
  labels: {
    singular: "Rich Text",
    plural: "Rich Text Blocks",
  },
  fields: [
    {
      name: "richText",
      type: "richText",
      required: true,
    },
  ],
};
