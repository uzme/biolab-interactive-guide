# BioLab Interactive Guide — Reproduction Guide

This guide details the step-by-step instructions to clone, configure, and run the BioLab Interactive Guide project in a clean environment.

## Step 1: Clone Repository
```bash
git clone https://github.com/uzme/biolab-interactive-guide.git
cd biolab-interactive-guide
```

## Step 2: Install Runtime & Dependencies
Ensure Node.js (v22+) and pnpm are installed.
```bash
pnpm install
```

## Step 3: Configure Environment
Copy `.env.example` to `.env` and configure required variables as outlined in `SECRETS_REQUIRED.md`.
```bash
cp .env.example .env
```

## Step 4: Configure Database
Ensure your MySQL/TiDB database is running and `DATABASE_URL` is configured in `.env`. Run schema migrations:
```bash
pnpm db:push
```

## Step 5: Start Development Server
```bash
pnpm dev
```

## Step 6: Run Tests and Verification
```bash
pnpm check
pnpm test
node scripts/test_device_viewer.mjs
```
