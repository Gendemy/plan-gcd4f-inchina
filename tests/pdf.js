/* Nút Xuất PDF phải ép mọi ảnh lazy tải xong rồi mới mở hộp thoại in, và không
   được kẹt ở trạng thái "Đang tải ảnh…". Bài test thay window.print bằng bản giả
   rồi tự xuất PDF để đếm số trang. */
const { chromium } = require("playwright");
const { PLAN_URL, launchOptions, stubPhotos, outPath, requirePlan } = require("./_lib");

(async () => {
  requirePlan();
  const browser = await chromium.launch(launchOptions());
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1100, height: 1400 });
  await stubPhotos(page);
  await page.goto(PLAN_URL);
  await page.waitForTimeout(500);

  await page.evaluate(() => {
    window.__printed = 0;
    window.print = () => { window.__printed++; };
  });
  await page.click(".pdfbtn");
  await page.waitForTimeout(3000);

  const state = await page.evaluate(() => ({
    printed: window.__printed,
    stillLazy: [...document.querySelectorAll("#app img")].filter((i) => i.loading === "lazy").length,
    label: document.querySelector(".pdfbtn").textContent.trim(),
    disabled: document.querySelector(".pdfbtn").disabled,
  }));
  console.log(JSON.stringify(state));

  let failed = 0;
  if (state.printed !== 1) { failed++; console.log("window.print không được gọi đúng một lần."); }
  if (state.stillLazy > 0) { failed++; console.log("Còn ảnh chưa ép tải trước khi in."); }
  if (state.disabled) { failed++; console.log("Nút bị kẹt ở trạng thái vô hiệu hoá."); }

  await page.pdf({ path: outPath("plan-vi.pdf"), format: "A4", printBackground: true });
  await page.evaluate(() => { li = 2; pf = "md"; buildBar(); render(); });
  await page.waitForTimeout(1500);
  await page.pdf({ path: outPath("plan-zh-md.pdf"), format: "A4", printBackground: true });

  await browser.close();
  console.log("PDF nằm ở tests/output/");
  console.log(failed ? "\nKhông đạt" : "\nĐạt");
  process.exit(failed ? 1 : 0);
})();
