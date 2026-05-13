// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mermaid from 'astro-mermaid';
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [
    expressiveCode(),
    mermaid({
      theme: "forest",
      autoTheme: true,
    }),
    starlight({
      title: "Dummy Top Up API",
      sidebar: [
        {
          label: "Getting started",
          slug: "index",
        },
        {
          label: "System",
          slug: "system",
        },
        {
          label: "FAQ",
          slug: "faq",
        },
      ],
    }),
  ],
});
