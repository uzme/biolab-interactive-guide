import express from "express";
import rateLimit from "express-rate-limit";
import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");
  const fallbackDocument = await readFile(path.join(staticPath, "index.html"), "utf8");

  app.use(express.static(staticPath));

  // Protect the file-system backed SPA fallback without limiting static assets.
  const spaFallbackLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
  });

  // Handle client-side routing - serve index.html for all routes.
  // The fallback document is loaded once at startup; route responses avoid disk I/O.
  app.use(spaFallbackLimiter);
  app.get("*", (_req, res) => {
    res.type("html").send(fallbackDocument);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
