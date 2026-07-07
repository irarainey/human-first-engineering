# ADR 0003 — No HVE references in the core documents

- **Date:** 2026-07-06 · **Status:** Accepted · **Owner:** @irarainey · **Importance:** `CRITICAL`

## Decision

Hyper-Velocity Engineering (HVE) is **not** referenced in the core documents — `docs/index.md`, `docs/manifesto.md`, and `docs/framework.md`. HVE may be discussed only in the toolkit, and only as a complementary, independent framework (primarily `docs/toolkit/relationship-to-hve.md` and `docs/toolkit/practices.md`).

## Why

- Human-First Engineering must stand on its own philosophy. Framing the core in terms of HVE would make HFE read as subordinate to, or dependent on, HVE — which it is not.
- The toolkit is the right place to explain how the two relate for teams that use both.

## Rejected alternatives

- **Position HFE as "the human half of HVE".** Rejected outright: it inverts the intended relationship and dilutes HFE's standalone message.

## Consequences

- A review step greps the three core files for `HVE` / "hyper-velocity" and must find nothing.
- New content that leans on HVE belongs in the toolkit, phrased as "grounded in HFE's principles, drawing on HVE where useful" — not the reverse.
