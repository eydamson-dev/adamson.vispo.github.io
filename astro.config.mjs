import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://eydamson-dev.github.io',
  base: '/',
  integrations: [tailwind(), react()],
  devToolbar: {
    enabled: false
  }
});
