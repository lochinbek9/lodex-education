# Robot simulyatori — prototip

TZ'ning 1-bosqichidagi brauzer simulyatorining birinchi prototipi: Three.js (grafika), Rapier (fizika), Blockly (o'zbekcha bloklar).

## Ishga tushirish

Papka ichida oddiy veb-server kerak (ES modullar `file://` orqali ishlamaydi):

```bash
python3 -m http.server 8765 --directory simulyator
```

Keyin brauzerda `http://localhost:8765` ni oching. Kutubxonalar CDN'dan yuklanadi, internet kerak.

## Nima bor

| Fayl | Vazifasi |
| --- | --- |
| `index.html` | Sahifa tuzilmasi, kutubxonalar |
| `sim.js` | 3D maydon, robot fizikasi, sensorlar (rang, masofa, giroskop, motor burchagi) |
| `fields.js` | Maydonlar: rasm, devorlar, yuklar, topshiriq va namuna dastur |
| `blocks.js` | O'zbekcha Blockly bloklari va JavaScript generatori |
| `python.js` | Bloklardan Python kodi (faqat ko'rish uchun) |
| `pyrunner.js` | Python muharriri: Pyodide, robot moduli, kodni bajarish |
| `app.js` | Maydon tanlash, dasturni bajarish, topshiriq tekshiruvi, WASD boshqaruv, panel |

- Robot: 2 g'ildirakli, motorlar B (chap) va C (o'ng). Odatiy ulanish: giroskop 2-port, rang sensori 3-port, masofa sensori 4-port.
- Har maydonning o'z dasturi brauzerda (localStorage) alohida saqlanadi; "Namuna dastur" tugmasi tayyor yechimni yuklaydi.

## Port xatosi (SIM-5)

- Har sensor blokida port tanlanadi (1–4). "Sensorlar va portlar" panelidagi **Ulanishlar** qatorida qaysi sensor qaysi portga ulanganini o'zgartirish mumkin; band portga ulansa, sensorlar o'rin almashadi.
- Blokdagi port noto'g'ri bo'lsa, dastur to'xtaydi, blokda ogohlantirish belgisi chiqadi va xabar nima qilish kerakligini aytadi, masalan: "3-portda giroskop ulangan, rang sensori emas. Rang sensori 4-portda: blokdagi portni 4 ga o'zgartiring."
- Giroskop ulanmagan bo'lsa, burilish bloki ham xato beradi.

## Qadam-baqadam rejim (SIM-9)

- **Qadam-baqadam** belgilansa, dastur har blokdan oldin to'xtaydi va bajariladigan blok yoritiladi; fizika va topshiriq taymeri ham to'xtaydi.
- **Keyingi qadam** tugmasi yoki **N** tugmasi bitta blokni bajaradi. Rejimni dastur ishlab turganda o'chirsangiz, dastur oddiy tezlikda davom etadi.

## Maydonlar

| Maydon | Topshiriq | Limit | Namuna dastur natijasi |
| --- | --- | --- | --- |
| Bo'sh maydon | Yo'q, erkin sinash; 2 ta suriladigan quti | — | — |
| Chiziq: oddiy aylana | 4 ta nazorat nuqtasi, startga qaytish | 90 s | 30,5 s |
| Chiziq: murakkab trassa | Chapga va o'ngga keskin burilishlar, 4 ta nuqta | 120 s | 45,0 s |
| Labirint | Masofa sensori va giroskop bilan MARRA zonasiga yetish | 120 s | 41,6 s |
| Kvadrat chizish | 50 sm kvadratning 4 ta burchagidan o'tish | 60 s | 16,8 s |
| Yuk tashish (FLL uslubida) | 3 ta yukni ko'k BAZA zonasiga itarish | 120 s | 1/3 yuk (o'quvchi davom ettiradi) |
| Rangni topish (WRO uslubida) | Chiziq bo'ylab yurib, qizil belgida to'xtash | 60 s | 13,2 s |

Yangi maydon qo'shish uchun `fields.js` dagi `FIELDS` ro'yxatiga yangi obyekt qo'shiladi.

## Python ko'rinishi (SIM-8)

- Muharrir ustida yorliqlar: **Bloklar**, **Ikkalasi** (bloklar tepada, Python pastda), **Python (ko'rish)**, **✎ Python muharriri**. Tanlov brauzerda eslab qolinadi.
- Kod bloklardan avtomatik yaratiladi va har o'zgarishda yangilanadi; faqat o'qish uchun. **Nusxa olish** tugmasi kodni nusxalaydi.
- Robot API nomlari ingliz tilida (Python odatiga ko'ra): `robot.steer()`, `robot.tank()`, `robot.move_for()`, `robot.turn()`, `robot.stop()`, `wait()`, `ColorSensor(Port.S3).reflection()`, `.color() == Color.RED`, `DistanceSensor(...).distance()`, `GyroSensor(...).angle()`, `screen.print()`.
- Sensorlar kod boshida e'lon qilinadi, portlar bloklardan olinadi; giroskop porti "Ulanishlar"dan olinadi.
- Generator: `python.js` (Blockly Python generatori asosida).

## Python muharriri

- **✎ Python muharriri** yorlig'i ochiq bo'lsa, ▶ Ishga tushirish (yoki Ctrl+Enter) bloklarni emas, Python kodini ishga tushiradi; tepada "Ishga tushadi: Python kodi" yozuvi chiqadi.
- Kod brauzerda Pyodide orqali bajariladi (birinchi ochilishda ~10 MB yuklanadi, keyin keshdan). Har maydonning Python kodi alohida saqlanadi.
- Bo'sh muharrirga maydonning namuna kodi qo'yiladi; **Bloklardan olish** joriy bloklardan yaratilgan kodni qo'yadi; **Namuna dastur** shu rejimda Python namunasini yuklaydi; **Buyruqlar** — qisqa API ro'yxati.
- Kod ishga tushishdan oldin avtomatik o'zgartiriladi: `wait()`, `robot.turn()`, `robot.move_for()`, `time.sleep()` va o'zingiz yozgan funksiyalar kutiladigan bo'ladi, har sikl simulyatorga navbat beradi — shuning uchun `while True:` sahifani muzlatmaydi va "To'xtatish" doim ishlaydi.
- Joriy qator sariq bilan yoritiladi; qadam-baqadam rejimda dastur har qatordan oldin to'xtaydi.
- Xatolar o'zbekcha va qator raqami bilan, xato qatori qizil bilan belgilanadi: sintaksis, chekinish, nom topilmadi, port xatosi va boshqalar.
- Cheklov: `wait()`/`turn()`/`move_for()` ni sinf (class) metodlari ichida ishlatib bo'lmaydi — oddiy `def` funksiya ishlating.
- Kod: `pyrunner.js` (Python robot moduli, kod o'zgartirgich va xato tarjimasi).

## TZ'ga nisbatan hali yo'q

- Faqat 1 ta robot (TZ: 2 robot).
- Python kodini bloklarga qaytarish, maydon muharriri (SIM-14), ulashish (SIM-16).
- Tegish sensori, rus va ingliz tillari.
- Natijani serverga yozish (progress, reyting).
