/* ---------- i18n core ---------- */
var LANGS = ["vi","en","zh"];
var li = 0;      // language index
var pf = "all";  // person filter

function T(a){ return (a && a[li] !== undefined && a[li] !== "") ? a[li] : (a ? a[0] : ""); }
function el(tag, cls, html){ var e=document.createElement(tag); if(cls) e.className=cls; if(html!=null) e.innerHTML=html; return e; }
function has(p){ if(!p) return true; if(pf==="all") return true; return p.indexOf(pf)>-1; }
function anyOf(p){ return has(p); }

/* ---------- UI chrome strings ---------- */
var UI = {
  lang:      ["Ngôn ngữ","Language","语言"],
  who:       ["Xem kế hoạch của","Showing plan for","查看行程"],
  all:       ["Cả đội","Whole team","全队"],
  gb:        ["Gia Bảo & Quỳnh Mai","Gia Bao & Quynh Mai","嘉宝 & 琼梅"],
  md:        ["Mỹ Duyên","My Duyen","美缘"],
  ta:        ["Tuấn Anh","Tuan Anh","俊英"],
  print:     ["Xuất PDF","Export PDF","导出PDF"],
  printing:  ["Đang tải ảnh…","Loading images…","正在加载图片…"],
  printhint: ["Bản PDF sẽ theo đúng ngôn ngữ và người đang chọn ở trên. Trong hộp thoại in, chọn “Save as PDF” / “Lưu dưới dạng PDF”.",
              "The PDF follows the language and person selected above. In the print dialog choose “Save as PDF”.",
              "导出的PDF与上方所选语言和人员一致。在打印对话框中选择“另存为PDF”。"],
  kicker:    ["GCD4F Global Finals · Team Gendemy","GCD4F Global Finals · Team Gendemy","GCD4F 全球总决赛 · Gendemy 队"],
  title:     ["Bốn người, ba đường về","Four people, three ways home","四人，三种归途"],
  lede:      ["Cả bốn người bay chung một chuyến đi, quá cảnh 15 tiếng ở Thượng Hải rồi tới Bắc Kinh trong đêm. Sau cuộc thi thì tách ra: Tuấn Anh về ngày 26/10, Gia Bảo và Quỳnh Mai về ngày 28/10, Mỹ Duyên ở lại tới 31/10 rồi về qua Thâm Quyến.",
              "All four fly out together, with a 15-hour layover in Shanghai before reaching Beijing overnight. After the competition the group splits: Tuan Anh flies home on 26 Oct, Gia Bao and Quynh Mai on 28 Oct, and My Duyen stays until 31 Oct and returns through Shenzhen.",
              "四人同机出发，在上海中转15小时，深夜抵达北京。比赛结束后分开：俊英10月26日回国，嘉宝和琼梅10月28日，美缘留到10月31日经深圳返回。"],
  m1:        ["20/10 – 1/11/2026 · 13 ngày","20 Oct – 1 Nov 2026 · 13 days","2026年10月20日–11月1日 · 13天"],
  m2:        ["4 người bay chung lượt đi · 3 lịch về khác nhau","4 fly out together · 3 different returns","去程4人同行 · 3种不同回程"],
  m3:        ["Ngân sách 15 triệu ₫ · Gia Bảo, Quỳnh Mai","Budget 15m VND · Gia Bao, Quynh Mai","预算1500万越南盾 · 嘉宝、琼梅"],
  tz:        ["Mọi mốc giờ trong trang này là giờ Trung Quốc (nhanh hơn Việt Nam 1 tiếng).",
              "All times on this page are China time (1 hour ahead of Vietnam).",
              "本页所有时间均为中国时间（比越南快1小时）。"],
  emptyDay:  ["Ngày này không có lịch riêng cho người bạn đang chọn.","No separate schedule for the selected person on this day.","该日此人没有单独行程。"],
  cities: { bj:["Bắc Kinh","Beijing","北京"], sh:["Thượng Hải","Shanghai","上海"], tj:["Thiên Tân","Tianjin","天津"], sz:["Thâm Quyến","Shenzhen","深圳"] },
  cityspan: {
    sh:["21/10 · quá cảnh 15 tiếng","21 Oct · a 15-hour layover","10月21日 · 中转15小时"],
    bj:["21–28/10","21–28 Oct","10月21–28日"],
    tj:["29–31/10 · chỉ Mỹ Duyên","29–31 Oct · My Duyen only","10月29–31日 · 仅美缘"],
    sz:["31/10 – 1/11 · chỉ Mỹ Duyên","31 Oct – 1 Nov · My Duyen only","10月31日–11月1日 · 仅美缘"]
  },
  figcap: {
    bj:["Trường Thành Bát Đạt Lĩnh · Kỳ Niên Điện · Điện Thái Hoà","Badaling Great Wall · Hall of Prayer for Good Harvests · Hall of Supreme Harmony","八达岭长城 · 祈年殿 · 太和殿"],
    sh:["Bến Thượng Hải · Tháp Đông Phương Minh Châu · Phà qua sông Hoàng Phố","The Bund · Oriental Pearl Tower · Huangpu River ferry","外滩 · 东方明珠 · 黄浦江轮渡"],
    tj:["Sông Hải Hà · Thiên Tân Chi Nhãn · Khu tô giới Ý","The Hai River · the Tianjin Eye · the Italian concession","海河 · 天津之眼 · 意式风情区"],
    sz:["Tháp Bình An 599m · Cầu Vịnh Thâm Quyến nhìn sang Hồng Kông","Ping An Finance Centre 599m · Shenzhen Bay Bridge looking to Hong Kong","平安金融中心599米 · 深圳湾大桥远眺香港"]
  },
  dow: {
    "T2":["Thứ hai","Monday","星期一"], "T3":["Thứ ba","Tuesday","星期二"], "T4":["Thứ tư","Wednesday","星期三"],
    "T5":["Thứ năm","Thursday","星期四"], "T6":["Thứ sáu","Friday","星期五"], "T7":["Thứ bảy","Saturday","星期六"],
    "CN":["Chủ nhật","Sunday","星期日"]
  },
  mon: ["Tháng 10","October","10月"],
  mon2:["Tháng 11","November","11月"],
  tags: {
    free: ["Miễn phí","Free","免费"],
    host: ["BNU chi trả","Covered by BNU","北师大承担"]
  },
  min: ["phút","min","分钟"],
  hr:  ["giờ","h","小时"]
};

/* ---------- section headings ---------- */
var SEC = {
  whogoes: ["Ai đi những đâu","Who goes where","谁去哪里"],
  urgent:  ["Làm ngay tuần này","Do this week","本周必办"],
  booking: ["Lịch đặt vé","Booking calendar","订票时间表"],
  budget:  ["Ngân sách","Budget","预算"],
  budgetTA:["Ngân sách Tuấn Anh","Tuan Anh's budget","俊英的预算"],
  prep:    ["Chuẩn bị trước khi bay","Before you fly","出发前准备"],
  uni:     ["Thanh Hoa & Bắc Đại","Tsinghua & Peking University","清华 & 北大"]
};
