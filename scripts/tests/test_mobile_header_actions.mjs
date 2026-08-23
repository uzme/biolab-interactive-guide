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

for (const width of [320, 375, 390]) {
  const page = await browser.newPage({ viewport: { width, height: 844 } });
  await page.goto(previewUrl, { waitUntil: "networkidle" });
  const header = page.locator("header.app-header");
  const actionCluster = header.locator("[data-mobile-header-actions]");
  await actionCluster.waitFor();

  assert(await page.getByRole("button", { name: "Menyuni ochish" }).isVisible(), `${width}px da mobil menyu boshqaruvi ko‘rinmadi.`);
  assert(await actionCluster.locator("[data-header-action='offline']").isVisible(), `${width}px da offline paket actioni yashirildi.`);
  assert(await actionCluster.locator("[data-header-action='theme']").isVisible(), `${width}px da mavzu action-kartasi ko‘rinmadi.`);
  assert(await actionCluster.locator("[data-header-action='bookmarks']").isVisible(), `${width}px da xatcho‘p action-kartasi ko‘rinmadi.`);
  assert(await actionCluster.locator("[data-header-action='filters']").isVisible(), `${width}px da filter action-kartasi ko‘rinmadi.`);
  assert(await actionCluster.locator("[data-offline-status]").getAttribute("data-offline-status") === "online", `${width}px da internet holati indikatori yo‘qoldi.`);

  const headerBounds = await header.boundingBox();
  const bounds = await actionCluster.boundingBox();
  assert(Boolean(bounds) && Boolean(headerBounds) && bounds.width < width - 110 && bounds.height >= 38, `${width}px da action-kartalar guruhi tor ekran uchun noto‘g‘ri o‘lchamda.`);
  assert(Boolean(bounds) && Boolean(headerBounds) && bounds.x + bounds.width <= headerBounds.x + headerBounds.width + 0.5, `${width}px da action-kartalar headerdan tashqariga chiqdi.`);

  if (width === 390) {
    await page.getByRole("button", { name: "Kengaytirilgan katalog filtrlari" }).click();
    await page.getByRole("heading", { name: "Katalog filtrlari" }).waitFor();
    await page.getByRole("button", { name: "Filtrni qo‘llash" }).click();

    await page.getByRole("button", { name: "Saralanganlarni ochish" }).click();
    await page.locator("[data-bookmarks-sidebar]").waitFor();
    await page.keyboard.press("Escape");
  }

  await page.close();
}

await browser.close();
console.log("Mobil yuqori panel action-kartalari 320px, 375px va 390px viewportlarda muvaffaqiyatli tekshirildi.");
