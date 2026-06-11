/**
 * Base-path helpers for GitHub Pages.
 *
 * GitHub Pages can serve this site two ways, depending on the repo name:
 *
 *   - As the org root site (repo "thromblo-creates.github.io")
 *       -> served at  https://thromblo-creates.github.io/   (base = "/")
 *   - As a project repo (repo "site", "web", etc.)
 *       -> served at  https://thromblo-creates.github.io/site/  (base = "/site/")
 *
 * Astro injects the configured `base` as import.meta.env.BASE_URL (always with a
 * trailing slash). Every internal link and local asset path on the site goes
 * through withBase() / asset() so flipping `base` in astro.config.mjs is the only
 * change needed to move between the two layouts. External URLs are passed through
 * untouched.
 */

const BASE = import.meta.env.BASE_URL; // e.g. "/" or "/site/"

function isExternal(path: string): boolean {
  return (
    /^https?:\/\//i.test(path) ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#') ||
    path.startsWith('//')
  );
}

/** Prefix an internal route with the configured base path. External URLs pass through. */
export function withBase(path: string): string {
  if (!path) return BASE;
  if (isExternal(path)) return path;
  const trimmedBase = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const leading = path.startsWith('/') ? path : `/${path}`;
  return `${trimmedBase}${leading}`;
}

/** Prefix a file in /public (image, icon, etc.) with the base path. */
export function asset(path: string): string {
  return withBase(path);
}
