import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredDocs = [
  "README.md",
  "PROJECT_MANIFEST.md",
  "ARCHITECTURE.md",
  "DATABASE.md",
  "REPRODUCTION.md",
  "AI_HANDOFF.md",
  "CURRENT_STATE.md",
  "PROJECT_INVENTORY.md",
  "DECISIONS.md",
  "CHANGELOG.md",
  "TROUBLESHOOTING.md",
  "SECRETS_REQUIRED.md",
  "PROJECT_STATE.md",
  "DRIVE_INDEX.md",
  "GITHUB_INDEX.md",
  "RESTORATION_MAP.md",
  "CONTINUITY_AUDIT.md",
  "LICENSE",
  "CONTRIBUTING.md",
  "SECURITY.md",
];

const missing = requiredDocs.filter((file) => !fs.existsSync(path.join(root, file)));
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const crossLinkChecks = {
  githubCanonicalRepo: read("GITHUB_INDEX.md").includes("github.com/uzme/second-brain"),
  driveRootId: read("DRIVE_INDEX.md").includes("1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd"),
  restorationHasGitHub: read("RESTORATION_MAP.md").includes("github.com/uzme/second-brain"),
  restorationHasDrive: read("RESTORATION_MAP.md").includes("1ZWf2MrB1FDN1PmcX9-e1sHrbx4X2QxQd"),
  stateHasExceptionStatus: ["PROJECT_STATE.md", "CURRENT_STATE.md", "CONTINUITY_AUDIT.md"].every((file) => read(file).includes("READY WITH EXCEPTION")),
  auditHasEnvException: read("CONTINUITY_AUDIT.md").includes(".env.example") && read("CONTINUITY_AUDIT.md").includes("NOT READY"),
};

const envExamplePresent = fs.existsSync(path.join(root, ".env.example"));
const result = {
  generatedAt: new Date().toISOString(),
  requiredDocumentCount: requiredDocs.length,
  missingRequiredDocs: missing,
  envExamplePresent,
  envExampleException: !envExamplePresent && crossLinkChecks.auditHasEnvException,
  crossLinkChecks,
  status: missing.length === 0 ? "READY" : "NOT_READY",
};
console.log(JSON.stringify(result, null, 2));
if (result.status === "NOT_READY") process.exitCode = 1;
