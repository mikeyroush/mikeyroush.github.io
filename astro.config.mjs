import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mikeyroush.github.io',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/chunks/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
    ssr: {
      noExternal: ['gsap', 'd3'],
    },
  },
});