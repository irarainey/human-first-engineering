# Human-First Engineering

**Growing engineers in the age of AI.**

> Tools evolve. Craft endures.

A lightweight manifesto, framework, and toolkit for using AI in software engineering without quietly deskilling the engineers — and the talent pipeline — that the industry depends on.

The site is published at [humanfirstengineering.dev](https://humanfirstengineering.dev). This repository contains the source.

## Contents

- [The Manifesto](manifesto.md) — what we believe, and why.
- [The Framework](framework.md) — the five pillars and how we work in practice.
- [The Toolkit](toolkit/index.md) — implementation guide, practices, talking points, slide deck, developer FAQ, and how HFE relates to Microsoft's Hyper-Velocity Engineering.
- [Changelog](CHANGELOG.md) — version history.
- [License](LICENSE.md) — CC BY-NC-SA 4.0.

## Versioning

The current version is recorded in [VERSION](VERSION) and the full history is in [CHANGELOG.md](CHANGELOG.md). This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** — a change in philosophy, principle, or a breaking change to the framework pillars.
- **MINOR** — a new principle, pillar, behaviour, or toolkit document, or a substantive expansion.
- **PATCH** — clarifications, wording improvements, and non-substantive edits.

Releases are tagged in Git as `X.Y.Z` (for example, `1.0.0`).

## Publishing

The site is built with Jekyll using the [Just the Docs](https://just-the-docs.com/) theme (via `remote_theme`) and deployed to GitHub Pages by the workflow at [.github/workflows/pages.yml](.github/workflows/pages.yml).

To set it up on a fresh repository:

1. In **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Push to `main`. The workflow builds and deploys automatically.
3. To preview locally: `bundle install && bundle exec jekyll serve --livereload`.

### Custom domain

The custom domain is configured via the [CNAME](CNAME) file in this repo plus DNS records at the domain registrar:

- **Apex (`humanfirstengineering.dev`)** — `A` records pointing to GitHub Pages' four IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **`www` subdomain (optional)** — `CNAME` record pointing to `irarainey.github.io`.

After DNS propagates, go to **Settings → Pages**, confirm the custom domain, and tick **Enforce HTTPS**.

## The one-line summary

> AI is the next step in a long history of assistive tools — and we use it to grow engineers, accelerate delivery, and protect quality.

## License

This work is licensed under CC BY-NC-SA 4.0. Share freely. Build on it. Don't sell it. See [LICENSE](LICENSE.md) for details.
