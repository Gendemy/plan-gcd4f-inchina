/* Dựng trang ở cả 3 ngôn ngữ và 4 bộ lọc người, kiểm tra không có lỗi JavaScript
   và số ngày, số thành phố, số mốc giờ đúng như mong đợi. */
const { chromium } = require("playwright");
const { PLAN_URL, launchOptions, stubPhotos, requirePlan } = require("./_lib");

const COMBOS = [
  [0, "all"], [1, "all"], [2, "all"],
  [0, "gb"], [0, "md"], [0, "ta"],
  [1, "ta"], [2, "md"],
];

/* Số ngày và số thành phố phải hiện ra cho từng bộ lọc người. */
const EXPECTED = {
  all: { days: 13, cities: 4 },
  gb:  { days: 9,  cities: 2 },
  md:  { days: 13, cities: 4 },
  ta:  { days: 7,  cities: 2 },
};

(async () => {
  requirePlan();
  const browser = await chromium.launch(launchOptions());
  const page = await browser.newPage();
  await stubPhotos(page);

  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e.message)));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });

  await page.goto(PLAN_URL);
  await page.waitForTimeout(400);

  let failed = 0;
  for (const [lang, person] of COMBOS) {
    await page.evaluate(([l, p]) => { li = l; pf = p; buildBar(); render(); }, [lang, person]);
    const seen = await page.evaluate(() => ({
      days: document.querySelectorAll(".day").length,
      cities: document.querySelectorAll(".city").length,
      slots: document.querySelectorAll(".slot").length,
      chars: document.getElementById("app").innerText.length,
    }));
    const want = EXPECTED[person];
    const ok = seen.days === want.days && seen.cities === want.cities && seen.slots > 0;
    if (!ok) failed++;
    console.log(
      `${ok ? "ok  " : "FAIL"} lang=${lang} person=${person}  ` +
      `ngày=${seen.days}/${want.days} thành phố=${seen.cities}/${want.cities} ` +
      `mốc=${seen.slots} ký tự=${seen.chars}`
    );
  }

  const real = errors.filter((e) => !/ERR_|Failed to load resource/.test(e));
  if (real.length) { failed++; console.log("LỖI JAVASCRIPT:", real); }

  await browser.close();
  console.log(failed ? `\n${failed} mục không đạt` : "\nTất cả đều đạt");
  process.exit(failed ? 1 : 0);
})();
