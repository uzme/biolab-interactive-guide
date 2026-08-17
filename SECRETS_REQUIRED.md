# BioLab Interactive Guide — Secrets Required Inventory

## Environment Variables Contract
This application requires specific environment variables for backend database connectivity, OAuth authentication, and API integrations. **No real secrets or production credentials are stored in this repository.**

| Secret Name | Purpose | Where Used | Required For | How to Configure |
|---|---|---|---|---|
| `DATABASE_URL` | MySQL/TiDB connection string | `server/db.ts`, Drizzle | Database persistence | Set in environment or `.env` |
| `JWT_SECRET` | Session cookie signing secret | Backend auth plumbing | Secure user sessions | Generate secure random string |
| `VITE_APP_ID` | Manus OAuth application ID | Frontend auth config | OAuth login flow | Provided by Manus platform |
| `OAUTH_SERVER_URL` | OAuth backend base URL | Backend OAuth routes | Token exchange | System provided |
| `VITE_OAUTH_PORTAL_URL` | Manus login portal URL | Frontend login redirect | User authentication | System provided |
