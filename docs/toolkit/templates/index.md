# Templates & Prompts

Reusable artefacts that operationalise the [Human-First Engineering framework](https://humanfirstengineering.dev). Each file is a starting point — adapt it to your project's conventions.

## 📄 Instruction files

Drop-in files that shape how AI assistants behave in your codebase. They encode
Pillar 4's *"Encode team context in instruction files"* behaviour.

Prefer **[AGENTS.md](agents.md)** at the repository root when your chosen tool
supports it. OpenCode and GitHub Copilot read it directly. If your tool does
not support `AGENTS.md`, use its native instruction-file convention instead.

Choose the convention for the tool you use. There is no need to create files
for tools your team does not use. Use
[Copilot instructions](copilot-instructions.md) only for Copilot-specific or
path-scoped guidance, and [CLAUDE.md](claude.md) when you use Claude Code.

## 🧠 Context artefacts

Durable knowledge files that preserve engineering understanding across sessions, tools, and people — without bloating the context window. Keep `CONTEXT.md` small and always-on; it links to the others, which are read only when a task needs them. They operationalise [Context Engineering](../context-engineering.md) and Pillar 4's *"treat context as a durable asset"* behaviour.

- **[CONTEXT.md](context.md)** — the small, always-on project memory: goals, state, constraints, and links to the rest. Place at the root of your repository.
- **[ARCHITECTURE.md](architecture.md)** — the shape of the system: structure, boundaries, and the reasoning behind them.
- **[DECISIONS.md](decisions.md)** — significant decisions, the *why*, and the rejected alternatives; can be a one-line index linking to full ADRs.

## 💬 Prompts

Short, reusable prompts for specific moments in the framework. Save them to a shared prompt library your team can pull from.

- **[prompts/problem-frame.md](prompts/problem-frame.md)** — **Pillar 1 — Think first.** Use at the start of non-trivial work to force a clear problem frame before any code is generated.
- **[prompts/review-assistant.md](prompts/review-assistant.md)** — **Pillar 2 — Own the output.** Helps a reviewer probe reasoning, not just syntax, when reviewing AI-assisted code.
- **[prompts/risk-assessment.md](prompts/risk-assessment.md)** — **Pillar 5 — Trust AI, but verify everything.** Categorises a change as low, medium, or high risk and recommends a verification level.
- **[prompts/context-bootstrap.md](prompts/context-bootstrap.md)** — **Context Engineering / Pillar 4.** Run it on an existing repository to draft its `CONTEXT.md`, `ARCHITECTURE.md`, and `DECISIONS.md`/ADRs from the code and existing instruction files, then wire them into the instruction file used by your chosen tool so `CONTEXT.md` loads automatically and linked files open only when needed.

## 🛠️ How to use these

1. **Copy, don't depend.** These are starting points. Adapt them to your project's language, conventions, and context. A template you cannot explain is no better than AI-generated code you cannot explain.
2. **Keep them short.** If your instruction file grows past a page, signal is diluting. Split by concern or remove what is not pulling its weight.
3. **Version them.** Instruction files are code. Review changes. Track what improved or regressed.
4. **Own them.** Every file here should have a named human owner on your team. That is Pillar 2 applied to the AI layer itself.
