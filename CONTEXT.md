# Project Context — Human-First Engineering

_Last reviewed: 2026-07-07 · Owner: @irarainey_

## What this is

The website for **Human-First Engineering (HFE)** — a framework for growing
engineers in the age of AI. The repo is the source for the site published at
[humanfirstengineering.dev](https://humanfirstengineering.dev). It is content,
not an application: Markdown compiled to a static site by VitePress. HFE has
three parts — a **manifesto** (what we believe), a **framework** (five pillars),
and a **toolkit** (how to embed both in a team).

## Current state

- Live, at version **1.1.0**.
- Recently migrated from Jekyll to VitePress (see DECISIONS.md, D-001).
- v1.1 added context engineering, AI-review as a distinct skill, and team
  practices — all as behaviours/toolkit content, not new pillars.

## Goals and non-goals

- **Goal:** a clear, memorable, principle-driven framework that keeps engineering
  judgement, ownership, and craft intact as AI use grows.
- **Goal:** stays lightweight — principles and examples, not process or governance.
- **Non-goal:** a tool or product. There is no application code to ship.
- **Non-goal:** an HVE sub-brand. HFE stands on its own (see constraints).

## Constraints

- `CRITICAL` — **The five pillars are fixed** (Think first · Own the output ·
  Grow through AI, not around it · Use AI intelligently · Trust AI, but verify
  everything). Evolve via behaviours or toolkit, never new/renamed pillars. See
  DECISIONS.md, D-002.
- `CRITICAL` — **No HVE in the core.** `docs/index.md`, `docs/manifesto.md`, and
  `docs/framework.md` must not mention Hyper-Velocity Engineering. HVE belongs in
  the toolkit only. See DECISIONS.md, D-003.
- `CRITICAL` — **`docs/` is the published site.** Internal artefacts stay at the
  repo root, outside `docs/` (see DECISIONS.md, D-005).
- `IMPORTANT` — **British English** everywhere in prose (D-006).
- `IMPORTANT` — **Plain language.** No buzzwords, slogans, or consultancy-speak
  (e.g. "leverage", "first-class", "unlock", "multiplier", "synergy",
  "high-ROI"). Prose is plain, direct, and defensible.
- `IMPORTANT` — Cross-page **anchor links** use the clean, emoji-stripped slug
  form; the build does not validate anchors, so check them by hand (D-004).
- `IMPORTANT` — Keep `VERSION`, `package.json`, and `hfeVersion` in
  `docs/.vitepress/config.ts` in step.

## Common commands

- Install: `npm install`
- Dev server: `npm run docs:dev`
- Build (fails on broken internal links): `npm run docs:build`
- Preview the build: `npm run docs:preview`

## Load on demand

_Read these only when the task touches them — do not pull them in by default._

- Architecture, boundaries, and the content map → `ARCHITECTURE.md`
- Significant decisions (the *why*, and what was rejected) → `DECISIONS.md` → `adr/`
- How the AI should behave in this repo → `.github/copilot-instructions.md`
