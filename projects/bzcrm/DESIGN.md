# bzCRM design

**Status:** Packaging design with two draft skills. Live imports and agent-specific access need testing.
**Version:** 0.6
**Updated:** November 8, 2026

This document defines how to adapt the existing private CRM for friends. Reading it does not install skills or start an import.

## Purpose

Build a record of the user's relationships and shared work. Store who a person is, how the user knows them, what they worked on together, each person's documented contribution, and open follow-ups.

Use dated evidence to show project history and career history. These were previously called "project arcs" and "career arcs."

Support everyday relationship management. Job-change preparation is optional. Before reading sources, confirm whether to include only professional contacts or personal contacts too.

## Package and supported setup

Write the user guide for people who are not technical. Assume Work IQ is already connected. Use short numbered steps, exact copy-and-paste requests, and verified clicks or commands. Show the expected result and what to do if it does not appear. Explain terms such as prompt, skill, and vault. Do not require users to edit code or repeat Work IQ setup.

Adapt the current BZCOWCRM workflow. Publish two core skills, a starter Obsidian vault, prompts, templates, setup instructions, and fictional examples in BZiPS.

- `bzcrm-ingest` reads selected sources, updates notes, applies corrections, and saves progress. Trial, older history, weekly updates, manual additions, and resume are its modes.
- `bzcrm-query` reads saved notes and answers questions with evidence. It covers briefings, collaborators, follow-ups, relationship history, and draft project and career histories.

A separate `bzcrm-history` skill is optional if histories later need their own format and review workflow. Do not require a separate skill for every prompt. Keep record formats and evidence rules shared.

Label each part as draft or tested. Record the version, test date, supported tools, and known limits. Private use does not by itself verify installation on a friend's setup.

The skills use agent-neutral Markdown instructions. Users may use Copilot, Teams Copilot, Claude, or another agent. Assume Work IQ is already connected.

Check the chosen agent's source access, file tools, and persistent save destination before import. Existing Work IQ access does not prove that an agent exposes every source. Skill files do not add missing tools.

Do not start an automated import without persistent file access. Do not describe a cloud workspace as the user's hard drive. Ask can answer from user-supplied notes, but must state that limited scope.

The setup guide includes a Copilot CLI install route based on GitHub's documented commands. Other agents may use native skill setup, attached files, or pasted instructions. Verify each route before labeling it tested.

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

Start queries from linked Markdown notes. A local index is optional, not a release requirement.

The existing BZCOWCRM helper indexes people. It does not index full project or career history. Use the linked notes for those answers rather than implying the people index covers them.

Any index must be rebuildable from the notes. Store no unique information only in it. Keep it outside the public repository and document how to refresh it. Extend indexing only when queries need it.

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

Keep an append-only `00-Dashboard/ingestion-log.md` for date windows and source coverage. Keep `capture-log.md` for successful saves and `checkpoint.md` for the next position. Store all three in the private notes folder.

For "Can you ingest for bzCRM since the last time we ran?", read these files first. Check unfinished batches before newer activity. Preserve partial windows and ask for a start date if no usable log exists.

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

Use `bzcrm-query` for person briefings, project summaries, relationship history, collaborator searches, follow-ups, and missing-detail checks. Use the [draft prompt list](README.md#what-prompts-are-included) as the user entry point.

Search saved notes first. Do not silently import new source data to fill a query gap. Explain what is missing and offer a scoped capture through `bzcrm-ingest`. Query requests do not authorize changes to source profiles.

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

Reuse and verify the existing capture and coverage approach. Choose batch sizes, checkpoint format, and duplicate-prevention tests for the shared package. Define index rebuild rules only if an index is included. Decide whether exports belong in the first release. No required Obsidian community plugin has been selected.

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

## Package checks

On November 8, 2026, Copilot CLI 1.0.107 installed and discovered both skill files in an isolated project.
The skill files and setup guide passed the structural STE check.
Local documentation links and website structure passed checks.

These checks did not read a live mailbox or run an import.
Live coverage, resume behavior, and access in Teams Copilot, Claude, or other agents still need testing.

## Version history

- **0.6, November 8, 2026:** Added draft Import and Ask skills, basic setup, agent access checks, a permanent date log, and the "since the last time we ran" prompt.
- **0.5, November 8, 2026:** Set nontechnical users with Work IQ already connected as the audience. Simplified first-use steps and prompts. Required a step-by-step install guide and a nontechnical peer trial.
- **0.4, November 8, 2026:** Reframed the work as packaging the running BZCOWCRM for friends. Recommended ingest and query skills, with histories as query prompts initially. Made indexing optional and added manual-capture and follow-up prompts.
- **0.3, November 8, 2026:** Shortened the language and linked the draft prompt inventory. Made Outlook and user-selected Teams the recommended trial. Kept email-only scope, the review stop, and coverage and recovery requirements.
- **0.2, November 6, 2026:** Added the seven-complete-day email trial, saved review and approval stop, calendar-month history import, on-request weekly updates, and coverage-aware completion.
- **0.1, November 6, 2026:** Initial design from the Outlook/Teams planning discussion.

## Basis

Based on the November 6 and November 8, 2026 bzCRM discussions and BZCOWCRM's note structure, capture log, inactivity policy, and local people index. No personal CRM records were copied.
