# BioLab Interactive Guide — Troubleshooting Guide

## Common Issues & Solutions

### 1. TypeScript or Build Errors After Cloning
- **Cause**: Outdated dependencies or missing lockfile sync.
- **Solution**: Run `pnpm install` followed by `pnpm check`. Ensure Node.js v22+ is active.

### 2. Service Worker Not Registering in Development
- **Cause**: Service workers require HTTPS or `localhost` context and proper MIME types.
- **Solution**: Test via `pnpm dev` on `http://localhost:3000` or build and preview locally.

### 3. Google Drive Sync Failure
- **Cause**: Missing or invalid `gws` CLI authentication or incorrect folder ID.
- **Solution**: Verify that `gws` CLI is authenticated and that the target folder ID (`1X_1fA8kg2Mpx6YW1NGrBoPHdjOcZ5Hxw`) matches the designated `Biotexnologiya yangi / Loyiha 1` folder.
