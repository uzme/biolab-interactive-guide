import { chromium } from "playwright";

const previewUrlObject = new URL(process.env.BIOLAB_TEST_URL || "http://127.0.0.1:3000/");
previewUrlObject.searchParams.set("direct", "1");
const previewUrl = previewUrlObject.toString();
const testCases = [
  { deviceIndex: 0, block: 1 },
  { deviceIndex: 25, block: 2 },
  { deviceIndex: 50, block: 3 },
  { deviceIndex: 75, block: 4 },
];
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

try {
  for (const { deviceIndex, block } of testCases) {
    const context = await browser.newContext({ serviceWorkers: "block" });
    const page = await context.newPage();
    await page.route(`**/*learningDataBlock${block}*`, async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      await route.continue();
    });
    await page.goto(previewUrl, { waitUntil: "commit", timeout: 60_000 });
    const cards = page.locator("article.equipment-card");
    await cards.first().waitFor({ state: "visible" });
    await cards.nth(deviceIndex).getByRole("button", { name: "O‘rganish" }).click();

    const loadingHeading = page.getByRole("heading", { name: "O‘quv dosyesi yuklanmoqda…" });
    await loadingHeading.waitFor({ state: "visible", timeout: 10_000 });
    await assert(await page.locator("[data-device-viewer] [role='status']").isVisible(), `Learning block ${block}: loading status semantikasi ko‘rinmadi.`);
    await page.waitForFunction(() => document.querySelectorAll('nav[aria-label="16 bo‘limli o‘quv dasturi"] button').length === 16, null, { timeout: 30_000 });
    await loadingHeading.waitFor({ state: "hidden", timeout: 5_000 });
    await context.close();
  }

  console.log("To‘rtta dinamik learning bloki uchun loading UI va 16-bo‘limga o‘tish muvaffaqiyatli tekshirildi.");
} finally {
  await browser.close();
}
