import { Link } from 'react-router-dom';
import { courseLessons, courseMinutes } from '../data/courses.js';
import Icon from './Icon.jsx';
import { CourseIcon, ProgressBar } from './ui.jsx';

export default function CourseCard({ course, progress }) {
  const soon = course.status === 'soon';
  const lessons = courseLessons(course).length;
  const hours = Math.max(1, Math.round(courseMinutes(course) / 60));
  const body = (
    <div className={`card flex h-full flex-col p-6 transition ${soon ? 'opacity-80' : 'hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg'}`}>
      <div className="flex items-start justify-between gap-3">
        <CourseIcon course={course} />
        {soon ? <span className="badge bg-slate-100 text-ink-mute">Tez kunda</span>
          : course.free && <span className="badge bg-emerald-50 text-emerald-700">Bepul</span>}
      </div>
      <h3 className="mt-5 text-lg font-bold leading-snug">{course.title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-6 text-ink-mute">{course.subtitle}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-ink-mute">
        <span className="flex items-center gap-1"><Icon name="layers" className="h-4 w-4" />{course.level}</span>
        {!soon && <span className="flex items-center gap-1"><Icon name="book" className="h-4 w-4" />{lessons} dars</span>}
        {!soon && <span className="flex items-center gap-1"><Icon name="clock" className="h-4 w-4" />≈ {hours} soat</span>}
      </div>
      {progress && progress.done > 0 && (
        <div className="mt-4">
          <div className="mb-1.5 flex justify-between text-xs font-medium"><span className="text-ink-soft">Jarayon</span><span>{progress.percent}%</span></div>
          <ProgressBar percent={progress.percent} />
        </div>
      )}
    </div>
  );
  return soon ? body : <Link to={`/kurslar/${course.slug}`} className="block h-full rounded-2xl">{body}</Link>;
}
