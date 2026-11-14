// 6-sinf · 9–16-darslar: 2-modul. Analog signallar, sensorlar va aktuatorlar
// Format sinf6.js bilan bir xil.
window.QOLLANMA.grades[6].lessons.push(
  {
    n: 9, mod: 2, t: "Analog signallar va PWM: Silliq yorug'lik",
    goal: "O'quvchilar raqamli (Digital) va analog (Analog) signallarning farqini, PWM (Pulse Width Modulation — Kenglik-impuls modulyatsiyasi) texnologiyasini va `analogWrite()` funksiyasini o'rganadi.",
    out: ["Raqamli (0 yoki 1) va analog (oraliq qiymatlar) farqini tushuntiradi", "Arduino platasidagi PWM pinlarini (tilda `~` belgili: 3, 5, 6, 9, 10, 11) ko'rsatadi", "LED yorug'ligini 0 dan 255 gacha silliq oshirib-kamaytiruvchi (Nafas oluvchi chiroq) kod yozadi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Raqamli chiroq faqat yonadi yoki o'chadi. Chiroqni xira yoki o'rtacha qilish mumkinmi? PWM siri."], ["8", "Yangi mavzu: Kenglik-impuls modulyatsiyasi (PWM). `~` belgili pinlar va `analogWrite(pin, 0..255)`."], ["23", "Amaliy ish: «Nafas oluvchi LED chiroq» (Breathing LED)."], ["4", "«Saralash» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Arduino aslida sof analog kuchlanish chiqarmaydi, u 5V ni soniyasiga 500 marta juda tez yoqib-o'chiradi (Duty cycle). Ko'zimiz bu tezlikni ilg'amay, chiroq xira yonayotgandek ko'radi.", "`analogWrite()` faqat PWM qo'llab-quvvatlaydigan pinlarda (yonida to'lqin `~` belgisi bor: 3, 5, 6, 9, 10, 11) ishlashini alohida eslatib o'ting."],
    pt: "Amaliy ish: «Nafas oluvchi LED chiroq»",
    steps: [
      "Tinkercad Circuits'da yangi sxema oching: Arduino Uno, Breadboard va bitta LED (220 Om rezistor bilan).",
      "DIQQAT: LEDning musbat oyog'ini 9-pinga ulang (chunki 9-pin yonida `~` to'lqin belgisi bor — u PWM pini!).",
      "Kod oynasini oching:",
      "`void setup()` ichida: `pinMode(9, OUTPUT);`",
      "`void loop()` ichida `for` sikli yordamida yorug'likni silliq oshiramiz:",
      "`for (int i = 0; i <= 255; i += 5) { analogWrite(9, i); delay(30); }`",
      "Keyin yorug'likni silliq kamaytiramiz:",
      "`for (int i = 255; i >= 0; i -= 5) { analogWrite(9, i); delay(30); }`",
      "«Start Simulation» ni bosing: chiroq xuddi inson nafasi kabi ohista yorishadi va ohista xiralashadi!"
    ],
    extra: ["Nafas olish tezligini `delay(10)` qilib tezlashtiring yoki `delay(60)` qilib sekinlashtiring.", "Uch xil rangdagi LEDlarni turli PWM pinlariga ulab, bir-biriga mos keluvchi to'lqinlar hosil qiling."],
    ask: [
      ["Raqamli signal bilan analog signalning farqi nimada?", "Raqamli faqat 2 ta holatga ega (0 yoki 1). Analog signal esa oraliqdagi istalgan silliq qiymatni qabul qila oladi."],
      ["PWM so'zining ma'nosi nima?", "Pulse Width Modulation — Kenglik-impuls modulyatsiyasi."],
      ["`analogWrite()` funksiyasida qiymatlar qaysi oraliqda kiritiladi?", "0 dan 255 gacha (0 — to'liq o'chiq, 255 — maksimal yorqin)."],
      ["Arduino Uno'da qaysi pinlar PWM pinlari hisoblanadi?", "Yonida `~` to'lqin belgisi bor pinlar: 3, 5, 6, 9, 10 va 11."]
    ],
    quiz: [
      ["PWM orqali analog chiqish beruvchi funksiya qaysi?", "analogWrite()", "analogRead()", "digitalWrite()"],
      ["`analogWrite()` ning eng yuqori maksimal qiymati necha?", "255", "1023", "100"],
      ["Arduino Uno'da PWM pinlari qaysi belgi bilan belgilanadi?", "~ (to'lqin belgisi)", "# (panjara)", "* (yulduzcha)"],
      ["Agar `analogWrite(9, 127)` kodi berilsa, chiroq qanday yonadi?", "Yarim yorqinlikda (50%)", "Maksimal yorqin", "Yonmaydi"],
      ["Nega ko'zimiz chiroqning miltillashini sezmaydi?", "Chunki u sekundiga 500 marta juda tez almashadi (ko'z inersiyasi)", "Chunki ko'zimiz ko'rmaydi", "Chunki kuchlanish juda past"]
    ],
    game: {
      type: "sort",
      title: "Raqamlilimi (Digital) yoki Analog?",
      desc: "Signallar va qurilmalarni guruhlang:",
      cats: ["Raqamli (Digital: 0 yoki 1)", "Analog (Silliq oraliq)"],
      items: [
        ["Xona chirog'ining oddiy o'chirg'ichi", 0],
        ["Chiroq yorug'ligini burab sozlovchi dimmer", 1],
        ["Musobaqa start to'pponchasi ovozi", 0],
        ["Musiqaning balandlik darajasi", 1],
        ["Kompyuter klaviaturasi tugmasi", 0],
        ["Harorat o'zgarishi (15°C..35°C)", 1]
      ]
    },
    topic: [
      { e: "🌊", h: "PWM — raqamli dunyodagi analog illyuziya", p: "Kompyuterlar tabiatan faqat 0 va 1 ni tushunadi. Lekin ular 0 va 1 ni shunchalik tez almashtiradiki, inson ko'zi va motorlar buni silliq o'rtacha qiymat deb qabul qiladi.", q: "Dronlar motori tezligi qanday boshqariladi?", a: "Aynan PWM signallari orqali." },
      { e: "🔢", h: "Nega aynan 255?", p: "Kompyuter xotirasida 1 bayt = 8 bit. 8 ta ikkilik raqam bilan eng ko'pi bilan $2^8 = 256$ xil holatni (0 dan 255 gacha) yozish mumkin. Shuning uchun 255 — dasturchilarning sehrli sonidir.", q: "Yarim yorug'lik necha bo'ladi?", a: "255 / 2 = 127." },
      { e: "💡", h: "Zamonaviy gadjetlarda nafas chirog'i", p: "Apple noutbuklarida uyqu rejimiga (Sleep mode) o'tganda kichik oq chiroq xuddi shunday silliq yonib-o'chadi. Bu kompyuterning «uxlab dam olayotganini» ko'rsatadi.", q: "Sizning telefoningizda ham shunday indikator bormi?", a: "Bildirishnomalar indikatorida bo'lishi mumkin." }
    ],
    prog: [{ t: "Silliq yorug'lik kodi", b: ["y:⚙️ pinMode(9, OUTPUT);", "o:🔁 for (int i = 0; i <= 255; i++)", "b:💡 analogWrite(9, i);", "r:⏳ delay(15);", "o:🔁 for (int i = 255; i >= 0; i--)", "b:💡 analogWrite(9, i);", "r:⏳ delay(15);"] }],
    video: [["wY9kQz1B-lM", "Arduino PWM nima va analogWrite"], ["a68_g2IpepU", "Tinkercad Circuits: PWM and Breathing LED"]],
    yq: "arduino pwm analogwrite tutorial breathing led tinkercad",
    hw: ["Daftaringizga 0%, 25%, 50%, 75%, 100% yorug'lik uchun `analogWrite` qiymatlarini hisoblab yozing (0 dan 255 gacha)."]
  },
  {
    n: 10, mod: 2, t: "Potensiometr (O'zgaruvchan qarshilik) va analogRead()",
    goal: "O'quvchilar potensiometrning (aylanma regulyator) tuzilishi, Arduino analog kirish pinlari (A0–A5), 10-bitli o'qish (0–1023) hamda `map()` masshtablash funksiyasini o'rganadi.",
    out: ["Potensiometrning 3 ta oyog'ini (5V, Signal, GND) to'g'ri ulaydi", "`analogRead(A0)` yordamida burilish burchagini o'lchaydi", "`map()` funksiyasi bilan 0–1023 sonini 0–255 diapazonga o'giring"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Musiqa karnayining ovozini yoki ventilyator tezligini nima bilan burab sozlaymiz? Potensiometr siri."], ["8", "Yangi mavzu: Potensiometr (o'zgaruvchan qarshilik), Arduino A0–A5 pinlari (Analog-to-Digital Converter, 0–1023) va `map()`."], ["23", "Amaliy ish: «Qo'lda boshqariladigan LED yorug'ligi»."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Potensiometrning chetki ikki oyog'iga 5V va GND ulanadi (qaysi biri qayerga ulanishi farqsiz, faqat burilish yo'nalishi o'zgaradi). O'rtadagi oyog'i esa har doim sirpanuvchi kontakt (Signal) bo'lib, A0 pinga ulanadi.", "`analogRead()` natijasi 0 dan 1023 gacha, `analogWrite()` esa 0 dan 255 gacha qabul qiladi. Ularni bir-biriga moslash uchun `val = map(val, 0, 1023, 0, 255);` yoki shunchaki 4 ga bo'lish (`val / 4`) ishlatiladi."],
    pt: "Amaliy ish: «Yorug'lik regulyatori (Dimmer)»",
    steps: [
      "Tinkercad Circuits'da Arduino, Breadboard va bitta LED (9-PWM pinga 220 Om bilan ulangan) qo'ying.",
      "Kutubxonadan «Potentiometer» oling va Breadboardga o'rnating.",
      "1-oyog'ini (Terminal 1) 5V qatoriga ulang.",
      "3-oyog'ini (Terminal 2) GND manfiy qatoriga ulang.",
      "O'rtadagi 2-oyog'ini (Wiper / Siljituvchi) Arduino'ning «A0» analog piniga ulang.",
      "Kod oynasiga o'ting:",
      "`void setup()` ichida: `pinMode(9, OUTPUT);`",
      "`void loop()` ichida:",
      "1) Potensiometrni o'qiymiz: `int x = analogRead(A0);` (natija: 0..1023)",
      "2) Masshtablaymiz: `int yoruglik = map(x, 0, 1023, 0, 255);`",
      "3) Chiroqqa chiqaramiz: `analogWrite(9, yoruglik);`",
      "Simulyatsiyani yoqing va sichqoncha bilan potensiometr dastasini buring: chiroq o'zingiz burganingizga qarab xiralashadi va yorishadi!"
    ],
    extra: ["Potensiometr bilan sirena tovushining chastotasini boshqaring (`tone(8, x)`).", "Serial Monitor'ni yoqib, A0 dagi sonlar qanday o'zgarayotganini kompyuter ekranida ko'ring."],
    ask: [
      ["Potensiometr nima?", "Qarshiligini burash orqali o'zgartirish mumkin bo'lgan o'zgaruvchan rezistor."],
      ["Arduino'da nechta analog kirish (Analog In) pini bor?", "6 ta (A0 dan A5 gacha)."],
      ["`analogRead(A0)` qanday sonlar oralig'ida javob qaytaradi?", "0 dan 1023 gacha (10-bitli aniqlik: $2^{10} = 1024$)."],
      ["`map()` funksiyasi nima uchun kerak?", "Bir o'lchov oralig'idagi sonni ikkinchi o'lchov oralig'iga proporsional aylantirish uchun (masalan, 0..1023 ni 0..255 ga)."]
    ],
    quiz: [
      ["Analog kirish pinlarida maksimal son necha bo'ladi?", "1023 (5 Voltda)", "255", "100"],
      ["Potensiometrning o'rta oyog'i qayerga ulanadi?", "A0 analog pinga", "Faqat 5V ga", "Faqat GND ga"],
      ["`map(512, 0, 1023, 0, 255)` kodi qanday natija beradi?", "Taxminan 127 (o'rtasi)", "0", "255"],
      ["Avtomobil gaz pedali qanday datchik asosida ishlaydi?", "Potensiometr (bosish darajasini o'lchaydi)", "Oddiy tugma", "Lampochka"],
      ["Analog pinlarni `pinMode()` bilan sozlash shartmi?", "Shart emas, ular doim kirish (INPUT) rejimida turadi", "Albatta shart", "Faqat OUTPUT qilinadi"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Potensiometr bilan boshqaruv",
      steps: [
        "Potensiometr chetlariga 5V va GND, o'rtasiga A0 ni ulash",
        "analogRead(A0) orqali burilish qiymatini (0..1023) o'qish",
        "map() funksiyasi yordamida qiymatni 0..255 oralig'iga o'tkazish",
        "analogWrite(9, yoruglik) orqali LEDga chiqarish",
        "Dastani burab, real vaqtda natijani tekshirish"
      ]
    },
    topic: [
      { e: "🎛️", h: "Har kuni ishlatadigan buyumimiz", p: "Avtomobildagi ovoz balandligini sozlash dumi, joystiklar, mikroto'lqinli pech vaqti — barchasi ichida potensiometr yashiringan. U insonning mexanik harakatini kompyuter tushunadigan kuchlanishga aylantirib beradi.", q: "O'yin joystigida nechta potensiometr bor?", a: "2 ta (biri X o'qi, ikkinchisi Y o'qi uchun)." },
      { e: "📊", h: "ADC — Analog-Raqamli o'zgartirgich", p: "Arduino ichida maxsus «ADC» moduli bor. U 0 dan 5 Volt oralig'idagi uzluksiz kuchlanishni 1024 ta mayda zinalarga bo'lib, raqamli songa aylantiradi: 0V = 0, 2.5V = 512, 5V = 1023.", q: "Nega kompyuterga raqam kerak?", a: "Chunki protsessor faqat sonlar bilan hisob-kitob qila oladi." },
      { e: "🗺️", h: "map() — universal matematik ko'prik", p: "Tasavvur qiling, maktabdagi 5 baholik tizimni 100 ballik tizimga o'tkazmoqchisiz. `map()` funksiyasi aynan shunday masshtablash formulasidir: `map(baho, 2, 5, 40, 100)`.", q: "Bu dasturchining ishini osonlashtiradimi?", a: "Juda ham, qo'lda murakkab kasr formulalari yozish shart emas!" }
    ],
    prog: [{ t: "Potensiometr va Dimmer kodi", b: ["o:🔁 int pot = analogRead(A0);", "g:📐 int val = map(pot, 0, 1023, 0, 255);", "b:💡 analogWrite(9, val);", "r:⏳ delay(10);"] }],
    video: [["wY9kQz1B-lM", "Arduino analogRead va Potensiometr"], ["a68_g2IpepU", "Tinkercad Circuits: Potentiometer dimmer"]],
    yq: "arduino potentiometer analogread map function tutorial tinkercad",
    hw: ["Daftaringizga potensiometrning 3 ta oyog'i qayerga ulanishini sxema tarzida chizing."]
  },
  {
    n: 11, mod: 2, t: "Fotorezistor (LDR) va aqlli tungi chiroq",
    goal: "O'quvchilar yorug'likka sezgir fotorezistor (LDR — Light Dependent Resistor), kuchlanish bo'lgich (Voltage Divider) sxemasi va qorong'i tushganda avtomatik yonadigan aqlli ko'cha chirog'ini yaratadi.",
    out: ["Fotorezistor yorug'lik tushganda qarshiligi qanday o'zgarishini tushuntiradi", "Fotorezistor va 10 kOm rezistordan kuchlanish bo'lgich zanjirini yig'adi", "Atrof qorong'ilashganda o'zi avtomatik yonadigan aqlli chiroqni dasturlaydi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Shahardagi ko'cha chiroqlarini har kuni kechqurun kim yoqadi? Odammi yoki datchik?"], ["8", "Yangi mavzu: Fotorezistor (LDR) — yorug'da qarshiligi kamayadi, qorong'ida qarshiligi oshadi. Kuchlanish bo'lgich sxemasi."], ["23", "Amaliy ish: «Aqlli tungi chiroq» (Night Lamp)."], ["4", "«Juftini top» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Fotorezistor ham xuddi oddiy rezistor kabi o'zgaradi, lekin uning qarshiligini odam emas, fotonlar (yorug'lik nurlari) boshqaradi.", "Tinkercad Circuits simulyatsiyasida fotorezistor ustiga bossangiz, quyosh/oy slayderi paydo bo'ladi — uni surib yorug'lik va qorong'ilikni sinash mumkin."],
    pt: "Amaliy ish: «Avtomatik ko'cha chirog'i»",
    steps: [
      "Tinkercad Circuits'da Arduino, Breadboard va bitta LED (13-pinga ulangan) qo'ying.",
      "Kutubxonadan «Photoresistor» (Fotorezistor) oling va Breadboardga qo'ying.",
      "1-oyog'ini 5V quvvatga ulang.",
      "2-oyog'iga 10 kOm rezistor ulab, uning ikkinchi uchini GND ga ulang (kuchlanish bo'lgich!).",
      "Fotorezistor va 10 kOm rezistor tutashgan joydan sim olib, Arduino «A1» analog piniga ulang.",
      "Kod oynasiga o'ting:",
      "`void setup()` ichida: `pinMode(13, OUTPUT);`",
      "`void loop()` ichida:",
      "`int yoruglik = analogRead(A1);`",
      "`if (yoruglik < 500) { digitalWrite(13, HIGH); }` // Qorong'i bo'lsa chiroq yonsin",
      "`else { digitalWrite(13, LOW); }` // Yorug' bo'lsa o'chsin",
      "Simulyatsiyani yoqing, fotorezistor ustiga bosing va slayderni qorong'i (oy) tomonga suring — LED darhol o'zi yonadi!"
    ],
    extra: ["Chiroqni shunchaki yoqmasdan, qorong'ilik darajasiga qarab PWM bilan silliq yoritib boradigan qiling.", "Serial Monitor'da joriy yorug'lik sonini kuzating va chegaraviy sonni (chegara qiymatini) aniq sozlang."],
    ask: [
      ["Fotorezistor nima?", "Atrofdagi yorug'lik darajasiga qarab o'z qarshiligini o'zgartiruvchi yarimo'tkazgichli datchik."],
      ["Qorong'i tushganda fotorezistorning qarshiligi nima bo'ladi?", "Qarshiligi juda oshadi (yuzlab kilo-Omgacha)."],
      ["Yorug'lik tushganda-chi?", "Qarshiligi keskin kamayadi."],
      ["Aqlli ko'cha chirog'i insoniyatga qanday foyda keltiradi?", "Elektr energiyasini tejaydi: faqat quyosh botganda yonadi va tong otganda o'zi o'chadi."]
    ],
    quiz: [
      ["Fotorezistorning xalqaro qisqartma nomi qaysi?", "LDR (Light Dependent Resistor)", "LED", "LCD"],
      ["Fotorezistordan signal olish uchun qanday zanjir yig'iladi?", "Kuchlanish bo'lgich (Voltage divider)", "Qisqa tutashuv", "Faqat bitta sim"],
      ["Qorong'ida A1 pinidan o'qilgan son odatda qanday bo'ladi?", "Kichik bo'ladi (kamayadi)", "1000 dan oshadi", "Har doim 0 bo'ladi"],
      ["Fotorezistorlar yana qayerda ishlatiladi?", "Telefon ekranining avto-yorug'lik datchigida, quyosh panellarida", "Muzlatgich ichida", "Avtomobil g'ildiragida"],
      ["`if (yoruglik < 500)` sharti nimani tekshiradi?", "Yorug'lik 500 dan kamayganda (qorong'i tushganda)", "Yorug'lik juda ko'payganda", "Haroratni"]
    ],
    game: {
      type: "memory",
      title: "Juftini top: Yorug'lik sensori",
      pairs: [
        ["LDR", "Yorug'likka bog'liq rezistor"],
        ["Qorong'ilik", "Katta qarshilik"],
        ["Yorug'lik", "Kichik qarshilik"],
        ["Aqlli ko'cha chirog'i", "Kechasi avtomatik yonadi"],
        ["A1 pini", "Analog yorug'lik signali"],
        ["10 kOm rezistor", "Kuchlanish bo'lgich yordamchisi"]
      ]
    },
    topic: [
      { e: "☀️", h: "Quyoshga ergashuvchi datchik", p: "Fotorezistor ichidagi kadmiy sulfid moddasi yorug'lik zarrachalarini (fotonlarni) yutib, elektronlarni harakatga keltiradi. Quyosh qancha yorqin bo'lsa, tok shuncha oson oqadi.", q: "Quyosh panellari qanday qilib quyoshga qarab buriladi?", a: "Ikkita fotorezistor solishtirilib, quyosh tomonga qarab motor aylanadi." },
      { e: "📱", h: "Telefoningizdagi avto-yorug'lik", p: "Ko'chaga chiqqaningizda telefon ekrani o'z-o'zidan yorqinlashadi, qorong'i xonada esa ko'zni charchatmaslik uchun xiralashadi. Bu ishni telefon ustidagi mitti fotodatchik bajaradi.", q: "Bu batareyani tejashga yordam beradimi?", a: "Albatta, eng ko'p quvvatni ekran sarflaydi." },
      { e: "🌍", h: "Yashil energiya va ekologiya", p: "Agar butun shahar chiroqlari tong otganda o'z vaqtida o'chsa, davlat millionlab kilovatt elektr energiyasini tejaydi va havoga chiqadigan karbon gazini kamaytiradi.", q: "Dasturchilar tabiatni asray oladimi?", a: "Ha, aqlli algoritmlar orqali resurslarni tejash mumkin!" }
    ],
    prog: [{ t: "Aqlli ko'cha chirog'i", b: ["o:🔁 int nur = analogRead(A1);", "g:❓ Agar (nur < 400) // Qorong'i", "b:💡 digitalWrite(13, HIGH); // Yoqish", "g:❗ Aks holda // Yorug'", "b:⚫ digitalWrite(13, LOW);  // O'chirish"] }],
    video: [["wY9kQz1B-lM", "Arduino LDR sensor va aqlli chiroq"], ["a68_g2IpepU", "Tinkercad Circuits: Photoresistor Night Light"]],
    yq: "arduino photoresistor ldr tutorial night light tinkercad circuits",
    hw: ["Uyingizdagi avtomatik yorug'lik datchigi bor qurilmalarni aniqlang va daftarga yozing."]
  },
  {
    n: 12, mod: 2, t: "Servomotor (SG90) asoslari: Aniq burchakka burilish",
    goal: "O'quvchilar oddiy motor va servomotorning farqini, servomotorning 0° dan 180° gacha aniq burchakka burilish mexanizmini va `<Servo.h>` kutubxonasi bilan ishlashni o'rganadi.",
    out: ["Oddiy doimiy tok dvigateli (DC motor) va servomotor farqini tushuntiradi", "Servomotorning 3 ta simini (Signal, 5V, GND) to'g'ri ulaydi", "`Servo.h` kutubxonasini ulab, `myservo.write(90)` bilan to'siq darvozasini (shlagbaum) boshqaradi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Oddiy motor faqat to'xtovsiz aylanadi. Samolyot qanoti yoki robot qo'lini roppa-rosa 45 gradusga qanday burish mumkin?"], ["8", "Yangi mavzu: Servomotor (SG90). Ichki reduktor, potensiometr va qayta aloqa tizimi. `<Servo.h>` kutubxonasi."], ["23", "Amaliy ish: «Avtomat shlagbaum to'sig'i»."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Servomotor simlari rang kodi: Jigarrang yoki qora = GND (-), Qizil = 5V (+), To'q sariq yoki sariq = Signal (PWM piniga).", "Servomotor ichida o'z motori, tishli g'ildiraklari (reduktor) va qaysi burchakda turganini biluvchi ichki datchik borligini tushuntiring."],
    pt: "Amaliy ish: «Aqlli shlagbaum to'sig'i»",
    steps: [
      "Tinkercad Circuits'da yangi sxema oching: Arduino Uno va Breadboard.",
      "Kutubxonadan «Micro Servo» (SG90 servomotori) oling.",
      "Servomotor simlarini ulang:",
      "1) GND (qora/jigarrang) $\\rightarrow$ Arduino GND ga,",
      "2) Power (qizil) $\\rightarrow$ Arduino 5V ga,",
      "3) Signal (to'q sariq) $\\rightarrow$ Arduino 9-raqamli PWM piniga.",
      "Kod oynasini oching va C++ matn rejimiga o'ting:",
      "Eng tepaga kutubxonani ulang: `#include <Servo.h>`",
      "Obyekt yarating: `Servo shlagbaum;`",
      "`void setup()` ichida: `shlagbaum.attach(9);` (servoni 9-pinga bog'laymiz).",
      "`void loop()` ichida:",
      "`shlagbaum.write(0);` (to'siq yopiq) $\\rightarrow$ `delay(2000);`",
      "`shlagbaum.write(90);` (to'siq 90 gradus ochildi!) $\\rightarrow$ `delay(2000);`",
      "Simulyatsiyani yoqing: servomotor yelkamasi roppa-rosa 90 gradusga ochilib, 2 soniyadan keyin yopiladi!"
    ],
    extra: ["Potensiometr ulab, servomotor burchagini qo'l bilan burishga moslang (`shlagbaum.write(map(pot, 0, 1023, 0, 180));`).", "Shlagbaum ochilganda yashil LED, yopilganda qizil LED yonadigan qiling."],
    ask: [
      ["Oddiy motor bilan servomotorning asosiy farqi nimada?", "Oddiy motor tinimsiz aylanadi. Servomotor esa berilgan aniq burchakka (0°–180°) burilib, o'sha burchakni ushlab turadi."],
      ["Servomotor simlarining ranglari nimani bildiradi?", "Qizil — 5V quvvat, qora/jigarrang — GND yer, to'q sariq — boshqaruv signali."],
      ["`<Servo.h>` kutubxonasi nima uchun kerak?", "Servomotor bilan ishlashni juda osonlashtiruvchi tayyor buyruqlar to'plami."],
      ["Servomotorlar hayotda qayerda ishlatiladi?", "Robot qo'llarida, shlagbaumlarda, samolyot va dron qanotlarida, kamera aylanma tagliklarida."]
    ],
    quiz: [
      ["Oddiy Micro Servo (SG90) maksimal necha gradusga buriladi?", "180 gradusgacha", "3600 gradus", "Faqat 10 gradus"],
      ["Servomotorga burchak berish buyrug'i qaysi?", "myservo.write(90);", "myservo.turn(90);", "analogWrite(90);"],
      ["Servoni pinga bog'lash buyrug'i qaysi?", "myservo.attach(9);", "pinMode(9);", "myservo.start();"],
      ["Servomotorning signal simi qayerga ulanadi?", "Raqamli PWM piniga (masalan: 9)", "Faqat A0 ga", "Faqat batareyaga"],
      ["Servomotor qanday qismlardan tashkil topgan?", "Mitti motor, reduktor, datchik va boshqaruv platasi", "Faqat bitta magnit", "Faqat temir sim"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Servomotorni dasturlash",
      steps: [
        "#include <Servo.h> kutubxonasini ulash",
        "Servo myservo; deb yangi obyekt e'lon qilish",
        "void setup() ichida myservo.attach(9) bilan pinni bog'lash",
        "myservo.write(0) bilan boshlang'ich yopiq burchakka qo'yish",
        "delay(2000) kutib, myservo.write(90) bilan darvozani ochish"
      ]
    },
    topic: [
      { e: "🦾", h: "Robotlarning mushaklari", p: "Inson qo'lini qanday qilib istalgan burchakka buka olsa, sanoat robotlari ham servomotorlar yordamida harakatlanadi. Ular avtomobil yig'ish zavodlarida millimetr aniqligida detallarni payvandlaydi.", q: "Odam qo'lida nechta bo'g'in bor?", a: "Yelkada, tirsakda, bilakda va har bir barmoqda erkinlik bo'g'inlari bor." },
      { e: "⚙️", h: "Reduktor siri — kichik, lekin kuchli", p: "SG90 servosi gugurt qutisidek kichkina bo'lsa ham, og'ir narsalarni ko'tara oladi. Buning sababi — uning ichidagi tishli g'ildiraklar uzatmasi (reduktor) tezlikni kamaytirib, kuchni ko'paytirib beradi.", q: "3-sinfda o'rgangan mexanizmlarimiz esingizdami?", a: "Ha, tishli uzatma kuchni oshiradi!" },
      { e: "📦", h: "Kutubxona (Library) nima?", p: "Dasturlashda kutubxona — boshqa mohir muhandislar tomonidan oldindan yozib qo'yilgan tayyor buyruqlar to'plamidir. `#include <Servo.h>` yozish orqali biz murakkab impulslarni bir so'z bilan boshqaramiz.", q: "Kutubxonalar vaqtni tejaydimi?", a: "Albatta, noldan g'ildirak ixtiro qilish shart emas!" }
    ],
    prog: [{ t: "Servomotor shlagbaum kodi", b: ["y:📚 #include <Servo.h>", "y:⚙️ shlagbaum.attach(9);", "o:🔁 shlagbaum.write(0);  // Yopiq", "r:⏳ delay(2000);", "b:🚀 shlagbaum.write(90); // Ochiq", "r:⏳ delay(2000);"] }],
    video: [["wY9kQz1B-lM", "Arduino Servo motor SG90 bilan ishlash"], ["a68_g2IpepU", "Tinkercad Circuits: Servo tutorial"]],
    yq: "arduino servo motor sg90 tutorial tinkercad circuits",
    hw: ["Uyingizdagi yoki ko'chadagi shlagbaumni kuzating: u ochilganda necha gradusga ko'tariladi? Daftarga chizing."]
  },
  {
    n: 13, mod: 2, t: "Masofa sensori (Ultratovush HC-SR04): Ko'rshapalak usuli",
    goal: "O'quvchilar ultratovushli masofa sensori (HC-SR04) qanday ishlashini (Trig va Echo pinlari, exolokatsiya prinsipi), tovush tezligini ($340$ m/s) va masofani santimetrlarda aniq hisoblash formulasini o'rganadi.",
    out: ["Exolokatsiya (akssado orqali masofa o'lchash) fizikasini tushuntiradi", "HC-SR04 sensorining 4 ta oyog'ini (VCC, Trig, Echo, GND) ulaydi", "Masofani santimetrlarda hisoblovchi C++ formulasini yozadi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Ko'rshapalaklar qorong'i g'orda ko'rmasdan qanday qilib devorga urilmay uchadi? Ultratovush siri."], ["8", "Yangi mavzu: HC-SR04 sensori («ko'zlari» — karnay va mikrofon), Trig (tovush otish) va Echo (aksini tutish), $s = (t \\times 0.034) / 2$."], ["23", "Amaliy ish: «Raqamli o'lchov tasmasi» (Ultrasonic Ruler)."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Formula nima uchun 2 ga bo'linishini aniq tushuntiring: chunki tovush to'siqqacha boradi VA qaytib keladi (yo'l 2 barobar uzoq). Bir tomonlama masofa uchun 2 ga bo'lish shart!", "Havoda tovush tezligi 340 m/s yoki 0.034 sm/mikrosekund."],
    pt: "Amaliy ish: «Ultratovushli masofa o'lchagich»",
    steps: [
      "Tinkercad Circuits'da Arduino va Breadboard qo'ying.",
      "Kutubxonadan «Ultrasonic Distance Sensor» (4 oyoqli variantini) oling va plataga o'rnating.",
      "Oyoqlarini ulang:",
      "1) VCC $\\rightarrow$ 5V ga,",
      "2) GND $\\rightarrow$ GND ga,",
      "3) Trig (Trigger) $\\rightarrow$ Arduino 7-pinga,",
      "4) Echo $\\rightarrow$ Arduino 6-pinga.",
      "Kod oynasini oching:",
      "`void setup()` ichida: `pinMode(7, OUTPUT); pinMode(6, INPUT); Serial.begin(9600);`",
      "`void loop()` ichida ultratovush to'lqinini yuboramiz:",
      "`digitalWrite(7, LOW); delayMicroseconds(2);`",
      "`digitalWrite(7, HIGH); delayMicroseconds(10); digitalWrite(7, LOW);`",
      "Aks-sado vaqtini o'lchaymiz: `long vaqt = pulseIn(6, HIGH);`",
      "Masofani hisoblaymiz: `int masofa = vaqt * 0.034 / 2;`",
      "Ekranga chiqaramiz: `Serial.println(masofa); delay(100);`",
      "Simulyatsiyani yoqing va sensor ustiga bosing: to'siqni suring — Serial monitorda santimetrlar aniq chiqadi!"
    ],
    extra: ["Agar masofa 20 sm dan kam bo'lsa, qizil LED yonsin, aks holda yashil yonsin.", "Masofani santimetrdan dyuymga aylantirib ham ekranga chiqaring."],
    ask: [
      ["Ultratovush nima?", "Inson qulog'i eshitmaydigan juda yuqori chastotali (20 000 Hz dan baland) tovush to'lqini."],
      ["HC-SR04 datchigining ikkita doirasining vazifasi nima?", "Biri tovush to'lqinini otuvchi karnay (Trig), ikkinchisi aks-sadoni kutib oluvchi mikrofon (Echo)."],
      ["Nega vaqt 0.034 ga ko'paytirilib, 2 ga bo'linadi?", "Chunki tovush tezligi 0.034 sm/mks va u to'siqqa borib-qaytgani uchun masofani 2 ga bo'lamiz."],
      ["Ushbu texnologiya yana qayerda ishlatiladi?", "Delfinlar va ko'rshapalaklarda, kemalardagi exolotlarda, avtomobil parkovkasida."]
    ],
    quiz: [
      ["Ultratovush to'lqinini yuboruvchi pin qaysi?", "Trig (Trigger)", "Echo", "VCC"],
      ["Qaytgan aks-sadoni tutib oluvchi pin qaysi?", "Echo", "Trig", "GND"],
      ["Tovushning havodagi tezligi taxminan qancha?", "340 metr/soniya", "300 000 km/soniya (yorug'lik tezligi)", "10 metr/soniya"],
      ["`pulseIn()` funksiyasi nimani o'lchaydi?", "Pinda signal qancha vaqt (mikrosekund) turganini", "Haroratni", "Rangni"],
      ["HC-SR04 sensori maksimal qancha masofani o'lchay oladi?", "Taxminan 4 metrgacha (400 sm)", "1 kilometr", "10 santimetr"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Masofani o'lchash fizikasi",
      steps: [
        "Trig pini orqali 10 mikrosekundlik ultratovush zarbasini otish",
        "Tovush to'lqinining havoda to'siq tomon uchib borishi",
        "To'lqinning to'siqqa urilib, orqaga qaytishi (aks-sado)",
        "Echo pini orqali qaytgan to'lqinni tutib olish",
        "pulseIn() orqali umumiy ketgan vaqtni o'lchash",
        "Formula bo'yicha masofani santimetrlarda hisoblash"
      ]
    },
    topic: [
      { e: "🦇", h: "Tabiatdan olingan muhandislik", p: "Ko'rshapalaklar tunda qorong'ida ko'rmaydi, lekin ultratovush qichqirig'i bilan pashshaning joylashuvini bir millimetrgacha aniqlaydi. Muhandislar tabiatning bu mo''jizasini o'rganib, datchik yaratdilar.", q: "Kemalar suv chuqurligini qanday o'lchaydi?", a: "Suv ostiga ultratovush yuborib (Exolot vositasida)." },
      { e: "⚡", h: "Mikrosekundlar — soniyaning milliondan biri", p: "Tovush juda tez harakatlanadi (1 soniyada 340 metr). 10 santimetr masofaga borib kelish uchun atigi bir necha yuz mikrosekund ketadi. Arduino bu vaqtni bexato o'lchay oladi.", q: "1 soniyada nechta mikrosekund bor?", a: "1 000 000 (bir million) mikrosekund!" },
      { e: "🚗", h: "Avtomobillar xavfsizligi", p: "Zamonaviy mashinalarning bamperida ko'rgan kichik doirachalaringiz — aynan shu ultratovush sensorlaridir. Ular mashina devorga yoki ustunga urilishining oldini oladi.", q: "To'siq yaqinlashsa mashina nima qiladi?", a: "Tez-tez chiyillab signal beradi." }
    ],
    prog: [{ t: "Masofa o'lchash formulasi", b: ["y:📡 Trig: tovush to'lqini ot", "r:⏳ pulseIn(Echo): vaqtni o'lcha", "g:📐 masofa = vaqt * 0.034 / 2;", "p:💻 Serial.println(masofa);", "o:🔁 Takrorlash"] }],
    video: [["wY9kQz1B-lM", "Arduino Ultrasonic sensor HC-SR04 darsi"], ["a68_g2IpepU", "Tinkercad Circuits: Ultrasonic distance sensor"]],
    yq: "arduino ultrasonic sensor hcsr04 tutorial tinkercad circuits",
    hw: ["Daftaringizga ko'rshapalak yoki sensorning to'siqqa tovush yuborib qaytarish rasmini chizing."]
  },
  {
    n: 14, mod: 2, t: "Amaliy loyiha: Avtomobil parktronik radari",
    goal: "O'quvchilar masofa sensori, 3 ta LED (Yashil, Sariq, Qizil) va pyezo-buzzerni birlashtirib, to'siq yaqinlashgani sari signali tezlashuvchi haqiqiy avtomobil parkovka tizimini (Parktronik) yaratadi.",
    out: ["Masofaga qarab mantiqiy oraliqlarni (`if ... else if`) tuzadi", "To'siq uzoq bo'lsa yashil, yaqinlashsa sariq, xavfli yaqinlikda qizil chiroq va tez signal yoqadi", "Haqiqiy avtomobil xavfsizlik tizimi modelini dasturlaydi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["5", "Avtomobil orqaga yurganda «Bip... bip... bip.. biiiip!» ovozini eshitganmisiz? U qanday ishlaydi?"], ["8", "Sxema va zonalar: Yashil zona (> 50 sm — xavfsiz), Sariq zona (20–50 sm — diqqat), Qizil zona (< 20 sm — to'xta!)."], ["25", "Amaliy ish: Parktronik sxemasi va algoritmi."], ["4", "To'siqni surib tizimni sinash."], ["3", "Xulosa va baholash."]],
    tips: ["Buzzerning chiyillash oralig'ini masofaga bog'lash siri: `delay(masofa * 10);` — masofa 50 sm bo'lsa yarim soniyada bir chiyillaydi, masofa 5 sm bo'lsa to'xtovsiz chiyillaydi!", "Simlar ko'payganda Breadboard ustidagi chalkashliklarni bartaraf qilish uchun har bir LED simini o'z rangida tortishni talab qiling."],
    pt: "Loyiha: «Aqlli parktronik radari»",
    steps: [
      "Tinkercad Circuits'da Arduino va Breadboard qo'ying.",
      "HC-SR04 masofa sensorini ulang (Trig: 7, Echo: 6).",
      "3 ta LED o'rnating: Yashil (pin 10), Sariq (pin 11), Qizil (pin 12). Har biriga 220 Om rezistor.",
      "Pyezo-buzzerni 8-pinga ulang.",
      "Kod oynasini oching va masofani santimetrlarda hisoblovchi formulani yozing.",
      "`void loop()` ichida zonalarni dasturlang:",
      "1) Agar `masofa > 50` (Xavfsiz): faqat Yashil yonsin, buzzer jim tursin.",
      "2) Agar `masofa <= 50 && masofa > 20` (Diqqat): Sariq yonsin, buzzer ohista chiyillab tursin (`tone(8, 600); delay(100); noTone(8); delay(300);`).",
      "3) Agar `masofa <= 20` (XAVF!): Qizil yonsin, buzzer to'xtovsiz qattiq chiyillab signal bersin (`tone(8, 1000);`).",
      "Simulyatsiyani yoqing va virtual mashinani to'siqqa yaqinlashtirib ko'ring!"
    ],
    extra: ["To'siq 5 sm dan ham yaqinlashib ketsa, mashina tormozini ifodalovchi qizil miltillash qo'shing.", "Serial Monitorga masofani «Masofa: 15 sm — TO'XTA!» deb yozib chiqaring."],
    ask: [
      ["Parktronik nima?", "Avtomobilni to'xtash joyiga xavfsiz qo'yishda to'siqqacha bo'lgan masofani bildiruvchi radar tizimi."],
      ["Nega to'siq yaqinlashgani sari signal tezlashadi?", "Haydovchini hushyor torttirish va darhol to'xtashga chaqirish uchun."],
      ["Bu tizimda nechta xavfsizlik zonasi bor?", "3 ta: Yashil (xavfsiz), Sariq (ehtiyot bo'ling), Qizil (xavfli to'xtash)."],
      ["Bu loyihada qaysi datchik va aktuatorlar birlashdi?", "Datchik: HC-SR04 masofa sensori. Aktuatorlar: 3 ta LED va pyezo-buzzer."]
    ],
    quiz: [
      ["To'siq juda yaqinlashganda qaysi rangdagi LED yonadi?", "Qizil LED", "Yashil LED", "Ko'k LED"],
      ["Parktronikda tovush chiqaruvchi element qaysi?", "Pyezo-buzzer", "Fotorezistor", "Potensiometr"],
      ["To'siq 15 sm da bo'lsa, qaysi shart bajariladi?", "masofa <= 20 (Qizil zona)", "masofa > 50", "Hech biri"],
      ["Nega buzzerga `noTone()` buyrug'i kerak?", "Chiyillashlar orasida pauza (oraliq) bo'lishi uchun", "Chiroqni o'chirish uchun", "Sxemani buzish uchun"],
      ["Ushbu loyihani haqiqiy avtomobilga o'rnatish mumkinmi?", "Ha, xuddi shu prinsip haqiqiy mashinalarda ishlatiladi", "Yo'q, faqat o'yin", "Faqat kompyuterda ishlaydi"]
    ],
    game: {
      type: "sort",
      title: "Qaysi zonaga tegishli?",
      desc: "Masofalarni parktronik zonalariga ajrating:",
      cats: ["Yashil zona (Xavfsiz: >50 sm)", "Sariq zona (Diqqat: 20-50 sm)", "Qizil zona (Xavf: <20 sm)"],
      items: [
        ["Masofa 80 sm", 0],
        ["Masofa 12 sm (Urilish xavfi)", 2],
        ["Masofa 35 sm (Yaqinlashmoqda)", 1],
        ["Masofa 150 sm (Yo'l bo'sh)", 0],
        ["Masofa 5 sm (To'xtang!)", 2],
        ["Masofa 25 sm", 1]
      ]
    },
    topic: [
      { e: "🚗", h: "Avtohalokatlarning oldini olish", p: "Dunyo bo'ylab har yili millionlab kichik to'qnashuvlar parkovka paytida yuz beradi. Oddiy ultratovush datchiklari avtomobillar va piyodalarni asrab qolishda ulkan xizmat qiladi.", q: "Orqani ko'rsatuvchi kameralar ham bormi?", a: "Ha, zamonaviy mashinalarda ham radar, ham kamera birga ishlaydi." },
      { e: "🧠", h: "Ko'p parametrli algoritm", p: "Bugungi loyihada dastur shunchaki bitta buyruqni bajarmadi. U masofani o'lchadi, uni 3 ta shart bilan taqqosladi, rangni tanladi va tovush ritmini o'zgartirdi. Bu haqiqiy robot miyasidir!", q: "Bunday algoritmlar qayerda yoziladi?", a: "Avtopilot tizimlarida (Tesla, Waymo)." },
      { e: "🎖️", h: "Haqiqiy muhandislik zavqi", p: "O'z qo'lingiz bilan yasagan tizim to'siqni sezib chiyillaganida his qilgan quvonchingiz — kelajakdagi buyuk kashfiyotlaringizning birinchi qadamidir.", q: "Loyihangizga yana nima qo'shishni xohlardingiz?", a: "Masofani santimetrda ko'rsatuvchi kichik ekran." }
    ],
    prog: [{ t: "Parktronik zonalari mantig'i", b: ["o:🔁 int sm = masofa_olchash();", "g:❓ Agar (sm > 50) -> Yashil LED", "g:❓ Aks holda agar (sm > 20) -> Sariq LED + Bip", "g:❗ Aks holda -> Qizil LED + Qattiq signal!", "r:⏳ delay(100);"] }],
    video: [["wY9kQz1B-lM", "Arduino Reverse Parking Sensor Project"], ["a68_g2IpepU", "Tinkercad Circuits parktronik loyihasi"]],
    yq: "arduino parking sensor tutorial buzzer led ultrasonic tinkercad",
    hw: ["Daftaringizga parktronikning 3 ta zonasini (yashil, sariq, qizil) rangli qalamlar bilan chizing va masofalarini yozing."]
  },
  {
    n: 15, mod: 2, t: "Harorat sensori (TMP36) va Serial Monitor",
    goal: "O'quvchilar TMP36 analog harorat sensori qanday ishlashini, kuchlanishdan gradus Tselsiyga (°C) o'tish matematikasini hamda kompyuter bilan axborot almashish vositasi — Serial Monitorni o'rganadi.",
    out: ["TMP36 datchigining 3 ta oyog'ini (Power, Vout, GND) to'g'ri ulaydi", "`Serial.begin(9600)` va `Serial.println()` bilan ma'lumotlarni kompyuter ekraniga chiqaradi", "Analog sonni gradus Tselsiyga aylantiruvchi formulani C++ da dasturlaydi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Xona harorati necha gradus ekanini Arduino qanday biladi? Elektron termometrlar siri."], ["8", "Yangi mavzu: TMP36 datchigi, 10 mV / °C qoidasi, Serial port (USB orqali aloqa) va 9600 bod tezlik."], ["23", "Amaliy ish: «Raqamli xona termometri»."], ["4", "«Juftini top» o'yini."], ["4", "Xulosa va test."]],
    tips: ["TMP36 formulasini oddiy qilib tushuntiring: 1) `float volt = analogRead(A0) * (5.0 / 1024.0);` — kuchlanishni topamiz. 2) `float tempC = (volt - 0.5) * 100;` — gradusga aylantiramiz (chunki 0°C da u 0.5V beradi).", "Serial Monitor — dasturchining eng asosiy «ko'zoynagi». Kod ichida nima bo'layotganini ko'rish uchun har doim `Serial.println()` ishlatiladi."],
    pt: "Amaliy ish: «Raqamli termometr»",
    steps: [
      "Tinkercad Circuits'da Arduino va Breadboard qo'ying.",
      "Kutubxonadan «Temperature Sensor [TMP36]» datchigini oling.",
      "Datchikning yassi tomoni o'zingizga qarab tursin:",
      "1) Chap oyog'i (Power) $\\rightarrow$ 5V ga,",
      "2) O'ng oyog'i (GND) $\\rightarrow$ GND ga,",
      "3) O'rta oyog'i (Vout — signal) $\\rightarrow$ Arduino A0 analog piniga.",
      "Kod oynasini oching:",
      "`void setup()` ichida: `Serial.begin(9600);` (kompyuter bilan aloqani yoqamiz!).",
      "`void loop()` ichida:",
      "`int x = analogRead(A0);`",
      "`float volt = x * (5.0 / 1024.0);`",
      "`float harorat = (volt - 0.5) * 100;`",
      "`Serial.print(\"Harorat: \"); Serial.print(harorat); Serial.println(\" C\");`",
      "`delay(1000);`",
      "Simulyatsiyani yoqing, pastki o'ngdagi «Serial Monitor» tugmasini bosing: harorat ekranda chiqadi!",
      "Sensor ustiga bosib harorat slayderini sovuqqa va issiqqa suring — ko'rsatkichlar real vaqtda o'zgaradi!"
    ],
    extra: ["Agar harorat 30°C dan oshsa, issiqlik haqida ogohlantiruvchi qizil LED yonsin va ventilyator yoqilsin.", "Farengeyt (°F) shkalasiga ham o'girib ekranga chiqaring (`F = C * 1.8 + 32`)."],
    ask: [
      ["Serial Monitor nima uchun kerak?", "Arduino o'lchagan ma'lumotlarni kompyuter ekranida ko'rish va dasturni tekshirish uchun."],
      ["`Serial.begin(9600)` dagi 9600 soni nimani bildiradi?", "Ma'lumot uzatish tezligini (bod — soniyasiga bitlar soni)."],
      ["Nega oddiy `int` emas, `float` o'zgaruvchi ishlatdik?", "Chunki harorat butun son emas, o'nli kasr bo'lishi mumkin (masalan: 24.5°C)."],
      ["TMP36 sensori nima uchun qulay?", "Chunki u qo'shimcha murakkab sxemasiz to'g'ridan-to'g'ri haroratga mos kuchlanish chiqaradi."]
    ],
    quiz: [
      ["Kompyuter bilan ketma-ket aloqani boshlovchi buyruq qaysi?", "Serial.begin(9600);", "Serial.start();", "Serial.open();"],
      ["Yangi qatordan matn chiqaruvchi buyruq qaysi?", "Serial.println()", "Serial.print()", "Serial.write()"],
      ["O'nlik kasr sonlarni (masalan: 36.6) saqlaydigan o'zgaruvchi turi qaysi?", "float", "int", "bool"],
      ["TMP36 datchigining o'rta oyog'i qayerga ulanadi?", "A0 analog pinga", "Faqat GND ga", "Faqat 5V ga"],
      ["Harorat 0°C bo'lganda TMP36 qanday kuchlanish chiqaradi?", "0.5 Volt (500 mV)", "0 Volt", "5 Volt"]
    ],
    game: {
      type: "memory",
      title: "Juftini top: Serial va Harorat",
      pairs: [
        ["Serial.begin(9600)", "Aloqa kanalini ochish"],
        ["Serial.println()", "Ekranga yangi qator yozish"],
        ["float", "O'nlik kasr sonlar"],
        ["TMP36", "Harorat sensori"],
        ["A0 pini", "Analog kuchlanishni o'qish"],
        ["Gradus Tselsiy (°C)", "Harorat o'lchov birligi"]
      ]
    },
    topic: [
      { e: "🌡️", h: "Termometrlar evolyutsiyasi", p: "Ilgari simobli shisha termometrlar ishlatilgan. Agar ular sinsa, xavfli simob zaharlashi mumkin edi. Zamonaviy raqamli termometrlar esa mitti yarimo'tkazgich kristalldan iborat bo'lib, mutlaqo xavfsiz va aniqdir.", q: "Inson tanasining harorati necha bo'ladi?", a: "Taxminan 36.6 °C." },
      { e: "💻", h: "Serial aloqa — kompyuter bilan suhbat", p: "Arduino — mustaqil qurilma, lekin u USB kabel orqali kompyuterga xatlar yozishi mumkin. `Serial.print()` yordamida u bizga «Harorat ko'tarildi!», «Eshik ochildi!» deb hisobot beradi.", q: "Serial so'zi nimani bildiradi?", a: "Ketma-ket (bittalab bitlar ko'rinishida) uzatiladigan ma'lumot." },
      { e: "❄️", h: "Aqlli iqlim nazorati (Termostat)", p: "Uyingizdagi konditsioner yoki isitish qozoni aynan shunday datchik bilan ishlaydi: xona sovib ketsa isitgichni yoqadi, isib ketsa o'chiradi.", q: "Bu uyda qulaylik yaratadimi?", a: "Albatta, doimiy bir xil toza havo va harorat saqlanadi." }
    ],
    prog: [{ t: "Haroratni o'qish va chiqarish", b: ["y:⚙️ Serial.begin(9600);", "o:🔁 int x = analogRead(A0);", "g:📐 float C = (x * (5.0/1024.0) - 0.5) * 100;", "p:💻 Serial.print(\"Harorat: \");", "p:💻 Serial.println(C);", "r:⏳ delay(1000);"] }],
    video: [["wY9kQz1B-lM", "Arduino TMP36 harorat datchigi"], ["a68_g2IpepU", "Tinkercad Circuits: Temperature sensor and Serial Monitor"]],
    yq: "arduino temperature sensor tmp36 serial monitor tutorial tinkercad",
    hw: ["Daftaringizga xona harorati, suv qaynash harorati va muz erish haroratini yozing."]
  },
  {
    n: 16, mod: 2, t: "2-modul loyihasi: «Avtomatlashtirilgan aqlli shlagbaum»",
    goal: "O'quvchilar 2-modulda o'rganilgan barcha vositalarni (masofa sensori, servomotor, LED chiroqlar, pyezo-buzzer va Serial Monitor) birlashtirib, avtomobil yaqinlashganda o'zi ochiluvchi to'liq avtomat shlagbaum tizimini yaratadi.",
    out: ["Ultrasonic datchik va servomotorni bitta murakkab zanjirda uyg'unlashtiradi", "Mashina masofasiga qarab darvozani ochish va yopish algoritmini tuzadi", "Tizim holatini LEDlar, tovush va Serial Monitor orqali xabar qiladi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["5", "2-modul yakuni: zamonaviy to'xtash joylaridagi va temir yo'l kesishmalaridagi avtomat shlagbaumlar qanday ishlaydi?"], ["8", "Tizim arxitekturasi: datchik mashinani ko'radi $\\rightarrow$ to'siq 90° ko'tariladi $\\rightarrow$ yashil chiroq yonadi $\\rightarrow$ mashina o'tgach to'siq yopiladi."], ["25", "Amaliy ish: Sxemani yig'ish, kodni sozlash va sinash."], ["4", "Ko'rgazma va do'stlar loyihasini baholash."], ["3", "2-modul xulosasi."]],
    tips: ["Servomotor to'siqni ochgach, birdaniga yopib qo'ymasligi kerak! Mashina o'tib ketishi uchun kamida `delay(3000);` (3 soniya) kutish lozim.", "Simulyatsiyada masofa datchigidagi to'siqni avval yaqinlashtiring (ochiladi), so'ng uzoqlashtiring (yopiladi)."],
    pt: "Yakuniy loyiha: «Avtomat aqlli shlagbaum»",
    steps: [
      "Tinkercad Circuits'da Arduino Uno va Breadboard qo'ying.",
      "HC-SR04 masofa sensorini ulang (Trig: 7, Echo: 6).",
      "Micro Servoni 9-pinga ulang (shlagbaum to'sig'i).",
      "2 ta LED o'rnating: Qizil (pin 12 — yopiq), Yashil (pin 10 — ochiq/ruxsat).",
      "Pyezo-buzzerni 8-pinga ulang.",
      "Kod oynasiga o'ting va `<Servo.h>` kutubxonasini ulang.",
      "`void loop()` mantig'i:",
      "1) Masofani o'lchaymiz.",
      "2) Agar `masofa < 30` (Mashina keldi!):",
      "- Qizil o'chadi, Yashil yonadi,",
      "- Buzzer xush kelibsiz signali chaladi (`tone(8, 800, 200)`),",
      "- Servomotor 90 gradusga ochiladi: `darvoza.write(90);`,",
      "- Mashina o'tishi uchun kutamiz: `delay(4000);`.",
      "3) Aks holda (Mashina yo'q):",
      "- Servomotor 0 gradusga yopiladi: `darvoza.write(0);`,",
      "- Yashil o'chadi, Qizil yonadi.",
      "Simulyatsiyani yoqing va to'liq avtomat shlagbaum tizimini sinab ko'ring!"
    ],
    extra: ["Fotorezistor qo'shing: tunda shlagbaumning o'zida yorituvchi chiroq yonsin.", "Serial Monitorga «Darvoza ochildi — Xush kelibsiz!» xabarini chiqaring."],
    ask: [
      ["Aqlli shlagbaum mashina kelganini qanday bildi?", "Ultratovush masofa sensori (HC-SR04) orqali masofa 30 sm dan kamayganini aniqlab."],
      ["Shlagbaum to'sig'ini qaysi detal jismonan ko'tardi?", "SG90 servomotori."],
      ["Nega darvoza ochilgach 4 soniya kutish kerak?", "Mashina darvozadan xavfsiz o'tib olishi uchun (to'siq mashina ustiga tushib ketmasligi uchun)."],
      ["2-modulda sizga eng yoqqan komponent qaysi bo'ldi?", "O'quvchining shaxsiy fikri va xulosasi."]
    ],
    quiz: [
      ["Avtomat shlagbaumda mashina borligini qaysi datchik sezadi?", "Ultratovush masofa sensori", "Faqat rezistor", "Faqat batareya"],
      ["To'siqni burchakka burish uchun qaysi motor ishlatiladi?", "Servomotor", "Oddiy parrak", "Pyezo-buzzer"],
      ["Darvoza ochilganda qaysi rangdagi chiroq yonishi kerak?", "Yashil chiroq (ruxsat)", "Qizil chiroq", "Sariq chiroq"],
      ["2-modulda biz nimalarni o'rgandik?", "PWM, datchiklar, servomotor, masofa o'lchash va Serial Monitor", "Faqat multfilm ko'rish", "Faqat rasm chizish"],
      ["Kelgusi 3-modulda bizni nima kutmoqda?", "RGB chiroqlar, LCD ekranlar, harakat sensori va real Arduino platasi", "Hech narsa", "Faqat kutish"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Aqlli shlagbaum algoritmi",
      steps: [
        "Tinch holat: shlagbaum 0° yopiq, Qizil chiroq yoniq",
        "Masofa sensori orqali to'siqni kuzatish",
        "Mashina 30 sm dan yaqin kelganida:",
        "Buzzer qisqa signal berib, Yashil chiroq yonishi",
        "Servomotorning 90° ko'tarilib darvozani ochishi",
        "Mashina o'tib ketguncha 4 soniya kutish",
        "Darvozaning 0° ga qayta yopilishi va Qizil chiroq yonishi"
      ]
    },
    topic: [
      { e: "🏆", h: "2-modul cho'qqisi!", p: "Siz endi oddiy chiroq yoquvchi emassiz — siz datchiklar yordamida atrof-muhitni sezadigan va motorlar yordamida jismoniy dunyoga ta'sir ko'rsatadigan to'laqonli robototexnika tizimini yaratdingiz!", q: "Bunday tizimlar qayerda ishlatiladi?", a: "Avtoturargohlar, pullik trassalar, aeroportlar va aqlli uylarda." },
      { e: "🤖", h: "Kiber-fizik tizimlar", p: "Dastur kodi jismoniy motorlar va datchiklar bilan birlashganda «Kiber-fizik tizim» (Cyber-Physical System) hosil bo'ladi. Bu zamonaviy robototexnikaning eng ilg'or yo'nalishidir.", q: "Robot inson o'rnini bosa oladimi?", a: "Ha, u zerikmasdan, uxlamasdan va adashmasdan kecha-yu kunduz ishlaydi." },
      { e: "🚀", h: "Keyingi qadam — 3-modul", p: "Oldinda bizni haqiqiy matnli LCD ekranlar, ko'p rangli RGB chiroqlar, infraqizil harakat datchiklari va kompyuterga haqiqiy Arduino IDE dasturini o'rnatish kutmoqda!", q: "Tayyormisiz?", a: "Ha, olg'a!" }
    ],
    prog: [{ t: "Aqlli shlagbaum kodi", b: ["o:🔁 int sm = masofa();", "g:❓ Agar (sm < 30) {", "b:🚀 servo.write(90); // Ochish", "b:💡 Yashil: HIGH, Qizil: LOW", "r:⏳ delay(4000);", "g:❗ } else {", "b:🛑 servo.write(0); // Yopish", "b:💡 Qizil: HIGH, Yashil: LOW", "g:❗ }"] }],
    video: [["wY9kQz1B-lM", "Arduino Smart Barrier Gate Tutorial"], ["a68_g2IpepU", "Tinkercad Circuits aqlli shlagbaum loyihasi"]],
    yq: "arduino smart barrier gate servo ultrasonic tutorial tinkercad circuits",
    hw: ["Uyingizdagi to'xtash joyi shlagbaumini ko'zdan kechiring: u qanday boshqariladi (pult, karta yoki kamera)? Daftarga yozing."]
  }
);

