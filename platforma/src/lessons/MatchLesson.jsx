import { useMemo, useState } from 'react';
import Icon from '../components/Icon.jsx';

// Juftini topish: chapdan element, o'ngdan unga mos javob tanlanadi
function shuffle(arr, seed) {
  const a = arr.map((v, i) => [v, i]);
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor((s / 233280) * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

const COLORS = ['bg-sky-100 border-sky-400', 'bg-violet-100 border-violet-400', 'bg-amber-100 border-amber-400', 'bg-pink-100 border-pink-400', 'bg-teal-100 border-teal-400', 'bg-lime-100 border-lime-400'];

export default function MatchLesson({ lesson, done, onComplete, busy }) {
  const pairs = lesson.pairs;
  const right = useMemo(() => shuffle(pairs.map(p => p.right), pairs.length * 7 + 3), [pairs]);
  const [sel, setSel] = useState(null);          // tanlangan chap indeks
  const [links, setLinks] = useState({});        // chap indeks -> o'ng (asl) indeks
  const [checked, setChecked] = useState(false);

  const rightOwner = ri => Object.keys(links).find(li => links[li] === ri);
  const pickLeft = i => { if (checked && allCorrect) return; setChecked(false); setSel(sel === i ? null : i); };
  const pickRight = ri => {
    if (sel == null) return;
    setChecked(false);
    setLinks(l => {
      const n = { ...l };
      const owner = Object.keys(n).find(k => n[k] === ri);
      if (owner != null) delete n[owner];
      n[sel] = ri;
      return n;
    });
    setSel(null);
  };
  const allLinked = Object.keys(links).length === pairs.length;
  const correctCount = Object.entries(links).filter(([li, ri]) => Number(li) === ri).length;
  const allCorrect = correctCount === pairs.length;

  const check = () => { setChecked(true); if (allCorrect) onComplete({ score: 100 }); };
  const reset = () => { setLinks({}); setChecked(false); setSel(null); };

  const colorOf = li => COLORS[li % COLORS.length];

  return (
    <div>
      <p className="text-ink-soft">{lesson.intro}</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="space-y-2.5">
          <div className="text-xs font-semibold uppercase tracking-wide text-ink-mute">Blok</div>
          {pairs.map((p, i) => {
            const linked = links[i] != null;
            const wrong = checked && linked && links[i] !== i;
            return (
              <button key={i} onClick={() => pickLeft(i)}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition
                  ${sel === i ? 'border-brand-500 ring-2 ring-brand-500/30' : linked ? colorOf(i) : 'border-slate-200 bg-white hover:border-slate-300'}
                  ${wrong ? '!border-red-400 !bg-red-50' : ''}`}>
                <span className="font-mono text-[13px]">{p.left}</span>
                {checked && linked && (links[i] === i ? <Icon name="check" className="ml-auto h-4 w-4 text-emerald-600" /> : <Icon name="close" className="ml-auto h-4 w-4 text-red-500" />)}
              </button>
            );
          })}
        </div>
        <div className="space-y-2.5">
          <div className="text-xs font-semibold uppercase tracking-wide text-ink-mute">Vazifa</div>
          {right.map(([text, ri]) => {
            const owner = rightOwner(ri);
            return (
              <button key={ri} onClick={() => pickRight(ri)} disabled={sel == null && owner == null}
                className={`flex w-full items-center rounded-xl border px-4 py-3 text-left text-sm transition
                  ${owner != null ? colorOf(Number(owner)) : 'border-slate-200 bg-white'}
                  ${sel != null ? 'cursor-pointer hover:border-brand-400' : 'cursor-default'}`}>
                {text}
              </button>
            );
          })}
        </div>
      </div>

      {checked && !allCorrect && (
        <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm">
          <b>{correctCount}/{pairs.length}</b> ta juftlik to'g'ri. Qizil bilan belgilanganlarini o'zgartirib, qayta tekshiring.
        </div>
      )}
      {(done || (checked && allCorrect)) && (
        <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800">
          <Icon name="checkCircle" className="h-5 w-5" />Barcha juftliklar to'g'ri!
        </div>
      )}
      <div className="mt-8 flex justify-end gap-3 border-t border-slate-100 pt-6">
        <button className="btn-ghost" onClick={reset}>Boshidan</button>
        <button className="btn-primary" disabled={!allLinked || busy || (checked && allCorrect)} onClick={check}>Tekshirish</button>
      </div>
    </div>
  );
}
