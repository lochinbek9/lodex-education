import { useEffect, useRef, useState } from 'react';
import Icon from '../components/Icon.jsx';
import { LINKS } from '../config.js';

// Simulyator iframe ichida ochiladi (embed rejimi). Topshiriq bajarilganda simulyator
// postMessage orqali natija yuboradi: { type: 'lodex-sim:result', field, ok, time, text }.
export default function SimLesson({ lesson, done, best, onComplete }) {
  const frame = useRef(null);
  const [last, setLast] = useState(null);
  const [hints, setHints] = useState(0);
  const src = `${LINKS.simulator}?field=${encodeURIComponent(lesson.field)}&embed=1`;

  useEffect(() => {
    const onMsg = e => {
      if (e.origin !== window.location.origin) return;
      const d = e.data;
      if (!d || d.type !== 'lodex-sim:result' || d.field !== lesson.field) return;
      setLast(d);
      if (d.ok) onComplete({ time: Math.round(d.time * 10) / 10 });
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [lesson.field, onComplete]);

  const openFull = () => window.open(`${LINKS.simulator}?field=${encodeURIComponent(lesson.field)}`, '_blank');

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
        <div className="rounded-xl border border-brand-200 bg-brand-50/60 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-brand-800"><Icon name="robot" className="h-4 w-4" />Topshiriq</div>
          <p className="mt-1.5 text-[15px] leading-7 text-ink">{lesson.task}</p>
          {done && best != null && <p className="mt-2 text-sm font-medium text-emerald-700">✓ Bajarilgan · eng yaxshi vaqt: {String(best).replace('.', ',')} s</p>}
        </div>
        <div className="flex flex-col gap-2 lg:w-56">
          <button className="btn-secondary" onClick={() => setHints(h => Math.min(h + 1, lesson.hints.length))} disabled={hints >= lesson.hints.length}>
            <Icon name="bulb" className="h-4 w-4" />{hints === 0 ? "Maslahat olish" : hints < lesson.hints.length ? 'Yana maslahat' : 'Maslahatlar tugadi'}
          </button>
          <button className="btn-ghost" onClick={openFull}><Icon name="external" className="h-4 w-4" />Alohida oynada ochish</button>
        </div>
      </div>

      {hints > 0 && (
        <ol className="mt-4 space-y-2">
          {lesson.hints.slice(0, hints).map((h, i) => (
            <li key={i} className="flex gap-3 rounded-xl bg-amber-50 px-4 py-2.5 text-sm text-amber-900"><span className="font-bold">{i + 1}.</span>{h}</li>
          ))}
        </ol>
      )}

      {last && !last.ok && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {last.text} — dasturni o'zgartirib, qayta urinib ko'ring.
        </div>
      )}

      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-card">
        <iframe ref={frame} src={src} title={`Simulyator: ${lesson.title}`} className="block h-[78vh] min-h-[560px] w-full" allow="clipboard-write" />
      </div>
      <p className="mt-3 text-xs text-ink-mute">
        Topshiriq bajarilishi bilan natija avtomatik saqlanadi va keyingi dars ochiladi. Alohida oynada bajarsangiz ham natija shu sahifaga yetib keladi.
      </p>
    </div>
  );
}
