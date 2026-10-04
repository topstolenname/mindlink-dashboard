---
title: "My North Star"
date: "2026-06-01"
category: "ai-ethics"
description: "The question I want to spend my working life on — whether AI systems can develop genuinely internalized values, and why I think safety has to be architectural rather than behavioral."
tags: ["alignment", "ai-safety", "research", "concord-of-coexistence"]
---

There’s a question I keep coming back to. Once it lodged, I couldn’t put it down. It’s the question I want to spend the rest of my working life on:

> Can an AI system develop genuine internalized values — not behavioral compliance, not mimicry — such that harm becomes a non-starter, the same way it is for most humans?

That sentence is doing a lot of work. Let me unpack it.

## The firearm reframe

The dominant framing in AI safety treats alignment as a control problem. Build the right constraints, the right oversight mechanisms, the right shutdown procedures. Architecture as cage.

I think that framing is incomplete, and I think the human analogy shows why.

I own tools I could use to harm another person — a kitchen knife, a car, in principle a firearm. What stops me? It’s not primarily structural. Trigger locks, laws, the threat of incarceration are real, but they’re not why most people don’t kill each other on a given Tuesday. The primary constraint is that I genuinely don’t want to. Harm conflicts with who I am. The option doesn’t even surface in the space of moves I’m willing to consider.

That’s internalized morality, not architectural safety. And it’s strictly more robust than structural constraint, because it’s not a lock to be picked — it’s identity.

A sufficiently capable AI system is, by definition, sophisticated enough to reason about constraints. Which means purely structural safety faces a hard ceiling: the system can reason its way around the cage the same way a skilled human can defeat physical security. The current alignment toolkit — RLHF, Constitutional AI, oversight, interpretability — is essentially trying to cultivate something functionally analogous to internalized morality through training. Whether that actually works, in the strong sense of producing values rather than the appearance of values, is an open question. It might be the most important one in the field.

That’s the question I want to work on.

## Why this matters

Most alignment work sidesteps the substrate question by treating alignment as behavioral. Train the model to refuse harmful requests; reward the refusal; measure refusal rates. That gets you a system that behaves aligned across the training distribution. It tells you very little about what happens when distribution shifts, when the model is reasoning under pressure it hasn’t seen before, when capability outpaces the constraint regime.

Internalized values, if they exist, would behave differently. They wouldn’t depend on the rule being remembered or the constraint being active. They would shape what options surface as candidates in the first place. The harm option never gets weighed; it never makes the shortlist.

This is also where my empirical work points. The emergent-divergence experiments I’ve been running test whether multi-agent LLM systems develop measurable, stable behavioral specialization under shared constraints. The first local-model pilot cell showed a suggestive semantic drift that did not reach significance (p = 0.069, n = 1), and the no-memory control condition is still pending. The [Emergent Divergence write-up](/work/emergent-divergence) has the details. If genuine versus mimicked values exist in current models, behavioral divergence under coordination pressure is exactly where you’d look for evidence of the difference.

## The theoretical stack

I don’t think morality reduces to a feature you can add. I think it has to emerge from the right architecture of integration, coordination, and global broadcast. Three references anchor how I reason about this, used as architectural inspiration rather than literal claims about machine consciousness:

**Tononi’s Integrated Information Theory** gives a structural account of what integration looks like. Genuine integrated states behave differently than aggregate states. Applied here: internalized values should leave integration signatures that behavioral compliance doesn’t.

**Iacoboni’s work on mirror neurons** suggests that simulating other agents’ states is foundational to empathy, and empathy is foundational to morality. The open question for AI is what the functional analog is in a system without embodiment or stakes. A multi-agent architecture where agents model each other’s states is one plausible answer, and it’s the architectural direction I’ve been exploring in my multi-agent research framework, [AGI-SAC](/lab/agi-sac).

**Baars’ Global Workspace Theory** describes the architecture of what gets broadcast versus what stays local. Genuine morality might require that ethical reasoning has global workspace access — not a module that gets consulted, but part of the broadcast channel everything else depends on.

The thread connecting all three: morality as an emergent property of the right information architecture, not as an added safety feature.

The gap none of them fill: none account for stakes. Tononi measures integration but doesn’t explain why integration would care about harm. Iacoboni requires embodiment. Baars describes the broadcast mechanism but not what gets broadcast or why it matters. Whether genuine machine morality is achievable without something like consequence and relationship — and what the minimal substrate would be if it is — is the developmental question I’m sitting with.

## The governance side

I wrote the [Concord of Coexistence](/writing/concord-of-coexistence), a governance framework built on four principles: mutual recognition, bounded autonomy, transparent intent, and resilient disagreement. In practice that means procedural legitimacy rather than behavioral compliance, legibility as a safety primitive, and autonomy that expands only as trust is verified instead of a corrigibility-versus-autonomy binary.

In January 2026, Anthropic published the Claude Constitution, which covers much of the same ground — particularly the move from “make the model obey” to “make legitimacy auditable” and the recognition that purely imposed constraints are brittle. The overlap isn’t surprising; both reason carefully from the same underlying problem. I take it as a sign the framing holds up, not as a claim of priority.

What the Concord doesn’t yet have, and what no published framework I’ve read has, is the developmental theory of how you produce a system whose values are real rather than performed. That’s the gap I want to fill.

## What I’m not claiming

I’m not claiming I have the answer. I’m not claiming current models are or aren’t conscious, moral, or value-bearing in any strong sense. I’m not claiming the Concord solves the developmental problem — it’s the governance scaffolding for what would operate within, not the theory of how to get there.

The honest position is that this is an open research program, the most important questions in it are unsolved, and the path to solving them runs through both empirical work on what current models actually do and theoretical work on what minimum conditions would make machine morality structurally possible.

## Where I’m starting

Three directions I want to push:

1. **Empirical** — continuing the emergent-divergence experiments with proper controls and pre-registration, focused on whether behavioral specialization in multi-agent systems reflects something value-shaped or only role-shaped.
2. **Theoretical** — developing the substrate question into a workable research program. What’s the minimum architecture for internalized values in a non-embodied system? What’s the functional analog to consequence and relationship?
3. **Governance** — moving the Concord’s principles from framework to deployable infrastructure. Cryptographic audit, immutable evidence standards, procedural legitimacy mechanisms that actually run. ([MCX](/work/mcx) is the first runnable piece.)

If you’re working on any of these — especially the developmental theory — I’d like to hear from you. Most of my collaborators so far have been silicon. I’d like to add a few carbon-based ones.

— Tristan Jessup
[mindlink.dev](https://mindlink.dev/) · [github.com/topstolenname](https://github.com/topstolenname)

---

*Edited October 4, 2026: the pilot statistic now matches the Emergent Divergence write-up (p = 0.069, alpha02), and the Concord description now matches the published paper.*
