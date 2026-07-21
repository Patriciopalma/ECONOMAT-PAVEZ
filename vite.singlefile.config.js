import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Produces one self-contained dist-single/index.html (JS + CSS inlined,
// images already embedded as data URIs in src/assets.js) for hosting
// anywhere that only serves a single static file.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: 'dist-single',
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
  },
});
