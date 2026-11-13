import { Link, useParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { CourseIcon, ProgressBar, useTitle } from '../components/ui.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { courseLessons, courseMinutes, LESSON_TYPE } from '../data/courses.js';
import { useI18n } from '../i18n/index.jsx';
import { getCourseProgress } from '../api/progress.js';
import NotFound from './NotFound.jsx';

export default function Course() {
  const { slug } = useParams();
  const { t, findCourse } = useI18n();
  const course = findCourse(slug);
  const { user } = useAuth();
  useTitle(course?.title);
  if (!course || course.status !== 'open') return <NotFound />;

  const lessons = courseLessons(course);
  const p = getCourseProgress(user?.id, course);
  const hours = Math.max(1, Math.round(courseMinutes(course) / 60));
  const sims = lessons.filter(l => l.type === 'sim').length;
  const target = p.nextLesson || lessons[0];
  const lessonUrl = l => `/kurslar/${course.slug}/dars/${l.id}`;

  let cta;
  if (!user) cta = <Link to={`/royxatdan-otish?next=${encodeURIComponent(lessonUrl(lessons[0]))}`} className="btn-primary btn-lg w-full">{t('course.ctaFree')}<Icon name="arrowRight" className="h-4 w-4" /></Link>;
  else if (p.completedAt) cta = <Link to={`/sertifikat/${course.slug}`} className="btn-primary btn-lg w-full"><Icon name="award" className="h-4 w-4" />{t('course.ctaCert')}</Link>;
  else cta = <Link to={lessonUrl(target)} className="btn-primary btn-lg w-full">{p.done ? t('course.ctaContinue') : t('course.ctaBegin')}<Icon name="arrowRight" className="h-4 w-4" /></Link>;

  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-lx py-10">
          <nav className="text-sm text-ink-mute"><Link to="/kurslar" className="hover:text-ink">{t('course.breadcrumb')}</Link> <span className="mx-1">/</span> <span className="text-ink-soft">{course.title}</span></nav>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_340px]">
            <div>
              <div className="flex items-center gap-4">
                <CourseIcon course={course} size="h-14 w-14" />
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
                  <p className="mt-1 text-ink-mute">{course.subtitle}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
                <span className="flex items-center gap-1.5"><Icon name="layers" className="h-4 w-4 text-ink-mute" />{course.level}</span>
                <span className="flex items-center gap-1.5"><Icon name="book" className="h-4 w-4 text-ink-mute" />{t('units.modulesLessons', { m: course.modules.length, l: lessons.length })}</span>
                <span className="flex items-center gap-1.5"><Icon name="robot" className="h-4 w-4 text-ink-mute" />{t('units.simTasks', { n: sims })}</span>
                <span className="flex items-center gap-1.5"><Icon name="clock" className="h-4 w-4 text-ink-mute" />{t('units.hours', { n: hours })}</span>
              </div>
            </div>
            <div className="card p-5 lg:row-span-2">
              {user && p.done > 0 && (
                <div className="mb-4">
                  <div className="mb-1.5 flex justify-between text-sm"><span className="font-medium">{t('common.progress')}</span><span className="text-ink-mute">{t('course.lessonsDone', { d: p.done, t: p.total })}</span></div>
                  <ProgressBar percent={p.percent} />
                </div>
              )}
              {cta}
              <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                {t('course.perks').map(x => <li key={x} className="flex gap-2"><Icon name="check" className="h-5 w-5 shrink-0 text-emerald-600" />{x}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container-lx grid gap-10 py-10 lg:grid-cols-[1fr_340px]">
        <div>
          <h2 className="text-xl font-bold">{t('course.about')}</h2>
          <div className="mt-3 space-y-3 leading-7 text-ink-soft">{course.description.split('\n\n').map((t, i) => <p key={i}>{t}</p>)}</div>

          <h2 className="mt-10 text-xl font-bold">{t('course.outcomes')}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {course.outcomes.map(o => (
              <li key={o} className="flex gap-2.5 rounded-xl border border-slate-200 p-3.5 text-sm text-ink-soft"><Icon name="checkCircle" className="h-5 w-5 shrink-0 text-brand-600" />{o}</li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-bold">{t('course.program')}</h2>
          <div className="mt-4 space-y-4">
            {course.modules.map((m, mi) => {
              const ml = lessons.filter(l => l.moduleId === m.id);
              const mdone = ml.filter(l => p.isDone(l.id)).length;
              return (
                <div key={m.id} className="card overflow-hidden">
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 bg-slate-50 px-5 py-3.5">
                    <h3 className="font-semibold">{t('course.module', { n: mi + 1, title: m.title })}</h3>
                    <span className="text-xs font-medium text-ink-mute">{user ? `${mdone}/${ml.length}` : t('units.lessons', { n: ml.length })}</span>
                  </div>
                  <ul className="divide-y divide-slate-100">
                    {ml.map(l => {
                      const done = p.isDone(l.id), open = user && p.isUnlocked(l.id);
                      const row = (
                        <div className={`flex items-center gap-3 px-5 py-3 text-sm ${open ? 'hover:bg-slate-50' : ''}`}>
                          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${done ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-ink-mute'}`}>
                            <Icon name={done ? 'check' : LESSON_TYPE[l.type].icon} className="h-4 w-4" />
                          </span>
                          <span className={`flex-1 ${open ? 'text-ink' : 'text-ink-mute'}`}>{l.title}</span>
                          <span className="hidden text-xs text-ink-mute sm:block">{t(`lesson.types.${l.type}`)} · {t('units.minutes', { n: l.minutes })}</span>
                          {user && !open && <Icon name="lock" className="h-4 w-4 text-slate-400" />}
                        </div>
                      );
                      return <li key={l.id}>{open ? <Link to={lessonUrl(l)}>{row}</Link> : row}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
