import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "xp.css/dist/xp.css": "./node_modules/xp.css/dist/xp.css",
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
});
