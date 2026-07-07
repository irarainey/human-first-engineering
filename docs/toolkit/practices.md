# Practices — How We Use AI Tools

The [manifesto](../manifesto.md) and [framework](../framework.md) tell us *what* we believe and *how* we work. This document goes one level deeper: the concrete patterns engineers use day to day to get high-quality output from AI tools.

It is a complement to the framework's [Pillar 4 — Use AI intelligently](../framework.md#pillar-4-use-ai-intelligently), not a replacement for it.

These patterns are how teams move fast with AI. The framework's job is to make sure that moving fast does not cost us the engineers who come next. Keep that in view as you read: the practices are the means, not the point.

## 🤝 Relationship to Hyper-Velocity Engineering

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

HVE's own findings make the case plainly: the biggest gains happen when AI is used by people with enough domain expertise to steer and verify it; without that expertise, AI can slow a team down. HFE is how we grow and protect that expertise so HVE is sustainable.

The practices below are grounded in HFE's principles and draw on HVE's published patterns where useful.

## ⚡ Where AI speeds you up

Based on both broad experience and the [HVE use cases published by Microsoft ISE](https://devblogs.microsoft.com/ise/accelerating-ai-development-with-github-copilot-real-world-use-cases/), AI tends to accelerate work that is:

- **Tedious** — repetitive formatting, boilerplate, lookup-heavy code.
- **Syntax-heavy** — data visualisation, config files, regex, infrastructure templates.
- **Information-dense** — summarising large codebases, comparing options, condensing documents.
- **Greenfield** — generating new code with few existing constraints.
- **Doc-shaped** — READMEs, ADRs, diagrams, demo scripts, test scaffolding.

## 🐢 Where AI slows you down

The same sources consistently flag work where naive AI use *loses* time:

- **Brownfield changes** in large, complex codebases with strong existing conventions.
- **Core modifications** that require knowing why the code is the way it is.
- **Elegant changes** that preserve design patterns rather than duplicate logic.
- **Unfamiliar domains** where you cannot tell good output from subtly wrong output.

Rule of thumb: if you cannot review the output critically, you are not the right person to be generating it with AI yet. Pair with someone who can, or read and learn the codebase until you can review it on your own.

## 🧭 Context is a first-class engineering asset

A common failure mode in teams using AI heavily is not weak prompts but thin *context*. AI is only as good as the knowledge it is working from, and that knowledge is an engineering asset in its own right: something the team creates deliberately, curates, versions, and owns.

This is not prompt engineering: prompts are transient, context is durable. It is the knowledge that should exist so any engineer — or any AI — can pick up the work and reason about it correctly. That is the question that compounds. See [Context Engineering](context-engineering.md) for the full treatment.

### What counts as context

- **Repository instructions** — conventions, architecture, and "how to work with this codebase", written where the AI reads them by default.
- **Architectural decisions** — the *why* behind significant choices, captured so they outlive the session and the person who made them.
- **Reusable patterns and skills** — the prompts, agents, and workflows that reliably produce good output, shared like utility functions.
- **Business and domain context** — the constraints and intent that are obvious to the team and invisible to a fresh model.

### Treat context like code

- **Capture it intentionally.** If a decision, constraint, or convention had to be explained to the AI once, it will have to be explained again — write it down where it will be reused.
- **Keep it close to the work.** Context that lives only in someone's head, or in a chat that scrolls away, is context the team has already lost. Put it in the repository.
- **Version it, review it, own it.** Instruction files and decision records are artefacts. They drift, they rot, and they deserve the same care as the code they describe.
- **Make it serve humans first.** Good context helps the next engineer reason about the system as much as it helps the AI. If it only makes sense to a model, it is not good context.
- **Keep the default context small.** Make one lightweight file the always-on core and let it point to deeper detail loaded only when relevant, rather than stuffing everything into the window. More context is not better context. See [Context Engineering](context-engineering.md).

The payoff is compounding: a junior joining the team inherits the reasoning, not just the code, and the AI reinforces that reasoning instead of guessing around it. When context is thin, both humans and AI fall back to reconstructing intent from scratch, and the understanding that makes an engineer senior never accumulates anywhere durable.

For long-running efforts — where sessions are compacted, tools change, and reasoning is lost over time — see [Context Engineering](context-engineering.md) for preservation patterns, a lightweight file format, and example artefacts.

## 🔎 Reviewing AI-generated work is its own skill

Reviewing code you did not write, at the volume and speed AI produces it, is a distinct competency — related to traditional code review but not the same thing. Traditional review assumes a human author who reasoned their way to the change and can explain it. AI-generated work has no such author in the room, arrives faster, and is often plausible on the surface while subtly wrong underneath.

That changes the habits the reviewer needs.

- **Review the reasoning, not just the diff.** Ask *why* the code is shaped this way. If the author cannot answer, the fact that it was AI-generated is not a defence — the PR goes back.
- **Be most careful where it looks most convincing.** Confident, well-structured, well-commented output is where subtle errors hide best. Fluency is not correctness.
- **Check the things the AI did not mention.** Missing edge cases, silent assumptions, and unhandled failure modes rarely announce themselves. Interrogate them deliberately.
- **Watch for plausible-but-wrong structure.** Duplicated logic, invented APIs, ignored existing patterns, and 400 lines where 200 would do are classic AI signatures in an unfamiliar codebase.
- **Calibrate depth to risk and volume.** You cannot review a large AI-generated change the way you skim a two-line fix. Match the effort to the stakes, and slow the flow down when the risk is high.

A quick rubric for the author to answer — and the reviewer to probe — on any non-trivial AI-assisted change:

- **What** changed, and **why this approach** over the alternatives?
- **What was rejected**, and why?
- **What failure and edge cases** were considered?
- **What was verified**, and how?

If the author cannot answer these, the change is not ready — regardless of who or what wrote it.

This skill improves with deliberate practice, and it is one of the highest-value things an engineer can be good at in an AI-native team. Spotting the subtle mistake AI made is proof you understood the system well enough to catch it.

**How to build the skill**

Knowing it matters is not the same as knowing how to get better. These are concrete habits that turn review into deliberate practice:

- **Predict before you read.** Before opening the diff, say what a correct solution *should* do and roughly how. Then read the AI's version and compare. The gaps between your mental model and its output are exactly where bugs and better designs live.
- **Reconstruct the reasoning yourself.** Do not accept the AI's explanation at face value — work out *why* each part is there on your own, then check whether your account matches. If you cannot reconstruct it, you do not understand it well enough to approve it.
- **Read the code it touched, not just the code it wrote.** The diff shows what changed; the bugs often live in what it assumed about the surrounding system. Trace at least one full path end-to-end through the change.
- **Run a standing checklist of AI blind spots.** Error handling, edge and boundary cases, null/empty inputs, concurrency, resource cleanup, security and input validation, backward compatibility, and existing patterns it ignored. These rarely announce themselves, so ask about them every time.
- **Make it prove itself with a test.** When you suspect a missing edge case, write the failing test rather than arguing about it. A test turns a hunch into evidence and documents the gap.
- **Diff against your own approach.** Ask how *you* would have solved it. If the AI's shape differs, decide whether it is genuinely better or just different — invented APIs, duplicated logic, and 400 lines where 200 would do are classic tells.
- **Interrogate, then verify independently.** Ask the AI to explain its own change and list what it did *not* handle. Treat the answer as a lead to check, never as proof.
- **Use the tool to explain small sections back to you.** When a piece of the change is unfamiliar, ask the AI to explain that specific function, line, or API in isolation — then confirm the explanation against the code and the docs yourself. This is a fast way to close a knowledge gap, but the explanation is a starting point for understanding, not evidence of correctness: the same model that wrote a subtle bug will happily explain it as intentional. Keep the sections small, and let it teach you the *what* while you stay responsible for judging the *whether*.
- **Keep a personal catalogue of what AI gets wrong.** Note the subtle mistakes you catch. Patterns repeat across models and projects, and your list becomes a fast, personal review checklist — and good raw material for your team's instruction files.
- **Practise on low-stakes changes.** Review generated code deliberately even when the change is small and safe, so the habits are automatic when the stakes are high.

## 🚀 High-leverage patterns

These are patterns worth adopting team-wide. Each has a clear shape, a clear boundary, and a clear human-in-the-loop checkpoint.

### Docs as first-class, testable artefacts

Treat documentation the way you treat code: written, reviewed, and *tested*.

- Draft the doc (README, how-to, onboarding guide) with AI assistance from a clear prompt.
- Hand the finished doc to an AI agent and ask it to work through the steps and flag missing prerequisites, assumptions, or gaps — rather than expecting it to execute the whole thing flawlessly. Where it gets stuck or fills in details from thin air, your doc has a gap.
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

Poor output is often a context problem — one of the first things to check before re-running a prompt:

- Did you reference the right files, modules, or examples?
- Did you provide an existing pattern to match?
- Did you tell the model what *not* to do (e.g. do not invent APIs, do not duplicate existing logic)?
- Are you using the right mode (ask vs. agent, with vs. without code context)?

Relevant context is leverage. Too much context is noise. Provide the first, not the second.

### Codify team standards into AI guidance

Do not rely on engineers remembering your conventions during every prompt. Encode them where the AI will see them.

- Capture cross-cutting concerns — observability, error handling, logging, security defaults, code contracts — in instruction files, rules, or project-level prompts.
- Update the guidance whenever a recurring review comment appears. If a reviewer has said the same thing twice, it belongs in the AI's context, not in another PR comment.
- Treat the guidance itself as code. Review it. Version it. Own it.

The payoff: code that is secure, robust, and consistent *by default* — without engineers having to re-argue the standard every time.

### Write for AI agents as well as humans

Many AI agents make broad edits rather than surgical ones, especially when files are large or boundaries are unclear. Structure your code with that in mind:

- **Small, atomic files.** Reduces code churn, merge complexity, and token usage when an agent edits them.
- **Clear module boundaries.** Easier for an agent — and a human reviewer — to reason about a single unit.
- **Explicit interfaces.** Typed signatures, docstrings, and examples give the AI a surface to program against, rather than inferring it from implementation detail.

These were good engineering practices before AI. AI makes the payoff larger.

### Pairing as a default instinct — across the whole team

HVE is explicit: AI pairing is not just for coders. Every discipline on a product team can have an AI "pair".

- **Engineers** — design, implementation, review, and refactor.
- **TPMs / PMs** — sharpening stories, surfacing risks, rehearsing stakeholder conversations.
- **Designers** — iterating on mockups, discussing colour theory, drafting storyboards.
- **Security engineers** — threat modelling, attack-surface analysis, drafting guidance that flows back into the AI's rules.
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

## ⛔ Anti-patterns to avoid

These are the patterns that produce the "2x slower" outcome reported in the HVE use cases:

- **Prompting without reading the output.** The fastest route to shipped code you do not understand.
- **Using an agent for single-step tasks.** More overhead than value.
- **Adding features to a codebase you have not read.** Expect duplicated logic, broken conventions, and 400 lines where 200 would do.
- **Over-stuffing context.** Bloated inputs degrade output quality as well as cost.
- **Skipping verification for "simple" changes.** Simple is where confident-but-wrong output hides best.
- **Using AI to bypass the learning, rather than to accelerate it.** The framework's [Pillar 3](../framework.md#pillar-3-grow-through-ai-not-around-it) exists precisely for this.

## 👥 Making it a team practice

The framework is written for individuals, but the hardest concerns are team-level: inconsistent quality, knowledge that never gets shared, and "AI fighting AI" when everyone's tooling pulls in a different direction. A few lightweight rituals keep the practices above from fragmenting across a team.

- **Agree what "I have reviewed this" means.** For AI-assisted PRs, the bar is reasoning explained, not just tests green. Reviewers ask *why*; authors are ready to answer. Consistency comes from a shared standard, not a shared tool.
- **Prevent "AI fighting AI".** Divergent instruction files, prompts, and conventions make agents pull against each other. Converge on shared instruction files and a shared prompt library so the whole team's AI works from the same context.
- **Run AI-usage retrospectives.** Periodically review where AI sped you up, where it cost you time, and which prompts or patterns are worth promoting into the shared library. Fold the findings back into your instruction files.
- **Hold tooling show-and-tells.** Short, regular sessions where engineers demo how they *actually* use AI. This is the "show me how others think" that teams ask for — not another training course.
- **Run prompt and failure autopsies.** When AI produced something badly wrong — or surprisingly good — walk through *why* as a team. The reasoning is far more reusable than the result, and nobody needs to be blamed for a bad generation to learn from it.
- **Share real examples, not theory.** Publish the instruction files, agent configurations, and prompts that actually work as living examples others can copy and adapt. "Show me how you did it" beats "here is the best practice".
- **Make the thinking visible, not just the output.** Share the prompts, the dead ends, and the reasoning behind a change, not only the finished diff. The reps that grow engineers live in the thinking, so surface it (see [Pillar 3](../framework.md#pillar-3-grow-through-ai-not-around-it)).

## 📦 Team artefacts worth maintaining

A small number of shared artefacts give an outsized return. Every team running at HVE speed should have:

- **An instruction / context file** per project — conventions, architectural context, and "how to work with this codebase".
- **A record of significant architectural decisions** — the *why* behind the choices, captured so it outlives the session and the people who made it.
- **A prompt library** — the prompts that have proven to produce good results, with notes on what they are for.
- **Model and mode guidance** — which models are approved, which modes (ask / agent) to prefer for which tasks.
- **A data boundary policy** — what must never go into a prompt (secrets, credentials, regulated data).
- **A named owner** for each of the above.

Keep them short. Review them regularly. Treat them as first-class engineering artefacts.

## 🏁 Getting started

Adapted from HVE's own four-step starter, with HFE's human-growth lens added:

1. **Identify your team's highest-friction activities.** Where are you losing time to tedium, lookup, or repetition? Those are your first AI leverage points.
2. **Create shared engineering standards that both humans and AI can follow.** Instruction files, prompt libraries, rules. Treat them as first-class artefacts.
3. **Encourage cross-functional pairing with AI assistants.** Not just engineers — TPMs, designers, security, data science.
4. **Measure velocity, quality, *and* engineer growth.** Not just story points closed, but defect rates, incident frequency, review depth, and — the HFE addition — the growth of the engineers doing the work.

Engineer growth is easy to hand-wave, so watch for observable signals rather than a vague sense: PRs where the author explains trade-offs clearly; juniors leading parts of design and debugging discussions; reviewers asking reasoning questions and getting good answers; fewer AI-assisted changes sent back for lack of understanding; and errors caught by verification before they merge.

## 📚 Further reading

- [Hyper-Velocity Engineering — Mike Lanzetta](https://www.linkedin.com/pulse/what-hypervelocity-engineering-mike-lanzetta-ckfwc/)
- [Accelerating AI Development with GitHub Copilot — Microsoft ISE](https://devblogs.microsoft.com/ise/accelerating-ai-development-with-github-copilot-real-world-use-cases/)
- [The Framework — Pillar 4](../framework.md#pillar-4-use-ai-intelligently)
- [Developer FAQ](developer-faq.md)
