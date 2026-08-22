import { chromium } from "playwright";
import { readFile } from "node:fs/promises";

const previewUrl = new URL(process.env.BIOLAB_TEST_URL || "http://127.0.0.1:3000/").toString();
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const homeSource = await readFile(new URL("../../client/src/pages/Home.tsx", import.meta.url), "utf8");
assert(homeSource.includes("createPortal(") && homeSource.includes("document.body"), "DeviceViewer modal sahifa transition konteyneridan portal orqali chiqarilmagan.");

const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

try {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    serviceWorkers: "block",
  });
  const page = await context.newPage();
  await page.goto(previewUrl, { waitUntil: "commit", timeout: 60_000 });
  const cards = page.locator("article.equipment-card");
  await cards.first().waitFor({ state: "visible" });
  await page.waitForTimeout(350);
  await cards.first().getByRole("button", { name: "O‘rganish" }).click();

  const modal = page.locator("[data-device-modal]");
  const panel = page.locator("[data-device-modal-panel]");
  const viewer = page.locator("[data-device-viewer]");
  await viewer.waitFor({ state: "visible", timeout: 15_000 });
  const [modalBox, panelBox, viewerBox] = await Promise.all([modal.boundingBox(), panel.boundingBox(), viewer.boundingBox()]);
  assert((modalBox?.width ?? 0) >= 380 && (modalBox?.height ?? 0) >= 800, "Mobil DeviceViewer overlay viewportni qoplamadi.");
  assert((panelBox?.width ?? 0) >= 380 && (panelBox?.height ?? 0) >= 800, "Mobil modalning oq paneli viewportni amalda egallamadi.");
  assert((viewerBox?.width ?? 0) > 300 && (viewerBox?.height ?? 0) > 400, "Mobil DeviceViewer kontenti blur qatlami ostida ko‘rinmayapti.");
  await context.close();
  console.log("Mobil DeviceViewer portal, viewport paneli va ko‘rinadigan kontent regressiyasi muvaffaqiyatli tekshirildi.");
} finally {
  await browser.close();
}
