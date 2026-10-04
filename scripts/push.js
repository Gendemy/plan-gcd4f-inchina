/*
 * Build lại rồi đẩy mọi thay đổi lên GitHub trong một lệnh.
 *
 *   npm run push                         → commit với lời nhắn mặc định kèm ngày giờ
 *   npm run push -- "Cập nhật lịch BNU"  → commit với lời nhắn của bạn
 */
const { execSync } = require("child_process");
const { build, ROOT } = require("./build");

function run(cmd) {
  console.log("> " + cmd);
  execSync(cmd, { cwd: ROOT, stdio: "inherit" });
}

build();
console.log("Đã build docs/index.html");

const changes = execSync("git status --porcelain", { cwd: ROOT }).toString().trim();
if (!changes) {
  console.log("Không có thay đổi nào để commit.");
} else {
  const now = new Date().toLocaleString("vi-VN", { hour12: false });
  const msg = (process.argv.slice(2).join(" ").trim() || "Cập nhật kế hoạch " + now).replace(/"/g, "'");
  run("git add -A");
  run('git commit -m "' + msg + '"');
}
run("git push");
