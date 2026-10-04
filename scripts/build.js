/*
 * Gộp toàn bộ nguồn trong src/ thành một file HTML tự chứa: docs/index.html
 *
 *   npm run build
 *
 * Thứ tự ghép file JS là quan trọng: app1 định nghĩa T() và UI, app3 khai báo
 * DAYS, app4 tới app6 push thêm ngày vào DAYS, app9 render và phải nằm cuối.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const ASSETS = path.join(SRC, "assets");

// FZ Poppins - font duy nhất của Gendemy, nhúng thẳng vào file để chạy được ngoại tuyến
const FONTS = [["Regular", 400], ["Medium", 500], ["SemiBold", 600], ["Bold", 700]];
const MIME = { ".webp": "image/webp", ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2" };
const OUT = path.join(ROOT, "docs", "index.html");

// Các thành phố có hình minh hoạ vector dự phòng (ban_*.html).
const CITIES = ["bj", "sh", "sz"];

// Thứ tự này không được đổi.
const JS_FILES = [
  "app1",     // i18n, chuỗi giao diện, tên các mục
  "app2",     // TRACKS, URGENT, BOOKING
  "app3",     // CITYINTRO + khai báo DAYS, ngày 21/10 Thượng Hải
  "app4",     // Bắc Kinh 21–25/10 (lịch chính thức của BNU)
  "app5",     // Bắc Kinh 26/10
  "app6",     // Bắc Kinh 27–28/10, Thiên Tân 29–30/10, Thâm Quyến 31/10–1/11
  "app7",     // bảng ngân sách
  "app8",     // panel chuẩn bị, footer, liên kết
  "appshots", // ảnh Wikimedia Commons
  "app9",     // render, thanh điều khiển, xuất PDF - phải nằm cuối
];

const BANNER = "<!-- FILE TỰ SINH từ src/ bằng `npm run build`. Đừng sửa trực tiếp file này, mọi thay đổi sẽ bị ghi đè. -->\n";

function read(name) {
  const p = path.join(SRC, name);
  if (!fs.existsSync(p)) throw new Error("Thiếu file nguồn: " + p);
  return fs.readFileSync(p, "utf8").replace(/\r\n/g, "\n");
}

function dataURI(rel) {
  const p = path.join(ASSETS, rel);
  if (!fs.existsSync(p)) throw new Error("Thiếu file tài nguyên: " + p);
  return "data:" + (MIME[path.extname(p)] || "application/octet-stream") + ";base64," + fs.readFileSync(p).toString("base64");
}

function fontFaces() {
  return FONTS.map(([name, weight]) =>
    "@font-face{font-family:\"FzPoppins\";src:url(" + dataURI("fonts/FZPoppins-" + name + ".woff2") +
    ") format(\"woff2\");font-weight:" + weight + ";font-style:normal;font-display:swap}\n"
  ).join("");
}

function render() {
  let head = read("part_head.html");
  const nl = head.indexOf("\n");               // chèn banner ngay sau <!doctype html>
  head = head.slice(0, nl + 1) + BANNER + head.slice(nl + 1);

  const parts = [
    head,
    fontFaces(),
    read("style.css"),
    "</style>\n\n</head>\n<body>\n",
    read("part_defs.html") + "\n",
    read("part_icons.html") + "\n",
  ];
  for (const c of CITIES) {
    parts.push('<template id="ban-' + c + '">' + read("ban_" + c + ".html") + "</template>\n");
  }
  parts.push(
    '<aside class="side" id="side"></aside>\n' +
    '<main class="main"><div id="app"></div></main>\n' +
    '<nav class="bbar" id="bbar" aria-label="Điều hướng"></nav>\n'
  );
  const js = JS_FILES.map((n) => read(n + ".js") + "\n").join("");
  parts.push("<script>\n" + js + "\n</script>\n</body>\n</html>\n");
  // {{asset:ten-file}} ở bất kỳ đâu trong nguồn được thay bằng data URI của src/assets/ten-file
  return parts.join("").replace(/\{\{asset:([^}]+)\}\}/g, (_, rel) => dataURI(rel));
}

function build() {
  const html = render();
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, html, "utf8");
  return html;
}

module.exports = { render, build, ROOT, SRC, OUT };

if (require.main === module) {
  const html = build();
  console.log("Đã ghi docs/index.html (" + html.length.toLocaleString("vi-VN") + " ký tự)");
}
