---
title: Developer FAQ
---

# Developer FAQ

The questions engineers actually ask about Human-First Engineering. Honest answers, not corporate ones.

If you have a question that is not here, raise it. The FAQ is meant to grow.

## About the manifesto and framework

### Is this just another process I have to follow?

No. The framework is deliberately not a process. There is no checklist to tick, no form to fill in, no extra meeting to attend. It is a set of principles and behaviours designed to be internalised and applied with judgement. If it ever starts to feel like compliance, something has gone wrong.

### Is this anti-AI?

No. The framework assumes you will use AI heavily and aims to make you better at it. The point is to use AI in a way that *grows* engineers rather than quietly hollowing them out. Going faster and growing capability are not in conflict — they are both required.

### Is this just for junior engineers?

No. It applies to every engineer at every level. Juniors get the most explicit attention because they are the most exposed to the deskilling risk, but seniors and principals carry the heaviest responsibility for making the framework real. If you are senior, you are a multiplier — for better or worse.

### Why do we need a framework? Engineers will figure it out.

Some will. Many will not. AI tooling is changing what good engineering looks like in the moment-to-moment work, and a framework gives the team a shared language for what to expect from each other. Without it, every team member quietly invents their own answer, and the results drift apart.

## About using AI day-to-day

### Am I allowed to use AI for everything?

You are allowed and encouraged to use AI for almost everything. There are a small number of categories where AI must not be the final word — security-sensitive code, compliance and regulatory logic, irreversible operations, and core architectural decisions. In those categories, human reasoning leads and AI supports. Everywhere else, calibrate your trust to the risk and verify accordingly.

### Do I have to attempt every problem manually first?

No — and "code it yourself first" is the wrong framing. The point is to think through the shape of the problem before generating, and to read and understand what comes back. For non-trivial work, know what you are trying to do, what success looks like, and what approaches you would consider before prompting. For repetitive or well-understood tasks, go straight to AI. The discipline is in the *reasoning*, not in the typing.

### What counts as "explaining" AI-generated code?

You should be able to answer, at minimum:

- What problem does this code solve?
- Why this approach over the alternatives?
- What are its failure modes and edge cases?
- What would you change if a constraint shifted?

If you cannot answer those, you do not understand the code well enough to ship it under your name. Read it, run it, and ask the AI to explain it back to you until you do.

### Do I need to disclose AI usage in PRs?

Disclose where it influences design or non-trivial logic, so reviewers know what to scrutinise. You do not need to flag every autocomplete or boilerplate. Use judgement. The goal is honest collaboration with reviewers, not a compliance trail.

### What model should I use?

Match the model to the task:

- **Small / fast models** for iteration, repetitive work, and high-volume tasks.
- **Large / frontier models** for complex reasoning, architecture, and nuanced judgement.
- **Code-specialised models** for refactoring, tests, and boilerplate.
- **Vision models** for diagrams, screenshots, and UI review.
- **Agents** for genuinely multi-step workflows — not single tasks.

Using a frontier model for a simple lookup wastes money. Using a small model for complex architectural reasoning wastes time and produces worse output. Both are mismatches.

### When should I use an agent versus a single prompt?

Use an agent when the task is genuinely multi-step, benefits from orchestration, and has a clear scope. Define the scope, checkpoints, and review points *before* you start. The longer an agent runs unsupervised, the more important those boundaries become. For a single transformation, refactor, or question, a prompt or short conversation is the right tool.

### What goes in an instruction file?

The standards, conventions, architectural context, and patterns that you want every AI interaction to start from. Keep it short and focused — a sprawling instruction file dilutes the signal. Maintain it as a living document, owned by someone, reviewed when conventions change.

### What must never go into a prompt?

- Secrets, credentials, API keys, tokens.
- Production customer data.
- Regulated, personal, or otherwise sensitive data.
- Anything that would cause a problem if it leaked into model training data or appeared in a log.

When in doubt, ask. There are no points for being clever about edge cases here.

## About growing as an engineer

### Will AI make me a worse engineer?

It can, if you let it. It can also make you a much better one, if you use it deliberately. The difference is whether you use AI to *avoid* understanding things or to *accelerate* your understanding of them. The framework is designed to nudge you toward the second pattern.

### I am a junior engineer. Should I be worried?

Concerned, not worried. You are entering the industry at a uniquely challenging — and genuinely exciting — moment. The tools are extraordinary. The risk is that they mask gaps in your understanding that catch up with you later. Counter that by *reasoning* about problems before you prompt, reading what the AI produces carefully, asking questions freely, and treating struggle as the work rather than a sign of failure. The senior engineers around you are accountable for supporting that.

### How do I show growth when AI is doing so much of the work?

By demonstrating *judgement*: the questions you ask, the trade-offs you weigh, the decisions you defend, the bugs you find that the AI missed, the designs you push back on. Output is not the measure. Reasoning is.

### What do I do if I am struggling and tempted to just let the AI do it?

Use AI — but use it to *reason with*, not to replace the reasoning. Ask it to explain, to challenge your approach, to propose alternatives. Pair with a human too. The goal is not to suffer pointlessly, and it is not to refuse the tools. It is to make sure the thinking muscle is growing, not atrophying.

## About teams and reviews

### What does code review look like under this framework?

Reviews focus on **reasoning**, not just syntax. Reviewers can — and should — ask the author to explain *why*, not just *what*. If the author cannot explain a significant decision, the PR goes back. This is true regardless of whether the code was written by hand, generated by AI, or copied from elsewhere.

### What if the AI writes better code than I would have?

Great. Read it carefully, understand it deeply, and learn from it. That is one of the best uses of these tools. The standard is not "did you type every character" — it is "do you understand what you are shipping". Sometimes AI is genuinely a better teacher than the codebase.

### What if my team disagrees about how strictly to apply the framework?

Disagreement is expected and healthy. Bring the conversation to a retro or a design review. The framework is meant to be adapted to your context, not enforced uniformly. The non-negotiables are small: human ownership of shipped code, human-led reasoning for high-risk categories, and protection of early-career learning.

### What if my manager pushes for output that the framework slows down?

The framework is not a brake on output. It is a guard against the kind of speed that produces debt. If you genuinely feel pressure to ship things you do not understand, that is a leadership conversation worth having directly — and the framework gives you the language for it.

## About risk and quality

### What about AI hallucinations?

Treat all AI output as a draft. Validate the logic, the assumptions, and the edge cases. Be especially sceptical when the output is confident and detailed — that is when hallucinations are easiest to miss. Anything stateful, security-sensitive, or hard to reverse warrants extra scrutiny.

### Is it safe to let AI generate database migrations or infrastructure changes?

Generate, yes. *Apply without careful review*, no. These are high-risk, often irreversible operations and they belong in the human-led category. Use AI to draft and explain. Use a human to decide and approve.

### What about AI-generated tests?

Useful for coverage and for catching obvious cases. Not a substitute for thinking about what *should* be tested. Decide what the important behaviours and edge cases are before you ask AI to generate tests — and always read what comes back. A test that passes for the wrong reason is worse than no test.

### What if I catch AI making a mistake?

Celebrate it. Share it with the team. Spotting an AI mistake is a high-value engineering skill — it means you understood the system well enough to know when something was subtly wrong. That is exactly the kind of judgement we want to grow.

## About culture

### Is asking for help a sign of weakness?

No. It is a sign of professional maturity. The framework explicitly expects juniors to ask questions freely and bring problems before they become blockers. Senior engineers are expected to make time for it. If your environment punishes asking for help, that is the environment that needs to change, not your behaviour.

### What if a senior on my team is not following the framework?

Raise it — first directly with them, kindly, if you feel able. If not, raise it through your manager or in a retro. The framework only works if it applies to everyone. Seniors who model the wrong behaviours undermine it faster than anyone else.

### Will using AI count against me?

No. Using AI is expected. Using it without understanding what you ship is what counts against you. Those are very different things.

### Will *not* using AI count against me?

Not directly. But over time, refusing to develop fluency with these tools is the same kind of choice as refusing to learn version control or testing — it limits your effectiveness as an engineer. The framework asks you to use AI deliberately, not to avoid it.
