import { defineConfig } from 'astro/config';

// Static output: no server, no adapter. Deployed to GitHub Pages under the
// custom domain in public/CNAME, so the site is served from the domain root
// and needs no `base`.
export default defineConfig({
  site: 'https://andres-valerio.me',
  output: 'static',
});
