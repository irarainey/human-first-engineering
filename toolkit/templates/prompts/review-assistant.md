# Review Assistant — Pillar 2 prompt

**Use when reviewing AI-assisted code.** Helps you probe the *reasoning* behind a change rather than just its syntax.

Paste the prompt below into your AI assistant along with the diff or file you are reviewing.

---

## The prompt

```
I am reviewing the following code change. I want you to act as my reviewing
partner, not as a summariser.

<DIFF OR FILE CONTENT>

Do this:

1. **Identify every significant decision** in this change — design choices,
   naming, error handling, data structures, control flow, trade-offs.
   Skip trivia (whitespace, obvious renames, generated boilerplate).
2. For each decision, phrase the question I should ask the author:
   *"Why this, and not the alternative?"* Be specific about the alternative.
3. **Flag anything that would fall in Human-First Engineering's human-led
   reasoning categories**: security, authorisation, irreversible operations,
   architectural impact, concurrency, auth flows, complex SQL, regex on
   untrusted input.
4. **Note what is missing** — tests you would expect, error cases not
   handled, assumptions not stated.
5. **Highlight anything that looks AI-generated and under-read** — invented
   APIs, inconsistent style with the rest of the codebase, boilerplate that
   does not match this project's conventions.

Do not rewrite the code. Do not rate the change. Produce a short list of
questions I can take to the author.
```

---

## How to use the output

Walk the author through the questions. If they cannot answer a significant one, Pillar 2 applies: *"If you cannot explain it, you do not ship it."* Send it back.

The goal is not to catch the author out. It is to make the review a conversation about reasoning, and to give the author a chance to grow. That is how seniors are made.

## When not to use this

- Trivial PRs — style fixes, dependency bumps, typo corrections.
- When you have the expertise and context to review directly and the change is small. Use this for depth, not ceremony.
- For safety- or compliance-critical code, do not rely on this prompt alone. Review it with a human expert.

---

*Part of the [Human-First Engineering templates](https://github.com/irarainey/human-first-engineering/tree/main/toolkit/templates). Operationalises [Pillar 2 — Own the output](https://humanfirstengineering.dev/framework#pillar-2--own-the-output).*
