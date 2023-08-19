import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import makeManifest from "./utils/plugins/makeManifest";
import copyContentStyle from "./utils/plugins/copyContentStyle";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
import { splitVendorChunkPlugin } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";

const root = resolve(__dirname, "src");
const pagesDir = resolve(root, "pages");
const assetsDir = resolve(root, "assets");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");

export default ({ mode, command }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    resolve: {
      alias: {
        "@src": root,
        "@assets": assetsDir,
        "@pages": pagesDir,
      },
    },
    plugins: [
      makeManifest(),
      copyContentStyle(),
      splitVendorChunkPlugin(),
      ViteMinifyPlugin({}),
    ],
    publicDir,
    build: {
      outDir,
      rollupOptions: {
        input: {
          devtools: resolve(pagesDir, "devtools", "index.html"),
          panel: resolve(pagesDir, "panel", "index.html"),
          content: resolve(pagesDir, "content", "index.ts"),
          background: resolve(pagesDir, "background", "index.ts"),
          popup: resolve(pagesDir, "popup", "index.html"),
          newtab: resolve(pagesDir, "newtab", "index.html"),
          options: resolve(pagesDir, "options", "index.html"),
        },
        output: {
          entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
        },
        plugins: [rollupNodePolyFill()],
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: "globalThis",
        },
        plugins: [],
      },
    },
  });
};
