# BioLab Interactive Guide — Database Documentation

## Database Overview
The application uses Drizzle ORM configured with MySQL/TiDB. The schema is located in `drizzle/schema.ts` and managed through `drizzle.config.ts`. Schema migrations are generated using `drizzle-kit` and applied via `webdev_execute_sql`.

## Schema & Tables
- **`user` Table**: Manages application users, authentication states, roles (`admin` | `user`), and timestamps.
  - Columns: `id`, `openId`, `name`, `email`, `loginMethod`, `role`, `createdAt`, `updatedAt`.
  - Primary Key: `id`.

## Database Operations & Helpers
Query helpers and database connection pooling are implemented in `server/db.ts` utilizing Drizzle ORM type safety. All business timestamps are stored as UTC-based Unix timestamps.

## Migration & Seed Strategy
Database migrations are strictly handled via `drizzle-kit`. No production secrets or sensitive user data are stored in seed fixtures; development data is initialized through structured application models.
