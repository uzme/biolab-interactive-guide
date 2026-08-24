import { chromium } from "playwright";

const previewUrl = "http://127.0.0.1:3000/?direct=1";
const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

for (const viewport of [{ width: 390, height: 844 }, { width: 1280, height: 900 }]) {
  const page = await browser.newPage({ viewport });
  await page.goto(previewUrl, { waitUntil: "networkidle" });

  const hero = page.locator("[data-hero-surface]");
  const learningPath = page.locator("[data-hero-learning-path]");
  await hero.waitFor();
  await learningPath.waitFor();

  assert(await page.getByRole("heading", { name: /Qurilmani bilib oling/i }).isVisible(), `${viewport.width}px viewportda yangi landing hero sarlavhasi ko‘rinmadi.`);
  assert(await learningPath.getByText("16 BO‘LIMLI SOP", { exact: true }).isVisible(), `${viewport.width}px viewportda 16 bo‘limli SOP ko‘rsatkichi ko‘rinmadi.`);
  assert(await learningPath.locator("[role=listitem]").count() === 4, `${viewport.width}px viewportda 4 bosqichli o‘quv xaritasi to‘liq emas.`);
  assert(await learningPath.getByText("Amaliyot", { exact: true }).isVisible(), `${viewport.width}px viewportda o‘quv yo‘li bosqichlari ko‘rinmadi.`);
  assert(await learningPath.getByText("Manbalar", { exact: true }).isVisible(), `${viewport.width}px viewportda yakuniy manbalar bosqichi ko‘rinmadi.`);

  const heroBounds = await hero.boundingBox();
  const pathBounds = await learningPath.boundingBox();
  assert(Boolean(heroBounds) && heroBounds.width <= viewport.width + 0.5, `${viewport.width}px viewportda hero ekran kengligidan chiqdi.`);
  assert(Boolean(pathBounds) && pathBounds.width <= viewport.width - 28, `${viewport.width}px viewportda o‘quv yo‘li card’i gorizontal overflow berdi.`);

  await page.getByRole("button", { name: /Katalogni ko‘rish/i }).click();
  await page.locator("#catalog").waitFor({ state: "visible" });
  await page.close();
}

await browser.close();
console.log("Yangi landing hero 390px mobil va 1280px desktop viewportlarda muvaffaqiyatli tekshirildi.");
