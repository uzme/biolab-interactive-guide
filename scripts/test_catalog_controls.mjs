import { chromium } from "playwright";

const previewUrl = "http://127.0.0.1:3000/";
const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const cardCodes = async () => page.locator("article.equipment-card [data-equipment-code]").allTextContents();

await page.goto(previewUrl, { waitUntil: "networkidle" });
await page.locator("#catalog").scrollIntoViewIfNeeded();

const priorityImages = page.locator("article.equipment-card img[loading='eager'][fetchpriority='high']");
assert(await priorityImages.count() === 3, "Birinchi uchta karta rasmi ustuvor yuklanishga belgilanmadi.");
await page.waitForFunction(() => {
  const image = document.querySelector("article.equipment-card img");
  return image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0 && getComputedStyle(image).opacity === "1";
}, undefined, { timeout: 10_000 });
assert(await page.locator("article.equipment-card").first().getByText("Rasm yuklanmoqda").count() === 0, "Desktopda birinchi katalog rasmi yuklangandan keyin loading holati yopilmadi.");

let codes = await cardCodes();
assert(codes.length === 100, `Boshlang‘ich katalogda 100 ta karta kutilgan, ${codes.length} ta topildi.`);
assert(codes[0] === "BIO-001" && codes.at(-1) === "BIO-100", `Boshlang‘ich tartib noto‘g‘ri: ${codes[0]} … ${codes.at(-1)}.`);

const deviceSearch = page.getByPlaceholder("Qurilma yoki manufacturer qidiring...");
await deviceSearch.fill("PCR");
assert((await page.locator("article.equipment-card").count()) > 0, "PCR qidiruvi natija bermadi.");
await page.getByRole("button", { name: "Qurilma qidiruvini bekor qilish" }).click();
await page.waitForFunction(() => document.querySelector('[placeholder="Qurilma yoki manufacturer qidiring..."]')?.value === "");
assert(await deviceSearch.inputValue() === "", "Qurilma qidiruvi bekor qilinmadi.");

const modelSearch = page.getByPlaceholder("Model: masalan, CFX96 yoki TSX");
await modelSearch.fill("CFX96");
assert((await page.locator("article.equipment-card").count()) > 0, "Model qidiruvi natija bermadi.");
await page.getByRole("button", { name: "Model qidiruvini bekor qilish" }).click();
await page.waitForFunction(() => document.querySelector('[placeholder="Model: masalan, CFX96 yoki TSX"]')?.value === "");
assert(await modelSearch.inputValue() === "", "Model qidiruvi bekor qilinmadi.");

const categorySelect = page.getByLabel("Kategoriya bo‘yicha filtr");
await categorySelect.selectOption({ label: "Molekulyar biologiya" });
await page.waitForFunction(() => document.querySelectorAll("article.equipment-card").length === 16);
assert((await page.locator("article.equipment-card").count()) === 16, "Molekulyar biologiya filtri 16 ta kartani qaytarmadi.");
await page.getByRole("button", { name: "Kategoriya filtrini bekor qilish" }).click();
await page.waitForFunction(() => document.querySelector('[aria-label="Kategoriya bo‘yicha filtr"]')?.value === "Barcha uskunalar");
assert(await categorySelect.inputValue() === "Barcha uskunalar", "Kategoriya filtri qayta tiklanmadi.");

await deviceSearch.fill("mavjud-emas-tekshiruv");
await page.getByText("Qurilma topilmadi").waitFor({ state: "visible" });
assert(await page.getByText("Qurilma topilmadi").isVisible(), "Natija yo‘q holati ko‘rsatilmagan.");
await page.getByRole("button", { name: "Barchasini tozalash" }).click();
await page.waitForFunction(() => {
  const device = document.querySelector('[placeholder="Qurilma yoki manufacturer qidiring..."]')?.value;
  const model = document.querySelector('[placeholder="Model: masalan, CFX96 yoki TSX"]')?.value;
  const category = document.querySelector('[aria-label="Kategoriya bo‘yicha filtr"]')?.value;
  return device === "" && model === "" && category === "Barcha uskunalar";
});
assert(await deviceSearch.inputValue() === "" && await modelSearch.inputValue() === "" && await categorySelect.inputValue() === "Barcha uskunalar", "Umumiy tozalash barcha boshqaruvlarni qayta tiklamadi.");

codes = await cardCodes();
assert(codes.length === 100 && codes[0] === "BIO-001" && codes.at(-1) === "BIO-100", "Tozalashdan keyin BIO-001–BIO-100 tartibi tiklanmadi.");

const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
await mobilePage.goto(previewUrl, { waitUntil: "domcontentloaded" });
await mobilePage.locator("#catalog").scrollIntoViewIfNeeded();
await mobilePage.waitForFunction(() => {
  const image = document.querySelector("article.equipment-card img");
  return image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0 && getComputedStyle(image).opacity === "1";
}, undefined, { timeout: 10_000 });
assert(await mobilePage.locator("article.equipment-card img[loading='eager'][fetchpriority='high']").count() === 3, "Mobil ekranda birinchi kartalar uchun rasm priority qoidasi yo‘q.");
assert(await mobilePage.locator("article.equipment-card").first().getByText("Rasm yuklanmoqda").count() === 0, "Mobil ekranda birinchi karta rasm yuklangandan keyin loading holati yopilmadi.");
await mobilePage.close();

await browser.close();
console.log("Katalog tartibi, qidiruv/tozalash boshqaruvlari va mobil rasm yuklanishi muvaffaqiyatli tekshirildi.");
