# Static images (CDN-cached)

Everything in `public/` is copied to the site root at build time and served
straight from GitHub Pages, which sits behind a CDN (Fastly). That means images
here are edge-cached and load fast worldwide with zero extra setup. This folder is
the "image CDN" for the site.

## Layout

| Path | Used for |
| --- | --- |
| `images/og-default.svg` | Default social share card (Open Graph / Twitter). |
| `images/projects/<slug>.*` | Optional cover image for a project card + detail page. |

## How to use a project cover

1. Drop a file in `images/projects/`, e.g. `images/projects/awayward.png`
   (use a wide ~16:9 image; WebP or PNG both work).
2. In that project's Markdown frontmatter (`src/content/projects/<slug>.md`) set:

   ```yaml
   cover: /images/projects/awayward.png
   ```

   Paths are written from the site root (`/images/...`); the site makes them
   base-path-aware automatically via `asset()`, so they keep working whether the
   site is served at the domain root or under a project subpath.

## Caching notes

- GitHub Pages serves static assets with long-lived CDN caching. When you change
  an image, either rename it (e.g. add a version suffix like `-v2`) or expect the
  edge cache to refresh within a few minutes.
- Astro fingerprints anything imported through `src/`; files in `public/` are
  served verbatim, so manage cache-busting by filename for those.

## Replacing the social card

`og-default.svg` is a vector card so it stays crisp and tiny. Some platforms
(notably Discord) prefer a raster image for link previews. If you want the richest
previews there, export a `1200x630` PNG, save it as
`images/og-default.png`, and update the default in
`src/layouts/BaseLayout.astro`.
