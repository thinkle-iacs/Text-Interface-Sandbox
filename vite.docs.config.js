import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "docs/",
  build: {
    outDir: "docs/build/",
    emptyOutDir: true,
    minify: false,
  },
  resolve: {
    alias: {
      // Adjust this if you need more complex path resolution
      "@": path.resolve(__dirname, "./"),
    },
  },
});
