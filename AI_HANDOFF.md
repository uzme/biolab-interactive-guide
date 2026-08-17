# BioLab Interactive Guide — AI Handoff Document

## Project Purpose
BioLab Interactive Guide is a professional learning platform for 100 biotechnology devices, featuring a 3D animated carousel, 16-section deep learning dossiers, SOP checklists, PWA offline support, and automated synchronization with GitHub and Google Drive.

## Current State
The project is in a fully stable, production-ready state (Release f721102). All 100 devices, search/filter controls, bookmarks, right sidebar, 16-section modals with PDF export, copyright/safety disclosures, and PWA offline caching are fully implemented and verified via TypeScript check, production build, and Playwright regression tests.

## Do Not Change
- Do not modify or refactor the original Pure CSS 3D Carousel geometry (`.pure3d-carousel`, `.scene`, `.a3d`, `.card`).
- Do not alter the 16-section educational structure for devices.
- Do not remove or alter the synchronization script logic (`sync_release.mjs`) targeting the designated Google Drive folder (`Biotexnologiya yangi / Loyiha 1`).

## Important Architecture
- Frontend uses React 19 + Vite + Tailwind CSS 4 + shadcn/ui.
- Backend uses Express + tRPC 11 + Drizzle ORM.
- PWA offline caching is managed via `manifest.webmanifest`, `sw.js`, and `OfflineManager.tsx`.

## Database
Configured via Drizzle ORM (`drizzle/schema.ts`) with MySQL/TiDB.

## Completed Features
- 100 Biotechnology devices with pagination and categories.
- Original Pure CSS 3D Carousel.
- 16-Section educational dossiers & PDF export.
- Bookmarks (localStorage) & Right Sidebar (`BookmarksSidebar.tsx`).
- PWA offline support and Online/Offline status indicator.
- Automated GitHub and Google Drive synchronization.

## Development Rules
- Maintain Uzbek (`uz`) as the working language for UI and documentation.
- Prioritize clean, modular, and type-safe code. Never commit raw secrets or tokens.
