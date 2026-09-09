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

function tagHTML(s){
  if(!s.tag) return "";
  var cls = s.tag==="free" ? "tag" : "tag "+s.tag;
  var txt = s.tagx ? T(s.tagx) : (UI.tags[s.tag] ? T(UI.tags[s.tag]) : "");
  if(!txt) return "";
  var g = {free:"ticket", pay:"wallet", host:"food", ta:"users", md:"users"}[s.tag] || "ticket";
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
  if(g.intro) h += '<p style="font-size:.88rem;color:var(--ink-2);font-weight:300;margin-bottom:12px">'+T(g.intro)+'</p>';
  h += slotsHTML(g.slots) + '</div>';
  return h;
}

function calloutHTML(c){
  if(!has(c.p)) return "";
  var h = '<div class="callout" style="margin-top:24px"><h3>'+ic("warn")+T(c.h)+'</h3>';
  c.b.forEach(function(p){ h += '<p>'+T(p)+'</p>'; });
  if(c.table) h += tableHTML(c.table.head, c.table.rows, null, ' style="margin:4px 0"', 420);
  if(c.fix) h += '<p class="fix">'+T(c.fix)+'</p>';
  return h + '</div>';
}

function dayHTML(d){
  if(!has(d.p)) return "";
  var body = "";
  if(d.intro) body += '<p style="font-size:.91rem;color:var(--ink-2);max-width:64ch;font-weight:300">'+T(d.intro)+'</p>';
  body += slotsHTML(d.slots);
  if(d.legs) d.legs.forEach(function(g){ body += legHTML(g); });
  if(d.tail) body += slotsHTML(d.tail);
  if(d.callouts) d.callouts.forEach(function(c){ body += calloutHTML(c); });
  if(d.notes) d.notes.forEach(function(n){ body += noteHTML(n); });

  if(!body.replace(/<p [^>]*>[\s\S]*?<\/p>/,"").trim() && !d.slots) return "";

  var head = '<div class="dayhead">';
  if(d.icon) head += '<svg class="glyph" viewBox="0 0 48 48"><use href="#'+d.icon+'"/></svg>';
  head += '<h3>'+T(d.head)+(d.hosttag?'<span class="tag host">'+T(UI.tags.host)+'</span>':'')+'</h3></div>';

  return '<div class="day"><div class="daymark"><span class="dnum">'+d.n+'</span><span class="dmon">'+T(d.mon2?UI.mon2:UI.mon)+
    '</span><span class="ddow">'+T(UI.dow[d.dow])+'</span></div><div class="daybody">'+head+body+'</div></div>';
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

  /* header */
  out += '<header><div class="eyebrow kicker">'+T(UI.kicker)+'</div><h1>'+T(UI.title)+'</h1>'+
    '<p class="lede">'+T(UI.lede)+'</p>'+
    '<div class="meta"><span><b>'+T(UI.m1)+'</b></span><span>'+T(UI.m2)+'</span><span>'+T(UI.m3)+'</span></div>'+
    '<div class="note" style="margin-top:20px">'+T(UI.tz)+'</div></header>';

  /* who goes where */
  var tr = TRACKS.filter(function(t){ return has(t.p); });
  if(tr.length){
    out += '<section><div class="sec-head"><h2>'+ic("users","sec")+T(SEC.whogoes)+'</h2></div><div class="tracks">';
    tr.forEach(function(t){
      out += '<div class="track '+t.cls+'"><h3>'+T(t.h)+'</h3><div class="names">'+T(t.n)+'</div>';
      t.b.forEach(function(p){ out += '<p>'+T(p)+'</p>'; });
      out += '</div>';
    });
    out += '</div>';
    if(pf==="all"||pf==="ta") out += noteHTML(TRACKNOTE, ' style="margin-top:16px"');
    out += '</section>';
  }

  /* urgent */
  out += '<section><div class="sec-head"><span class="eyebrow">'+ic("alert","eb")+T(SEC.urgent)+'</span></div><div class="urgent">';
  URGENT.forEach(function(c){ out += '<div class="card"><div class="num">'+ic(c.ic||"alert")+c.n+'</div><h3>'+T(c.h)+'</h3><p>'+T(c.b)+'</p></div>'; });
  out += '</div></section>';

  /* booking */
  var rows = BOOKING.filter(function(r){ return has(r.p); }).map(function(r){ return [r.a, r.b, r.c]; });
  out += '<section><div class="sec-head"><h2>'+ic("calendar","sec")+T(SEC.booking)+'</h2></div>';
  var bh = '<div class="tablewrap"><table><thead><tr><th>'+T(BOOKHEAD[0])+'</th><th>'+T(BOOKHEAD[1])+'</th><th>'+T(BOOKHEAD[2])+'</th></tr></thead><tbody>';
  rows.forEach(function(r){ bh += '<tr><td>'+T(r[0])+'</td><td>'+T(r[1])+'</td><td class="when">'+T(r[2])+'</td></tr>'; });
  out += bh + '</tbody></table></div>' + noteHTML(BOOKNOTE, ' style="margin-top:16px"') + '</section>';

  /* cities and days */
  var cur = null, buf = "";
  function flush(){
    if(cur && buf){
      /* Hình minh hoạ vector chỉ hiện khi ảnh thật không tải được. Thành phố nào
         không có bản vẽ thì bỏ hẳn khối này, để không lòi ra một ô trống. */
      var ban = document.getElementById("ban-"+cur);
      var vec = ban ? '<div class="vecfallback" hidden>'+ban.innerHTML+
                      '<p class="figcap">'+T(UI.figcap[cur])+'</p></div>' : '';
      out += '<div class="city" id="'+cur+'"><div class="city-band"><h2>'+T(UI.cities[cur])+'</h2>'+
        '<span class="cn">'+({bj:"北京",sh:"上海",tj:"天津",sz:"深圳"}[cur]||"")+'</span>'+
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
    out += '<section><div class="sec-head"><h2>'+ic("wallet","sec")+T(SEC.budget)+'</h2><span class="eyebrow">1 CNY ≈ 3.950 ₫</span></div>'+
      '<p class="sec-note">'+T(BUD.note)+'</p>';
    if(pf!=="md"){
      out += tableHTML(BUD.t1head, BUD.t1, BUD.t1total) + noteHTML(BUD.n1,' style="margin-top:14px"') + noteHTML(BUD.n2,' style="margin-top:10px"');
      out += tableHTML(BUD.t2head, BUD.t2, BUD.t2total, ' style="margin-top:24px"');
      out += '<p class="sec-note" style="margin-top:18px">'+T(BUD.concl)+'</p><div class="levers">';
      BUD.levers.forEach(function(l){ out += '<div class="lever"><p>'+T(l[0])+'</p><span class="save">'+ic("down")+l[1]+'</span></div>'; });
      out += '</div>';
    }
    if(pf!=="gb"){
      out += '<div class="sec-head" style="margin-top:52px"><h3 style="font-size:1.25rem">'+T(BUD.mdHead)+'</h3><span class="eyebrow">'+T(BUD.mdEyebrow)+'</span></div>'+
        '<p class="sec-note">'+T(BUD.mdNote)+'</p>';
      var t3 = tableHTML(BUD.t3head, BUD.t3, BUD.t3total);
      t3 = t3.replace('</tbody>','<tr><td style="color:var(--ink-3)">'+T(BUD.t3extra[0])+'</td><td class="num" style="color:var(--ink-3)">'+BUD.t3extra[1]+'</td><td class="num" style="color:var(--ink-3)">'+BUD.t3extra[2]+'</td></tr></tbody>');
      out += t3;
    }
    out += '</section>';
  }

  if(pf==="all"||pf==="ta"){
    out += '<section><div class="sec-head"><h2>'+ic("wallet","sec")+T(SEC.budgetTA)+'</h2><span class="eyebrow">21–26/10</span></div>'+
      '<p class="sec-note">'+T(BUD.taNote)+'</p>'+
      tableHTML(BUD.t3head, BUD.t4, BUD.t4total) + noteHTML(BUD.n4,' style="margin-top:14px"') + '</section>';
  }

  /* prep */
  out += '<section><div class="sec-head"><h2>'+ic("luggage","sec")+T(SEC.prep)+'</h2></div><div class="grid2">';
  PREP.forEach(function(p){
    out += '<div class="panel"><h3>'+ic(p.ic||"info")+T(p.h)+'</h3><ul>';
    p.li.forEach(function(x){ out += '<li>'+T(x)+'</li>'; });
    out += '</ul></div>';
  });
  out += '</div></section>';

  /* footer */
  out += '<footer><p>'+T(FOOT)+'</p><p style="margin-top:8px">'+T(PHOTOCREDIT)+'</p><ul>';
  LINKS.forEach(function(l){ out += '<li><a href="'+l[0]+'" target="_blank" rel="noopener noreferrer">'+T(l[1])+'</a></li>'; });
  out += '</ul></footer>';

  document.getElementById("app").innerHTML = out;
  openLinksInNewTab();
  window.scrollTo({top:0});
}

/* ---------- controls ---------- */
function buildBar(){
  var bar = document.getElementById("bar");
  var langs = [["VI","vi"],["EN","en"],["中文","zh"]];
  var people = [["all",UI.all],["gb",UI.gb],["md",UI.md],["ta",UI.ta]];
  function seg(items, active, cb, cls){
    var w = el("div","seg "+(cls||""));
    items.forEach(function(it){
      var b = el("button", it[0]===active ? "on" : "", it[1]);
      b.type="button";
      b.onclick=function(){ cb(it[0]); };
      w.appendChild(b);
    });
    return w;
  }
  bar.innerHTML = "";
  var g1 = el("div","barg");
  g1.appendChild(el("span","barlab", ic("lang")+T(UI.lang)));
  g1.appendChild(seg(langs.map(function(l,i){return [i,l[0]];}), li, function(v){ li=v; save(); buildBar(); render(); }));
  var g2 = el("div","barg");
  g2.appendChild(el("span","barlab", ic("users")+T(UI.who)));
  g2.appendChild(seg(people.map(function(p){return [p[0], T(p[1])];}), pf, function(v){ pf=v; save(); buildBar(); render(); }, "wide"));
  var g3 = el("div","barg");
  var pb = el("button","pdfbtn", ic("filedown")+T(UI.print));
  pb.type="button"; pb.title = T(UI.printhint);
  pb.onclick = function(){ exportPDF(pb); };
  g3.appendChild(pb);
  bar.appendChild(g1); bar.appendChild(g2); bar.appendChild(g3);
}

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
  btn.innerHTML = ic("filedown")+T(UI.printing); btn.disabled = true;
  var left = pending.length;
  function tick(){ if(--left <= 0) setTimeout(go, 250); }
  pending.forEach(function(i){ i.addEventListener("load", tick, {once:true}); i.addEventListener("error", tick, {once:true}); });
  setTimeout(go, 8000);   /* never leave the button stuck */
}
function save(){ try{ localStorage.setItem("gcd4f", li+"|"+pf); }catch(e){} }
function load(){ try{ var v=(localStorage.getItem("gcd4f")||"").split("|"); if(v.length===2){ li=+v[0]||0; pf=v[1]||"all"; } }catch(e){} }

load(); buildBar(); render();
