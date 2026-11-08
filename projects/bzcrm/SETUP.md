# Start bzCRM

**Status: Draft.** The skills are available. Imports still need testing with a user's own account.

You already have Work IQ. Do not set it up again.

You can use an agent that can read your chosen sources and save your notes.
The instructions do not add missing access.

## 1. Give your agent the instructions

Open the [Import instructions](skills/bzcrm-ingest/SKILL.md).
Open the [Ask instructions](skills/bzcrm-query/SKILL.md).

If your app lets you add a skill, use its skill setup option.
Otherwise, copy the instructions into your conversation.
You can also attach the files if your app supports them.

Start with Import. Use Ask when you want answers from saved notes.
If you start a new conversation, provide the instructions again unless your app saved them.

Copilot CLI users can use the commands below instead.
Claude users can follow [Claude's skill guide](https://support.claude.com/en/articles/12512180-use-skills-in-claude).
For Teams Copilot or another app, use the options your app actually provides.
Do not assume that every app can install skill files.

## 2. Check access before importing

Copy this request:

> Use the bzCRM Import instructions. Do not import yet. Can you read my Outlook and Teams activity? Can you save and reopen notes and a date log in my own folder?

The agent must tell you what it can read and where it can save.

If it cannot save files, do not start the automated import.
Choose an agent with file access.
Chat memory is not a saved log.
An agent's cloud folder is not automatically a folder on your hard drive.

The Ask instructions can also answer from notes you provide.
That answer covers only those notes, not your whole CRM.

## 3. Run a quick test to check connections

Check that the agent can read your activity and save useful notes.
Check that it can reopen the notes and date log.
The quick test uses one week of existing history. It does not run for a week.

Copy this request:

> Run a quick bzCRM test to check that everything needed is connected. Read the past seven complete days of Outlook and Teams activity. Save the notes and show the results for my review.

Answer the questions about your mailbox, selected Teams activity, timezone, and notes folder.
Choose work contacts only unless you also want personal contacts.

The agent will state the dates before it starts.
It will read only the last seven complete days.
It will create notes, a review page, and a saved date log.

## 4. Try your saved data

Copy this request:

> Show the test results and anything missing.

Then use the Ask instructions with this request:

> Use my bzCRM notes from the quick test. Show up to three people I worked with, what we worked on, and any open follow-ups. Link to the notes.

Expect a short answer with people, shared work, follow-ups, and note links.
This shows what the saved data can tell you, beyond names and email addresses.
Fewer than three people is fine if the data supports fewer.
Missing projects or follow-ups must stay missing, not become guesses.

Check the names and shared work.
Open the note links to check the answer.
Tell the agent what to correct.
It must show information it could not read.

If you use Obsidian, open your notes folder as a vault.
A vault is just a folder of notes.
You can also read the `.md` files with a text editor.

## 5. Add older history

When you are happy with the test, copy this request:

> I approve the test. Add the last three months. Show the dates and wait for my approval before you start.

Change "three months" to the period you want.
The agent will work in small batches and save its progress.
Do not add years of history before checking the test.

## 6. Continue on another day

Use the same notes folder.
Copy this request:

> Can you ingest for bzCRM since the last time we ran?

The agent will read the saved date log and checkpoint.
It will check unfinished work before adding new activity.
It must show incomplete date ranges, not hide them.

To check the log, ask:

> What dates have we ingested for bzCRM?

The log is `00-Dashboard/ingestion-log.md` inside your notes folder.
It shows the dates and sources, including partial or blocked work.

## Optional: install in Copilot CLI

These commands run inside Copilot CLI, not in a normal chat app.
They add the two public instruction files as personal skills.
Work IQ must already be available to that CLI session.

1. Copy this command into Copilot CLI:

   ```text
   /skills add https://raw.githubusercontent.com/bethz/bzips/main/projects/bzcrm/skills/bzcrm-ingest/SKILL.md
   ```

2. Copy this command:

   ```text
   /skills add https://raw.githubusercontent.com/bethz/bzips/main/projects/bzcrm/skills/bzcrm-query/SKILL.md
   ```

3. Copy this command:

   ```text
   /skills reload
   ```

4. Ask:

   > Are bzcrm-ingest and bzcrm-query available?

5. Continue with the access check in step 2.

These commands follow [GitHub's skill install guide](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills).

[README](README.md)
