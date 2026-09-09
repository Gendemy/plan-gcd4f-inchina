/* Mỗi ảnh trong SHOTS được gắn theo tiêu đề tiếng Việt của mốc giờ.
   Chỉ cần đổi một chữ trong tiêu đề là ảnh biến mất mà không báo lỗi gì,
   nên bài test này bắt đúng trường hợp đó: liệt kê ảnh đang hiện và ảnh mồ côi. */
const { chromium } = require("playwright");
const { PLAN_URL, launchOptions, stubPhotos, requirePlan } = require("./_lib");

(async () => {
  requirePlan();
  const browser = await chromium.launch(launchOptions());
  const page = await browser.newPage();
  await stubPhotos(page);
  await page.goto(PLAN_URL);
  await page.waitForTimeout(600);

  const result = await page.evaluate(() => {
    const used = new Set([...document.querySelectorAll("figure.shot img")].map((i) => i.alt));
    return {
      shots: [...used],
      heroes: [...document.querySelectorAll("figure.hero img")].map((i) => i.alt),
      orphans: Object.keys(SHOTS).filter((k) => !used.has(k)),
      cities: [...document.querySelectorAll(".city")].map((c) => c.id),
    };
  });

  console.log(`ảnh địa điểm đang hiện: ${result.shots.length}`);
  console.log(`ảnh bìa thành phố: ${result.heroes.join(", ")}`);
  console.log(`thành phố: ${result.cities.join(", ")}`);

  let failed = 0;
  if (result.orphans.length) {
    failed++;
    console.log("\nCÓ ẢNH MỒ CÔI - không khớp tiêu đề mốc giờ nào:");
    result.orphans.forEach((k) => console.log("  - " + k));
  }
  if (result.heroes.length !== result.cities.length) {
    failed++;
    console.log("\nSố ảnh bìa không khớp số thành phố.");
  }

  await browser.close();
  console.log(failed ? "\nKhông đạt" : "\nĐạt");
  process.exit(failed ? 1 : 0);
})();
