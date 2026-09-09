/* Phần dùng chung cho mọi bài test.
   Đường dẫn tính tương đối nên chạy được trên bất kỳ máy nào.
   Nếu Chromium nằm ở chỗ khác thì đặt biến môi trường CHROMIUM_PATH. */
const path = require("path");
const fs = require("fs");

const ROOT = path.resolve(__dirname, "..");
const PLAN_FILE = path.join(ROOT, "docs", "index.html");
const PLAN_URL = "file://" + PLAN_FILE.split(path.sep).join("/");
const PLACEHOLDER = path.join(__dirname, "fixtures", "placeholder.png");
const OUT_DIR = path.join(__dirname, "output");

function launchOptions() {
  return process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {};
}

/* Wikimedia bị chặn ở Trung Quốc đại lục và cũng không cần thiết khi test bố cục,
   nên mọi ảnh được thay bằng một file PNG cố định. */
async function stubPhotos(page) {
  const body = fs.readFileSync(PLACEHOLDER);
  await page.route("**://upload.wikimedia.org/**", (route) =>
    route.fulfill({ status: 200, contentType: "image/png", body })
  );
}

function outPath(name) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  return path.join(OUT_DIR, name);
}

function requirePlan() {
  if (!fs.existsSync(PLAN_FILE)) {
    console.error("Chưa có docs/index.html. Chạy `python3 build.py` trước.");
    process.exit(1);
  }
}

module.exports = { ROOT, PLAN_URL, launchOptions, stubPhotos, outPath, requirePlan };
