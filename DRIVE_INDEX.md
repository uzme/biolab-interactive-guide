# DRIVE_INDEX.md — Canonical Google Drive Asset Index

Ushbu hujjat protokol talabiga binoan GitHub ↔ Google Drive cross-linking va binary asset xaritasini ta’minlaydi.

## Canonical Drive Locations

| Asset | Purpose | Drive Folder | Actual Drive URL / ID | File Type | Version | Date | Canonical Source | Used By |
|---|---|---|---|---|---|---|---|---|
| `BioLab_Interactive_Guide_source.tar.gz` | Complete sanitised application source and docs snapshot | `Biotexnologiya` Root (`1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`) | Current ID, modified time va source fingerprint release outputida qayd etiladi; canonical commit ham release outputidan olinadi | Tarball Archive (.tar.gz) | v1.0.0 / GitHub `main` | Har bir publish | Local workspace release script (`scripts/release/sync_release.mjs`) | Biotexnologiya Archive; rootda bitta active snapshot |
| `BioLab_Interactive_Guide_images.zip` | Equipment images reference archive | `Biotexnologiya` Root (`1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`) | ID: `1QuDHKjR8FuMz72en8wjOudrk1Quj0dqk` | ZIP Archive (.zip) | v1.0.0 | 2026-08-16 | Static Asset Vault | BioLab Equipment Catalog & Carousel |
| Uploaded Master Protocols | Master protocol reference texts | `Biotexnologiya` Root (`1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd`) | Sandbox Local Uploads | Markdown (.md) | v1.0.0 | 2026-08-17 | User Uploads | Audit & Continuity Workflow |

## Classification Rules
- **CURRENT**: Active snapshot `BioLab_Interactive_Guide_source.tar.gz` and active image vault in `Biotexnologiya` root; canonical-name snapshot count must remain `1`. Current ID, modified time and fingerprint are recorded in the latest release output.
- **SUPERSEDED**: Older local zips (replaced by single canonical tarball).
- **ARCHIVED**: Historical snapshots in auxiliary folders.
