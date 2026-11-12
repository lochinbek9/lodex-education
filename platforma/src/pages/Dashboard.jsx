import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { CourseIcon, EmptyState, ProgressBar, Spinner, useTitle } from '../components/ui.jsx';
import { LINKS } from '../config.js';
import { useAuth } from '../context/AuthContext.jsx';
import { COURSES } from '../data/courses.js';
import { getCourseProgress } from '../api/progress.js';
import { formatDate } from '../utils.js';

function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [state, setState] = useState(null);
  const save = async e => {
    e.preventDefault();
    setState('busy');
    try { await updateProfile({ name }); setState('ok'); setTimeout(() => setState(null), 2000); }
    catch (ex) { setState(ex.message); }
  };
  return (
    <form onSubmit={save} className="card p-6">
      <h2 className="font-semibold">Profil</h2>
      <div className="mt-4 space-y-3">
        <div><label className="label" htmlFor="pname">Ism va familiya</label><input id="pname" className="input" value={name} onChange={e => setName(e.target.value)} /></div>
        <div><label className="label">Email</label><div className="input bg-slate-50 text-ink-mute">{user.email}</div></div>
        <div className="text-xs text-ink-mute">Rol: {user.role === 'teacher' ? 'Mentor / o\'qituvchi' : "O'quvchi"} · Ro'yxatdan o'tgan: {formatDate(user.createdAt)}</div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <button className="btn-secondary" disabled={state === 'busy' || name.trim() === user.name}>{state === 'busy' ? <Spinner className="h-4 w-4" /> : 'Saqlash'}</button>
        {state === 'ok' && <span className="text-sm text-emerald-700">Saqlandi</span>}
        {state && !['ok', 'busy'].includes(state) && <span className="text-sm text-red-600">{state}</span>}
      </div>
    </form>
  );
}

export default function Dashboard() {
  useTitle('Shaxsiy kabinet');
  const { user } = useAuth();
  const open = COURSES.filter(c => c.status === 'open').map(c => ({ course: c, p: getCourseProgress(user.id, c) }));
  const started = open.filter(x => x.p.done > 0);
  const certs = open.filter(x => x.p.completedAt);
  const totalDone = open.reduce((s, x) => s + x.p.done, 0);
  const sims = open.reduce((s, x) => s + x.course.modules.flatMap(m => m.lessons).filter(l => l.type === 'sim' && x.p.isDone(l.id)).length, 0);

  return (
    <div className="container-lx py-10">
      <h1 className="text-3xl font-bold tracking-tight">Salom, {user.name.split(' ')[0]}!</h1>
      <p className="mt-1 text-ink-mute">{started.length ? 'O\'qishni davom ettiring.' : 'Birinchi kursingizni boshlang.'}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[['book', 'Tugatilgan darslar', totalDone], ['robot', 'Simulyator topshiriqlari', sims], ['award', 'Sertifikatlar', certs.length]].map(([ic, t, v]) => (
          <div key={t} className="card flex items-center gap-4 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><Icon name={ic} /></div>
            <div><div className="text-2xl font-bold">{v}</div><div className="text-sm text-ink-mute">{t}</div></div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold">Mening kurslarim</h2>
            <div className="mt-4 space-y-4">
              {open.map(({ course, p }) => (
                <div key={course.slug} className="card flex flex-col gap-5 p-5 sm:flex-row sm:items-center">
                  <CourseIcon course={course} />
                  <div className="min-w-0 flex-1">
                    <Link to={`/kurslar/${course.slug}`} className="font-semibold hover:text-brand-700">{course.title}</Link>
                    <div className="mt-2 flex items-center gap-3"><ProgressBar percent={p.percent} className="max-w-xs" /><span className="text-xs font-medium text-ink-mute">{p.done}/{p.total}</span></div>
                    {p.nextLesson && <div className="mt-1.5 truncate text-xs text-ink-mute">Keyingi: {p.nextLesson.title}</div>}
                  </div>
                  {p.completedAt
                    ? <Link to={`/sertifikat/${course.slug}`} className="btn-secondary"><Icon name="award" className="h-4 w-4" />Sertifikat</Link>
                    : <Link to={`/kurslar/${course.slug}/dars/${p.nextLesson.id}`} className="btn-primary">{p.done ? 'Davom ettirish' : 'Boshlash'}<Icon name="arrowRight" className="h-4 w-4" /></Link>}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold">Sertifikatlar</h2>
            <div className="mt-4">
              {certs.length ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {certs.map(({ course, p }) => (
                    <Link key={course.slug} to={`/sertifikat/${course.slug}`} className="card flex items-center gap-4 p-5 hover:border-brand-200">
                      <Icon name="award" className="h-8 w-8 text-amber-500" />
                      <div><div className="font-semibold">{course.title}</div><div className="text-xs text-ink-mute">{formatDate(p.completedAt)}</div></div>
                    </Link>
                  ))}
                </div>
              ) : (
                <EmptyState icon="award" title="Hozircha sertifikat yo'q">Kursning barcha darslarini tugatganingizda sertifikat shu yerda paydo bo'ladi.</EmptyState>
              )}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <Profile />
          <div className="card p-6">
            <h2 className="font-semibold">Erkin mashq</h2>
            <p className="mt-1.5 text-sm text-ink-mute">Simulyatorda istalgan maydonni tanlab, o'z dasturlaringizni sinang.</p>
            <a href={LINKS.simulator} className="btn-secondary mt-4 w-full"><Icon name="play" className="h-4 w-4" />Simulyatorni ochish</a>
          </div>
          {user.role === 'teacher' && (
            <div className="card border-brand-200 bg-brand-50/50 p-6">
              <h2 className="font-semibold">Mentorlar uchun</h2>
              <p className="mt-1.5 text-sm text-ink-mute">Dars rejalari va mashg'ulot ssenariylari metodik qo'llanmada. Sinf boshqaruvi paneli keyingi bosqichda qo'shiladi.</p>
              <a href={LINKS.mentorGuide} className="btn-primary mt-4 w-full">Qo'llanmani ochish</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
