---
title: Framework
nav_order: 3
---

# The Human-First Engineering Framework

The [manifesto](manifesto.md) is what we believe. The framework is how we work.

It is built on five pillars. Each is a small set of behaviours, not a process. The aim is light enough to remember, concrete enough to guide real decisions.

Every pillar is designed to do two things at once: produce better engineering today, and preserve the conditions that grow engineers tomorrow. That second purpose is why this framework exists. Without it, the first is just another AI-productivity checklist.

## 🧠 Pillar 1 — Think first

> AI accelerates execution, not understanding.

Understanding the problem is still the engineer's job. AI is most valuable *after* you know what you are trying to do.

### Behaviours

- Frame the problem, constraints, and success criteria before prompting.
- Sketch a design before generating code.
- Use AI to explore alternatives, not to decide for you.

### Why this matters

This preserves the core engineering skill: thinking clearly about problems. A clear prompt is the by-product of clear thinking, not a substitute for it.

## 🪪 Pillar 2 — Own the output

> AI assists. Humans are accountable.

Every line of code an engineer ships is theirs, regardless of how it was generated. The standard is not new — it applied when frameworks scaffolded boilerplate and when a Stack Overflow answer became an implementation. AI just raises the volume.

### Behaviours

- Every line of AI-generated code has a named human owner.
- If you cannot explain it, you do not ship it.
- Code reviews focus on reasoning, not syntax.

### Why this matters

Ownership is what builds judgement — the thing AI cannot learn for you.

## 📈 Pillar 3 — Grow through AI, not around it

> AI should accelerate mastery, not bypass it.

The intuition that makes a great senior engineer is accumulated through wrestling with problems that resist easy answers. Routing around that struggle at scale does not just deskill the engineers we have — it breaks the pipeline that produces the seniors and principals of tomorrow.

### Behaviours

- **Read what the AI produces.** Trace through it. Understand *why* it works, not just *that* it works. If you cannot, read more carefully — or ask a different question — until you can.
- **Debug with AI, not around it.** Use AI as a pairing partner: ask it to explain, hypothesise, and challenge your thinking. The skill to grow is the reasoning, not the typing.
- **Protect junior learning opportunities.** Do not optimise the reasoning out of their work. They need reps in reading, tracing, and explaining — not just in producing output.

### Why this matters

This ensures we don't lose the foundational reps that turn juniors into seniors.

## 🎯 Pillar 4 — Use AI intelligently

> Using AI well is a skill. Using it carelessly is not the same thing.

Getting consistently good output requires deliberate setup and thoughtful use. This is a learnable, teachable skill — and mastering it is part of the modern craft.

### Behaviours

- **Match the model to the task.** Small and fast for iteration and high-volume work; frontier models for complex reasoning and architecture; code-specialised for refactoring and tests; vision for diagrams and UI; agents only for genuinely multi-step workflows.
- **Encode team context in instruction files.** Short, focused, versioned. Every project owns one. Share prompt patterns the way you share utility functions.
- **Prompt with precision.** Vague prompts produce vague output. Provide relevant context, not all context. Treat prompts as drafts: revisable, refinable, worth sharing when they work well.

### Why this matters

This is the new literacy — the modern equivalent of learning your IDE.

## 🔍 Pillar 5 — Trust AI, but verify everything

> AI is powerful, but not infallible.

Trust is calibrated to the risk of the task, the quality of the context provided, and your ability to verify the output. Low-risk, reversible, well-understood work warrants lighter verification. High-risk work requires human reasoning to lead, with AI in support — never the reverse.

### Behaviours

- Treat AI output as a draft, not truth.
- Match verification effort to risk. Make the level of trust an explicit decision.
- Validate assumptions, logic, and edge cases — especially the ones the AI did not mention. "The AI wrote it" is never sufficient justification for skipping a review.

### Categories that always require human-led reasoning

- Security-sensitive code — authentication, authorisation, encryption, input validation.
- Compliance, privacy, or regulatory logic.
- Data deletion, migrations, or any irreversible operation.
- Core architectural decisions with long-term structural consequences.
- Concurrency, auth flows, complex SQL, infrastructure changes, regex on untrusted input — anything stateful or easy to get subtly wrong.

Never share secrets, credentials, or sensitive customer data in prompts. Use approved tools only.

### Why this matters

This is how we stay safe, sane, and high-quality in a world where AI can be confidently wrong.

## 📋 The framework in practice

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

## ✨ The one-line summary

> Think first. Own what you ship. Grow through AI, not around it. Use AI intelligently. Verify everything.

## ➡️ Next

Use the [toolkit](toolkit/index.md) to introduce and embed this in a team or organisation.
