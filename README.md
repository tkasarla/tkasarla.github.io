# tkasarla.github.io

Source for [tkasarla.github.io](https://tkasarla.github.io), the personal
website of Tejaswi Kasarla.

This is a personal-site repository, not a reusable theme. It began as a fork of
[just-the-docs](https://github.com/just-the-docs/just-the-docs); the theme is
vendored in `_sass/` and `_layouts/` and has been customised, so it is not
tracked as a gem or remote theme.

## Layout

| Path | What it holds |
| --- | --- |
| `index.md`, `publications.md`, `resources.md`, `more.md` | The main pages |
| `papers/` | One project page per paper, rendered by `_layouts/paper.html` |
| `_posts/`, `blog/` | Notes (an archive; newest post is from 2018) |
| `_sass/custom/custom.scss` | All site-specific styling, including the colour tokens both themes are built from |
| `assets/vendor/`, `assets/fonts/` | Self-hosted Font Awesome and Inter — the site makes no third-party requests |

## Local development

Requires Ruby (see `.ruby-version`) and Node 20+.

```bash
bundle install
npm ci
```

```bash
bundle exec jekyll serve
```

The site is then at <http://localhost:4000>. Note that changes to `_config.yml`
need a server restart; everything else rebuilds automatically.

## Checks

```bash
npm test
```

Lints `_sass/custom/`. The vendored theme SCSS is deliberately excluded — it is
third-party code. `npm run lint:fix` applies the fixable ones.

```bash
bundle exec jekyll build
```

## Theming

Light is the default and the OS preference is deliberately ignored; the theme
only changes when a visitor uses the switch, and the choice is stored in
`localStorage`. Colours are defined once as custom properties at the top of
`_sass/custom/custom.scss`, so light and dark differ only in those values.

Inline `<script>` blocks must use `/* */` comments only: `compress_html`
collapses them onto one line, which turns a `//` comment into a comment over
the rest of the script.

## Automation

| Workflow | When | What |
| --- | --- | --- |
| `jekyll.yml` | push to `master` | Builds and deploys to GitHub Pages |
| `ci.yml` | push, PR | SCSS lint, production build, internal link check |
| `links.yml` | monthly | Checks external links, opens an issue when they break |
| `codeql-analysis.yml` | push, PR, weekly | CodeQL analysis |

Actions are pinned to commit SHAs; Dependabot updates them weekly, grouped into
one pull request per ecosystem.
