import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://eydamson-dev.github.io',
  base: '/adamson.vispo',
  integrations: [tailwind(), react()],
  devToolbar: {
    enabled: false
  }
});
