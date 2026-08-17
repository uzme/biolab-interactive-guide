# BioLab Interactive Guide — Architecture Documentation

## System Architecture
BioLab Interactive Guide is structured as a full-stack web application built on a robust client-server architecture. The frontend is powered by React 19, Vite, and Tailwind CSS 4, providing an interactive, responsive user interface with a 3D animated carousel, 16-section deep learning dossiers, and PWA offline capabilities. The backend consists of an Express server running tRPC 11 endpoints, backed by Drizzle ORM and MySQL/TiDB storage.

## Frontend Architecture
The client application is organized into modular pages (`Home.tsx`, `NotFound.tsx`), reusable UI components (`Pure3DCarousel.tsx`, `EquipmentCard.tsx`, `DeviceViewer.tsx`, `BookmarksSidebar.tsx`, `OfflineManager.tsx`), custom hooks (`useBookmarks.ts`, `useOfflinePack.ts`), and context providers (`ThemeContext.tsx`). PWA support is integrated via `manifest.webmanifest` and `sw.js`, which handles network-first navigation, stale-while-revalidate asset caching, and cache-first device image loading.

## Backend & API Architecture
The server architecture leverages tRPC for end-to-end type-safe API contracts without manual REST boilerplate. Database queries and mutations are managed through Drizzle ORM query helpers in `server/db.ts`. Authentication and session management utilize Manus OAuth integration with secure HttpOnly cookies.

## Data Flow & Storage
User interactions trigger tRPC queries or mutations from React components. Bookmarks and offline preferences persist locally in browser `localStorage`. Device learning dossiers, SOP checklists, and specifications are loaded dynamically from structured TypeScript datasets. Media assets are optimized as WebP files and cached locally via Service Worker or served from secure S3 storage.

## Deployment & Synchronization Flow
Automated synchronization is handled via `scripts/sync_release.mjs`. The workflow executes a two-step process: checking the build/test status (`--check`) and publishing sanitised source archives to GitHub (`uzme/biolab-interactive-guide` main branch) and Google Drive (`Biotexnologiya yangi / Loyiha 1` folder, updating `BioLab_Interactive_Guide_source.zip` without duplication).
