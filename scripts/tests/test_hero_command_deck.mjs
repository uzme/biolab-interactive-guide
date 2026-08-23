import { chromium } from "playwright";

const previewUrl = "http://127.0.0.1:3000/";
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

  assert(await page.getByRole("heading", { name: /Qurilmani tushuning/i }).isVisible(), `${viewport.width}px viewportda yangi hero sarlavhasi ko‘rinmadi.`);
  assert(await learningPath.locator(".hero-learning-progress > span").count() === 16, `${viewport.width}px viewportda 16 bo‘limli progress ko‘rsatkichi to‘liq emas.`);
  assert(await learningPath.getByText("Tushuncha").isVisible(), `${viewport.width}px viewportda o‘quv yo‘li bosqichlari ko‘rinmadi.`);
  assert(await learningPath.getByText("Manbalar", { exact: true }).isVisible(), `${viewport.width}px viewportda yakuniy manbalar bosqichi ko‘rinmadi.`);

  const heroBounds = await hero.boundingBox();
  const pathBounds = await learningPath.boundingBox();
  assert(Boolean(heroBounds) && heroBounds.width <= viewport.width + 0.5, `${viewport.width}px viewportda hero ekran kengligidan chiqdi.`);
  assert(Boolean(pathBounds) && pathBounds.width <= viewport.width - 28, `${viewport.width}px viewportda o‘quv yo‘li card’i gorizontal overflow berdi.`);

  await page.getByRole("button", { name: /Katalogni ochish/i }).click();
  await page.locator("#catalog").waitFor({ state: "visible" });
  await page.close();
}

await browser.close();
console.log("Yangi hero command-deck 390px mobil va 1280px desktop viewportlarda muvaffaqiyatli tekshirildi.");
