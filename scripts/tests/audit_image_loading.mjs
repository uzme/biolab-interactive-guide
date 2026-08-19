import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const previewUrl = "http://127.0.0.1:3000/";
const outputDir = "/home/ubuntu/biolab-image-audit";
const imagePattern = /\/manus-storage\/biolab-equipment-/;

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });

const startedAt = Date.now();
await page.goto(previewUrl, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1_600);

const initial = await page.evaluate((pattern) => {
  const resources = performance.getEntriesByType("resource")
    .filter((entry) => new RegExp(pattern).test(entry.name))
    .map((entry) => ({
      name: entry.name.split("/").at(-1),
      startTime: Math.round(entry.startTime),
      duration: Math.round(entry.duration),
      transferSize: "transferSize" in entry ? entry.transferSize : 0,
    }));
  const cardImages = Array.from(document.querySelectorAll("article.equipment-card figure img"))
    .filter((image) => !image.hasAttribute("aria-hidden"))
    .map((image) => ({
      src: image.currentSrc.split("/").at(-1),
      complete: image.complete,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
      loading: image.loading,
      fetchPriority: image.fetchPriority,
    }));
  return { resources, cardImages };
}, imagePattern.source);

await page.locator("article.equipment-card").nth(15).scrollIntoViewIfNeeded();
await page.waitForTimeout(900);

const afterScroll = await page.evaluate((pattern) => performance.getEntriesByType("resource")
  .filter((entry) => new RegExp(pattern).test(entry.name))
  .map((entry) => ({
    name: entry.name.split("/").at(-1),
    startTime: Math.round(entry.startTime),
    duration: Math.round(entry.duration),
    transferSize: "transferSize" in entry ? entry.transferSize : 0,
  })), imagePattern.source);

const result = {
  auditedAt: new Date().toISOString(),
  elapsedMs: Date.now() - startedAt,
  initial,
  afterScroll,
  summary: {
    initialRequests: initial.resources.length,
    initialHighPriority: initial.cardImages.filter((image) => image.fetchPriority === "high").length,
    completedInitialImages: initial.cardImages.filter((image) => image.complete && image.naturalWidth > 0).length,
    totalRequestsAfterScroll: afterScroll.length,
  },
};

await writeFile(`${outputDir}/image-loading-audit.json`, JSON.stringify(result, null, 2));
console.log(JSON.stringify(result.summary, null, 2));

await browser.close();
