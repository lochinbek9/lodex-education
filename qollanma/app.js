// Roboqo'llanma — sahifalar: #/ (sinflar), #/2 (sinf rejasi), #/2/7 (dars)
(function () {
  const Q = window.QOLLANMA;
  const app = document.getElementById("app");
  const crumbs = document.getElementById("crumbs");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // Matn ichida `blok nomi` yozilsa, blok ko'rinishida chiqadi
  const rich = (s) => esc(s).replace(/`([^`]+)`/g, '<span class="blk">$1</span>');

  const store = {
    get(k, d) { try { const v = localStorage.getItem("rq:" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("rq:" + k, JSON.stringify(v)); } catch (e) { /* saqlab bo'lmadi — davom etamiz */ } }
  };
  const doneKey = (g) => "done:" + g;
  const ytId = (s) => { const m = String(s).match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/) || String(s).match(/^([\w-]{11})$/); return m ? m[1] : null; };

  const progHtml = (prog) => prog.map((c) => `<div class="chain"><div class="ct">${esc(c.t)}</div><div class="blocks">${c.b.map((x) => `<span class="pb pb-${x[0]}">${esc(x.slice(2))}</span>`).join("")}</div></div>`).join("");
  const topicHtml = (t, big) => `<div class="tcard${big ? " big" : ""}${t.img ? " hasimg" : ""}"><div class="te">${t.e}</div><div><h3>${esc(t.h)}</h3><p>${rich(t.p)}</p>
    ${t.q ? `<details class="think"><summary>🤔 O'ylab ko'r: ${esc(t.q)}</summary><p>${esc(t.a)}</p></details>` : ""}</div>
    ${t.img ? `<figure class="timg"><img src="${imgUrl(t.img, big ? 960 : 480)}" alt="" loading="lazy" onerror="var c=this.closest('.tcard');c.classList.remove('hasimg');this.closest('figure').remove()"><a class="credit" target="_blank" rel="noopener" href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(t.img.f)}">${esc(t.img.a)} · ${esc(t.img.lic)}</a></figure>` : ""}</div>`;

  // Dars rasmi (Wikimedia Commons). Internet bo'lmasa yoki rasm ochilmasa, blok yashiriladi.
  const imgUrl = (im, w) => "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(im.f) + "?width=" + w;
  const figHtml = (im, cls) => `<figure class="fig ${cls || ""}"><img src="${imgUrl(im, 960)}" alt="${esc(im.c)}" loading="lazy" onerror="var f=this.closest('figure');if(f.classList.contains('s-fig')){f.classList.add('noimg');this.remove()}else f.remove()">
    <figcaption><span>${esc(im.c)}</span> <a class="credit" target="_blank" rel="noopener" href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(im.f)}">Rasm: ${esc(im.a)} · ${esc(im.lic)} · Wikimedia Commons</a></figcaption></figure>`;

  // To'liq ekranli taqdimot: dars ma'lumotidan slaydlar yig'iladi
  function present(gid, l, m) {
    const S = [];
    S.push(`<div class="s-title"><div class="s-over">${esc(m.title)} · ${l.n}-dars</div><h1>${esc(l.t)}</h1></div>`);
    if (l.img) S.push(figHtml(l.img, "s-fig"));
    S.push(`<h2>Bugun darsda</h2><ul class="s-list">${l.out.map((x) => `<li>${rich(x)}</li>`).join("")}</ul>`);
    (l.topic || []).forEach((t) => S.push(topicHtml(t, true)));
    S.push(`<h2>Bizga kerak bo'ladi</h2><ul class="s-list">${l.need.map((x) => `<li>${rich(x)}</li>`).join("")}</ul>`);
    for (let i = 0; i < l.steps.length; i += 3) {
      S.push(`<h2>${esc(l.pt || "Amaliy ish")} <small>${i + 1}–${Math.min(i + 3, l.steps.length)}-qadam</small></h2><ol class="s-list steps" style="counter-reset:s ${i}">${l.steps.slice(i, i + 3).map((x) => `<li>${rich(x)}</li>`).join("")}</ol>`);
    }
    if (l.prog) S.push(`<h2>Dasturimiz</h2><div class="prog big">${progHtml(l.prog)}</div>`);
    if (l.extra) S.push(`<h2>⭐ Tez tugatganlar uchun</h2><ul class="s-list">${l.extra.map((x) => `<li>${rich(x)}</li>`).join("")}</ul>`);
    l.ask.forEach((q, i) => S.push(`<div class="s-over">Savol-javob · ${i + 1} / ${l.ask.length}</div><h2 class="s-q">${rich(q[0])}</h2><button class="btn primary s-rev">Javobni ko'rsatish</button><p class="s-ans" hidden>${rich(q[1])}</p>`));
    l.quiz.forEach((q, i) => {
      const opts = [q[1], q[2], q[3]].map((o, k) => ({ o, ok: k === 0 })).sort(() => Math.random() - 0.5);
      S.push(`<div class="s-over">Test · ${i + 1} / ${l.quiz.length}</div><h2 class="s-q">${esc(q[0])}</h2><div class="opts s-opts">${opts.map((x, k) => `<button class="opt" data-ok="${x.ok ? 1 : 0}"><b>${"ABC"[k]}</b> ${esc(x.o)}</button>`).join("")}</div>`);
    });
    S.push(`<h2>🏠 Uy vazifasi</h2><ul class="s-list">${l.hw.map((x) => `<li>${rich(x)}</li>`).join("")}</ul>`);
    S.push(`<div class="s-title"><div style="font-size:1.6em">👏</div><h1>Barakalla!</h1><p>To'plamni yig'ishtiramiz va keyingi darsda ko'rishamiz.</p></div>`);

    let i = 0;
    const ov = document.createElement("div");
    ov.className = "deck"; ov.style.setProperty("--mc", `var(--${m.color})`);
    ov.setAttribute("role", "dialog"); ov.setAttribute("aria-label", "Taqdimot");
    ov.innerHTML = `<div class="slide" aria-live="polite"></div>
      <div class="dbar"><button class="btn d-prev" aria-label="Oldingi slayd">←</button><span class="d-n"></span><button class="btn d-next" aria-label="Keyingi slayd">→</button>
      <button class="btn d-full">⛶ To'liq ekran</button><button class="btn d-close">✕ Yopish</button></div>`;
    const sl = ov.querySelector(".slide");
    const show = () => {
      sl.innerHTML = S[i]; ov.querySelector(".d-n").textContent = `${i + 1} / ${S.length}`;
      ov.querySelector(".d-prev").disabled = i === 0; ov.querySelector(".d-next").disabled = i === S.length - 1;
      const rv = sl.querySelector(".s-rev"); if (rv) rv.onclick = () => { sl.querySelector(".s-ans").hidden = false; rv.remove(); };
      sl.querySelectorAll(".s-opts .opt").forEach((b) => b.onclick = () => sl.querySelectorAll(".s-opts .opt").forEach((x) => { x.disabled = true; if (x.dataset.ok === "1") x.classList.add("right"); else if (x === b) x.classList.add("wrong"); }));
    };
    const go = (d) => { const n = i + d; if (n >= 0 && n < S.length) { i = n; show(); } };
    const close = () => { document.removeEventListener("keydown", key); if (document.fullscreenElement) document.exitFullscreen(); ov.remove(); document.body.style.overflow = ""; };
    const key = (e) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); go(1); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(-1); }
      else if (e.key === "Escape") close();
    };
    ov.querySelector(".d-prev").onclick = () => go(-1);
    ov.querySelector(".d-next").onclick = () => go(1);
    ov.querySelector(".d-close").onclick = close;
    ov.querySelector(".d-full").onclick = () => { if (document.fullscreenElement) document.exitFullscreen(); else if (ov.requestFullscreen) ov.requestFullscreen().catch(() => {}); };
    document.addEventListener("keydown", key);
    document.body.appendChild(ov); document.body.style.overflow = "hidden"; show();
    ov.querySelector(".d-next").focus();
  }

  function home() {
    crumbs.innerHTML = "";
    document.title = "Roboqo'llanma — metodik qo'llanma";
    app.innerHTML = `
      <section class="hero">
        <div><h1>Robototexnika darslari uchun metodik qo'llanma</h1>
        <p>Har bir sinf uchun tayyor dars rejalari, qadam-baqadam amaliy qo'llanmalar, savollar, testlar, interaktiv o'yinlar va video namunalar. Sinfni tanlang va darsni boshlang.</p></div>
        <div class="bot" aria-hidden="true">🤖</div>
      </section>
      <div class="res-banner">
        <div class="rb-icon">📚</div>
        <div class="rb-text">
          <h3>Mentorlar va o'quvchilar uchun kutubxona</h3>
          <p>Darslarni samarali tashkil etish uchun xalqaro va milliy metodik qo'llanmalar, sara kitoblar, video darslar hamda simulyatorlar to'plami.</p>
        </div>
        <a class="btn primary" href="#/resurslar">Resurslarni ko'rish →</a>
      </div>
      <div class="sec">Sinflar</div>
      <div class="grid">${Q.list.map((s) => {
        const g = Q.grades[s.id];
        if (!g) return `<div class="card off"><div class="big">${s.id}-sinf</div><div class="sub">${esc(s.tools)}</div><p><span class="pill">Tez orada</span></p></div>`;
        const d = store.get(doneKey(s.id), []).length;
        return `<a class="card" href="#/${s.id}"><div class="big">${s.id}-sinf</div><div class="sub">${esc(s.tools)}</div><p><span class="pill on">${g.lessons.length} ta dars tayyor</span> ${d ? `<span class="pill">${d} tasi o'tilgan</span>` : ""}</p></a>`;
      }).join("")}</div>
      <div class="sec">Yo'nalishlar</div>
      <div class="tools">
        <div class="tool"><b>🤖 Robototexnika fani</b><span>Robot nima, qismlari, algoritm tushunchasi</span></div>
        <div class="tool"><b>🧱 LEGO WeDo 2.0</b><span>Yig'ish, motor va datchiklar, birinchi dasturlar</span></div>
        <div class="tool"><b>🐱 Scratch</b><span>Blokli dasturlash, animatsiya va o'yinlar</span></div>
        <div class="tool"><b>📐 Tinkercad</b><span>3D modellash va sxemalar — yuqori sinflarda</span></div>
        <div class="tool"><b>⚡ Arduino</b><span>Elektronika va kod — yuqori sinflarda</span></div>
      </div>`;
  }

  function grade(gid) {
    const g = Q.grades[gid];
    if (!g) return home();
    const done = store.get(doneKey(gid), []);
    crumbs.innerHTML = `<a href="#/">Sinflar</a> › ${gid}-sinf`;
    document.title = `${gid}-sinf — Roboqo'llanma`;
    const pct = Math.round((done.length / g.lessons.length) * 100);
    app.innerHTML = `
      <div class="ghead"><div><h1>${esc(g.title)}</h1><p>${esc(g.desc)}</p></div>
      <button class="btn noprint" onclick="window.print()">🖨 Chop etish</button></div>
      <div class="stats">${g.stats.map((s) => `<div class="stat"><b>${esc(s[0])}</b>${esc(s[1])}</div>`).join("")}
        <div class="stat"><b>${done.length}/${g.lessons.length}</b>dars o'tildi</div></div>
      <div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>
      ${g.modules.map((m) => `
        <section class="mod" style="--mc:var(--${m.color})">
          <h2><span class="dot"></span>${esc(m.title)}</h2>
          <p class="mdesc">${esc(m.weeks)} · ${esc(m.desc)}</p>
          <div class="lessons">${g.lessons.filter((l) => l.mod === m.id).map((l) => `
            <a class="les" href="#/${gid}/${l.n}">
              <span class="num">${l.n}</span>
              <span><span class="ttl">${esc(l.t)}</span><br><span class="wk">${Math.ceil(l.n / 2)}-hafta · ${l.n % 2 ? "1" : "2"}-dars</span></span>
              <span class="done">${done.includes(l.n) ? "✓" : ""}</span>
            </a>`).join("")}</div>
        </section>`).join("")}`;
  }

  function lesson(gid, n) {
    const g = Q.grades[gid];
    const l = g && g.lessons.find((x) => x.n === n);
    if (!l) return grade(gid);
    const m = g.modules.find((x) => x.id === l.mod);
    const done = store.get(doneKey(gid), []);
    crumbs.innerHTML = `<a href="#/">Sinflar</a> › <a href="#/${gid}">${gid}-sinf</a> › ${n}-dars`;
    document.title = `${n}-dars: ${l.t} — ${gid}-sinf`;
    const tabs = [["reja", "📋 Dars rejasi"], ...(l.topic ? [["mavzu", "📖 Mavzu"]] : []), ["amaliy", "🛠 Amaliy qo'llanma"], ["savol", "💬 Savollar"], ["test", "✅ Test"], ["oyin", "🎮 O'yin"], ["video", "▶ Video"], ["uy", "🏠 Uy vazifasi"]];
    app.innerHTML = `
      <div style="--mc:var(--${m.color})">
      <div class="lhead"><div class="over">${esc(m.title)} · ${Math.ceil(n / 2)}-hafta · ${n}-dars · ${l.min || 45} daqiqa</div>
        <h1>${esc(l.t)}</h1><p class="goal"><b>Maqsad:</b> ${esc(l.goal)}</p>
        <p class="noprint" style="margin:14px 0 0"><button class="btn primary" id="present">🖥 Taqdimotni boshlash</button> <button class="btn" onclick="window.print()">🖨 Dars rejasini chop etish</button></p></div>
      <div class="tabs" role="tablist">${tabs.map((t, i) => `<button class="tab${i ? "" : " active"}" role="tab" data-tab="${t[0]}">${t[1]}</button>`).join("")}</div>

      <div class="pane active" data-pane="reja">
        ${l.img ? figHtml(l.img) : ""}
        <div class="two">
          <div class="box"><h3>Dars oxirida o'quvchi</h3><ul>${l.out.map((x) => `<li>${rich(x)}</li>`).join("")}</ul></div>
          <div class="box"><h3>Kerakli jihozlar</h3><ul>${l.need.map((x) => `<li>${rich(x)}</li>`).join("")}</ul></div>
        </div>
        <div class="box"><h3>Darsning borishi</h3><table class="plan">${l.plan.map((p) => `<tr><td>${esc(p[0])} daq</td><td>${rich(p[1])}</td></tr>`).join("")}</table></div>
        <div class="box tip"><h3>💡 Mentor uchun maslahat</h3><ul>${l.tips.map((x) => `<li>${rich(x)}</li>`).join("")}</ul></div>
      </div>

      ${l.topic ? `<div class="pane" data-pane="mavzu">${l.topic.map((t) => topicHtml(t)).join("")}</div>` : ""}

      <div class="pane" data-pane="amaliy">
        <div class="box"><h3>${esc(l.pt || "Qadam-baqadam bajarish")}</h3><ol class="steps">${l.steps.map((x) => `<li>${rich(x)}</li>`).join("")}</ol></div>
        ${l.prog ? `<div class="box"><h3>Dastur sxemasi</h3><div class="prog">${progHtml(l.prog)}</div><p class="note" style="margin:12px 0 0">${esc(m.progNote || "Ranglar ilovadagi bloklarga mos: sariq — boshlash, to'q sariq — kutish va takrorlash, yashil — motor va chiroq, qizil — ekran va tovush.")}</p></div>` : ""}
        ${l.extra ? `<div class="box"><h3>⭐ Tez tugatganlar uchun</h3><ul>${l.extra.map((x) => `<li>${rich(x)}</li>`).join("")}</ul></div>` : ""}
      </div>

      <div class="pane" data-pane="savol">
        <div class="box"><h3>Og'zaki savollar (javobni ko'rish uchun savolni bosing)</h3>
        ${l.ask.map((q) => `<details class="qa"><summary>${rich(q[0])}</summary><p>${rich(q[1])}</p></details>`).join("")}</div>
      </div>

      <div class="pane" data-pane="test"><div id="quizEl"></div></div>
      <div class="pane" data-pane="oyin"><div id="gameEl"></div></div>

      <div class="pane" data-pane="video">
        <div class="videos" id="vids"></div>
        <div class="box" style="margin-top:14px"><h3>O'z videongizni qo'shing</h3>
          <div class="addv"><input id="vurl" type="url" placeholder="YouTube havolasini qo'ying (masalan, https://youtu.be/...)" aria-label="YouTube havolasi"><button class="btn primary" id="vadd">Qo'shish</button></div>
          <p class="note">Qo'shilgan video faqat shu brauzerda saqlanadi. Yana video kerakmi? <a target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=${encodeURIComponent(l.yq)}">YouTube'dan «${esc(l.yq)}» bo'yicha qidirish ↗</a></p>
          <p class="note">Videoni sinfda ko'rsatishdan oldin o'zingiz bir marta ko'rib chiqing.</p></div>
      </div>

      <div class="pane" data-pane="uy">
        <div class="box"><h3>Uy vazifasi</h3><ul>${l.hw.map((x) => `<li>${rich(x)}</li>`).join("")}</ul></div>
      </div>

      <div class="nav2">
        ${n > 1 ? `<a class="btn" href="#/${gid}/${n - 1}">← ${n - 1}-dars</a>` : `<a class="btn" href="#/${gid}">← Reja</a>`}
        <button class="btn ${done.includes(n) ? "ok" : ""}" id="markDone">${done.includes(n) ? "✓ Dars o'tildi" : "Darsni o'tildi deb belgilash"}</button>
        ${n < g.lessons.length ? `<a class="btn primary" href="#/${gid}/${n + 1}">${n + 1}-dars →</a>` : `<a class="btn primary" href="#/${gid}">Rejaga qaytish</a>`}
      </div></div>`;

    // Tablar
    app.querySelectorAll(".tab").forEach((b) => b.onclick = () => {
      app.querySelectorAll(".tab").forEach((x) => x.classList.toggle("active", x === b));
      app.querySelectorAll(".pane").forEach((p) => p.classList.toggle("active", p.dataset.pane === b.dataset.tab));
    });
    document.getElementById("present").onclick = () => present(gid, l, m);
    // Test va o'yin
    Games.mount(document.getElementById("quizEl"), { type: "quiz", items: l.quiz, title: "Mavzu bo'yicha test" });
    const gEl = document.getElementById("gameEl");
    (Array.isArray(l.game) ? l.game : [l.game]).forEach((gm) => { const d = document.createElement("div"); gEl.appendChild(d); Games.mount(d, gm); });
    // Videolar
    const vKey = `vid:${gid}:${n}`;
    const drawVids = () => {
      const mine = store.get(vKey, []);
      const all = l.video.map((v) => ({ id: v[0], t: v[1] })).concat(mine.map((id) => ({ id, t: "Mentor qo'shgan video", mine: true })));
      const box = document.getElementById("vids");
      box.innerHTML = all.map((v) => `<div class="vid"><button class="frame" data-id="${v.id}" style="background-image:url(https://i.ytimg.com/vi/${v.id}/hqdefault.jpg)" aria-label="Videoni ijro etish: ${esc(v.t)}"></button>
        <div class="cap"><span>${esc(v.t)}</span><span><a target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=${v.id}">YouTube ↗</a>${v.mine ? ` · <a href="#" data-del="${v.id}">o'chirish</a>` : ""}</span></div></div>`).join("");
      box.querySelectorAll(".frame").forEach((f) => f.onclick = () => {
        const id = f.dataset.id;
        // file:// orqali ochilganda YouTube pleyeri ishlamaydi — yangi oynada ochamiz
        if (location.protocol === "file:") return window.open("https://www.youtube.com/watch?v=" + id, "_blank", "noopener");
        const fr = document.createElement("iframe");
        fr.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
        fr.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen"; fr.allowFullscreen = true;
        fr.referrerPolicy = "strict-origin-when-cross-origin"; fr.title = "YouTube video";
        f.replaceWith(fr);
      });
      box.querySelectorAll("[data-del]").forEach((a) => a.onclick = (e) => { e.preventDefault(); store.set(vKey, store.get(vKey, []).filter((x) => x !== a.dataset.del)); drawVids(); });
    };
    drawVids();
    document.getElementById("vadd").onclick = () => {
      const inp = document.getElementById("vurl"), id = ytId(inp.value.trim());
      if (!id) { inp.value = ""; inp.placeholder = "Havola noto'g'ri — YouTube havolasini qo'ying"; return; }
      const mine = store.get(vKey, []); if (!mine.includes(id)) mine.push(id);
      store.set(vKey, mine); inp.value = ""; drawVids();
    };
    document.getElementById("markDone").onclick = () => {
      let d = store.get(doneKey(gid), []);
      d = d.includes(n) ? d.filter((x) => x !== n) : d.concat(n);
      store.set(doneKey(gid), d); lesson(gid, n);
    };
  }

  function resources(initialCat) {
    const resData = Q.resources || { categories: [], items: [] };
    crumbs.innerHTML = `<a href="#/">Sinflar</a> › Resurslar &amp; Kitoblar`;
    document.title = "Kutubxona & Resurslar — Roboqo'llanma";

    let curCat = initialCat || "all";
    let curGrade = "all";
    let q = "";

    const gradeList = [
      { id: "all", label: "Barcha yoshlar" },
      { id: "2–3-sinf", label: "2–3-sinf (WeDo / Scratch)" },
      { id: "4–5-sinf", label: "4–5-sinf (Tinkercad / Bloklar)" },
      { id: "6–7-sinf", label: "6–7-sinf (Arduino C++)" },
      { id: "Barcha sinflar", label: "Umumiy / Mentorlar uchun" }
    ];

    app.innerHTML = `
      <div class="res-head">
        <h1>📚 Kutubxona va Metodik Resurslar</h1>
        <p>Robototexnika to'garaklari va darslarini o'tish uchun eng sara rasmiy o'quv dasturlari, tavsiya etilgan kitoblar, o'zbekcha va xalqaro video darslar hamda virtual laboratoriyalar to'plami.</p>
      </div>

      <div class="res-controls">
        <div class="res-search">
          <input type="search" id="resSearchInput" placeholder="Mavzu, kitob, dastur yoki muallif bo'yicha qidirish..." aria-label="Resurslarni qidirish">
        </div>

        <div class="res-tabs" id="resCatTabs">
          ${resData.categories.map((c) => `<button class="res-tab${c.id === curCat ? " active" : ""}" data-cat="${c.id}">${c.icon} ${esc(c.title)}</button>`).join("")}
        </div>

        <div class="res-grade-tabs" id="resGradeTabs">
          <span class="res-grade-label">Sinf bo'yicha saralash:</span>
          ${gradeList.map((g) => `<button class="res-grade-pill${g.id === curGrade ? " active" : ""}" data-grade="${g.id}">${esc(g.label)}</button>`).join("")}
        </div>
      </div>

      <div class="res-grid" id="resGridEl"></div>
    `;

    const searchInput = document.getElementById("resSearchInput");
    const gridEl = document.getElementById("resGridEl");

    function renderList() {
      const filtered = resData.items.filter((item) => {
        const matchCat = curCat === "all" || item.cat === curCat;
        const matchGrade = curGrade === "all" || item.grade.includes(curGrade) || (curGrade === "Barcha sinflar" && (item.grade.includes("Barcha") || item.grade.includes("Mentor")));
        const s = q.toLowerCase();
        const matchSearch = !s || (
          item.title.toLowerCase().includes(s) ||
          item.author.toLowerCase().includes(s) ||
          item.desc.toLowerCase().includes(s) ||
          item.type.toLowerCase().includes(s) ||
          item.lang.toLowerCase().includes(s) ||
          item.badge.toLowerCase().includes(s)
        );
        return matchCat && matchGrade && matchSearch;
      });

      if (!filtered.length) {
        gridEl.innerHTML = `
          <div class="res-empty">
            <div style="font-size:42px;margin-bottom:8px">🔍</div>
            <h3>Qidiruv bo'yicha hech narsa topilmadi</h3>
            <p>Iltimos, boshqa kalit so'z kiritib ko'ring yoki filtrlarni tozalang.</p>
            <button class="btn" id="resResetBtn" style="margin-top:12px">Filtrlarni tozalash</button>
          </div>
        `;
        const resetBtn = document.getElementById("resResetBtn");
        if (resetBtn) {
          resetBtn.onclick = () => {
            curCat = "all";
            curGrade = "all";
            q = "";
            searchInput.value = "";
            updateTabStates();
            renderList();
          };
        }
        return;
      }

      gridEl.innerHTML = filtered.map((item) => `
        <article class="res-card">
          <div>
            <div class="res-top">
              <span class="res-icon" aria-hidden="true">${item.icon || "📄"}</span>
              <div>
                <h2 class="res-title">${esc(item.title)}</h2>
                <div class="res-author">${esc(item.author)} · <span>${esc(item.type)}</span></div>
              </div>
            </div>
            <div class="res-tags">
              <span class="res-tag grade">🎯 ${esc(item.grade)}</span>
              <span class="res-tag lang">🌐 ${esc(item.lang)}</span>
              <span class="res-tag badge">⭐ ${esc(item.badge)}</span>
            </div>
            <p class="res-desc">${esc(item.desc)}</p>
          </div>
          <a class="res-btn" href="${esc(item.link)}" target="_blank" rel="noopener noreferrer">
            ${esc(item.btnText || "Manbaga o'tish ↗")}
          </a>
        </article>
      `).join("");
    }

    function updateTabStates() {
      document.querySelectorAll("#resCatTabs .res-tab").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.cat === curCat);
      });
      document.querySelectorAll("#resGradeTabs .res-grade-pill").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.grade === curGrade);
      });
    }

    document.querySelectorAll("#resCatTabs .res-tab").forEach((btn) => {
      btn.onclick = () => {
        curCat = btn.dataset.cat;
        updateTabStates();
        renderList();
      };
    });

    document.querySelectorAll("#resGradeTabs .res-grade-pill").forEach((btn) => {
      btn.onclick = () => {
        curGrade = btn.dataset.grade;
        updateTabStates();
        renderList();
      };
    });

    searchInput.oninput = (e) => {
      q = e.target.value.trim();
      renderList();
    };

    renderList();
  }

  function route() {
    const hash = location.hash.replace(/^#\/?/, "");
    const parts = hash.split("/").filter(Boolean);
    const navlink = document.querySelector(".navlink");
    if (navlink) navlink.classList.toggle("active", parts[0] === "resurslar");

    if (parts.length === 0) {
      home();
    } else if (parts[0] === "resurslar") {
      resources(parts[1]);
    } else if (parts.length === 1 && !isNaN(Number(parts[0]))) {
      grade(Number(parts[0]));
    } else if (parts.length >= 2 && !isNaN(Number(parts[0])) && !isNaN(Number(parts[1]))) {
      lesson(Number(parts[0]), Number(parts[1]));
    } else {
      home();
    }
    window.scrollTo(0, 0);
  }
  // Chop etishda yopiq javoblar ham chiqsin
  window.addEventListener("beforeprint", () => document.querySelectorAll("details").forEach((d) => { d.open = true; }));
  window.addEventListener("hashchange", route);
  route();
})();
