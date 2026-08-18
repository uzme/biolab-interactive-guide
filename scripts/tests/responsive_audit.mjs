import { chromium } from "playwright";

const previewUrl = "http://127.0.0.1:3000/";
const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

try {
  const viewports = [
    { name: "phone", width: 390, height: 844 },
    { name: "tablet", width: 768, height: 1024 },
    { name: "desktop", width: 1280, height: 900 },
    { name: "tv", width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
    await page.goto(previewUrl, { waitUntil: "networkidle" });
    const result = await page.evaluate(() => {
      const rect = (selector) => {
        const element = document.querySelector(selector);
        if (!element) return null;
        const box = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return {
          selector,
          left: Math.round(box.left),
          right: Math.round(box.right),
          width: Math.round(box.width),
          overflowX: style.overflowX,
          position: style.position,
        };
      };
      const overflowers = [...document.querySelectorAll("body *")]
        .map((element) => {
          const box = element.getBoundingClientRect();
          return { tag: element.tagName.toLowerCase(), className: typeof element.className === "string" ? element.className : "", left: Math.round(box.left), right: Math.round(box.right), width: Math.round(box.width) };
        })
        .filter((item) => item.right > window.innerWidth + 1 || item.left < -1)
        .sort((a, b) => (b.right - window.innerWidth) - (a.right - window.innerWidth))
        .slice(0, 8);
      return {
        viewport: { width: window.innerWidth, height: window.innerHeight },
        bodyScrollWidth: document.body.scrollWidth,
        documentScrollWidth: document.documentElement.scrollWidth,
        shell: rect(".shell"),
        main: rect("main"),
        hero: rect("main section"),
        mobileTrigger: rect("button[aria-label='Menyuni ochish']"),
        overflowers,
      };
    });

    if (viewport.name === "phone") {
      await page.getByRole("button", { name: "Menyuni ochish" }).click();
      await page.waitForTimeout(650);
      result.drawer = await page.evaluate(() => {
        const element = document.querySelector("[data-slot='sheet-content']");
        if (!element) return null;
        const box = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        const sidebar = element.querySelector(".sidebar");
        const sidebarBox = sidebar?.getBoundingClientRect();
        return {
          left: Math.round(box.left),
          right: Math.round(box.right),
          width: Math.round(box.width),
          sidebarLeft: sidebarBox ? Math.round(sidebarBox.left) : null,
          sidebarRight: sidebarBox ? Math.round(sidebarBox.right) : null,
          overflowX: style.overflowX,
          transform: style.transform,
        };
      });
    }

    if (result.documentScrollWidth > viewport.width) {
      throw new Error(`${viewport.name}: gorizontal scroll aniqlandi (${result.documentScrollWidth}px > ${viewport.width}px).`);
    }
    if (viewport.name === "phone") {
      const drawer = result.drawer;
      if (!drawer || drawer.left < 0 || drawer.right > viewport.width || drawer.sidebarLeft < 0 || drawer.sidebarRight > drawer.width + 1) {
        throw new Error(`phone: drawer viewport ichida emas: ${JSON.stringify(drawer)}`);
      }
    }
    if (viewport.name === "tablet" && result.main.width < 500) {
      throw new Error(`tablet: asosiy kontent juda tor (${result.main.width}px).`);
    }
    console.log(JSON.stringify({ name: viewport.name, ...result }));
    await page.close();
  }
} finally {
  await browser.close();
}
