/*
 * Chạy kế hoạch trên localhost, tự build lại và tải lại trang khi sửa src/.
 *
 *   npm run dev            → http://localhost:3030
 *   PORT=8080 npm run dev  (Windows PowerShell: $env:PORT=8080; npm run dev)
 */
const http = require("http");
const fs = require("fs");
const { exec } = require("child_process");
const { build, SRC } = require("./build");

const PORT = Number(process.env.PORT) || 3030;
const clients = new Set();

// Đoạn script nhỏ chỉ chèn khi chạy dev, không có trong docs/index.html.
const RELOAD = '<script>new EventSource("/__reload").onmessage=function(){location.reload()}</script>';

let html = "";
function rebuild() {
  try {
    html = build();
    console.log("[" + new Date().toLocaleTimeString("vi-VN") + "] build xong");
    return true;
  } catch (e) {
    console.error("Lỗi build:", e.message);
    return false;
  }
}
rebuild();

let timer = null;
fs.watch(SRC, { recursive: true }, () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (rebuild()) for (const res of clients) res.write("data: reload\n\n");
  }, 150);
});

const server = http
  .createServer((req, res) => {
    if (req.url === "/__reload") {
      res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" });
      res.write("\n");
      clients.add(res);
      req.on("close", () => clients.delete(res));
      return;
    }
    if (req.url === "/" || req.url.startsWith("/index.html") || req.url.startsWith("/?")) {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
      res.end(html.replace("</body>", RELOAD + "\n</body>"));
      return;
    }
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Không có trang này");
  })
  .listen(PORT, () => {
    const url = "http://localhost:" + PORT;
    console.log("\nKế hoạch GCD4F đang chạy tại  " + url);
    console.log("Sửa file trong src/ là trang tự tải lại. Nhấn Ctrl+C để dừng.\n");
    // Tự mở trình duyệt (tắt bằng biến môi trường NO_OPEN=1)
    if (!process.env.NO_OPEN) {
      const cmd = process.platform === "win32" ? 'start "" "' + url + '"' : process.platform === "darwin" ? "open " + url : "xdg-open " + url;
      exec(cmd, () => {});
    }
  });

server.on("error", (e) => {
  if (e.code === "EADDRINUSE") {
    console.error("\nCổng " + PORT + " đang bận - có thể trang đã chạy sẵn ở một cửa sổ Terminal khác.");
    console.error("Mở http://localhost:" + PORT + " trong trình duyệt, hoặc tắt cửa sổ cũ rồi chạy lại.\n");
    process.exit(1);
  }
  throw e;
});
