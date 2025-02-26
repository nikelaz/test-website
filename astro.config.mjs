// @ts-check
import { defineConfig } from 'astro/config';
import stylex from 'astro-stylex';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [stylex(), react()],
});