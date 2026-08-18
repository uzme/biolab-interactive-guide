# BioLab Interactive Guide — Project Inventory

## Core Source Files
- `client/src/App.tsx`: Application routing and theme provider wrapper.
- `client/src/pages/Home.tsx`: Main dashboard, catalog grid, search/filter controls, and settings dialog.
- `client/src/components/Pure3DCarousel.tsx`: Original Pure CSS 3D animated carousel supporting 100 devices with pagination and bookmarks.
- `client/src/components/Pure3DCarousel.css`: Scoped 3D rotation, perspective, and responsive styles.
- `client/src/components/EquipmentCard.tsx`: Individual equipment card component with image fallback and bookmark toggle.
- `client/src/components/DeviceViewer.tsx`: 16-section deep learning dossier modal with PDF export.
- `client/src/components/BookmarksSidebar.tsx`: Right-side drawer for quick access to saved devices.
- `client/src/components/OfflineManager.tsx`: PWA offline package manager and online/offline status indicator.
- `client/src/hooks/useBookmarks.ts`: LocalStorage state hook for bookmarks.
- `client/src/hooks/useOfflinePack.ts`: Service worker and offline cache management hook.
- `client/public/manifest.webmanifest`: PWA web manifest.
- `client/public/sw.js`: Service worker caching strategy.
- `scripts/release/sync_release.mjs`: Automated build, test, sanitization, and GitHub/Google Drive synchronization script.
- `scripts/tests/test_device_viewer.mjs`: Playwright browser regression test suite.
- `scripts/data/`: Learning/purchase data import tooling.
- `scripts/tests/`: Browser and visual regression tooling.
- `scripts/utils/`: Image planning and audit utilities.
- `scripts/release/`: Continuity verification, sanitization, and GitHub/Drive release tooling.
- `scripts/README.md`: Script directory contract and command reference.
