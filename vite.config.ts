import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true
  },
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components")
      },
      {
        find: "@constants",
        replacement: path.resolve(__dirname, "src/constants")
      },
      {
        find: "@interfaces",
        replacement: path.resolve(__dirname, "src/interfaces")
      },
      {
        find: "@layout",
        replacement: path.resolve(__dirname, "src/layout")
      },
      {
        find: "@modals",
        replacement: path.resolve(__dirname, "src/modals")
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages")
      },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/services")
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/utils")
      }
    ]
  }
});
