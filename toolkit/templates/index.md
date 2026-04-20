---
title: Templates & Prompts
parent: Toolkit
nav_order: 7
has_children: true
---

# Templates & Prompts

Reusable artifacts that operationalise the [Human-First Engineering framework](https://humanfirstengineering.dev). Each file is a starting point — adapt it to your project's conventions.

## 📄 Instruction files

Drop-in files that shape how AI assistants behave in your codebase. They encode Pillar 4's *"Encode team context in instruction files"* behaviour.

- **[copilot-instructions.md](copilot-instructions.md)** — for GitHub Copilot. Place at `.github/copilot-instructions.md` in your repository.
- **[CLAUDE.md](CLAUDE.md)** — for Claude Code and the Claude API. Place at the root of your repository.

Both encode the same principles; use whichever matches your tooling, or both.

## 💬 Prompts

Short, reusable prompts for specific moments in the framework. Save them to a shared prompt library your team can pull from.

- **[prompts/problem-frame.md](prompts/problem-frame.md)** — **Pillar 1 — Think first.** Use at the start of non-trivial work to force a clear problem frame before any code is generated.
- **[prompts/review-assistant.md](prompts/review-assistant.md)** — **Pillar 2 — Own the output.** Helps a reviewer probe reasoning, not just syntax, when reviewing AI-assisted code.
- **[prompts/risk-assessment.md](prompts/risk-assessment.md)** — **Pillar 5 — Trust AI, but verify everything.** Categorises a change as low, medium, or high risk and recommends a verification level.

## 🛠️ How to use these

1. **Copy, don't depend.** These are starting points. Adapt them to your project's language, conventions, and context. A template you cannot explain is no better than AI-generated code you cannot explain.
2. **Keep them short.** If your instruction file grows past a page, signal is diluting. Split by concern or remove what is not pulling its weight.
3. **Version them.** Instruction files are code. Review changes. Track what improved or regressed.
4. **Own them.** Every file here should have a named human owner on your team. That is Pillar 2 applied to the AI layer itself.
