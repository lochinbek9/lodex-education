import { useState } from 'react';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { Logo, Spinner, useTitle } from '../components/ui.jsx';
import { useAuth } from '../context/AuthContext.jsx';

function AuthShell({ title, subtitle, children, footer }) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-center"><Logo /></div>
        <div className="card p-8">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="mt-1.5 text-sm text-ink-mute">{subtitle}</p>
          <div className="mt-6">{children}</div>
        </div>
        <p className="mt-6 text-center text-sm text-ink-mute">{footer}</p>
      </div>
    </div>
  );
}

function Field({ label, error, ...props }) {
  return (
    <div>
      <label className="label" htmlFor={props.id}>{label}</label>
      <input className={`input ${error ? '!border-red-400 focus:!ring-red-500/20' : ''}`} {...props} />
      {error && <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}

// Kirishdan keyin faqat sayt ichidagi sahifaga qaytariladi: "//" va "\" bilan tashqi saytga yo'naltirish taqiqlanadi
const safeNext = n => (n && /^\/(?![\/\\])/.test(n) && !/[\\\s]/.test(n) ? n : '/kabinet');

export function Login() {
  useTitle('Kirish');
  const { user, login } = useAuth();
  const nav = useNavigate();
  const [params] = useSearchParams();
  const next = safeNext(params.get('next'));
  const [form, setForm] = useState({ email: '', password: '' });
  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);
  if (user) return <Navigate to={next} replace />;

  const submit = async e => {
    e.preventDefault();
    setBusy(true); setErr(null);
    try { await login(form); nav(next, { replace: true }); }
    catch (ex) { setErr({ field: ex.field, message: ex.message }); }
    finally { setBusy(false); }
  };
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <AuthShell title="Hisobingizga kiring" subtitle="O'qishni to'xtagan joyingizdan davom ettiring."
      footer={<>Hisobingiz yo'qmi? <Link to={`/royxatdan-otish${params.get('next') ? `?next=${encodeURIComponent(next)}` : ''}`} className="link">Ro'yxatdan o'ting</Link></>}>
      <form onSubmit={submit} className="space-y-4" noValidate>
        <Field id="email" label="Email" type="email" autoComplete="email" value={form.email} onChange={set('email')} error={err?.field === 'email' && err.message} required />
        <Field id="password" label="Parol" type="password" autoComplete="current-password" value={form.password} onChange={set('password')} error={err?.field === 'password' && err.message} required />
        {err && !err.field && <p className="text-sm text-red-600">{err.message}</p>}
        <button className="btn-primary w-full" disabled={busy}>{busy ? <Spinner className="h-4 w-4" /> : 'Kirish'}</button>
      </form>
    </AuthShell>
  );
}

export function Register() {
  useTitle("Ro'yxatdan o'tish");
  const { user, register } = useAuth();
  const nav = useNavigate();
  const [params] = useSearchParams();
  const next = safeNext(params.get('next'));
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);
  if (user) return <Navigate to={next} replace />;

  const submit = async e => {
    e.preventDefault();
    setBusy(true); setErr(null);
    try { await register(form); nav(next, { replace: true }); }
    catch (ex) { setErr({ field: ex.field, message: ex.message }); }
    finally { setBusy(false); }
  };
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  const fe = k => err?.field === k && err.message;

  return (
    <AuthShell title="Bepul hisob yarating" subtitle="Bir daqiqa — va birinchi darsni boshlaysiz."
      footer={<>Hisobingiz bormi? <Link to={`/kirish${params.get('next') ? `?next=${encodeURIComponent(next)}` : ''}`} className="link">Kiring</Link></>}>
      <form onSubmit={submit} className="space-y-4" noValidate>
        <div className="grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
          {[['student', "O'quvchi", 'user'], ['teacher', 'Mentor / o\'qituvchi', 'book']].map(([v, t, ic]) => (
            <button type="button" key={v} onClick={() => setForm(f => ({ ...f, role: v }))}
              className={`flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${form.role === v ? 'bg-white text-ink shadow-sm' : 'text-ink-mute hover:text-ink'}`}>
              <Icon name={ic} className="h-4 w-4" />{t}
            </button>
          ))}
        </div>
        <Field id="name" label="Ism va familiya" autoComplete="name" value={form.name} onChange={set('name')} error={fe('name')} required />
        <Field id="email" label="Email" type="email" autoComplete="email" value={form.email} onChange={set('email')} error={fe('email')} required />
        <Field id="password" label="Parol (kamida 8 belgi)" type="password" autoComplete="new-password" value={form.password} onChange={set('password')} error={fe('password')} required />
        <button className="btn-primary w-full" disabled={busy}>{busy ? <Spinner className="h-4 w-4" /> : "Ro'yxatdan o'tish"}</button>
        <p className="text-center text-xs text-ink-mute">Demo versiya: hisob ma'lumotlari faqat shu brauzerda saqlanadi.</p>
      </form>
    </AuthShell>
  );
}
