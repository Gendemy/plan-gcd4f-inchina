/* Bắc Kinh 21–25/10 - lịch chính thức của BNU */
DAYS.push(
{
  city:"bj",
  n:"21",
  dow:"T4",
  head:["Hạ cánh lúc gần nửa đêm, BNU đón tận sân bay", "Landing close to midnight, BNU meets the group", "将近午夜落地，北师大到机场接人"],
  slots:[
    {
      t:["23:50", "23:50", "23:50"],
      b:["Hạ cánh sân bay Thủ Đô, nhà ga T2", "Landing at Capital Airport, Terminal 2", "落地首都机场T2"],
      d:["Chuyến nội địa, không làm thủ tục nhập cảnh.", "Domestic arrival, no immigration.", "国内航班，无需入境手续。"]
    },
    {
      t:["23:50–00:25", "23:50–00:25", "23:50–00:25"],
      b:["Lấy hành lý ký gửi", "Collect the checked bags", "提取托运行李"],
      dur:["35 phút", "35 min", "35分钟"],
      d:["Nhắn người đón của BNU khi máy bay vừa hạ cánh.", "Message BNU's driver as soon as you land.", "落地后马上给北师大接机人发消息。"]
    },
    {
      m:1,
      t:["50 phút", "50 min", "50分钟"],
      a:[
        "Xe của BNU từ sân bay Thủ Đô về campus Xương Bình · khoảng 45 km · BNU lo, không mất tiền",
        "BNU's car from Capital Airport to the Changping campus · about 45 km · arranged and paid by BNU",
        "北师大的车从首都机场到昌平校区 · 约45公里 · 由北师大安排并承担"
      ]
    },
    {
      t:["≈ 01:20", "≈ 01:20", "约01:20"],
      b:["Nhận phòng ở campus Xương Bình", "Check in on the Changping campus", "在昌平校区办理入住"],
      d:["Để hộ chiếu và giấy tờ BNU trong túi xách tay.", "Keep the passport and BNU paperwork in your cabin bag.", "护照和北师大材料放在随身包里。"]
    }
  ]
},

{
  city:"bj",
  n:"22",
  dow:"T5",
  head:["Khu đại học Hải Điến · ngày tự do của cả đội", "The Haidian university district · a free day for the team", "海淀高校区 · 全队自由日"],
  hosttag:1,
  slots:[
    {
      t:["Sáng", "Morning", "上午"],
      b:["Ngủ bù, ăn trưa ở căng tin", "Sleep in, lunch at the canteen", "补觉，食堂吃午饭"],
      d:[
        "Chương trình chính thức bắt đầu 9:30 sáng 23/10, hôm nay cả bốn người đều trống.",
        "The official programme starts at 09:30 on 23 Oct; today is free for all four.",
        "正式日程10月23日9:30开始，今天四人都有空。"
      ]
    },
    {
      m:1,
      t:["40 phút", "40 min", "40分钟"],
      a:[
        "Sa Hà → tuyến Xương Bình → đổi tuyến 13 tại <span class=\"han\">西二旗</span> → ga <span class=\"han\">五道口</span> Ngũ Đạo Khẩu · 5 CNY",
        "Shahe → Changping Line → Line 13 at <span class=\"han\">西二旗</span> → <span class=\"han\">五道口</span> Wudaokou · CNY 5",
        "沙河 → 昌平线 → <span class=\"han\">西二旗</span>换13号线 → <span class=\"han\">五道口</span>站 · 5元"
      ]
    },
    {
      m:1,
      t:["15 phút", "15 min", "15分钟"],
      a:[
        "Đi bộ hoặc xe đạp chung theo đường Thanh Hoa Tây · 1,5 km",
        "Walk or take a shared bike along Tsinghua West Road · 1.5 km",
        "步行或骑共享单车沿清华西路 · 1.5公里"
      ]
    },
    {
      t:["14:30–15:15", "14:30–15:15", "14:30–15:15"],
      b:["Cổng Tây Đại học Thanh Hoa", "Tsinghua University West Gate", "清华大学西门"],
      tag:"free",
      dur:["45 phút", "45 min", "45分钟"],
      d:[
        "<span class=\"han\">清华大学西门</span> - chụp ảnh ngoài cổng, không cần đặt chỗ.",
        "<span class=\"han\">清华大学西门</span> - photos from outside the gate, no booking needed.",
        "<span class=\"han\">清华大学西门</span>——校门外拍照，无需预约。"
      ]
    },
    { m:1, t:["10 phút", "10 min", "10分钟"], a:["Đi bộ xuống phía nam tới cổng Tây Bắc Đại", "Walk south to the PKU West Gate", "向南步行到北大西门"] },
    {
      t:["15:25–16:10", "15:25–16:10", "15:25–16:10"],
      b:["Cổng Tây Đại học Bắc Kinh", "Peking University West Gate", "北京大学西门"],
      tag:"free",
      dur:["45 phút", "45 min", "45分钟"],
      d:[
        "<span class=\"han\">北京大学西门</span> - cổng mái ngói đỏ, đôi sư tử đá, chụp từ ngoài.",
        "<span class=\"han\">北京大学西门</span> - red-tiled palace-style gate with stone lions, photos from outside.",
        "<span class=\"han\">北京大学西门</span>——红瓦宫门、石狮，门外拍照。"
      ]
    },
    { m:1, t:["20 phút", "20 min", "20分钟"], a:["Đi bộ hoặc xe đạp chung quay lại Ngũ Đạo Khẩu", "Walk or bike back to Wudaokou", "步行或骑车回五道口"] },
    {
      t:["16:30–18:30", "16:30–18:30", "16:30–18:30"],
      b:["Phố sinh viên Ngũ Đạo Khẩu, ăn tối", "Wudaokou student quarter, dinner", "五道口学生街，晚餐"],
      tag:"free",
      dur:["120 phút", "120 min", "120分钟"],
      d:[
        "<span class=\"han\">五道口</span> - quán ăn, cà phê, hiệu sách sinh viên. Ăn tối ở đây.",
        "<span class=\"han\">五道口</span> - student cafés, bookshops and cheap eats. Dinner here.",
        "<span class=\"han\">五道口</span>——学生咖啡馆、书店和小吃。在这里吃晚饭。"
      ]
    },
    { m:1, t:["40 phút", "40 min", "40分钟"], a:["Về Sa Hà bằng đúng đường cũ", "Back to Shahe the same way", "原路返回沙河"] },
    {
      t:["≈ 19:15", "≈ 19:15", "约19:15"],
      b:["Về campus, chạy thử phần trình bày", "Back on campus, rehearse the pitch", "回校，演练项目展示"],
      d:["Ngủ sớm, 9:30 sáng mai khai mạc.", "Early night; the opening is at 09:30 tomorrow.", "早点睡，明早9:30开幕。"]
    }
  ]
},

{
  city:"bj",
  n:"23",
  dow:"T6",
  head:["Khai mạc · Diễn đàn Thanh niên · Công viên Olympic ban đêm", "Opening · Youth Forum · Olympic Park at night", "开幕式 · 青年论坛 · 夜游奥林匹克公园"],
  hosttag:1,
  slots:[
    {
      t:["09:30–09:50", "09:30–09:50", "09:30–09:50"],
      b:["Lễ khai mạc", "Opening Ceremony", "开幕式"],
      tag:"bnu",
      dur:["20 phút", "20 min", "20分钟"],
      d:["Cả 4 người. Có mặt và vào chỗ trước 9:15.", "All four. Be in your seats by 09:15.", "四人全体。9:15前到场入座。"]
    },
    {
      t:["09:50–18:30", "09:50–18:30", "09:50–18:30"],
      b:["Start Futures Youth Forum", "Start Futures Youth Forum", "Start Futures 青年论坛"],
      tag:"bnu",
      dur:["8 giờ 40 phút", "8h40", "8小时40分"],
      d:[
        "Fireside Chat và Keynote Sharing. Ăn trưa theo sắp xếp của BTC.",
        "Fireside Chat and Keynote Sharing. Lunch as arranged by the organisers.",
        "炉边谈话（Fireside Chat）与主题分享（Keynote Sharing）。午餐由主办方安排。"
      ]
    },
    {
      p:["ta"],
      t:["Tối", "Evening", "晚上"],
      b:["Nghỉ tại campus", "Evening on campus", "晚上留在校区"],
      d:["Ăn tối ở căng tin, nghỉ sớm.", "Canteen dinner, early night.", "在食堂吃晚饭，早点休息。"]
    },
    {
      p:["gb", "md"],
      m:1,
      t:["45 phút", "45 min", "45分钟"],
      a:[
        "Sa Hà → tuyến Xương Bình → đổi tuyến 8 tại <span class=\"han\">朱辛庄</span> → ga Olympic Green · 6 CNY",
        "Shahe → Changping Line → change to Line 8 at <span class=\"han\">朱辛庄</span> Zhuxinzhuang → Olympic Green · CNY 6",
        "沙河 → 昌平线 → <span class=\"han\">朱辛庄</span>换8号线 → 奥林匹克公园站 · 6元"
      ]
    },
    {
      p:["gb", "md"],
      t:["19:30–21:00", "19:30–21:00", "19:30–21:00"],
      b:["Công viên Olympic", "Olympic Park", "奥林匹克公园"],
      tag:"free",
      dur:["90 phút", "90 min", "90分钟"],
      d:[
        "Tổ Chim và Thuỷ Lập Phương lên đèn. Gần trường, dễ về.",
        "The Bird's Nest and Water Cube lit up. Close to campus, easy to get back.",
        "鸟巢和水立方亮灯。离学校近，回程方便。"
      ]
    },
    { p:["gb", "md"], m:1, t:["45 phút", "45 min", "45分钟"], a:["Về Sa Hà bằng đúng đường cũ", "Back to Shahe the same way", "原路返回沙河"] }
  ],
  notes:[
    [
      "<b>Tàu cuối:</b> tuyến Xương Bình về Sa Hà dừng khoảng 23:00 - rời trung tâm trước 21:30. Lỡ tàu thì Didi về khoảng 120–150 CNY.",
      "<b>Last train:</b> the Changping Line to Shahe stops around 23:00 - leave the centre before 21:30. Miss it and a Didi back is about CNY 120–150.",
      "<b>末班车：</b>昌平线回沙河约23:00停运——21:30前离开市区。错过就打滴滴，约120–150元。"
    ]
  ]
},

{
  city:"bj",
  n:"24",
  dow:"T7",
  head:["Mentoring cả ngày · Thập Sát Hải ban đêm", "Mentoring all day · Shichahai at night", "全天赛前辅导 · 夜游什刹海"],
  hosttag:1,
  slots:[
    {
      t:["09:00–19:00", "09:00–19:00", "09:00–19:00"],
      b:["Mentoring trước vòng thi", "Pre-competition Mentoring", "赛前辅导"],
      tag:"bnu",
      dur:["10 giờ", "10h", "10小时"],
      d:["Mang laptop, sạc và bản dự án mới nhất.", "Bring laptops, chargers and the latest version of the project.", "带好电脑、充电器和最新版项目。"]
    },
    {
      p:["ta"],
      t:["Tối", "Evening", "晚上"],
      b:["Nghỉ tại campus", "Evening on campus", "晚上留在校区"],
      d:["Ăn tối ở căng tin, nghỉ sớm cho ngày Roadshow.", "Dinner at the canteen, early night before Roadshow day.", "在食堂吃晚饭，早点休息，迎接路演日。"]
    },
    {
      p:["gb", "md"],
      m:1,
      t:["55 phút", "55 min", "55分钟"],
      a:[
        "Sa Hà → tuyến Xương Bình → tuyến 8 tại Zhuxinzhuang → ga <span class=\"han\">南锣鼓巷</span> Nanluoguxiang · 6 CNY",
        "Shahe → Changping Line → Line 8 at Zhuxinzhuang → <span class=\"han\">南锣鼓巷</span> Nanluoguxiang · CNY 6",
        "沙河 → 昌平线 → 朱辛庄换8号线 → <span class=\"han\">南锣鼓巷</span>站 · 6元"
      ]
    },
    {
      p:["gb", "md"],
      t:["20:00–21:20", "20:00–21:20", "20:00–21:20"],
      b:["Nam La Cổ Hạng & Thập Sát Hải", "Nanluoguxiang & Shichahai", "南锣鼓巷 & 什刹海"],
      tag:"free",
      dur:["80 phút", "80 min", "80分钟"],
      d:[
        "Dạo ngõ hutong Nam La Cổ Hạng rồi ăn tối ven hồ Thập Sát Hải. Mệt thì ở lại campus.",
        "Walk the Nanluoguxiang hutongs, then dinner by Shichahai lake. Stay on campus if too tired.",
        "逛南锣鼓巷胡同，再到什刹海湖边吃晚饭。累了就留在学校。"
      ]
    },
    {
      p:["gb", "md"],
      m:1,
      t:["55 phút", "55 min", "55分钟"],
      a:["Về Sa Hà - xuất phát muộn nhất 21:30", "Back to Shahe - leave by 21:30 at the latest", "返回沙河——最晚21:30出发"]
    }
  ]
},

{
  city:"bj",
  n:"25",
  dow:"CN",
  head:["Roadshow · Bế mạc & trao giải · Tiền Môn ban đêm", "Roadshow · Closing & awards · Qianmen at night", "路演 · 闭幕颁奖 · 夜游前门"],
  hosttag:1,
  slots:[
    {
      t:["09:00–12:00", "09:00–12:00", "09:00–12:00"],
      b:["Mentoring trước vòng thi", "Pre-competition Mentoring", "赛前辅导"],
      tag:"bnu",
      dur:["3 giờ", "3h", "3小时"],
      d:["Chốt bản trình bày, không sửa thêm sau giờ trưa.", "Lock the pitch; no more changes after lunch.", "定稿，午饭后不再修改。"]
    },
    {
      t:["13:30–16:00", "13:30–16:00", "13:30–16:00"],
      b:["Đánh giá dự án (Roadshow)", "Project Evaluation (Roadshow)", "项目评审（路演）"],
      tag:"bnu",
      dur:["150 phút", "150 min", "150分钟"],
      d:["Phần thi chính của đội.", "The team's main event.", "全队的正式比赛环节。"]
    },
    {
      t:["16:00–17:30", "16:00–17:30", "16:00–17:30"],
      b:["Tham quan campus & chụp ảnh", "Campus Tour & Photo Session", "参观校园与合影"],
      tag:"bnu",
      dur:["90 phút", "90 min", "90分钟"],
      d:["Chụp ảnh cả đội.", "Team photos.", "全队合影。"]
    },
    {
      t:["17:30–18:30", "17:30–18:30", "17:30–18:30"],
      b:["Bế mạc & trao giải", "Closing Ceremony & Awarding", "闭幕式与颁奖"],
      tag:"bnu",
      dur:["60 phút", "60 min", "60分钟"]
    },
    {
      p:["ta"],
      t:["Tối", "Evening", "晚上"],
      b:["Ăn tối cùng nhóm hoặc thu dọn hành lý", "Dinner with the group, or packing", "与大家晚餐或收拾行李"],
      d:[
        "Đi ăn tối cùng nhóm ở Tiền Môn, hoặc ở lại campus thu dọn hành lý.",
        "Join the group for dinner at Qianmen, or stay on campus and pack.",
        "和大家去前门吃晚饭，或留在学校收拾行李。"
      ]
    },
    {
      p:["gb", "md"],
      m:1,
      t:["65 phút", "65 min", "65分钟"],
      a:[
        "Sa Hà → tuyến Xương Bình → tuyến 8 tại Zhuxinzhuang → ga <span class=\"han\">前门</span> Qianmen · 7 CNY",
        "Shahe → Changping Line → Line 8 at Zhuxinzhuang → <span class=\"han\">前门</span> Qianmen · CNY 7",
        "沙河 → 昌平线 → 朱辛庄换8号线 → <span class=\"han\">前门</span>站 · 7元"
      ]
    },
    {
      p:["gb", "md"],
      t:["19:40–21:15", "19:40–21:15", "19:40–21:15"],
      b:["Phố Tiền Môn & ngõ Đại Sách Lan", "Qianmen Street & Dashilan", "前门大街 & 大栅栏"],
      tag:"free",
      dur:["95 phút", "95 min", "95分钟"],
      d:[
        "Vịt quay Tiện Nghi Phường hoặc Toàn Tụ Đức (75–100 CNY/người) rồi dạo phố Tiền Môn. Bữa cuối của cả bốn người.",
        "Roast duck at Bianyifang or Quanjude (CNY 75–100 a head), then a stroll down Qianmen Street. The last meal with all four.",
        "在便宜坊或全聚德吃烤鸭（人均75–100元），再逛前门大街。四人的最后一餐。"
      ]
    },
    {
      p:["gb", "md"],
      m:1,
      t:["65 phút", "65 min", "65分钟"],
      a:[
        "Về Sa Hà - xuất phát muộn nhất 21:15 vì đây là chặng xa nhất",
        "Back to Shahe - leave by 21:15, this is the longest ride",
        "返回沙河——最晚21:15出发，这是最远的一段"
      ]
    }
  ]
}
);
