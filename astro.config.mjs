// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// A fully prerendered page. Images are optimised at build time with Sharp, and
// nothing uses sessions, so the Worker needs neither a KV namespace nor the
// Images binding: Cloudflare serves the built files as static assets.
export default defineConfig({
  site: 'https://plait.mostlyheath.com',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  session: false,
  adapter: cloudflare({ imageService: 'compile', imagesBindingName: false }),
});
