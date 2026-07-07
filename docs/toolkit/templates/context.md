# CONTEXT.md

A project-memory file. It gives any engineer — or any AI session or agent — the goals, current state, and constraints they need to be useful immediately, without re-explaining the project from scratch.

Save it as `CONTEXT.md` at the root of your repository. Alongside your instruction file, it is one of the files the tool should always read, so keep it small — a page at most — and make it mostly an index: inline only what is `CRITICAL`, and link deeper documents (`ARCHITECTURE.md`, ADRs, specs) to be opened only when relevant. Curate it; do not let it accrete. See [Context Engineering](../context-engineering.md) for the reasoning behind this file.

The block below is a realistic example. Replace it with your project's specifics.

````markdown
# Project Context — Orders Service

_Last reviewed: 2026-06-30 · Owner: @ade_

## What this is

The Orders Service owns the lifecycle of a customer order from checkout to
fulfilment hand-off. It is the source of truth for order state. Other services
read order state from us; none of them write it.

## Current state

- In production since 2025-11. Handles ~40k orders/day.
- Actively being extended to support partial refunds (see DECISIONS.md, D-014).
- The legacy `order_events` table is mid-migration to the event log — both are
  live until the migration completes. Do not add new writers to `order_events`.

## Goals and non-goals

- **Goal:** a single, auditable source of truth for order state.
- **Goal:** every state transition is an immutable, replayable event.
- **Non-goal:** payment capture. That belongs to the Payments Service; we only
  hold a reference to a payment intent.

## Constraints

- `CRITICAL` — Order state transitions are **irreversible** once emitted as
  events. Corrections are new compensating events, never edits or deletes.
- `CRITICAL` — We must retain order records for 7 years (tax/regulatory).
  Nothing in this service hard-deletes order data.
- `IMPORTANT` — All money is stored in minor units (integer pence), never
  floats. See ARCHITECTURE.md.
- `REFERENCE` — We target p99 < 200ms for order reads.

## Glossary

- **Order state** — the current status derived by folding the event log.
- **Fulfilment hand-off** — the point we hand a confirmed order to the
  warehouse. After this point, cancellation rules change (see D-009).

## Load on demand

_Read these only when the task touches them — do not pull them in by default._

- Architecture & boundaries → `ARCHITECTURE.md`
- Significant decisions (the *why*, and what we rejected) → `DECISIONS.md`
- Domain rules the AI must respect → `.github/copilot-instructions.md`
````

---

*Part of the [Human-First Engineering templates](https://github.com/irarainey/human-first-engineering/tree/main/toolkit/templates). Adapt it to your project; do not adopt it unchanged.*
