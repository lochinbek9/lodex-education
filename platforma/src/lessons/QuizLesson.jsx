import { useState } from 'react';
import Icon from '../components/Icon.jsx';

export default function QuizLesson({ lesson, done, best, onComplete, busy }) {
  const qs = lesson.questions;
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);   // { correct, percent, passed }

  const submit = () => {
    const correct = qs.filter((q, i) => answers[i] === q.answer).length;
    const percent = Math.round((correct / qs.length) * 100);
    const passed = percent >= lesson.passPercent;
    setResult({ correct, percent, passed });
    if (passed) onComplete({ score: percent });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const retry = () => { setAnswers({}); setResult(null); };
  const all = Object.keys(answers).length === qs.length;

  return (
    <div>
      <div className="flex flex-wrap gap-x-6 gap-y-1 rounded-xl bg-slate-50 px-4 py-3 text-sm text-ink-soft">
        <span><b className="text-ink">{qs.length}</b> ta savol</span>
        <span>O'tish bali: <b className="text-ink">{lesson.passPercent}%</b></span>
        <span>Urinishlar: <b className="text-ink">cheklanmagan</b></span>
        {done && best != null && <span>Eng yaxshi natija: <b className="text-emerald-700">{best}%</b></span>}
      </div>

      {result && (
        <div className={`mt-5 flex items-start gap-3 rounded-xl border p-4 ${result.passed ? 'border-emerald-200 bg-emerald-50' : 'border-amber-200 bg-amber-50'}`}>
          <Icon name={result.passed ? 'checkCircle' : 'refresh'} className={`h-6 w-6 shrink-0 ${result.passed ? 'text-emerald-600' : 'text-amber-600'}`} />
          <div className="flex-1">
            <div className="font-semibold">{result.passed ? 'Test topshirildi!' : "Bu safar o'tmadi"}</div>
            <div className="text-sm text-ink-soft">{result.correct}/{qs.length} to'g'ri javob — {result.percent}%. {result.passed ? '' : `O'tish uchun kamida ${lesson.passPercent}% kerak. Xatolarni ko'rib chiqib, qayta urinib ko'ring.`}</div>
          </div>
          {!result.passed && <button className="btn-secondary" onClick={retry}>Qayta urinish</button>}
        </div>
      )}

      <ol className="mt-6 space-y-5">
        {qs.map((q, i) => (
          <li key={i} className="card p-5">
            <div className="font-medium"><span className="mr-2 text-ink-mute">{i + 1}.</span>{q.q}</div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {q.options.map((o, j) => {
                const chosen = answers[i] === j;
                let cls = chosen ? 'border-brand-500 bg-brand-50 ring-1 ring-brand-500' : 'border-slate-200 hover:border-slate-300';
                if (result) {
                  if (j === q.answer && (chosen || result.passed)) cls = 'border-emerald-500 bg-emerald-50';
                  else if (chosen) cls = 'border-red-400 bg-red-50';
                  else cls = 'border-slate-200 opacity-70';
                }
                return (
                  <label key={j} className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-2.5 text-sm transition ${cls} ${result ? 'cursor-default' : ''}`}>
                    <input type="radio" className="accent-brand-600" name={`q${i}`} checked={chosen} disabled={!!result}
                      onChange={() => setAnswers(a => ({ ...a, [i]: j }))} />
                    {o}
                  </label>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      {!result && (
        <div className="mt-8 flex items-center justify-end gap-4 border-t border-slate-100 pt-6">
          <span className="text-sm text-ink-mute">{Object.keys(answers).length}/{qs.length} javob berildi</span>
          <button className="btn-primary" disabled={!all || busy} onClick={submit}>Javoblarni tekshirish</button>
        </div>
      )}
    </div>
  );
}
