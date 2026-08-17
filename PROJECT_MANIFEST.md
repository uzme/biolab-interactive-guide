# BioLab Interactive Guide — Project Manifest

## Overview
- **Project Name**: BioLab Interactive Guide
- **Purpose**: Professional learning platform for 100 biotechnology devices with 3D carousel, 16-section deep learning dossiers, SOP checklists, PWA offline support, and automated GitHub/Google Drive synchronization.
- **Current Version**: 1.0.0 (Release f721102)
- **Status**: Production Ready / Fully Verified
- **Language**: Uzbek (`uz`)

## Technology Stack
- **Frontend Framework**: React 19, TypeScript, Vite 7, Tailwind CSS 4, shadcn/ui, Wouter
- **Backend Framework**: Express 4, Node.js (ESM), tRPC 11
- **Database**: Drizzle ORM with MySQL/TiDB support
- **Authentication**: Manus OAuth baked-in session cookies
- **Storage**: S3 storage helper proxy (`storagePut`, `storageGet`)
- **Deployment Platform**: Manus Autoscale Web Hosting / GitHub Pages & Drive Archive
- **Package Manager**: pnpm

## Runtime & Environment
- **Node.js Runtime**: v22.13.0
- **Required Services**: Manus API Forge, MySQL/TiDB database, Google Drive API (`gws` CLI)
- **Environment Variables**: See `.env.example` and `SECRETS_REQUIRED.md`

## Available Scripts & Commands
- **Install**: `pnpm install`
- **Development**: `pnpm dev`
- **Build**: `pnpm build`
- **Type Check**: `pnpm check`
- **Test (Vitest & Playwright)**: `pnpm test` && `node scripts/test_device_viewer.mjs`
- **Release Automation**: `node scripts/sync_release.mjs [--check | --publish]`

## Directory & File Structure
- `client/src/`: React frontend pages, components, hooks, and PWA integration (`manifest.webmanifest`, `sw.js`, `OfflineManager.tsx`)
- `server/`: Express and tRPC backend routers, database helpers, and core plumbing
- `drizzle/`: Database schema and migrations
- `scripts/`: Automation scripts (`sync_release.mjs`, Playwright test suites)
- `storage/`: S3 and media storage integration
- `shared/`: Shared types and constants
