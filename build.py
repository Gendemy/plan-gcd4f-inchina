#!/usr/bin/env python3
"""
Gộp toàn bộ nguồn trong src/ thành một file HTML tự chứa.

Chạy:  python3 build.py      (Windows thường là:  python build.py)

Kết quả:
  docs/index.html                  bản chính thức, được commit, cũng là gốc GitHub Pages
  Ke-hoach-GCD4F-Trung-Quoc.html   bản sao ở thư mục gốc để mở nhanh trên máy (không commit)

Thứ tự ghép file JS là quan trọng: app1 định nghĩa T() và UI, app3 khai báo
DAYS, app4 tới app6 push thêm ngày vào DAYS, app9 render và phải nằm cuối.
"""

import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent
SRC = ROOT / "src"

# Các thành phố có hình minh hoạ vector dự phòng (ban_*.html).
# Thiên Tân dùng ảnh thật, không có bản vector, nên không nằm ở đây.
CITIES = ["bj", "sh", "sz"]

# Thứ tự này không được đổi.
JS_FILES = [
    "app1",      # i18n, chuỗi giao diện, tên các mục
    "app2",      # TRACKS, URGENT, BOOKING
    "app3",      # CITYINTRO + khai báo DAYS, ngày 21/10 Thượng Hải
    "app4",      # Bắc Kinh 21–25/10
    "app5",      # Bắc Kinh 26/10
    "app6",      # Bắc Kinh 27–28/10, Thiên Tân 29–30/10, Thâm Quyến 31/10–1/11
    "app7",      # chèn slot cho Tuấn Anh + toàn bộ bảng ngân sách
    "app8",      # panel chuẩn bị, footer, liên kết
    "appshots",  # ảnh Wikimedia Commons
    "app9",      # render engine, thanh điều khiển, xuất PDF - phải nằm cuối
]

OUTPUTS = [
    ROOT / "docs" / "index.html",
    ROOT / "Ke-hoach-GCD4F-Trung-Quoc.html",
]


def read(name):
    path = SRC / name
    if not path.exists():
        sys.exit("Thiếu file nguồn: %s" % path)
    return path.read_text(encoding="utf-8")


def build():
    parts = [
        read("part_head.html"),
        read("extra.css"),
        "</style>\n\n</head>\n<body>\n",
        read("part_defs.html") + "\n",
        read("part_icons.html") + "\n",
    ]

    for city in CITIES:
        parts.append(
            '<template id="ban-%s">%s</template>\n' % (city, read("ban_%s.html" % city))
        )

    parts.append(
        '<div class="wrap">\n<div class="bar" id="bar"></div>\n<div id="app"></div>\n</div>\n'
    )

    js = "".join(read(name + ".js") + "\n" for name in JS_FILES)
    parts.append("<script>\n" + js + "\n</script>\n</body>\n</html>\n")

    html = "".join(parts)

    for out in OUTPUTS:
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(html, encoding="utf-8", newline="\n")
        print("đã ghi %-38s %7d ký tự" % (out.relative_to(ROOT), len(html)))


if __name__ == "__main__":
    build()
