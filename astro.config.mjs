// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  server: { port: 4000 },
  trailingSlash: "never",
  build: { format: "preserve" },
  site: "https://docs.jekyllex.xyz",
  vite: {
    resolve: {
      alias: {
        "@/": new URL("./src/", import.meta.url).pathname,
      }
    }
  },
	integrations: [
		starlight({
      lastUpdated: true,
			title: "JekyllEx Docs",
      favicon: "/favicon.png",
			social: [
        { icon: "information", label: "GitHub", href: "https://jekyllex.xyz" },
        { icon: "github", label: "GitHub", href: "https://github.com/jekyllex" },
      ],
			sidebar: [
				{ label: "Getting Started", autogenerate: { directory: "getting-started" } },
        { label: "Usage", autogenerate: { directory: "usage" } },
				{ label: "Other", autogenerate: { directory: "other" } },
			],
      customCss: ["@/styles/custom.css"],
      editLink: { baseUrl: "https://github.com/jekyllex/docs/edit/main/" },
		}),
	],
});
