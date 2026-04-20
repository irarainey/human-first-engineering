---
title: Risk Assessment Prompt
parent: Templates & Prompts
grand_parent: Toolkit
nav_order: 5
---

# Risk Assessment — Pillar 5 prompt

**Use before trusting AI-generated code to production.** Categorises a change as low, medium, or high risk and recommends a verification level.

Copy the prompt below into your AI assistant, replacing `<DIFF, DESCRIPTION, OR FILE>` with the change you are considering.

```text
Assess the risk of the following change. Be honest; err toward caution.

<DIFF, DESCRIPTION, OR FILE>

Produce:

1. Risk category — one of:
   - LOW — reversible, well-understood, narrow blast radius, easy to verify.
   - MEDIUM — non-trivial logic, touches user-facing behaviour, or integrates with systems you cannot fully test locally.
   - HIGH — falls in any of these: security-sensitive code, authorisation, encryption, input validation, compliance or regulatory logic, data deletion, migrations, irreversible operations, core architectural decisions, concurrency, auth flows, complex SQL, infrastructure changes, or regex on untrusted input.
2. Why — one paragraph stating the dominant risk factors. Name them.
3. What could go subtly wrong — two or three failure modes that are plausible and easy to miss. Prefer specific over generic.
4. Recommended verification — the minimum bar before shipping:
   - LOW: self-review, existing tests pass.
   - MEDIUM: peer review, targeted new tests, staging check.
   - HIGH: human-led review by someone with domain expertise, expanded test coverage, explicit sign-off on the irreversible or sensitive parts, rollback plan.
5. What to verify manually — a short checklist of specific things a human should check before approving. Avoid generic items.

If you cannot assess the risk from what was provided, say what additional context you would need.
```

---

## How to use the output

The output is an input to *your* judgement, not a substitute for it. "The AI categorised this as LOW" is never sufficient justification for skipping a review. The point is to make verification effort match the stakes, and to make the level of trust an explicit decision instead of an implicit one.

If the assessment surprises you — you thought LOW, it came back HIGH — that is a useful signal. Read the reasoning before arguing.

## When not to use this

- For changes where the risk category is obvious. Trivial PRs and local-only experiments do not need this.
- When the stakes are catastrophic and irreversible. Those always require a human expert's judgement; use this only as an early filter.

---

*Part of the [Human-First Engineering templates](https://github.com/irarainey/human-first-engineering/tree/main/toolkit/templates). Operationalises [Pillar 5 — Trust AI, but verify everything](https://humanfirstengineering.dev/framework#pillar-5--trust-ai-but-verify-everything).*
---
title: Risk Assessment Prompt
parent: Templates & Prompts
grand_parent: Toolkit
nav_order: 5
---

# Risk Assessment — Pillar 5 prompt

**Use before trusting AI-generated code to production.** Categorises a change as low, medium, or high risk and recommends a verification level.

Paste the prompt below into your AI assistant along with the diff, description, or file you are considering.

---

## The prompt

```
Assess the risk of the following change. Be honest; err toward caution.

<DIFF, DESCRIPTION, OR FILE>

Produce:

1. **Risk category** — one of:
   - **LOW** — reversible, well-understood, narrow blast radius, easy to verify.
   - **MEDIUM** — non-trivial logic, touches user-facing behaviour, or integrates
     with systems you cannot fully test locally.
   - **HIGH** — falls in any of these: security-sensitive code, authorisation,
     encryption, input validation, compliance or regulatory logic, data
     deletion, migrations, irreversible operations, core architectural
     decisions, concurrency, auth flows, complex SQL, infrastructure changes,
     or regex on untrusted input.
2. **Why** — one paragraph stating the dominant risk factors. Name them.
3. **What could go subtly wrong** — two or three failure modes that are plausible
   and easy to miss. Prefer specific over generic.
4. **Recommended verification** — the minimum bar before shipping:
   - LOW: self-review, existing tests pass.
   - MEDIUM: peer review, targeted new tests, staging check.
   - HIGH: human-led review by someone with domain expertise, expanded test
     coverage, explicit sign-off on the irreversible or sensitive parts,
     rollback plan.
5. **What to verify manually** — a short checklist of specific things a human
   should check before approving. Avoid generic items.

If you cannot assess the risk from what was provided, say what additional
context you would need.
```

---

## How to use the output

The output is an input to *your* judgement, not a substitute for it. "The AI categorised this as LOW" is never sufficient justification for skipping a review. The point is to make verification effort match the stakes, and to make the level of trust an explicit decision instead of an implicit one.

If the assessment surprises you — you thought LOW, it came back HIGH — that is a useful signal. Read the reasoning before arguing.

## When not to use this

- For changes where the risk category is obvious. Trivial PRs and local-only experiments do not need this.
- When the stakes are catastrophic and irreversible. Those always require a human expert's judgement; use this only as an early filter.

---

*Part of the [Human-First Engineering templates](https://github.com/irarainey/human-first-engineering/tree/main/toolkit/templates). Operationalises [Pillar 5 — Trust AI, but verify everything](https://humanfirstengineering.dev/framework#pillar-5--trust-ai-but-verify-everything).*
