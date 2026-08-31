// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hildieleyser.github.io',
  integrations: [mdx(), sitemap()],
  image: {
    // Screenshots and photos both benefit from AVIF/WebP here; the source PNGs
    // are 1-1.5 MB each and never displayed above ~1400px.
    responsiveStyles: true,
    layout: 'constrained',
  },
  build: { inlineStylesheets: 'auto' },
  markdown: { shikiConfig: { theme: 'github-dark-default' } },
});
