# BioLab Interactive Guide — Decision Log

## Decision 1: Pure CSS 3D Carousel Architecture
- **Decision**: Adopt the original sample's Pure CSS 3D rotation (`.scene`, `.a3d`, `.card` with `rotateY` and `translateZ`) rather than standard grid carousels.
- **Why**: Preserves the precise visual design and kinetic interactivity requested by the user.
- **Alternative Considered**: Standard JS slider libraries.
- **Reason Rejected**: Lacked the exact 3D perspective and editorial feel of the provided sample.

## Decision 2: LocalStorage for Bookmarks
- **Decision**: Implement bookmarks using browser `localStorage` (`biolab-guide:bookmarks:v1`) instead of server-side database tables.
- **Why**: Ensures instantaneous response, offline availability, and zero database migration overhead for personal user preferences.
- **Alternative Considered**: Server-side user bookmark tables.
- **Reason Rejected**: Unnecessary complexity given the client-focused educational scope.

## Decision 3: Service Worker PWA Caching Strategy
- **Decision**: Implement a tiered caching strategy (Network-first for navigation, Stale-while-revalidate for JS/CSS/assets, Cache-first for WebP images) via `sw.js` and `OfflineManager.tsx`.
- **Why**: Balances instantaneous offline loading with automatic background updates when online.
