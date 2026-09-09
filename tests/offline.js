/* Wikimedia bị chặn ở Trung Quốc đại lục. Khi ảnh không tải được, trang phải tự
   gỡ ảnh và bật hình minh hoạ vector thay thế, chứ không để lại ô ảnh vỡ.
   Bài test này chạy KHÔNG chặn giả ảnh: mọi request ra ngoài đều bị chặn thật. */
const { chromium } = require("playwright");
const { PLAN_URL, launchOptions, outPath, requirePlan } = require("./_lib");

(async () => {
  requirePlan();
  const browser = await chromium.launch(launchOptions());
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1100, height: 1200 });

  /* Cắt mọi kết nối http/https ra ngoài, mô phỏng đúng tình huống ở Trung Quốc
     đại lục. Không chặn file:// vì đó chính là trang đang mở. */
  await page.route(/^https?:\/\//, (route) => route.abort());

  await page.goto(PLAN_URL);
  for (let i = 0; i < 40; i++) {
    await page.mouse.wheel(0, 1200);
    await page.waitForTimeout(80);
  }
  await page.waitForTimeout(1500);

  const seen = await page.evaluate(() => ({
    shots: document.querySelectorAll(".shot").length,
    heroes: document.querySelectorAll(".hero").length,
    vectorShown: [...document.querySelectorAll(".vecfallback")].filter((v) => !v.hidden).length,
    brokenImages: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).length,
    days: document.querySelectorAll(".day").length,
  }));

  console.log(JSON.stringify(seen, null, 2));

  let failed = 0;
  if (seen.brokenImages > 0) { failed++; console.log("Còn ảnh vỡ trên trang."); }
  if (seen.days !== 13) { failed++; console.log("Nội dung không dựng đủ khi mất mạng."); }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: outPath("offline.png") });

  await browser.close();
  console.log(failed ? "\nKhông đạt" : "\nĐạt - trang vẫn đọc được khi không có mạng");
  process.exit(failed ? 1 : 0);
})();
