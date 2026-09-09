/* Bố cục: không được tràn ngang trên màn hình điện thoại, và chụp lại vài ảnh
   để soát bằng mắt (sáng, tối, điện thoại). */
const { chromium } = require("playwright");
const { PLAN_URL, launchOptions, stubPhotos, outPath, requirePlan } = require("./_lib");

async function shot(browser, { width, height, dark, name, scrollToDay }) {
  const page = await browser.newPage(dark ? { colorScheme: "dark" } : {});
  await page.setViewportSize({ width, height });
  await stubPhotos(page);
  await page.goto(PLAN_URL);
  await page.waitForTimeout(500);
  if (scrollToDay) {
    await page.evaluate((n) => {
      const d = [...document.querySelectorAll(".day")].find(
        (x) => x.querySelector(".dnum").textContent === n
      );
      if (d) d.scrollIntoView();
    }, scrollToDay);
    await page.waitForTimeout(300);
  }
  await page.screenshot({ path: outPath(name) });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1
  );
  await page.close();
  return overflow;
}

(async () => {
  requirePlan();
  const browser = await chromium.launch(launchOptions());

  await shot(browser, { width: 1180, height: 1250, name: "desktop.png", scrollToDay: "21" });
  await shot(browser, { width: 1180, height: 900, dark: true, name: "dark.png" });
  const mobileOverflow = await shot(browser, {
    width: 390, height: 900, name: "mobile.png", scrollToDay: "29",
  });

  await browser.close();
  console.log("tràn ngang trên điện thoại:", mobileOverflow);
  console.log("ảnh chụp nằm ở tests/output/");
  console.log(mobileOverflow ? "\nKhông đạt" : "\nĐạt");
  process.exit(mobileOverflow ? 1 : 0);
})();
