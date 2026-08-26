import { chromium } from "playwright";

const previewUrl = "http://127.0.0.1:3000/";
const browser = await chromium.launch({ headless: true, executablePath: "/usr/bin/chromium", args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const consoleMessages = [];

page.on("console", (message) => consoleMessages.push(message.text()));
await page.goto(previewUrl, { waitUntil: "networkidle" });
await page.locator("[data-lab-entry]").waitFor();

if (consoleMessages.some((message) => message.includes("BioLab offline rejimi ishga tushmadi"))) {
  throw new Error("Service-worker cheklangan browser muhitida offline updater ogohlantirish chiqdi.");
}

await page.close();
await browser.close();
console.log("Service-worker cheklangan browser muhitida PWA updater fallbacki xatosiz tekshirildi.");
