import { Link, Navigate, useParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { useTitle } from '../components/ui.jsx';
import { BRAND } from '../config.js';
import { useAuth } from '../context/AuthContext.jsx';
import { courseLessons, findCourse } from '../data/courses.js';
import { certificateId, getCourseProgress } from '../api/progress.js';
import NotFound from './NotFound.jsx';
import { formatDate as fmtDate } from '../utils.js';


export default function Certificate() {
  const { slug } = useParams();
  const course = findCourse(slug);
  const { user } = useAuth();
  useTitle(course ? `Sertifikat: ${course.title}` : 'Sertifikat');
  if (!course) return <NotFound />;
  const p = getCourseProgress(user.id, course);
  if (!p.completedAt) return <Navigate to={`/kurslar/${course.slug}`} replace />;
  const id = certificateId(user.id, course, p.completedAt);
  const sims = courseLessons(course).filter(l => l.type === 'sim').length;

  return (
    <div className="container-lx py-10">
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link to="/kabinet" className="btn-ghost"><Icon name="arrowLeft" className="h-4 w-4" />Kabinetga qaytish</Link>
        <button className="btn-primary" onClick={() => window.print()}><Icon name="printer" className="h-4 w-4" />Chop etish / PDF</button>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border-[10px] border-double border-brand-200 bg-white p-10 text-center shadow-card sm:p-14">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-brand-50" />
          <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-indigo-50" />
          <div className="relative">
            <div className="flex justify-center"><img src="/favicon.svg" alt="" className="h-14 w-14" /></div>
            <div className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">{BRAND.name} {BRAND.suffix}</div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight">Sertifikat</h1>
            <p className="mt-6 text-ink-mute">Ushbu sertifikat</p>
            <p className="mt-2 text-3xl font-bold text-ink">{user.name}</p>
            <div className="mx-auto mt-2 h-px w-64 bg-slate-300" />
            <p className="mx-auto mt-6 max-w-lg leading-7 text-ink-soft">
              «<b className="text-ink">{course.title}</b>» kursini to'liq tugatgani, jumladan {sims} ta simulyator topshirig'ini muvaffaqiyatli bajargani uchun berildi.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
              <div><div className="font-semibold text-ink">{fmtDate(p.completedAt)}</div><div className="text-ink-mute">Berilgan sana</div></div>
              <div><div className="font-mono font-semibold text-ink">{id}</div><div className="text-ink-mute">Sertifikat raqami</div></div>
            </div>
          </div>
        </div>
        <p className="no-print mt-4 text-center text-xs text-ink-mute">Demo versiya: sertifikatni onlayn tekshirish server qismi ulanganda ishlaydi.</p>
      </div>
    </div>
  );
}
