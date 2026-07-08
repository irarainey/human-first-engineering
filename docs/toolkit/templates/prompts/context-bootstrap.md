# Context Bootstrap — Context Engineering prompt

**Run this on an existing repository to generate its context assets.** It surveys the code and any instruction files already present, then drafts a small, factual set of context files — `CONTEXT.md`, `ARCHITECTURE.md`, and a `DECISIONS.md` index with ADRs — and wires them into the repository's instruction files so future sessions load `CONTEXT.md` automatically and open the linked files only when a task needs them. Everything is drafted for you to review.

It has two goals, and every instruction below serves one of them:

1. **Short, factual, consistent context for prompts** — one shared source of truth so humans and AI reason from the same understanding.
2. **A smaller context-window footprint** — a lean always-on core that links to detail, rather than a large file the tool reads in full every time.

Copy the prompt below into an AI assistant with access to the repository (an agent or IDE assistant that can read files). Read [Context Engineering](../../context-engineering.md) first for the reasoning behind the files it produces.

```text
You are helping me bootstrap the context-engineering assets for this existing
repository. Survey what is already here, then draft a small, factual set of
context files for me to review. Do not invent anything. Propose everything as
drafts: do not create, edit, or delete any file until I have reviewed and
approved it.

## Survey first (read-only)

Read what the repository already tells you before writing anything:

- README, docs, and any CONTRIBUTING or onboarding notes.
- Existing AI instruction files: .github/copilot-instructions.md, CLAUDE.md,
  .cursorrules, .github/instructions/**, or similar.
- Project structure, entry points, and module boundaries.
- Build, dependency, and config files (package manifests, CI workflows, IaC).

List the sources you used. Where the repository does not tell you something,
say so — do not guess, and do not fill gaps with generic best practice.

## Then draft these files

1. CONTEXT.md (root) — the small, always-on core. Keep it to a page. Cover:
   what this is, current state, goals and non-goals, constraints, and a
   "load on demand" index linking to the files below. Inline only what is
   CRITICAL; link the rest. Write each constraint as its own bullet with its
   load-level tag inline as a back-ticked prefix, in exactly this shape:

       - `CRITICAL` — Order state transitions are irreversible once emitted.
       - `IMPORTANT` — All money is stored in integer pence, never floats.
       - `REFERENCE` — We target p99 < 200ms for order reads.

   Use one of `CRITICAL`, `IMPORTANT`, or `REFERENCE` on every constraint. Do
   not bury the level in prose, drop it into a separate list, or leave it off.
2. ARCHITECTURE.md (root) — a lean overview: shape, boundaries, data-flow
   rules, and a component map that links to deeper per-area docs. Structure
   and boundaries, not implementation detail that changes weekly.
3. DECISIONS.md (root) — a one-line-per-decision index, newest first, linking
   to full ADRs under docs/adr/ (or the repository's existing ADR location, if
   it already keeps them elsewhere). Write an ADR only for decisions the
   repository already evidences.

## Turn existing instructions into decision records

Existing instruction files often encode decisions as bare rules ("no raw SQL",
"all money in integer pence") without the reasoning. For each such rule that is
non-obvious or hard to reverse:

- Draft a short ADR under docs/adr/ (or the repository's existing ADR location,
  if it already keeps them elsewhere) capturing the decision, why, and — if the
  repository shows it — the alternative that was rejected. Capture only reasoning
  the repository actually evidences; where the reasoning is not documented, record
  it as an open question for me to answer rather than inventing a rationale.
- Add a one-line entry to the DECISIONS.md index.
- If the rule is a binding constraint, keep the rule itself — tagged CRITICAL —
  in CONTEXT.md or the instruction file, and link the ADR only for the reasoning
  and rejected alternatives. A binding rule must stay in always-loaded context;
  the ADR (opened on demand) is not enough on its own. Only for non-binding rules
  should you trim the instruction file down to a pointer.

## Wire the assets into the AI's workflow

The context files are only useful if the tools read them automatically. Propose
creating or updating the repository's instruction files so every future session
starts from this context without being told:

- Update the instruction files this repository already uses, and add any that
  its tooling expects but that are missing: .github/copilot-instructions.md
  (GitHub Copilot), CLAUDE.md (Claude), AGENTS.md (agents), .cursorrules
  (Cursor), or similar. If none exist, propose the one that matches the team's
  tools rather than all of them; if the repository gives no clear signal of
  which tools the team uses, ask rather than guess.
- In each, name CONTEXT.md as the always-on source of truth: instruct the
  assistant to read it first, and not to ask for what it already contains.
- Be explicit that CONTEXT.md is the *only* file loaded by default. The
  assistant must open ARCHITECTURE.md, DECISIONS.md, the ADRs, and any other
  linked document *only when the current task needs it* — never up front, never
  the whole set. This is what keeps the context window small; state it plainly
  so the tool cannot treat the links as an invitation to load everything.
- State that anything tagged CRITICAL is binding: if a change would contradict
  it, stop and flag rather than work around it.
- Keep the instruction files short. Point at CONTEXT.md and the linked docs;
  do not copy their content in. The instruction file is the hook, not a second
  copy of the context.

Keep the wording consistent across the instruction files so different tools
behave the same way.

## Rules for everything you write

- Brief, factual, and technical. Short sentences. No marketing, no adjectives
  for their own sake, no slogans, no consultancy language.
- One fact in one place. Cross-link to the canonical file; never duplicate.
- Never copy secrets, credentials, tokens, connection strings, or customer or
  personal data into the context files. If you find such values while surveying,
  note that they exist and where — do not reproduce them.
- Tag what matters so it doubles as a load level. In CONTEXT.md, write the tag
  inline as a back-ticked prefix on the constraint itself, in the shape shown
  under "draft these files" above — never as a bare word or a separate heading:
  - CRITICAL — always loaded, must not be forgotten (kept inline in CONTEXT.md).
  - IMPORTANT — load when working in that area (referenced from the core).
  - REFERENCE — load only if needed; reconstructable from the code.
- Prefer linking over inlining. The always-on core stays small; depth lives in
  files opened only when a task needs them.
- Flag every assumption. If you cannot verify a claim from the repository,
  mark it clearly for me to confirm rather than stating it as fact.

## Output

For each file, give me the proposed contents in its own block, preceded by the
sources you based it on and any open questions. Do not write to disk until I
have reviewed the drafts.
```

---

## How to use the output

Review each drafted file against the repository before you commit it. Context that is wrong or invented is worse than none — it misleads every future prompt that trusts it. Treat the drafts as a starting point:

- Confirm or correct anything the assistant flagged as an assumption.
- Check the `CRITICAL` tags. Anything that would cause a real mistake if forgotten belongs there; everything else should link out, not sit in the core.
- Delete what is reconstructable from the code. A smaller core is a working core.
- Give each file a named owner. That is [Pillar 2 — Own the output](https://humanfirstengineering.dev/framework#pillar-2-own-the-output) applied to the context layer.

Once reviewed, this becomes the always-on context your instruction files point at. Keep it current in an existing review or retro; do not let it rot.

## When not to use this

- Trivial or short-lived repositories, where the README already holds everything a fresh session needs.
- As a substitute for your own judgement — the assistant drafts, you decide what is true and what is `CRITICAL`.
- To generate context for a codebase nobody on the team understands. Fix that first; a confident summary of code you cannot verify is a liability, not an asset.

---

*Part of the [Human-First Engineering templates](https://github.com/irarainey/human-first-engineering/tree/main/docs/toolkit/templates). Operationalises [Context Engineering](https://humanfirstengineering.dev/toolkit/context-engineering) and [Pillar 4 — Use AI intelligently](https://humanfirstengineering.dev/framework#pillar-4-use-ai-intelligently).*
