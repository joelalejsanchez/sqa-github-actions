import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/sqa-github-actions/",
  test: {
    environment: "jsdom",
    globals: true,
  },
});
