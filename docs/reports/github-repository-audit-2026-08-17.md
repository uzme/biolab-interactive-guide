# GitHub Repository Audit Report — BioLab Interactive Guide

- **Date:** August 17, 2026
- **Repository:** `uzme/biolab-interactive-guide` (Branch: `main`, Latest Commit: `c246934`)
- **Total Tracked Files:** 166

## Executive Summary

A comprehensive file-by-file inventory and dependency/import audit was conducted on the GitHub repository. The findings confirm that **all files in the repository are necessary, active, and part of the production runtime, testing suite, PWA offline mechanics, documentation system, or release synchronization automation**. 

### Why some files have not been modified in 3+ days
1. **Source of Truth Data & Core Logic:** Core equipment definitions (`equipmentData.ts`), foundational styling (`index.css`), and UI components were locked in as stable sources of truth during earlier rigorous iterations to maintain the exact 16-section learning curriculum and Pure CSS 3D Carousel geometry. Stability is a feature, not obsolescence.
2. **Automated Scripts & Tooling:** Scripts under `scripts/` (such as `sync_release.mjs`, `verify_continuity_docs.mjs`, `test_catalog_controls.mjs`, and image processing pipelines) are executed on-demand during release verification and test suites. They are critical for the Master Protocol continuity workflow.
3. **Documentation & Handoff:** Master protocol markdown files (`AI_HANDOFF.md`, `REPRODUCTION.md`, `PROJECT_STATE.md`, etc.) are maintained as immutable architectural contracts required by automated verifiers (`verify_continuity_docs.mjs`).

## Categorical Breakdown

| Category | File Count | Role & Status |
|---|---|---|
| **Runtime Pages & Components** | ~65 | Active UI views (`Home.tsx`, `DeviceViewer.tsx`, etc.) and Shadcn/UI primitives. Fully used. |
| **Runtime Core & Hooks** | 18 | Application routing, theme context, bookmarks state (`useBookmarks.ts`), and PWA offline hook. Fully used. |
| **Learning Data Chunks** | 8 | Code-split lazy data blocks (`learningDataBlock1-4.ts`, `purchaseDataBlock1-4.ts`) loaded on-demand by `DeviceViewer.tsx`. Fully used. |
| **Config & Tooling** | 9 | `package.json`, Vite config, TypeScript setup, Tailwind setup. Active. |
| **Documentation** | 31 | Master protocol and audit reports required for reproducibility and compliance. Active. |
| **Scripts & Tests** | 16 | Release sync, document verification, regression test scripts (`test_catalog_controls.mjs`, `test_device_viewer.mjs`). Active. |
| **Other (PWA, Assets, CI/CD)** | 19 | GitHub Actions workflows, service worker (`sw.js`), manifest, patches. Active. |

## Conclusion
There are **zero orphaned or dead code files** in the repository. Every file serves a specific, verified purpose in the production application, test suite, or Master Protocol automation pipeline.
