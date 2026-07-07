# ADR 0006 — British English is the spelling standard

- **Date:** 2026-07-07 · **Status:** Accepted · **Owner:** @irarainey · **Importance:** `IMPORTANT`

## Decision

All prose uses British English: `-ise`/`-isation`, `artefact`, `behaviour`, `judgement`, `licence` (noun), `towards`, `colour`, and so on.

## Why

- Consistency. The site was already predominantly British; mixed spelling (e.g. `artifact` vs `artefact`) is visible and looks careless.

## Exceptions

- **Code and identifiers** keep their real spelling — CSS `color`, `text-align: center`, API names, etc. are not prose.
- **Filenames and proper nouns** stay as-is: `LICENSE.md`, the "Creative Commons … License" name, third-party product names.

## Consequences

- A review step scans Markdown for common American spellings and normalises them, skipping code fences, URLs, and the exceptions above.
