import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // allow overriding base path for deployments to sub-paths (e.g. /events/moniefest2026/)
  // default to root for hosts that serve at domain root (Netlify, Vercel, etc.)
  // default to repo subpath for GitHub Pages; can still be overridden via VITE_BASE
    // Default base for deployments. Use the repo name path for GitHub Pages.
    // This can be overridden by setting the VITE_BASE env var or passing
    // `--base` to `vite build` (the `build:gh` script already does this).
    base: process.env.VITE_BASE || '/moniefest-comingsoon/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
