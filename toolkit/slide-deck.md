---
title: Slide Deck
parent: Toolkit
nav_order: 3
---

# Slide Deck

A ready-to-present deck for introducing Human-First Engineering. Designed for a 30–45 minute team session.

The deck below is plain Markdown, with `---` separating slides. It renders as slides in [Marp](https://marp.app), reveal.js, and most other Markdown-based slide tools. It also reads cleanly as a document if you just want speaker notes.

To present with Marp:

```sh
npx @marp-team/marp-cli@latest --preview slide-deck.md
```

To export to PDF or PPTX:

```sh
npx @marp-team/marp-cli@latest slide-deck.md -o human-first-engineering.pdf
npx @marp-team/marp-cli@latest slide-deck.md -o human-first-engineering.pptx
```

## 🎬 The deck

```markdown
---
marp: true
theme: default
paginate: true
---

# Human-First Engineering

Growing engineers in the age of AI

*Tools evolve. Craft endures.*

---

## What happens to software engineering

## when we can generate code

## faster than we can understand it?

---

## The shift

- For most of our history, the bottleneck was *writing* code.
- Now the bottleneck is *understanding* it.
- The cost of generating solutions has collapsed.
- The cost of validating, reasoning, and trusting them has not.

---

## This is not a new ladder

Every generation of tooling has automated something:

- Autocomplete
- IntelliSense
- Refactoring tools
- Static analysis
- Compilers

AI is a bigger step on the same ladder — not a different one.

---

## But the risk *is* new

Previous tools automated the **tedious**.

This one can accidentally automate the **educational**.

---

## The real risk is not replacement

It is **deskilling**.

- Junior engineers may skip the experiences that build judgement.
- Senior engineers may drift into reviewing output rather than shaping solutions.
- The pipeline from junior to senior to principal quietly erodes.

---

## The central idea

# AI amplifies engineers.

# It does not replace engineering.

---

## Velocity without understanding

# is not progress.

# It is debt.

---

## The Manifesto

We use AI to **grow engineers**, not replace them.

We remember that **writing code has never been the whole job**.

We **think before we generate**.

We use AI **with skill, not by reflex**.

We **own what we ship**.

We **trust AI, but we verify everything**.

We **grow our skills**, not our dependencies.

We **move fast without breaking clarity**.

---

## The Framework

Five pillars. Light enough to remember. Concrete enough to use.

1. Think first
2. Own the output
3. Grow skills, not dependencies
4. Use AI intelligently
5. Trust AI, but verify everything

---

## Pillar 1 — Think first

*AI accelerates execution, not understanding.*

- Frame the problem before prompting.
- Sketch a design before generating code.
- Use AI to explore alternatives, not to decide for you.

A clear prompt is the by-product of clear thinking.

---

## Pillar 2 — Own the output

*AI assists. Humans are accountable.*

- Every line of AI-generated code has a named human owner.
- Code reviews focus on reasoning, not syntax.
- **If you cannot explain it, you do not ship it.**

---

## Pillar 3 — Grow skills, not dependencies

*AI should accelerate mastery, not bypass it.*

- Read what the AI produces. Understand *why*, not just *that*.
- Debug *with* AI, not around it — use it as a pairing partner.
- Protect junior learning opportunities.

---

## Pillar 4 — Use AI intelligently

*Using AI well is a skill. Using it carelessly is not the same thing.*

- **Match the model to the task** — small, frontier, code-specialised, vision, or agent.
- **Encode team context in instruction files** and share prompt patterns like utility functions.
- **Prompt with precision** — relevant context, not all context.

---

## Pillar 5 — Trust AI, but verify everything

*Calibrate trust to the risk of the task.*

Always human-led:

- Security and authorisation logic
- Compliance, privacy, regulatory code
- Data deletion and irreversible operations
- Core architectural decisions

*"The AI wrote it"* is never sufficient justification.

---

## Our commitment to early-career engineers

You are owed:

- The *why* behind the *what*.
- Safe spaces to be wrong and to not know.
- Honest feedback that grows you, not protects you.
- The recognition that struggle is not failure — it is the work.

---

## Embed it in what we already do

| Ritual | Add the prompt |
| --- | --- |
| Design reviews | *Did we think before we generated?* |
| Code reviews | *Can the author explain every decision?* |
| Onboarding | *Where is our instruction file?* |
| Retros | *Are we growing skills or dependencies?* |
| Incidents | *Did anyone ship something they did not understand?* |

---

## What changes tomorrow?

In small groups, answer:

1. Where are we strong?
2. Where are we weak?
3. What is one thing we will change next week?

---

## The one-line summary

> Think first. Own what you ship. Grow skills, not dependencies. Use AI intelligently. Verify everything.

---

## Thank you

Read the manifesto, framework, and toolkit:

- [Manifesto](../manifesto.md)
- [Framework](../framework.md)
- [Toolkit](index.md)

*Tools evolve. Craft endures.*
```
