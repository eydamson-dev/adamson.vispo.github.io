import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
const basePath = process.env.NODE_ENV === 'production' ? '/adamson.vispo/' : '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://eydamson-dev.github.io',
  base: basePath,
  integrations: [tailwind(), react()],
  devToolbar: {
    enabled: false
  }
});
