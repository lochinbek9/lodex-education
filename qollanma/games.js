// Interaktiv o'yinlar. Har bir o'yin ma'lumot (data) bilan boshqariladi:
//   quiz   — { type:"quiz", items:[[savol, to'g'ri, xato1, xato2], ...] }
//   sort   — { type:"sort", cats:[A, B], items:[[matn, 0|1], ...] }
//   memory — { type:"memory", pairs:[[a, b], ...] }
//   order  — { type:"order", steps:[to'g'ri tartibda] }
//   grid   — { type:"grid", levels:[{ map:["S..", ".#.", "..F"] }] }  S=start, F=marra, #=devor
(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const h = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; };

  const TITLES = {
    quiz: ["Test", "Har savolga bitta to'g'ri javobni tanlang."],
    sort: ["Saralash o'yini", "Har bir kartochkani to'g'ri guruhga joylang."],
    memory: ["Juftini top", "Ikki kartochkani oching. Bir-biriga mos juftlarni toping."],
    order: ["Tartibga sol", "Qadamlarni to'g'ri tartibda birma-bir bosing."],
    grid: ["Robotni marraga yetkaz", "Strelkalar bilan buyruqlar tuzing, so'ng «Yurgiz» tugmasini bosing."]
  };

  function win(body, text, again, onDone, score) {
    body.innerHTML = "";
    const w = h(`<div class="win"><div class="e">🎉</div><h4>Barakalla!</h4><p>${esc(text)}</p><button class="btn primary">Qayta o'ynash</button></div>`);
    w.querySelector("button").onclick = again;
    body.appendChild(w);
    if (onDone) onDone(score);
  }

  const ENG = {};

  ENG.quiz = function (body, g, onDone) {
    const items = shuffle(g.items);
    let i = 0, score = 0;
    const show = () => {
      if (i >= items.length) {
        return win(body, `Natija: ${items.length} tadan ${score} ta to'g'ri.`, () => ENG.quiz(body, g, onDone), onDone, { score, total: items.length });
      }
      const [q, right, ...wrong] = items[i];
      const opts = shuffle([right, ...wrong]);
      body.innerHTML = `<div class="qz"><div class="qn">Savol ${i + 1} / ${items.length}</div><div class="qq">${esc(q)}</div><div class="opts"></div><div class="gstat"></div><button class="btn primary next" hidden>Keyingi →</button></div>`;
      const box = body.querySelector(".opts"), st = body.querySelector(".gstat"), nx = body.querySelector(".next");
      opts.forEach((o) => {
        const b = h(`<button class="opt">${esc(o)}</button>`);
        b.onclick = () => {
          box.querySelectorAll("button").forEach((x) => { x.disabled = true; if (x.textContent === right) x.classList.add("right"); });
          if (o === right) { score++; st.textContent = "✅ To'g'ri!"; st.className = "gstat ok"; }
          else { b.classList.add("wrong"); st.textContent = "❌ To'g'ri javob: " + right; st.className = "gstat bad"; }
          nx.hidden = false; nx.textContent = i === items.length - 1 ? "Natijani ko'rish" : "Keyingi →"; nx.focus();
        };
        box.appendChild(b);
      });
      nx.onclick = () => { i++; show(); };
    };
    show();
  };

  ENG.sort = function (body, g, onDone) {
    const items = shuffle(g.items);
    let i = 0, score = 0;
    body.innerHTML = `<div class="sortitem"></div><div class="cats"><button>${esc(g.cats[0])}</button><button>${esc(g.cats[1])}</button></div><div class="gstat"></div>`;
    const it = body.querySelector(".sortitem"), st = body.querySelector(".gstat");
    const show = () => {
      if (i >= items.length) return win(body, `${items.length} tadan ${score} tasini birinchi urinishda to'g'ri topdingiz.`, () => ENG.sort(body, g, onDone), onDone, { score, total: items.length });
      it.textContent = items[i][0];
    };
    let first = true;
    body.querySelectorAll(".cats button").forEach((b, c) => {
      b.onclick = () => {
        if (items[i][1] === c) { if (first) score++; first = true; st.textContent = "✅ To'g'ri!"; st.className = "gstat ok"; i++; show(); }
        else { first = false; st.textContent = "🤔 Yana o'ylab ko'ring"; st.className = "gstat bad"; }
      };
    });
    show();
  };

  ENG.memory = function (body, g, onDone) {
    const cards = shuffle(g.pairs.flatMap((p, k) => [{ k, t: p[0] }, { k, t: p[1] }]));
    body.innerHTML = `<div class="mem"></div><div class="gstat"></div>`;
    const box = body.querySelector(".mem"), st = body.querySelector(".gstat");
    let open = [], found = 0, moves = 0, lock = false;
    cards.forEach((c) => {
      const b = h(`<button class="mcard" aria-label="Yopiq kartochka">${esc(c.t)}</button>`);
      b.onclick = () => {
        if (lock || b.classList.contains("open") || b.classList.contains("found")) return;
        b.classList.add("open"); open.push([b, c]);
        if (open.length < 2) return;
        moves++; st.textContent = "Urinishlar: " + moves; st.className = "gstat";
        const [[b1, c1], [b2, c2]] = open; open = [];
        if (c1.k === c2.k) {
          b1.classList.add("found"); b2.classList.add("found");
          if (++found === g.pairs.length) setTimeout(() => win(body, `Barcha juftlar ${moves} ta urinishda topildi.`, () => ENG.memory(body, g, onDone), onDone, { score: found, total: found }), 500);
        } else {
          lock = true;
          setTimeout(() => { b1.classList.remove("open"); b2.classList.remove("open"); lock = false; }, 900);
        }
      };
      box.appendChild(b);
    });
  };

  ENG.order = function (body, g, onDone) {
    let next = 0, miss = 0;
    body.innerHTML = `<div class="ord"></div><div class="gstat"></div>`;
    const box = body.querySelector(".ord"), st = body.querySelector(".gstat");
    let sh = shuffle(g.steps.map((t, i) => ({ t, i })));
    if (sh.every((s, k) => s.i === k)) sh.reverse();
    sh.forEach((s) => {
      const b = h(`<button>${esc(s.t)}</button>`);
      b.onclick = () => {
        if (b.classList.contains("picked")) return;
        if (s.i === next) {
          next++; b.classList.add("picked"); b.textContent = next + ". " + s.t;
          st.textContent = "✅ To'g'ri!"; st.className = "gstat ok";
          if (next === g.steps.length) setTimeout(() => win(body, miss ? `Tartib topildi. Xatolar soni: ${miss}.` : "Bironta xatosiz!", () => ENG.order(body, g, onDone), onDone, { score: g.steps.length, total: g.steps.length }), 500);
        } else {
          miss++; b.classList.add("shake"); setTimeout(() => b.classList.remove("shake"), 350);
          st.textContent = "🤔 Bu qadam hali emas"; st.className = "gstat bad";
        }
      };
      box.appendChild(b);
    });
  };

  ENG.grid = function (body, g, onDone, lv) {
    lv = lv || 0;
    const map = g.levels[lv].map;
    const R = map.length, C = map[0].length;
    let start, pos, queue = [], running = false;
    for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (map[r][c] === "S") start = [r, c];
    const DIR = { "↑": [-1, 0], "↓": [1, 0], "←": [0, -1], "→": [0, 1] };
    body.innerHTML = `<div class="gstat">${g.levels.length > 1 ? `Bosqich ${lv + 1} / ${g.levels.length}` : ""}</div>
      <div class="gridgame"><div class="board" style="grid-template-columns:repeat(${C},auto)"></div>
      <div><div class="pad">${Object.keys(DIR).map((d) => `<button data-d="${d}" aria-label="${d}">${d}</button>`).join("")}</div>
      <div class="queue" aria-live="polite"></div>
      <div class="pad"><button class="btn ok run" style="width:auto;height:auto;font-size:16px">▶ Yurgiz</button>
      <button class="btn undo" style="width:auto;height:auto;font-size:16px">⌫ Oxirgisi</button>
      <button class="btn clr" style="width:auto;height:auto;font-size:16px">Tozalash</button></div>
      <div class="gstat msg"></div></div></div>`;
    const board = body.querySelector(".board"), qEl = body.querySelector(".queue"), msg = body.querySelector(".msg");
    const draw = () => {
      board.innerHTML = "";
      for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
        const ch = map[r][c], me = pos[0] === r && pos[1] === c;
        board.appendChild(h(`<div class="cell ${ch === "#" ? "wall" : ch === "F" ? "fin" : ""}">${me ? "🤖" : ch === "F" ? "🏁" : ""}</div>`));
      }
    };
    const reset = () => { pos = start.slice(); draw(); };
    const setMsg = (t, cls) => { msg.textContent = t; msg.className = "gstat msg " + (cls || ""); };
    body.querySelectorAll("[data-d]").forEach((b) => b.onclick = () => { if (running || queue.length >= 24) return; queue.push(b.dataset.d); qEl.textContent = queue.join(""); });
    body.querySelector(".undo").onclick = () => { if (running) return; queue.pop(); qEl.textContent = queue.join(""); };
    body.querySelector(".clr").onclick = () => { if (running) return; queue = []; qEl.textContent = ""; setMsg(""); reset(); };
    body.querySelector(".run").onclick = () => {
      if (running) return;
      if (!queue.length) return setMsg("Avval buyruq qo'shing", "bad");
      running = true; reset(); setMsg("Robot yurmoqda…");
      let k = 0;
      const tick = () => {
        if (k >= queue.length) {
          running = false;
          if (map[pos[0]][pos[1]] === "F") {
            if (lv + 1 < g.levels.length) { setMsg("✅ Marraga yetdi! Keyingi bosqich…", "ok"); setTimeout(() => ENG.grid(body, g, onDone, lv + 1), 1100); }
            else win(body, "Robot barcha bosqichlarda marraga yetdi.", () => ENG.grid(body, g, onDone, 0), onDone, { score: g.levels.length, total: g.levels.length });
          } else setMsg("Robot marraga yetmadi. Buyruqlarni to'g'rilang.", "bad");
          return;
        }
        const [dr, dc] = DIR[queue[k++]], r = pos[0] + dr, c = pos[1] + dc;
        if (r < 0 || c < 0 || r >= R || c >= C || map[r][c] === "#") { running = false; setMsg(`💥 ${k}-buyruqda robot to'siqqa urildi. Algoritmni tuzating.`, "bad"); return; }
        pos = [r, c]; draw(); setTimeout(tick, 420);
      };
      setTimeout(tick, 300);
    };
    reset();
  };

  window.Games = {
    mount(el, g, onDone) {
      const [t, d] = TITLES[g.type];
      el.innerHTML = `<div class="game"><h3>${esc(g.title || t)}</h3><p class="gdesc">${esc(g.desc || d)}</p><div class="gbody"></div></div>`;
      ENG[g.type](el.querySelector(".gbody"), g, onDone);
    }
  };
})();
