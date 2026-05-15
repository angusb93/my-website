import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: [
    "src/app/**/{page,layout,loading,error,not-found,route,middleware}.{ts,tsx}",
    "src/collections/**/*.ts",
  ],
  project: ["src/**/*.{ts,tsx}"],
  ignoreDependencies: ["postcss-load-config"],
};

export default config;
