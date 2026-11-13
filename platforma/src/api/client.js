// Demo backend: ma'lumotlar brauzerdagi localStorage'da saqlanadi.
// Barcha funksiyalar asinxron — haqiqiy REST API'ga o'tishda faqat shu papka o'zgaradi,
// sahifalar va komponentlar o'zgarishsiz qoladi.

const PREFIX = 'lodex:';

export function read(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw == null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function write(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* saqlash imkonsiz (maxfiy rejim) — sessiya xotirasida qoladi */
  }
}

export function remove(key) {
  try { localStorage.removeItem(PREFIX + key); } catch { /* jim */ }
}

// Tarmoq kechikishini taqlid qiladi: yuklanish holatlari haqiqiy ko'rinadi
export const delay = (ms = 250) => new Promise(r => setTimeout(r, ms));

// message — xato kodi (masalan 'emailTaken'); UI uni i18n orqali tanlangan tilga o'giradi: t(`err.${code}`)
export class ApiError extends Error {
  constructor(code, field) {
    super(code);
    this.code = code;
    this.field = field;
  }
}
