/* ================= RENDER ================= */
function esc(x){ return x; }

/* Lucide icons, referenced from the inline sprite */
function ic(name, cls){ return '<svg class="ic'+(cls?' '+cls:'')+'" aria-hidden="true"><use href="#i-'+name+'"/></svg>'; }

/* Pick a transport icon from the Vietnamese wording of a move row */
function moveIcon(txt){
  var t = (txt||"").toLowerCase();
  if(/phà|ferry|轮渡/.test(t))                         return "ship";
  if(/xe đạp|bike|单车/.test(t))                        return "bike";
  if(/xe đưa đón|shuttle|接驳/.test(t))                 return "bus";
  if(/taxi|didi|滴滴|打车|ô tô/.test(t))                return "car";
  if(/bay|máy bay|plane|航班/.test(t))                  return "plane";
  if(/đi bộ|walk|步行/.test(t))                         return "walk";
  return "train";
}

var CITYCN = {bj:"北京", sh:"上海", tj:"天津", sz:"深圳"};

function tagHTML(s){
  if(!s.tag) return "";
  var cls = s.tag==="free" ? "tag" : "tag "+s.tag;
  var txt = s.tagx ? T(s.tagx) : (UI.tags[s.tag] ? T(UI.tags[s.tag]) : "");
  if(!txt) return "";
  var g = {free:"ticket", pay:"wallet", host:"food", bnu:"calendar", ta:"users", md:"users"}[s.tag] || "ticket";
  return '<span class="'+cls+'">'+ic(g)+txt+'</span>';
}

function slotHTML(s){
  if(!has(s.p)) return "";
  if(s.m) return '<div class="slot move"><div class="t">'+T(s.t)+'</div><div class="a">'+ic(moveIcon(s.a&&s.a[0]),'mv')+'<span>'+T(s.a)+'</span></div></div>';
  var a = '<b>'+T(s.b)+'</b>' + tagHTML(s);
  if(s.dur) a += '<span class="dur">'+T(s.dur)+'</span>';
  if(s.d)   a += '<span class="d">'+T(s.d)+'</span>';
  if(s.b)   a += shotHTML(s.b[0]);
  return '<div class="slot"><div class="t">'+T(s.t)+'</div><div class="a">'+a+'</div></div>';
}

function slotsHTML(arr){
  if(!arr) return "";
  var out = arr.map(slotHTML).join("");
  return out ? '<div class="slots">'+out+'</div>' : "";
}

function noteHTML(n, extra){ return '<div class="note"'+(extra||"")+'>'+ic("info","nt")+'<span>'+T(n)+'</span></div>'; }

function secHead(icon, title, extra, tone){
  return '<div class="sec-head"><h2><span class="sic'+(tone?' '+tone:'')+'">'+ic(icon)+'</span>'+title+'</h2>'+(extra||'')+'</div>';
}

function tableHTML(head, rows, total, extra, minw){
  var h = '<div class="tablewrap"'+(extra||"")+'><table'+(minw?' style="min-width:'+minw+'px"':'')+'><thead><tr>';
  head.forEach(function(c,i){ h += '<th'+(i>0?' class="num"':'')+'>'+T(c)+'</th>'; });
  h += '</tr></thead><tbody>';
  rows.forEach(function(r){
    h += '<tr>';
    r.forEach(function(c,i){
      var v = (typeof c === "string") ? c : T(c);
      h += (i>0? '<td class="num">':'<td>') + v + '</td>';
    });
    h += '</tr>';
  });
  if(total){
    h += '<tr class="total">';
    total.forEach(function(c,i){ var v=(typeof c==="string")?c:T(c); h += (i>0?'<td class="num">':'<td>')+v+'</td>'; });
    h += '</tr>';
  }
  return h + '</tbody></table></div>';
}

function legHTML(g){
  if(!has(g.p)) return "";
  var h = '<div class="leg '+g.cls+'"><div class="leg-head"><h4>'+T(g.h)+'</h4><span class="who">'+ic("users")+T(g.who)+'</span></div>';
  if(g.intro) h += '<p class="intro">'+T(g.intro)+'</p>';
  h += slotsHTML(g.slots) + '</div>';
  return h;
}

function calloutHTML(c){
  if(!has(c.p)) return "";
  var h = '<div class="callout"><h3>'+ic("warn")+T(c.h)+'</h3>';
  c.b.forEach(function(p){ h += '<p>'+T(p)+'</p>'; });
  if(c.table) h += tableHTML(c.table.head, c.table.rows, null, ' style="margin:4px 0"', 420);
  if(c.fix) h += '<p class="fix">'+T(c.fix)+'</p>';
  return h + '</div>';
}

function dayHTML(d){
  if(!has(d.p)) return "";

  /* Đoạn mở đầu không tính là nội dung. Một ngày mà mọi mốc giờ, nhánh và hộp
     cảnh báo đều bị bộ lọc người loại hết thì phải biến mất hẳn, chứ không để
     lại một ngày trống chỉ có đoạn mở đầu. */
  var content = slotsHTML(d.slots);
  if(d.legs) d.legs.forEach(function(g){ content += legHTML(g); });
  if(d.tail) content += slotsHTML(d.tail);
  if(d.callouts) d.callouts.forEach(function(c){ content += calloutHTML(c); });
  if(d.notes) d.notes.forEach(function(n){ content += noteHTML(n); });
  if(!content.trim()) return "";

  var body = "";
  if(d.intro) body += '<p class="intro">'+T(d.intro)+'</p>';
  body += content;

  var head = '<div class="dayhead">';
  if(d.icon) head += '<svg class="glyph" viewBox="0 0 48 48" aria-hidden="true"><use href="#'+d.icon+'"/></svg>';
  head += '<h3>'+T(d.head)+'</h3>';
  if(d.hosttag) head += '<span class="tag host">'+ic("food")+T(UI.tags.host)+'</span>';
  head += '</div>';

  return '<article class="day" id="d-'+d.city+'-'+d.n+'" data-day="'+d.city+'-'+d.n+'">'+
    '<div class="daymark"><span class="dnum">'+d.n+'</span><span class="dmon">'+T(d.mon2?UI.mon2:UI.mon)+
    '</span><span class="ddow">'+T(UI.dow[d.dow])+'</span></div><div class="daybody">'+head+body+'</div></article>';
}

/* Every link that leaves this page opens in a new tab, so the plan itself
   is never navigated away from. In-page anchors keep the default behaviour. */
function openLinksInNewTab(root){
  var scope = root || document.getElementById("app");
  if(!scope) return;
  var links = scope.querySelectorAll('a[href]');
  for(var i=0;i<links.length;i++){
    var h = links[i].getAttribute("href") || "";
    if(h.charAt(0) === "#") continue;
    links[i].setAttribute("target","_blank");
    links[i].setAttribute("rel","noopener noreferrer");
  }
}

function render(){
  document.documentElement.lang = ["vi","en","zh"][li];
  var out = "";

  /* hero */
  out += '<header class="hero-card" id="overview" data-spy="overview"><div class="hero-txt">'+
    '<div class="kicker">'+ic("plane")+T(UI.kicker)+'</div><h1>'+T(UI.title)+'</h1>'+
    '<p class="lede">'+T(UI.lede)+'</p>'+
    '<div class="chips"><span class="chip">'+ic("calendar")+T(UI.m1)+'</span><span class="chip">'+ic("users")+T(UI.m2)+'</span><span class="chip">'+ic("wallet")+T(UI.m3)+'</span></div>'+
    '</div><img class="hero-mascot" src="{{asset:mascot-planning.webp}}" alt="" aria-hidden="true"></header>'+
    noteHTML(UI.tz, ' style="margin-top:14px"');

  /* who goes where */
  var tr = TRACKS.filter(function(t){ return has(t.p); });
  if(tr.length){
    out += '<section id="whogoes" data-spy="whogoes">'+secHead("users", T(SEC.whogoes))+'<div class="tracks">';
    tr.forEach(function(t){
      out += '<div class="track '+t.cls+'"><h3>'+T(t.h)+'</h3><div class="names">'+ic("calendar")+T(t.n)+'</div>';
      t.b.forEach(function(p){ out += '<p>'+T(p)+'</p>'; });
      out += '</div>';
    });
    out += '</div>';
    if(pf==="all"||pf==="ta") out += noteHTML(TRACKNOTE, ' style="margin-top:14px"');
    out += '</section>';
  }

  /* urgent */
  out += '<section id="urgent" data-spy="urgent">'+secHead("alert", T(SEC.urgent), "", "warn")+'<div class="urgent">';
  URGENT.forEach(function(c){ out += '<div class="card"><div class="num"><span class="sic warn">'+ic(c.ic||"alert")+'</span>'+c.n+'</div><h3>'+T(c.h)+'</h3><p>'+T(c.b)+'</p></div>'; });
  out += '</div></section>';

  /* booking */
  var rows = BOOKING.filter(function(r){ return has(r.p); });
  out += '<section id="booking" data-spy="booking">'+secHead("calendar", T(SEC.booking));
  var bh = '<div class="tablewrap"><table><thead><tr><th>'+T(BOOKHEAD[0])+'</th><th>'+T(BOOKHEAD[1])+'</th><th>'+T(BOOKHEAD[2])+'</th></tr></thead><tbody>';
  rows.forEach(function(r){ bh += '<tr><td>'+T(r.a)+'</td><td>'+T(r.b)+'</td><td class="when"><span>'+T(r.c)+'</span></td></tr>'; });
  out += bh + '</tbody></table></div>' + noteHTML(BOOKNOTE, ' style="margin-top:14px"') + '</section>';

  /* cities and days */
  var cur = null, buf = "";
  function flush(){
    if(cur && buf){
      /* Hình minh hoạ vector chỉ hiện khi ảnh thật không tải được. Thành phố nào
         không có bản vẽ thì bỏ hẳn khối này, để không lòi ra một ô trống. */
      var ban = document.getElementById("ban-"+cur);
      var vec = ban ? '<div class="vecfallback" hidden>'+ban.innerHTML+
                      '<p class="figcap">'+T(UI.figcap[cur])+'</p></div>' : '';
      out += '<div class="city" id="'+cur+'" data-spy="'+cur+'"><div class="city-band"><h2>'+T(UI.cities[cur])+'</h2>'+
        '<span class="cn">'+(CITYCN[cur]||"")+'</span>'+
        '<span class="span">'+ic("pin")+T(UI.cityspan[cur])+'</span></div>'+
        heroHTML(cur)+ vec +
        '<p class="city-intro">'+T(CITYINTRO[cur])+'</p>'+ buf +'</div>';
    }
    buf = "";
  }
  DAYS.forEach(function(d){
    var h = dayHTML(d);
    if(!h) return;
    if(d.city !== cur){ flush(); cur = d.city; }
    buf += h;
  });
  flush();

  /* budget */
  if(pf==="all"||pf==="gb"||pf==="md"){
    out += '<section id="budget" data-spy="budget">'+secHead("wallet", T(SEC.budget), '<span class="eyebrow">1 CNY ≈ 3.950 ₫</span>')+
      '<p class="sec-note">'+T(BUD.note)+'</p>';
    if(pf!=="md"){
      out += tableHTML(BUD.t1head, BUD.t1, BUD.t1total) + noteHTML(BUD.n1,' style="margin-top:14px"') + noteHTML(BUD.n2);
      out += tableHTML(BUD.t2head, BUD.t2, BUD.t2total, ' style="margin-top:20px"');
      out += '<p class="sec-note" style="margin-top:18px">'+T(BUD.concl)+'</p><div class="levers">';
      BUD.levers.forEach(function(l){ out += '<div class="lever"><p>'+T(l[0])+'</p><span class="save">'+ic("down")+l[1]+'</span></div>'; });
      out += '</div>';
    }
    if(pf!=="gb"){
      out += '<div class="subhead"><h3>'+T(BUD.mdHead)+'</h3><span class="eyebrow">'+T(BUD.mdEyebrow)+'</span></div>'+
        '<p class="sec-note">'+T(BUD.mdNote)+'</p>';
      var t3 = tableHTML(BUD.t3head, BUD.t3, BUD.t3total);
      t3 = t3.replace('</tbody>','<tr><td class="muted">'+T(BUD.t3extra[0])+'</td><td class="num muted">'+BUD.t3extra[1]+'</td><td class="num muted">'+BUD.t3extra[2]+'</td></tr></tbody>');
      out += t3;
    }
    out += '</section>';
  }

  if(pf==="all"||pf==="ta"){
    var tid = (pf==="ta") ? "budget" : "budget-ta";
    out += '<section id="'+tid+'" data-spy="'+tid+'">'+secHead("wallet", T(SEC.budgetTA), '<span class="eyebrow">21–26/10</span>')+
      '<p class="sec-note">'+T(BUD.taNote)+'</p>'+
      tableHTML(BUD.t3head, BUD.t4, BUD.t4total) + noteHTML(BUD.n4,' style="margin-top:14px"') + '</section>';
  }

  /* prep */
  out += '<section id="prep" data-spy="prep">'+secHead("luggage", T(SEC.prep))+'<div class="grid2">';
  PREP.forEach(function(p){
    out += '<div class="panel"><h3><span class="sic">'+ic(p.ic||"info")+'</span>'+T(p.h)+'</h3><ul>';
    p.li.forEach(function(x){ out += '<li>'+T(x)+'</li>'; });
    out += '</ul></div>';
  });
  out += '</div></section>';

  /* footer */
  out += '<footer><img class="mascot" src="{{asset:mascot-excellent.webp}}" alt="" aria-hidden="true"><div><p>'+T(FOOT)+'</p><p>'+T(PHOTOCREDIT)+'</p><ul>';
  LINKS.forEach(function(l){ out += '<li><a href="'+l[0]+'" target="_blank" rel="noopener noreferrer">'+T(l[1])+'</a></li>'; });
  out += '</ul></div></footer>';

  document.getElementById("app").innerHTML = out;
  openLinksInNewTab();
  window.scrollTo({top:0});
}

/* ---------- sidebar (desktop) · header + bottom bar (mobile) ---------- */
function isDark(){
  var t = document.documentElement.getAttribute("data-theme");
  if(t) return t === "dark";
  return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
}
function toggleTheme(){
  var next = isDark() ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try{ localStorage.setItem("gcd4f-theme", next); }catch(e){}
  buildBar();
}

function buildBar(){
  var side = document.getElementById("side");
  var langs = ["VI","EN","中文"];
  var people = [["all",UI.all],["gb",UI.gb],["md",UI.md],["ta",UI.ta]];
  var themeIc = isDark() ? "sun" : "moon";

  var h = '<div class="side-top"><div class="brand">'+
      '<img class="logo-l" src="{{asset:logo-light.webp}}" alt="Gendemy"><img class="logo-d" src="{{asset:logo-dark.webp}}" alt="Gendemy">'+
      '<span class="sub">'+T(UI.kicker)+'</span></div>';
  h += '<div class="side-group lang"><span class="side-label">'+ic("lang")+T(UI.lang)+'</span><div class="seg">';
  langs.forEach(function(l,i){ h += '<button type="button" data-lang="'+i+'" class="'+(i===li?"on":"")+'">'+l+'</button>'; });
  h += '</div></div>'+
    '<div class="m-actions"><button type="button" class="btn btn-icon" data-act="theme" title="'+T(UI.theme)+'" aria-label="'+T(UI.theme)+'">'+ic(themeIc)+'</button>'+
      '<button type="button" class="btn btn-icon" data-act="pdf" title="'+T(UI.printhint)+'" aria-label="'+T(UI.print)+'">'+ic("filedown")+'</button></div></div>';

  h += '<div class="side-group"><span class="side-label">'+ic("users")+T(UI.who)+'</span><div class="people">';
  people.forEach(function(p){ h += '<button type="button" data-pf="'+p[0]+'" class="'+(p[0]===pf?"on":"")+'">'+ic(p[0]==="all"?"users":"pin")+T(p[1])+'</button>'; });
  h += '</div></div>';

  /* mục lục dựng từ chính những gì đang hiện trên trang */
  h += '<div class="side-group" style="flex:1"><span class="side-label">'+ic("route")+T(UI.toc)+'</span><nav class="side-nav">';
  function link(id, icon, label){ return '<a href="#'+id+'" data-nav="'+id+'">'+ic(icon)+'<span>'+label+'</span></a>'; }
  h += link("overview","home",T(NAV.overview));
  if(document.getElementById("whogoes")) h += link("whogoes","users",T(SEC.whogoes));
  h += link("urgent","alert",T(SEC.urgent));
  h += link("booking","calendar",T(SEC.booking));
  [].forEach.call(document.querySelectorAll("#app .city"), function(c){
    h += '<a href="#'+c.id+'" data-nav="'+c.id+'" style="--accent:var(--c-'+c.id+')"><span class="city-dot"></span><span>'+T(UI.cities[c.id])+'</span></a><div class="daychips">';
    [].forEach.call(c.querySelectorAll(".day"), function(d){ h += '<a href="#'+d.id+'" data-nav="'+d.id+'">'+d.id.split("-")[2]+'</a>'; });
    h += '</div>';
  });
  if(document.getElementById("budget")) h += link("budget","wallet",T(SEC.budget));
  if(document.getElementById("budget-ta")) h += link("budget-ta","wallet",T(SEC.budgetTA));
  h += link("prep","luggage",T(SEC.prep));
  h += '</nav></div>';

  h += '<div class="side-foot"><button type="button" class="btn btn-outline" data-act="theme">'+ic(themeIc)+T(UI.theme)+'</button>'+
    '<button type="button" class="btn btn-primary" data-act="pdf" title="'+T(UI.printhint)+'">'+ic("filedown")+T(UI.print)+'</button></div>';

  side.innerHTML = h;

  /* bottom bar trên mobile */
  var firstCity = document.querySelector("#app .city");
  var bb = [["overview","home",NAV.overview],[firstCity?firstCity.id:"booking","route",NAV.itin],["booking","calendar",NAV.book],
            [document.getElementById("budget")?"budget":"prep","wallet",NAV.budget],["prep","luggage",NAV.prep]];
  document.getElementById("bbar").innerHTML = bb.map(function(b){
    return '<a href="#'+b[0]+'" data-nav="'+b[0]+'"'+(b[1]==="route"?' data-itin="1"':'')+'>'+ic(b[1])+'<span>'+T(b[2])+'</span></a>';
  }).join("");

  side.onclick = function(e){
    var b = e.target.closest("button");
    if(!b) return;
    if(b.hasAttribute("data-lang")){ li = +b.getAttribute("data-lang"); save(); refresh(); }
    else if(b.hasAttribute("data-pf")){ pf = b.getAttribute("data-pf"); save(); refresh(); }
    else if(b.getAttribute("data-act")==="theme") toggleTheme();
    else if(b.getAttribute("data-act")==="pdf") exportPDF(b);
  };
  spy();
}

/* Tô sáng mục đang đọc trong sidebar và bottom bar */
var spyObs = null;
function spy(){
  if(spyObs) spyObs.disconnect();
  if(!("IntersectionObserver" in window)) return;
  var targets = [].slice.call(document.querySelectorAll("#app [data-spy], #app .day"));
  spyObs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting) return;
      var id = en.target.id, isDay = en.target.classList.contains("day");
      var group = isDay ? '.daychips a' : '.side-nav > a, .bbar a';
      [].forEach.call(document.querySelectorAll(group), function(a){ a.classList.toggle("on", a.getAttribute("data-nav")===id); });
      if(!isDay && !en.target.classList.contains("city"))
        [].forEach.call(document.querySelectorAll('.daychips a'), function(a){ a.classList.remove("on"); });
      if(isDay){
        /* đang ở trong một ngày thì mục thành phố chứa nó sáng lên, và nút Lịch trình ở bottom bar cũng vậy */
        var city = id.split("-")[1];
        [].forEach.call(document.querySelectorAll('.side-nav > a'), function(a){ a.classList.toggle("on", a.getAttribute("data-nav")===city); });
        [].forEach.call(document.querySelectorAll('.bbar a'), function(a){ a.classList.toggle("on", a.hasAttribute("data-itin")); });
      }
    });
  }, {rootMargin:"-35% 0px -60% 0px"});
  targets.forEach(function(t){ spyObs.observe(t); });
}

function refresh(){ render(); buildBar(); }

/* Images are lazy-loaded, so anything not yet scrolled past would be missing
   from the PDF. Force every one to load and settle before opening the dialog. */
function exportPDF(btn){
  var imgs = [].slice.call(document.querySelectorAll("#app img"));
  var pending = imgs.filter(function(i){ return !i.complete; });
  imgs.forEach(function(i){ i.loading = "eager"; });
  var label = btn.innerHTML, done = false;
  function go(){
    if(done) return; done = true;
    btn.innerHTML = label; btn.disabled = false;
    window.print();
  }
  if(!pending.length){ go(); return; }
  btn.innerHTML = ic("filedown")+(btn.classList.contains("btn-icon")?"":T(UI.printing)); btn.disabled = true;
  var left = pending.length;
  function tick(){ if(--left <= 0) setTimeout(go, 250); }
  pending.forEach(function(i){ i.addEventListener("load", tick, {once:true}); i.addEventListener("error", tick, {once:true}); });
  setTimeout(go, 8000);   /* never leave the button stuck */
}
function save(){ try{ localStorage.setItem("gcd4f", li+"|"+pf); }catch(e){} }
function load(){ try{ var v=(localStorage.getItem("gcd4f")||"").split("|"); if(v.length===2){ li=+v[0]||0; pf=v[1]||"all"; } }catch(e){} }

/* đổi giao diện theo hệ điều hành khi người xem chưa tự chọn */
if(window.matchMedia){
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  var onMq = function(){ if(!document.documentElement.getAttribute("data-theme")) buildBar(); };
  if(mq.addEventListener) mq.addEventListener("change", onMq); else if(mq.addListener) mq.addListener(onMq);
}

load(); refresh();
