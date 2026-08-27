import { chromium } from "playwright";

const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

await page.goto("http://127.0.0.1:3000/?direct=1", { waitUntil: "networkidle" });
const images = page.locator("article.equipment-card figure img");

assert(await images.count() === 100, "Katalogdagi 100 qurilma rasmi topilmadi.");

const priority = await images.evaluateAll((nodes) => nodes.map((image) => ({
  loading: image.getAttribute("loading"),
  fetchPriority: image.getAttribute("fetchpriority"),
})));

const eagerImages = priority.filter((image) => image.loading === "eager");
const highPriorityImages = priority.filter((image) => image.fetchPriority === "high");
const lazyImages = priority.filter((image) => image.loading === "lazy");

assert(eagerImages.length === 3, `Boshlang‘ich yuklanishda 3 ta emas, ${eagerImages.length} ta rasm eager holatiga qo‘yilgan.`);
assert(highPriorityImages.length === 3, `Faqat hero yaqinidagi 3 ta rasm high priority bo‘lishi kerak, hozir ${highPriorityImages.length} ta.`);
assert(lazyImages.length === 97, `Viewportdan tashqaridagi 97 ta rasm lazy bo‘lishi kerak, hozir ${lazyImages.length} ta.`);

await browser.close();
console.log("Boshlang‘ich 3 ta rasm ustuvor, qolgan 97 ta rasm lazy yuklanishi muvaffaqiyatli tekshirildi.");
