# BioLab Interactive Guide

[![CI](https://github.com/uzme/biolab-interactive-guide/actions/workflows/ci.yml/badge.svg)](https://github.com/uzme/biolab-interactive-guide/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=20232A)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**BioLab Interactive Guide** is an interactive learning platform for exploring **100 biotechnology devices** through a structured catalogue and device viewer experience.

## Preview

![BioLab Interactive Guide preview](./docs/preview.webp)

The interface combines a searchable catalogue, category filters, equipment records, and a structured 16-step learning flow for each device.

The project is designed to make technical biotechnology information easier to browse, understand, and use in an educational context.

## Highlights

- Structured catalogue of biotechnology devices.
- Interactive device browsing and viewer flows.
- Responsive web interface for desktop and mobile screens.
- Type-safe frontend and server code.
- Automated checks for catalogue controls and device viewer behaviour.

## Tech stack

- **Frontend:** React, TypeScript, Vite
- **Backend:** Node.js, Express
- **UI:** Tailwind CSS, Radix UI, Lucide React
- **Validation and utilities:** Zod, Axios
- **Tooling:** pnpm, TypeScript, Prettier, Playwright

## Getting started

### Prerequisites

- Node.js 20 or newer
- pnpm 10 or newer

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Validation

```bash
pnpm check
pnpm test
```

### Production build

```bash
pnpm build
pnpm start
```

## Project structure

```text
client/       Frontend application
components/   Shared UI components
docs/         Project documentation
server/       Server entry point and backend code
scripts/      Automated project checks
shared/       Shared types and utilities
```

## Quality checks

The repository uses GitHub Actions to run type checking and a production build on every push to `main` and every pull request targeting `main`. The interactive browser checks remain available locally through the project test scripts.

```bash
pnpm check
pnpm test
pnpm build
```

## Status

The project is under active development. Product notes and implementation progress are tracked in [`PROJECT_STATE.md`](./PROJECT_STATE.md) and [`todo.md`](./todo.md).

## Contributing

Suggestions and focused improvements are welcome. Please open an issue first for substantial changes so that the intended direction can be discussed before implementation.

## License

This project is released under the [MIT License](./LICENSE).
