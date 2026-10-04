/* Chuẩn bị, footer, liên kết */
var PREP = [
  {
    ic:"wallet",
    h:["Thanh toán", "Payments", "支付"],
    li:[
      [
        "Cài <b>Alipay</b> và <b>WeChat Pay</b>, liên kết thẻ Visa/Mastercard khi còn ở Việt Nam.",
        "Set up <b>Alipay</b> and <b>WeChat Pay</b> with a Visa/Mastercard while still in Vietnam.",
        "在越南时就装好<b>支付宝</b>和<b>微信支付</b>并绑定Visa/万事达卡。"
      ],
      ["Alipay đặt được vé tàu, Didi và vé tham quan.", "Alipay handles train tickets, Didi and sight tickets.", "支付宝可以订火车票、打滴滴、买门票。"],
      ["Mang khoảng 500 CNY tiền mặt dự phòng.", "Carry about CNY 500 cash as backup.", "备约500元现金。"]
    ]
  },
  {
    ic:"wifi",
    h:["Internet", "Internet", "上网"],
    li:[
      [
        "Google, Facebook, Instagram, WhatsApp bị chặn ở Trung Quốc.",
        "Google, Facebook, Instagram and WhatsApp are blocked in China.",
        "谷歌、Facebook、Instagram、WhatsApp在中国被屏蔽。"
      ],
      [
        "Dùng <b>eSIM du lịch</b> đi qua Hồng Kông (không cần VPN) hoặc roaming Viettel/VinaPhone.",
        "Use a <b>travel eSIM</b> routed via Hong Kong (no VPN needed) or Viettel/VinaPhone roaming.",
        "使用经香港的<b>旅行eSIM</b>（无需VPN）或越南运营商漫游。"
      ],
      ["Mỹ Duyên: gói eSIM phải phủ tới 1/11.", "My Duyen: the eSIM plan must run through 1 Nov.", "美缘：eSIM套餐要覆盖到11月1日。"]
    ]
  },
  {
    ic:"phone",
    h:["App cần cài sẵn", "Apps to install first", "需提前安装的App"],
    li:[
      [
        "<b>Amap <span class=\"han\">高德地图</span></b> - bản đồ và chỉ đường metro (Google Maps không dùng được).",
        "<b>Amap <span class=\"han\">高德地图</span></b> - maps and metro directions (Google Maps does not work).",
        "<b><span class=\"han\">高德地图</span></b>——地图和地铁导航（谷歌地图不可用）。"
      ],
      ["<b>12306</b> - vé tàu, nhận hộ chiếu.", "<b>12306</b> - train tickets, accepts passports.", "<b>12306</b>——火车票，支持护照。"],
      ["Didi, Trip.com, WeChat, app dịch ảnh.", "Didi, Trip.com, WeChat, a photo-translation app.", "滴滴、携程、微信、拍照翻译App。"]
    ]
  },
  {
    ic:"clip",
    h:["Giấy tờ", "Documents", "证件"],
    li:[
      [
        "Luôn mang <b>hộ chiếu bản gốc</b>, ảnh chụp không được chấp nhận.",
        "Always carry the <b>original passport</b>; photos are not accepted.",
        "随身带<b>护照原件</b>，照片无效。"
      ],
      [
        "Lưu bản mềm hộ chiếu, visa, vé máy bay, xác nhận khách sạn.",
        "Keep digital copies of passport, visa, tickets and hotel confirmations.",
        "保存护照、签证、机票、酒店确认单的电子版。"
      ],
      [
        "Mang bản in DQ và Admission Notice của BNU trong túi xách tay.",
        "Carry printed copies of BNU's DQ and Admission Notice in the cabin bag.",
        "随身包里带北师大DQ和录取通知书的打印件。"
      ]
    ]
  },
  {
    ic:"luggage",
    h:["Hành lý", "Packing", "行李"],
    li:[
      [
        "Thượng Hải 15–23°C, Bắc Kinh 5–17°C, Thiên Tân 6–18°C, Thâm Quyến 22–29°C. Mặc nhiều lớp, mang áo khoác gió.",
        "Shanghai 15–23°C, Beijing 5–17°C, Tianjin 6–18°C, Shenzhen 22–29°C. Dress in layers, bring a windbreaker.",
        "上海15–23°C，北京5–17°C，天津6–18°C，深圳22–29°C。分层穿衣，带件风衣。"
      ],
      ["Giày đi bộ tốt: ngày 27/10 dễ đi 18–20 km.", "Good walking shoes: 27 Oct is easily 18–20 km.", "好走的鞋：10月27日很容易走18–20公里。"],
      [
        "Ngày 21/10 chỉ dùng túi xách tay: áo mỏng, sạc dự phòng, đồ vệ sinh cá nhân.",
        "On 21 Oct you only have the cabin bag: light layer, power bank, toiletries.",
        "10月21日只有随身包：薄外套、充电宝、洗漱用品。"
      ],
      [
        "CA883 của Bảo và Mai chỉ cho <b>5 kg xách tay</b> (55×40×20 cm).",
        "Bao and Mai's CA883 allows only <b>5 kg cabin baggage</b> (55×40×20 cm).",
        "嘉宝和琼梅的CA883<b>随身行李限5公斤</b>（55×40×20厘米）。"
      ],
      [
        "Adapter đa năng, sạc dự phòng (xách tay), son dưỡng, kem dưỡng ẩm.",
        "Universal adapter, power bank (cabin only), lip balm, moisturiser.",
        "万能插头、充电宝（随身）、润唇膏、保湿霜。"
      ]
    ]
  },
  {
    ic:"help",
    h:["Câu hỏi gửi BTC", "Questions for the organisers", "给主办方的问题"],
    li:[
      [
        "Danh sách đội đã đổi (Phan Chí Công không tham dự) và ba lịch về: Tuấn Anh 26/10, Bảo và Mai 28/10, Mỹ Duyên 31/10.",
        "Updated roster (Phan Chi Cong not attending) and three return dates: Tuan Anh 26 Oct, Bao and Mai 28 Oct, My Duyen 31 Oct.",
        "名单变更（潘志功不参加）和三个回程日期：俊英10月26日，嘉宝和琼梅10月28日，美缘10月31日。"
      ],
      [
        "Điểm hẹn ở sảnh đến T2 lúc 23:50 ngày 21/10 và số điện thoại người đón.",
        "Meeting point in the T2 arrivals hall at 23:50 on 21 Oct and the driver's phone number.",
        "10月21日23:50在T2到达大厅的会合点和接机人电话。"
      ],
      [
        "Ăn ở do BNU chi trả kết thúc tối 25/10 hay sáng 26/10?",
        "Does BNU's board and lodging end on the evening of 25 Oct or the morning of 26 Oct?",
        "北师大的食宿到10月25日晚还是26日早结束？"
      ]
    ]
  }
];

var FOOT = [
  "Giá vé và giờ tàu tra cứu tháng 8/2026, nên kiểm tra lại trước khi đi. Tỷ giá tham chiếu 1 CNY ≈ 3.950 ₫, 1 USD ≈ 26.170 ₫.",
  "Prices and timetables checked in August 2026; recheck before you go. Reference rates: CNY 1 ≈ 3,950 VND, USD 1 ≈ 26,170 VND.",
  "票价和时刻于2026年8月查询，出发前请再核对。参考汇率：1元≈3950越南盾，1美元≈26170越南盾。"
];

var LINKS = [
  [
    "https://english.beijing.gov.cn/studyinginbeijing/visaapplications/202306/t20230614_3134241.html",
    [
      "Hướng dẫn chính thức về visa du học X1/X2 - Chính quyền Bắc Kinh",
      "Official X1/X2 student visa guidance - Beijing Municipal Government",
      "X1/X2学习签证官方指引——北京市政府"
    ]
  ],
  [
    "https://www.travelchinaguide.com/embassy/visa/student.htm",
    ["Visa X2: thời hạn, số lần nhập cảnh, hồ sơ cần nộp", "X2 visa: duration, entries, documents required", "X2签证：期限、入境次数、所需材料"]
  ],
  ["https://visana.vn/xin-visa-trung-quoc/", ["Thủ tục nộp visa Trung Quốc tại Hà Nội", "Applying for a Chinese visa in Hanoi", "在河内申请中国签证的流程"]],
  ["https://www.flightsfrom.com/PEK-HAN", ["Chuyến bay thẳng Bắc Kinh Thủ Đô – Hà Nội", "Direct flights Beijing Capital – Hanoi", "北京首都-河内直飞航班"]],
  [
    "https://www.travelchinaguide.com/cityguides/shanghai/transportation/pudong-airport.htm",
    [
      "Sân bay quốc tế Phố Đông Thượng Hải - nhà ga và đường vào trung tâm",
      "Shanghai Pudong International Airport - terminals and city links",
      "上海浦东国际机场——航站楼与市区交通"
    ]
  ],
  [
    "https://www.travelchinaguide.com/attraction/shanghai/the-bund.htm",
    ["Bến Thượng Hải và khu Rockbund đường Viên Minh Viên", "The Bund and the Rockbund on Yuanmingyuan Road", "外滩与圆明园路的外滩源"]
  ],
  [
    "https://www.chinadiscovery.com/beijing/forbidden-city/how-to-book-tickets.html",
    ["Cách đặt vé Cố Cung cho người nước ngoài", "Booking Forbidden City tickets as a foreigner", "外国人如何预订故宫门票"]
  ],
  [
    "https://www.beijingtourism.org/simatai-great-wall-guide/",
    [
      "Trường Thành Tư Mã Đài và Cổ Bắc Thuỷ Trấn - vé, giờ mở cửa",
      "Simatai Great Wall and Gubei Water Town - tickets and hours",
      "司马台长城与古北水镇——门票与开放时间"
    ]
  ],
  ["https://www.travelchinaguide.com/temple-of-heaven-tickets-booking.htm", ["Vé Thiên Đàn", "Temple of Heaven tickets", "天坛门票"]],
  [
    "https://www.mvrdv.com/projects/234/tianjin-binhai-library",
    ["Thư viện Tân Hải Thiên Tân - hồ sơ thiết kế của MVRDV", "Tianjin Binhai Library - MVRDV's project page", "天津滨海图书馆——MVRDV项目页"]
  ],
  [
    "https://www.travelchinaguide.com/attraction/tianjin/five-great-avenue.htm",
    ["Ngũ Đại Đạo - bản đồ năm con đường và các biệt thự", "The Five Great Avenues - map of the five streets and the villas", "五大道——五条马路与小洋楼地图"]
  ],
  [
    "https://www.chinadiscovery.com/guangdong/shenzhen/window-of-the-world-shenzhen.html",
    [
      "Cửa sổ Thế giới Thâm Quyến - giá vé, giờ mở cửa, show buổi tối",
      "Window of the World Shenzhen - tickets, hours, evening shows",
      "深圳世界之窗——票价、开放时间、夜间演出"
    ]
  ],
  [
    "https://www.tsinghua.edu.cn/en/Visitor/Visitor_Information/Individual_Visit.htm",
    ["Quy định tham quan cá nhân - Đại học Thanh Hoa", "Individual visit rules - Tsinghua University", "个人参观规定——清华大学"]
  ],
  [
    "https://newsen.pku.edu.cn/news_events/news/campus/13455.html",
    ["Bắc Đại mở cửa trở lại cho khách tham quan", "Peking University reopens its campus to visitors", "北京大学恢复校园参观"]
  ],
  [
    "https://www.travelchinaguide.com/cityguides/tianjin/transportation/beijing-tianjin.htm",
    ["Tàu cao tốc liên thành Bắc Kinh – Thiên Tân", "The Beijing – Tianjin intercity high-speed train", "京津城际高铁"]
  ],
  [
    "https://www.travelchinaguide.com/cityguides/tianjin/transportation/airport.htm",
    ["Sân bay quốc tế Thiên Tân Tân Hải - đường ra sân bay", "Tianjin Binhai International Airport - getting there", "天津滨海国际机场——前往方式"]
  ],
  [
    "https://aic-fe.bnu.edu.cn/gccce2023/jtzw/zwskxx/xskc/",
    ["Đường tới campus Xương Bình, Đại học Sư phạm Bắc Kinh", "Getting to BNU's Changping campus", "前往北京师范大学昌平校区"]
  ]
];
