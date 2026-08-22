import { chromium } from "playwright";

const previewUrl = new URL(process.env.BIOLAB_TEST_URL || "http://127.0.0.1:3000/").toString();
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const openFirstDevice = async (page) => {
  await page.goto(previewUrl, { waitUntil: "domcontentloaded" });
  await page.locator("article.equipment-card").first().getByRole("button", { name: "O‘rganish" }).click();
};

try {
  const learningContext = await browser.newContext({ serviceWorkers: "block" });
  const learningFailurePage = await learningContext.newPage();
  await learningFailurePage.route("**/*learningDataBlock1*", (route) => route.abort("failed"));
  await openFirstDevice(learningFailurePage);
  await learningFailurePage.getByRole("heading", { name: "O‘quv dosyesi yuklanmadi" }).waitFor({ state: "visible", timeout: 30_000 });
  await assert(await learningFailurePage.getByRole("button", { name: "Yangilash va qayta ochish" }).isVisible(), "Learning loader xatosida recovery tugmasi ko‘rinmadi.");
  await learningContext.close();

  const purchaseContext = await browser.newContext({ serviceWorkers: "block" });
  const purchaseFailurePage = await purchaseContext.newPage();
  await purchaseFailurePage.route("**/*purchaseDataBlock1*", (route) => route.abort("failed"));
  await openFirstDevice(purchaseFailurePage);
  await purchaseFailurePage.waitForFunction(() => document.querySelectorAll('nav[aria-label="16 bo‘limli o‘quv dasturi"] button').length === 16, null, { timeout: 30_000 });
  await assert(!await purchaseFailurePage.getByRole("heading", { name: "O‘quv dosyesi yuklanmadi" }).isVisible().catch(() => false), "Purchase loader xatosi o‘quv dosyesini to‘sib qo‘ydi.");
  await assert(await purchaseFailurePage.locator("[data-device-viewer]").isVisible(), "Purchase loader xatosida detail oynasi ochiq qolmadi.");
  await purchaseContext.close();

  console.log("Learning va purchase loader xatosi recovery oqimlari muvaffaqiyatli tekshirildi.");
} finally {
  await browser.close();
}
