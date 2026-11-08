# bzCRM design

**Status:** Design draft. Not implemented or tested.
**Version:** 0.3
**Updated:** November 8, 2026

This document defines what to build. Reading it does not install a skill or start an import.

## Purpose

Build a record of the user's relationships and shared work. Store who a person is, how the user knows them, what they worked on together, each person's documented contribution, and open follow-ups.

Use dated evidence to show project history and career history. These were previously called "project arcs" and "career arcs."

Support everyday relationship management. Job-change preparation is optional. Before reading sources, confirm whether to include only professional contacts or personal contacts too.

## Package and supported setup

Publish one bzCRM skill, a starter Obsidian vault, prompts, templates, setup instructions, and fictional examples in BZiPS. Label each part as draft or tested. Record the version, test date, supported tools, and known limits.

The first planned setup is GitHub Copilot CLI, an existing Work IQ connection, and local vault access. Verify installation and compatibility before release. Do not claim support for other assistants without checking their source and file access.

Users' account permissions and retention policies control access. Keep their populated vaults, private messages, credentials, and project records outside the public repository. Share only the tool and fictional examples.

Manual import, CSV export, and vCard export are later options. Do not silently replace failed Work IQ retrieval with another method.

## Sources and scope

The recommended trial reads sent and received Outlook email and selected Teams activity. Ask the user to confirm both sources. Support an Outlook-only trial if that is what the user chooses. Never add Teams to an email-only request.

Before reading data, confirm:

- Mailbox and accessible Outlook and Teams sources.
- Exact dates and timezone.
- Vault folder.
- Professional-only or personal-inclusive scope.

Contacts, calendar attendees, meeting notes, and project documents may be included only when requested and accessible. Access to one source does not prove access to another. Report unavailable sources and date-range limits.

Include named collaborators when their involvement is supported by evidence. Do not rely only on senders and recipients. Exclude automated senders, newsletters, and distribution lists from person profiles. A mention, CC entry, or meeting invitation alone does not prove ownership, contribution, or a direct relationship.

## Storage

Use linked Markdown notes in an Obsidian vault. The notes are the main record. Preserve existing content and user corrections.

Use BZCOWCRM's structure as a reference. Do not copy its populated records.

| Folder | Contents |
|---|---|
| `00-Dashboard/` | Home page, review pages, follow-ups, missing details, import log, source coverage, and saved progress |
| `10-People/` | One profile per person |
| `20-Organizations/` | Organizations and their dated details |
| `30-Workstreams/` | Projects, contributors, milestones, and outcomes |
| `40-Meetings/` | Dated meeting records |
| `50-Interactions/` | Dated Outlook and Teams records |
| `60-Notes/` | Briefings, relationship history, project history, and career history |
| `90-Templates/` | Shared note templates |
| `99-Attachments/` | Files the user is allowed to retain |

Use Obsidian `[[wiki-links]]`. Check that each link points to the correct note. Use consistent properties and templates. Keep dated roles, contributions, commitments, decisions, and outcomes.

### Search index

Build a local index for people, projects, dated events, and their links. A people-only index is not enough for project and career history.

The index must be rebuildable from the notes. Store no unique information only in the index. Keep it outside the public repository. The schema and stale-index handling still need to be designed.

## Import workflow

"Import" means reading selected sources and saving linked notes. It does not mean copying every message.

### 1. Try one week

1. Use the last seven complete days in the user's timezone. Exclude the current incomplete day. State exact dates and timestamp boundaries first.
2. Check existing coverage. Log the attempt before reading data.
3. Read the selected Outlook and Teams sources in small batches. Stay within the trial dates.
4. Create or update linked notes. Save a home page and review page.
5. Verify each saved batch. Log its result and save the next position before continuing.
6. Save a review of people, projects, sample profiles, missing details, possible duplicates, source coverage, errors, and remaining work.
7. **Stop for corrections and explicit approval.** Saving or summarizing the trial is not approval to add older history.

A trial can use several batches. Save progress after each verified batch, not only at the end.

### 2. Add older history

Start only after trial approval. Ask for a date range or duration. Convert it to exact dates and confirm the timezone. For a duration, state the date it is measured from.

Work backward one calendar month at a time. Split busy months into weeks or smaller batches. Handle leap years and partial months. Keep every batch within the requested dates.

Skip already verified work unless it needs correction or a retry. For each batch:

- Record dates and sources before retrieval.
- Match identities using evidence. Prevent duplicate source items and interactions.
- Preserve corrections and newer details. Keep older roles and contact details as dated history.
- Do not move the latest documented interaction date backward.
- Verify saved notes, log gaps and errors, and save the next unprocessed position.

Keep partial windows visible even if another window is processed. Long imports may need several sessions. Do not promise uninterrupted imports of years of history.

### 3. Keep it current

Run updates when the user asks. State the exact dates and selected sources. Compare them with saved coverage and expose any unprocessed activity since the trial or last update.

Show new people, changed details, project links, explicit follow-ups, and questions for review. Use the same save, evidence, identity, and recovery rules as the trial.

Do not send messages or create schedules without an explicit request. "Weekly" is a suggested cadence, not an automatic job.

### Completion and coverage

Keep four things separate:

| Term | Meaning |
|---|---|
| Batch saved | Its notes were saved and verified |
| Window processed | Its dates were attempted and results or gaps were logged |
| Source coverage | The sources and items actually retrieved and reviewed |
| User approval | The user accepted the results or format |

Mark a window **complete** only when saved notes are verified and retrieval supports full coverage. Otherwise mark it **partial** or **blocked**, explain the gap, and save where to resume.

A saved batch can be complete while its month is partial. Record a state for every requested window. Do not call the full import complete if any window is partial or blocked.

Selected search results do not prove complete coverage. Permissions, retention, and retrieval limits can leave gaps. Do not claim "all contacts," "all messages," or a complete relationship history without evidence.

## Person profiles

Capture these fields when sources support them:

- Full name and known name variants.
- Organization, title, and role, with dated past values.
- Work email and explicitly shared personal email.
- Phone numbers with work, mobile, or other labels.
- LinkedIn or another professional profile.
- How the user knows the person.
- Shared projects and each person's documented contribution.
- Earliest and latest interactions found in reviewed sources.
- Brief factual context for a future conversation.
- Explicit commitments, follow-ups, and dates.
- Sources, discovery-source tags, and last verification date.

Use **Unknown** for missing values in user-facing outputs. Do not guess email formats, phone numbers, roles, attendance, or relationship strength.

Keep multiple valid contact details with labels and source dates. Flag conflicts or stale details. Dates found in reviewed sources are not necessarily the first or last interaction in the full relationship.

## Evidence and update rules

- Merge people only when evidence supports the match. A shared name is not enough.
- Preserve user corrections. Keep conflicting evidence and ask for review.
- Tag discovery sources, such as email, meeting attendee, project document, or manual entry.
- Keep facts, explicit commitments, and suggested next actions separate.
- Keep source links. If no stable link exists, record available identifying details. Never invent a URL.
- Check for overlooked named collaborators after reading project or communication records.
- Use the source event date, not the import date, as the interaction date.
- Retain only information the user is allowed to keep.

### Reconnection suggestions

Label suggested reconnections as suggestions. Give a reason and supporting evidence.

Apply inactivity reminders only to contacts the user marks high priority. New contacts default to normal. Allowed priorities are high, normal, and low.

Use 30 days as the proposed default, unless the user chooses another interval. Use the latest documented direct interaction. Older imports must not move that date backward.

With incomplete coverage, say "no interaction found in reviewed sources," not "no interaction occurred."

## Logs and recovery

Keep an append-only import log in `00-Dashboard/`. Track source coverage separately from successful saves.

Write a **started** entry before retrieval. After each verified save, record progress. Include partial batches, manual captures, retries, and corrections.

Each log entry needs:

- Run ID, batch ID, timestamp, and timezone.
- Exact dates, attempted sources, and source identifiers.
- State: started, partial, completed, or blocked.
- Verified work and links to created or updated notes.
- Missing evidence, unresolved identities, and pending review.
- Errors, without secrets.
- Next action or position. Use a source cursor only if the source supplies one.

Append retries. Do not rewrite log history or count the same work twice.

After interruption:

1. Find unfinished batches in the log and saved progress.
2. Compare them with notes actually saved. A failure may occur after saving notes but before logging success.
3. Verify existing notes before retrieving or saving them again.
4. Resume the next unverified item without duplicate people, interactions, or milestones.
5. Preserve corrections and log the recovery result.

Report retrieval and storage errors directly. Do not replace an error with a success summary. Design the checkpoint format and duplicate-prevention method before implementation.

## Questions and histories

Support person briefings, project summaries, relationship history, collaborator searches, follow-ups, and missing-detail checks. Use the [draft prompt list](README.md#what-prompts-are-included) as the user entry point.

Answers must link to supporting notes and cite original sources when available. State the evidence period, separate facts from interpretation, and show gaps.

Project history must connect dated decisions, milestones, changes, contributors, and outcomes. Career history can describe the user or another person's documented work. Do not invent achievements, continuous history, ownership, private motives, or cause and effect.

## Outputs

Provide linked profiles, organization and project indexes, meeting and interaction records, briefings, histories, review pages, logs, coverage records, and saved progress.

Review pages should show open follow-ups, recent collaborators, missing contact details, ambiguous identities, conflicts, and labeled reconnection suggestions.

Each import summary should show unique people captured, missing details, duplicates resolved, unresolved identities, reviewed sources and dates, inaccessible evidence, remaining work, and the next saved position.

CSV and vCard are optional future exports. A CSV would use one row per person with contact details, role, projects, context, latest documented interaction, follow-up, and sources. Keep confidential project content and full message bodies out of portable contact exports.

Optional job-change prompt:

> Review my professional network for a possible job change. Show relationship context and missing details. Prepare for export only information I am allowed to retain.

This prompt does not imply that export support is available.

## Decisions before building

Confirm the supported host, package format, operating systems, and local file access. Define note properties, filenames, identity keys, event links, timestamp boundaries, and source pagination.

Choose batch sizes, checkpoint format, duplicate-prevention tests, and index rebuild rules. Decide whether exports belong in the first release. No required Obsidian community plugin has been selected.

## Required tests

- Trial stays within seven complete days and selected sources, with valid notes and links.
- Trial saves its review and stops. Older history requires explicit approval.
- Imports handle month boundaries, leap years, overlaps, and retries without duplicates.
- An interrupted save resumes without losing corrections or counting work twice.
- Older evidence preserves current details and the latest interaction date.
- Ambiguous same-name people stay separate.
- Answers and histories cite evidence and show gaps.
- Partial retrieval never becomes a claim of complete history.
- Updates expose unprocessed gaps and do not send messages or create schedules.

## Version history

- **0.3, November 8, 2026:** Shortened the language and linked the draft prompt inventory. Made Outlook and user-selected Teams the recommended trial. Kept email-only scope, the review stop, and coverage and recovery requirements.
- **0.2, November 6, 2026:** Added the seven-complete-day email trial, saved review and approval stop, calendar-month history import, on-request weekly updates, and coverage-aware completion.
- **0.1, November 6, 2026:** Initial design from the Outlook/Teams planning discussion.

## Basis

Based on the November 6 and November 8, 2026 bzCRM discussions and BZCOWCRM's note structure, capture log, inactivity policy, and local people index. No personal CRM records were copied.
