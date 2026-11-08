# bzCRM

bzCRM packages BZCOWCRM's existing personal CRM workflow for friends. It turns Outlook email and selected Teams activity into linked notes about people, shared projects, and follow-ups.

**Status: Public package not released.** BZCOWCRM already runs privately. Installable bzCRM skills, a starter vault, and verified setup instructions are not available yet. The prompts below are drafts for that shared package.

## More than a contact list

1. **Remember how you know someone.** Keep shared work and relationship history, not just a name and email.
2. **See who did what.** Connect people to project decisions, contributions, and outcomes.
3. **Prepare for the next conversation.** Review shared history, open commitments, and follow-ups in one briefing.
4. **Find the right person for new work.** Ask who you worked with on a topic or project, with evidence for the match.
5. **Show how your work developed.** Build a dated career history from projects, roles, and contributions, with source links.

## Simple setup

The first release is planned for GitHub Copilot CLI with Work IQ already connected and a local Obsidian vault. Installation steps still need to be verified.

1. **Choose your sources and folder.** Confirm your mailbox, Outlook and Teams access, timezone, and where to save the notes. Choose professional contacts only or include personal contacts.
2. **Try one week.** Read the last seven complete days of sent and received Outlook email and the Teams activity you select. Save linked notes and a review page. Stop.
3. **Check the results.** Open the notes in Obsidian. Check names, shared projects, source links, and follow-ups. Correct mistakes and review missing source data.
4. **Add older history.** When you approve the trial, choose an exact date range. Read older activity one calendar month at a time. Split busy months into smaller batches.
5. **Keep it current.** Request an update each week. Ask questions about people and projects at any time after notes are saved.

Start small. Do not import years of history until the one-week trial gives you useful results.

## What prompts are included?

These are **draft requests**, not commands for released bzCRM skills. The skills will contain the detailed rules for each request.

| Task | Skill | Draft prompt |
|---|---|---|
| Try one week | Ingest | "Start a bzCRM trial from Outlook and Teams. Confirm my sources, timezone, and vault folder. Read only the last seven complete days. Save the notes, review page, and progress. Stop for my review." |
| Review the trial | Ingest | "Show the trial results, possible duplicates, missing details, and source gaps. Apply my corrections. Do not add older history yet." |
| Add older history | Ingest | "I approve the trial. Add Outlook and Teams history from [start date] to [end date]. Confirm the dates and selected sources before you start." |
| Resume | Ingest | "Resume bzCRM from the last verified save. Check unfinished work against the saved notes first." |
| Update | Ingest | "Update bzCRM from my selected Outlook and Teams sources for [start date] to [end date]. Show changes, follow-ups, and gaps." |
| Add a collaborator | Ingest | "Add [person] and our work on [project] from this note. Keep the source and flag missing details." |
| Prepare for a conversation | Query | "Who is [person], how do I know them, and what have we worked on? Include open follow-ups and source links." |
| Find a collaborator | Query | "Who have I worked with on [topic or project]? Show their documented contributions and when we last interacted in the reviewed sources." |
| Review follow-ups | Query | "What follow-ups are open? Which contacts I marked high priority may need a reconnection? Show source dates and coverage gaps." |
| Trace a project | Query | "Show [project]'s decisions, milestones, changes, contributors, and outcomes. Cite the evidence and show gaps." |
| Review career history | Query | "Show how my work developed across roles, projects, skills, and contributions. Use dated evidence. Do not invent achievements." |

## What skills are included?

**No public bzCRM skills are released yet.** The recommended package has two core skills:

| Proposed skill | Purpose |
|---|---|
| **`bzcrm-ingest`** | Read selected sources, create and update notes, apply corrections, and save progress. Trial, older history, weekly updates, and resume are modes of this skill. |
| **`bzcrm-query`** | Answer questions from saved notes, prepare briefings, find collaborators, and show follow-ups and histories with evidence. |

Project and career histories start as query prompts. A separate `bzcrm-history` skill is optional later, not required to get started.

The release will also include a starter vault, note templates, setup instructions, and fictional examples. See the [build plan](ROADMAP.md) for what remains.

## Where does the information go?

Your notes stay in your own folder, outside this public repository. Obsidian displays them as linked Markdown files. You can read and edit the files without bzCRM.

The vault will contain people, organizations, projects, meetings, interactions, and review pages. An optional local search index can be rebuilt from those notes. It will not be the only copy of your information.

## What should I know before using it?

- **Source access can be incomplete.** Work IQ permissions, retention, and retrieval limits affect what bzCRM can read. It must show gaps, not claim to have read every message.
- **Answers need evidence.** A name on a CC list does not prove a relationship, contribution, or project role.
- **Your corrections stay.** New imports must preserve your edits. Older records must not replace newer details.
- **Updates are on request.** bzCRM will not send messages or create a schedule unless you ask.
- **Exports are a later option.** CSV and vCard are proposed, not delivered. Retain or export only information you are allowed to keep.

## More detail

[Design and requirements](DESIGN.md) | [Build plan](ROADMAP.md) | [Website](https://bethz.github.io/bzips/projects/bzcrm/)

Feedback and pull requests are welcome. See the [contribution guide](../../CONTRIBUTING.md) and [MIT license](../../LICENSE).

[BZiPS home](../../README.md)
