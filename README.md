# BZiPS - BZ Prompts & Skills

Practical prompts and reusable AI workflows.

BZiPS is a public library of prompts, skills, templates, and guides. Each project has its own folder, with clear prerequisites and examples so you can adapt it to your tools.

**Website:** https://bethz.github.io/bzips/

## Projects

| Project | Purpose | Status |
|---|---|---|
| [bzCRM](projects/bzcrm/) | Professional relationships, contacts, and collaboration context | Coming soon |

The repository and website foundation are ready. No prompts or skills have been published yet.

## What each project will include

- Purpose, supported tools, required connectors, and setup instructions.
- Copy-ready starter and follow-up prompts.
- Templates and fictional example inputs and outputs.
- Known limitations, version history, and draft/tested labels.
- Last-tested date and the tool/version used when testing has occurred.

Each project lives under `projects/<project-name>/`. Project content is maintained there; its website page lives under `docs/projects/<project-name>/`.

## Browse, use, and contribute

Anyone can browse the website, reuse the content, report issues, or propose changes through pull requests. See [CONTRIBUTING.md](CONTRIBUTING.md) for the workflow and review expectations.

Use fictional or appropriately sanitized examples. Do not submit real contact records, private conversations, credentials, or confidential employer/customer material. Keep required permissions and access explicit in prompts.

## Website

The site is plain HTML, CSS, and JavaScript in `docs/`, published by GitHub Pages through [the deployment workflow](.github/workflows/pages.yml). There is no package installation or build step.

To preview locally:

```sh
python3 -m http.server 8000 --directory docs
```

Open http://localhost:8000/. Stop the preview with Ctrl+C.

## License

[MIT](LICENSE). You may use, modify, and share the content, including commercially, while retaining the copyright and license notice. Content is provided without warranty.
