import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "",
  build: {
    // Ensure that assets are copied to the output directory
    assetsInlineLimit: 1,
  },
  plugins: [react()],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
});
