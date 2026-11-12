import { useCallback, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { ProgressBar, useTitle } from '../components/ui.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { courseLessons, findCourse, LESSON_TYPE } from '../data/courses.js';
import { completeLesson, getCourseProgress } from '../api/progress.js';
import TextLesson from '../lessons/TextLesson.jsx';
import QuizLesson from '../lessons/QuizLesson.jsx';
import MatchLesson from '../lessons/MatchLesson.jsx';
import SimLesson from '../lessons/SimLesson.jsx';
import NotFound from './NotFound.jsx';

const VIEWS = { text: TextLesson, quiz: QuizLesson, match: MatchLesson, sim: SimLesson };

function Sidebar({ course, lessons, progress, current, onNavigate }) {
  return (
    <nav className="space-y-5">
      {course.modules.map((m, mi) => (
        <div key={m.id}>
          <div className="px-3 text-xs font-semibold uppercase tracking-wide text-ink-mute">{mi + 1}. {m.title}</div>
          <ul className="mt-2 space-y-0.5">
            {lessons.filter(l => l.moduleId === m.id).map(l => {
              const done = progress.isDone(l.id), open = progress.isUnlocked(l.id), active = l.id === current;
              const inner = (
                <span className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm ${active ? 'bg-brand-50 font-semibold text-brand-800' : open ? 'text-ink-soft hover:bg-slate-100' : 'text-slate-400'}`}>
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${done ? 'bg-emerald-500 text-white' : active ? 'border-2 border-brand-500' : 'border border-slate-300'}`}>
                    {done ? <Icon name="check" className="h-3 w-3" strokeWidth={3} /> : !open && <Icon name="lock" className="h-2.5 w-2.5" />}
                  </span>
                  <span className="truncate">{l.title}</span>
                </span>
              );
              return <li key={l.id}>{open ? <Link to={`/kurslar/${course.slug}/dars/${l.id}`} onClick={onNavigate}>{inner}</Link> : inner}</li>;
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default function Lesson() {
  const { slug, lessonId } = useParams();
  const course = findCourse(slug);
  const { user } = useAuth();
  const lessons = course ? courseLessons(course) : [];
  const idx = lessons.findIndex(l => l.id === lessonId);
  const lesson = lessons[idx];
  const [progress, setProgress] = useState(() => course && getCourseProgress(user?.id, course));
  const [busy, setBusy] = useState(false);
  const [justDone, setJustDone] = useState(false);
  const [menu, setMenu] = useState(false);
  useTitle(lesson?.title);

  useEffect(() => { setJustDone(false); setMenu(false); }, [lessonId]);
  useEffect(() => { if (course) setProgress(getCourseProgress(user?.id, course)); }, [course, user, lessonId]);

  const onComplete = useCallback(async result => {
    if (!course || !lesson) return;
    setBusy(true);
    const p = await completeLesson(user.id, course, lesson.id, result);
    setProgress(p);
    setBusy(false);
    setJustDone(true);
  }, [course, lesson, user]);

  if (!course || course.status !== 'open' || !lesson) return <NotFound />;
  if (!progress.isUnlocked(lesson.id)) {
    const target = progress.nextLesson || lessons[0];
    return <Navigate to={`/kurslar/${course.slug}/dars/${target.id}`} replace />;
  }

  const View = VIEWS[lesson.type];
  const done = progress.isDone(lesson.id);
  const rec = progress.lessons[lesson.id];
  const best = lesson.type === 'sim' ? rec?.time : rec?.score;
  const prev = lessons[idx - 1], next = lessons[idx + 1];
  const nextOpen = next && progress.isUnlocked(next.id);
  const finished = !!progress.completedAt;
  // Simulyator darsida maydon kengroq bo'lishi uchun darslar ro'yxati yig'iladi
  const wide = lesson.type === 'sim';

  return (
    <div className={`${wide ? 'mx-auto w-full max-w-7xl px-4 sm:px-6' : 'container-lx lg:grid-cols-[280px_1fr]'} grid gap-6 py-6 lg:py-8`}>
      <aside className={wide ? '' : 'lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto'}>
        <div className="card p-4">
          <div className={wide ? 'flex flex-wrap items-center gap-x-6 gap-y-3' : ''}>
            <Link to={`/kurslar/${course.slug}`} className="flex items-center gap-1.5 px-1 text-sm font-semibold hover:text-brand-700">
              <Icon name="arrowLeft" className="h-4 w-4" />{course.title}
            </Link>
            <div className={`px-1 ${wide ? 'w-48' : 'mt-3'}`}>
              <div className="mb-1.5 flex justify-between text-xs text-ink-mute"><span>{progress.done}/{progress.total} dars</span><span>{progress.percent}%</span></div>
              <ProgressBar percent={progress.percent} />
            </div>
            <button className={`btn-secondary ${wide ? 'ml-auto' : 'mt-4 w-full lg:hidden'}`} onClick={() => setMenu(m => !m)}>
              <Icon name="menu" className="h-4 w-4" />{menu ? 'Darslar ro\'yxatini yopish' : 'Darslar ro\'yxati'}
            </button>
          </div>
          <div className={`mt-5 ${menu ? 'block' : 'hidden'} ${wide ? '' : 'lg:block'}`}>
            <Sidebar course={course} lessons={lessons} progress={progress} current={lesson.id} onNavigate={() => setMenu(false)} />
          </div>
        </div>
      </aside>

      <section className="min-w-0">
        <div className="text-sm text-ink-mute">{lesson.moduleTitle} · {idx + 1}/{lessons.length}-dars</div>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{lesson.title}</h1>
          <span className="badge bg-slate-100 text-ink-soft"><Icon name={LESSON_TYPE[lesson.type].icon} className="h-3.5 w-3.5" />{LESSON_TYPE[lesson.type].label}</span>
          {done && <span className="badge bg-emerald-50 text-emerald-700"><Icon name="check" className="h-3.5 w-3.5" />Bajarilgan</span>}
        </div>

        {justDone && (
          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <Icon name="checkCircle" className="h-7 w-7 text-emerald-600" />
            <div className="flex-1">
              <div className="font-semibold text-emerald-900">{finished && !next ? 'Kurs tugatildi! Tabriklaymiz!' : 'Dars bajarildi!'}</div>
              <div className="text-sm text-emerald-800">
                {finished && !next ? 'Sertifikatingiz tayyor.' : next ? `Keyingi dars ochildi: «${next.title}»` : 'Natija saqlandi.'}
              </div>
            </div>
            {finished && !next
              ? <Link to={`/sertifikat/${course.slug}`} className="btn-primary"><Icon name="award" className="h-4 w-4" />Sertifikat</Link>
              : next && <Link to={`/kurslar/${course.slug}/dars/${next.id}`} className="btn-primary">Keyingi dars<Icon name="arrowRight" className="h-4 w-4" /></Link>}
          </div>
        )}

        <div className="mt-6">
          <View key={lesson.id} lesson={lesson} done={done} best={best} onComplete={onComplete} busy={busy} />
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-slate-200 pt-6">
          {prev ? <Link to={`/kurslar/${course.slug}/dars/${prev.id}`} className="btn-ghost"><Icon name="arrowLeft" className="h-4 w-4" /><span className="hidden sm:inline">{prev.title}</span><span className="sm:hidden">Oldingi</span></Link> : <span />}
          {next && (nextOpen
            ? <Link to={`/kurslar/${course.slug}/dars/${next.id}`} className="btn-secondary"><span className="hidden sm:inline">{next.title}</span><span className="sm:hidden">Keyingi</span><Icon name="arrowRight" className="h-4 w-4" /></Link>
            : <span className="flex items-center gap-1.5 text-sm text-ink-mute"><Icon name="lock" className="h-4 w-4" />Keyingi dars shu darsdan keyin ochiladi</span>)}
          {!next && finished && <Link to={`/sertifikat/${course.slug}`} className="btn-primary"><Icon name="award" className="h-4 w-4" />Sertifikat</Link>}
        </div>
      </section>
    </div>
  );
}
