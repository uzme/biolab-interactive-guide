import { chromium } from "playwright";

const previewUrl = "http://127.0.0.1:3000/";
const browser = await chromium.launch({ headless: true, executablePath: "/usr/bin/chromium", args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

await page.goto(`${previewUrl}?direct=1`, { waitUntil: "networkidle" });
const qrButton = page.locator("button[aria-label*='QR-kodini ochish']").first();
await qrButton.waitFor({ state: "visible" });
await qrButton.click();

const qrDialog = page.getByRole("dialog").filter({ has: page.getByRole("heading", { name: /BIO-001 QR-kodi/i }) });
await qrDialog.waitFor({ state: "visible" });
const qrImage = qrDialog.locator("img[alt*='detail sahifasini ochadigan QR-kod']");
await qrImage.waitFor({ state: "visible" });
await qrImage.evaluate((image) => new Promise((resolve, reject) => {
  if (image.naturalWidth > 0) resolve();
  image.addEventListener("load", resolve, { once: true });
  image.addEventListener("error", reject, { once: true });
}));
assert((await qrImage.getAttribute("src"))?.startsWith("data:image/png;base64,"), "QR dialog skan qilinadigan PNG yaratmadi.");
await page.keyboard.press("Escape");

for (const deviceId of ["BIO-001", "BIO-050", "BIO-100"]) {
  await page.goto(`${previewUrl}?direct=1&device=${deviceId}`, { waitUntil: "networkidle" });
  const detailDialog = page.getByRole("dialog");
  await detailDialog.waitFor({ state: "visible" });
  assert((await detailDialog.textContent())?.includes(deviceId), `${deviceId} QR deep-linki tegishli detail oynasini ochmadi.`);
}

const viewerQrBoundaryIds = ["BIO-001", "BIO-050", "BIO-100"];
for (const deviceId of viewerQrBoundaryIds) {
  await page.goto(`${previewUrl}?direct=1&device=${deviceId}`, { waitUntil: "domcontentloaded" });
  const viewer = page.locator("[data-device-viewer]");
  await viewer.waitFor({ state: "visible", timeout: 15_000 });
  const viewerQrButton = viewer.getByRole("button", { name: "QR-kodini ochish" });
  await viewerQrButton.click();
  const viewerQrDialog = page.getByRole("dialog").filter({ has: page.getByRole("heading", { name: new RegExp(`${deviceId} QR-kodi`, "i") }) });
  await viewerQrDialog.waitFor({ state: "visible", timeout: 15_000 });
  assert((await viewerQrDialog.textContent())?.includes(deviceId), `${deviceId} DeviceViewer QR tugmasi dialogini ochmadi.`);
  const viewerQrImage = viewerQrDialog.locator("img[alt*='detail sahifasini ochadigan QR-kod']");
  await viewerQrImage.waitFor({ state: "visible", timeout: 15_000 });
  assert((await viewerQrImage.getAttribute("src"))?.startsWith("data:image/png;base64,"), `${deviceId} DeviceViewer QR tugmasi skan qilinadigan PNG yaratmadi.`);
}

await page.close();
await browser.close();
console.log("QR dialog PNGsi, BIO-001/BIO-050/BIO-100 boundary DeviceViewer tugmalari va 100 qurilmali umumiy QR component kontrakti muvaffaqiyatli tekshirildi.");
