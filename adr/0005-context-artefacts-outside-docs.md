# ADR 0005 — Context artefacts live at the repo root, ADRs outside `docs/`

- **Date:** 2026-07-07 · **Status:** Accepted · **Owner:** @irarainey · **Importance:** `IMPORTANT`

## Decision

`CONTEXT.md`, `ARCHITECTURE.md`, and `DECISIONS.md` live at the repository root. The full ADRs they reference live in a root-level `adr/` directory. None of these sit under `docs/`.

## Why

- `docs/` is the VitePress source root: every `.md` under it becomes a published page and is subject to the dead-link check. Internal engineering artefacts (project memory, decision records) are not site content and should not be published or crawled.
- The repo-root location matches the guidance in the toolkit templates ("save it at the root of your repository") and keeps the files easy to find on GitHub.

## Note on the template

The toolkit's `DECISIONS.md` template suggests `docs/adr/`. That assumes a typical application repo where `docs/` is *not* the published site. Here `docs/` **is** the site, so ADRs go in root `adr/` instead. This is the documented exception, not a contradiction.

## Consequences

- These files are versioned and reviewed like code, but never appear in the built site.
- If VitePress config ever changes `srcDir`, re-check that root artefacts are still excluded from the build.
