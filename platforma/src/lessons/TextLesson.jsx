import { useMemo } from 'react';
import { marked } from 'marked';
import Icon from '../components/Icon.jsx';
import { useI18n } from '../i18n/index.jsx';

marked.setOptions({ gfm: true, breaks: false });

// Dars matni bizning o'zimizniki (data/courses.js), tashqi foydalanuvchi kiritmasi emas
export default function TextLesson({ lesson, done, onComplete, busy }) {
  const { t } = useI18n();
  const html = useMemo(() => marked.parse(lesson.body), [lesson.body]);
  return (
    <div>
      <article className="prose-lx" dangerouslySetInnerHTML={{ __html: html }} />
      {!done && (
        <div className="mt-10 flex justify-end border-t border-slate-100 pt-6">
          <button className="btn-primary" onClick={() => onComplete({})} disabled={busy}>
            <Icon name="check" className="h-4 w-4" />{t('text.readDone')}
          </button>
        </div>
      )}
    </div>
  );
}
