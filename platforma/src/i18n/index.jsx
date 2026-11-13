import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import uz from './uz.js';
import ru from './ru.js';
import { COURSES, localizeCourse } from '../data/courses.js';

export const LANGS = [
  { code: 'uz', label: "O'zbekcha", short: 'UZ' },
  { code: 'ru', label: 'Русский', short: 'RU' },
];
const DICTS = { uz, ru };
const KEY = 'lodex:lang';

function initialLang() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved && DICTS[saved]) return saved;
  } catch { /* saqlash yo'q */ }
  return 'uz';
}

const lookup = (dict, key) => key.split('.').reduce((o, k) => (o == null ? o : o[k]), dict);

export { pluralRu } from './plural.js';

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  const setLang = useCallback(l => {
    if (!DICTS[l]) return;
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch { /* jim */ }
  }, []);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const t = useCallback((key, vars) => {
    let v = lookup(DICTS[lang], key);
    if (v == null) v = lookup(uz, key);
    if (v == null) return key;
    if (typeof v === 'function') return v(vars || {});
    if (typeof v === 'string' && vars) return v.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? `{${k}}`));
    return v;
  }, [lang]);

  const courses = useMemo(() => COURSES.map(c => localizeCourse(c, lang)), [lang]);
  const findCourse = useCallback(slug => courses.find(c => c.slug === slug) || null, [courses]);

  const value = useMemo(() => ({ lang, setLang, t, courses, findCourse }), [lang, setLang, t, courses, findCourse]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
