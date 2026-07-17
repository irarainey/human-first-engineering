# Copilot Instructions

GitHub Copilot reads [`AGENTS.md`](agents.md) by default. Put shared repository
guidance there when using the standard `AGENTS.md` convention.

Use `.github/copilot-instructions.md` only when you need guidance specific to
Copilot itself. For rules that apply only to selected paths, use
`.github/instructions/*.instructions.md` with an `applyTo` glob. Do not repeat
guidance that already belongs in `AGENTS.md`.

Copy the block below only if you have Copilot-specific guidance to add.

````markdown
# Copilot-specific guidance

Follow `AGENTS.md` for shared repository guidance.

<!-- Add guidance that is meaningful only to GitHub Copilot here. -->
````

---

*Part of the [Human-First Engineering templates](https://github.com/irarainey/human-first-engineering/tree/main/docs/toolkit/templates). Adapt this only for Copilot-specific needs.*
