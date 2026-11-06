# bzCRM

**Status: Coming soon. Design documented; no implemented or tested skill is published yet.**

bzCRM is a planned personal relationship and project knowledge base, modeled on BZCOWCRM. It will preserve your professional network and the context behind it: who people are, how you know them, what you worked on together, what each person contributed, and what needs follow-up.

It will also create **career arcs** and **project arcs** from dated, source-supported evidence. Career arcs will trace how your roles, skills, collaborations, and contributions developed over time. Project arcs will trace initiatives through their origins, milestones, pivots, and outcomes.

Ongoing relationship management is the default. Preparing for a possible job change will be an optional workflow, not the only purpose.

## What is planned

| Capability | Purpose |
|---|---|
| Capture and maintain | Build linked people, organization, project, meeting, and interaction records from accessible evidence |
| Query your knowledge graph | Retrieve people briefings, project summaries, relationship histories, and follow-ups |
| Create career arcs | Describe your development, or another person's documented professional history, across roles, projects, skills, and contributions |
| Create project arcs | Connect dated milestones, decisions, contributions, and outcomes into an evidence-based project history |
| Resume reliably | Log every ingestion batch and recover from the last verified checkpoint |

Answers and arcs will cite supporting notes, separate facts from interpretation, and identify gaps. They will not invent achievements, ownership, or a continuous history where evidence is missing.

## Your Starter Knowledge Graph Vault

Your CRM will live in an **Obsidian Starter Knowledge Graph Vault**, or an existing compatible vault. Markdown notes, properties, and Obsidian links will remain the source of truth.

The structure will include people, organizations, workstreams, meetings, interactions, dashboards, templates, and supporting attachments. A rebuildable local query index will support retrieval without replacing the Markdown vault.

The shared project will provide the skill, prompts, templates, and fictional examples. Your populated vault and private records stay separate from this public repository.

## Two-phase Outlook and Teams ingestion

The intended users already have **Microsoft Work IQ** configured.

1. **First-week capture:** ingest the most recent complete week of accessible Outlook and Teams activity, create linked records, and let you review the results.
2. **Historical backfill:** ask how many years you want to cover, confirm the exact date range, then work backward week by week without duplicating already captured work.

Every batch will be logged before retrieval starts and checkpointed after saved notes are verified. Logs will record source coverage, partial results, errors, note links, and the exact resume position. Recovery will reconcile unfinished batches with saved notes and preserve your corrections.

Access, retention, and retrieval limits may leave gaps. Processing every requested week will not be presented as proof that every message or contact was retrieved.

## Example requests

These describe planned workflows, not commands for an already available skill:

- "Who is Alex, how do I know her, and what have we worked on?"
- "Who contributed to this project, and what remains open?"
- "Trace this project's milestones, pivots, and outcomes."
- "Create a career arc showing how my work evolved across roles, skills, and contributions."
- "Who have I worked with on AI projects?"
- "Resume ingestion from the last verified checkpoint."

## Delivery and requirements

The planned package includes an installable skill, a Starter Knowledge Graph Vault, copy-ready starter and follow-up prompts, setup instructions, templates, fictional examples, and known limitations.

GitHub Copilot CLI with Work IQ and local vault access is the recommended first host. Installation details and compatibility remain to be confirmed. Other assistants will be supported only after their connector and file-access capabilities are verified.

CSV and vCard exports are optional proposed outputs. Any capture or export must contain only information you are authorized to retain.

## Design and contributions

Read the full [bzCRM design and requirements](DESIGN.md) for the capture fields, source-quality rules, logging and recovery requirements, query behavior, and open implementation decisions.

Feedback and pull requests are welcome. See the [BZiPS contribution guide](../../CONTRIBUTING.md). The project uses the [MIT license](../../LICENSE).

[Website project page](https://bethz.github.io/bzips/projects/bzcrm/) | [BZiPS home](../../README.md)
