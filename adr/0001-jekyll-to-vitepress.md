# ADR 0001 — Migrate the site from Jekyll to VitePress

- **Date:** 2026-07-07 · **Status:** Accepted · **Owner:** @irarainey · **Importance:** `IMPORTANT`

## Decision

The site is built with [VitePress](https://vitepress.dev) (Vue 3, Node 22, npm), with all content as Markdown under `docs/`. It replaces the previous Jekyll + `just-the-docs` remote-theme setup. The structure follows the [`silverdaw-guide`](https://github.com/irarainey/silverdaw-guide) layout: `docs/.vitepress/{config.ts,theme/}`, `docs/public/` for static assets, and a GitHub Actions workflow that builds and deploys to GitHub Pages.

## Why

- No Ruby/Bundler toolchain; the rest of the ecosystem is already Node-based, so contributors need one runtime.
- Built-in local search, dark mode, and a maintained default theme without a remote-theme dependency.
- Faster local iteration (`npm run docs:dev`) and a build step that fails on broken internal links.

## Rejected alternatives

- **Stay on Jekyll / just-the-docs.** Working, but the remote-theme dependency and Ruby toolchain were friction, and search needed extra setup.
- **Docusaurus / Astro Starlight.** Both capable; VitePress was chosen for its lighter footprint and because a proven sibling repo (`silverdaw-guide`) already used it.

## Consequences

- Content moved from repo root into `docs/`; the deploy workflow changed from `pages.yml` (Jekyll) to `deploy.yml` (npm + VitePress).
- Heading-anchor generation changed, which forced [ADR 0004](0004-custom-anchor-slugify.md).
