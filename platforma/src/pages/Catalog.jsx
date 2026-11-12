import CourseCard from '../components/CourseCard.jsx';
import { useTitle } from '../components/ui.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { COURSES } from '../data/courses.js';
import { getCourseProgress } from '../api/progress.js';

export default function Catalog() {
  useTitle('Kurslar');
  const { user } = useAuth();
  return (
    <div className="container-lx py-12">
      <h1 className="text-3xl font-bold tracking-tight">Kurslar</h1>
      <p className="mt-2 max-w-2xl text-ink-mute">
        Har bir kurs nazariy darslar, testlar va simulyatordagi amaliy topshiriqlardan iborat.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {COURSES.map(c => <CourseCard key={c.slug} course={c} progress={user && c.status === 'open' ? getCourseProgress(user.id, c) : null} />)}
      </div>
    </div>
  );
}
