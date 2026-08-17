# BioLab Interactive Guide — Reproduction Guide

This guide details how to reproduce the BioLab Interactive Guide from the canonical sanitised archive in the `uzme/second-brain` repository without relying on the original working directory or committed secrets.

## Step 1: Clone the Canonical Second Brain Repository

```bash
git clone https://github.com/uzme/second-brain.git
cd second-brain/projects/biolab-guide
```

The BioLab project is stored under `projects/biolab-guide` in the Second Brain repository. The repository root is a pnpm workspace for a different application, so BioLab dependency installation must explicitly ignore the parent workspace.

## Step 2: Install Runtime and Dependencies

Ensure Node.js v22 or newer and pnpm are installed. Run the following command from `second-brain/projects/biolab-guide`:

```bash
pnpm install --ignore-workspace --frozen-lockfile --ignore-scripts
```

The `--ignore-workspace` flag is required because the nested BioLab project has its own `package.json` and lockfile, while the parent Second Brain repository has a separate workspace configuration. The frozen lockfile ensures that dependency resolution is reproducible, and `--ignore-scripts` avoids executing arbitrary package lifecycle scripts during the initial audit install.

## Step 3: Configure Environment Without Committing Secrets

The sanitised archive intentionally excludes `.env` files and secret values. Configure required runtime variables through the local environment or the hosting platform’s secret manager, using `SECRETS_REQUIRED.md` as the reference. Never commit `DATABASE_URL`, OAuth values, API keys, tokens, passwords, PATs, or service-role keys.

```bash
# Create a local, untracked environment file only when the deployment requires it.
# Do not copy it into the repository or the release archive.
touch .env
```

## Step 4: Configure Database When Required

If a local database is required, provide `DATABASE_URL` through the untracked environment and apply the project’s schema workflow. Do not place database credentials in source files, fixtures, snapshots, or documentation.

```bash
pnpm db:push
```

## Step 5: Run Deterministic Verification

Run these commands from `second-brain/projects/biolab-guide`:

```bash
pnpm run check
pnpm build
pnpm test
```

The release workflow also runs `node scripts/test_carousel_pagination_browser.mjs` against the running development server and performs a secret scan before creating a snapshot. For a manual browser verification, start the server in a separate terminal:

```bash
pnpm dev
node scripts/test_device_viewer.mjs
```

The current clean-clone verification passed with the nested install command above, TypeScript check, and production build. The production build continues to report only non-blocking large-chunk and CSS gradient-syntax warnings; these warnings do not prevent compilation.

## Step 6: Safe Release Synchronisation

From the original working project, after tests and production build pass, run:

```bash
node scripts/sync_release.mjs --check
node scripts/sync_release.mjs --publish
```

The release script creates a sanitised archive, excludes `.env*`, `.git`, runtime logs, dependency folders, build outputs, and archive files, scans source text for common secret formats, pushes the verified BioLab source under `projects/biolab-guide` to `uzme/second-brain` `main`, and creates or updates the single BioLab snapshot inside the configured Second Brain Drive parent. It does not write to the former BioLab-specific Drive folder.
