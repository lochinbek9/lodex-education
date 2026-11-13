import CourseCard from '../components/CourseCard.jsx';
import { useTitle } from '../components/ui.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useI18n } from '../i18n/index.jsx';
import { getCourseProgress } from '../api/progress.js';

export default function Catalog() {
  const { t, courses } = useI18n();
  useTitle(t('titles.courses'));
  const { user } = useAuth();
  return (
    <div className="container-lx py-12">
      <h1 className="text-3xl font-bold tracking-tight">{t('catalog.title')}</h1>
      <p className="mt-2 max-w-2xl text-ink-mute">{t('catalog.sub')}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(c => <CourseCard key={c.slug} course={c} progress={user && c.status === 'open' ? getCourseProgress(user.id, c) : null} />)}
      </div>
    </div>
  );
}
