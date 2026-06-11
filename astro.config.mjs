// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Fully static output for GitHub Pages: every page is prerendered to plain HTML
// and the whole dist/ folder is published as-is (no Node server runs in
// production). The GitHub Actions workflow in .github/workflows/deploy.yml builds
// this and deploys it to Pages.
//
// SITE + BASE control where the site lives. Two supported layouts:
//   - Org root site, repo "thromblo-creates.github.io"  -> base "/"   (default)
//   - Project repo, e.g. repo "site"                     -> base "/site/"
// To switch to a project subpath, set PUBLIC_BASE_PATH (e.g. "/site") in the
// build environment, or change the default below. Every internal link/asset uses
// withBase()/asset() from src/lib/paths.ts, so this is the only knob to turn.
const SITE = process.env.PUBLIC_SITE_URL || 'https://thromblo-creates.github.io';
const BASE = process.env.PUBLIC_BASE_PATH || '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { format: 'directory' },
  server: { port: 4321, host: true },
});
