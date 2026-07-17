# Changelog

## [1.1.2] - 2026-07-17

**Agent instruction-file guidance**

- Made `AGENTS.md` the preferred template where a chosen tool supports it.
  OpenCode and GitHub Copilot read it by default.
- Clarified that tools without `AGENTS.md` support, such as Claude Code, use
  their own native instruction-file convention.
- Updated the Context Bootstrap prompt and toolkit examples to use one
  instruction-file convention for the chosen tool, rather than creating
  cross-tool compatibility files.

## [1.1.1] - 2026-07-09

**Context Bootstrap prompt**

- Mandated inline, back-ticked load-level tags (`` `CRITICAL` ``, `` `IMPORTANT` ``, `` `REFERENCE` ``) on every constraint drafted for `CONTEXT.md`, with a self-contained example so the instruction is enforceable without access to the `CONTEXT.md` template.
- Deferred to a repository's existing ADR location when one already exists, instead of assuming `docs/adr/`.

**Context Engineering page**

- Added a "A narrower term, in wider use" section distinguishing Human-First Engineering's durable, team-owned usage of "context engineering" from the term's mainstream, model-facing/inference-time usage, citing its origin (Tobi Lütke, Andrej Karpathy) and Anthropic's own definition, and naming the actual new problem: making existing documentation discipline (notes, ADRs, wikis) survive a finite, lossy, token-costed context window.

## [1.1.0] - 2026-07-06

Evolves the framework and toolkit to reflect an AI-native team, without changing the core philosophy or adding new pillars.

**Context as a first-class engineering asset**

- Added a Pillar 4 behaviour: treat context as a durable asset, not a per-prompt effort.
- Strengthened Pillar 4 to make context engineering an explicit, co-equal half of "using AI intelligently": a new intro line and behaviour ("Preserve the reasoning that sessions lose") name the finite-context-window and compaction problem directly, the "Why this matters" now covers context durability as well as prompting, and the pillar links to the Context Engineering guide.
- Added a line to the manifesto belief "We use AI with skill, not by reflex": preserving understanding as sessions end and conversations compact matters as much as phrasing the prompt.
- Added a "The context window is finite" opening to the Context Engineering page — a plain but technical explanation of finite context windows, context as "just text", and lossy compaction — as the mechanism behind context loss.
- Added a "Context is a first-class engineering asset" section to the practices guide, framing context as engineering knowledge management (not prompt engineering).
- Added a dedicated **Context Engineering** toolkit page covering context loss in long-running AI work: a practical definition, preservation patterns, a lightweight file format, progressive disclosure (a small always-on core that references deeper docs loaded on demand), importance levels that double as load levels, and context-compression practices.
- Added example artefact templates: `CONTEXT.md` (a small always-on index), `ARCHITECTURE.md`, and `DECISIONS.md` (with a one-line index linking to full ADRs).
- Added a **Context** read-protocol section to the Copilot and Claude instruction-file templates: read `CONTEXT.md` first, open linked documents only when relevant, and treat `CRITICAL` entries as binding.
- Added architectural-decision records to the team-artifact lists in the practices guide and implementation guide.
- Added a "What is context engineering, and is it just prompting?" entry to the FAQ.

**AI review as a distinct engineering skill**

- Added a Pillar 2 behaviour naming reviewing AI-generated work as its own competency.
- Added the human review ladder to Pillar 5, calibrating human responsibility to the level of AI autonomy.
- Added a "Reviewing AI-generated work is its own skill" section to the practices guide.
- Added review guidance to the FAQ and the early-career guide.
- Added concrete "How to build the skill" techniques for reviewing AI-generated work — predict-then-compare, reconstruct the reasoning, a standing checklist of AI blind spots, turning suspicions into tests, using the tool to explain small unfamiliar sections back to you (then verifying), and keeping a personal catalogue of caught mistakes — in the practices guide, with a shorter version cross-linked from the early-career guide.

**Team learning patterns**

- Added a "Making it a team practice" section to the practices guide: shared review standards, avoiding "AI fighting AI", AI-usage retrospectives, tooling show-and-tells, prompt and failure autopsies, sharing real examples, and making thinking visible.

**Clarity, consistency, and plain language** (multi-model review pass)

- Reframed Pillar 2 ownership to be change-level and risk-aware: own every *change*; read every line you ship; verify patterns and edge cases for generated boilerplate, and understand every significant line for non-trivial logic.
- Added a concise review rubric (what changed, why, what was rejected, what failure cases, what was verified) to the "Reviewing AI-generated work" practice.
- Reconciled the context model so only `CONTEXT.md` is always-on; `ARCHITECTURE.md` and `DECISIONS.md` are linked from it and loaded on demand.
- Added a small-default-context bullet to the practices "Context" section, and added `CONTEXT.md` plus an artifact taxonomy to the implementation-guide tooling baseline.
- Added a "minimum viable adoption" path and separated non-negotiables from optional rollout in the implementation guide.
- Added observable signals for measuring engineer growth, and softened the performance-review prompt to avoid a surveillance tone.
- Standardised artifact terminology (dropped the ambiguous "skill library" in favour of "prompt library").
- Made the "docs as tests" and HVE-expertise claims more realistic, and plainer-language edits to the home page, manifesto, and Pillar 4.

**Fixes**

- Removed duplicated second copies of content in five template files (`copilot-instructions.md`, `CLAUDE.md`, and the three prompt templates) that broke rendering and left two divergent versions.
- Fixed a broken Pillar 3 link in the practices anti-patterns list.

## [1.0.0] - 2026-04-19

- Initial release of the Human-First Engineering manifesto and framework.
