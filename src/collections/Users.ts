import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: { useAsTitle: "email" },
  auth: true,
  access: {
    // Only logged-in admins can create, read, update, or delete users.
    // This prevents self-registration via the REST API.
    create: ({ req }) => req.user?.collection === "users",
    read: ({ req }) => req.user?.collection === "users",
    update: ({ req }) => req.user?.collection === "users",
    delete: ({ req }) => req.user?.collection === "users",
  },
  fields: [],
};
