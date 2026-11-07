# bzCRM

**Status: Coming soon. The design document is available. No working or tested skill is available yet.**

bzCRM is a planned personal relationship and project knowledge base, modeled on BZCOWCRM. It will record your professional network and the context behind each relationship:

- Who each person is and how you know them.
- Which projects you worked on together.
- What each person contributed.
- Which explicit follow-ups remain open.

It will also create **career arcs** and **project arcs** from dated evidence with source references. Career arcs will trace how your roles, skills, collaborations, and contributions developed over time. Project arcs will trace initiatives through their origins, milestones, pivots, and outcomes.

Ongoing relationship management is the default. Preparing for a possible job change will be an optional workflow, not the only purpose.

## Planned capabilities

Planned capabilities include **career and project arcs, three-phase ingestion and maintenance, natural-language querying, and recovery logging**.

Ingestion means reading accessible source information and saving linked evidence in your vault. You will review a seven-day email pilot before historical backfill. You can then request weekly updates and ask questions about people and projects. Recovery logging will record saved progress so interrupted ingestion can resume from verified checkpoints.

| Capability | Purpose |
|---|---|
| Capture and maintain | Build linked people, organization, project, meeting, and interaction records from accessible evidence |
| Query your knowledge graph | Retrieve people briefings, project summaries, relationship histories, and follow-ups |
| Create career arcs | Describe your development, or another person's documented professional history, across roles, projects, skills, and contributions |
| Create project arcs | Connect dated milestones, decisions, contributions, and outcomes into an evidence-based project history |
| Resume reliably | Log every ingestion batch and recover from the last verified checkpoint |

Answers and arcs will cite supporting notes, separate facts from interpretation, and identify gaps. They will not invent achievements, ownership, or a continuous history where evidence is missing.

## Your Starter Knowledge Graph Vault

Your CRM will live in an **Obsidian Starter Knowledge Graph Vault**, or an existing compatible vault. The knowledge graph consists of linked notes about people, organizations, projects, and interactions. Markdown notes, properties, and Obsidian links will remain the source of truth.

The structure will include people, organizations, workstreams, meetings, interactions, dashboards, templates, and supporting attachments. A rebuildable local query index will support retrieval without replacing the Markdown vault.

The shared project will provide the skill, prompts, templates, and fictional examples. Your populated vault and private records stay separate from this public repository.

## Three-phase email ingestion and maintenance

The intended users already have **Microsoft Work IQ** configured.

Before ingestion, bzCRM will ask you to confirm:

- Your mailbox and accessible sources.
- Your timezone.
- Where to save the vault.
- Whether to include personal contacts or professional contacts only.

Sent and received Outlook email is the default source. bzCRM will include Teams or other sources only when you explicitly include them and access is available.

1. **One-week pilot:** bzCRM will state exact dates first. It will process only the last seven complete days of sent and received email. It will create linked notes, a home page, and a review dashboard. It will save the review and checkpoint. It will then **stop for your corrections and explicit approval**.
2. **Historical backfill:** after approval, bzCRM will ask for your desired history range. It will ask you to confirm the exact dates. It will work backward one calendar month at a time. It will split months into weeks when volume or retrieval limits require it.
3. **Weekly maintenance:** after backfill, bzCRM will process new activity when you request it. It will report new people, changed details, project associations, explicit follow-ups, and unresolved questions. It will not send messages or create schedules unless you request them.

bzCRM will log each batch before retrieval starts. It will save a checkpoint after it verifies the saved notes. The checkpoint will record progress and the next unprocessed window.

Logs will record source coverage, partial results, errors, and note links. During recovery, bzCRM will compare unfinished batches with saved notes. It will prevent duplicate messages and interactions and preserve your corrections. Older evidence will not overwrite newer current information.

Access, retention, and retrieval limits may leave gaps. bzCRM will mark a window complete only when retrieval coverage supports it. Otherwise, it will mark the window partial or blocked and explain what remains. Selected search results do not prove that retrieval included every message or contact.

## Example requests

These describe planned workflows, not commands for an already available skill:

- "Who is Alex, how do I know her, and what have we worked on?"
- "Who contributed to this project, and what remains open?"
- "Trace this project's milestones, pivots, and outcomes."
- "Create a career arc showing how my work evolved across roles, skills, and contributions."
- "Who have I worked with on AI projects?"
- "Resume ingestion from the last verified checkpoint."

## Delivery and requirements

The planned package includes:

- An installable skill and a Starter Knowledge Graph Vault.
- Copy-ready starter and follow-up prompts.
- Setup instructions and templates.
- Fictional examples and known limitations.

GitHub Copilot CLI with Work IQ and local vault access is the recommended first host. Maintainers must still confirm installation details and compatibility. Maintainers will add support for other assistants only after they verify connector and file-access capabilities.

CSV and vCard exports are optional proposed outputs. Any capture or export must contain only information you are authorized to retain.

## Design and contributions

Read the [bzCRM design and requirements](DESIGN.md) for capture fields, source-quality rules, logging, recovery, queries, and open implementation decisions.

See the [step-by-step roadmap](ROADMAP.md) for the required files, implementation order, and release criteria.

Feedback and pull requests are welcome. See the [BZiPS contribution guide](../../CONTRIBUTING.md). The project uses the [MIT license](../../LICENSE).

[Website project page](https://bethz.github.io/bzips/projects/bzcrm/) | [BZiPS home](../../README.md)
