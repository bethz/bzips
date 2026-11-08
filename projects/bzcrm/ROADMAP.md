# bzCRM: package the working CRM

**Status:** Two draft skills and a setup guide are available. Live imports and agent-specific access need testing.
**Updated:** November 8, 2026

The goal is to share the existing CRM workflow with friends, not build a new CRM from scratch.

**Audience:** People who are not technical and already have Work IQ connected. The user guide must show one action at a time, what to copy or click, and what they should see next. Explain unfamiliar words. Do not require code edits or repeat Work IQ setup.

## Four steps to share it

1. **Draft skills: done.** Import and Ask reuse the private CRM's rules. No private records are included.
2. **Basic guide: available.** Check it with each supported agent. Confirm source access and a persistent save destination.
3. **Try it with one nontechnical friend.** Use their existing Work IQ connection. Run a quick test using the past seven complete days of Outlook and Teams activity. Give the user the saved-data question below. Stop for review. Check queries, corrections, date logs, gaps, duplicates, and interrupted-run recovery.
4. **Label tested parts.** Test longer imports and history outputs. Record the agent, test date, and remaining limits.

## Which skills are needed?

These instruction files are available as drafts.

| Skill | Job |
|---|---|
| **[bzcrm-ingest](skills/bzcrm-ingest/SKILL.md)** | Read Outlook and Teams. Save notes, a permanent date log, and progress. Handle the quick test, older history, updates, corrections, and resume. |
| **[bzcrm-query](skills/bzcrm-query/SKILL.md)** | Answer from saved notes. Find people, shared work, follow-ups, histories, and processed dates. |

**Project and career histories start as query prompts.** A separate `bzcrm-history` skill is optional later.

Setup, updates, resume, duplicate checks, and index rebuilding do not need separate skills.

## Which prompts are needed?

| Skill | Draft prompt |
|---|---|
| Ingest | "Run a quick bzCRM test to check that everything needed is connected. Read the past seven complete days of Outlook and Teams activity. Save the notes and show the results for my review." |
| Query | "Use my bzCRM notes from the quick test. Show up to three people I worked with, what we worked on, and any open follow-ups. Link to the notes." |
| Ingest | "Review the test and apply my corrections." |
| Ingest | "I approve the test. Add history from [start] to [end]." |
| Ingest | "Can you ingest for bzCRM since the last time we ran?" |
| Query | "What dates have we ingested for bzCRM?" |
| Ingest | "Resume the unfinished import." |
| Ingest | "Add [person] and our work on [project] from this note." |
| Query | "Brief me on [person] before we talk." |
| Query | "Who worked with me on [topic or project]?" |
| Query | "Show open follow-ups and suggested reconnections." |
| Query | "Show the history of [project], with sources." |
| Query | "Show my career history from dated evidence." |

The [README](README.md#what-prompts-are-included) has user-facing prompts. Detailed rules belong in the skills.

## What to reuse from BZCOWCRM

- Current `bzcowcrm` workflow and vault rules.
- Person, organization, project, meeting, and interaction templates.
- Review pages, follow-ups, capture logs, and source coverage.
- Identity matching, preserved corrections, and high-priority contact reminders.

The SQLite helper indexes people, not full histories. It is optional. Start queries from linked notes; no new database is required.

## First release boundary

Start with two skills and a quick test using one week of existing history. The test checks source access, note saving, and the date log. It does not run for a week. Longer imports need approval. Test history outputs before labeling them tested. Keep source gaps visible; updates run on request.

The files are agent-neutral instructions. They do not add connectors or local file access. Use the [setup guide](SETUP.md) to check the chosen agent.

Use [GitHub Pages](https://bethz.github.io/bzips/). Certificate repair is a separate website task.
