# bzCRM

bzCRM packages BZCOWCRM's existing personal CRM workflow for friends. It turns Outlook email and selected Teams activity into linked notes about people, shared projects, and follow-ups.

**Status: Draft skills available.** BZCOWCRM already runs privately. The shared Import and Ask instructions are ready to try. Live imports and each agent's access still need testing.

## More than a contact list

1. **Remember how you know someone.** Keep shared work and relationship history, not just a name and email.
2. **See who did what.** Connect people to project decisions, contributions, and outcomes.
3. **Prepare for the next conversation.** Review shared history, open commitments, and follow-ups in one briefing.
4. **Find the right person for new work.** Ask who you worked with on a topic or project, with evidence for the match.
5. **Show how your work developed.** Build a dated career history from projects, roles, and contributions, with source links.

## Simple setup

**Work IQ is already set up. You do not need to set it up again.**

You may use Copilot, Teams Copilot, Claude, or another agent with the needed access. The agent must read your chosen sources and save files. The skills do not add missing access.

Follow [Start bzCRM](SETUP.md) to add the instructions and check access. You will not need to edit code. Obsidian is an optional app for reading the notes. Its "vault" is just your notes folder.

**After installation, start here:**

1. **Copy this request into your assistant:**

   > Run a quick bzCRM test to check that everything needed is connected. Read the past seven complete days of Outlook and Teams activity. Save the notes and show the results for my review.

2. **Answer its questions.** It will ask which mailbox and Teams activity to use, your timezone, and where to save the notes. Choose work contacts only, unless you also want personal contacts. It will show the dates before it starts.
3. **Try your saved data.** Copy this request:

   > Use my bzCRM notes from the quick test. Show up to three people I worked with, what we worked on, and any open follow-ups. Link to the notes.

4. **Check the answer.** Are the names and shared projects right? Open the note links. Tell it what to correct. Fewer than three people is fine if the saved data supports fewer.
5. **Add more when you are happy with the test.** For example: "I approve the test. Add the last three months. Confirm the dates before you start."
6. **Keep it up to date.** Ask: "Can you ingest for bzCRM since the last time we ran?" It will read the saved log first. You can also ask about a person or project.

The quick test checks your selected sources and ability to save and reopen notes and the date log. It uses one week of existing history, not a week of running time. It stops for your review before adding older history.

## What prompts are included?

These are requests for the **draft skills**. A prompt is simply a request you type or paste into your assistant. Replace words in brackets with your own names or dates.

| Task | Skill | Draft prompt |
|---|---|---|
| Quick test | Import | "Run a quick bzCRM test to check that everything needed is connected. Read the past seven complete days of Outlook and Teams activity. Save the notes and show the results for my review." |
| Try your saved data | Ask | "Use my bzCRM notes from the quick test. Show up to three people I worked with, what we worked on, and any open follow-ups. Link to the notes." |
| Review the test | Import | "Show the test results and anything missing. Apply my corrections." |
| Add older history | Import | "I approve the test. Add the last three months. Confirm the dates before you start." |
| Continue after a stop | Import | "Continue the unfinished import from where you stopped." |
| Update | Import | "Can you ingest for bzCRM since the last time we ran?" |
| Check processed dates | Ask | "What dates have we ingested for bzCRM?" |
| Add someone | Import | "Add [person] and our work on [project] from this note." |
| Prepare for a conversation | Ask | "Who is [person], how do I know them, and what should I know before we talk?" |
| Find someone | Ask | "Who worked with me on [topic or project], and what did they do?" |
| Review follow-ups | Ask | "What follow-ups are open? Who have I marked as important to keep in touch with?" |
| Show a project's history | Ask | "Show what happened on [project], who contributed, and the results. Include sources." |
| Show career history | Ask | "Show how my work developed across roles and projects. Include dated examples." |

## What skills are included?

Two **draft skills** are available. A skill is a set of instructions that tells your assistant how to do a job.

| Skill | Purpose |
|---|---|
| **[Import: `bzcrm-ingest`](skills/bzcrm-ingest/SKILL.md)** | Read the Outlook and Teams activity you choose. Save notes, corrections, a date log, and progress. Continue after an interruption. |
| **[Ask: `bzcrm-query`](skills/bzcrm-query/SKILL.md)** | Answer from saved notes. Find people, explain shared work, show follow-ups and history, and report processed dates. |

Project and career histories start as query prompts. A separate `bzcrm-history` skill is optional later, not required to get started.

Import contains instructions to create the notes folder and templates. Both skills are single files. See the [setup guide](SETUP.md) and [build plan](ROADMAP.md).

## Where does the information go?

Your data is saved as plain-text Markdown files (`.md`) in a folder on your hard drive, outside this public repository. You can read and edit them in any text editor, or copy them to another computer. This keeps the data simple and portable, without requiring bzCRM or a database to read it.

This requires an agent with access to that folder. A cloud agent may use a different location. Check the save destination first.

Links such as `[[Alex Example]]` and `[[Example Project]]` connect related notes. In Obsidian, these `[[wikilinks]]` let you follow connections between people, projects, meetings, and interactions. Together, the linked notes form a knowledge graph: a record of both the information and how it connects.

The vault will contain people, organizations, projects, meetings, interactions, and review pages. An optional local search index can be rebuilt from those notes. It will not be the only copy of your information.

## What dates did it read?

Import creates and maintains `00-Dashboard/ingestion-log.md` in your notes folder. It records each date range and source. It marks incomplete work as partial or blocked.

Ask: "What dates have we ingested for bzCRM?" To continue, ask: "Can you ingest for bzCRM since the last time we ran?"

The agent checks the saved log and progress before continuing. A saved note does not mean that every message in that period was read.

## What should I know before using it?

- **Some information may be missing.** Work IQ may not be able to read everything. bzCRM must tell you what is missing.
- **Check important details.** Answers should link to the notes or messages they came from. Being copied on an email does not prove someone worked on a project.
- **Your corrections stay.** New imports must preserve your edits. Older records must not replace newer details.
- **Updates are on request.** bzCRM will not send messages or create a schedule unless you ask.
- **Exports are a later option.** CSV and vCard are proposed, not delivered. Retain or export only information you are allowed to keep.

## More detail

[Setup](SETUP.md) | [Design and requirements](DESIGN.md) | [Build plan](ROADMAP.md) | [Website](https://bethz.github.io/bzips/projects/bzcrm/)

Feedback and pull requests are welcome. See the [contribution guide](../../CONTRIBUTING.md) and [MIT license](../../LICENSE).

[BZiPS home](../../README.md)
