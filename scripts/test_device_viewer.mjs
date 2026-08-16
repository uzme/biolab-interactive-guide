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

try {
  const desktop = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await desktop.goto(previewUrl, { waitUntil: "networkidle" });
  await desktop.evaluate(() => window.localStorage.clear());
  await desktop.reload({ waitUntil: "networkidle" });
  const carouselScene = desktop.locator(".pure3d-carousel .scene");
  await carouselScene.waitFor({ state: "visible" });
  await desktop.addStyleTag({ content: ".pure3d-carousel .a3d { animation-play-state: paused !important; }" });
  await assert(await desktop.locator(".pure3d-carousel .a3d").count() === 1, "Original .a3d 3D halqa konteyneri topilmadi.");
  await assert(await desktop.locator(".pure3d-carousel .card").count() === 12, "Carousel original .card tuzilmasida 12 ta qurilmani ko‘rsatmadi.");
  await assert(await desktop.locator(".pure3d-carousel .carousel-item").count() === 0, "Original carousel classlari o‘rniga eski grid classlari qolib ketgan.");

  const carouselBookmark = desktop.locator('.pure3d-carousel .card').first().locator('[data-bookmark-button]');
  await carouselBookmark.dispatchEvent("click");
  await assert(await carouselBookmark.getAttribute("aria-pressed") === "true", "Carousel qurilmasi saralanganlarga saqlanmadi.");
  await desktop.reload({ waitUntil: "networkidle" });
  const catalogBookmark = desktop.locator("article.equipment-card").first().getByRole("button", { name: /saralanganlardan olib tashlash/ });
  await assert(await catalogBookmark.getAttribute("aria-pressed") === "true", "Saralangan qurilma brauzer xotirasidan qayta tiklanmadi.");
  await desktop.getByRole("button", { name: /^Saralanganlar/ }).click();
  await assert(await desktop.locator("article.equipment-card").count() === 1, "Saralanganlar filtri faqat saqlangan qurilmani ko‘rsatmadi.");
  await catalogBookmark.click();
  await assert(await desktop.getByText("Qurilma topilmadi").isVisible(), "Saralangan qurilma o‘chirilgandan keyin bo‘sh holat ko‘rsatilmagan.");
  await desktop.evaluate(() => window.localStorage.clear());
  await desktop.reload({ waitUntil: "networkidle" });

  await desktop.getByRole("button", { name: "Sozlamalar va Mualliflik Huquqi" }).click();
  await assert(await desktop.getByText("Sozlamalar va Mualliflik Huquqi").isVisible(), "Sozlamalar paneli ochilmadi.");
  await desktop.getByRole("button", { name: "Tushunarli, yopish" }).click();

  await desktop.getByRole("button", { name: /O‘rganish/ }).first().click();
  await desktop.getByText("Molekulyar biologiya / BIO-001").waitFor({ state: "visible" });
  await assert(await desktop.getByText("Molekulyar biologiya / BIO-001").isVisible(), "BIO-001 qurilma sahifasi ochilmadi.");
  await desktop.getByRole("heading", { name: "Manba va foydalanish holati" }).waitFor({ state: "visible" });
  await assert(await desktop.getByRole("heading", { name: "Manba va foydalanish holati" }).isVisible(), "Rasm manbasi va foydalanish shaffofligi bloki ko‘rinmadi.");

  const learningNavigation = desktop.getByRole("navigation", { name: "16 bo‘limli o‘quv dasturi" });
  await assert(await learningNavigation.getByRole("button").count() === 16, "Qurilma sahifasida 16 ta o‘quv bo‘limi ko‘rsatilmagan.");
  await learningNavigation.getByRole("button", { name: /Ishonchli o‘quv manbalari/ }).click();
  await assert(await desktop.getByRole("heading", { name: "Ishonchli o‘quv manbalari" }).isVisible(), "16-bo‘limdagi manbalar bo‘limi ochilmadi.");

  await desktop.locator("header button:has-text('Barcha uskunalar')").click();
  await assert(await desktop.locator("article.equipment-card").count() === 100, "Qurilma sahifasidan katalogga qaytishda 100 ta karta tiklanmadi.");

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto(previewUrl, { waitUntil: "networkidle" });
  await mobile.getByRole("button", { name: "Menyuni ochish" }).click();
  await assert(await mobile.getByRole("button", { name: "Menyuni yopish" }).isVisible(), "Mobil menyu ochilmadi.");
  await mobile.getByRole("button", { name: "Menyuni yopish" }).click();
  await assert(!(await mobile.getByRole("button", { name: "Menyuni yopish" }).isVisible()), "Mobil menyu yopilmadi.");

  await desktop.close();
  await mobile.close();
  console.log("Qurilma tafsiloti, rasm shaffofligi, 16-bo‘limli o‘quv oqimi va mobil menyu muvaffaqiyatli tekshirildi.");
} finally {
  await browser.close();
}
