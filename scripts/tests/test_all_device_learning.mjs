import { chromium } from "playwright";

const previewUrl = new URL(process.env.BIOLAB_TEST_URL || "http://127.0.0.1:3000/").toString();
const expectedSections = [
  "Qurilmaning o‘zbekcha nomi",
  "Original nomi, manufacturer va model",
  "Qurilma nima?",
  "Qurilma nima qiladi?",
  "Ishlash prinsipi",
  "Nimalarni o‘rganish mumkin?",
  "Qurilmaning asosiy qismlari",
  "Namuna tayyorlash",
  "Qanday ishlatiladi — bosqichma-bosqich",
  "Natijani o‘qish va talqin qilish",
  "Eng ko‘p uchraydigan xatolar",
  "Xavfsizlik",
  "Tozalash va kundalik xizmat",
  "Kalibratsiya va troubleshooting",
  "O‘rganish uchun amaliy mashqlar",
  "Ishonchli o‘quv manbalari",
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
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const runtimeErrors = [];
  page.on("pageerror", (error) => runtimeErrors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") runtimeErrors.push(`console: ${message.text()}`);
  });
  page.on("requestfailed", (request) => {
    if (!request.url().includes("amplitude.com")) {
      runtimeErrors.push(`requestfailed: ${request.url()} :: ${request.failure()?.errorText || "unknown"}`);
    }
  });

  await page.goto(previewUrl, { waitUntil: "commit", timeout: 60_000 });
  const cards = page.locator("article.equipment-card");
  await cards.first().waitFor({ state: "visible" });
  await assert(await cards.count() === 100, "Katalogda audit uchun 100 ta qurilma topilmadi.");

  for (let index = 0; index < 100; index += 1) {
    const deviceId = `BIO-${String(index + 1).padStart(3, "0")}`;
    const card = cards.nth(index);
    await assert(await card.locator("[data-equipment-code]").innerText() === deviceId, `${deviceId} katalog tartibi buzilgan.`);
    await card.getByRole("button", { name: "O‘rganish" }).click();

    const modal = page.locator("[data-device-modal]");
    const viewer = page.locator("[data-device-viewer]");
    await modal.waitFor({ state: "visible" });
    await viewer.waitFor({ state: "visible" });
    await page.waitForFunction((sectionCount) => {
      const navigation = document.querySelector('nav[aria-label="16 bo‘limli o‘quv dasturi"]');
      return navigation?.querySelectorAll("button").length === sectionCount;
    }, expectedSections.length, { timeout: 30_000 });

    await assert(!await page.getByRole("heading", { name: "O‘quv dosyesi yuklanmadi" }).isVisible().catch(() => false), `${deviceId} o‘quv dosyesi yuklanmadi.`);
    await assert(await viewer.getByText(deviceId, { exact: false }).count() > 0, `${deviceId} detail identifikatori ko‘rinmadi.`);
    const scrollState = await modal.evaluate((element) => ({
      modalScrollTop: element.scrollTop,
      viewerScrollTop: element.firstElementChild?.scrollTop ?? -1,
    }));
    await assert(scrollState.modalScrollTop <= 1 && scrollState.viewerScrollTop <= 1, `${deviceId} detail oynasi yuqoridan ochilmadi.`);

    const navigation = page.getByRole("navigation", { name: "16 bo‘limli o‘quv dasturi" });
    await assert(await navigation.getByRole("button").count() === expectedSections.length, `${deviceId} uchun 16 bo‘lim to‘liq ko‘rinmadi.`);

    const navigationText = await navigation.innerText();
    for (const sectionTitle of expectedSections) {
      await assert(navigationText.includes(sectionTitle), `${deviceId} / ${sectionTitle}: navigatsiya sarlavhasi yo‘q.`);
    }

    const firstSection = viewer.getByRole("heading", { name: expectedSections[0], exact: true });
    await firstSection.waitFor({ state: "visible", timeout: 5_000 });
    const firstSectionArticle = firstSection.locator("xpath=ancestor::article[1]");
    await assert((await firstSectionArticle.innerText()).trim().length > expectedSections[0].length + 20, `${deviceId}: birinchi o‘quv bo‘limi bo‘sh.`);

    const sourcesButton = navigation.locator("button").filter({ hasText: "Ishonchli o‘quv manbalari" }).first();
    await sourcesButton.click();
    const sourcesSection = viewer.getByRole("heading", { name: "Ishonchli o‘quv manbalari", exact: true });
    await sourcesSection.waitFor({ state: "visible", timeout: 5_000 });
    const sourcesArticle = sourcesSection.locator("xpath=ancestor::article[1]");
    await assert(await sourcesArticle.getByRole("heading", { level: 3 }).count() > 0, `${deviceId}: 16-bo‘limda o‘quv manbasi yo‘q.`);

    await modal.evaluate((element) => {
      element.scrollTop = element.scrollHeight;
      element.firstElementChild?.scrollTo(0, element.firstElementChild.scrollHeight);
    });
    await viewer.getByRole("button", { name: "Barcha uskunalar", exact: true }).click();
    await modal.waitFor({ state: "hidden" });
  }

  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1",
  });
  const mobile = await mobileContext.newPage();
  await mobile.goto(previewUrl, { waitUntil: "commit", timeout: 60_000 });
  const mobileCards = mobile.locator("article.equipment-card");
  await mobileCards.first().waitFor({ state: "visible" });
  await assert(await mobileCards.count() === 100, "Mobil katalogda audit uchun 100 ta qurilma topilmadi.");

  for (let index = 0; index < 100; index += 1) {
    const deviceId = `BIO-${String(index + 1).padStart(3, "0")}`;
    await mobileCards.nth(index).getByRole("button", { name: "O‘rganish" }).click();
    const modal = mobile.locator("[data-device-modal]");
    const viewer = mobile.locator("[data-device-viewer]");
    await modal.waitFor({ state: "visible" });
    await viewer.waitFor({ state: "visible" });
    await mobile.waitForFunction((sectionCount) => document.querySelectorAll('nav[aria-label="16 bo‘limli o‘quv dasturi"] button').length === sectionCount, expectedSections.length, { timeout: 30_000 });
    await assert(await modal.getAttribute("role") === "dialog" && await modal.getAttribute("aria-modal") === "true", `${deviceId}: mobil modal semantikasi noto‘g‘ri.`);
    await assert(!await mobile.getByRole("heading", { name: "O‘quv dosyesi yuklanmadi" }).isVisible().catch(() => false), `${deviceId}: mobil o‘quv dosyesi yuklanmadi.`);
    const metrics = await modal.evaluate((element) => {
      const panel = element.querySelector("[data-device-modal-panel]");
      const scrollContainer = panel?.firstElementChild;
      return {
        modalScrollTop: scrollContainer?.scrollTop ?? -1,
        viewerScrollTop: scrollContainer?.scrollTop ?? -1,
        modalHeight: element.getBoundingClientRect().height,
        viewportHeight: window.innerHeight,
        overlayOverflowY: window.getComputedStyle(element).overflowY,
        scrollOverflowY: scrollContainer ? window.getComputedStyle(scrollContainer).overflowY : "",
      };
    });
    await assert(metrics.modalScrollTop <= 1 && metrics.viewerScrollTop <= 1, `${deviceId}: mobil detail yuqoridan ochilmadi.`);
    await assert(metrics.modalHeight >= metrics.viewportHeight - 2 && metrics.overlayOverflowY === "hidden" && metrics.scrollOverflowY === "auto", `${deviceId}: mobil detail scroll konteyneri noto‘g‘ri.`);
    await viewer.getByRole("button", { name: "Barcha uskunalar", exact: true }).click();
    await modal.waitFor({ state: "hidden" });
  }
  await mobile.close();
  await mobileContext.close();

  await assert(runtimeErrors.length === 0, `Detail auditida runtime xatolari qayd etildi: ${runtimeErrors.join(" | ")}`);
  console.log("BIO-001–BIO-100 uchun 16 bo‘limli ‘O‘rganish’ detail auditi muvaffaqiyatli tugadi.");
} finally {
  await browser.close();
}
