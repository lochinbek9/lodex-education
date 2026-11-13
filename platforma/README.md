# Lodex Education — platforma

Robototexnika kurslari uchun veb-platforma: bosh sahifa, kurslar katalogi, ketma-ket ochiladigan darslar, testlar, interaktiv topshiriqlar, simulyatordagi amaliy topshiriqlar, shaxsiy kabinet va sertifikat.

Stek: Vite 5, React 18, React Router 6, Tailwind CSS 3, marked.

## Ishga tushirish

```bash
cd platforma
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ — statik sayt
npm run preview    # build natijasini ko'rish
```

Dev rejimda `/simulyator/` va `/qollanma/` manzillari repo ichidagi `../simulyator` va `../qollanma` papkalaridan beriladi; `npm run build` ularni `dist/` ga ko'chiradi. Shuning uchun simulyator va qo'llanma o'z papkasida tahrirlanadi, platforma ularni avtomatik oladi.

## Tuzilma

| Papka / fayl | Vazifasi |
| --- | --- |
| `src/config.js` | Brend nomi va havolalar (nomni shu yerda o'zgartirish kifoya) |
| `src/data/courses.js` | Kurslar mazmuni: modullar va darslar (o'zbekcha, tuzilma) |
| `src/data/courses.ru.js` | Kurslarning ruscha matnlari |
| `src/i18n/` | Tillar: `uz.js`, `ru.js` lug'atlari, `useI18n()` (`t`, `lang`, `courses`) |
| `src/api/` | Demo backend (localStorage): `auth.js`, `progress.js` |
| `src/pages/` | Sahifalar: bosh, katalog, kurs, dars, kirish, kabinet, sertifikat |
| `src/lessons/` | Dars turlari: matn, test, juftini topish, simulyator |
| `src/components/` | Umumiy komponentlar: sarlavha, footer, kartochkalar, ikonkalar |
| `vite.config.js` | `/simulyator/` va `/qollanma/` ni ulash |
| `vercel.json`, `public/_redirects` | Vercel / Netlify'da SPA marshrutlari |

## Tillar

Sayt o'zbek va rus tilida; til sarlavhadagi UZ/RU tugmasi bilan almashtiriladi va brauzerda eslab qolinadi.

- Interfeys matnlari `src/i18n/uz.js` va `src/i18n/ru.js` da (kalitlar bir xil). Komponentda: `const { t } = useI18n(); t('nav.courses')`.
- Kurs tuzilmasi (id, dars turi, test javoblari, simulyator maydoni) `courses.js` da, ruscha matnlar `courses.ru.js` da. Yangi dars qo'shilsa, ikkala faylga ham yoziladi.
- Server xatolari kod bilan qaytadi (`ApiError('emailTaken')`), UI ularni `err.*` kalitlari orqali tarjima qiladi.
- Simulyator va mentorlar qo'llanmasi hozircha faqat o'zbekcha; ruscha darslarda blok nomlari asl holida, tarjimasi bilan beriladi.

## Dars turlari

Darslar `src/data/courses.js` da yoziladi:

- `text` — markdown matn (`body`)
- `quiz` — test (`questions`, `passPercent`)
- `match` — juftini topish (`pairs`)
- `sim` — simulyator topshirig'i (`field` — simulyator maydoni, `task`, `hints`)

Simulyator darsi `/simulyator/?field=<maydon>&embed=1` ni iframe'da ochadi. Topshiriq bajarilganda simulyator `postMessage` orqali `{ type: 'lodex-sim:result', field, ok, time }` yuboradi, dars sahifasi uni qabul qilib natijani saqlaydi va keyingi darsni ochadi. Dars ichida simulyatorning "Namuna dastur" tugmasi yashiriladi va dastur bo'sh boshlanadi (namuna — ko'pincha topshiriq yechimi).

## Demo backend haqida

Hozircha server yo'q: hisoblar (parol tuz + SHA-256 bilan), jarayon va sertifikatlar foydalanuvchi brauzerining localStorage'ida saqlanadi. `src/api/` dagi barcha funksiyalar asinxron — haqiqiy REST API ulanganda faqat shu papka o'zgaradi.

Haqiqiy ishga tushirishdan oldin kerak bo'ladi:

- server: ro'yxatdan o'tish, kirish (token), jarayonni saqlash, sertifikatni tekshirish;
- simulyator natijasini serverda tekshirish (hozir natija brauzerdan keladi va uni soxtalashtirish mumkin);
- o'qituvchi va maktab paneli, to'lovlar (TZ'dagi keyingi bosqichlar).
