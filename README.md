# Thromblo Creates

The hub and portfolio for everything I build: **AwayWard** (the Discord idle-RPG,
formerly Idle MMO), the Godot game it grew from, **Sage & Pestle**, and the desktop
tools. Built with **Astro 5 + TypeScript** and shipped as a fully static site to
**GitHub Pages** (CDN-served, no server).

- **Glossy retro theme** (circa 2010-2012): gradient buttons, gloss highlights,
  corner ribbons, a faint paper grain, Lobster + Open Sans.
- **Dark mode** with a floating toggle (bottom-right). The choice is remembered and
  the OS preference is respected on first visit, with no flash on load.
- **Projects** and **Devlog** are type-safe Markdown content collections.
- **Bots hub** with invite buttons, top.gg vote buttons, and embeddable widgets.
- **Static images** live in `public/images/` and are served from the Pages CDN.

## Quick start

```bash
npm install
npm run dev            # http://localhost:4321
```

## The files to edit first

| What | Where |
| --- | --- |
| Name, tagline, email, Patreon, Discord, socials | `src/config/site.ts` |
| Bot client IDs, top.gg IDs, features | `src/config/bots.ts` |
| Project entries (one file each) | `src/content/projects/*.md` |
| Devlog posts | `src/content/devlog/*.md` |
| Theme colors, light + dark tokens, glossy styling | `src/styles/global.css` (`:root`) |
| Static images (covers, social card) | `public/images/` (see its README) |

Anything left as `PLACEHOLDER` in `site.ts` / `bots.ts` renders a tasteful disabled
state instead of a broken link, so the site is always safe to ship.

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload. |
| `npm run build` | Build the static site into `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run check` | Type-check the project with `astro check`. |

## Hosting on GitHub Pages

The repo includes a workflow at `.github/workflows/deploy.yml` that builds the site
and publishes it to Pages on every push to `main`.

**Live at:** https://thromblo-creates.github.io/

It is deployed from the org repo
[`Thromblo-Creates/thromblo-creates.github.io`](https://github.com/Thromblo-Creates/thromblo-creates.github.io).
Because the repo name matches the org login, GitHub serves it at the root with no
subpath, so the default `base: "/"` is correct.

> Note: the repo name has to equal the org login (`thromblo-creates.github.io`) for
> the clean root URL. If it were named anything else, GitHub would serve it as a
> project site under `https://thromblo-creates.github.io/<repo>/`.

**Pages setup (already done):** Settings > Pages > Build and deployment >
Source = "GitHub Actions".

### Moving to a project subpath

If you ever serve this from a differently named repo (e.g. `site`), it lands at
`https://thromblo-creates.github.io/site/`. Set the base path by uncommenting the
`PUBLIC_BASE_PATH` lines in `.github/workflows/deploy.yml` (or set it to `/<repo>`).
Everything internal already goes through `withBase()` / `asset()` in
`src/lib/paths.ts`, so that one switch is all it takes.

### Custom domain

Add a `CNAME` file in `public/` containing your domain, set the DNS records GitHub
documents, and update `PUBLIC_SITE_URL` / `site` in `astro.config.mjs`.

## Adding content

- **New project:** drop a Markdown file in `src/content/projects/` with the
  frontmatter shown in the existing files. Set `featured: true` to surface it on the
  home page, and optionally `cover: /images/projects/<slug>.png` for a card image.
- **New devlog post:** drop a Markdown file in `src/content/devlog/`. Set
  `draft: true` to keep it hidden.

## Dark theme

Tokens for both themes live in `src/styles/global.css`: the light palette in
`:root`, the dark overrides in `:root[data-theme="dark"]`. The floating toggle is
`src/components/ThemeToggle.astro`, and an inline script in `BaseLayout.astro` sets
the theme before first paint to avoid a flash. To re-theme the whole site, edit the
tokens; every component reads them.
