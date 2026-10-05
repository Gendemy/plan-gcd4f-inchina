/* Bắc Kinh 27–28/10, Thiên Tân 29–30/10, Thâm Quyến 31/10–1/11 */
DAYS.push(
{
  city:"bj",
  n:"27",
  dow:"T3",
  icon:"g-palace",
  p:["gb", "md"],
  head:["Ngày duy nhất cho trục trung tâm", "The only full day for the central axis", "中轴线唯一的完整一天"],
  slots:[
    {
      t:["07:00", "07:00", "07:00"],
      b:["Rời khách sạn", "Leave the hotel", "离开酒店"],
      d:["Mua đồ ăn sáng mang theo.", "Grab breakfast to go.", "买早餐路上吃。"]
    },
    {
      m:1,
      t:["25 phút", "25 min", "25分钟"],
      a:[
        "Tuyến 1 → đổi tuyến 5 tại <span class=\"han\">东单</span> → ga <span class=\"han\">天坛东门</span> · 3 CNY",
        "Line 1 → Line 5 at <span class=\"han\">东单</span> → <span class=\"han\">天坛东门</span> · CNY 3",
        "1号线 → <span class=\"han\">东单</span>换5号线 → <span class=\"han\">天坛东门</span>站 · 3元"
      ]
    },
    {
      t:["07:25–09:10", "07:25–09:10", "07:25–09:10"],
      b:["Thiên Đàn", "Temple of Heaven", "天坛"],
      tag:"pay",
      tagx:["15–34 CNY", "CNY 15–34", "15–34元"],
      dur:["105 phút", "105 min", "105分钟"],
      d:[
        "Buổi sáng có người dân tập thái cực quyền, hát kinh kịch. Vé liên hợp 34 CNY, 18–25 tuổi nửa giá.",
        "Mornings are full of locals doing tai chi and singing opera. Combined ticket CNY 34, half price for ages 18–25.",
        "早上有市民打太极、唱京剧。联票34元，18–25岁半价。"
      ]
    },
    {
      m:1,
      t:["25 phút", "25 min", "25分钟"],
      a:[
        "Tuyến 5 → đổi tuyến 2 tại <span class=\"han\">崇文门</span> → ga <span class=\"han\">前门</span> → đi bộ lên quảng trường · 3 CNY",
        "Line 5 → change to Line 2 at <span class=\"han\">崇文门</span> Chongwenmen → <span class=\"han\">前门</span> Qianmen → walk up into the square · CNY 3",
        "5号线 → <span class=\"han\">崇文门</span>换2号线 → <span class=\"han\">前门</span>站 → 步行进入广场 · 3元"
      ]
    },
    {
      t:["09:35–10:10", "09:35–10:10", "09:35–10:10"],
      b:["Quảng trường Thiên An Môn", "Tiananmen Square", "天安门广场"],
      tag:"free",
      tagx:["Miễn phí, phải đặt chỗ", "Free, reservation required", "免费，需预约"],
      dur:["35 phút", "35 min", "35分钟"],
      d:["Đặt trước qua WeChat, mang hộ chiếu bản gốc.", "Book ahead on WeChat, bring the original passport.", "提前在微信预约，带护照原件。"]
    },
    {
      m:1,
      t:["10 phút", "10 min", "10分钟"],
      a:[
        "Đi bộ qua Đoan Môn tới cổng Ngọ Môn - cổng vào duy nhất của Cố Cung",
        "Walk through Duanmen to the Meridian Gate - the Forbidden City's only entrance",
        "经端门步行至午门——故宫唯一入口"
      ]
    },
    {
      t:["10:20–14:20", "10:20–14:20", "10:20–14:20"],
      b:["Cố Cung - Tử Cấm Thành", "The Forbidden City", "故宫"],
      tag:"pay",
      tagx:["60 CNY", "CNY 60", "60元"],
      dur:["240 phút", "240 min", "240分钟"],
      d:[
        "Vào Ngọ Môn, ra Thần Vũ Môn, đi một chiều. Trục giữa 120 phút, Trân Bảo Quán và Chung Biểu Quán 60 phút (thêm 10 CNY mỗi nơi), ngự uyển 60 phút.",
        "In at the Meridian Gate, out at the Gate of Divine Might, one way only. Central axis 120 min, Treasure and Clock Galleries 60 min (CNY 10 each), Imperial Garden 60 min.",
        "午门进、神武门出，单向通行。中轴线120分钟，珍宝馆和钟表馆60分钟（各加10元），御花园60分钟。"
      ]
    },
    {
      t:["14:25–15:15", "14:25–15:15", "14:25–15:15"],
      b:["Ăn trưa muộn gần cổng bắc Cố Cung", "A late lunch near the north gate", "在故宫北门附近晚午餐"],
      dur:["50 phút", "50 min", "50分钟"],
      d:["Mang đồ ăn vặt cho buổi sáng.", "Bring snacks for the morning.", "上午带些零食。"]
    },
    {
      m:1,
      t:["5 phút", "5 min", "5分钟"],
      a:[
        "Đi bộ từ cổng Thần Vũ Môn băng qua đường sang cổng nam công viên Cảnh Sơn",
        "Walk from Shenwumen across the road to Jingshan's south gate",
        "从神武门穿过马路到景山公园南门"
      ]
    },
    {
      t:["15:15–16:30", "15:15–16:30", "15:15–16:30"],
      b:["Công viên Cảnh Sơn", "Jingshan Park", "景山公园"],
      tag:"pay",
      tagx:["2 CNY", "CNY 2", "2元"],
      dur:["75 phút", "75 min", "75分钟"],
      d:[
        "Lên Vạn Xuân Đình ngắm toàn cảnh Tử Cấm Thành. Vé 2 CNY.",
        "Climb to Wanchun Pavilion for the view over the Forbidden City. CNY 2.",
        "登万春亭俯瞰紫禁城全景。门票2元。"
      ]
    },
    {
      m:1,
      t:["25 phút", "25 min", "25分钟"],
      a:[
        "Tuyến 6 từ ga <span class=\"han\">北海北</span> → đổi tuyến 8 tại Nam La Cổ Hạng → ga <span class=\"han\">王府井</span> · 3 CNY",
        "Line 6 from <span class=\"han\">北海北</span> Beihai North → change to Line 8 at Nanluoguxiang → <span class=\"han\">王府井</span> Wangfujing · CNY 3",
        "6号线从<span class=\"han\">北海北</span> → 南锣鼓巷换8号线 → <span class=\"han\">王府井</span>站 · 3元"
      ]
    },
    {
      t:["17:00–18:15", "17:00–18:15", "17:00–18:15"],
      b:["Phố Vương Phủ Tỉnh - ăn tối và mua quà", "Wangfujing - dinner and souvenirs", "王府井——晚餐与买礼物"],
      dur:["75 phút", "75 min", "75分钟"],
      d:[
        "Ăn tối, mua quà. CA883 chỉ cho 5 kg xách tay, quà phải vào vali ký gửi.",
        "Dinner and souvenirs. CA883 allows only 5 kg of cabin baggage, so gifts go in the checked case.",
        "晚饭、买礼物。CA883随身行李只限5公斤，礼物要放托运箱。"
      ]
    },
    { m:1, t:["15 phút", "15 min", "15分钟"], a:["Đi bộ hoặc metro về khách sạn", "Walk or metro back to the hotel", "步行或坐地铁回酒店"] },
    {
      t:["18:30–20:00", "18:30–20:00", "18:30–20:00"],
      b:["Về khách sạn, tắm rửa, đóng vali", "Back to the hotel, shower, pack", "回酒店、洗澡、收拾行李"],
      dur:["90 phút", "90 min", "90分钟"],
      d:["Tắm rửa trước chuyến bay đêm. Mỹ Duyên ở lại phòng.", "Shower before the night flight. My Duyen keeps the room.", "夜航前洗个澡。美缘留在房间。"]
    },
    {
      p:["gb"],
      m:1,
      t:["45 phút", "45 min", "45分钟"],
      a:[
        "Didi từ khách sạn ra sân bay Thủ Đô T3 · khoảng 30 km · 100–130 CNY cả xe",
        "Didi from the hotel to Capital Airport T3 · about 30 km · CNY 100–130 per car",
        "滴滴从酒店到首都机场T3 · 约30公里 · 整车100–130元"
      ]
    },
    {
      p:["gb"],
      t:["21:00", "21:00", "21:00"],
      b:["Có mặt ở sân bay Thủ Đô nhà ga T3", "At Capital Airport Terminal 3", "抵达首都机场T3"],
      dur:["sớm 3,2 giờ", "3h10 early", "提前3小时10分"],
      d:["Nhà ga T3, không phải T2.", "Terminal 3, not T2.", "T3航站楼，不是T2。"]
    },
    {
      p:["gb"],
      t:["00:10 → 03:15", "00:10 → 03:15", "00:10 → 03:15"],
      b:["Thủ Đô T3 → Nội Bài T2 · Air China CA883", "Capital T3 → Noi Bai T2 · Air China CA883", "首都T3 → 内排T2 · 国航CA883"],
      dur:["4 giờ 5", "4h05", "4小时5分"],
      d:[
        "Mã đặt chỗ Trip.com 1688901859853505, mã hãng MYCREC. 23 kg ký gửi, 5 kg xách tay.",
        "Trip.com booking 1688901859853505, airline reference MYCREC. 23 kg checked, 5 kg cabin.",
        "携程订单号1688901859853505，航司编号MYCREC。托运23公斤，随身5公斤。"
      ]
    },
    {
      p:["md"],
      t:["20:00", "20:00", "20:00"],
      b:["Mỹ Duyên ở lại phòng một mình", "My Duyen alone in the room", "美缘独自留在房间"],
      d:["Sáng mai đi Universal, rời khách sạn lúc 8:00.", "Universal tomorrow; out of the hotel at 08:00.", "明天去环球影城，8:00离开酒店。"]
    }
  ],
  intro:[
    "Bảo và Mai bay 00:10 đêm nay, nên đây vừa là ngày trục trung tâm vừa là ngày ra sân bay. Mỹ Duyên đi cùng cả ngày.",
    "Bao and Mai fly at 00:10 tonight, so this is both the central-axis day and the airport day. My Duyen comes along all day.",
    "嘉宝和琼梅今晚00:10起飞，所以今天既是中轴线之日也是去机场之日。美缘全天同行。"
  ]
},

{
  city:"bj",
  n:"28",
  dow:"T4",
  head:["Mỹ Duyên: một ngày ở Universal", "My Duyen: a day at Universal", "美缘：环球影城一日"],
  slots:[
    {
      p:["gb"],
      t:["03:15", "03:15", "03:15"],
      b:["Gia Bảo và Quỳnh Mai hạ cánh Nội Bài T2", "Gia Bao and Quynh Mai land at Noi Bai T2", "嘉宝和琼梅落地内排T2"],
      d:["Nhắn Mỹ Duyên khi về tới nhà.", "Message My Duyen once home.", "到家后给美缘发个消息。"]
    }
  ],
  legs:[
    {
      cls:"uni",
      p:["md"],
      h:["Universal Beijing Resort", "Universal Beijing Resort", "北京环球度假区"],
      who:["Mỹ Duyên", "My Duyen", "美缘"],
      slots:[
        {
          t:["08:00", "08:00", "08:00"],
          b:["Rời khách sạn trung tâm", "Leave the central hotel", "离开市中心酒店"],
          d:["Ở thêm đêm nay nên không phải mang hành lý.", "Staying another night, so no luggage to carry.", "今晚继续住，不用带行李。"]
        },
        {
          m:1,
          t:["50 phút", "50 min", "50分钟"],
          a:[
            "Tuyến 1 từ ga <span class=\"han\">王府井</span> đi thẳng tới ga cuối <span class=\"han\">环球度假区</span> · 6 CNY",
            "Line 1 from <span class=\"han\">王府井</span> straight to the terminus <span class=\"han\">环球度假区</span> · CNY 6",
            "1号线从<span class=\"han\">王府井</span>直达终点<span class=\"han\">环球度假区</span> · 6元"
          ]
        },
        {
          t:["08:50", "08:50", "08:50"],
          b:["Có mặt ở cổng Universal Beijing", "At the Universal Beijing gate", "到达北京环球影城入口"],
          d:["Xếp hàng an ninh ngay khi tới.", "Join the security queue on arrival.", "到达后马上排队安检。"]
        },
        {
          t:["09:00–20:00", "09:00–20:00", "09:00–20:00"],
          b:["Universal Beijing Resort", "Universal Beijing Resort", "北京环球度假区"],
          tag:"pay",
          dur:["11 tiếng", "11h", "11小时"],
          d:[
            "Kiểm tra giờ mở cửa trên app trước một tuần (9:00 hoặc 10:00). Thứ tư nên vắng hơn cuối tuần. Chơi trò lớn ngay giờ đầu.",
            "Check opening time in the app a week ahead (09:00 or 10:00). A Wednesday, so quieter than a weekend. Do the big rides first.",
            "提前一周在App查开园时间（9:00或10:00）。周三人比周末少。先玩热门项目。"
          ]
        },
        {
          t:["20:00–20:30", "20:00–20:30", "20:00–20:30"],
          b:["CityWalk 城市大道", "CityWalk 城市大道", "城市大道"],
          tag:"free",
          dur:["30 phút", "30 min", "30分钟"],
          d:["Mua quà, ăn tối.", "Souvenirs and dinner.", "买纪念品，吃晚饭。"]
        },
        {
          m:1,
          t:["50 phút", "50 min", "50分钟"],
          a:[
            "Tuyến 1 về ga <span class=\"han\">王府井</span> · 6 CNY",
            "Line 1 back to <span class=\"han\">王府井</span> · CNY 6",
            "1号线回<span class=\"han\">王府井</span> · 6元"
          ]
        },
        {
          t:["≈ 21:30", "≈ 21:30", "约21:30"],
          b:["Về khách sạn", "Back at the hotel", "回到酒店"],
          d:["Sắp lại hành lý cho ngày sang Thiên Tân.", "Repack for the move to Tianjin.", "为去天津整理行李。"]
        }
      ]
    }
  ]
},

{
  city:"tj",
  n:"29",
  dow:"T5",
  icon:"g-park",
  p:["md"],
  head:["Bắc Kinh buổi sáng, Thiên Tân buổi chiều", "Beijing in the morning, Tianjin in the afternoon", "上午北京，下午天津"],
  slots:[
    { t:["07:30–08:15", "07:30–08:15", "07:30–08:15"], b:["Dậy, ăn sáng", "Up and breakfast", "起床、早餐"], dur:["45 phút", "45 min", "45分钟"] },
    {
      t:["08:30–10:30", "08:30–10:30", "08:30–10:30"],
      b:["Thêm một điểm ở Bắc Kinh, gần khách sạn", "One more Beijing stop, close to the hotel", "在北京再看一个点，离酒店近"],
      dur:["120 phút", "120 min", "120分钟"],
      d:[
        "Bắc Hải hoặc Ung Hoà Cung, không quá 25 phút từ khách sạn.",
        "Beihai or the Lama Temple, within 25 minutes of the hotel.",
        "北海或雍和宫，距酒店25分钟以内。"
      ]
    },
    { m:1, t:["25 phút", "25 min", "25分钟"], a:["Quay lại khách sạn", "Back to the hotel", "返回酒店"] },
    {
      t:["11:00–11:45", "11:00–11:45", "11:00–11:45"],
      b:["Nghỉ, lấy đồ, kiểm tra lại hai vali", "Rest, collect the bags, check both suitcases", "休息、取行李、检查两个箱子"],
      dur:["45 phút", "45 min", "45分钟"],
      d:["Kiểm tra hành lý lần cuối trước khi rời Bắc Kinh.", "Final luggage check before leaving Beijing.", "离开北京前最后检查行李。"]
    },
    {
      t:["12:00", "12:00", "12:00"],
      b:["Trả phòng khách sạn Bắc Kinh", "Check out of the Beijing hotel", "北京酒店退房"],
      tag:"pay",
      tagx:["Trả phòng trước 12:00", "Check-out before 12:00", "12:00前退房"],
      d:["Đặt Didi từ 11:45.", "Book the Didi for 11:45.", "11:45约好滴滴。"]
    },
    {
      m:1,
      t:["25 phút", "25 min", "25分钟"],
      a:[
        "Didi ra ga <span class=\"han\">北京南站</span> Bắc Kinh Nam · 40–60 CNY · tới ga trước giờ tàu 30 phút",
        "Didi to <span class=\"han\">北京南站</span> Beijing South · CNY 40–60 · be there 30 minutes before the train",
        "滴滴到<span class=\"han\">北京南站</span> · 40–60元 · 开车前30分钟到站"
      ]
    },
    {
      t:["13:00 → 13:35", "13:00 → 13:35", "13:00 → 13:35"],
      b:["Tàu cao tốc Bắc Kinh Nam đi Thiên Tân", "High-speed train Beijing South to Tianjin", "北京南站至天津的高铁"],
      tag:"pay",
      tagx:["55 CNY", "CNY 55", "55元"],
      dur:["33 phút", "33 min", "33分钟"],
      d:[
        "Hạng hai 54,5 CNY, đặt trên 12306, quét hộ chiếu ở cửa soát. Xuống ga <span class=\"han\">天津站</span> ở trung tâm, không phải Thiên Tân Nam.",
        "Second class CNY 54.5, book on 12306, scan the passport at the gate. Get off at <span class=\"han\">天津站</span> in the centre, not Tianjin South.",
        "二等座54.5元，12306订票，刷护照进站。在市中心的<span class=\"han\">天津站</span>下车，不是天津南站。"
      ]
    },
    {
      m:1,
      t:["25 phút", "25 min", "25分钟"],
      a:[
        "Didi từ ga Thiên Tân về khách sạn khu Hoà Bình · 5 km · 20–30 CNY",
        "Didi from Tianjin Station to the Heping hotel · 5 km · CNY 20–30",
        "滴滴从天津站到和平区酒店 · 5公里 · 20–30元"
      ]
    },
    {
      t:["14:15–14:40", "14:15–14:40", "14:15–14:40"],
      b:["Nhận phòng khách sạn Thiên Tân", "Check in at the Tianjin hotel", "入住天津酒店"],
      tag:"pay",
      tagx:["Nhận phòng từ 14:00", "Check-in from 14:00", "14:00起入住"],
      dur:["25 phút", "25 min", "25分钟"],
      d:["Đặt hai đêm 29 và 30/10.", "Two nights, 29 and 30 Oct.", "订10月29、30日两晚。"]
    },
    {
      t:["14:50–16:30", "14:50–16:30", "14:50–16:30"],
      b:["Ngũ Đại Đạo", "The Five Great Avenues", "五大道"],
      tag:"free",
      dur:["100 phút", "100 min", "100分钟"],
      d:[
        "<span class=\"han\">五大道</span> - khoảng 2.000 biệt thự kiểu châu Âu thập niên 1920–40. Đi bộ dọc <span class=\"han\">睦南道</span> và <span class=\"han\">重庆道</span>.",
        "<span class=\"han\">五大道</span> - about 2,000 European-style villas from the 1920s–40s. Walk <span class=\"han\">睦南道</span> and <span class=\"han\">重庆道</span>.",
        "<span class=\"han\">五大道</span>——约两千栋1920–40年代的欧式小洋楼。沿<span class=\"han\">睦南道</span>和<span class=\"han\">重庆道</span>步行。"
      ]
    },
    {
      m:1,
      t:["15 phút", "15 min", "15分钟"],
      a:[
        "Đi bộ hoặc xe đạp chung về phía đông bắc tới khu Tiểu Bạch Lâu · 1,5 km",
        "Walk or take a shared bike north-east to the Xiaobailou quarter · 1.5 km",
        "步行或骑共享单车向东北到小白楼一带 · 1.5公里"
      ]
    },
    {
      t:["16:45–17:20", "16:45–17:20", "16:45–17:20"],
      b:["Tiểu Bạch Lâu", "Xiaobailou", "小白楼"],
      tag:"free",
      dur:["35 phút", "35 min", "35分钟"],
      d:[
        "<span class=\"han\">小白楼</span> - đi ngang qua để nối sang Giải Phóng Bắc Lộ. Trời tối khoảng 17:20.",
        "<span class=\"han\">小白楼</span> - walk through on the way to Jiefang North Road. Dark around 17:20.",
        "<span class=\"han\">小白楼</span>——路过，连接解放北路。约17:20天黑。"
      ]
    },
    {
      m:1,
      t:["12 phút", "12 min", "12分钟"],
      a:["Đi bộ lên phía bắc theo đường Giải Phóng Bắc · 1 km", "Walk north along Jiefang North Road · 1 km", "沿解放北路向北步行 · 1公里"]
    },
    {
      t:["17:35–18:15", "17:35–18:15", "17:35–18:15"],
      b:["Đường Giải Phóng Bắc", "Jiefang North Road", "解放北路"],
      tag:"free",
      dur:["40 phút", "40 min", "40分钟"],
      d:[
        "<span class=\"han\">解放北路</span> - phố ngân hàng tân cổ điển, tối lên đèn. Khách sạn <span class=\"han\">利顺德</span> (1863) ở đầu phố.",
        "<span class=\"han\">解放北路</span> - a street of neoclassical banks, lit up at night. The <span class=\"han\">利顺德</span> hotel (1863) stands at the north end.",
        "<span class=\"han\">解放北路</span>——新古典银行街，夜间亮灯。<span class=\"han\">利顺德</span>（1863年）在北端。"
      ]
    },
    {
      m:1,
      t:["15 phút", "15 min", "15分钟"],
      a:["Đi bộ qua cầu Giải Phóng sang khu phố kiểu Ý · 1,2 km", "Walk over Jiefang Bridge to the Italian quarter · 1.2 km", "步行过解放桥到意式风情区 · 1.2公里"]
    },
    {
      t:["18:30–20:00", "18:30–20:00", "18:30–20:00"],
      b:["Khu phố kiểu Ý, ăn tối", "The Italian quarter, dinner", "意式风情区，晚餐"],
      tag:"free",
      dur:["90 phút", "90 min", "90分钟"],
      d:[
        "<span class=\"han\">意式风情区</span> - khu phố kiểu Ý quanh quảng trường Marco Polo. Ăn tối ở đây.",
        "<span class=\"han\">意式风情区</span> - the Italian quarter around Marco Polo Square. Dinner here.",
        "<span class=\"han\">意式风情区</span>——马可·波罗广场一带。在这里吃晚饭。"
      ]
    },
    {
      m:1,
      t:["10 phút", "10 min", "10分钟"],
      a:[
        "Đi bộ quay lại qua cầu Giải Phóng xuống quảng trường Tân Loan · 900m",
        "Walk back over the Liberation Bridge down to Jinwan Plaza · 900m",
        "沿解放桥走回，下到津湾广场 · 900米"
      ]
    },
    {
      t:["20:10–21:00", "20:10–21:00", "20:10–21:00"],
      b:["Hải Hà và quảng trường Tân Loan", "The Hai River and Jinwan Plaza", "海河与津湾广场"],
      tag:"free",
      dur:["50 phút", "50 min", "50分钟"],
      d:[
        "<span class=\"han\">津湾广场</span> lên đèn bên sông, nhìn sang vòng quay <span class=\"han\">天津之眼</span> (lên vòng quay 70 CNY).",
        "<span class=\"han\">津湾广场</span> lit up on the river, with the <span class=\"han\">天津之眼</span> wheel in view (a ride is CNY 70).",
        "<span class=\"han\">津湾广场</span>河边夜景，远望<span class=\"han\">天津之眼</span>（摩天轮70元）。"
      ]
    },
    {
      m:1,
      t:["20 phút", "20 min", "20分钟"],
      a:[
        "Didi từ quảng trường Tân Loan về khách sạn · 5 km · 20–25 CNY",
        "Didi from Jinwan Plaza back to the hotel · 5 km · CNY 20–25",
        "从津湾广场打滴滴回酒店 · 5公里 · 20–25元"
      ]
    },
    { t:["21:30", "21:30", "21:30"], b:["Về khách sạn", "Back at the hotel", "回到酒店"], d:["Nghỉ sớm.", "Early night.", "早点休息。"] }
  ]
},

{
  city:"tj",
  n:"30",
  dow:"T6",
  icon:"g-park",
  p:["md"],
  head:["Thư viện Tân Hải, rồi kiến trúc Thiên Tân", "The Binhai Library, then Tianjin's architecture", "滨海图书馆，然后是天津的建筑"],
  slots:[
    {
      t:["07:30–08:20", "07:30–08:20", "07:30–08:20"],
      b:["Dậy, ăn sáng, rời khách sạn", "Up, breakfast, leave the hotel", "起床、早餐、出门"],
      dur:["50 phút", "50 min", "50分钟"]
    },
    {
      m:1,
      t:["60 phút", "60 min", "60分钟"],
      a:[
        "Tuyến 1 tới <span class=\"han\">天津站</span> → đổi tuyến 9 → ga <span class=\"han\">市民广场</span> · 8 CNY · hoặc Didi 45 phút, 130–160 CNY",
        "Line 1 to <span class=\"han\">天津站</span> → Line 9 → <span class=\"han\">市民广场</span> · CNY 8 · or Didi 45 min, CNY 130–160",
        "1号线到<span class=\"han\">天津站</span> → 换9号线 → <span class=\"han\">市民广场</span> · 8元 · 或滴滴45分钟，130–160元"
      ]
    },
    {
      t:["09:30–11:30", "09:30–11:30", "09:30–11:30"],
      b:["Thư viện Tân Hải Thiên Tân", "Tianjin Binhai Library", "天津滨海图书馆"],
      tag:"free",
      tagx:["Miễn phí, nên đặt chỗ", "Free, reservation advised", "免费，建议预约"],
      dur:["120 phút", "120 min", "120分钟"],
      d:[
        "<span class=\"han\">天津滨海图书馆</span> - sảnh kệ sách uốn lượn quanh quả cầu ở giữa. Kệ trên cao là hình in, sách thật ở tầng dưới. Mở 9:00–17:00, nghỉ thứ hai.",
        "<span class=\"han\">天津滨海图书馆</span> - terraced shelves curving around a central sphere. The top shelves are printed images; real books are lower down. Open 09:00–17:00, closed Mondays.",
        "<span class=\"han\">天津滨海图书馆</span>——层层书架环绕中央球体。高处书架是印刷图案，真书在下层。9:00–17:00开放，周一闭馆。"
      ]
    },
    {
      t:["11:30–12:15", "11:30–12:15", "11:30–12:15"],
      b:["Ăn trưa ở Trung tâm Văn hoá Tân Hải", "Lunch at the Binhai Cultural Centre", "在滨海文化中心吃午饭"],
      dur:["45 phút", "45 min", "45分钟"],
      d:["Rời trước 12:15.", "Leave by 12:15.", "12:15前离开。"]
    },
    {
      m:1,
      t:["65 phút", "65 min", "65分钟"],
      a:["Quay lại trung tâm Thiên Tân bằng đúng đường cũ · 8 CNY", "Back into central Tianjin the same way · CNY 8", "原路返回天津市区 · 8元"]
    },
    {
      t:["13:30–15:00", "13:30–15:00", "13:30–15:00"],
      b:["Nhà Sứ", "The Porcelain House", "瓷房子"],
      tag:"pay",
      tagx:["50 CNY", "CNY 50", "50元"],
      dur:["90 phút", "90 min", "90分钟"],
      d:[
        "<span class=\"han\">瓷房子</span>, 72 đường Xích Phong - biệt thự phủ kín mảnh sứ cổ. Vé 50 CNY, đứng ngoài chụp cũng được.",
        "<span class=\"han\">瓷房子</span>, 72 Chifeng Road - a villa covered in antique porcelain shards. CNY 50, or just photograph the outside.",
        "<span class=\"han\">瓷房子</span>，赤峰道72号——贴满古瓷片的洋楼。门票50元，门外拍照也可以。"
      ]
    },
    {
      m:1,
      t:["10 phút", "10 min", "10分钟"],
      a:["Đi bộ quanh khu Hoà Bình theo đường Tân Hoa và Sơn Đông", "Walk the Heping quarter along Xinhua Road and Shandong Road", "沿新华路和山东路步行游和平区"]
    },
    {
      t:["15:10–16:30", "15:10–16:30", "15:10–16:30"],
      b:["Khu kiến trúc châu Âu quận Hoà Bình", "The European quarter in Heping", "和平区欧式建筑群"],
      tag:"free",
      dur:["80 phút", "80 min", "80分钟"],
      d:[
        "Đường Tân Hoa, đường Sơn Đông: nhà gạch đỏ, ban công sắt, ít khách.",
        "Xinhua and Shandong Roads: red-brick houses, iron balconies, few tourists.",
        "新华路、山东路：红砖楼、铁艺阳台，游客少。"
      ]
    },
    {
      t:["17:45–18:45", "17:45–18:45", "17:45–18:45"],
      b:["Ăn tối gần khách sạn", "Dinner near the hotel", "在酒店附近吃晚饭"],
      dur:["60 phút", "60 min", "60分钟"],
      d:[
        "Thử bánh bao <span class=\"han\">狗不理</span>, quẩy <span class=\"han\">十八街麻花</span> mua làm quà.",
        "Try <span class=\"han\">狗不理</span> buns; <span class=\"han\">十八街麻花</span> twists make good gifts.",
        "尝尝<span class=\"han\">狗不理</span>包子，买<span class=\"han\">十八街麻花</span>当礼物。"
      ]
    },
    {
      t:["19:00", "19:00", "19:00"],
      b:["Về khách sạn, đóng vali, đặt chuông 04:40", "Back at the hotel, pack, alarm at 04:40", "回酒店收拾行李，闹钟定04:40"],
      d:["Đóng vali tối nay. Đặt Didi trước cho khung 04:50.", "Pack tonight. Pre-book a Didi for 04:50.", "今晚收拾好行李。提前约好04:50的滴滴。"]
    }
  ]
},

{
  city:"sz",
  n:"31",
  dow:"T7",
  icon:"g-park",
  p:["md"],
  head:["Thiên Tân đi Thâm Quyến, và một buổi tối Halloween", "Tianjin to Shenzhen, and a Halloween evening", "天津飞深圳，还有一个万圣夜"],
  slots:[
    {
      t:["04:40–04:50", "04:40–04:50", "04:40–04:50"],
      b:["Dậy, trả phòng khách sạn Thiên Tân", "Up, check out of the Tianjin hotel", "起床，天津酒店退房"],
      dur:["10 phút", "10 min", "10分钟"],
      d:["Báo lễ tân trả phòng sớm từ tối hôm trước.", "Tell reception about the early check-out the night before.", "前一晚告诉前台会早退房。"]
    },
    {
      m:1,
      t:["35 phút", "35 min", "35分钟"],
      a:["Didi ra Thiên Tân Tân Hải T2 · 22 km · 60–80 CNY", "Didi to Tianjin Binhai T2 · 22 km · CNY 60–80", "滴滴到天津滨海T2 · 22公里 · 60–80元"]
    },
    {
      t:["05:30", "05:30", "05:30"],
      b:["Có mặt ở Thiên Tân Tân Hải T2, ký gửi vali", "At Tianjin Binhai T2, check the bags in", "抵达天津滨海T2，办理托运"],
      dur:["sớm 2,4 giờ", "2h25 early", "提前2小时25分"],
      d:["Ký gửi cả hai vali.", "Check both cases.", "两件行李都托运。"]
    },
    {
      t:["07:55 → 11:35", "07:55 → 11:35", "07:55 → 11:35"],
      b:["Thiên Tân Tân Hải T2 → Bảo An Thâm Quyến · CA2813", "Tianjin Binhai T2 → Shenzhen Bao'an · CA2813", "天津滨海T2 → 深圳宝安 · CA2813"],
      dur:["3 giờ 40", "3h40", "3小时40分"],
      d:[
        "Air China. Thâm Quyến 22–29°C, để sẵn bộ đồ mỏng trong túi xách tay.",
        "Air China. Shenzhen is 22–29°C; keep light clothes in the cabin bag.",
        "国航。深圳22–29°C，随身包里备好薄衣服。"
      ]
    },
    {
      t:["11:35–12:20", "11:35–12:20", "11:35–12:20"],
      b:["Xuống máy bay và nhận hai vali", "Off the plane and both suitcases back", "下机并取回两个箱子"],
      tag:"pay",
      tagx:["Bắt buộc lấy hành lý", "Baggage must be collected", "必须提取行李"],
      dur:["45 phút", "45 min", "45分钟"],
      d:[
        "Hai vé rời nhau nên phải lấy vali ra, sáng mai ký gửi lại.",
        "Two separate tickets, so reclaim the cases and re-check them tomorrow.",
        "两张独立机票，需取出行李，明早重新托运。"
      ]
    },
    {
      m:1,
      t:["25 phút", "25 min", "25分钟"],
      a:[
        "Didi từ Bảo An về khách sạn gần sân bay · 5–8 km · 25–35 CNY",
        "Didi from Bao'an to the hotel near the airport · 5–8 km · CNY 25–35",
        "从宝安打滴滴到机场附近的酒店 · 5–8公里 · 25–35元"
      ]
    },
    {
      t:["12:45", "12:45", "12:45"],
      b:["Gửi hai vali ở lễ tân, chưa nhận phòng", "Leave both cases at reception without checking in", "把两个箱子存在前台，先不入住"],
      d:["Nhận phòng từ 14:00, gửi vali ở lễ tân trước.", "Check-in is from 14:00; leave the cases at reception first.", "14:00后入住，先把行李寄存在前台。"]
    },
    {
      m:1,
      t:["45 phút", "45 min", "45分钟"],
      a:["Didi tới Cửa sổ Thế giới · 30 km · 90–110 CNY", "Didi to Window of the World · 30 km · CNY 90–110", "滴滴到世界之窗 · 30公里 · 90–110元"]
    },
    {
      t:["13:40–17:40", "13:40–17:40", "13:40–17:40"],
      b:["Cửa sổ Thế giới", "Window of the World", "世界之窗"],
      tag:"pay",
      tagx:["220 CNY", "CNY 220", "220元"],
      dur:["240 phút", "240 min", "240分钟"],
      d:[
        "<span class=\"han\">世界之窗</span> - hơn 130 mô hình công trình thế giới thu nhỏ. Vé ban ngày khoảng 220 CNY.",
        "<span class=\"han\">世界之窗</span> - over 130 scale models of world landmarks. Day ticket about CNY 220.",
        "<span class=\"han\">世界之窗</span>——130多个世界名胜微缩景观。日场票约220元。"
      ]
    },
    {
      t:["Trong lịch của bạn", "In your own plan", "你自己的安排"],
      b:["Melania Town", "Melania Town", "Melania Town"],
      dur:["đi liền sau", "straight after", "紧接其后"],
      d:[
        "Lưu sẵn tên tiếng Trung vào Amap, tên tiếng Anh không tra được.",
        "Save the Chinese name in Amap; the English name will not search.",
        "提前在高德存好中文名，英文名搜不到。"
      ]
    },
    {
      t:["17:45–20:45", "17:45–20:45", "17:45–20:45"],
      b:["Buổi tối Halloween và giờ lên đèn", "Halloween evening and lights-on", "万圣夜与亮灯时分"],
      tag:"free",
      dur:["180 phút", "180 min", "180分钟"],
      d:[
        "Công viên mở tới khoảng 22:30, 31/10 có sự kiện Halloween - xem lịch trên mini-program. Ăn tối trong công viên.",
        "The park stays open until about 22:30, with Halloween events on 31 Oct - check the mini-program. Dinner in the park.",
        "园区开到约22:30，10月31日有万圣节活动——在小程序查时间。园内吃晚饭。"
      ]
    },
    {
      m:1,
      t:["40 phút", "40 min", "40分钟"],
      a:["Didi về khách sạn gần Bảo An · 30 km · 90–110 CNY", "Didi back to the hotel near Bao'an · 30 km · CNY 90–110", "滴滴回宝安附近酒店 · 30公里 · 90–110元"]
    },
    {
      t:["21:45", "21:45", "21:45"],
      b:["Về khách sạn, nhận phòng, lấy lại hai vali", "Back at the hotel, check in, collect both cases", "回酒店办入住，取回两个箱子"],
      d:["Soạn sẵn giấy tờ cho sáng mai, dậy 5:20.", "Lay out documents for the morning; up at 05:20.", "准备好明早的证件，5:20起床。"]
    }
  ]
},

{
  city:"sz",
  n:"01",
  dow:"CN",
  mon2:1,
  p:["md"],
  head:["Thâm Quyến về Hà Nội", "Shenzhen home to Hanoi", "从深圳回河内"],
  slots:[
    { t:["05:20–05:45", "05:20–05:45", "05:20–05:45"], b:["Dậy, trả phòng", "Up and checked out", "起床退房"], dur:["25 phút", "25 min", "25分钟"] },
    {
      m:1,
      t:["20 phút", "20 min", "20分钟"],
      a:[
        "Xe đưa đón của khách sạn hoặc Didi ra Bảo An nhà ga T3 · 5–8 km · 25–35 CNY · hỏi giờ xe đưa đón từ tối hôm trước",
        "The hotel shuttle or a Didi to Bao'an Terminal 3 · 5–8 km · CNY 25–35 · ask about the shuttle times the evening before",
        "酒店接驳车或滴滴到宝安T3 · 5–8公里 · 25–35元 · 前一晚就问清接驳车时刻"
      ]
    },
    {
      t:["06:10", "06:10", "06:10"],
      b:["Có mặt ở Bảo An T3, ký gửi vali và làm thủ tục xuất cảnh", "At Bao'an T3, check the bags and clear exit formalities", "抵达宝安T3，托运行李并办理出境"],
      dur:["sớm 2,3 giờ", "2h20 early", "提前2小时20分"],
      d:["Giữ hộ chiếu tới khi qua cửa xuất cảnh.", "Keep the passport handy until you clear exit immigration.", "过出境前护照随身放好。"]
    },
    {
      t:["08:30 → 09:40", "08:30 → 09:40", "08:30 → 09:40"],
      b:["Bảo An Thâm Quyến → Nội Bài · ZH101", "Shenzhen Bao'an → Noi Bai · ZH101", "深圳宝安 → 内排 · ZH101"],
      dur:["2 giờ 10", "2h10", "2小时10分"],
      d:[
        "Shenzhen Airlines. Hạ cánh Hà Nội 09:40 chủ nhật 1/11.",
        "Shenzhen Airlines. Lands in Hanoi at 09:40 on Sunday 1 Nov.",
        "深圳航空。11月1日周日09:40抵达河内。"
      ]
    }
  ]
}
);
