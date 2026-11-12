# Lodex Education

Robototexnika va dasturlashni o'zbek tilida, brauzerda o'rganish uchun loyiha.

| Papka | Nima | Ishga tushirish |
| --- | --- | --- |
| [`platforma/`](platforma/) | Veb-platforma: kurslar, darslar, kabinet, sertifikat (Vite + React) | `cd platforma && npm install && npm run dev` |
| [`simulyator/`](simulyator/) | 3D robot simulyatori: bloklar, Python, 7 ta maydon | `python3 -m http.server 8765 --directory simulyator` |
| [`qollanma/`](qollanma/) | Mentorlar uchun sinflar bo'yicha metodik qo'llanma | `python3 -m http.server 8766` va `/qollanma/` |

Platforma dev rejimda va build'da simulyator hamda qo'llanmani o'z ichiga oladi: `http://localhost:5173/simulyator/` va `http://localhost:5173/qollanma/`.

## Deploy

`platforma/` dan statik sayt yig'iladi:

```bash
cd platforma && npm install && npm run build
```

`platforma/dist/` papkasi istalgan statik hostingga joylanadi. Vercel uchun qo'shimcha sozlash kerak emas: repo ildizidagi `vercel.json` platformani o'rnatadi, build qiladi, `platforma/dist` ni beradi va SPA marshrutlarini sozlaydi (Vercel'da Root Directory bo'sh — repo ildizi — qoladi).
