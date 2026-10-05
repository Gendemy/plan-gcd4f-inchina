/* Bắc Kinh 26/10 - cả đội tách ba hướng */
DAYS.push(
{
  city:"bj",
  n:"26",
  dow:"T2",
  icon:"g-wall",
  head:["Trường Thành Tư Mã Đài và Cổ Bắc Thuỷ Trấn", "Simatai Great Wall and Gubei Water Town", "司马台长城与古北水镇"],
  legs:[
    {
      cls:"wall",
      p:["gb"],
      h:["Trường Thành Tư Mã Đài", "Simatai Great Wall", "司马台长城"],
      who:["Gia Bảo + Quỳnh Mai", "Gia Bao + Quynh Mai", "嘉宝 + 琼梅"],
      slots:[
        {
          t:["10:15–13:30", "10:15–13:30", "10:15–13:30"],
          b:["Trường Thành Tư Mã Đài", "Simatai Great Wall", "司马台长城"],
          tag:"pay",
          tagx:["190 CNY", "CNY 190", "190元"],
          dur:["195 phút", "195 min", "195分钟"],
          d:[
            "<span class=\"han\">司马台长城</span> - đoạn tường thành nguyên bản, dốc và vắng, ngay phía trên thị trấn. Mở 8:00–17:30. Đi cáp treo lên (120 CNY khứ hồi) rồi đi bộ dọc các tháp canh.",
            "<span class=\"han\">司马台长城</span> - original, steep and quiet wall right above the town. Open 08:00–17:30. Cable car up (CNY 120 return), then walk the watchtowers.",
            "<span class=\"han\">司马台长城</span>——原汁原味的长城，陡峭人少，就在古镇上方。开放8:00–17:30。坐缆车上山（往返120元），再沿敌楼步行。"
          ]
        }
      ]
    },
    {
      cls:"uni",
      p:["md"],
      h:["Cổ Bắc Thuỷ Trấn", "Gubei Water Town", "古北水镇"],
      who:["Mỹ Duyên", "My Duyen", "美缘"],
      slots:[
        {
          t:["10:15–13:30", "10:15–13:30", "10:15–13:30"],
          b:["Dạo Cổ Bắc Thuỷ Trấn", "Exploring Gubei Water Town", "游览古北水镇"],
          tag:"pay",
          tagx:["150 CNY", "CNY 150", "150元"],
          dur:["195 phút", "195 min", "195分钟"],
          d:[
            "<span class=\"han\">古北水镇</span> - thị trấn cổ kênh nước, cầu đá, phố cổ dưới chân Trường Thành. Đi thuyền trên kênh, xem xưởng nhuộm và lò rượu cổ.",
            "<span class=\"han\">古北水镇</span> - an old-style canal town of stone bridges and lanes below the Wall. Take a boat, visit the dye house and the distillery.",
            "<span class=\"han\">古北水镇</span>——长城脚下的水乡古镇，石桥古街。坐游船，看染坊和酒坊。"
          ]
        }
      ]
    }
  ],
  slots:[
    {
      p:["ta"],
      t:["03:15", "03:15", "03:15"],
      b:["Tuấn Anh hạ cánh Nội Bài T2", "Tuan Anh lands at Noi Bai T2", "俊英抵达内排T2"],
      d:["Nhắn cả nhóm khi về tới nhà.", "Message the group once home.", "到家后在群里报个平安。"]
    },
    {
      p:["gb", "md"],
      t:["07:00–08:00", "07:00–08:00", "07:00–08:00"],
      b:["Ăn sáng, trả phòng BNU, lên xe thuê cả ngày", "Breakfast, check out of BNU, into the day-hire car", "早餐、退北师大房间、上包车"],
      dur:["60 phút", "60 min", "60分钟"],
      d:[
        "BNU chi trả bữa sáng. Xe 7 chỗ chở ba người và vali, chờ cả ngày rồi đưa về khách sạn trung tâm.",
        "BNU covers breakfast. A 7-seater takes the three of you and the luggage, waits all day, then drives to the central hotel.",
        "北师大提供早餐。7座车载三人和行李，全天等候，晚上送到市中心酒店。"
      ],
      tag:"host"
    },
    {
      p:["gb", "md"],
      m:1,
      t:["≈ 2 giờ", "≈ 2h", "约2小时"],
      a:[
        "Xe từ campus Xương Bình tới <span class=\"han\">古北水镇</span> Cổ Bắc Thuỷ Trấn, huyện Mật Vân · khoảng 120 km",
        "Car from Changping campus to <span class=\"han\">古北水镇</span> Gubei Water Town, Miyun · about 120 km",
        "包车从昌平校区到密云<span class=\"han\">古北水镇</span> · 约120公里"
      ]
    },
    {
      p:["gb", "md"],
      t:["10:00", "10:00", "10:00"],
      b:["Tới Cổ Bắc Thuỷ Trấn", "Arrive at Gubei Water Town", "抵达古北水镇"],
      d:["Vé đặt trước bằng hộ chiếu. Vali để lại trong xe.", "Tickets booked ahead on the passport. Luggage stays in the car.", "门票凭护照提前预订。行李留在车上。"]
    }
  ],
  tail:[
    {
      p:["gb", "md"],
      t:["13:45–14:45", "13:45–14:45", "13:45–14:45"],
      b:["Ăn trưa cùng nhau trong thị trấn", "Lunch together in the town", "在镇上一起吃午饭"],
      dur:["60 phút", "60 min", "60分钟"]
    },
    {
      p:["gb", "md"],
      t:["14:45–17:00", "14:45–17:00", "14:45–17:00"],
      b:["Dạo thị trấn, nghỉ chân ở quán trà", "Stroll the town, rest at a teahouse", "逛古镇，茶馆歇脚"],
      dur:["135 phút", "135 min", "135分钟"]
    },
    {
      p:["gb", "md"],
      t:["17:00–18:30", "17:00–18:30", "17:00–18:30"],
      b:["Thị trấn lên đèn", "The town lights up", "古镇亮灯"],
      tag:"free",
      dur:["90 phút", "90 min", "90分钟"],
      d:[
        "Trời tối khoảng 17:20, đèn thị trấn và Trường Thành phía trên bật sáng.",
        "Dark around 17:20, when the town and the Wall above light up.",
        "约17:20天黑，古镇和上方的长城亮灯。"
      ]
    },
    {
      p:["gb", "md"],
      m:1,
      t:["≈ 2 giờ", "≈ 2h", "约2小时"],
      a:[
        "Xe về khách sạn trung tâm, khu Vương Phủ Tỉnh / Tiền Môn · khoảng 130 km",
        "Car to the central hotel, Wangfujing / Qianmen area · about 130 km",
        "包车回王府井/前门一带的市中心酒店 · 约130公里"
      ]
    },
    {
      p:["gb", "md"],
      t:["20:30–21:30", "20:30–21:30", "20:30–21:30"],
      b:["Nhận phòng khách sạn trung tâm, ăn tối", "Check in at the central hotel, dinner", "入住市中心酒店，晚餐"],
      dur:["60 phút", "60 min", "60分钟"],
      d:[
        "Phòng 3 người ở khu Vương Phủ Tỉnh hoặc Tiền Môn, tiện cho Cố Cung sáng mai.",
        "A room for three around Wangfujing or Qianmen, handy for the Forbidden City tomorrow.",
        "王府井或前门一带的三人间，方便明天去故宫。"
      ]
    }
  ]
}
);
