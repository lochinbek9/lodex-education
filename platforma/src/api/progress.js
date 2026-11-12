import { read, write, delay } from './client.js';
import { courseLessons } from '../data/courses.js';

// progress[userId][courseSlug] = { lessons: { [lessonId]: { at, score?, time? } }, startedAt, completedAt? }
const all = () => read('progress', {});

export function getCourseProgress(userId, course) {
  const p = (userId && all()[userId]?.[course.slug]) || { lessons: {} };
  const lessons = courseLessons(course);
  const done = lessons.filter(l => p.lessons[l.id]).length;
  return {
    ...p,
    done,
    total: lessons.length,
    percent: lessons.length ? Math.round((done / lessons.length) * 100) : 0,
    isDone: id => !!p.lessons[id],
    // Ketma-ket ochilish: oldingi darslarning hammasi tugagan bo'lsa ochiq
    isUnlocked: id => {
      const i = lessons.findIndex(l => l.id === id);
      return i >= 0 && lessons.slice(0, i).every(l => p.lessons[l.id]);
    },
    nextLesson: lessons.find(l => !p.lessons[l.id]) || null,
  };
}

export async function completeLesson(userId, course, lessonId, result = {}) {
  await delay(120);
  const data = all();
  const user = (data[userId] ||= {});
  const cp = (user[course.slug] ||= { lessons: {}, startedAt: new Date().toISOString() });
  const prev = cp.lessons[lessonId];
  // Takroriy urinishda eng yaxshi natija saqlanadi
  const better = !prev
    || (result.score != null && (prev.score == null || result.score > prev.score))
    || (result.time != null && (prev.time == null || result.time < prev.time));
  if (better) cp.lessons[lessonId] = { at: new Date().toISOString(), ...result };
  const lessons = courseLessons(course);
  if (!cp.completedAt && lessons.every(l => cp.lessons[l.id])) cp.completedAt = new Date().toISOString();
  write('progress', data);
  return getCourseProgress(userId, course);
}

// Sertifikat raqami: foydalanuvchi + kurs + tugatish sanasidan barqaror kod
export function certificateId(userId, course, completedAt) {
  const s = `${userId}|${course.slug}|${completedAt}`;
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return `LX-${(h >>> 0).toString(36).toUpperCase().padStart(7, '0')}`;
}
