# Kế hoạch GCD4F · Trung Quốc 10/2026

Kế hoạch chuyến đi của Team Gendemy dự GCD4F Global Finals tại Đại học Sư phạm Bắc Kinh,
20/10/2026 – 1/11/2026. Kết quả là **một file HTML tự chứa**: không cần máy chủ, không gọi
ra CDN nào, mở được ngoại tuyến và đọc được bên trong Trung Quốc đại lục.

| | |
|---|---|
| Ba ngôn ngữ | Việt · English · 中文, đổi ngay trên trang |
| Bốn bộ lọc người | Cả đội · Gia Bảo & Quỳnh Mai · Mỹ Duyên · Tuấn Anh |
| Xuất PDF | Theo đúng ngôn ngữ và người đang chọn |
| Ảnh | Wikimedia Commons, tự ẩn và thay bằng hình vector khi không tải được |

---

## Dựng file

```bash
python3 build.py        # Windows thường là:  python build.py
```

Lệnh này gộp mọi thứ trong `src/` thành một file và ghi ra hai chỗ:

- `docs/index.html` — bản chính thức, được commit, cũng là gốc của GitHub Pages
- `Ke-hoach-GCD4F-Trung-Quoc.html` — bản sao ở thư mục gốc để mở nhanh, **không** commit

Không có bước cài đặt nào. Chỉ cần Python 3.

---

## Cấu trúc

```
build.py                  gộp src/ thành một file HTML
docs/index.html           kết quả build (bản được commit)
src/
  part_head.html          <head>, biến CSS, toàn bộ CSS nền
  extra.css               CSS bổ sung, in ấn, icon, khoảng thở, mobile
  part_defs.html          <defs> SVG: các glyph g-wall, g-palace, g-pearl…
  part_icons.html         sprite 26 icon Lucide dán sẵn dạng <symbol>
  ban_bj.html             hình vector Bắc Kinh, dự phòng khi mất ảnh
  ban_sh.html             hình vector Thượng Hải
  ban_sz.html             hình vector Thâm Quyến
  app1.js                 i18n + UI + tên các mục
  app2.js                 TRACKS, URGENT, BOOKING
  app3.js                 CITYINTRO, khai báo DAYS, ngày 21/10 Thượng Hải
  app4.js                 Bắc Kinh 21–25/10
  app5.js                 Bắc Kinh 26/10
  app6.js                 27–28/10 Bắc Kinh, 29–30/10 Thiên Tân, 31/10–1/11 Thâm Quyến
  app7.js                 slot cho Tuấn Anh + toàn bộ bảng ngân sách
  app8.js                 panel chuẩn bị, footer, liên kết
  appshots.js             ảnh Wikimedia Commons
  app9.js                 render, thanh điều khiển, xuất PDF
tests/                    kiểm thử bằng Playwright
```

**Thứ tự ghép file JS trong `build.py` không được đổi.** `app1` định nghĩa `T()` và `UI`,
`app3` khai báo `DAYS`, `app4`–`app6` push thêm ngày vào đó, `app9` render và phải nằm cuối.

---

## Quy ước khi sửa nội dung

### Mọi chuỗi đều là mảng ba phần tử

```js
["tiếng Việt", "English", "中文"]
```

`T(mảng)` trả về phần tử theo ngôn ngữ đang chọn. Thiếu bản dịch thì tự rơi về tiếng Việt.

### Một ngày trông như thế này

```js
{ city:"bj", n:"27", dow:"T3", icon:"g-palace", p:["gb","md"],
  head:[...],            // tiêu đề ngày
  intro:[...],           // đoạn mở đầu, tuỳ chọn
  slots:[ ... ],         // các mốc giờ dùng chung
  legs:[ ... ],          // nhánh riêng của từng người, tuỳ chọn
  tail:[ ... ],          // các mốc giờ sau khi các nhánh gặp lại nhau
  callouts:[ ... ],      // hộp cảnh báo có phần "cách xử lý"
  notes:[ ... ] }        // ghi chú một dòng
```

- `city` — `sh`, `bj`, `tj`, `sz`. Đổi thứ tự các ngày là đổi thứ tự các thành phố.
- `p` — ai thấy mục này: `gb`, `md`, `ta`. Bỏ trống nghĩa là ai cũng thấy.
- `mon2:1` — dùng cho ngày 1/11 để nhãn tháng ghi "Tháng 11" thay vì "Tháng 10".
- `dow` — `T2`…`T7`, `CN`.

### Một mốc giờ

```js
{ t:["09:35–10:10", ...],           // cột giờ bên trái
  b:["Quảng trường Thiên An Môn", ...],  // tiêu đề
  tag:"free",                       // free | pay | host | ta | md
  tagx:[...],                       // đè chữ trên nhãn, ví dụ "60 CNY"
  dur:["35 phút", ...],
  d:[...] }                         // phần mô tả
```

Dòng di chuyển thì đặt `m:1` và dùng `a:` thay cho `b:`/`d:`. Icon phương tiện được
đoán từ chữ tiếng Việt trong `a` (`moveIcon()` trong `app9.js`): "đi bộ" ra icon người
đi bộ, "Didi" ra icon ô tô, "xe đưa đón" ra icon xe buýt, còn lại mặc định là tàu.

### Thêm ảnh cho một địa điểm

`SHOTS` trong `appshots.js` **gắn theo đúng tiêu đề tiếng Việt của mốc giờ**:

```js
"Thư viện Tân Hải Thiên Tân": S(
  "9/94",                                  // thư mục băm trên Wikimedia
  "Tianjin Binhai Library 3.jpg",          // tên file trên Commons
  "chú thích tiếng Việt", "English caption", "中文图注"),
```

Hai điều cần nhớ:

1. **Đổi tiêu đề mốc giờ là mất ảnh**, không có lỗi nào báo ra. `npm test` bắt được việc
   này: `tests/photos.js` sẽ liệt kê các ảnh mồ côi.
2. **Chỉ dùng bề rộng 960px.** Wikimedia không phục vụ mọi kích thước tuỳ ý; 960 là bề
   rộng duy nhất chạy được cho toàn bộ ảnh đang dùng. Muốn tìm thư mục băm và kiểm tra
   ảnh có tồn tại không, gọi API Commons với `iiurlwidth=960` rồi lấy phần `/thumb/x/xy/`
   trong `thumburl` trả về.

---

## Kiểm thử

```bash
npm install         # chỉ playwright
npm test            # render + photos + layout
npm run test:offline
npm run test:pdf
```

| Bài | Kiểm tra điều gì |
|---|---|
| `tests/render.js` | Dựng đủ 3 ngôn ngữ × 4 bộ lọc, đúng số ngày và số thành phố, không lỗi JS |
| `tests/photos.js` | Mọi ảnh đều khớp một mốc giờ, không có ảnh mồ côi |
| `tests/offline.js` | Chặn sạch http/https: ảnh phải tự ẩn, hình vector hiện lên, không còn ảnh vỡ |
| `tests/layout.js` | Không tràn ngang trên màn 390px; chụp ảnh sáng, tối, điện thoại |
| `tests/pdf.js` | Nút Xuất PDF ép ảnh tải xong, gọi `print()` đúng một lần, không bị kẹt |

Ảnh và PDF do test sinh ra nằm ở `tests/output/` và không được commit.

Nếu Chromium nằm ngoài chỗ Playwright mặc định thì đặt biến môi trường:

```bash
CHROMIUM_PATH=/đường/dẫn/tới/chrome npm test
```

---

## Vài quy tắc đã thống nhất

- **Không dùng dấu gạch ngang dài `—` trong văn bản tiếng Việt và tiếng Anh**, dùng `-`.
  Riêng tiếng Trung vẫn giữ cặp `——` vì đó là dấu câu chuẩn.
- Ưu tiên những địa điểm mang đặc trưng của điểm đến. Khu cửa hàng và quán cà phê kiểu
  nào cũng có thì bỏ qua.
- **Không phụ thuộc CDN.** Icon Lucide được dán thẳng vào file dạng sprite SVG, font là
  font hệ thống. File phải mở được khi không có mạng.
- Mọi liên kết ra ngoài đều mở tab mới (`openLinksInNewTab()` trong `app9.js`).
- Ảnh phải xuống cấp êm: Wikimedia bị chặn ở Trung Quốc đại lục, khi đó trang tự gỡ ảnh
  và bật hình vector. Cách gửi ảnh chắc chắn nhất cho người ở Trung Quốc là nút **Xuất PDF**,
  vì ảnh được nhúng vào PDF ngay trên máy người xuất.

---

## Riêng tư

Repo này **để ở chế độ riêng tư**. File kế hoạch chứa mã đặt chỗ chuyến bay, tên thật của
cả bốn người, và lịch trình bốn ngày đi một mình kèm giờ giấc cùng khu khách sạn cụ thể.

Lưu ý về GitHub Pages: **bật Pages là trang đó công khai**, kể cả khi repo riêng tư
(chỉ bản Enterprise mới giới hạn được người xem). Muốn gửi cho người khác mà vẫn kín thì
gửi thẳng file HTML hoặc bản PDF xuất ra, cả hai đều chạy ngoại tuyến.

Các file PDF giấy tờ cuộc thi đang bị `.gitignore` bỏ qua. Nếu muốn sao lưu luôn thì xoá
dòng `*.pdf` trong `.gitignore`.
