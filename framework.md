---
title: Framework
nav_order: 3
---

# The Human-First Engineering Framework

The [manifesto](manifesto.md) is who we are. The framework is how we work.

It is built on five pillars. Each is a small set of behaviours, not a process. The aim is to be light enough to remember and concrete enough to guide real decisions.

## Pillar 1 — Think first

> AI accelerates execution, not understanding.

Understanding the problem is still the engineer's job. AI is most valuable *after* you know what you are trying to do.

### Behaviours

- Frame the problem before prompting.
- Sketch a design before generating code.
- Identify constraints, risks, and success criteria up front.
- Use AI to explore alternatives, not to decide for you.

### Why this matters

This preserves the core engineering skill: thinking clearly about problems. A clear prompt is the by-product of clear thinking, not a substitute for it.

## Pillar 2 — Own the output

> AI assists. Humans are accountable.

You are responsible for every line of code that goes out under your name, regardless of how it was generated. The standard is not new — it applied when frameworks scaffolded your boilerplate and when a Stack Overflow answer became your implementation. AI just raises the volume.

### Behaviours

- Every line of AI-generated code has a named human owner.
- Code reviews focus on reasoning, not syntax.
- AI usage is disclosed where it influences design or non-trivial logic.
- If you cannot explain it, you do not ship it.

### Why this matters

Ownership is what builds judgement — the thing AI cannot learn for you.

## Pillar 3 — Grow skills, not dependencies

> AI should accelerate mastery, not bypass it.

The intuition that makes a great senior engineer is accumulated through wrestling with problems that resist easy answers. Routing around that struggle at scale does not just deskill the engineers we have — it breaks the pipeline that produces the seniors and principals of tomorrow.

### Behaviours

- **Think before you generate.** For non-trivial problems, form your own view of the shape of the solution before prompting — what the constraints are, what success looks like, which approaches you would consider. Use AI to accelerate your reasoning, not to do it for you.
- **Read what the AI produces.** Trace through it. Understand *why* it works, not just *that* it works. If you cannot, read more carefully — or ask a different question — until you can.
- **Debug with AI, not around it.** Use AI as a pairing partner in debugging: ask it to explain, hypothesise, and challenge your thinking. The skill to grow is the reasoning, not the typing.
- **Understand tests as well as you generate them.** Before you ask AI to expand test coverage, know what *should* be tested. A test that passes for the wrong reason is worse than no test at all.
- **Protect junior learning opportunities.** Do not optimise the reasoning out of their work. They need reps in reading, tracing, and explaining — not just in producing output.
- **Hold regular sessions where AI tooling is intentionally set aside.** Not to be purist, but to keep the underlying engineering muscles awake.

### Why this matters

This ensures we don't lose the foundational reps that turn juniors into seniors.

## Pillar 4 — Use AI intelligently

> Using AI well is a skill. Using it carelessly is not the same thing.

Getting consistently good output requires deliberate setup and thoughtful use. This is a learnable, teachable skill — and mastering it is part of the modern craft.

### Behaviours

- **Model selection** — match the model to the task.
  - Small / fast models for iteration, repetitive tasks, and high-volume work.
  - Large / frontier models for complex reasoning, architecture, and nuanced judgement.
  - Code-specialised models for refactoring, tests, and boilerplate.
  - Vision models for diagrams, screenshots, and UI review.
  - Agents for genuinely multi-step workflows — not single tasks.
- **Instruction files** — short, focused, versioned. Encode team standards, conventions, and architectural context. Every project owns one.
- **Reusable skills and patterns** — share prompt patterns the way you share utility functions.
- **Agents and orchestration** — define scope, checkpoints, and review points before you start. The longer an agent runs unsupervised, the more those boundaries matter.
- **Prompting with precision** — vague prompts produce vague output. Treat prompts as drafts: revisable, refinable, worth sharing when they work well.
- **Considerate token use** — provide relevant context, not all context. Treat unnecessary tokens like any other inefficiency.

### Why this matters

This is the new literacy — the modern equivalent of learning your IDE.

## Pillar 5 — Trust AI, but verify everything

> AI is powerful, but not infallible.

Trust is calibrated to the risk of the task, the quality of the context provided, and your ability to verify the output. Low-risk, reversible, well-understood work warrants lighter verification. High-risk work requires human reasoning to lead, with AI in support — never the reverse.

### Behaviours

- Treat AI output as a draft, not truth.
- Validate assumptions, logic, and edge cases — especially the ones the AI did not mention.
- Make the level of trust an explicit decision, and match the verification effort to it.
- "The AI wrote it" is never sufficient justification for skipping a review.

### Categories that always require human-led reasoning

- Security-sensitive code — authentication, authorisation, encryption, input validation.
- Compliance, privacy, or regulatory logic.
- Data deletion, migrations, or any irreversible operation.
- Core architectural decisions with long-term structural consequences.
- Concurrency, auth flows, complex SQL, infrastructure changes, regex on untrusted input — anything stateful or easy to get subtly wrong.

Never share secrets, credentials, or sensitive customer data in prompts. Use approved tools only.

### Why this matters

This is how we stay safe, sane, and high-quality in a world where AI can be confidently wrong.

## The framework in practice

| Situation | Expected behaviour |
| --- | --- |
| Using AI to write code | Form your own view of the shape of the solution first. Then generate, read critically, and explain every significant decision. |
| Reviewing AI-assisted code | Ask the author to explain, not just demonstrate. If they cannot, send it back. |
| Stuck on a problem | Think about the shape of the problem first. Pair with a human or AI to reason through it. Do not skip straight to a generated answer. |
| A junior is struggling | Treat it as an opportunity. Ask questions; do not just give answers. |
| Something ships that nobody understands | Team failure, not individual. Treat it as a learning event. |
| Security, compliance, or irreversible operations | Human reasoning leads. AI supports. No exceptions. |
| Unsure how much to trust AI output | Assess the risk. Match verification effort to the stakes. |
| Starting a new project | Check for an instruction file. If one does not exist, create it. |
| Getting poor output | Interrogate the prompt before re-running. What was missing or ambiguous? |
| Doing a repetitive AI-assisted task | Check the team skill library first. Build and share a pattern if one is missing. |
| Choosing a model | Match capability to the task — complexity, volume, cost, and quality. |
| AI costs creeping up | Treat it like any performance issue. Investigate, identify the waste, fix the pattern. |

## The one-line summary

> AI is the next step in a long history of assistive tools — and our job is to use it to grow engineers, accelerate delivery, and protect quality through thinking first, owning what we ship, growing our skills, using AI intentionally, and verifying everything.

## Next

Use the [toolkit](toolkit/index.md) to introduce and embed this in a team or organisation. It includes the implementation guide, a [practices](toolkit/practices.md) document aligned with Microsoft's Hyper-Velocity Engineering, talking points, a ready-to-present slide deck, and a developer FAQ.
