# bzCRM: package the working CRM

**Status:** BZCOWCRM already runs privately. The public bzCRM package is not released.
**Updated:** November 8, 2026

The goal is to share the existing CRM workflow with friends, not build a new CRM from scratch.

## Four steps to share it

1. **Adapt BZCOWCRM.** Reuse its workflow and empty templates. Replace personal paths and accounts with user choices. Keep private records out.
2. **Package two skills.** Add ingest and query skills, shared note rules, a starter vault, and a short install guide.
3. **Try it with one friend.** Use a verified Copilot CLI and Work IQ setup. Read one week of selected Outlook and Teams activity. Stop for review. Check queries, corrections, gaps, duplicates, and interrupted-run recovery before adding older history.
4. **Publish.** Include prompts and tested setup instructions. State what remains incomplete.

## Which skills are needed?

These are proposed public skill names, not files already released.

| Skill | Job |
|---|---|
| **`bzcrm-ingest`** | Read Outlook and Teams. Create or update notes. Handle trial, older history, updates, manual additions, corrections, and resume. Show progress and gaps. |
| **`bzcrm-query`** | Answer from saved notes. Find people, shared work, contributions, and follow-ups. Prepare briefings and histories with sources. |

**Project and career histories start as query prompts.** A separate `bzcrm-history` skill is optional later.

Setup, updates, resume, duplicate checks, and index rebuilding do not need separate skills.

## Which prompts are needed?

| Skill | Draft prompt |
|---|---|
| Ingest | "Run the one-week Outlook and Teams trial. Stop for review." |
| Ingest | "Review the trial and apply my corrections." |
| Ingest | "I approve the trial. Add history from [start] to [end]." |
| Ingest | "Update my CRM from [start] to [end]." |
| Ingest | "Resume the unfinished import." |
| Ingest | "Add [person] and our work on [project] from this note." |
| Query | "Brief me on [person] before we talk." |
| Query | "Who worked with me on [topic or project]?" |
| Query | "Show open follow-ups and suggested reconnections." |
| Query | "Show the history of [project], with sources." |
| Query | "Show my career history from dated evidence." |

The [README](README.md#what-prompts-are-included) has fuller prompts. Detailed rules belong in the skills.

## What to reuse from BZCOWCRM

- Current `bzcowcrm` workflow and vault rules.
- Person, organization, project, meeting, and interaction templates.
- Review pages, follow-ups, capture logs, and source coverage.
- Identity matching, preserved corrections, and high-priority contact reminders.

The SQLite helper indexes people, not full histories. It is optional. Start queries from linked notes; no new database is required.

## First release boundary

Start with two skills and a one-week trial. Longer imports need approval. Test history outputs before labeling them tested. Keep source gaps visible; updates run on request.

Use [GitHub Pages](https://bethz.github.io/bzips/). Certificate repair is a separate website task.
