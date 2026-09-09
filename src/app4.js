/* ================= BEIJING ================= */
DAYS.push(
{ city:"bj", n:"21", dow:"T4",
  head:["Hạ cánh lúc gần nửa đêm, BNU đón tận sân bay","Landing close to midnight, BNU meets the group","将近午夜落地，北师大到机场接人"],
  intro:["Ngày này bắt đầu ở Nội Bài lúc 02:20 và kết thúc ở campus Xương Bình lúc gần 01:00 sáng hôm sau. Phần cuối rất gọn vì <strong>BNU đã xác nhận đón cả bốn người ngay tại sân bay Thủ Đô và đưa thẳng về campus nhận phòng</strong> - không phải lo tàu cuối, không phải gọi xe lúc nửa đêm.",
   "The day starts at Noi Bai at 02:20 and ends on the Changping campus close to 01:00 the next morning. The last stretch is simple, because <strong>BNU has confirmed it will collect all four at Capital Airport and drive them straight to campus to check in</strong> - no last trains to catch, no midnight car to book.",
   "这一天从内排02:20开始，到次日将近凌晨1点在昌平校区结束。最后一段很省心，因为<strong>北师大已确认在首都机场接四人并直接送回校区办理入住</strong>——不用赶末班车，也不用半夜叫车。"],
  slots:[
   {t:["23:50","23:50","23:50"], b:["Hạ cánh sân bay Thủ Đô, nhà ga T2","Landing at Capital Airport, Terminal 2","落地首都机场T2"],
    d:["Chuyến nội địa từ Thượng Hải nên không phải làm thủ tục nhập cảnh lần nữa - việc đó đã xong ở Phố Đông sáng cùng ngày.",
       "A domestic arrival from Shanghai, so there is no second immigration check - that was done at Pudong the same morning.",
       "从上海来的国内航班，无需再次入境——入境手续当天早上已在浦东办完。"]},
   {t:["23:50–00:25","23:50–00:25","23:50–00:25"], b:["Lấy hành lý ký gửi","Collect the checked bags","提取托运行李"], dur:["35 phút","35 min","35分钟"],
    d:["Nhắn cho người đón của BNU ngay khi máy bay vừa lăn bánh vào bãi, đừng đợi ra tới sảnh. Điểm hẹn nên chốt trước bằng tiếng Trung: sảnh đến nhà ga T2, cửa ra số mấy.",
       "Message BNU's driver the moment the aircraft reaches the stand, not when you reach the hall. Agree the meeting point in Chinese in advance: T2 arrivals hall, which exit number.",
       "飞机一到廊桥就给北师大接机的人发消息，不要等出到大厅再发。会合点提前用中文约定好：T2到达大厅，哪个出口。"]},
   {m:1, t:["50 phút","50 min","50分钟"], a:["Xe của BNU từ sân bay Thủ Đô về campus Xương Bình · khoảng 45 km · BNU lo, không mất tiền",
    "BNU's car from Capital Airport to the Changping campus · about 45 km · arranged and paid by BNU",
    "北师大的车从首都机场到昌平校区 · 约45公里 · 由北师大安排并承担"]},
   {t:["≈ 01:20","≈ 01:20","约01:20"], b:["Nhận phòng ở campus Xương Bình","Check in on the Changping campus","在昌平校区办理入住"],
    d:["Mang sẵn hộ chiếu và giấy tờ BNU gửi qua email trong túi xách tay, đừng để trong vali ký gửi. Xong là ngủ - hôm sau là ngày định hướng.",
       "Keep the passport and BNU's emailed paperwork in the cabin bag, not the checked suitcase. Then sleep - tomorrow is orientation day.",
       "把护照和北师大邮件里的材料放在随身包里，别放托运箱。然后就休息——第二天是报到日。"]}
  ]
},

{ city:"bj", n:"22", dow:"T5",
  head:["Ngày định hướng ở BNU","Orientation day at BNU","北师大报到日"], hosttag:1,
  slots:[
   {t:["Cả ngày","All day","全天"], b:["Orientation và hoạt động chuẩn bị","Orientation and preparation","开幕与准备活动"],
    d:["Cả 4 người. Theo thư mời, đội cần có mặt ở Bắc Kinh ngày 22/10 - lịch bay đã tính đúng vào mốc này.","All four. The invitation asks the team to be in Beijing on 22 Oct, which is exactly what the flights deliver.","四人全体。邀请函要求队伍10月22日抵京，航班安排正好对上。"]},
   {t:["Tối","Evening","晚上"], b:["Nghỉ sớm, làm quen campus","Early night, get to know the campus","早点休息，熟悉校园"],
    d:["Cả nhóm vừa qua một ngày dài: bay đêm từ Hà Nội, một ngày ở Thượng Hải, rồi bay tiếp và về tới phòng lúc 01:20. Tối nay đừng đi đâu. Ăn ở căng tin hoặc quán mì gần cổng trường.",
       "The whole group has just had a very long day: a red-eye from Hanoi, a day in Shanghai, a second flight and a 01:20 arrival. Stay in tonight. Canteen or a noodle place by the gate.",
       "全队刚过了很长的一天：从河内的红眼航班、上海的一整天、再一段飞行，凌晨1:20才回房。今晚别外出。在食堂或校门口面馆吃饭。"]}
  ]},

{ city:"bj", n:"23", dow:"T6",
  head:["Thi ban ngày · Công viên Olympic ban đêm","Competition by day · Olympic Park at night","白天比赛 · 夜游奥林匹克公园"], hosttag:1,
  slots:[
   {p:["gb","md"], m:1, t:["45 phút","45 min","45分钟"], a:['Sa Hà → tuyến Xương Bình → đổi tuyến 8 tại <span class="han">朱辛庄</span> → ga Olympic Green · 6 CNY',
    'Shahe → Changping Line → change to Line 8 at <span class="han">朱辛庄</span> Zhuxinzhuang → Olympic Green · CNY 6',
    '沙河 → 昌平线 → <span class="han">朱辛庄</span>换8号线 → 奥林匹克公园站 · 6元']},
   {p:["gb","md"], t:["19:00–21:00","19:00–21:00","19:00–21:00"], b:["Công viên Olympic","Olympic Park","奥林匹克公园"], tag:"free", dur:["120 phút","120 min","120分钟"],
    d:["Tổ Chim và Thuỷ Lập Phương lên đèn buổi tối, quảng trường rộng, đi bộ thoải mái. Đây là điểm tối gần trường nhất và cũng dễ về nhất - tuyến 8 nối thẳng vào tuyến Xương Bình.",
       "The Bird's Nest and Water Cube lit up, a wide plaza, easy walking. The closest evening outing to campus and the easiest return - Line 8 connects straight to the Changping Line.",
       "鸟巢和水立方夜间亮灯，广场开阔，适合散步。这是离校区最近、返回最方便的夜间去处——8号线直通昌平线。"]},
   {p:["gb","md"], m:1, t:["45 phút","45 min","45分钟"], a:["Về Sa Hà bằng đúng đường cũ","Back to Shahe the same way","原路返回沙河"]}
  ],
  notes:[["<b>Giờ tàu cuối:</b> tuyến Xương Bình từ Zhuxinzhuang về Sa Hà dừng chạy khoảng 23:00. Cứ đặt luật cho cả nhóm là <b>rời trung tâm trước 21:30</b>, và kiểm tra lại giờ thực tế trên app Amap trước khi đi. Lỡ chuyến cuối thì Didi từ trung tâm về Xương Bình mất khoảng 120–150 CNY.",
   "<b>Last trains:</b> the Changping Line from Zhuxinzhuang to Shahe stops around 23:00. Make it a team rule to <b>leave the centre before 21:30</b>, and check the real times in Amap on the day. Missing it means a CNY 120–150 Didi back to Changping.",
   "<b>末班车：</b>昌平线从朱辛庄回沙河约23:00停运。给全队定个规矩：<b>21:30前离开市区</b>，当天用高德查实际时间。错过末班车，从市区打滴滴回昌平约120–150元。"]]
},

{ city:"bj", n:"24", dow:"T7",
  head:["Thi ban ngày · Hồ Thập Sát Hải ban đêm","Competition by day · Shichahai at night","白天比赛 · 夜游什刹海"], hosttag:1,
  slots:[
   {p:["gb","md"], m:1, t:["55 phút","55 min","55分钟"], a:['Sa Hà → tuyến Xương Bình → tuyến 8 tại Zhuxinzhuang → ga <span class="han">南锣鼓巷</span> Nanluoguxiang · 6 CNY',
    'Shahe → Changping Line → Line 8 at Zhuxinzhuang → <span class="han">南锣鼓巷</span> Nanluoguxiang · CNY 6',
    '沙河 → 昌平线 → 朱辛庄换8号线 → <span class="han">南锣鼓巷</span>站 · 6元']},
   {p:["gb","md"], t:["19:00–21:15","19:00–21:15","19:00–21:15"], b:["Nam La Cổ Hạng & Thập Sát Hải","Nanluoguxiang & Shichahai","南锣鼓巷 & 什刹海"], tag:"free", dur:["135 phút","135 min","135分钟"],
    d:["Khoảng 45 phút đi bộ ngõ hutong Nam La Cổ Hạng, rồi 15 phút đi bộ sang hồ Thập Sát Hải, còn lại dạo quanh hồ và ăn tối. Đèn lồng ven hồ, Tháp Chuông và Tháp Trống ngay gần đó. Đây là Bắc Kinh cũ mà ban ngày đi thi sẽ không kịp thấy.",
       "About 45 minutes in the Nanluoguxiang hutongs, then a 15-minute walk to Shichahai, the rest around the lake with dinner. Lanterns along the water, the Bell and Drum Towers nearby. This is the old Beijing the competition days leave no room for.",
       "南锣鼓巷胡同步行约45分钟，再走15分钟到什刹海，其余时间绕湖散步并用餐。湖边灯笼，钟鼓楼就在附近。这是比赛日白天看不到的老北京。"]},
   {p:["gb","md"], m:1, t:["55 phút","55 min","55分钟"], a:["Về Sa Hà - xuất phát muộn nhất 21:30","Back to Shahe - leave by 21:30 at the latest","返回沙河——最晚21:30出发"]}
  ]},

{ city:"bj", n:"25", dow:"CN",
  head:["Ngày thi cuối · Tiền Môn ban đêm","Last competition day · Qianmen at night","比赛最后一天 · 夜游前门"], hosttag:1,
  slots:[
   {p:["gb","md"], m:1, t:["65 phút","65 min","65分钟"], a:['Sa Hà → tuyến Xương Bình → tuyến 8 tại Zhuxinzhuang → ga <span class="han">前门</span> Qianmen · 7 CNY',
    'Shahe → Changping Line → Line 8 at Zhuxinzhuang → <span class="han">前门</span> Qianmen · CNY 7',
    '沙河 → 昌平线 → 朱辛庄换8号线 → <span class="han">前门</span>站 · 7元']},
   {p:["gb","md"], t:["18:30–21:00","18:30–21:00","18:30–21:00"], b:["Phố Tiền Môn & ngõ Đại Sách Lan","Qianmen Street & Dashilan","前门大街 & 大栅栏"], tag:"free", dur:["150 phút","150 min","150分钟"],
    d:["Khoảng 90 phút ăn tối mừng kết thúc cuộc thi, 60 phút đi bộ. Phố đi bộ kiểu cũ có tàu điện leng keng, nhìn thẳng lên Chính Dương Môn và rìa Quảng trường Thiên An Môn lên đèn. Vịt quay Tiện Nghi Phường hoặc Toàn Tụ Đức đều nằm trong khu này - một con vịt cho cả nhóm khoảng 75–100 CNY mỗi người. Đây cũng là bữa cuối cùng của cả bốn người trước khi Tuấn Anh về sáng hôm sau.",
       "About 90 minutes for a celebration dinner and 60 minutes walking. An old-style pedestrian street with a clanging tram, looking straight up at Zhengyangmen and the lit edge of Tiananmen Square. Bianyifang or Quanjude roast duck are both here - one duck for the group is CNY 75–100 a head. It is also the last meal with all four together, since Tuan Anh flies home the next day.",
       "约90分钟庆功晚餐，60分钟步行。仿古步行街有叮当作响的电车，正对正阳门和灯火中的天安门广场边缘。便宜坊和全聚德烤鸭都在这一带——全队一只鸭，人均75–100元。这也是四人在一起的最后一餐，因为俊英第二天就回国。"]},
   {p:["gb","md"], m:1, t:["65 phút","65 min","65分钟"], a:["Về Sa Hà - xuất phát muộn nhất 21:15 vì đây là chặng xa nhất","Back to Shahe - leave by 21:15, this is the longest ride","返回沙河——最晚21:15出发，这是最远的一段"]}
  ],
  notes:[["<b>Xác nhận với BTC:</b> ăn ở do BNU bao kết thúc vào tối 25/10 hay sáng 26/10. Trả lời khác nhau lệch mất một đêm khách sạn và có thể lệch cả bữa sáng của Tuấn Anh trước khi ra sân bay.",
   "<b>Confirm with the organisers:</b> does BNU's board and lodging end on the evening of 25 Oct or the morning of 26 Oct? The answer is worth a hotel night, and possibly Tuan Anh's breakfast before the airport.",
   "<b>向主办方确认：</b>北师大的食宿到10月25日晚结束还是10月26日早上？答案关系到一晚酒店，也可能关系到俊英去机场前的早餐。"]]
}
);
