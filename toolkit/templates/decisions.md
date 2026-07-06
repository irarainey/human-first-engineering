---
title: DECISIONS.md
parent: Templates & Prompts
grand_parent: Toolkit
nav_order: 8
---

# DECISIONS.md

A decision log. It captures significant choices, the reasoning behind them, and — crucially — the alternatives that were rejected and why. This is the context most likely to be lost to compaction, and the most expensive to lose: without it, teams re-litigate settled debates and AI generates approaches that contradict earlier reasoning.

To keep it from bloating the context window, `DECISIONS.md` is a **one-line-per-decision index**, linked from `CONTEXT.md` and read when relevant rather than held in context by default. Surface only the few truly `CRITICAL` decisions directly in the always-on core (`CONTEXT.md`); keep the rest in this index, with the detail in individual ADRs (architecture decision records) under `docs/adr/`, read only when a task touches that decision. Write the ADR at the moment of decision, while the reasoning is fresh, and add its line to the index. See [Context Engineering](../context-engineering.md) for the reasoning behind this file.

Two example blocks follow: first `DECISIONS.md` itself — the lean index, linked from `CONTEXT.md` and read when relevant — then one full ADR it links to, which is read on demand. Replace both with your project's specifics.

````markdown
# Decision Index — Orders Service

One line per decision. Linked from `CONTEXT.md` and read when relevant; each linked ADR
holds the detail and is read only when a task touches that decision. Newest first.

| ID | Importance | Decision | Record |
| --- | --- | --- | --- |
| D-014 | `CRITICAL` | Partial refunds as compensating events | `docs/adr/0014-partial-refunds.md` |
| D-009 | `IMPORTANT` | Cancellation locked after fulfilment hand-off | `docs/adr/0009-cancellation-lock.md` |
| D-003 | `CRITICAL` | Event sourcing for order state | `docs/adr/0003-event-sourcing.md` |
````

The full record — stored under `docs/adr/` and opened only when relevant — carries the reasoning and the rejected alternatives:

````markdown
# ADR 0014 — Partial refunds as compensating events

- **Date:** 2026-06-18 · **Status:** Accepted · **Owner:** @ade · **Importance:** `CRITICAL`

## Decision

Partial refunds are modelled as new `RefundIssued` events against the original
order, not as edits to the order total.

## Why

Order state is immutable and irreversible by design (see ADR 0003). Editing a
total would break the audit trail and the "state is a fold of events" guarantee
the whole service depends on.

## Rejected alternatives

- **Mutable order total.** Simpler to query, but destroys auditability.
  Non-starter given the 7-year retention requirement.
- **Refunds as a separate service.** Over-engineered for current volume;
  revisit if refund logic grows independently.
````

---

*Part of the [Human-First Engineering templates](https://github.com/irarainey/human-first-engineering/tree/main/toolkit/templates). Adapt it to your project; do not adopt it unchanged.*
