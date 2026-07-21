import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative base so the build works from a GitHub Pages project subpath
  // (https://<user>.github.io/<repo>/) as well as from the site root.
  base: './',
});
