# Kế hoạch GCD4F · Trung Quốc 10/2026

Kế hoạch chuyến đi của Team Gendemy dự GCD4F Global Finals tại Đại học Sư phạm Bắc Kinh,
20/10/2026 – 1/11/2026. Kết quả là **một file HTML tự chứa** (`docs/index.html`): mở được
ngoại tuyến, có ba ngôn ngữ Việt · English · 中文, bốn bộ lọc người, giao diện sáng/tối và nút Xuất PDF.
Giao diện theo **Gendemy Design System** (`D:\GENDEMY\DESIGN.md`): font FZ Poppins, bảng màu
Royal Navy · Prussian Blue · Turquoise, sidebar trên desktop, header kính mờ và BottomBar trên mobile.

Chỉ cần **Node.js 20+**. Không có thư viện nào phải cài.

## Lệnh

| Lệnh | Việc làm |
|---|---|
| `npm run dev` | Chạy trên http://localhost:3030, sửa file trong `src/` là trang tự tải lại |
| `npm run build` | Gộp `src/` thành `docs/index.html` |
| `npm run push` | Build, commit mọi thay đổi rồi `git push` |
| `npm run push -- "Lời nhắn"` | Như trên, với lời nhắn commit của bạn |

Trong VS Code: mở thư mục này rồi **bấm F5** (hoặc mở Terminal bằng <kbd>Ctrl</kbd>+<kbd>`</kbd> và gõ `npm run dev`).
Trình duyệt tự mở http://localhost:3030.

## Cấu trúc

```
src/                    mã nguồn - chỉ sửa ở đây
  part_head.html        <head>
  style.css             toàn bộ CSS theo Gendemy Design System (sáng/tối, mobile, in ấn)
  assets/               font FZ Poppins, logo, mascot - được nhúng thẳng vào file khi build
  part_defs.html        glyph SVG
  part_icons.html       sprite icon
  ban_bj/sh/sz.html     hình vector dự phòng khi mất ảnh
  app1.js               i18n, chuỗi giao diện
  app2.js               lượt đi/về, việc gấp, lịch đặt chỗ
  app3.js               giới thiệu thành phố, ngày 21/10 Thượng Hải
  app4.js               Bắc Kinh 21–25/10 (lịch chính thức của BNU)
  app5.js               Bắc Kinh 26/10
  app6.js               27/10 – 1/11: Bắc Kinh, Thiên Tân, Thâm Quyến
  app7.js               bảng ngân sách
  app8.js               chuẩn bị, câu hỏi cho BTC, liên kết
  appshots.js           ảnh Wikimedia Commons
  app9.js               render, sidebar, bottom bar, sáng/tối, xuất PDF
scripts/                build.js · dev.js · push.js
docs/index.html         file kết quả (tự sinh, được commit, gốc của GitHub Pages)
```

Trong nguồn, viết `{{asset:ten-file.webp}}` để chèn một file trong `src/assets/` (khi build sẽ
thành data URI). **Đừng sửa `docs/index.html` trực tiếp** - lần build sau sẽ ghi đè. Thứ tự ghép file JS
nằm trong `scripts/build.js` và không được đổi.

## Quy ước nội dung

- Mọi chuỗi là mảng ba phần tử `["tiếng Việt", "English", "中文"]`.
- `p:["gb","md","ta"]` quy định ai thấy mục đó; bỏ trống là ai cũng thấy.
- Nhãn mốc giờ `tag`: `free` · `pay` · `host` (BNU chi trả) · `bnu` (lịch chính thức BNU) · `ta` · `md`.
- Ảnh trong `appshots.js` gắn theo **đúng tiêu đề tiếng Việt** của mốc giờ: đổi tiêu đề là mất ảnh.
- Không dùng dấu `—` trong tiếng Việt và tiếng Anh, dùng `-`. Tiếng Trung giữ `——`.

## Riêng tư

Repo này để **riêng tư**: file chứa mã đặt chỗ và tên thật của cả bốn người. Bật GitHub Pages
là trang công khai, kể cả khi repo riêng tư. Muốn gửi người khác thì gửi file HTML hoặc PDF.
