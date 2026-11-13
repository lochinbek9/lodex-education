// Brauzerlarda o'zbekcha oy nomlari har doim ham yo'q, shuning uchun sanani o'zimiz formatlaymiz
const MONTHS = {
  uz: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'],
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
};

export function formatDate(iso, lang = 'uz') {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const m = (MONTHS[lang] || MONTHS.uz)[d.getMonth()];
  return lang === 'ru' ? `${d.getDate()} ${m} ${d.getFullYear()} г.` : `${d.getDate()}-${m}, ${d.getFullYear()}`;
}

// Sonni tanlangan til odatiga ko'ra yozish: 16.8 -> "16,8"
export const formatNumber = n => String(n).replace('.', ',');
