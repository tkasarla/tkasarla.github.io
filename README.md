# tkasarla.github.io

Personal website repository for [https://tkasarla.github.io](https://tkasarla.github.io).

This repository is maintained as a **personal-site repo only** (not as a reusable theme package).

## Tech stack

- Jekyll
- just-the-docs (remote theme)
- SCSS + stylelint
- GitHub Actions (CI + CodeQL)

## Local development

### Prerequisites

- Ruby (3.x)
- Bundler (2.3.x)
- Node.js (20+)

### Setup

```bash
bundle install
npm ci
```

### Run locally

```bash
bundle exec jekyll serve -H 0.0.0.0 -t
```

## Validation

### Style lint

```bash
npm test
```

### Production build

```bash
bundle exec jekyll build
```

## CI expectations

The CI workflow at `/home/runner/work/tkasarla.github.io/tkasarla.github.io/.github/workflows/ci.yml` runs:

1. Node dependency install
2. SCSS style checks (`npm test`)
3. Jekyll production build
4. Offline link verification on generated `_site` HTML

CodeQL runs separately via `/home/runner/work/tkasarla.github.io/tkasarla.github.io/.github/workflows/codeql-analysis.yml`.

## Maintenance runbook

For any content/infrastructure update:

1. Pull latest changes
2. Run `npm ci` and `bundle install` (if dependency files changed)
3. Run `npm test`
4. Run `bundle exec jekyll build`
5. Verify local site (`bundle exec jekyll serve -H 0.0.0.0 -t`) for visible changes
6. Commit and open PR

## Release/update checklist

- [ ] Content updated (pages/posts/assets)
- [ ] No broken local links in generated site
- [ ] `npm test` passes
- [ ] `bundle exec jekyll build` passes
- [ ] CI green (build/lint/link checks + CodeQL)
