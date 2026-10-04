/* Giới thiệu thành phố, khai báo DAYS và ngày 21/10 ở Thượng Hải */
var CITYINTRO = {
  sh:[
    "15 tiếng quá cảnh: gửi đồ ở khách sạn cạnh sân bay, Tuấn Anh ngủ bù, ba người còn lại đi một vòng thành phố. Khoảng 15–23°C.",
    "A 15-hour layover: bags at a hotel by the airport, Tuan Anh sleeps, the other three loop the city. About 15–23°C.",
    "15小时中转：行李寄存在机场旁的酒店，俊英补觉，其余三人逛一圈市区。约15–23°C。"
  ],
  bj:[
    "Cuối tháng 10 khoảng 5–17°C, khô, sáng sớm lạnh. Campus Xương Bình của BNU ở ga Sa Hà <span class=\"han\">沙河</span>, cách trung tâm khoảng một tiếng.",
    "Late October is about 5–17°C, dry, chilly early on. BNU's Changping campus is at Shahe <span class=\"han\">沙河</span> station, about an hour from the centre.",
    "10月下旬约5–17°C，干燥，早晚凉。北师大昌平校区在<span class=\"han\">沙河</span>站，距市区约一小时。"
  ],
  tj:[
    "Chỉ còn Mỹ Duyên. Ngủ hai đêm ở Thiên Tân vì chuyến bay 07:55 ngày 31/10 cất cánh từ Thiên Tân Tân Hải.",
    "My Duyen only. Two nights in Tianjin because the 07:55 flight on 31 Oct leaves from Tianjin Binhai.",
    "只剩美缘。在天津住两晚，因为10月31日07:55的航班从天津滨海起飞。"
  ]
};

var DAYS = [
{
  city:"sh",
  n:"21",
  dow:"T4",
  icon:"g-pearl",
  head:["Bay đêm, rồi trọn một ngày ở Thượng Hải", "A night flight, then a whole day in Shanghai", "红眼航班，然后是完整的上海一日"],
  slots:[
    {
      t:["23:30", "23:30", "23:30"],
      b:["Có mặt ở Nội Bài T2, tối 20/10", "At Noi Bai T2, evening of 20 Oct", "10月20日晚抵达内排T2"],
      d:["Đặt xe ra sân bay từ chiều.", "Book the airport ride in the afternoon.", "下午预约好去机场的车。"]
    },
    {
      t:["02:20 → 06:35", "02:20 → 06:35", "02:20 → 06:35"],
      b:["Nội Bài T2 → Phố Đông T1 · MU5076", "Noi Bai T2 → Pudong T1 · MU5076", "内排T2 → 浦东T1 · MU5076"],
      dur:["3 giờ 15", "3h15", "3小时15分"],
      d:[
        "China Eastern, có suất ăn. Giờ Trung Quốc nhanh hơn Việt Nam 1 tiếng.",
        "China Eastern, meal included. China is 1 hour ahead of Vietnam.",
        "东方航空，含餐食。中国比越南快1小时。"
      ]
    },
    {
      t:["06:35–07:50", "06:35–07:50", "06:35–07:50"],
      b:["Nhập cảnh Trung Quốc, lấy hành lý", "Chinese immigration and baggage", "入境中国、取行李"],
      dur:["75 phút", "75 min", "75分钟"],
      d:[
        "Nhập cảnh và lấy vân tay. Giữ kỹ tờ khai và dấu nhập cảnh tới lúc về.",
        "Immigration and fingerprints. Keep the arrival card and entry stamp until you leave China.",
        "入境并采集指纹。妥善保管入境卡和入境章直到离境。"
      ]
    },
    {
      m:1,
      t:["20 phút", "20 min", "20分钟"],
      a:["Xe đưa đón miễn phí của khách sạn về Dihang · 9,2 km", "The hotel's free shuttle to the Dihang · 9.2 km", "酒店免费接驳车到迪航酒店 · 9.2公里"]
    },
    {
      t:["08:20–08:40", "08:20–08:40", "08:20–08:40"],
      b:["Dihang Boutique Hotel: gửi đồ, Tuấn Anh nhận phòng", "Dihang Boutique Hotel: drop bags, Tuan Anh checks in", "迪航酒店：寄存行李，俊英入住"],
      tag:"pay",
      tagx:["487.164 ₫ / phòng", "VND 487,164 / room", "487,164越南盾/间"],
      dur:["20 phút", "20 min", "20分钟"],
      d:[
        "上海浦东国际机场迪航酒店. Khách sạn đồng ý cho nhận phòng sớm từ 9:00 nếu có phòng sạch. Nếu chưa có thì cả nhóm gửi vali, Tuấn Anh đi ăn sáng gần đó rồi quay lại nhận phòng.",
        "上海浦东国际机场迪航酒店. The hotel has agreed to early check-in from 09:00 if a clean room is ready. If not, the group leaves the bags and Tuan Anh gets breakfast nearby, then comes back to check in.",
        "上海浦东国际机场迪航酒店。酒店同意如有干净房间可9:00提前入住。如果还没有，大家先寄存行李，俊英在附近吃早餐后再回来入住。"
      ]
    }
  ],
  legs:[
    {
      cls:"uni",
      p:["gb", "md"],
      h:["Một vòng Thượng Hải, ba người", "A loop of Shanghai, three people", "上海一圈，三人同行"],
      who:["Gia Bảo + Quỳnh Mai + Mỹ Duyên", "Gia Bao + Quynh Mai + My Duyen", "嘉宝 + 琼梅 + 美缘"],
      slots:[
        {
          t:["08:40", "08:40", "08:40"],
          b:["Rời khách sạn Dihang, tay không", "Leave the Dihang with empty hands", "轻装离开迪航酒店"],
          d:["Chỉ mang túi nhỏ, sạc dự phòng và một lớp áo mỏng.", "Just a small bag, a power bank and a light layer.", "只带小包、充电宝和一件薄外套。"]
        },
        {
          m:1,
          t:["50–60 phút", "50–60 min", "50–60分钟"],
          a:[
            "Didi tới <span class=\"han\">上海图书馆</span> Thư viện Thượng Hải · 42 km · 190–240 CNY cả xe",
            "Didi to <span class=\"han\">上海图书馆</span> Shanghai Library · 42 km · CNY 190–240 per car",
            "滴滴到<span class=\"han\">上海图书馆</span> · 42公里 · 整车190–240元"
          ]
        },
        {
          t:["09:15–10:00", "09:15–10:00", "09:15–10:00"],
          b:["Thư viện Thượng Hải", "Shanghai Library", "上海图书馆"],
          tag:"free",
          dur:["45 phút", "45 min", "45分钟"],
          d:[
            "<span class=\"han\">上海图书馆</span>, số 1555 đường Hoài Hải Trung. Mở 8:30, vào tự do, gửi túi ở tủ.",
            "<span class=\"han\">上海图书馆</span>, 1555 Middle Huaihai Road. Opens 08:30, free entry, bags in the lockers.",
            "<span class=\"han\">上海图书馆</span>，淮海中路1555号。8:30开门，免费进入，包存储物柜。"
          ]
        },
        {
          m:1,
          t:["10 phút", "10 min", "10分钟"],
          a:[
            "Đi bộ 800m theo đường Hoài Hải Trung về phía tây tới ngã năm Vũ Khang",
            "An 800m walk west along Middle Huaihai Road to the Wukang junction",
            "沿淮海中路向西步行800米到武康路口"
          ]
        },
        {
          t:["10:10–10:50", "10:10–10:50", "10:10–10:50"],
          b:["Toà nhà Vũ Khang", "Wukang Mansion", "武康大楼"],
          tag:"free",
          dur:["40 phút", "40 min", "40分钟"],
          d:[
            "<span class=\"han\">武康大楼</span> - toà nhà mũi tàu xây năm 1924. Góc chụp đẹp nhất là từ bên kia ngã năm.",
            "<span class=\"han\">武康大楼</span> - the 1924 flatiron building. Best shot is from across the five-way junction.",
            "<span class=\"han\">武康大楼</span>——1924年的船形大楼。最佳机位在五岔路口对面。"
          ]
        },
        {
          m:1,
          t:["12 phút", "12 min", "12分钟"],
          a:[
            "Didi tới HAUS NOWHERE · 2,8 km · 20–30 CNY cả xe",
            "Didi to HAUS NOWHERE · 2.8 km · CNY 20–30 for the car",
            "打滴滴到 HAUS NOWHERE · 2.8公里 · 整车20–30元"
          ]
        },
        {
          t:["11:00–11:45", "11:00–11:45", "11:00–11:45"],
          b:["HAUS NOWHERE", "HAUS NOWHERE", "HAUS NOWHERE"],
          tag:"free",
          dur:["45 phút", "45 min", "45分钟"],
          d:["Concept store, vào tự do, chủ yếu để chụp ảnh.", "A concept store, free entry, mainly for photos.", "概念店，免费进入，主要拍照。"]
        },
        {
          m:1,
          t:["25 phút", "25 min", "25分钟"],
          a:["Didi tới khu Sa Mỹ · 5,5 km · 30–40 CNY cả xe", "Didi to the Shama area · 5.5 km · CNY 30–40 per car", "滴滴到沙美一带 · 5.5公里 · 整车30–40元"]
        },
        {
          t:["12:15–13:45", "12:15–13:45", "12:15–13:45"],
          b:["Sa Mỹ, đường Viên Minh Viên và Nhà thờ Hiệp Tiến", "Shama, Yuanmingyuan Road and Union Church", "沙美、圆明园路与协进堂"],
          tag:"free",
          dur:["90 phút", "90 min", "90分钟"],
          d:[
            "<span class=\"han\">圆明园路</span> - phố đi bộ Rockbund sau lưng Bến Thượng Hải, và <span class=\"han\">协进堂</span> Nhà thờ Hiệp Tiến (1886). Vắng hơn Bến Thượng Hải, ảnh đẹp.",
            "<span class=\"han\">圆明园路</span> - the pedestrian Rockbund strip behind the Bund, plus <span class=\"han\">协进堂</span> Union Church (1886). Quieter than the Bund, great for photos.",
            "<span class=\"han\">圆明园路</span>——外滩背后的外滩源步行街，以及1886年的<span class=\"han\">协进堂</span>。比外滩清静，适合拍照。"
          ]
        },
        {
          m:1,
          t:["15 phút", "15 min", "15分钟"],
          a:[
            "Đi bộ ra bờ kè Bến Thượng Hải, chụp vài kiểu, rồi rẽ vào đầu phố Nam Kinh Đông Lộ",
            "Walk out to the Bund promenade, take a few frames, then turn into the head of East Nanjing Road",
            "步行到外滩堤岸拍几张，再拐进南京东路街口"
          ]
        },
        {
          t:["14:00–15:30", "14:00–15:30", "14:00–15:30"],
          b:["Đường Nam Kinh Đông và ăn trưa", "East Nanjing Road and lunch", "南京东路与午餐"],
          tag:"free",
          dur:["90 phút", "90 min", "90分钟"],
          d:[
            "<span class=\"han\">南京东路</span> - phố đi bộ 1,2 km. Ăn trưa tiểu long bao, sinh tiễn bao trong các ngõ cắt ngang cho rẻ.",
            "<span class=\"han\">南京东路</span> - 1.2 km pedestrian street. Lunch on xiaolongbao and shengjianbao in the side lanes, where it is cheaper.",
            "<span class=\"han\">南京东路</span>——1.2公里步行街。在旁边小巷吃小笼包、生煎包，更便宜。"
          ]
        },
        {
          m:1,
          t:["10 phút", "10 min", "10分钟"],
          a:[
            "Tuyến 2 từ <span class=\"han\">南京东路</span> đi một ga sang <span class=\"han\">陆家嘴</span> Lục Gia Chủy · 3 CNY",
            "Line 2 one stop from <span class=\"han\">南京东路</span> to <span class=\"han\">陆家嘴</span> Lujiazui · CNY 3",
            "2号线从<span class=\"han\">南京东路</span>坐一站到<span class=\"han\">陆家嘴</span> · 3元"
          ]
        },
        {
          t:["16:00–17:30", "16:00–17:30", "16:00–17:30"],
          b:["Lục Gia Chủy, dưới chân tháp Đông Phương Minh Châu", "Lujiazui, under the Oriental Pearl Tower", "陆家嘴，东方明珠脚下"],
          tag:"free",
          dur:["90 phút", "90 min", "90分钟"],
          d:[
            "Chân tháp và cầu đi bộ vòng tròn Lục Gia Chủy. Hoàng hôn khoảng 17:05, 17:30 lên đèn. Không cần lên tháp.",
            "The foot of the tower and the circular Lujiazui skywalk. Sunset around 17:05, lights on by 17:30. No need to go up the tower.",
            "塔下和陆家嘴环形天桥。约17:05日落，17:30亮灯。不必登塔。"
          ]
        },
        {
          m:1,
          t:["45 phút", "45 min", "45分钟"],
          a:[
            "Tuyến 2 từ Lục Gia Chủy quay về phía đông tới ga <span class=\"han\">凌空路</span> · 5 CNY · rời Lục Gia Chủy muộn nhất 17:35",
            "Line 2 east from Lujiazui back to <span class=\"han\">凌空路</span> Lingkong Road · CNY 5 · leave Lujiazui by 17:35 at the latest",
            "2号线从陆家嘴向东回<span class=\"han\">凌空路</span>站 · 5元 · 最晚17:35离开陆家嘴"
          ]
        },
        {
          m:1,
          t:["15 phút", "15 min", "15分钟"],
          a:[
            "Didi từ Lăng Không Lộ về khách sạn Dihang · 4,2 km · 20–30 CNY cả xe",
            "Didi from Lingkong Road back to the Dihang · 4.2 km · CNY 20–30 for the car",
            "从凌空路打滴滴回迪航酒店 · 4.2公里 · 整车20–30元"
          ]
        }
      ]
    },
    {
      cls:"home",
      p:["ta"],
      h:["Ngủ bù ở khách sạn", "Catching up on sleep at the hotel", "在酒店补觉"],
      who:["Tuấn Anh", "Tuan Anh", "俊英"],
      slots:[
        {
          t:["09:00–18:00", "09:00–18:00", "09:00–18:00"],
          b:["Nghỉ tại phòng ở Dihang Boutique Hotel", "Resting in the room at the Dihang Boutique Hotel", "在迪航酒店房间休息"],
          dur:["9 tiếng", "9h", "9小时"],
          d:[
            "Ngủ bù. Đặt chuông trước 17:30, cả nhóm lên xe ra sân bay lúc 19:00.",
            "Catch up on sleep. Set an alarm for before 17:30; the group leaves for the airport at 19:00.",
            "补觉。闹钟定在17:30前，全队19:00出发去机场。"
          ]
        }
      ]
    }
  ],
  tail:[
    {
      t:["18:35–19:00", "18:35–19:00", "18:35–19:00"],
      b:["Cả bốn người gặp lại, lấy hành lý ở khách sạn", "All four meet up and collect the bags", "四人会合，在酒店取行李"],
      dur:["25 phút", "25 min", "25分钟"]
    },
    {
      m:1,
      t:["25 phút", "25 min", "25分钟"],
      a:["Xe đưa đón của khách sạn ra Phố Đông · 9,2 km", "Hotel shuttle to Pudong · 9.2 km", "酒店接驳车到浦东 · 9.2公里"]
    },
    {
      t:["19:30", "19:30", "19:30"],
      b:["Có mặt ở Phố Đông T1", "At Pudong T1", "抵达浦东T1"],
      dur:["sớm 2 giờ", "2h05 early", "提前2小时5分"],
      d:[
        "Bay nội địa, hành lý đã đi thẳng nên chỉ cần qua an ninh.",
        "Domestic flight with bags already checked through, so just security.",
        "国内航班，行李已直挂，只需安检。"
      ]
    },
    {
      t:["21:35 → 23:50", "21:35 → 23:50", "21:35 → 23:50"],
      b:["Phố Đông T1 → Thủ Đô T2 · MU5165", "Pudong T1 → Capital T2 · MU5165", "浦东T1 → 首都T2 · MU5165"],
      dur:["2 giờ 15", "2h15", "2小时15分"],
      d:[
        "China Eastern. Hạ cánh 23:50, BNU đón tại sân bay.",
        "China Eastern. Lands 23:50; BNU meets the group at the airport.",
        "东方航空。23:50落地，北师大接机。"
      ]
    }
  ]
}
];
