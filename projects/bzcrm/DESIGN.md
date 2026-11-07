# bzCRM design and requirements

**Status:** Design draft for review. Not an implemented or tested skill.
**Version:** 0.2
**Documented:** November 6, 2026

This document captures the agreed direction before implementation begins. It does not initiate ingestion, create a populated CRM, or install a skill.

## Purpose

bzCRM is a personal relationship and project knowledge base, not just a contact extractor. It preserves professional network context: who someone is, how the user knows them, what they worked on together, what each person contributed, and what needs follow-up.

Ongoing relationship management is the default. Before capture, confirm whether the vault is professional-only or includes personal contacts. Preparing for a possible job change is an optional workflow, not the sole purpose.

The skill has three layers:

1. Capture and maintain sourced knowledge.
2. Query and retrieve people, project, and relationship information.
3. Synthesize source-supported briefings, project arcs, and career arcs.

## Delivery and sharing

Publish bzCRM within the public BZiPS repository, in its own project folder, with:

- An installable skill containing the repeatable workflow and operating rules.
- An Obsidian **Starter Knowledge Graph Vault**.
- Copy-ready starter and follow-up prompts.
- Setup instructions, supported-tool requirements, templates, and fictional example inputs and outputs.
- Known limitations, version history, and honest draft/tested labels.

Friends and peers can use the website to discover the project and access the files and instructions. Contributors can propose changes through GitHub pull requests. BZiPS uses the MIT license.

The public project shares tooling, structure, and fictional examples. Users' populated vaults, contact records, private communications, credentials, and confidential project material are not published with it.

Target users already have Work IQ configured. Their own account, tenant permissions, retention policies, and available retrieval capabilities determine which Outlook and Teams evidence they can access.

The recommended first implementation host is GitHub Copilot CLI with Work IQ and local vault access. Host-specific packaging and compatibility still need confirmation before implementation. Do not claim support for Scout or other assistants until their connector and file-access capabilities are verified.

A manual-import route for information users are permitted to export or paste is a proposed later option, not a substitute silently used when Work IQ retrieval fails.

## Storage: an Obsidian knowledge graph

Use BZCOWCRM's structure and operating approach as the example. Do not copy its populated records.

Obsidian Markdown notes, properties, and internal links are the source of truth. Users may create a new Starter Knowledge Graph Vault or point the skill at an existing compatible vault. Preserve their corrections and existing content.

| Folder | Contents |
|---|---|
| `00-Dashboard/` | Searchable indexes, follow-ups, missing-information views, ingestion logs, coverage, and resume checkpoints |
| `10-People/` | One profile per person, with supported identity disambiguation |
| `20-Organizations/` | Company and organization profiles, with dated organizational context |
| `30-Workstreams/` | Projects and collaboration threads linked to people, organizations, milestones, and outcomes |
| `40-Meetings/` | Dated meeting evidence and attendee context |
| `50-Interactions/` | Dated email and Teams interaction evidence |
| `60-Notes/` | Briefings, synthesized histories, and project/career arcs |
| `90-Templates/` | Consistent note and capture templates |
| `99-Attachments/` | Supporting files the user is authorized to retain |

Use valid Obsidian `[[wiki-links]]` to connect people, organizations, workstreams, meetings, and interactions. Verify that generated links resolve to the intended notes. Create a home page and review dashboard, and use consistent templates and shared property conventions across note types. Preserve dated roles, contributions, commitments, milestones, pivots, and outcomes so historical arcs can be reconstructed.

### Query index

Use a rebuildable local query index rather than moving the vault into a database. BZCOWCRM's existing SQLite approach indexes people frontmatter; that alone does not support the full project and career-arc requirements.

The bzCRM index must support the relevant people, workstreams, dated events, and relationships. Exact schema and rebuild/staleness handling remain implementation decisions. Keep the derived index out of the public repository and make it regenerable from the vault.

All durable updates belong in the Markdown records. Do not store unique knowledge only in the index.

## Discovery and ingestion sources

The default ingestion source is sent and received Outlook email through the user's existing Work IQ connection. Teams remains an optional supported source when the user explicitly includes it and access is available. Do not silently expand an email-only request into Teams or other sources.

Other sources may include contacts, calendar attendees, meeting notes, chats, and project documents when both accessible and within the user's confirmed scope. Access to one source does not imply access to all of them.

Include colleagues, former colleagues, customers, partners, vendors, mentors, and other professional collaborators. Do not rely only on email senders and recipients. Include meeting attendees and named collaborators in project deliverables, thank-you messages, and recognition notes when evidence supports their involvement.

Exclude automated senders, newsletters, and distribution lists from individual profiles. A mention, CC entry, or shared meeting attendance does not by itself prove ownership, contribution, or a direct relationship.

Before starting, confirm the mailbox and accessible sources, the user's timezone, where to save the vault, and whether to include personal contacts or professional contacts only. Identify source-specific date-range limits and report unavailable sources explicitly. Ask only for information needed to proceed.

## Three-phase ingestion

### Phase 1: one-week pilot

1. Identify the last seven complete days in the confirmed timezone, excluding the current incomplete day. State the exact start/end dates and timestamp boundaries before extraction. This is a rolling seven-day window, not necessarily a calendar week.
2. Check whether that window was already captured.
3. Log the ingestion attempt before retrieval begins.
4. Retrieve sent and received email in manageable batches within the stated window. Include other sources only if explicitly within the confirmed scope. Do not expand beyond the pilot window.
5. Create or update linked people, organizations, workstreams, and dated interaction notes without overwriting user corrections. Create the home page and review dashboard.
6. After each saved and verified batch, append a completion or partial-progress entry and save its resume position.
7. Save a review showing people and workstreams created, representative linked profiles, missing details, possible duplicates, exact sources and dates processed, retrieval limits, failures, and remaining coverage.
8. Save the review and persistent checkpoint in the vault, then **STOP**. Wait for the user's corrections and explicit approval before historical backfill. An ingestion summary is not approval.

A seven-day pilot may require multiple batches. Do not postpone recovery logging until the entire pilot finishes.

### Phase 2: historical backfill

Only after pilot approval, ask for the user's desired history range. Accept explicit dates or a duration, including a number of years.

Translate the answer into an explicit date interval and confirm its boundaries and timezone. If given a duration, state the anchor date. Do not treat a year as a fixed number of weeks. Handle leap years and partial boundary months.

Work backward **one calendar month at a time** within that interval. Split a month into weeks or smaller batches when volume or retrieval limits require it. Clip each window to the requested interval and exclude already verified work, including the Phase 1 pilot, unless a correction or retry is required.

For every batch:

- Record the exact window and sources attempted.
- Capture and verify manageable batches.
- Merge into existing records using supported identity matching.
- Deduplicate source messages and dated interactions across batches, including pilot/backfill boundaries and retries.
- Preserve newer roles and details; retain older values as dated history.
- Do not move latest evidenced interaction dates backward.
- Log completion, partial work, gaps, errors, and the next resume position.
- Save the next unprocessed window and any unresolved coverage gaps before proceeding. A partial window must remain visible for recovery even if other windows are processed.

Historical backfill may span multiple sessions. Do not promise that one prompt will run uninterrupted for years of history.

### Phase 3: weekly maintenance

After backfill, support weekly processing of new activity when invoked by the user. State the exact window, reconcile it with existing coverage, and capture any unprocessed gap so activity since the pilot is not silently lost.

Report new people, changed details, project associations, explicit follow-ups, and unresolved questions. Apply the same templates, source-quality rules, deduplication, correction preservation, and batch logging as earlier phases.

Do not send messages or create schedules unless the user explicitly requests them. "Weekly maintenance" describes the intended review cadence, not automatic authorization for a scheduled job.

### What completion means

Keep these separate:

- **Batch saved:** the identified notes were persisted and verified.
- **Window processed:** the defined pilot, month, week, or smaller batch was attempted and its results and gaps were recorded. This does not necessarily mean complete coverage.
- **Coverage:** what sources and items were actually retrieved and reviewed.
- **User approval:** the user reviewed and accepted a result or format.

Mark a window **complete** only when retrieval coverage supports it and its saved notes have been verified. Otherwise mark it **partial** or **blocked**, explain what remains, and preserve the recovery position. A saved batch may be complete while the containing month remains partial.

The historical run is accounted for only when every requested window has a recorded state. If any windows remain partial or blocked, do not label the backfill complete. Exhaustive retrieval must never be inferred merely from selected search results or from attempting every window.

Work IQ retrieval limits, permissions, retention, and inaccessible content may prevent complete coverage. Do not claim "all contacts," "all messages," or complete history without supporting evidence.

## Required person information

Capture only values supported by identified sources:

- Full name and known name variations.
- Organization, title, and role, retaining dated past roles and organizations.
- Work email and any explicitly shared personal email.
- Phone numbers, labeled mobile/work/other when known.
- LinkedIn or other professional profile, if available.
- How the user knows the person.
- Shared projects, accounts, or workstreams.
- The person's specific documented contribution or responsibility.
- Earliest and latest documented interactions found in reviewed sources.
- Brief factual relationship context and useful conversation reminders.
- Explicit commitments, outstanding follow-ups, and dates.
- Source references, discovery-source tags, and date last verified.

Never guess email formats, phone numbers, roles, attendance, or relationship strength. Mark unavailable information as **Unknown** in user-facing outputs. These earliest/latest dates describe reviewed evidence, not necessarily the entire relationship.

Preserve multiple valid contact details with labels and source dates. Flag conflicting or potentially outdated information instead of silently choosing a value.

## Quality and maintenance rules

- Merge duplicate identities only when evidence supports the match. Do not merge people simply because they share a name.
- Retain user corrections. Preserve conflicting source evidence and flag it for review.
- Tag discovery sources, such as email, meeting-attendee, project-document, or manual.
- Separate documented facts, explicit commitments, and suggested next actions.
- Do not send messages or create schedules without an explicit user request.
- Capture only information the user is authorized to retain, regardless of whether it belongs in a note or an export.
- Keep source references wherever practical. If a source lacks a durable link, preserve its available identifying metadata without fabricating a URL.
- After project or communication capture, check for overlooked named collaborators.
- Surface missing contact details and ambiguous identities for review.
- Do not treat extraction dates as interaction dates.

### Relationship drift and reconnections

Suggested reconnections must be labeled suggestions, with reasons and evidence.

Drift reminders apply only to user-selected high-priority contacts. New records default to normal priority; allowed values are high, normal, and low.

Follow BZCOWCRM's example default of 30 days unless the user chooses another cadence. Use the latest evidenced direct interaction date. Historical backfill must not move that date backward.

When coverage is incomplete, say **"no interaction found in reviewed sources"**, not **"no interaction occurred."**

## Logging, checkpoints, and failure recovery

Maintain an append-only ingestion log in `00-Dashboard/`, modeled on BZCOWCRM's capture log. Keep source-coverage tracking distinct from successful-save logging.

Write a **started** entry before retrieval. Append a checkpoint after every ingestion batch is saved and verified, including manual captures, partial batches, retries, and corrections.

Each entry should record:

- Run/capture ID and batch ID.
- Timestamp and timezone.
- Exact ingestion date window.
- Sources attempted and identifying source references.
- Status: started, partial, completed, or blocked.
- Verified work, with created/updated note links.
- Missing or inaccessible evidence, unresolved identities, and pending user review.
- Error details when applicable, without secrets.
- Exact next action or resume position, including retrieved pagination/cursor information only when the source actually provides it.

Keep successful saves, coverage, and approval distinct. Append retries rather than rewriting history or double-counting earlier work.

### Recovery behavior

An abrupt failure may prevent a final log entry. Its started entry and last verified checkpoint must remain useful.

On restart:

1. Identify unfinished batches from the persisted log and checkpoint.
2. Reconcile the log with notes actually saved, because a crash may occur between saving notes and recording completion.
3. Verify existing artifacts before deciding to retrieve or save them again.
4. Resume from the next unverified work item without duplicating identities, interactions, or milestones.
5. Preserve corrections and append the recovery outcome to the log.

Do not mark work complete before saved notes are verified. Surface errors explicitly; never substitute a success-shaped summary for failed retrieval or storage.

The exact checkpoint format and deduplication mechanism will be designed before implementation.

## Querying and synthesis

| Capability | Example request |
|---|---|
| People intelligence | "Who is Alex, how do I know her, and what have we worked on?" |
| Project intelligence | "Who contributed to this project, what happened, and what remains open?" |
| Relationship history | "Show my collaboration with this person across projects and organizations." |
| Project arcs | "Trace this initiative from its origin through milestones, pivots, and outcomes." |
| Career arcs | "How has my work evolved across roles, projects, skills, and contributions?" |
| Network discovery | "Who have I worked with on AI projects, and when did we last connect?" |
| Data quality | "Which contacts have missing emails or conflicting roles?" |

Answers must link to supporting vault notes and cite underlying sources when available. Distinguish facts from interpretation, state the evidence period, and identify gaps.

Project and career arcs require dated events and contributions, not just current profiles. Do not invent continuity, achievements, ownership, private motives, or causality between events.

Career arcs can describe the user's own development or another person's documented professional history. Keep summaries within the evidence available to the user.

## Outputs and exports

Primary outputs:

- Individual linked Markdown profiles.
- Organization and project-to-people indexes.
- Dated meeting and interaction records.
- Searchable dashboards and query support.
- Source-supported briefings, relationship histories, and project/career arcs.
- Capture logs, coverage records, and resumable progress.

Dashboard views should include active follow-ups, recent collaborators, missing email/phone details, ambiguous identities, conflicting details, and clearly labeled reconnection suggestions.

Optional exports:

- Master contacts CSV, one row per person, with contact details, organization, role, shared projects, relationship context, latest evidenced interaction, follow-up, and sources.
- Portable address-book file, such as vCard, if supported.

Keep confidential project content and full email bodies out of portable contact exports. An export for job-transition purposes must contain only information the user is authorized to retain.

Each ingestion summary should state unique people captured, missing contact details, duplicates resolved, unresolved identities, actual sources/date windows reviewed, inaccessible evidence, remaining work, and next checkpoint.

## User-facing entry prompts

### First capture

> Create my personal Obsidian CRM in a Starter Knowledge Graph Vault from email, building relationship context rather than just a contact list. Confirm my mailbox, accessible sources, timezone, vault location, and whether to include personal contacts. Process only the last seven complete days of sent and received email, stating exact dates first. Log every batch, save a linked review and checkpoint, then stop for my corrections and approval before asking for my historical range.

### Resume

> Resume bzCRM ingestion from the last verified checkpoint. Reconcile any unfinished batches with the saved notes before continuing.

### Historical backfill

> After my pilot approval, ask for my desired history range and confirm the exact dates. Work backward one calendar month at a time, splitting into weeks when needed. Preserve corrections, deduplicate messages and interactions, and checkpoint every batch. Keep incomplete coverage marked partial.

### Weekly maintenance

> Update my bzCRM from new email activity for an explicit weekly window. Report new people, changed details, project associations, follow-ups, and unresolved questions. Save the review and checkpoint. Do not send messages or create schedules.

### Query

> Use my bzCRM vault to brief me on this person or project. Cite the supporting notes and distinguish documented facts from interpretation.

### Job-transition preparation

> Use my bzCRM vault to review my professional network and relationship context for a possible job change. Identify gaps and prepare only the contact information I am authorized to retain for export.

These are proposed launch prompts. The detailed workflow belongs in the skill, so users do not need to paste the entire capture specification every time.

## Open implementation decisions

Before building, confirm:

- The initial supported host, installation/package format, and required local file-access capabilities.
- Exact property schema, filenames, identity keys, and relationship/event indexing.
- Exact timestamp-boundary conventions, calendar-month splitting, and how the user confirms the historical date interval.
- Source-specific retrieval/pagination capabilities and how unexhausted windows are represented.
- The checkpoint format, batch sizing, and recovery/deduplication tests.
- Whether CSV/vCard exports ship initially or later.

No required Obsidian community plugin has been selected. Do not introduce one silently.

## Review scenarios for implementation

- A seven-complete-day email pilot confirms mailbox, scope, timezone, and destination; creates valid linked notes and a home/review dashboard; and never expands the stated window.
- Phase 1 saves its review and checkpoint, then stops. Phase 2 cannot start without explicit approval.
- Backfill confirms the requested interval and handles calendar-month windows, weekly subdivisions, pilot overlap, and partial boundary months without duplicate messages or interactions.
- A failure after some notes are saved can resume without losing corrections or double-counting.
- Older evidence does not overwrite newer role/contact history or move latest-interaction dates backward.
- Same-name people remain separate when identity is ambiguous.
- People and project queries return cited answers; arcs explicitly identify evidence gaps.
- A processed date interval with partial retrieval stays partial and is never described as complete or exhaustive history.
- Weekly maintenance captures new activity and exposes gaps without sending messages or creating schedules.

## Version history

- **0.2, November 6, 2026:** Adopted the revised email-first, three-phase workflow. Changed the pilot to the last seven complete days, added an explicit saved-review/approval stop, changed historical backfill to calendar months with weekly subdivisions, and added user-invoked weekly maintenance and coverage-aware completion.
- **0.1, November 6, 2026:** Initial design, based on the earlier two-phase Outlook/Teams weekly-backfill discussion.

## Basis

This design reflects the November 6, 2026 bzCRM planning discussion and the structure, capture-completion logging, relationship-drift policy, and rebuildable people-index approach documented in BZCOWCRM.

It contains no copied personal CRM records. This is the review document; implementation begins only after review.
