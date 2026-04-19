---
title: Practices
parent: Toolkit
nav_order: 2
---

# Practices — How We Use AI Tools

The [manifesto](../manifesto.md) and [framework](../framework.md) tell us *what* we believe and *how* we work. This document goes one level deeper: the concrete patterns engineers use day to day to get high-quality output from AI tools.

It is a complement to the framework's [Pillar 4 — Use AI intelligently](../framework.md#pillar-4--use-ai-intelligently), not a replacement for it.

## Relationship to Hyper-Velocity Engineering

**Hyper-Velocity Engineering (HVE)** is a term [coined by Mike Lanzetta](https://www.linkedin.com/pulse/what-hypervelocity-engineering-mike-lanzetta-ckfwc/) of Microsoft's Industry Solutions Engineering (ISE) group. It describes a high-performance, AI-accelerated approach to software that lets expert, multi-disciplinary teams deliver production-quality outcomes at high speed — amplifying productivity and unlocking high-ROI innovation.

Two framings from the HVE article are worth carrying forward verbatim:

- **Velocity is a vector, not a speed.** It combines pace with direction. The goal is quality code with solid engineering, produced more quickly — not more code, faster.
- **HVE is not vibe coding.** *"Move faster and break more things"* is not the goal. The discipline is how the team executes together, with AI support, against the standards they already hold themselves to.

Microsoft ISE has published real-world patterns for applying HVE — for example, [Accelerating AI Development with GitHub Copilot](https://devblogs.microsoft.com/ise/accelerating-ai-development-with-github-copilot-real-world-use-cases/), which covers docs-as-tests, diagram generation, data visualisation, and agent-driven workflows.

Further reading on HVE:

- [What is Hypervelocity Engineering? — Mike Lanzetta](https://www.linkedin.com/pulse/what-hypervelocity-engineering-mike-lanzetta-ckfwc/)
- [Accelerating AI Development with GitHub Copilot — Microsoft ISE](https://devblogs.microsoft.com/ise/accelerating-ai-development-with-github-copilot-real-world-use-cases/)

Human-First Engineering and HVE are complementary:

- **HVE answers**: how fast can expert, multi-disciplinary teams go when AI is used deliberately?
- **HFE answers**: how do we stay expert — and keep producing expert engineers — while we do it?

HVE's own findings make the case plainly: the biggest gains happen when AI is used by deep experts, and the same tools that make experts twice as fast can make non-experts twice as slow. HFE is how we grow and protect that expertise so HVE is sustainable.

The practices below lean on HVE's patterns and fit inside HFE's principles.

## Where AI speeds you up

Based on both broad experience and the [HVE use cases published by Microsoft ISE](https://devblogs.microsoft.com/ise/accelerating-ai-development-with-github-copilot-real-world-use-cases/), AI tends to accelerate work that is:

- **Tedious** — repetitive formatting, boilerplate, lookup-heavy code.
- **Syntax-heavy** — data visualisation, config files, regex, infrastructure templates.
- **Information-dense** — summarising large codebases, comparing options, condensing documents.
- **Greenfield** — generating new code with few existing constraints.
- **Doc-shaped** — READMEs, ADRs, diagrams, demo scripts, test scaffolding.

## Where AI slows you down

The same sources consistently flag work where naive AI use *loses* time:

- **Brownfield changes** in large, complex codebases with strong existing conventions.
- **Core modifications** that require knowing why the code is the way it is.
- **Elegant changes** that preserve design patterns rather than duplicate logic.
- **Unfamiliar domains** where you cannot tell good output from subtly wrong output.

Rule of thumb: if you cannot review the output critically, you are not the right person to be generating it with AI yet. Pair with someone who can, or read and learn the codebase until you can review it on your own.

## High-leverage patterns

These are patterns worth adopting team-wide. Each has a clear shape, a clear boundary, and a clear human-in-the-loop checkpoint.

### Docs as first-class, testable artefacts

Treat documentation the way you treat code: written, reviewed, and *tested*.

- Draft the doc (README, how-to, onboarding guide) with AI assistance from a clear prompt.
- Hand the finished doc to an AI agent and ask it to follow the steps. Where it gets stuck or fills in details from thin air, your doc has a gap.
- Fix the gap in the doc, not just in the conversation.
- Ask the agent to ask clarifying questions rather than guessing. This surfaces ambiguity instead of hiding it.

Result: documentation that stays accurate because it is exercised, not just written.

### Diagrams from code

Architecture, class, and sequence diagrams are time-consuming by hand and often wrong by the time they are checked in. AI is good at drafting them — and bad at getting the details right on the first pass.

- Give the model an existing diagram (even a flawed one from `pyreverse`, `mermaid`, etc.) as a reference.
- Be explicit about the format — Mermaid, PlantUML, etc.
- Expect multiple iterations. Diagrams are where AI confidently misses relationships.
- Review exhaustively. A diagram that *looks* right but mis-states relationships is worse than no diagram at all.

### Data visualisation and exploration

This is one of the highest-leverage uses of AI. Plotting code is syntax-heavy, library-fragmented, and well represented in training data.

- Be explicit about the library (`matplotlib`, `seaborn`, `plotly`) and the shape of the data.
- Iterate the prompt incrementally — add one requirement at a time (sort order, colours, axis formatting, annotations) rather than specifying everything up front.
- Keep exploration code separate from production code. The standards are different.

### Agent workflows with checkpoints

Agents are for genuinely multi-step work. Use them when the steps benefit from orchestration and when you can define clear scope.

Before you start, decide:

- **Scope** — what the agent is and is not allowed to change.
- **Checkpoints** — where the agent must stop and ask a human.
- **Review points** — what you will read and approve before the next step runs.
- **Clarification policy** — always prefer "ask me if you need more details" over silent assumptions.

The longer an agent runs unsupervised, the more rigorously those boundaries matter.

### Prompting as an iterative draft

Treat the prompt as a draft worth refining:

- First pass: describe the problem, the audience, the constraints, and the format.
- Review the output. What was missing or wrong?
- Refine the prompt, not just the output. A better prompt is reusable; a hand-fixed output is not.
- When a prompt produces consistently good results, save it. A shared prompt library is as valuable as a shared utility library.

### Context is leverage

Poor output is almost always a context problem. Before re-running a prompt, check:

- Did you reference the right files, modules, or examples?
- Did you provide an existing pattern to match?
- Did you tell the model what *not* to do (e.g. do not invent APIs, do not duplicate existing logic)?
- Are you using the right mode (ask vs. agent, with vs. without code context)?

Relevant context is leverage. All context is noise. Provide the first, not the second.

### Codify team standards into AI guidance

Do not rely on engineers remembering your conventions during every prompt. Encode them where the AI will see them.

- Capture cross-cutting concerns — observability, error handling, logging, security defaults, code contracts — in instruction files, rules, or project-level prompts.
- Update the guidance whenever a recurring review comment appears. If a reviewer has said the same thing twice, it belongs in the AI's context, not in another PR comment.
- Treat the guidance itself as code. Review it. Version it. Own it.

The payoff: code that is secure, robust, and consistent *by default* — without engineers having to re-argue the standard every time.

### Write for AI agents as well as humans

AI agents tend to rewrite entire files, not surgical sections. Structure your code with that in mind:

- **Small, atomic files.** Reduces code churn, merge complexity, and token usage when an agent edits them.
- **Clear module boundaries.** Easier for an agent — and a human reviewer — to reason about a single unit.
- **Explicit interfaces.** Typed signatures, docstrings, and examples give the AI a surface to program against, rather than inferring it from implementation detail.

These were good engineering practices before AI. AI makes the payoff larger.

### Pairing as a default instinct — across the whole team

HVE is explicit: AI pairing is not just for coders. Every discipline on a product team can have an AI "pair".

- **Engineers** — design, implementation, review, and refactor.
- **TPMs / PMs** — sharpening stories, surfacing risks, rehearsing stakeholder conversations.
- **Designers** — iterating on mockups, discussing colour theory, drafting storyboards.
- **Security SMEs** — threat modelling, attack-surface analysis, drafting guidance that flows back into the AI's rules.
- **Data scientists** — structured experimental code, evaluation logic, unit tests for throwaway notebooks.

This has a direct HFE implication: pairing with AI is not a substitute for pairing with humans. The point is that *pairing itself* becomes the default — sometimes with another person, sometimes with an AI, often with both.

### Model selection

Match the model to the task:

| Task shape | Recommended model class |
| --- | --- |
| Quick iteration, high volume, repetitive work | Small / fast general-purpose |
| Complex reasoning, architecture, nuanced trade-offs | Frontier / reasoning-focused |
| Refactoring, test generation, boilerplate | Code-specialised |
| Diagrams, screenshots, UI review, whiteboard photos | Vision-capable |
| Multi-step orchestration, research | Agent with a frontier model underneath |

Using a frontier model for a trivial lookup wastes money. Using a small model for architectural reasoning wastes time and produces worse output. Both are mismatches.

## Anti-patterns to avoid

These are the patterns that produce the "2x slower" outcome reported in the HVE use cases:

- **Prompting without reading the output.** The fastest route to shipped code you do not understand.
- **Using an agent for single-step tasks.** More overhead than value.
- **Adding features to a codebase you have not read.** Expect duplicated logic, broken conventions, and 400 lines where 200 would do.
- **Over-stuffing context.** Bloated inputs degrade output quality as well as cost.
- **Skipping verification for "simple" changes.** Simple is where confident-but-wrong output hides best.
- **Using AI to bypass the learning, rather than to accelerate it.** The framework's [Pillar 3](../framework.md#pillar-3--grow-skills-not-dependencies) exists precisely for this.

## Team artefacts worth maintaining

A small number of shared artefacts give an outsized return. Every team running at HVE speed should have:

- **An instruction / context file** per project — conventions, architectural context, and "how to work with this codebase".
- **A prompt library** — the prompts that have proven to produce good results, with notes on what they are for.
- **Model and mode guidance** — which models are approved, which modes (ask / agent) to prefer for which tasks.
- **A data boundary policy** — what must never go into a prompt (secrets, credentials, regulated data).
- **A named owner** for each of the above.

Keep them short. Review them regularly. Treat them as first-class engineering artefacts.

## Getting started

Adapted from HVE's own four-step starter, with HFE's human-growth lens added:

1. **Identify your team's highest-friction activities.** Where are you losing time to tedium, lookup, or repetition? Those are your first AI leverage points.
2. **Create shared engineering standards that both humans and AI can follow.** Instruction files, prompt libraries, rules. Treat them as first-class artefacts.
3. **Encourage cross-functional pairing with AI assistants.** Not just engineers — TPMs, designers, security, data science.
4. **Measure velocity, quality, *and* engineer growth.** Not just story points closed, but defect rates, incident frequency, review depth, and — the HFE addition — the growth of the engineers doing the work.

## Further reading

- [Hyper-Velocity Engineering — Mike Lanzetta](https://www.linkedin.com/pulse/what-hypervelocity-engineering-mike-lanzetta-ckfwc/)
- [Accelerating AI Development with GitHub Copilot — Microsoft ISE](https://devblogs.microsoft.com/ise/accelerating-ai-development-with-github-copilot-real-world-use-cases/)
- [The Framework — Pillar 4](../framework.md#pillar-4--use-ai-intelligently)
- [Developer FAQ](developer-faq.md)
