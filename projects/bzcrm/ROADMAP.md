# bzCRM: step-by-step roadmap

**Status:** Implementation plan, not completed functionality.
**Created:** November 6, 2026
**Requirements:** [DESIGN.md](DESIGN.md)

The goal is a shareable bzCRM package for friends and peers. Users will need an existing Work IQ connection and their own Obsidian Starter Knowledge Graph Vault.

## What is already in GitHub

- A project [README](README.md) describing the planned capabilities.
- A [design document](DESIGN.md) covering capture, queries, arcs, logging, and recovery.
- A "Coming soon" website page.
- The repository-wide MIT license, contribution guide, and Pages deployment.

These steps are for project maintainers. They describe the files and workflows we still need to create. Publishing this roadmap does not start ingestion or install a skill.

## 1. Confirm the first supported setup

Agree on the initial host before writing installation instructions. Agree on the first release's scope.

The recommended first setup uses GitHub Copilot CLI, an existing Work IQ connection, and local access to an Obsidian vault.

Email is the default source. Include Teams only when the user explicitly requests it and access is available.

Confirm these decisions:

- The installable skill format.
- The required tools and supported operating systems.
- How the user selects a vault destination.
- Whether optional CSV/vCard exports belong in the first release.

**Add:** setup and compatibility documentation with verified prerequisites.

**Ready when:** the documentation names the supported setup and does not promise unsupported host or connector capabilities.

## 2. Define note schemas and identity rules

Specify shared properties and consistent templates for people, organizations, workstreams, meetings, interactions, and synthesized arcs.

Define how notes link to each other.

Specify rules for:

- Keeping same-name people separate.
- Identifying source messages and interactions.
- Preserving dated roles and contributions without overwriting current information.

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

Provide fictional linked examples separately, or label them clearly. Users must not mistake these examples for their contacts.

**Add:** vault files and a reproducible way to download/package them.

**Ready when:** the vault opens in Obsidian and its links resolve. The documentation names any required community plugin.

## 4. Write the skill and copy-ready prompts

Write installable operating instructions from the approved design. Package the skill for the confirmed host. Include references to its templates and supporting files.

Create entry prompts for:

- Setup and the seven-complete-day email pilot.
- Pilot review and explicit approval.
- Historical backfill and resume.
- User-invoked weekly maintenance.
- People/project questions and relationship histories.
- Career and project arcs.

The skill must not treat a request to install or review it as permission to ingest years of data.

**Add:** the skill entry file, supporting instructions, prompt files, and installation guidance.

**Ready when:** a fresh supported host discovers the skill. Its prompts start the intended workflow without the full design document.

## 5. Build recovery before running real ingestion

Implement only the supporting helpers the workflow needs. First implement persistent batch logging, coverage records, checkpoints, identity matching, and safe note updates.

Write a started log entry before retrieval. Verify each saved batch before recording its checkpoint.

Support recovery from failures between saving notes and recording completion. Keep partial windows visible. Preserve the next unprocessed window.

Use source-provided identifiers and pagination only when available. Do not invent stable cursors. Do not claim complete retrieval from selected results.

**Add:** recovery/update helpers and focused synthetic tests.

**Ready when:** an interrupted batch can resume without duplicate messages, interactions, identities, or lost corrections.

## 6. Implement and test the seven-day pilot

Confirm mailbox, accessible sources, timezone, vault location, and professional-only versus personal-inclusive scope.

Process only the last seven complete days of sent and received email. State exact dates first. Create linked records, a home page, and a review dashboard.

Save the review and checkpoint. Then stop. Historical backfill must require explicit user approval.

Test with fictional fixtures first. With the user's permission, test a small real pilot in a separate private vault. Never commit its records or communications to BZiPS.

**Add:** pilot workflow, fictional input/output examples, and test results identifying the supported host and scenario.

**Ready when:** tests show that the pilot stays within its date limits and creates linked notes with source references. Retrieval gaps remain visible. The skill requires explicit approval before backfill.

## 7. Implement historical backfill and weekly maintenance

After pilot approval, ask for the desired history range. Ask the user to confirm exact dates.

Work backward one calendar month at a time. Split months into weeks or smaller batches when needed.

Handle partial boundary months, leap years, pilot overlap, retries, and gaps. Older evidence must not overwrite newer current information. Mark windows complete only when coverage supports it.

Add weekly maintenance for new activity when the user requests it. Detect unprocessed activity between the pilot and maintenance. Do not silently skip it.

Do not send messages or create schedules without an explicit request.

**Add:** backfill/maintenance workflows, resume instructions, and focused boundary/failure tests.

**Ready when:** interrupted runs resume across sessions within the chosen interval. Checkpoints retain unfinished work and distinguish partial from complete windows.

## 8. Add queries, career arcs, and project arcs

Build a local query index for the necessary people, projects, dated events, and relationships. Make the index rebuildable. Markdown remains the source of truth.

Provide query workflows for people briefings, project summaries, collaborators, follow-ups, missing details, and relationship histories.

Add career and project arc workflows that use dated evidence. Cite supporting notes.

Separate facts from interpretation. Show evidence gaps. Do not invent continuity or achievements.

**Add:** index/query helpers, example questions and outputs, and retrieval/synthesis instructions.

**Ready when:** queries find relevant linked evidence and arcs cite their sources. Deleting and rebuilding the index loses no knowledge.

## 9. Complete the user guide and website

Write a guide that covers:

- Download and installation.
- Opening the vault and running the pilot.
- Reviewing results and approving backfill.
- Historical backfill and recovery.
- Weekly maintenance and queries.

Include troubleshooting for inaccessible sources, incomplete retrieval, ambiguous identities, stale indexes, interrupted runs, and host-specific limitations.

Expand the website's bzCRM page to describe the delivered capabilities. Add prerequisites, guide links, downloads, and copy buttons for published prompts.

Keep the main catalog and README status consistent with the delivered features.

**Add:** user guide, troubleshooting, fictional walkthrough, project website content, and downloadable package.

**Ready when:** a peer can follow the instructions without access to the author's machine, vault, accounts, or undocumented setup.

## 10. Test with a peer and publish a clearly labeled release

Ask a peer with Work IQ already configured to try the supported setup. Record installation issues. Compare actual behavior with the guide.

Test these behaviors:

- Pilot approval and failure recovery.
- Deduplication and historical updates.
- Queries and arcs.
- Website navigation, downloads, and copy buttons.

Record the release version, supported tools, last-tested date, scenarios tested, and known limitations. Label components as draft until testing verifies their documented behavior. Do not mark the whole package tested if any component lacks that verification.

Publish release artifacts. Link them from the README and website. Real user data must remain outside the release.

**Ready when:** testing verifies the supported workflow described in the documentation. Label a staged release as a preview if later capabilities remain unfinished.

## Parallel website task: repair HTTPS

This task is separate from building bzCRM. At the last verification, GitHub Pages still waited to issue the custom domain's certificate.

DNS verification and the main-site build passed. The certificate remained pending after the documented one-hour provisioning window.

Recheck certificate status. Contact GitHub support if necessary.

Enable HTTPS only after the certificate becomes valid. Verify the homepage and BZiPS pages. Do not force HTTPS while the certificate is invalid.

The README and design are already accessible through GitHub. Test secure website links before presenting the website as the complete onboarding route.

## Working sequence

Use steps 1-6 to create a pilot preview. Add historical maintenance and query/arc capabilities in steps 7-8. Complete the guide, website, peer review, and release in steps 9-10.

Update this roadmap as work completes. Documenting requirements does not deliver the planned files or features.
