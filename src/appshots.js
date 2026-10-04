/* ---------- real photographs (Wikimedia Commons, free licences) ----------
   Keyed on the Vietnamese title of the slot, so the day data stays untouched.
   u = image URL, f = Commons file page, c = caption in the three languages.  */
var CB = "https://upload.wikimedia.org/wikipedia/commons/thumb/";
var CF = "https://commons.wikimedia.org/wiki/File:";

var HERO = {
 bj: { d: "2/22",
       f: "Views of the Forbidden City from Jingshan Park 1.jpg",
       c: ["Tử Cấm Thành nhìn từ đỉnh đồi Cảnh Sơn","The Forbidden City seen from the top of Jingshan","从景山山顶俯瞰紫禁城"] },
 sh: { d: "d/df",
       f: "Pudong Shanghai November 2017 panorama.jpg",
       c: ["Lục Gia Chủy nhìn từ Bến Thượng Hải","Lujiazui seen from the Bund","从外滩眺望陆家嘴"] },
 sz: { d: "e/e3",
       f: "Commercial area of futian to east2020.jpg",
       c: ["Khu trung tâm Phúc Điền nhìn về phía đông, tháp Bình An ở giữa","The Futian CBD looking east, Ping An Finance Centre at the centre","福田CBD向东望，中间是平安金融中心"] },
 tj: { d: "8/81",
       f: "Tianjin Eye and Tianjin.jpg",
       c: ["Sông Hải Hà chảy qua trung tâm Thiên Tân, vòng quay Thiên Tân Chi Nhãn bên phải","The Hai River through central Tianjin, the Tianjin Eye on the right","海河穿过天津市区，右侧是天津之眼"] }
};

function S(d,f,vi,en,zh){ return {d:d, f:f, c:[vi,en,zh]}; }
/* 960px is the one thumbnail width Wikimedia serves for every one of these files. */
function IU(o){ var n = encodeURIComponent(o.f.replace(/ /g,"_")); return CB+o.d+"/"+n+"/960px-"+n; }

var SHOTS = {

 "Thư viện Thượng Hải": S(
  "e/e9",
  "Shanghai Library (20260507140945).jpg",
  "Thư viện chính trên đường Hoài Hải Trung, cách Vũ Khang Đại Lâu 800m","The main library on Middle Huaihai Road, 800m from Wukang Mansion","淮海中路上的总馆，距武康大楼800米"),

 "Đường Nam Kinh Đông và ăn trưa": S(
  "3/38",
  "East Nanjing Road (40559723522).jpg",
  "Phố đi bộ Nam Kinh Đông Lộ, nối thẳng từ Bến Thượng Hải vào trung tâm","The East Nanjing Road pedestrian street, running from the Bund into the centre","南京东路步行街，从外滩直通市中心"),

 "Ngũ Đại Đạo": S(
  "1/13",
  "Five Great Avenues 21453-Tianjin (49063743276).jpg",
  "Biệt thự gạch đỏ trong tô giới Anh cũ, xây những năm 1920–1940","Red brick villas in the former British concession, built 1920–1940","原英租界的红砖小洋楼，建于1920–1940年"),

 "Đường Giải Phóng Bắc": S(
  "b/b3",
  "利顺德.jpg",
  "Khách sạn Lợi Thuận Đức mở năm 1863, ở đầu bắc đường Giải Phóng Bắc","The Astor Hotel of 1863 at the north end of Jiefang North Road","1863年的利顺德大饭店，位于解放北路北端"),

 "Hải Hà và quảng trường Tân Loan": S(
  "5/51",
  "French Concession IMG 4576 Belfran Building - Jin Wan Plaza.jpg",
  "Dãy nhà kiểu châu Âu ở quảng trường Tân Loan, đối diện ga Thiên Tân","The European façades of Jinwan Plaza, opposite Tianjin station","津湾广场的欧式建筑群，正对天津站"),

 "Thư viện Tân Hải Thiên Tân": S(
  "9/94",
  "Tianjin Binhai Library 3.jpg",
  "Hẻm núi sách cao 34m và quả cầu ở giữa, thiết kế của MVRDV","The 34m canyon of shelves around the central sphere, by MVRDV","MVRDV设计的34米书籍峡谷与中央球体"),

 "Nhà Sứ": S(
  "f/fa",
  "Porcelain House 21605-Tianjin (48746933878).jpg",
  "Mặt ngoài dán kín bằng hơn bốn triệu mảnh sứ cổ","A façade covered in over four million pieces of antique porcelain","外墙贴满四百多万片古瓷"),

 "Cửa sổ Thế giới": S(
  "4/47",
  "WINDOWS OF THE WORLD SHENZHEN (13).jpg",
  "Một trong hơn 130 mô hình công trình trong công viên","One of the park's 130-plus landmark replicas","园内130多处地标复制品之一"),

 "Toà nhà Vũ Khang": S(
  "a/aa",
  "Wukang Mansion (20191114161507).jpg",
  "Mũi tàu ở ngã năm đường Vũ Khang - góc chụp kinh điển","The ship prow at the Wukang Road junction - the classic angle","武康路口的船头造型——经典机位"),

 "Sa Mỹ, đường Viên Minh Viên và Nhà thờ Hiệp Tiến": S(
  "a/af",
  "Yuanmingyuan Rd. Shanghai.JPG",
  "Phố đi bộ Viên Minh Viên Lộ, ngay sau lưng Bến Thượng Hải","The pedestrianised Yuanmingyuan Road, directly behind the Bund","外滩正后方的圆明园路步行街"),







 "Khu phố kiểu Ý, ăn tối": S(
  "5/5a",
  "Italian Style Town 21283-Tianjin (48709194716).jpg",
  "Biệt thự kiểu Ý trong khu tô giới cũ, cạnh ga Thiên Tân","Italian villas in the former concession, beside Tianjin station","天津站旁原意租界的意式别墅"),




 "Công viên Olympic": S(
  "a/a0",
  "Beijing Olympic Park (54051767143).jpg",
  "Tổ Chim lên đèn - lý do nên đi buổi tối","The Bird's Nest lit up - the reason to come at night","亮灯的鸟巢——夜晚前来的理由"),

 "Nam La Cổ Hạng & Thập Sát Hải": S(
  "4/40",
  "Houhai Lake and Drum Tower Beijing 2015 October.jpg",
  "Hồ Hậu Hải về đêm, Tháp Trống phía xa","Houhai lake at night with the Drum Tower beyond","夜晚的后海，远处是鼓楼"),

 "Phố Tiền Môn & ngõ Đại Sách Lan": S(
  "8/82",
  "Qianmen 14 april 2010.jpg",
  "Chính Dương Môn lên đèn ở đầu phố Tiền Môn","Zhengyangmen lit at the head of Qianmen Street","前门大街尽头亮灯的正阳门"),

 "Cổng Tây Đại học Bắc Kinh": S(
  "1/14",
  "West Gate of Peking University HDR 4.JPG",
  "Cổng Tây Bắc Đại, chụp được từ ngoài đường","PKU's West Gate, photographable from the street","北大西门，可从街边拍摄"),

 "Cổng Tây Đại học Thanh Hoa": S(
  "7/7a",
  "West school gate of Tsinghua University, 2011042203.jpg",
  "Cổng Tây Thanh Hoa - chỗ xếp hàng chụp ảnh mỗi ngày","Tsinghua's West Gate - where people queue for the photo daily","清华西门——每天都有人排队拍照的地方"),

 "Universal Beijing Resort": S(
  "4/47",
  "Universal Beijing Resort 2.jpg",
  "Công viên về chiều tối, trước giờ đóng cửa 20:00","The park in the evening, before the 20:00 close","傍晚的园区，20:00闭园前"),

 "Quảng trường Thiên An Môn": S(
  "5/50",
  "Tiananmen Square (54137047250).jpg",
  "Thiên An Môn nhìn từ phía quảng trường","Tiananmen seen from the square","从广场看天安门"),

 "Cố Cung - Tử Cấm Thành": S(
  "d/d2",
  "Hall of Supreme Harmony 2010.jpg",
  "Điện Thái Hoà và sân chầu trên trục giữa","The Hall of Supreme Harmony and its courtyard on the central axis","中轴线上的太和殿与广场"),

 "Công viên Cảnh Sơn": S(
  "e/ef",
  "The Forbidden City - View from Coal Hill.jpg",
  "Đúng khung ảnh nhìn được từ Vạn Xuân Đình","Exactly the frame you get from the Wanchun Pavilion","这正是万春亭上看到的画面"),


 "Phố Vương Phủ Tỉnh - ăn tối và mua quà": S(
  "9/94",
  "Wangfujing Street from north to south 20251002150439.jpg",
  "Phố đi bộ Vương Phủ Tỉnh","The Wangfujing pedestrian street","王府井步行街"),

 "Thiên Đàn": S(
  "5/5f",
  "Temple of Heaven 20160323 01.jpg",
  "Kỳ Niên Điện trên ba tầng nền đá","The Hall of Prayer for Good Harvests on its three marble terraces","三层石台上的祈年殿"),




 "Lục Gia Chủy, dưới chân tháp Đông Phương Minh Châu": S(
  "6/6d",
  "Oriental Pearl Tower 20251126.jpg",
  "Góc ngước lên tháp Đông Phương Minh Châu từ dưới chân","Looking up at the Oriental Pearl Tower from its base","从塔底仰拍东方明珠")
};

var PHOTOCREDIT = ["Ảnh: Wikimedia Commons, giấy phép tự do - bấm vào chú thích để xem tác giả và giấy phép. Ảnh tải từ máy chủ Wikimedia, vốn không truy cập được ở Trung Quốc đại lục; khi đó trang tự động ẩn ảnh và quay về hình minh hoạ vector.",
 "Photographs: Wikimedia Commons under free licences - click a caption for the author and licence. They load from Wikimedia's servers, which are not reachable from mainland China; there the page hides the photographs and falls back to the vector illustrations.",
 "图片：维基共享资源，自由许可——点击图注可查看作者与许可。图片从维基服务器加载，中国大陆无法访问；此时页面会自动隐藏照片，改用矢量插图。"];

function shotHTML(key){
  var s = SHOTS[key];
  if(!s) return "";
  return '<figure class="shot"><img loading="lazy" decoding="async" src="'+IU(s)+'" alt="'+key+'">'+
    '<figcaption><a href="'+CF+encodeURIComponent(s.f.replace(/ /g,"_"))+'" target="_blank" rel="noopener">'+T(s.c)+'</a></figcaption></figure>';
}
function heroHTML(city){
  var h = HERO[city];
  if(!h) return "";
  return '<figure class="hero"><img loading="eager" decoding="async" src="'+IU(h)+'" alt="'+city+'">'+
    '<figcaption><a href="'+CF+encodeURIComponent(h.f.replace(/ /g,"_"))+'" target="_blank" rel="noopener">'+T(h.c)+'</a></figcaption></figure>';
}

/* If a photo cannot load (mainland China, offline), drop it and let the
   vector illustration underneath show instead. */
document.addEventListener("error", function(e){
  var img = e.target;
  if(!img || img.tagName !== "IMG") return;
  var fig = img.closest(".shot, .hero");
  if(!fig) return;
  if(fig.classList.contains("hero")){
    var vec = fig.nextElementSibling;
    if(vec && vec.classList.contains("vecfallback")) vec.hidden = false;
  }
  fig.remove();
}, true);
