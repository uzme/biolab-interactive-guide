import { chromium } from "playwright";

const previewUrl = "http://127.0.0.1:3000/";
const browser = await chromium.launch({ headless: true, executablePath: "/usr/bin/chromium", args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const assert = (condition, message) => { if (!condition) throw new Error(message); };

const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.addInitScript(() => { window.__BIOLAB_EXPO_GO__ = true; });
await page.goto(previewUrl, { waitUntil: "networkidle" });

const gate = page.locator("[data-lab-entry]");
await gate.waitFor();
assert(await page.getByRole("heading", { name: /Laboratoriyani jonli boshqaring/i }).isVisible(), "Expo Go kirish ekranida laboratoriya sarlavhasi ko‘rinmadi.");
assert(await page.locator("[data-lab-entry-action]").isVisible(), "Kirish ekranida laboratoriyaga kirish amali yo‘q.");
assert(await page.locator("[data-hero-surface]").count() === 0, "Original sahifa kirish ekranidan oldin ko‘rinib qoldi.");
await page.locator("[data-lab-entry-action]").click();
await page.locator("[data-hero-surface]").waitFor({ state: "visible" });
assert(await page.getByRole("heading", { name: /Qurilmani bilib oling/i }).isVisible(), "Kirish amali original BioLab asosiy sahifasiga o‘tmadi.");
await page.close();

const normalPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
await normalPage.goto(previewUrl, { waitUntil: "networkidle" });
assert(await normalPage.locator("[data-lab-entry]").count() === 0, "Oddiy web tashrifida Expo Go kirish ekrani noto‘g‘ri chiqdi.");
assert(await normalPage.locator("[data-hero-surface]").isVisible(), "Oddiy web tashrifida original asosiy sahifa ko‘rinmadi.");
await normalPage.close();

const previewPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
await previewPage.goto(`${previewUrl}?expo-preview=1`, { waitUntil: "networkidle" });
assert(await previewPage.locator("[data-lab-entry]").isVisible(), "Vizual audit preview query’da kirish ekrani ko‘rinmadi.");
await previewPage.close();
await browser.close();
console.log("Expo Go laboratoriya kirish ekrani va original BioLab sahifasiga o‘tish muvaffaqiyatli tekshirildi.");
