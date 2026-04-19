---
title: Implementation Guide
parent: Toolkit
nav_order: 1
---

# Implementation Guide

A practical, step-by-step plan for introducing and embedding the [manifesto](../manifesto.md) and [framework](../framework.md) in a team or organisation.

This is not a process. It is a way of working. The goal is to make the principles visible, repeated, and lived — not laminated to a wall.

## 1. Start with the *why*

Open with the core truth:

- AI is changing how software is built.
- The real risk is not replacement — it is deskilling.
- Early-career engineers are the most exposed.
- Engineering has always evolved with its tools.
- This manifesto protects the craft *and* the people who practise it.

Frame the conversation around growth, not fear.

## 2. Tell the story of continuity

Connect AI explicitly to the long lineage of assistive tools — autocomplete, IntelliSense, refactoring tools, static analysis, code generation. This grounds the change in familiarity and reduces anxiety. AI is a bigger step on the same ladder, not a different one.

## 3. Introduce the manifesto first (identity)

Present the manifesto as:

- A statement of who we are.
- A commitment to engineer growth.
- A cultural anchor and shared philosophy.

This is the emotional, identity-driven part. Resist the urge to jump straight to behaviours.

## 4. Introduce the framework second (behaviour)

The framework is the *how*: five pillars, simple enough to remember, actionable enough to guide decisions. Emphasise that it is not a process to comply with — it is a way of working to internalise.

## 5. Run a team intro session

A suggested 30–45 minute format:

- **5 min — The why.** Deskilling risk, continuity of tooling, the opportunity ahead.
- **5 min — The manifesto.** Walk through each line. Ask: *"What does this mean for us?"*
- **15 min — The framework.** Walk through the five pillars with examples from your own codebase.
- **10–15 min — Discussion.** As a team, talk through:
  - Where are we strong?
  - Where are we weak?
  - What is one thing that changes tomorrow?

Capture the answers. They become your team's first commitments.

## 6. Empower principals and seniors as multipliers

Senior ICs are where culture becomes durable. Charge them explicitly with:

- Modelling the behaviours.
- Mentoring juniors in AI-assisted workflows.
- Curating shared instruction files, prompts, and skills.
- Protecting foundational learning opportunities.
- Calling out — kindly — when AI output is shipped without understanding.

Make this part of the role expectation, not an extracurricular favour.

## 7. Embed into existing rituals

Do not add new ceremonies. Weave the framework into ones you already run.

| Ritual | Prompt to add |
| --- | --- |
| Design reviews | *Did we think before we generated?* |
| Code reviews | *Can the author explain every significant decision?* |
| Onboarding | *Where is our instruction file? Where is our skill library?* |
| Retrospectives | *Are we growing skills or growing dependencies?* |
| Architecture discussions | *Did we use AI to explore options, or to decide for us?* |
| Performance conversations | *Is this engineer growing in judgement, or just in output?* |
| Incident reviews | *Did anyone ship something they did not fully understand?* |

## 8. Invest in the tooling layer

The framework only works if the tooling around it is in good shape. As a baseline, every team should have:

- **An instruction file** per project, kept short and current.
- **A shared skill / prompt library** for recurring tasks.
- **Clear guidance** on which models are approved and when to use each.
- **Clear guidance** on what must never go into a prompt — secrets, credentials, regulated data.
- **A named owner** for each of the above.

These are small artefacts. They have an outsized effect on quality.

## 9. Review quarterly

AI evolves fast. Schedule a short, recurring review to ask:

- What is working?
- What is not?
- Where are we seeing deskilling?
- Where are we seeing genuine acceleration?
- What needs to change in our manifesto, framework, or tooling?

Keep the framework alive. A static manifesto in a fast-moving discipline becomes a museum piece.

## 10. Celebrate the right things

Reinforce culture by highlighting:

- Juniors who show strong reasoning, not just shipping speed.
- Seniors who mentor effectively and visibly.
- Teams who use AI intentionally.
- Concrete examples of *think first, own the output*.
- Cases where verification caught an AI error before it shipped.

Repetition builds belief. Repeat the one-line summary often:

> AI is the next step in a long history of assistive tools — and we use it to grow engineers, accelerate delivery, and protect quality.

## A final note

This is not finished work. It is a starting position for an industry that is changing under our feet. Take what is useful, adapt the rest, and share back what you learn. The pipeline of engineers we are growing today is the senior engineering bench of the next decade — and it is on all of us to protect it.
