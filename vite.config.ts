import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Browser saves are scoped to the page origin, so dev and preview share one
// fixed port: switching between them never hides a player's progress.
const PLAY_PORT = 5173;

export default defineConfig({
  // GitHub Pages overrides this with `--base /Philosophy-Auto-Chess/`.
  base: "/",
  root: "static-web",
  publicDir: "../public",
  plugins: [react()],
  server: { port: PLAY_PORT, strictPort: true },
  preview: { port: PLAY_PORT, strictPort: true },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
