# BioLab Interactive Guide — Product Case Study

## Product intent

BioLab Interactive Guide turns a large biotechnology device catalogue into a structured learning experience. The product groups **100 devices across 10 categories** and gives each instrument a **16-stage learning dossier**, allowing a visitor to explore equipment without navigating an unstructured document collection.

The design question is straightforward: how can a dense scientific catalogue remain useful to a learner? The implementation answers through search, filters, bookmarks, a responsive viewer, and a visual carousel that makes adjacent concepts discoverable.

## Product system

| Layer | Responsibility | Evidence in repository |
|---|---|---|
| Client | Responsive React interface, catalogue controls, device viewer, bookmarks, and PWA integration | `client/` |
| Server | Express, tRPC, authentication, and database helpers | `server/` |
| Data and release tooling | Imports, regression scripts, sanitisation, and release synchronisation | `scripts/` |
| Persistence | Drizzle schema and migration history | `drizzle/` |

The application uses React 19, TypeScript, Vite 7, Tailwind CSS 4, shadcn/ui, Wouter, Node.js 22, Express 4, tRPC 11, Drizzle ORM, and a MySQL/TiDB-compatible data layer. Offline support is handled through the PWA manifest, service worker, and offline manager.

## Quality and release evidence

The CI workflow performs dependency installation, TypeScript validation, development-server startup, automated tests, cleanup, and production build verification. The test suite includes regression scripts for catalogue controls and device viewer behavior. Pull requests are evaluated against an exact head commit, preventing a branch change from being mistaken for a tested result.

The release workflow keeps a clear distinction between validation and publication. `sync_release.mjs --check` verifies integrity without changing release state. `sync_release.mjs --publish` runs the validation path, checks for secrets, and synchronises a sanitised snapshot. The process excludes environment files, tokens, API keys, passwords, personal access tokens, dependencies, build output, and runtime logs.

## Engineering decisions

| Decision | Why it matters |
|---|---|
| Search and filters are first-class controls | Learners can reach a relevant device rather than manually scan a long catalogue |
| Device dossiers use a consistent learning sequence | Scientific information stays comparable across instruments |
| Local bookmarks use browser storage | Returning visitors can retain learning context without requiring an account |
| PWA support is included | The guide remains useful in less reliable network conditions |
| Image licenses are verified | Educational content is treated as publishable product material, not placeholder imagery |
| Sanitised release snapshots | The public repository can demonstrate the product without disclosing operational credentials |

## Current status

BioLab is the primary public flagship project in the `uzme` portfolio. The active canonical source is the `main` branch of this repository. The product continues to be refined through testing, documentation, security checks, and repeatable release workflows.

## Explore

- [Live application](https://biolab-interactive-guide.vercel.app)
- [Repository](https://github.com/uzme/biolab-interactive-guide)
- [CI workflow](https://github.com/uzme/biolab-interactive-guide/actions/workflows/ci.yml)
