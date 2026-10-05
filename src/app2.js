/* Ai đi đâu, việc gấp, lịch đặt vé */
var TRACKS = [
  {
    cls:"a",
    p:null,
    h:["Lượt đi - cả bốn người đi cùng nhau", "The outbound leg - all four together", "去程——四人同行"],
    n:["20–21/10 · Hà Nội → Thượng Hải → Bắc Kinh", "20–21 Oct · Hanoi → Shanghai → Beijing", "10月20–21日 · 河内 → 上海 → 北京"],
    b:[
      [
        "<strong>21/10, 02:20</strong> Nội Bài T2 → Phố Đông T1 · MU5076, hạ cánh 06:35. <strong>21:35</strong> Phố Đông T1 → Thủ Đô T2 · MU5165, hạ cánh 23:50.",
        "<strong>21 Oct, 02:20</strong> Noi Bai T2 → Pudong T1 · MU5076, lands 06:35. <strong>21:35</strong> Pudong T1 → Capital T2 · MU5165, lands 23:50.",
        "<strong>10月21日02:20</strong> 内排T2 → 浦东T1 · MU5076，06:35落地。<strong>21:35</strong> 浦东T1 → 首都T2 · MU5165，23:50落地。"
      ],
      [
        "Quá cảnh 15 tiếng ở Thượng Hải, gửi đồ ở Dihang Boutique Hotel. BNU đón tại sân bay Thủ Đô.",
        "15-hour layover in Shanghai, bags at the Dihang Boutique Hotel. BNU meets the group at Capital Airport.",
        "在上海中转15小时，行李寄存在迪航酒店。北师大在首都机场接机。"
      ],
      [
        "Vé 4 người <strong>12.760.000 ₫</strong> (3.190.000 ₫/người) · mã đặt chỗ 1669110572407145.",
        "Fares for four <strong>12,760,000 VND</strong> (3,190,000 each) · booking 1669110572407145.",
        "四人票款<strong>1276万越南盾</strong>（每人319万）· 订单号1669110572407145。"
      ]
    ]
  },
  {
    cls:"b",
    p:["ta"],
    h:["Tuấn Anh - về ngày 26/10", "Tuan Anh - home on 26 Oct", "俊英——10月26日回国"],
    n:["21–26/10 · 6 ngày · vé đã đặt", "21–26 Oct · 6 days · ticket booked", "10月21–26日 · 6天 · 机票已订"],
    b:[
      [
        "Ở BNU suốt kỳ thi. Vé về <strong>Air China</strong>: 00:10 ngày 26/10 (tức đêm 25/10), Thủ Đô T3 → Nội Bài T2, hạ cánh 03:15. <strong>3.104.000 ₫</strong>.",
        "At BNU for the competition. Return on <strong>Air China</strong>: 00:10 on 26 Oct (the night of 25 Oct), Capital T3 → Noi Bai T2, lands 03:15. <strong>3,104,000 VND</strong>.",
        "比赛期间住北师大。回程<strong>国航</strong>：10月26日00:10（即25日深夜），首都T3 → 内排T2，03:15落地。<strong>310.4万越南盾</strong>。"
      ]
    ]
  },
  {
    cls:"a",
    p:["gb"],
    h:["Gia Bảo & Quỳnh Mai - về ngày 28/10", "Gia Bao & Quynh Mai - home on 28 Oct", "嘉宝 & 琼梅——10月28日回国"],
    n:["21–28/10 · 8 ngày · vé đã đặt", "21–28 Oct · 8 days · ticket booked", "10月21–28日 · 8天 · 机票已订"],
    b:[
      [
        "22/10 khu đại học Hải Điến cùng cả đội. 26/10 Trường Thành Tư Mã Đài và Cổ Bắc Thuỷ Trấn. 27/10 Thiên Đàn, Thiên An Môn, Cố Cung, Cảnh Sơn, Vương Phủ Tỉnh.",
        "22 Oct the Haidian university district with the team. 26 Oct Simatai Great Wall and Gubei Water Town. 27 Oct Temple of Heaven, Tiananmen, Forbidden City, Jingshan, Wangfujing.",
        "10月22日与全队逛海淀高校区。10月26日司马台长城和古北水镇。10月27日天坛、天安门、故宫、景山、王府井。"
      ],
      [
        "Vé về <strong>Air China CA883</strong>: 00:10 ngày 28/10, Thủ Đô T3 → Nội Bài T2, hạ cánh 03:15. <strong>6.174.000 ₫</strong> cho 2 người · Trip.com 1688901859853505 · mã hãng MYCREC.",
        "Return on <strong>Air China CA883</strong>: 00:10 on 28 Oct, Capital T3 → Noi Bai T2, lands 03:15. <strong>6,174,000 VND</strong> for two · Trip.com 1688901859853505 · airline ref MYCREC.",
        "回程<strong>国航CA883</strong>：10月28日00:10，首都T3 → 内排T2，03:15落地。两人<strong>617.4万越南盾</strong> · 携程1688901859853505 · 航司编号MYCREC。"
      ]
    ]
  },
  {
    cls:"b",
    p:["md"],
    h:["Mỹ Duyên - về ngày 31/10 qua Thâm Quyến", "My Duyen - home on 31 Oct via Shenzhen", "美缘——10月31日经深圳回国"],
    n:["21/10 – 1/11 · 13 ngày", "21 Oct – 1 Nov · 13 days", "10月21日–11月1日 · 13天"],
    b:[
      [
        "Vé về: <strong>31/10 07:55</strong> Thiên Tân Tân Hải T2 → Bảo An Thâm Quyến (CA2813), qua đêm, <strong>1/11 08:30</strong> → Nội Bài 09:40 (ZH101). <strong>3.648.000 ₫</strong>.",
        "Return: <strong>31 Oct 07:55</strong> Tianjin Binhai T2 → Shenzhen Bao'an (CA2813), overnight, <strong>1 Nov 08:30</strong> → Noi Bai 09:40 (ZH101). <strong>3,648,000 VND</strong>.",
        "回程：<strong>10月31日07:55</strong> 天津滨海T2 → 深圳宝安（CA2813），过夜，<strong>11月1日08:30</strong> → 内排09:40（ZH101）。<strong>364.8万越南盾</strong>。"
      ],
      [
        "26/10 Cổ Bắc Thuỷ Trấn cùng Bảo và Mai. 28/10 Universal Beijing Resort. 29–30/10 Thiên Tân. 31/10 Thâm Quyến, Cửa sổ Thế giới dịp Halloween.",
        "26 Oct Gubei Water Town with Bao and Mai. 28 Oct Universal Beijing Resort. 29–30 Oct Tianjin. 31 Oct Shenzhen, Window of the World at Halloween.",
        "10月26日与嘉宝、琼梅去古北水镇。10月28日北京环球度假区。10月29–30日天津。10月31日深圳，万圣节的世界之窗。"
      ]
    ]
  }
];

var URGENT = [
  {
    n:"01",
    ic:"clip",
    h:["Visa: còn Quỳnh Mai nhận ngày 6/10", "Visas: Quynh Mai collects on 6 Oct", "签证：琼梅10月6日领取"],
    b:[
      "Gia Bảo, Tuấn Anh, Mỹ Duyên đã có visa. Cầm visa là kiểm tra họ tên, số hộ chiếu và thời gian lưu trú (Mỹ Duyên cần tới 1/11).",
      "Gia Bao, Tuan Anh and My Duyen have theirs. Check the name, passport number and length of stay on collection (My Duyen needs through 1 Nov).",
      "嘉宝、俊英、美缘已拿到签证。领取时核对姓名、护照号和停留期（美缘需覆盖到11月1日）。"
    ]
  },
  {
    n:"02",
    ic:"bed",
    h:["Huỷ phòng Thông Châu, đặt phòng trung tâm", "Cancel Tongzhou, book a central room", "取消通州酒店，改订市中心"],
    b:[
      "Huỷ phòng gia đình ở Thông Châu (26–28/10). Đặt một phòng 3 người ở khu Vương Phủ Tỉnh hoặc Tiền Môn cho đêm 26 và 27/10, Mỹ Duyên ở thêm đêm 28/10.",
      "Cancel the Tongzhou family room (26–28 Oct). Book a room for three around Wangfujing or Qianmen for 26 and 27 Oct, with My Duyen staying on for 28 Oct.",
      "取消通州的家庭房（10月26–28日）。在王府井或前门一带订一间三人房住26、27日，美缘续住28日。"
    ]
  },
  {
    n:"03",
    ic:"bed",
    h:["Chỗ ở cho Mỹ Duyên bốn đêm cuối", "Four more nights for My Duyen", "美缘最后四晚的住宿"],
    b:[
      "Đêm 28/10: ở thêm phòng trung tâm. 29–30/10 ở Thiên Tân (khu Hoà Bình), 31/10 ở Thâm Quyến gần sân bay Bảo An. Chọn loại huỷ miễn phí.",
      "28 Oct: stay on in the central room. 29–30 Oct in Tianjin (Heping), 31 Oct in Shenzhen near Bao'an airport. Take free cancellation.",
      "10月28日：市中心房间续住。10月29–30日天津（和平区），10月31日深圳宝安机场附近。选可免费取消。"
    ]
  }
];

var BOOKHEAD = [["Việc cần làm", "What to book", "事项"], ["Kênh", "Where", "渠道"], ["Thời điểm", "When", "时间"]];
var BOOKING = [
  {
    p:["gb"],
    a:[
      "Đặt xe đón ở Nội Bài lúc <strong>03:15 sáng 28/10</strong>",
      "Arrange a ride from Noi Bai at <strong>03:15 on 28 Oct</strong>",
      "安排<strong>10月28日凌晨03:15</strong>在内排的接车"
    ],
    b:["Người nhà hoặc app gọi xe", "Family or a ride app", "家人或打车App"],
    c:["Trước 25/10", "Before 25 Oct", "10月25日前"]
  },
  {
    p:["ta"],
    a:[
      "Đặt xe đón ở Nội Bài lúc <strong>03:15 sáng 26/10</strong>",
      "Arrange a ride from Noi Bai at <strong>03:15 on 26 Oct</strong>",
      "安排<strong>10月26日凌晨03:15</strong>在内排的接车"
    ],
    b:["Người nhà hoặc app gọi xe", "Family or a ride app", "家人或打车App"],
    c:["Trước 25/10", "Before 25 Oct", "10月25日前"]
  },
  {
    p:null,
    a:["Visa X2 của Quỳnh Mai", "Quynh Mai's X2 visa", "琼梅的X2签证"],
    b:["Trung tâm visa TQ, Hà Nội", "Chinese visa centre, Hanoi", "河内中国签证中心"],
    c:["6/10", "6 Oct", "10月6日"]
  },
  {
    p:["gb", "md"],
    a:[
      "Khách sạn trung tâm (Vương Phủ Tỉnh / Tiền Môn), phòng 3 người <strong>đêm 26–27/10</strong>, Mỹ Duyên thêm <strong>đêm 28/10</strong>",
      "Central hotel (Wangfujing / Qianmen), room for three <strong>26–27 Oct</strong>, My Duyen also <strong>28 Oct</strong>",
      "市中心酒店（王府井/前门），三人间<strong>10月26–27日</strong>，美缘加住<strong>28日</strong>"
    ],
    b:["Trip.com", "Trip.com", "携程"],
    c:["Ngay", "Now", "立即"]
  },
  {
    p:["md"],
    a:[
      "Khách sạn <strong>Thiên Tân 2 đêm 29 và 30/10</strong>, khu Hoà Bình quanh Ngũ Đại Đạo",
      "Hotel in <strong>Tianjin, 2 nights 29 and 30 Oct</strong>, Heping around the Five Great Avenues",
      "<strong>天津10月29、30日两晚</strong>，和平区五大道一带"
    ],
    b:["Trip.com", "Trip.com", "携程"],
    c:["Đầu tháng 10", "Early Oct", "10月初"]
  },
  {
    p:["md"],
    a:[
      "Khách sạn <strong>Thâm Quyến đêm 31/10</strong>, gần sân bay Bảo An, có xe đưa đón",
      "Hotel in <strong>Shenzhen, night of 31 Oct</strong>, near Bao'an airport, with a shuttle",
      "<strong>深圳10月31日一晚</strong>，宝安机场附近，有接送车"
    ],
    b:["Trip.com", "Trip.com", "携程"],
    c:["Đầu tháng 10", "Early Oct", "10月初"]
  },
  {
    p:["gb", "md"],
    a:[
      "Thuê <strong>xe 7 chỗ cả ngày 26/10</strong>: BNU → Cổ Bắc Thuỷ Trấn → khách sạn trung tâm",
      "<strong>7-seater for the day on 26 Oct</strong>: BNU → Gubei → central hotel",
      "<strong>10月26日7座包车</strong>：北师大 → 古北水镇 → 市中心酒店"
    ],
    b:["Trip.com (包车)", "Trip.com (包车)", "携程包车"],
    c:["Trước 19/10", "By 19 Oct", "10月19日前"]
  },
  {
    p:["gb", "md"],
    a:[
      "Vé <strong>Cổ Bắc Thuỷ Trấn 26/10</strong>: Bảo, Mai vé kèm Tư Mã Đài (190 CNY), Duyên vé thị trấn (150 CNY)",
      "<strong>Gubei Water Town, 26 Oct</strong>: Bao and Mai with Simatai (CNY 190), Duyen town only (CNY 150)",
      "<strong>古北水镇10月26日</strong>：嘉宝、琼梅含司马台（190元），美缘古镇票（150元）"
    ],
    b:["Trip.com / mini-program 古北水镇", "Trip.com / 古北水镇 mini-program", "携程 / 古北水镇小程序"],
    c:["Trước 1 tuần", "A week ahead", "提前一周"]
  },
  {
    p:["md"],
    a:[
      "Vé Universal Beijing Resort ngày <strong>28/10</strong>",
      "Universal Beijing Resort ticket, <strong>28 Oct</strong>",
      "北京环球影城门票，<strong>10月28日</strong>"
    ],
    b:["App Universal Beijing Resort", "Universal Beijing Resort app", "北京环球度假区App"],
    c:["Đầu tháng 10", "Early Oct", "10月初"]
  },
  {
    p:null,
    a:[
      "Vé Cố Cung <strong>ngày 27/10, khung sáng</strong>, 3 vé - mở bán 20:00 giờ Bắc Kinh",
      "Forbidden City, <strong>27 Oct, morning slot</strong>, 3 tickets - released 20:00 Beijing time",
      "故宫<strong>10月27日上午场</strong>，3张——北京时间20:00放票"
    ],
    b:[
      "<span class=\"mono\">bookingticket.dpm.org.cn</span>",
      "<span class=\"mono\">bookingticket.dpm.org.cn</span>",
      "<span class=\"mono\">bookingticket.dpm.org.cn</span>"
    ],
    c:["20/10", "20 Oct", "10月20日"]
  },
  {
    p:null,
    a:["Vé Thiên Đàn ngày 27/10, 3 vé", "Temple of Heaven, 27 Oct, 3 tickets", "天坛10月27日，3张"],
    b:["WeChat / Trip.com", "WeChat / Trip.com", "微信 / 携程"],
    c:["20/10", "20 Oct", "10月20日"]
  },
  {
    p:null,
    a:[
      "Đặt chỗ Quảng trường Thiên An Môn ngày 27/10 (miễn phí, bắt buộc)",
      "Tiananmen Square reservation for 27 Oct (free, mandatory)",
      "天安门广场10月27日预约（免费，必须）"
    ],
    b:["WeChat mini-program", "WeChat mini-program", "微信小程序"],
    c:["20–26/10", "20–26 Oct", "10月20–26日"]
  },
  {
    p:["md"],
    a:[
      "Vé tàu cao tốc <strong>Bắc Kinh Nam đi Thiên Tân</strong>, chuyến ≈13:00 ngày 29/10",
      "High-speed train <strong>Beijing South to Tianjin</strong>, ≈13:00 on 29 Oct",
      "<strong>北京南至天津</strong>高铁，10月29日约13:00"
    ],
    b:["App 12306", "12306 app", "12306 App"],
    c:["≈ 15/10", "≈ 15 Oct", "约10月15日"]
  },
  {
    p:["md"],
    a:[
      "Đặt chỗ <strong>Thư viện Tân Hải Thiên Tân</strong> ngày 30/10 (miễn phí)",
      "<strong>Tianjin Binhai Library</strong> reservation for 30 Oct (free)",
      "<strong>天津滨海图书馆</strong>10月30日预约（免费）"
    ],
    b:["WeChat mini-program", "WeChat mini-program", "微信小程序"],
    c:["Trước 7 ngày", "7 days ahead", "提前7天"]
  },
  {
    p:["md"],
    a:[
      "Vé <strong>Cửa sổ Thế giới Thâm Quyến</strong> ngày 31/10, và tra lịch sự kiện Halloween",
      "<strong>Window of the World Shenzhen</strong> for 31 Oct, and check the Halloween event schedule",
      "<strong>深圳世界之窗</strong>10月31日门票，并查万圣夜活动安排"
    ],
    b:["Trip.com / WeChat mini-program", "Trip.com / WeChat mini-program", "携程 / 微信小程序"],
    c:["Trước 3 ngày", "3 days ahead", "提前3天"]
  }
];
var BOOKNOTE = [
  "Vé Cố Cung 27/10 mở bán 20:00 giờ Bắc Kinh ngày 20/10 (19:00 giờ Việt Nam). Đặt luôn vé Thiên Đàn và suất Thiên An Môn trong cùng buổi tối.",
  "Forbidden City tickets for 27 Oct go on sale at 20:00 Beijing time on 20 Oct (19:00 in Vietnam). Book the Temple of Heaven and Tiananmen the same evening.",
  "10月27日故宫门票于10月20日北京时间20:00放票（越南时间19:00）。当晚一并订好天坛和天安门预约。"
];
