import { chromium } from "playwright";

const previewUrl = "http://127.0.0.1:3000/?direct=1";
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

async function inspectTheme(colorScheme, reducedMotion) {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    colorScheme,
    reducedMotion,
  });
  const page = await context.newPage();
  await page.goto(previewUrl, { waitUntil: "networkidle" });
  const state = await page.evaluate(() => {
    const hero = document.querySelector("[data-hero-surface]");
    const signal = document.querySelector(".landing-status-dot");
    return {
      dark: document.documentElement.classList.contains("dark"),
      preference: localStorage.getItem("biolab-theme-preference"),
      scanAnimation: hero ? getComputedStyle(hero, "::after").animationName : "missing",
      signalAnimation: signal ? getComputedStyle(signal).animationName : "missing",
    };
  });
  await context.close();
  return state;
}

const darkMotion = await inspectTheme("dark", "no-preference");
assert(darkMotion.dark, "Tizim tungi rejimida .dark class avtomatik qo‘llanmadi.");
assert(darkMotion.preference === "system", "Birinchi ochilishda tema tizim afzalligiga bog‘lanmadi.");
assert(darkMotion.scanAnimation !== "none" && darkMotion.scanAnimation !== "missing", "Jonli laboratoriya scan animatsiyasi ishga tushmadi.");
assert(darkMotion.signalAnimation !== "none" && darkMotion.signalAnimation !== "missing", "Jonli signal animatsiyasi ishga tushmadi.");

const lightReduced = await inspectTheme("light", "reduce");
assert(!lightReduced.dark, "Tizim yorug‘ rejimida .dark class noto‘g‘ri saqlanib qoldi.");
assert(lightReduced.scanAnimation === "none", "Reduced-motion rejimida scan animatsiyasi o‘chirilmadi.");
assert(lightReduced.signalAnimation === "none", "Reduced-motion rejimida signal animatsiyasi o‘chirilmadi.");

await browser.close();
console.log("Kun/tun avtomatik tema va reduced-motion laboratoriya animatsiyalari muvaffaqiyatli tekshirildi.");
