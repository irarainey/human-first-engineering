# ADR 0002 — The five pillars are fixed

- **Date:** 2026-07-06 · **Status:** Accepted · **Owner:** @irarainey · **Importance:** `CRITICAL`

## Decision

The framework has exactly five pillars, and their names and order are fixed:

1. Think first
2. Own the output
3. Grow through AI, not around it
4. Use AI intelligently
5. Trust AI, but verify everything

The framework evolves by adding or refining **behaviours** within a pillar, or by adding **toolkit** material — never by adding, removing, or renaming pillars.

## Why

- The five pillars are the memorable core of the framework. Their stability is what makes them quotable and teachable; a moving target cannot become shared vocabulary.
- Most new ideas (context engineering, AI-review as a skill, team practices) fit cleanly as behaviours under an existing pillar. Reaching for a new pillar is almost always a sign the idea belongs in the toolkit instead.

## Rejected alternatives

- **A sixth pillar for context engineering.** Considered when context was added in v1.1; rejected because it fits under Pillar 4 (Use AI intelligently) and a dedicated toolkit page. See [ADR 0005](0005-context-artefacts-outside-docs.md) for where the context material lives.

## Consequences

- Pillar wording must be identical everywhere it appears (home, framework, manifesto, slide deck, one-line summary). Reviews check for drift.
