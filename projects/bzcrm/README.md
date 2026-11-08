# bzCRM

bzCRM is a planned tool that turns Outlook email and Teams activity into linked notes about people, shared projects, and follow-ups.

**Status: Design only. No installable skill, starter vault, or tested workflow is available yet.** The prompts below are drafts for the planned skill.

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

These are **draft requests**, not commands for an available skill. The planned skill will contain the detailed rules for each request.

| Task | Draft prompt |
|---|---|
| Try one week | "Start a bzCRM trial from Outlook and Teams. Confirm my sources, timezone, and vault folder. Read only the last seven complete days. Save the notes, review page, and progress. Stop for my review." |
| Review the trial | "Show the trial results, possible duplicates, missing details, and source gaps. Apply my corrections. Do not add older history yet." |
| Add older history | "I approve the trial. Add Outlook and Teams history from [start date] to [end date]. Confirm the dates and selected sources before you start." |
| Resume | "Resume bzCRM from the last verified save. Check unfinished work against the saved notes first." |
| Update | "Update bzCRM from my selected Outlook and Teams sources for [start date] to [end date]. Show changes, follow-ups, and gaps." |
| Prepare for a conversation | "Who is [person], how do I know them, and what have we worked on? Include open follow-ups and source links." |
| Find a collaborator | "Who have I worked with on [topic or project]? Show their documented contributions and when we last interacted in the reviewed sources." |
| Trace a project | "Show [project]'s decisions, milestones, changes, contributors, and outcomes. Cite the evidence and show gaps." |
| Review career history | "Show how my work developed across roles, projects, skills, and contributions. Use dated evidence. Do not invent achievements." |

## What skills are included?

**None are released yet.** The plan is one installable **bzCRM skill**, not a separate skill for every prompt. It will:

- Read selected sources and update linked notes.
- Answer questions about people, relationships, projects, and follow-ups.
- Build project and career histories from dated evidence.
- Save progress and resume interrupted work.

The release will also include a starter vault, note templates, setup instructions, and fictional examples. See the [build plan](ROADMAP.md) for what remains.

## Where does the information go?

Your notes stay in your own folder, outside this public repository. Obsidian displays them as linked Markdown files. You can read and edit the files without bzCRM.

The vault will contain people, organizations, projects, meetings, interactions, and review pages. A local search index can be rebuilt from those notes. It will not be the only copy of your information.

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
