# ADR 0004 — Custom anchor slugify to keep clean heading anchors

- **Date:** 2026-07-07 · **Status:** Accepted · **Owner:** @irarainey · **Importance:** `CRITICAL`

## Decision

`docs/.vitepress/config.ts` sets a custom `markdown.anchor.slugify` that strips emoji, em dashes, and punctuation before slugifying, then lowercases and joins with single hyphens. All cross-page anchor links use this clean form — for example `#pillar-3-grow-through-ai-not-around-it`.

## Why

- Many headings begin with an emoji (e.g. `## 🧠 Pillar 1 — Think first`). VitePress's default slugify keeps the emoji and the em dash, producing anchors like `#🧠-pillar-1-—-think-first`, which are ugly and fragile.
- The old Jekyll/Kramdown site produced *different* slugs again (em dash became a double hyphen), so links written for the old site would silently break after the migration.
- A single deterministic slugify gives readable, stable anchors that both the sidebar/outline and hand-written cross-links agree on.

## Rejected alternatives

- **Keep VitePress defaults and rewrite every link to match the emoji slugs.** Ugly, and any heading edit would break links.
- **Remove emoji from all headings.** The emoji are part of the house style; not worth losing.

## Consequences

- VitePress's dead-link checker validates that linked **files** exist, but **not** that heading anchors exist. Anchor correctness must be checked separately — there is a small Python validator used during reviews that resolves every `.md#anchor` link against the generated slugs. Run it after any heading rename.
