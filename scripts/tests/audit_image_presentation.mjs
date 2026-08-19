import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const previewUrl = "http://127.0.0.1:3000/";
const outputDir = "/home/ubuntu/biolab-image-audit";
const outputFile = `${outputDir}/image-background-audit.json`;

const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
await page.goto(previewUrl, { waitUntil: "networkidle" });

const cards = page.locator("article.equipment-card");
const audit = [];

for (let index = 0; index < await cards.count(); index += 1) {
  const card = cards.nth(index);
  const figure = card.locator("figure");
  const image = figure.locator("img").last();

  await figure.scrollIntoViewIfNeeded();
  await image.waitFor({ state: "visible" });
  await page.waitForTimeout(35);

  audit.push(await figure.evaluate((figureNode) => {
    const cardNode = figureNode.closest("article");
    const imageNode = figureNode.querySelector("img:last-of-type");
    const id = [...figureNode.querySelectorAll("span")].map((node) => node.textContent?.trim() ?? "").find((text) => /^BIO-\d{3}$/.test(text)) ?? "UNKNOWN";

    if (!(imageNode instanceof HTMLImageElement) || !imageNode.naturalWidth || !imageNode.naturalHeight) {
      return { id, status: "image-not-loaded" };
    }

    const canvas = document.createElement("canvas");
    const width = 240;
    const height = Math.max(1, Math.round(width * imageNode.naturalHeight / imageNode.naturalWidth));
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context?.drawImage(imageNode, 0, 0, width, height);
    const pixels = context?.getImageData(0, 0, width, height).data;

    const sampleRect = (x0, y0, x1, y1) => {
      if (!pixels) return { luminance: 0, saturation: 0, variance: 0 };
      let luminance = 0;
      let saturation = 0;
      let luminanceSquared = 0;
      let count = 0;
      for (let y = y0; y < y1; y += 1) {
        for (let x = x0; x < x1; x += 1) {
          const offset = (y * width + x) * 4;
          const red = pixels[offset] / 255;
          const green = pixels[offset + 1] / 255;
          const blue = pixels[offset + 2] / 255;
          const value = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
          luminance += value;
          luminanceSquared += value * value;
          saturation += Math.max(red, green, blue) - Math.min(red, green, blue);
          count += 1;
        }
      }
      const averageLuminance = luminance / count;
      return {
        luminance: Number(averageLuminance.toFixed(3)),
        saturation: Number((saturation / count).toFixed(3)),
        variance: Number(Math.max(0, luminanceSquared / count - averageLuminance ** 2).toFixed(4)),
      };
    };

    const edge = Math.max(12, Math.round(Math.min(width, height) * 0.14));
    const corners = [
      sampleRect(0, 0, edge, edge),
      sampleRect(width - edge, 0, width, edge),
      sampleRect(0, height - edge, edge, height),
      sampleRect(width - edge, height - edge, width, height),
    ];
    const whiteCorners = corners.filter((corner) => corner.luminance >= 0.82 && corner.saturation <= 0.2 && corner.variance <= 0.03).length;
    const darkCorners = corners.filter((corner) => corner.luminance <= 0.26 && corner.variance <= 0.03).length;
    const backgroundProfile = whiteCorners >= 3 ? "paper" : darkCorners >= 3 ? "ink" : "laboratory";

    const style = getComputedStyle(imageNode);
    const figureStyle = getComputedStyle(figureNode);
    return {
      id,
      status: "ok",
      naturalSize: [imageNode.naturalWidth, imageNode.naturalHeight],
      aspectRatio: Number((imageNode.naturalWidth / imageNode.naturalHeight).toFixed(3)),
      corners,
      whiteCorners,
      darkCorners,
      backgroundProfile,
      objectFit: style.objectFit,
      objectPosition: style.objectPosition,
      renderedBackground: figureStyle.backgroundColor,
      cardImageBox: figureNode.getBoundingClientRect().toJSON(),
      cardBox: cardNode?.getBoundingClientRect().toJSON() ?? null,
    };
  }));
}

await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, JSON.stringify(audit, null, 2));

const summary = audit.reduce((counts, item) => {
  counts[item.backgroundProfile] = (counts[item.backgroundProfile] ?? 0) + 1;
  return counts;
}, {});

console.log(JSON.stringify({ audited: audit.length, summary, outputFile }, null, 2));
await browser.close();
