# Architecture — Human-First Engineering

_Last reviewed: 2026-07-07 · Owner: @irarainey_

## Shape at a glance

A static documentation site built with VitePress. All content is Markdown under
`docs/`; VitePress compiles it to a static site that GitHub Actions builds and
deploys to GitHub Pages on every push to `main`. There is no application code,
database, or runtime server — the only "logic" is the VitePress config and
theme.

```text
docs/**/*.md ──▶ [VitePress build] ──▶ docs/.vitepress/dist ──▶ [GitHub Pages]
       ▲                  ▲                                          │
  content          config.ts + theme/                    humanfirstengineering.dev
                                                              (CNAME)
```

## Boundaries

- **Content** (`docs/*.md`, `docs/toolkit/**`) — the framework itself. Prose only.
- **Site config** (`docs/.vitepress/config.ts`) — nav, sidebar, search, custom
  anchor slugify. The one place site behaviour is defined.
- **Theme** (`docs/.vitepress/theme/`) — `index.ts` extends the default theme;
  `custom.css` holds all visual overrides (fonts, colours, hero).
- **Static assets** (`docs/public/`) — served at the site root (favicons,
  `CNAME`, the hero logo, webmanifest).
- **Deploy** (`.github/workflows/deploy.yml`) — the only path to production.

`CRITICAL` — `docs/` is the published site. Anything placed under it becomes a
public page and is dead-link-checked. Internal artefacts (this file, `CONTEXT.md`,
`DECISIONS.md`, `adr/`) live at the repo root, outside `docs/` (see DECISIONS.md, D-005).

## Content map

The site has three parts: the **manifesto** (what we believe), the **framework**
(five pillars — see DECISIONS.md, D-002), and the **toolkit** (how to embed it).

| Area | Path | Notes |
| --- | --- | --- |
| Home (hero) | `docs/index.md` | `layout: home`; hero logo + feature cards |
| Manifesto | `docs/manifesto.md` | Core — no HVE (D-003) |
| Framework | `docs/framework.md` | Core — the five pillars (D-002) |
| Toolkit | `docs/toolkit/` | Implementation guide, practices, context engineering, slide deck, FAQ, early-career, relationship-to-HVE |
| Templates | `docs/toolkit/templates/` | Copyable instruction files, prompts, and context-artefact examples |
| Config & theme | `docs/.vitepress/` | `config.ts`, `theme/index.ts`, `theme/custom.css` |

## Conventions that shape the build

- **Anchors.** A custom `markdown.anchor.slugify` strips emoji/punctuation, so
  cross-page anchor links use the clean single-hyphen form (see DECISIONS.md, D-004).
  The build validates linked *files* but not *anchors* — check anchors separately.
- **Spelling.** British English throughout (D-006).
- **Version.** `1.1.0`, tracked in three places that must stay in step: `VERSION`,
  `package.json`, and `hfeVersion` in `config.ts`.

## Why it is built this way

The project is content, not software, so the architecture is deliberately thin:
a static-site generator, a thin theme, and a single deploy path. The interesting
engineering is in the writing and its consistency, which is why the constraints
that protect it (fixed pillars, no HVE in core, clean anchors, British English)
are recorded as decisions rather than left implicit.
