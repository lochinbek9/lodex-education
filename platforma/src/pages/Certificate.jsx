import { Link, Navigate, useParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { useTitle } from '../components/ui.jsx';
import { BRAND } from '../config.js';
import { useAuth } from '../context/AuthContext.jsx';
import { useI18n } from '../i18n/index.jsx';
import { courseLessons } from '../data/courses.js';
import { certificateId, getCourseProgress } from '../api/progress.js';
import { formatDate } from '../utils.js';
import NotFound from './NotFound.jsx';

export default function Certificate() {
  const { slug } = useParams();
  const { t, lang, findCourse } = useI18n();
  const course = findCourse(slug);
  const { user } = useAuth();
  useTitle(course ? t('titles.cert', { course: course.title }) : t('cert.title'));
  if (!course) return <NotFound />;
  const p = getCourseProgress(user.id, course);
  if (!p.completedAt) return <Navigate to={`/kurslar/${course.slug}`} replace />;
  const id = certificateId(user.id, course, p.completedAt);
  const sims = courseLessons(course).filter(l => l.type === 'sim').length;

  return (
    <div className="container-lx py-10">
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link to="/kabinet" className="btn-ghost"><Icon name="arrowLeft" className="h-4 w-4" />{t('cert.back')}</Link>
        <button className="btn-primary" onClick={() => window.print()}><Icon name="printer" className="h-4 w-4" />{t('cert.print')}</button>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border-[10px] border-double border-brand-200 bg-white p-10 text-center shadow-card sm:p-14">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-brand-50" />
          <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-indigo-50" />
          <div className="relative">
            <div className="flex justify-center"><img src="/favicon.svg" alt="" className="h-14 w-14" /></div>
            <div className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">{BRAND.name} {BRAND.suffix}</div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight">{t('cert.title')}</h1>
            <p className="mt-6 text-ink-mute">{t('cert.intro')}</p>
            <p className="mt-2 text-3xl font-bold text-ink">{user.name}</p>
            <div className="mx-auto mt-2 h-px w-64 bg-slate-300" />
            <p className="mx-auto mt-6 max-w-lg leading-7 text-ink-soft">{t('cert.body', { course: course.title, n: sims })}</p>
            <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
              <div><div className="font-semibold text-ink">{formatDate(p.completedAt, lang)}</div><div className="text-ink-mute">{t('cert.date')}</div></div>
              <div><div className="font-mono font-semibold text-ink">{id}</div><div className="text-ink-mute">{t('cert.number')}</div></div>
            </div>
          </div>
        </div>
        <p className="no-print mt-4 text-center text-xs text-ink-mute">{t('cert.demo')}</p>
      </div>
    </div>
  );
}
