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
  const manifestResponse = await desktop.request.get(`${previewUrl}manifest.webmanifest`);
  await assert(manifestResponse.ok(), "PWA manifest.webmanifest topilmadi.");
  const manifest = await manifestResponse.json();
  await assert(manifest.lang === "uz" && manifest.display === "standalone", "PWA manifest o‘zbekcha standalone rejimida emas.");
  const serviceWorkerResponse = await desktop.request.get(`${previewUrl}sw.js`);
  await assert(serviceWorkerResponse.ok(), "PWA service worker fayli topilmadi.");

  await desktop.goto(previewUrl, { waitUntil: "networkidle" });
  await desktop.evaluate(() => window.localStorage.clear());
  await desktop.reload({ waitUntil: "networkidle" });
  await assert(await desktop.evaluate(async () => Boolean(await navigator.serviceWorker.ready)), "PWA service worker ro‘yxatdan o‘tmadi.");
  const offlineStatus = desktop.locator("[data-offline-status]");
  await assert(await offlineStatus.getAttribute("data-offline-status") === "online", "Onlayn status indikatori ko‘rinmadi.");
  const offlinePackButton = desktop.getByRole("button", { name: "Offline paketni yuklash" });
  await assert(await offlinePackButton.isVisible(), "Offline paket boshqaruvi ko‘rinmadi.");
  await assert(await desktop.locator(".page-transition").count() === 1, "Sahifa transition qatlami topilmadi.");
  await assert(await desktop.locator('[data-slot="button"]').count() > 0, "Global Button komponenti topilmadi.");
  await offlinePackButton.click();
  await desktop.locator('[data-slot="button"][data-loading="true"]').waitFor({ state: "visible", timeout: 5000 });
  await assert(await desktop.locator('[data-slot="button"][data-loading="true"]').getAttribute("aria-busy") === "true", "Tugma loading holatida aria-busy=true bermadi.");
  await desktop.waitForFunction(() => !document.querySelector('[data-slot="button"][data-loading="true"]'), null, { timeout: 30000 });
  await desktop.emulateMedia({ reducedMotion: "reduce" });
  const reducedMotionProgress = await desktop.evaluate(() => {
    const progress = document.querySelector(".loading-progress");
    if (!progress) return null;
    const pseudo = window.getComputedStyle(progress, "::after");
    return { animationName: pseudo.animationName, animationDuration: pseudo.animationDuration };
  });
  if (reducedMotionProgress) {
    await assert(reducedMotionProgress.animationDuration === "0.01ms" || reducedMotionProgress.animationName === "none", "Reduced-motion rejimi loading animatsiyasini qisqartirmadi.");
  }
  await desktop.emulateMedia({ reducedMotion: "no-preference" });

  await desktop.context().setOffline(true);
  await desktop.reload({ waitUntil: "domcontentloaded" });
  await assert(await desktop.locator(".pure3d-carousel .scene").isVisible(), "Offline reloaddan keyin app shell carouseli tiklanmadi.");
  await desktop.evaluate(() => window.dispatchEvent(new Event("offline")));
  await desktop.waitForFunction(() => document.querySelector("[data-offline-status]")?.getAttribute("data-offline-status") === "offline");
  await desktop.context().setOffline(false);
  await desktop.evaluate(() => window.dispatchEvent(new Event("online")));
  await desktop.waitForFunction(() => document.querySelector("[data-offline-status]")?.getAttribute("data-offline-status") === "online");
  await desktop.reload({ waitUntil: "networkidle" });

  const carouselScene = desktop.locator(".pure3d-carousel .scene");
  await carouselScene.waitFor({ state: "visible" });
  await desktop.addStyleTag({ content: ".pure3d-carousel .a3d { animation-play-state: paused !important; }" });
  await assert(await desktop.locator(".pure3d-carousel .a3d").count() === 1, "Original .a3d 3D halqa konteyneri topilmadi.");
  await assert(await desktop.locator(".pure3d-carousel .card").count() === 12, "Carousel original .card tuzilmasida 12 ta qurilmani ko‘rsatmadi.");

  const carouselBookmark = desktop.locator('.pure3d-carousel .card').first().locator('[data-bookmark-button]');
  await carouselBookmark.dispatchEvent("click");
  await assert(await carouselBookmark.getAttribute("aria-pressed") === "true", "Carousel qurilmasi saralanganlarga saqlanmadi.");
  await desktop.reload({ waitUntil: "networkidle" });
  const bookmarksSidebar = desktop.locator("[data-bookmarks-sidebar]");
  await desktop.getByRole("button", { name: "Saralanganlarni ochish" }).click();
  await assert(await bookmarksSidebar.isVisible(), "Saralanganlar o‘ng yon paneli ochilmadi.");
  await assert(await bookmarksSidebar.getByText("BIO-001").isVisible(), "Sidebar ichida saqlangan BIO-001 qurilmasi ko‘rinmadi.");
  await bookmarksSidebar.getByRole("button", { name: /taf silotlarini ochish|tafsilotlarini ochish/ }).click();
  await desktop.getByText("Molekulyar biologiya / BIO-001").waitFor({ state: "visible" });
  await desktop.getByRole("banner").getByRole("button", { name: "Barcha uskunalar" }).click();
  const catalogBookmark = desktop.locator("article.equipment-card").first().getByRole("button", { name: /saralanganlardan olib tashlash/ });
  await assert(await catalogBookmark.getAttribute("aria-pressed") === "true", "Saralangan qurilma brauzer xotirasidan qayta tiklanmadi.");
  await desktop.getByRole("button", { name: /^Saralanganlar 1$/ }).click();
  await desktop.waitForFunction(() => document.querySelectorAll("article.equipment-card").length === 1);
  await assert(await desktop.locator("article.equipment-card").count() === 1, "Saralanganlar filtri faqat saqlangan qurilmani ko‘rsatmadi.");
  await catalogBookmark.click();
  await assert(await desktop.getByText("Qurilma topilmadi").isVisible(), "Saralangan qurilma o‘chirilgandan keyin bo‘sh holat ko‘rsatilmagan.");
  await desktop.evaluate(() => window.localStorage.clear());
  await desktop.reload({ waitUntil: "networkidle" });

  await desktop.getByRole("button", { name: "Sozlamalar va Copyright" }).click();
  await assert(await desktop.getByRole("heading", { name: "Sozlamalar va huquqiy ma’lumot" }).isVisible(), "Sozlamalar paneli ochilmadi.");
  await desktop.getByRole("button", { name: "Sozlamalarni yopish" }).click();

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
  await mobile.getByRole("button", { name: "O‘rganish" }).first().click();
  const mobileModal = mobile.locator("[data-device-modal]");
  await mobileModal.waitFor({ state: "visible" });
  await mobile.locator("[data-device-viewer]").waitFor({ state: "visible" });
  await mobile.getByText("Molekulyar biologiya / BIO-001").waitFor({ state: "visible" });
  await assert(await mobileModal.getAttribute("role") === "dialog", "Mobil detail oynasi dialog semantikasini bermadi.");
  await assert(await mobileModal.getAttribute("aria-modal") === "true", "Mobil detail oynasi modal semantikasini bermadi.");
  const mobileModalMetrics = await mobileModal.evaluate((element) => {
    const viewer = element.querySelector("[data-device-viewer]");
    const viewerRect = viewer?.getBoundingClientRect();
    return {
      height: element.getBoundingClientRect().height,
      overflowY: window.getComputedStyle(element).overflowY,
      viewportHeight: window.innerHeight,
      viewerHeight: viewerRect?.height ?? 0,
      viewerTop: viewerRect?.top ?? Number.POSITIVE_INFINITY,
      viewerBackground: viewer ? window.getComputedStyle(viewer).backgroundColor : "",
    };
  });
  await assert(mobileModalMetrics.height >= mobileModalMetrics.viewportHeight - 2, "Mobil detail oynasi ekran qoplamini to‘liq egallamadi.");
  await assert(mobileModalMetrics.overflowY === "auto", "Mobil detail oynasiga xavfsiz vertikal overflow berilmadi.");
  await assert(mobileModalMetrics.viewerHeight > 0 && mobileModalMetrics.viewerTop < mobileModalMetrics.viewportHeight, "Mobil detail kontenti fon-blur ostida ko‘rinmay qoldi.");
  await assert(mobileModalMetrics.viewerBackground === "rgb(247, 251, 250)", "Mobil detail kontenti kutilgan o‘quv fonida render bo‘lmadi.");
  await mobile.getByRole("button", { name: "Barcha uskunalar" }).click();
  await mobileModal.waitFor({ state: "hidden" });
  await mobile.getByRole("button", { name: "Menyuni ochish" }).click();
  await mobile.waitForTimeout(300);
  await mobile.keyboard.press("Escape");
  await mobile.waitForTimeout(300);

  await desktop.close();
  await mobile.close();
  console.log("Qurilma tafsiloti, rasm shaffofligi, 16-bo‘limli o‘quv oqimi va mobil menyu muvaffaqiyatli tekshirildi.");
} finally {
  await browser.close();
}
