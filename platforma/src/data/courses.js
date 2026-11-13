import RU from './courses.ru.js';

// Kurslar mazmuni. Dars turlari:
//   text  — markdown matn
//   quiz  — test (o'tish bali: passPercent)
//   match — juftini topish (chap ↔ o'ng)
//   sim   — simulyator topshirig'i (field = simulyator maydoni, natija avtomatik qaytadi)

const VR = {
  slug: 'virtual-robototexnika',
  title: 'Virtual robototexnika',
  subtitle: "Brauzerda robotni bloklar bilan dasturlash: harakat, sensorlar va musobaqa topshiriqlari",
  level: "Boshlang'ich",
  status: 'open',
  free: true,
  color: 'from-brand-600 to-indigo-500',
  icon: 'robot',
  description: `Kurs davomida o'quvchi 3D simulyatordagi ikki g'ildirakli robotni dasturlaydi. Hech narsa o'rnatish shart emas: simulyator to'g'ridan-to'g'ri brauzerda ishlaydi.

Avval robotni harakatlantirishni, keyin rang sensori, masofa sensori va giroskopdan foydalanishni o'rganasiz. Har moduldan keyin simulyatorda amaliy topshiriq bajariladi va natija avtomatik tekshiriladi. Kurs oxirida FLL va WRO uslubidagi musobaqa topshiriqlari bor.`,
  outcomes: [
    "Robotni rul va ikki motor bilan aniq harakatlantirish",
    "Rang sensori bilan chiziq bo'ylab yuruvchi proporsional dastur yozish",
    "Masofa sensori va giroskop yordamida labirintdan chiqish",
    "Musobaqa topshiriqlarini mustaqil rejalashtirish va bajarish",
  ],
  modules: [
    {
      id: 'm1', title: 'Simulyator bilan tanishuv',
      lessons: [
        {
          id: 'l1', type: 'text', title: 'Virtual robot nima?', minutes: 5,
          body: `Virtual robot — kompyuter ichidagi robot modeli. U haqiqiy robot kabi g'ildiraklar, motorlar va sensorlarga ega, fizika qonunlariga bo'ysunadi: tezlanadi, to'siqqa uriladi, burilganda inersiya bilan biroz siljiydi.

## Nima uchun simulyator?

- **Hamma uchun ochiq.** Robot to'plami kerak emas — kompyuter yoki planshet va brauzer yetarli.
- **Xato qilish qo'rqinchli emas.** Robot devorga ursa ham, hech narsa sinmaydi. "Qayta boshlash" tugmasi bir soniyada hammasini joyiga qaytaradi.
- **Tez sinov.** Dasturni o'zgartirib, darhol natijani ko'rasiz.

## Bizning robot

Simulyatordagi robot ikki g'ildirakli. Chap g'ildirakni **B** motor, o'ng g'ildirakni **C** motor aylantiradi. Robotda uchta sensor bor:

| Port | Sensor | Nimani o'lchaydi |
| --- | --- | --- |
| 2 | Giroskop | Robot qancha gradusga burilgani |
| 3 | Rang sensori | Pastdagi rang va yorug'lik (0–100%) |
| 4 | Masofa sensori | Oldindagi to'siqqacha masofa (sm) |

Keyingi darsda simulyator oynasi bilan tanishamiz.`,
        },
        {
          id: 'l2', type: 'text', title: 'Simulyator oynasi va birinchi dastur', minutes: 8,
          body: `Simulyator ikki qismdan iborat: chapda **bloklar muharriri**, o'ngda **3D maydon**.

## Dastur qanday tuziladi

Har bir dastur **▶ Dastur boshlanganda** blokidan boshlanadi. Faqat shu blokka ulangan bloklar bajariladi — alohida turgan bloklar e'tiborga olinmaydi.

Bloklar toifalarga bo'lingan:

- **Harakat** — robotni yurgizish va to'xtatish
- **Sensorlar** — sensor qiymatlarini o'qish
- **Boshqaruv** — takrorlash, kutish, shartlar
- **Mantiq** va **Matematika** — solishtirish va hisoblash
- **Ekran** — robot ekraniga matn chiqarish

## Asosiy tugmalar

- **▶ Ishga tushirish** — dasturni bajaradi
- **■ To'xtatish** — dasturni darhol to'xtatadi
- **↺ Qayta boshlash** — robotni start joyiga qaytaradi
- **Qadam-baqadam** — dastur har blokdan oldin to'xtaydi; xatoni topishga juda yordam beradi

Dastur ishlamayotganda robotni klaviaturadagi **W A S D** tugmalari bilan boshqarish mumkin.

> **Maslahat.** Dasturingiz kutilganidek ishlamasa, avval qadam-baqadam rejimni yoqing va sensor qiymatlarini pastki panelda kuzating.`,
        },
        {
          id: 'l3', type: 'quiz', title: 'Tanishuv testi', minutes: 5, passPercent: 60,
          questions: [
            { q: 'Simulyatordagi robotning chap g\'ildiragini qaysi motor aylantiradi?', options: ['A', 'B', 'C', 'D'], answer: 1 },
            { q: 'Qaysi bloklar bajariladi?', options: ['Maydondagi barcha bloklar', '"Dastur boshlanganda" blokiga ulangan bloklar', 'Faqat eng oxirgi qo\'shilgan blok', 'Faqat rangli bloklar'], answer: 1 },
            { q: 'Masofa sensori odatda qaysi portga ulangan?', options: ['1-port', '2-port', '3-port', '4-port'], answer: 3 },
            { q: 'Robotni start joyiga qaytarish uchun qaysi tugma bosiladi?', options: ['■ To\'xtatish', '↺ Qayta boshlash', '▶ Ishga tushirish', 'Namuna dastur'], answer: 1 },
            { q: 'Dasturdagi xatoni topishga qaysi rejim eng ko\'p yordam beradi?', options: ['Qadam-baqadam', 'Kuzatish kamerasi', 'Bo\'sh maydon', 'Python (ko\'rish)'], answer: 0 },
          ],
        },
      ],
    },
    {
      id: 'm2', title: 'Harakat',
      lessons: [
        {
          id: 'l4', type: 'text', title: 'Motorlar va rul bilan yurish', minutes: 10,
          body: `Robotni harakatlantirishning ikki usuli bor.

## 1. Rul bilan yurish

**Rul bilan yurish: rul … quvvat …** bloki ikkala motorni birga boshqaradi.

- **Quvvat** −100 dan 100 gacha. Musbat — oldinga, manfiy — orqaga. 100% quvvatda robot sekundiga taxminan 40 sm yuradi.
- **Rul** −100 dan 100 gacha:

| Rul | Robot nima qiladi |
| --- | --- |
| 0 | To'g'ri yuradi |
| 25 | O'ngga silliq buriladi |
| 50 | O'ng g'ildirak to'xtaydi, robot shu g'ildirak atrofida buriladi |
| 100 | G'ildiraklar qarama-qarshi aylanadi, robot joyida buriladi |

Manfiy qiymatlar xuddi shunday, faqat chapga.

## 2. Ikki motor

**Ikki motor: chap (B) … o'ng (C) …** bloki har bir motorga alohida quvvat beradi. Masalan, chap 30, o'ng −30 — robot joyida o'ngga buriladi.

## Vaqt bo'yicha yurish

**Rul … quvvat … bilan … soniya yurish** bloki belgilangan vaqt yurib, keyin o'zi to'xtaydi. Masofani hisoblash oson: 40% quvvatda tezlik ≈ 16 sm/s, demak 50 sm uchun ≈ 3,1 soniya kerak.

## Aniq burilish

**Giroskop bo'yicha … ° burilish** bloki robotni joyida aniq burchakka buradi: musbat qiymat — o'ngga, manfiy — chapga. Bu blok 2-portdagi giroskopdan foydalanadi.`,
        },
        {
          id: 'l5', type: 'match', title: 'Bloklar va vazifalar', minutes: 5,
          intro: 'Har bir blokni u bajaradigan ishga moslang: chapdan blokni, o\'ngdan vazifani tanlang.',
          pairs: [
            { left: 'Rul 0, quvvat 50', right: 'To\'g\'ri oldinga yuradi' },
            { left: 'Rul 100, quvvat 30', right: 'Joyida o\'ngga aylanadi' },
            { left: 'Giroskop bo\'yicha −90° burilish', right: 'Chapga chorak aylana buriladi' },
            { left: 'Rul 0, quvvat −40', right: 'Orqaga yuradi' },
            { left: 'Motorlarni to\'xtatish', right: 'Robot joyida qoladi' },
          ],
        },
        {
          id: 'l6', type: 'sim', title: 'Amaliyot: kvadrat chizish', minutes: 15, field: 'square',
          task: "Robot tomoni 50 sm bo'lgan kvadrat bo'ylab 1 → 2 → 3 → 4 burchaklardan o'tib, startga 60 soniya ichida qaytishi kerak.",
          hints: [
            "Kvadratning to'rtta tomoni bir xil — \"… marta takrorlash\" blokidan foydalaning.",
            "50 sm ni 40% quvvatda yurish uchun ≈ 3,2 soniya kerak.",
            "Robot birinchi tomondan keyin chapga burilishi kerak: −90°.",
          ],
        },
      ],
    },
    {
      id: 'm3', title: 'Sensorlar',
      lessons: [
        {
          id: 'l7', type: 'text', title: "Rang sensori va chiziq bo'ylab yurish", minutes: 12,
          body: `Rang sensori robotning old qismida, pastga qaragan. U ikki narsani o'lchaydi:

- **yorug'lik** — sirtdan qaytgan yorug'lik, 0–100%. Qora chiziqda ≈ 5, oq maydonda ≈ 100;
- **rang** — qora, oq, qizil, sariq, yashil yoki ko'k.

## Chiziq chetidan yurish

Sensor chiziqning o'rtasida emas, **chetida** yurgani ma'qul: yarmi qora, yarmi oq — o'lchov ≈ 50%. Agar robot chiziq ustiga ko'proq kirsa, qiymat kamayadi; oq tomonga chiqsa — ortadi. Demak, qiymat qaysi tomonga og'ganimizni ko'rsatadi.

## Proporsional boshqaruv

Eng oddiy va ishonchli usul — rulni xatoga proporsional qilish:

\`\`\`
xato = 50 − yorug'lik
rul  = xato × 1,2
\`\`\`

- Sensor qora ustida (yorug'lik 10): xato = 40, rul = 48 — robot o'ngga, chiziqdan uzoqlashadi.
- Sensor oq ustida (yorug'lik 90): xato = −40, rul = −48 — robot chapga, chiziqqa qaytadi.
- Chetda (yorug'lik 50): rul = 0 — to'g'ri yuradi.

Bu hisob **Doimo takrorlash** ichida turadi va sekundiga o'nlab marta qayta bajariladi. **1,2** soni — *koeffitsient*. Katta bo'lsa robot chayqaladi, kichik bo'lsa burilishlarda chiziqdan chiqib ketadi. Uni o'zgartirib tajriba qiling.`,
        },
        {
          id: 'l8', type: 'sim', title: "Amaliyot: chiziq bo'ylab bir aylana", minutes: 15, field: 'oval',
          task: "Robot qora chiziq bo'ylab yurib, 4 ta nazorat nuqtasidan o'tib, startga 90 soniya ichida qaytishi kerak.",
          hints: [
            "Proporsional formulani eslang: rul = (50 − yorug'lik) × 1,2.",
            "Quvvatni 30–40% atrofida tanlang: tez yursa burilishda chiziqdan chiqadi.",
            "Hisobni \"Doimo takrorlash\" bloki ichiga qo'ying.",
          ],
        },
        {
          id: 'l9', type: 'text', title: 'Masofa sensori va giroskop', minutes: 10,
          body: `## Masofa sensori (4-port)

Masofa sensori robot oldidagi to'siqqacha bo'lgan masofani santimetrda o'lchaydi. Oldinda hech narsa bo'lmasa (2,5 m dan uzoq), u **255** ko'rsatadi. Simulyatorda sensorning nuri qizil chiziq bilan ko'rinadi.

Odatiy foydalanish — "devorga yaqinlashguncha yur":

1. Rul bilan yurish: rul 0, quvvat 40
2. **masofa sensori < 12 bo'lguncha kutish**
3. Motorlarni to'xtatish

## Giroskop (2-port)

Giroskop robot qancha gradusga burilganini ko'rsatadi. Soat strelkasi bo'yicha (o'ngga) burilish musbat, chapga — manfiy. To'liq aylana — 360°.

**Giroskopni nolga qaytarish** bloki hisobni boshidan boshlaydi. **Giroskop bo'yicha burilish** bloki esa giroskop qiymatini kuzatib, robotni kerakli burchakda o'zi to'xtatadi.

## Labirint strategiyasi

Labirintda devorlar qaerda ekanini bilsak, dastur oddiy ketma-ketlik bo'ladi: *devorgacha yur → buril → devorgacha yur → buril…* Har burilishni xatosiz bajarish uchun giroskopdan foydalaning — vaqt bo'yicha burilish g'ildirak sirpanishi sabab aniq chiqmaydi.

> **Port xatosi.** Sensor blokidagi port robotdagi ulanishga mos kelmasa, dastur to'xtaydi va qaysi portni tanlash kerakligini aytadi.`,
        },
        {
          id: 'l10', type: 'sim', title: 'Amaliyot: labirint', minutes: 20, field: 'maze',
          task: "Masofa sensori va giroskop yordamida devorlarga urilmasdan yashil MARRA zonasiga 120 soniya ichida yeting.",
          hints: [
            "Har bir yo'lak uchun: devorgacha yurish → to'xtash → burilish.",
            "Burilishlar ketma-ketligi: chapga, chapga, o'ngga, o'ngga.",
            "\"masofa sensori < 12 bo'lguncha kutish\" uchun \"… bo'lguncha kutish\" va solishtirish bloklarini birlashtiring.",
          ],
        },
        {
          id: 'l11', type: 'quiz', title: 'Sensorlar testi', minutes: 6, passPercent: 60,
          questions: [
            { q: "Rang sensori qora chiziq ustida taxminan qancha yorug'lik ko'rsatadi?", options: ['≈ 5%', '≈ 50%', '≈ 100%', '255'], answer: 0 },
            { q: "Proporsional chiziq bo'ylab yurishda sensor qayerda bo'lishi kerak?", options: ['Chiziq o\'rtasida', 'Chiziq chetida', 'Oq maydonda', 'Robotning orqasida'], answer: 1 },
            { q: 'Masofa sensori oldida hech narsa bo\'lmasa nima ko\'rsatadi?', options: ['0', '−1', '100', '255'], answer: 3 },
            { q: 'Robot 90° o\'ngga burilsa, giroskop qiymati qanday o\'zgaradi?', options: ['+90', '−90', '0 bo\'lib qoladi', '+360'], answer: 0 },
            { q: 'Koeffitsient juda katta bo\'lsa robot o\'zini qanday tutadi?', options: ['Chiziqdan butunlay chiqib ketadi', 'Kuchli chayqaladi', 'To\'xtab qoladi', 'Orqaga yuradi'], answer: 1 },
          ],
        },
      ],
    },
    {
      id: 'm4', title: 'Musobaqa topshiriqlari',
      lessons: [
        {
          id: 'l12', type: 'sim', title: 'Murakkab trassa', minutes: 20, field: 'complex',
          task: "Chapga va o'ngga keskin burilishli trassada 4 ta nazorat nuqtasidan o'tib, startga 120 soniya ichida qayting.",
          hints: [
            "Oddiy aylanadagi dastur asos bo'ladi, lekin quvvatni pasaytiring (≈ 30%).",
            "O'ngga keskin burilishda robot chiziqni yo'qotsa, koeffitsientni biroz oshiring.",
          ],
        },
        {
          id: 'l13', type: 'sim', title: 'Rangni topish (WRO uslubida)', minutes: 15, field: 'color',
          task: "Chiziq yonida 4 ta rang belgisi bor. Robot chiziq bo'ylab yurib, rang sensori qizil belgida bo'lganda to'xtashi va 1 soniya turishi kerak.",
          hints: [
            "\"… gacha takrorlash\" blokiga \"rang sensori qizil rangni ko'rsa\" shartini qo'ying.",
            "Takrorlash ichida — chiziq bo'ylab yurish, undan keyin — motorlarni to'xtatish.",
          ],
        },
        {
          id: 'l14', type: 'sim', title: 'Yuk tashish (FLL uslubida)', minutes: 25, field: 'cargo',
          task: "3 ta to'q sariq yukni ko'k BAZA zonasiga 120 soniya ichida itarib olib boring.",
          hints: [
            "Namuna dastur faqat o'rtadagi yukni olib boradi — qolgan ikkitasi uchun yo'l rejasini qog'ozda chizing.",
            "Har yukdan keyin startga qaytish shart emas: yukni bazaga itargach, orqaga chekinib, keyingisiga buriling.",
            "Giroskop bo'yicha burilish va vaqt bo'yicha yurish bloklarini birga ishlating.",
          ],
        },
        {
          id: 'l15', type: 'text', title: 'Keyingi qadam: Python', minutes: 8,
          body: `Tabriklaymiz — siz bloklar bilan robotni to'liq boshqarishni o'rgandingiz! Endi xuddi shu dasturlarni **Python** tilida yozib ko'rish vaqti.

## Bloklardan Pythonga

Simulyatorda **Python (ko'rish)** yorlig'ini oching: bloklaringiz qanday Python kodiga aylanishini ko'rasiz. Masalan, chiziq bo'ylab yurish dasturi:

\`\`\`python
from robot import *

robot = Robot(left=Port.B, right=Port.C)
rang = ColorSensor(Port.S3)

while True:
    xato = 50 - rang.reflection()
    robot.steer(xato * 1.2, 35)
\`\`\`

## Python muharriri

**✎ Python muharriri** yorlig'ida kodni o'zingiz yozasiz va ▶ tugmasi bilan ishga tushirasiz. Kod brauzerning o'zida bajariladi, xatolar o'zbekcha va qator raqami bilan ko'rsatiladi.

Mashq uchun: oddiy aylana topshirig'ini Pythonda bajaring, keyin koeffitsientni o'zgaruvchiga chiqarib, eng tez natijani toping.`,
        },
      ],
    },
  ],
};

export const COURSES = [
  VR,
  {
    slug: 'python-robototexnika', title: 'Python bilan robototexnika',
    subtitle: 'Simulyatordagi robotni Python tilida dasturlash: funksiyalar, ro\'yxatlar va PID boshqaruv',
    level: "O'rta", status: 'soon', color: 'from-emerald-500 to-teal-500', icon: 'code', modules: [],
  },
  {
    slug: 'arduino-asoslari', title: 'Arduino asoslari',
    subtitle: 'Elektronika va mikrokontrollerlar: LED, tugma, sensorlar va servo motor',
    level: "Boshlang'ich", status: 'soon', color: 'from-amber-500 to-orange-500', icon: 'chip', modules: [],
  },
];

// Tarjima: tuzilma (id, tur, javob indekslari, simulyator maydoni) shu fayldan, matnlar tarjima faylidan
export function localizeCourse(course, lang) {
  const o = lang === 'ru' ? RU[course.slug] : null;
  if (!o) return course;
  const mergeLesson = l => {
    const tr = o.lessons?.[l.id];
    if (!tr) return l;
    const out = { ...l, ...tr };
    if (l.questions && tr.questions) out.questions = l.questions.map((q, i) => ({ ...q, ...(tr.questions[i] || {}) }));
    if (l.pairs && tr.pairs) out.pairs = l.pairs.map((p, i) => ({ ...p, ...(tr.pairs[i] || {}) }));
    return out;
  };
  return {
    ...course, ...o.course,
    modules: course.modules.map(m => ({ ...m, ...(o.modules?.[m.id] || {}), lessons: m.lessons.map(mergeLesson) })),
  };
}

export const courseLessons = course => course.modules.flatMap(m => m.lessons.map(l => ({ ...l, moduleId: m.id, moduleTitle: m.title })));
export const findCourse = slug => COURSES.find(c => c.slug === slug) || null;
export const courseMinutes = course => courseLessons(course).reduce((s, l) => s + (l.minutes || 0), 0);

export const LESSON_TYPE = {
  text: { icon: 'doc' },
  quiz: { icon: 'check' },
  match: { icon: 'puzzle' },
  sim: { icon: 'robot' },
};
