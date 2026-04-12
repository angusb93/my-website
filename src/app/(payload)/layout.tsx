import "@payloadcms/next/css";
import config from "@payload-config";
import { RootLayout } from "@payloadcms/next/layouts";
import type React from "react";
import { importMap } from "./admin/importMap";
import { serverFunction } from "./serverFunction";

export const dynamic = "force-dynamic";

export default async function PayloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  );
}
