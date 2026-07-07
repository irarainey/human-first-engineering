# ARCHITECTURE.md

An architectural summary. It captures the *shape* of the system — structure, boundaries, data flow, and the reasoning behind them — so that understanding does not live only in senior engineers' heads or scroll away in an AI chat.

Save it as `ARCHITECTURE.md` at the root of your repository. It is linked from `CONTEXT.md` and read when a task touches architecture — not held in context by default. Keep it a lean **overview** — shape, boundaries, and data-flow rules — plus a **component map** that links to deeper per-area docs under `docs/architecture/`, opened only when relevant. If this file starts growing without bound, push detail out and keep the overview lean. See [Context Engineering](../context-engineering.md) for the reasoning behind this file.

The block below is a realistic example. Replace it with your project's specifics.

````markdown
# Architecture — Orders Service

_Last reviewed: 2026-06-30 · Owner: @ade_

## Shape at a glance

Event-sourced service. Order state is never stored directly; it is derived by
folding an append-only event log. A read model is projected from the log for
fast queries.

```text
Checkout ──▶ [Command API] ──▶ validates ──▶ appends event ──▶ [Event Log]
                                                                    │
                                          projects ◀───────────────┘
                                              ▼
                                        [Read Model] ──▶ Query API ──▶ consumers
```

## Boundaries

- **Command API** — the only writer. Validates commands, emits events. No reads
  from consumers hit this path.
- **Query API** — read-only, served entirely from the read model. Never touches
  the event log directly.
- **Event Log** — append-only, immutable. The source of truth.
- **Read Model** — a projection. Disposable and rebuildable from the log.

`IMPORTANT` — The command/query split is deliberate (CQRS). Consumers must not
read from the write side, and nothing may mutate the read model except the
projector. Breaking this collapses the guarantees the design exists to provide.

## Data flow rules

- Money is stored as integer minor units (pence). No floats, anywhere.
- Every state change is an event; there are no in-place updates to order state.
- The read model can be dropped and rebuilt at any time. If a query is wrong,
  suspect the projector, not the log.

## Component map

One line each; open a linked doc only when the task touches that area.

| Component | Responsibility | Detail |
| --- | --- | --- |
| `api/command` | Command handlers and validation — the only writer | — |
| `domain/` | Pure order logic and rules; no I/O | `docs/architecture/domain.md` |
| `events/` | Event definitions and the append-only store | `docs/architecture/event-log.md` |
| `projections/` | Read-model projectors | — |
| `api/query` | Read endpoints, served from the read model | — |

## Why it is built this way

Auditability and irreversibility are hard regulatory requirements (see
DECISIONS.md, D-003). Event sourcing gives us a complete, replayable history
for free. The cost — eventual consistency on the read side — is acceptable
because no consumer requires read-after-write on order state.
````

---

*Part of the [Human-First Engineering templates](https://github.com/irarainey/human-first-engineering/tree/main/docs/toolkit/templates). Adapt it to your project; do not adopt it unchanged.*
