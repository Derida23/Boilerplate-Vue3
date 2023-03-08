import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: { "/api": process.env.VITE_API_URL },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
