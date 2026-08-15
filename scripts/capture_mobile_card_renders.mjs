import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const previewUrl = "http://127.0.0.1:3000/";
const outputDir = "/home/ubuntu/biolab-image-audit/rendered-mobile-cards";

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });

await page.goto(previewUrl, { waitUntil: "networkidle" });
await page.waitForTimeout(500);

const cards = page.locator("article.equipment-card");
const count = await cards.count();
const diagnostics = [];

for (let index = 0; index < count; index += 1) {
  const card = cards.nth(index);
  const imageWindow = card.locator("figure");
  const image = imageWindow.locator("img").last();
  const imageKey = await imageWindow.locator("span").last().textContent();

  await imageWindow.scrollIntoViewIfNeeded();
  await page.waitForTimeout(80);

  const id = imageKey?.trim() || `CARD-${String(index + 1).padStart(3, "0")}`;
  await imageWindow.screenshot({ path: join(outputDir, `${id}.png`) });

  diagnostics.push({
    id,
    index,
    cardBox: await card.boundingBox(),
    imageWindowBox: await imageWindow.boundingBox(),
    imageBox: await image.boundingBox(),
    presentation: await image.evaluate((node) => {
      const style = getComputedStyle(node);
      return {
        objectFit: style.objectFit,
        objectPosition: style.objectPosition,
        src: node.currentSrc,
        naturalWidth: node.naturalWidth,
        naturalHeight: node.naturalHeight,
      };
    }),
  });
}

await writeFile(join(outputDir, "diagnostics.json"), JSON.stringify(diagnostics, null, 2));
await browser.close();

console.log(`Captured ${count} mobile card image windows in ${outputDir}`);
