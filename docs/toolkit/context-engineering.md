# Context Engineering

The [practices guide](practices.md#context-is-an-engineering-asset) introduces context as an engineering asset. This page goes deeper, because a specific problem is emerging in AI-native teams that deserves its own treatment: **engineering understanding is being lost over time.**

## 🪟 The context window is finite

AI tools are clever, but not magic. A model works over a finite *context window* — essentially just text, of a fixed size. Everything it needs to understand your problem has to fit inside it. Windows are larger than they used to be, but none are infinite: in a long session the limit is reached and the context is quietly compacted to keep fitting. That compaction is lossy, and what goes first is the expensive part — *why* a decision was made, what was rejected, the constraint the code does not show.

That is the mechanism behind the symptoms engineers report constantly: AI losing track of earlier decisions, re-explaining the same project goals, inconsistent approaches because the original rationale was gone, and architectural knowledge that exists only in a chat that has since scrolled away.

Human-First Engineering treats this as an engineering problem, not an AI problem. More model memory will not fix it — because the real question is not *"how do we stop the model forgetting?"* It is *"what engineering knowledge deserves to survive, and how do we deliberately preserve it — for the next engineer as much as the next agent?"*

## 🧭 What context engineering is

**Context engineering is the deliberate practice of capturing, curating, and preserving the engineering knowledge that humans and AI need to reason correctly about a system over time.**

It is not prompt engineering.

| | Prompt engineering | Context engineering |
| --- | --- | --- |
| **Unit** | A single request | The durable knowledge behind every request |
| **Lifespan** | Transient — used once | Persistent — reused across sessions, tools, and people |
| **Question it answers** | *"How do I phrase this?"* | *"What should exist so anyone can pick this up and reason correctly?"* |
| **Owner** | The individual prompting | The team |
| **Failure mode** | A weak answer | Lost understanding, repeated mistakes, inconsistent architecture |

Prompt engineering optimises a moment. Context engineering compounds over the life of a project. The second is where the gains — and the risk — actually lie.

### Why long-running AI workflows make this urgent

A short conversation holds its own context. A months-long, multi-session, multi-tool, multi-agent effort does not — and the more tools and agents involved, the more places that understanding can slip through. Output survives in the repository; the reasoning behind it, unless captured deliberately, does not.

### Why it is an organisational problem, not an AI one

If the rationale for an architecture lives only in one engineer's chat history, the team has already lost it — the AI forgetting is just the visible symptom. This is the same knowledge-management problem software engineering has always had (tribal knowledge, undocumented decisions, the senior who leaves and takes the *why* with them). AI raises the stakes because it both consumes context faster and generates output faster, widening the gap between what is produced and what is understood.

## 🏛️ Context as an engineering asset

The proposition is simple: **treat context the way you treat source code, architecture documentation, and design decisions** — as an artefact the team creates, versions, reviews, and owns.

**Benefits**

- Continuity across sessions, tools, and people — the reasoning outlives the conversation that produced it.
- Consistency — humans and AI work from the same understanding, so approaches stop diverging.
- Onboarding — a new engineer (or a fresh agent) inherits the *why*, not just the *what*.
- It compounds — good context makes every future interaction better.

**Risks and failure modes**

- **Rot.** Context that is not maintained drifts from reality and becomes actively misleading — worse than none. This is the classic fate of stale documentation.
- **Bloat.** Context that tries to capture everything drowns the signal, for humans and models alike.
- **Write-only artefacts.** Files nobody reads or updates give false confidence.
- **AI-only framing.** Context written purely to feed a model, unreadable by a human, fails the moment a person needs to reason from it.

The lesson from software engineering history is consistent: the documentation that survives and stays useful is the documentation that is *close to the code, small, and exercised*. Architecture decision records (ADRs) endured where 80-page design documents did not, for exactly this reason.

## 🧩 Context preservation patterns

Practical patterns a team can adopt incrementally. Start with one; add others only when the pain is real.

### Repository instructions

- **Problem it solves:** the AI starting cold every session, ignorant of conventions and architecture.
- **Valuable when:** any repository used with AI assistants more than occasionally.
- **Drawback:** grows stale silently; needs an owner and a review trigger.

### Architectural summary (`ARCHITECTURE.md`)

- **Problem it solves:** the shape of the system living only in senior engineers' heads.
- **Valuable when:** the system is large enough that no one holds all of it at once.
- **Drawback:** can drift from the code; keep it about structure and boundaries, not implementation detail that changes weekly. For large systems, keep it an overview that links to per-area docs rather than one file that grows without bound.

### Decision records (`DECISIONS.md` or ADRs)

- **Problem it solves:** the *why* behind a choice — and what was rejected — being lost, leading to re-litigated debates and inconsistent follow-on work.
- **Valuable when:** a decision is hard to reverse, non-obvious, or likely to be questioned later.
- **Drawback:** discipline to write them at the moment of decision; easy to skip under delivery pressure.

### Project memory (`CONTEXT.md`)

- **Problem it solves:** the goals, constraints, and current state that a fresh session or agent needs to be useful immediately.
- **Valuable when:** work spans many sessions, tools, or contributors.
- **Drawback:** must be curated, not accreted — a dumping ground is not memory.

### Context snapshots

- **Problem it solves:** losing the state of reasoning at the end of a long session before compaction destroys it.
- **Valuable when:** pausing a long-running effort, or handing off between people or agents.
- **Drawback:** point-in-time; must be folded back into durable artefacts or it becomes archaeology.

### Context compression practices

- **Problem it solves:** context growing without bound until signal drowns.
- **Valuable when:** any long-lived artefact — periodically distil, promote what matters, retire what does not.
- **Drawback:** compression is lossy by design; do it deliberately, not by letting a tool summarise unattended (see below).

## 📐 A lightweight context format

Human-First Engineering recommends a small, standard set of files rather than a heavyweight system. Adopt only the ones you need.

| File | Holds | Answers |
| --- | --- | --- |
| `CONTEXT.md` | Goals, current state, constraints, glossary, key pointers | *"What is this and where do things stand?"* |
| `ARCHITECTURE.md` | An overview — structure, boundaries, data flow — plus a component map linking to deeper per-area docs | *"How is it built, and why that way?"* |
| `DECISIONS.md` | An index of significant decisions, linking to full ADRs that hold the reasoning and rejected alternatives | *"Why did we choose this?"* |

Ready-to-use examples: [CONTEXT.md](templates/context.md), [ARCHITECTURE.md](templates/architecture.md), [DECISIONS.md](templates/decisions.md).

`CONTEXT.md` is the always-on entry point — small, and mostly a set of pointers. `ARCHITECTURE.md`, decision records, and specs are *referenced* from it and read only when a task needs them.

### Keep the always-on context small

More context is not better context. Everything the tool reads by default costs tokens and dilutes signal, so the aim is the opposite of exhaustive: **a small, always-loaded core that points to everything else, and deeper documents pulled in only when relevant.**

- **Make `CONTEXT.md` an index, not an encyclopedia.** Keep it to the handful of facts and constraints that must always be in view, plus links to the deeper documents. It is the map, not the territory.
- **Reference, don't inline.** `ARCHITECTURE.md`, full ADRs, and detailed specs are linked from the core and opened only when a task actually touches them. A decision log can be a one-line-per-entry index that links to a full ADR — the line stays in context; the ADR is read only when it becomes relevant.
- **Load on demand.** The default is: always read the small core, open a linked document only when the current task makes it relevant. That keeps the window lean without losing the ability to go deep.

### Importance levels double as load levels

One piece of structure earns its place: a tag on what matters. It answers two questions at once — what must survive compression, and what deserves to be in context by default.

- **`CRITICAL` — always loaded, must survive.** Reasoning and constraints that cause real mistakes if forgotten: irreversible decisions, security boundaries, hard external constraints. Keep these inline in the core.
- **`IMPORTANT` — load when working in the area, should survive.** Architectural conventions and the *why* behind non-obvious choices. Reference from the core; pull in when relevant.
- **`REFERENCE` — load only if needed, reconstructable.** Background that is helpful but recoverable from the code or a quick conversation. Link it and leave it until it matters.

This keeps the always-on footprint small while making sure the expensive-to-lose reasoning is both preserved *and* present when it counts. It is a two-minute tagging habit, not a governance framework — if it ever feels like process, drop the labels and rely on judgement; the files matter more than the tags.

## 🗜️ Context compression as a discipline

Compression is not something to fear — it is something humans do naturally and constantly. A senior engineer does not remember every line; they remember the shape, the load-bearing decisions, and where to look. The goal is to make that compression *deliberate* rather than leaving it to an unattended summariser that cannot tell a load-bearing decision from an incidental detail.

**What should survive compression**

- The decisions that are hard or impossible to reverse.
- The reasoning behind non-obvious choices, and the alternatives that were rejected.
- Constraints imposed from outside the code — regulatory, contractual, organisational.
- Security and safety boundaries.

**What can safely disappear**

- Anything trivially reconstructable by reading the code.
- Superseded intermediate steps once the outcome is captured.
- Transient exploration that led nowhere.
- Detail so fine-grained it will be stale within a sprint.

**Practical techniques**

- **Distil, don't dump.** When a session ends, write the handful of things that must survive into the durable artefact — do not archive the whole transcript and call it memory.
- **Periodic context review.** Treat it like refactoring: occasionally re-read the context files, promote what has proven important, retire what has gone stale. A natural fit for an existing retro or review, not a new ceremony.
- **Human distillation over automatic summarisation for what is `CRITICAL`.** Let tools compress background; keep a human in the loop for the reasoning that must not be lost.
- **Write the *why*, prune the *what*.** The *what* is in the code. The *why* is what compression destroys, so it is what you protect.

## 🧑‍🤝‍🧑 A team capability, not an individual one

Context engineering is where Human-First Engineering becomes explicitly team-level. A prompt is an individual act; context is shared infrastructure. Its purpose is precisely to move understanding out of one person's head — and one AI session — and into something the whole team, its future members, and its agents can rely on.

- **Shared understanding.** One source of truth for goals and constraints keeps humans and AI aligned.
- **Team memory.** Knowledge survives people leaving and sessions ending.
- **Transfer to future engineers.** The next junior inherits reasoning, not just code — which is the pipeline this framework exists to protect.
- **Multi-agent and multi-tool work.** When several agents or tools touch the same problem, shared context is what stops them pulling in different directions ("AI fighting AI").

This preserves what Human-First Engineering cares about most: **judgement and understanding, held by humans, sustained over time** — not convenience for the model. Context serves human understanding first; the AI benefits as a side effect.

## ✅ Getting started

1. **Add a `CONTEXT.md`** to one project that spans many sessions. Keep it to a page.
2. **Start a `DECISIONS.md` index** the next time you make a hard-to-reverse choice, and write the full ADR alongside it — capture the *why* and what you rejected in the ADR, a one-line pointer in the index.
3. **Tag anything `CRITICAL`** that would cause a real mistake if forgotten.
4. **Point your tool at it.** In your instruction file, name `CONTEXT.md` as the always-on source and tell the assistant to open linked documents only when relevant. The [instruction-file templates](templates/copilot-instructions.md) already include this.
5. **Review it in a retro you already run.** Promote what mattered; retire what rotted.
6. **Give each file a named owner.** That is [Pillar 2](../framework.md#pillar-2-own-the-output) applied to the context layer.

## 🔗 See also

- [Practices — Context is an engineering asset](practices.md#context-is-an-engineering-asset)
- [Framework — Pillar 4](../framework.md#pillar-4-use-ai-intelligently) — use AI intelligently, including encoding durable context.
- [Templates — CONTEXT.md](templates/context.md), [ARCHITECTURE.md](templates/architecture.md), [DECISIONS.md](templates/decisions.md).
