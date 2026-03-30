import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/nicolasgermeau.com/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
