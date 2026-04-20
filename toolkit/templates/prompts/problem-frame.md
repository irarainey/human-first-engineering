---
title: Problem Frame Prompt
parent: Templates & Prompts
grand_parent: Toolkit
nav_order: 3
---

# Problem Frame — Pillar 1 prompt

**Use at the start of non-trivial work, before generating any code.**

Paste the prompt below into your AI assistant, replacing the bracketed section with your task. The output is a short frame you can paste into a PR description, share with a reviewer, or hand back to the AI as context for the actual implementation.

---

## The prompt

```
I am starting work on the following task. Before any code is generated,
help me frame it clearly. Do not propose an implementation yet.

<TASK DESCRIPTION>

Produce:

1. **Problem** — one paragraph stating what is actually being solved and for whom. Ignore the solution space for now.
2. **Constraints** — what this solution must respect: existing code, dependencies, performance, security, team conventions, anything else specific to this task.
3. **Success criteria** — how we will know the work is done. Prefer observable outcomes over "it compiles".
4. **Candidate approaches** — two or three, with one-line trade-offs. Do not pick one.
5. **Open questions** — what you do not have enough context to answer. Flag assumptions you are making.

Be concise. One or two sentences per point. If the task is genuinely trivial, say so and stop.
```

---

## Why this works

- **You think before you prompt.** Writing the task description forces you to articulate what you actually need.
- **The AI reasons with you, not for you.** It produces a frame, not an answer. The decision stays with you.
- **You get a sharable artifact.** The output is reviewable, storable, and improves the PR description for free.
- **Surfaces missing context early.** Open questions caught here save rework later.

## When not to use this

- Repetitive, well-understood work — boilerplate, renames, trivial refactors.
- Pure exploration — when the point is to see what the AI produces, not to ship it.
- When you already have a clear frame in your head and just need to write it down.

---

*Part of the [Human-First Engineering templates](https://github.com/irarainey/human-first-engineering/tree/main/toolkit/templates). Operationalises [Pillar 1 — Think first](https://humanfirstengineering.dev/framework#pillar-1--think-first).*
