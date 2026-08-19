import { chromium } from "playwright";

const previewUrl = "http://127.0.0.1:3000/";
const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(previewUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => localStorage.setItem("theme", "dark"));
  await page.reload({ waitUntil: "networkidle" });

  const state = await page.evaluate(() => {
    const root = document.documentElement;
    const body = document.body;
    const header = document.querySelector("main > header");
    const button = document.querySelector("button[aria-label='Yorug‘ rejimga o‘tish']");
    return {
      hasDarkClass: root.classList.contains("dark"),
      colorScheme: getComputedStyle(root).colorScheme,
      bodyBackground: getComputedStyle(body).backgroundColor,
      headerBackground: header ? getComputedStyle(header).backgroundColor : null,
      togglePresent: Boolean(button),
      documentScrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
    };
  });

  if (!state.hasDarkClass || state.colorScheme !== "dark" || !state.togglePresent) {
    throw new Error(`Dark mode holati kutilganidek emas: ${JSON.stringify(state)}`);
  }
  if (state.documentScrollWidth > state.viewportWidth) {
    throw new Error(`Dark mode mobil ko‘rinishda gorizontal overflow bor: ${JSON.stringify(state)}`);
  }

  await page.getByRole("button", { name: "Yorug‘ rejimga o‘tish" }).click();
  const afterToggle = await page.evaluate(() => ({
    persistedTheme: localStorage.getItem("theme"),
    hasDarkClass: document.documentElement.classList.contains("dark"),
  }));
  if (afterToggle.persistedTheme !== "light" || afterToggle.hasDarkClass) {
    throw new Error(`Theme toggle persistence ishlamadi: ${JSON.stringify(afterToggle)}`);
  }

  console.log(`Dark mode audit muvaffaqiyatli: ${JSON.stringify(state)}`);
  await page.close();
} finally {
  await browser.close();
}
