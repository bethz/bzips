# bzCRM: step-by-step roadmap

**Status:** Implementation plan, not completed functionality.
**Created:** November 6, 2026
**Requirements:** [DESIGN.md](DESIGN.md)

The goal is a shareable bzCRM package that friends and peers can use with their existing Work IQ connection and their own Obsidian Starter Knowledge Graph Vault.

## What is already in GitHub

- A project [README](README.md) describing the planned capabilities.
- A [design document](DESIGN.md) covering capture, queries, arcs, logging, and recovery.
- A "Coming soon" website page.
- The repository-wide MIT license, contribution guide, and Pages deployment.

The steps below describe what we still need to create. Publishing this roadmap does not begin ingestion or install a skill.

## 1. Confirm the first supported setup

Agree on the initial host and release scope before writing installation instructions.

Recommended first setup: GitHub Copilot CLI, an already configured Work IQ connection, and local access to an Obsidian vault. Email is the default source; Teams requires explicit inclusion and available access.

Confirm the installable skill format, required tools, supported operating systems, vault destination behavior, and whether optional CSV/vCard exports belong in the first release.

**Add:** setup and compatibility documentation with verified prerequisites.

**Ready when:** the supported setup is explicit, and no unsupported host or connector capability is promised.

## 2. Define note schemas and identity rules

Specify shared properties and consistent templates for people, organizations, workstreams, meetings, interactions, and synthesized arcs.

Define how notes link to each other, how same-name people are kept separate, how source messages/interactions are identified, and how dated roles and contributions are retained without overwriting current information.

Define window boundaries, timezone handling, and source coverage states. Distinguish a saved batch from complete retrieval coverage.

**Add:** schema documentation and fictional examples of identities, links, and source references.

**Ready when:** the same evidence can be reprocessed without creating duplicates or losing user corrections.

## 3. Create the Starter Knowledge Graph Vault

Build the downloadable vault structure based on BZCOWCRM, without copying populated records:

```text
00-Dashboard/
10-People/
20-Organizations/
30-Workstreams/
40-Meetings/
50-Interactions/
60-Notes/
90-Templates/
99-Attachments/
```

Include a home page, review dashboard, templates, and empty capture-log, coverage, and checkpoint structures. Explain how to open the folder in Obsidian.

Provide fictional linked examples separately or clearly label them so they are not mistaken for the user's contacts.

**Add:** vault files and a reproducible way to download/package them.

**Ready when:** the vault opens in Obsidian, links resolve, and it does not depend on an unannounced community plugin.

## 4. Write the skill and copy-ready prompts

Turn the approved design into installable operating instructions. Package the skill for the confirmed host, with references to its templates and supporting files.

Create entry prompts for:

- Setup and the seven-complete-day email pilot.
- Pilot review and explicit approval.
- Historical backfill and resume.
- User-invoked weekly maintenance.
- People/project questions and relationship histories.
- Career and project arcs.

The skill must not treat a request to install or review it as permission to ingest years of data.

**Add:** the skill entry file, supporting instructions, prompt files, and installation guidance.

**Ready when:** a fresh supported host discovers the skill, and its prompts launch the intended workflow without requiring users to paste the entire design document.

## 5. Build recovery before running real ingestion

Implement only the supporting helpers the workflow needs. Start with persistent batch logging, coverage records, checkpoints, identity matching, and safe note updates.

Write a started log entry before retrieval and checkpoint after each saved, verified batch. Recover from failures between saving notes and recording completion. Keep partial windows visible and preserve the next unprocessed window.

Use source-provided identifiers and pagination only when actually available. Do not invent stable cursors or claim complete retrieval from selected results.

**Add:** recovery/update helpers and focused synthetic tests.

**Ready when:** an interrupted batch can resume without duplicate messages, interactions, identities, or lost corrections.

## 6. Implement and validate the seven-day pilot

Confirm mailbox, accessible sources, timezone, vault location, and professional-only versus personal-inclusive scope.

Process only the last seven complete days of sent and received email. State exact dates first. Create linked records, a home page, and a review dashboard.

Save the review and checkpoint, then stop. Historical backfill must require explicit user approval.

Test with fictional fixtures first. With permission, validate a small real pilot in a separate private vault; never commit its records or communications to BZiPS.

**Add:** pilot workflow, fictional input/output examples, and test results identifying the supported host and scenario.

**Ready when:** date limits hold, notes are sourced and linked, retrieval gaps are visible, and the approval stop cannot be bypassed accidentally.

## 7. Implement historical backfill and weekly maintenance

After pilot approval, ask for the desired history range and confirm exact dates. Work backward one calendar month at a time, splitting into weeks or smaller batches when needed.

Handle partial boundary months, leap years, pilot overlap, retries, and gaps. Older evidence must not overwrite newer current information. Mark windows complete only when coverage supports it.

Add weekly maintenance for new activity when the user invokes it. Detect unprocessed activity between the pilot and maintenance rather than silently skipping it.

Do not send messages or create schedules without an explicit request.

**Add:** backfill/maintenance workflows, resume instructions, and focused boundary/failure tests.

**Ready when:** multiple sessions can cover a chosen interval with reliable checkpoints and honest partial/complete states.

## 8. Add queries, career arcs, and project arcs

Build a regenerable local query index over the necessary people, projects, dated events, and relationships. Markdown remains the source of truth.

Provide query workflows for people briefings, project summaries, collaborators, follow-ups, missing details, and relationship histories.

Add career/project arc workflows that use dated evidence and cite supporting notes. Separate facts from interpretation and show gaps instead of inventing continuity or achievements.

**Add:** index/query helpers, example questions and outputs, and retrieval/synthesis instructions.

**Ready when:** queries find the relevant linked evidence, arcs are source-supported, and deleting/rebuilding the index loses no knowledge.

## 9. Complete the user guide and website

Write a start-to-finish guide covering download, installation, opening the vault, running the pilot, reviewing results, backfilling, resuming, maintaining, and querying.

Include troubleshooting for inaccessible sources, incomplete retrieval, ambiguous identities, stale indexes, interrupted runs, and host-specific limitations.

Expand the website's bzCRM page with the actual capabilities, prerequisites, guide links, downloads, and copy buttons for published prompts. Update the main catalog and README status consistently.

**Add:** user guide, troubleshooting, fictional walkthrough, project website content, and downloadable package.

**Ready when:** a peer can follow the instructions without access to the author's machine, vault, accounts, or undocumented setup.

## 10. Test with a peer and publish a clearly labeled release

Have a peer with Work IQ already configured try the supported setup. Capture installation issues and compare actual behavior with the guide.

Verify pilot approval, failure recovery, deduplication, historical updates, queries/arcs, and website navigation/download/copy behavior.

Record the release version, supported tools, last-tested date, scenarios tested, and known limitations. Label unvalidated components as draft rather than marking the whole package tested.

Publish release artifacts and link them from the README and website. Real user data must remain outside the release.

**Ready when:** the documented supported workflow is usable and verified. Keep a staged preview labeled as a preview if later capabilities are unfinished.

## Parallel website task: repair HTTPS

This is separate from building bzCRM. GitHub Pages is still waiting to issue the certificate for the existing custom domain. DNS checks and the main-site build passed, and the documented one-hour provisioning check did not complete issuance.

Recheck certificate status, escalate to GitHub support if necessary, then enable HTTPS and verify the homepage and BZiPS pages. Do not force HTTPS while the certificate is invalid.

The README and design are already accessible through GitHub. Validate working secure website links before presenting the website as the complete onboarding route.

## Working sequence

Start with steps 1-6 for a pilot preview. Then add historical maintenance and query/arc capabilities in steps 7-8. Finish the guide, website, peer review, and release in steps 9-10.

Update this roadmap as work completes. Do not label planned files or features as delivered merely because their requirements are documented.
