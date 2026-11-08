# bzCRM build plan

**Status:** Planned work, not completed features.
**Updated:** November 8, 2026

This is the maintainer's plan. For the simple user path, read the [README](README.md#simple-setup). Detailed rules are in the [design](DESIGN.md).

## Available now

The repository contains the README, design, this plan, and a website page. It does not contain an installable bzCRM skill, starter vault, or tested import workflow.

## Build order

| Step | Build | Done when |
|---|---|---|
| 1. Confirm setup | Choose the first host, package format, operating systems, tools, and vault folder selection. Verify Outlook and Teams access through Work IQ. | Setup instructions name a verified configuration and its limits. |
| 2. Define records | Set properties, templates, identity matching, source IDs, links, date boundaries, and coverage states. | Re-reading evidence does not create duplicates or lose corrections. |
| 3. Create the starter vault | Add empty folders, a home page, review page, templates, logs, coverage, and saved progress. Keep fictional examples clearly separate. | The vault opens in Obsidian and links resolve. Any required plugin is named. The package can be downloaded. |
| 4. Write one bzCRM skill | Add the operating rules, supporting files, install steps, and the draft prompts listed in the README. | A fresh supported host finds the skill. Each prompt starts the right workflow. Installation alone does not start an import. |
| 5. Build recovery | Log before retrieval. Verify saved notes before saving progress. Handle partial results, identity matching, corrections, and retries. | Synthetic tests show that interrupted work resumes without duplicates or lost edits. |
| 6. Build the one-week trial | Read only seven complete days of selected Outlook and Teams data. Save notes and a review. Stop for approval. Support email-only scope. | Tests confirm exact dates, source scope, valid links, visible gaps, saved progress, and the approval stop. |
| 7. Add older history and updates | Confirm date ranges. Work backward by calendar month. Split busy months. Add on-request updates and resume across sessions. | Tests cover leap years, partial months, overlap, retries, older evidence, and unprocessed gaps. |
| 8. Add questions and histories | Build a local index from notes. Add person briefings, project summaries, follow-ups, relationship history, and project and career history. | Answers cite evidence and show gaps. The index can be rebuilt without losing information. |
| 9. Complete the guide and site | Add downloads, verified setup steps, prompt links, fictional walkthroughs, and troubleshooting. | A peer can follow the guide without the author's accounts, machine, or private vault. |
| 10. Test and release | Run a peer trial. Record versions, dates, scenarios, and limits. Publish the package. | Release labels match what was tested. No private records are included. |

## First preview

Complete steps 1-6 for a one-week trial preview. Test with fictional records first. Run a real-data trial only with the user's permission and in a separate private vault.

Add history imports and questions in steps 7-8. Finish the guide and peer test in steps 9-10. Do not label unfinished parts as tested.

## Checks that must not be skipped

- Confirm selected sources. Do not silently add Teams to an email-only request.
- Stop after the trial. Adding older history requires explicit approval.
- Report incomplete source coverage. A saved batch does not prove every message was read.
- Resume after a failure between saving notes and recording progress.
- Preserve corrections and dated history. Do not merge people on name alone.
- Keep updates on request. Do not send messages or create schedules without permission.

Step 9 troubleshooting must cover unavailable sources, incomplete retrieval, ambiguous names, stale indexes, interrupted runs, and host limits. Check website navigation, downloads, and any prompt copy buttons before release.

## Separate website issue: HTTPS

The custom domain's certificate was still invalid when checked on November 8, 2026. Use the [GitHub Pages URL](https://bethz.github.io/bzips/) for secure project links until this is fixed.

Check certificate status and contact GitHub support if needed. Enable forced HTTPS only after a valid certificate is issued. Verify both the main site and BZiPS pages.

This issue does not block reading the docs on GitHub or building the skill.
