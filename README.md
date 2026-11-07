# BZiPS - BZ Prompts & Skills

Practical prompts and reusable AI workflows.

BZiPS is a public library of prompts, skills, templates, and guides. Each project has its own folder. Project instructions explain the required tools and provide examples.

**Website:** https://bethz.github.io/bzips/

## Projects

| Project | Purpose | Status |
|---|---|---|
| [bzCRM](projects/bzcrm/) | Professional relationships, contacts, and collaboration context | Coming soon |

The repository and website foundation are ready. The repository contains project plans, but no working skills or released prompt packages yet.

## What each project will include

- Purpose, supported tools, required connectors, and setup instructions.
- Copy-ready starter and follow-up prompts.
- Templates and fictional example inputs and outputs.
- Known limitations, version history, and draft/tested labels.
- The last-tested date and tool version for tested content.

Maintainers keep project content under `projects/<project-name>/`. Each project's website page lives under `docs/projects/<project-name>/`.

## Browse, use, and contribute

Anyone can browse the website, reuse the content, report issues, or propose changes through pull requests. See [CONTRIBUTING.md](CONTRIBUTING.md) for the workflow and review expectations.

Use fictional or appropriately sanitized examples. Do not submit real contact records, private conversations, credentials, or confidential employer/customer material. Keep required permissions and access explicit in prompts.

## Website

The site uses plain HTML, CSS, and JavaScript in `docs/`. GitHub Pages publishes these files through [the deployment workflow](.github/workflows/pages.yml). There is no package installation or build step.

To preview locally:

```sh
python3 -m http.server 8000 --directory docs
```

Open http://localhost:8000/. Stop the preview with Ctrl+C.

## License

[MIT](LICENSE). You may use, change, and share the content, including commercially. Retain the copyright and license notice. The license provides no warranty.
