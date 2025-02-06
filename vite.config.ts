import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({
      verbose: true,  // Log the compression results
      algorithm: 'gzip',  // Use gzip compression
      threshold: 10240,  // Minimum file size to compress (10 KB)
      deleteOriginFile: false,  // Don't delete original files
    }),
  ],
  build: {
    minify: 'esbuild',  // Use esbuild for minification
  },
});
