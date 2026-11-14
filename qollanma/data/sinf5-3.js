// 5-sinf · 17–24-darslar: 3-modul. 3D korpus va Arduino integratsiyasi / Yakuniy loyihalar
// Format sinf5.js bilan bir xil.
window.QOLLANMA.grades[5].lessons.push(
  {
    n: 17, mod: 3, t: "Elektronikani 3D korpusga joylash: Aniq uyalar",
    goal: "O'quvchilar Arduino Uno platasi (75 × 53 mm) va 9V batareyaning haqiqiy o'lchamlari bo'yicha Tinkercad 3D muhitida mahkamlash ustunlari (Standoffs) va uya qutilarini loyihalashni o'rganadi.",
    out: ["Arduino Uno platasining aniq o'lchamlarini (75 × 53 mm, 4 ta o'rnatish teshigi) biladi", "Plata ostida qisqa tutashuv bo'lmasligi uchun 3 mm li tayanch ustunchalarini yasaydi", "Batareya qutisi va plata uchun ixcham elektronika bo'linmasini loyihalaydi"],
    need: ["Kompyuterlar, internet, Tinkercad 3D"],
    plan: [["6", "Platani korpusga qanday qilib silkinmaydigan qilib qotiramiz? Nega platani to'g'ridan-to'g'ri metallga yoki polga yopishtirib bo'lmaydi?"], ["8", "Haqiqiy Arduino o'lchamlari: 75 × 53 mm, 4 ta M3 bolt teshiklari, 3 mm balandlikdagi ustunchalar (Standoffs)."], ["23", "Amaliy ish: «Arduino va batareya uyasi»."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Plata orqasidagi o'tkir ignasimon payka uchlari korpusga botib ketmasligi uchun plata ostiga har doim 2–3 mm balandlikdagi ustunchalar (standoffs) qo'yiladi.", "Tinkercad 3D kutubxonasida «Components» bo'limida tayyor Arduino Uno 3D modeli bor — undan o'lchamlarni tekshirish uchun foydalanish mumkin."],
    pt: "Amaliy ish: «Arduino o'rnatish qutisi»",
    steps: [
      "Tinkercad 3D da yangi dizayn oching va «Arduino uyasi» deb nomlang.",
      "Asos quti: Box oling, o'lchamlari 82 mm (uzunlik) × 60 mm (kenglik) × 15 mm (balandlik).",
      "Ichki bo'shliq: Box Hole oling (76 × 54 × 15 mm) va qutining ichini o'ying (2 mm devor qalinligi qolsin).",
      "USB va Quvvat tirqishlari: chap tomonga USB kabel kirishi uchun 12 × 11 mm li kichik teshik (Hole) o'ying.",
      "Plata ustunchalari: 4 ta kichik silindr oling (diametri 6 mm, balandligi 3 mm).",
      "Ustunchalar o'rtasiga 3 mm li vint teshigi (Hole) oching.",
      "Ustunchalarni Arduino Uno ning 4 ta burchak teshigiga moslab qutining tubiga joylashtiring.",
      "Yoniga 9V batareya uchun bo'lim qo'shing: 55 × 30 mm li kichik bo'lma.",
      "Barchasini tanlang va «Group» qiling: elektronika uchun mukammal xavfsiz korpus tayyor!"
    ],
    extra: ["Qutining ustiga shaffof qopqoq loyihalang.", "Qutining yon tomonlariga simlar chiqishi uchun texnologik tirqishlar qo'shing."],
    ask: [
      ["Arduino Uno platasining o'lchamlari taxminan qancha?", "Taxminan 75 mm ga 53 mm."],
      ["Nega plata ostiga 3 mm balandlikdagi ustunchalar qo'yiladi?", "Plata orqasidagi kavsharlangan metall qismlar korpusga tegib, qisqa tutashuv bo'lmasligi va qizib ketmasligi uchun."],
      ["USB kabel uchun teshik qoldirish nega kerak?", "Platani qutidan chiqarmasdan turib yangi kodlarni yuklash va quvvat berish uchun."],
      ["Bu quti robotning qaysi qismiga o'rnatiladi?", "Shassi platformasining ustiga."]
    ],
    quiz: [
      ["Arduino Uno platasi o'lchami qancha?", "75 × 53 mm", "1 metr", "10 × 10 mm"],
      ["Plata ostidagi tayanch ustunlar inglizcha nima deyiladi?", "Standoffs", "Buttons", "Wheels"],
      ["USB kabeli kirishi uchun teshik qoldirilmasa nima bo'ladi?", "Har safar kod yuklashda platani yechib olishga to'g'ri keladi", "Plata ishlamaydi", "Chiroq yonmaydi"],
      ["Quti devorining qulay qalinligi qancha?", "2–3 mm", "20 mm", "0.1 mm"],
      ["Batareya bo'limi nima uchun kerak?", "Harakatlanayotganda batareya qaltirab tushib ketmasligi uchun", "Og'ir bo'lishi uchun", "Chiroyli turishi uchun"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Elektronika uyasi yasash",
      steps: [
        "Asosiy qutini chizish (82×60×15 mm)",
        "Ichki bo'shliqni Hole orqali o'yib olish",
        "USB port uchun yon devorga tirqish ochish",
        "Plata tagiga 4 ta M3 teshikli ustunchalar (standoffs) qo'yish",
        "Batareya bo'linmasini qo'shib, Group qilish"
      ]
    },
    topic: [
      { e: "📦", h: "Korpus — elektronika libosi", p: "Platani yalang'och simlar bilan qoldirib bo'lmaydi: ustiga suv tomishi, chang tushishi yoki metalga tegib kuyishi mumkin. Go'zal va aniq 3D korpus — elektronikani himoya qiluvchi ishonchli zirhdir.", q: "Telefoningiz ham korpus ichidami?", a: "Ha, ichida plata, ustida alyuminiy va shisha korpus bor." },
      { e: "📐", h: "Haqiqiy komponentlar kutubxonasi", p: "Tinkercad dasturida haqiqiy dunyodagi platalarning tayyor 3D modellari bor. Muhandislar yangi korpus yasashdan oldin tayyor platani korpus ichiga virtual joylab, hamma teshiklar to'g'ri kelganini tekshiradilar.", q: "Bu xatolarning oldini oladimi?", a: "Ha, 3D printerda bekorga vaqt sarflamaslikni ta'minlaydi." },
      { e: "🔩", h: "M3 standarti", p: "Dunyo bo'ylab barcha kompyuterlar, 3D printerlar va robotlarda eng ko'p ishlatiladigan bolt — 3 mm li M3 vintlaridir. Bugun siz yasagan teshiklar aynan shu xalqaro standartga mos keladi.", q: "Uyda M3 bolt ko'rganmisiz?", a: "Kompyuter korpusining orqasida ko'rish mumkin." }
    ],
    prog: [{ t: "Arduino uyasi o'lchamlari", b: ["y:📦 Asos quti: 82×60×15 mm", "o:🕳️ Ichki bo'shliq: 76×54 mm", "b:🕳️ USB tirqishi: 12×11 mm", "g:🏛️ 4 ta 3 mm li ustunchalar", "p:🔗 Group: himoyalangan korpus!"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Arduino Uno Enclosure Box Tutorial"], ["a68_g2IpepU", "Arduino uchun 3D korpus yasash"]],
    yq: "tinkercad arduino uno enclosure box case tutorial 3d print",
    hw: ["Daftaringizga Arduino platasi va uning 4 ta burchak teshiklari chizmasini chizing."]
  },
  {
    n: 18, mod: 3, t: "Servomotor (SG90) bloklar bilan: Darvoza va robot qo'li",
    goal: "O'quvchilar burchakka aniq buriluvchi servomotorni (SG90) Tinkercad Circuits muhitida «rotate servo on pin ... to ... degrees» maxsus bloki orqali 0° dan 180° gacha boshqarishni o'rganadi.",
    out: ["Servomotorning oddiy motordan farqini va burchakka burilishini tushuntiradi", "Blokli kodda «rotate servo on pin [9] to [burchak] degrees» blokidan foydalanadi", "Ochilib-yopiluvchi avtomat to'siq yoki robot panjasi modelini yaratadi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Robot qo'li biror buyumni olib o'rtaga qo'yishi uchun qanday motor kerak? Aniq burchakka burilish."], ["8", "Servomotor (SG90), 3 ta sim (GND, 5V, Signal), Tinkercad'dagi maxsus «rotate servo» bloki."], ["23", "Amaliy ish: «Bloklar bilan boshqariladigan avtomat darvoza»."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Tinkercad Circuits'dagi tayyor «rotate servo on pin [9] to [90] degrees» bloki juda qulay — C++ dagi kabi murakkab kutubxonalar ulashni talab qilmaydi, barchasini o'zi bajaradi!", "Simlar rangini to'g'ri ulang: qora/jigarrang $\\rightarrow$ GND, qizil $\\rightarrow$ 5V, to'q sariq/sariq $\\rightarrow$ pin 9."],
    pt: "Amaliy ish: «Avtomat ochiluvchi darvoza»",
    steps: [
      "Tinkercad Circuits'da Arduino Uno va Breadboard qo'ying.",
      "Kutubxonadan «Positional Micro Servo» oling.",
      "Servomotor simlarini ulang: Ground (GND), Power (5V), Signal (pin 9).",
      "Kutubxonadan bitta tugma oling va uni 2-pinga ulang (10 kOm rezistor bilan).",
      "«Code» oynasini oching:",
      "«Control» bo'limidan `if ... then ... else` blokini oling.",
      "Shartiga: `if <read digital pin [2] == 1>` (tugma bosildimi?).",
      "`then` ichiga: «Output» bo'limidan `rotate servo on pin [9] to [90] degrees` (darvoza 90 gradus ochilsin!).",
      "`else` ichiga: `rotate servo on pin [9] to [0] degrees` (darvoza 0 gradus yopiq tursin!).",
      "Simulyatsiyani yoqing: tugmani bosing — servomotor yelkamasi bir lahzada 90 gradusga ochiladi, qo'yib yuborsangiz yopiladi!"
    ],
    extra: ["Darvozani silliq ochiladigan qiling: burchakni 0 dan 90 gacha 10 gradusdan oshirib boring.", "Darvoza ochilganda yashil chiroq, yopilganda qizil chiroq yonadigan qiling."],
    ask: [
      ["Servomotor necha gradus oralig'ida burila oladi?", "0 gradusdan 180 gradusgacha."],
      ["Servomotorni boshqaruvchi blok qaysi?", "`rotate servo on pin ... to ... degrees` bloki."],
      ["Servomotorning qizil simi qayerga ulanadi?", "5V quvvat manbaiga."],
      ["Robototexnikada servomotorlar nima uchun ishlatiladi?", "Robot qo'llarida, kamerani burishda, robot oyoqlari bo'g'inlarida, shlagbaumlarda."]
    ],
    quiz: [
      ["Servomotorni 90 gradus burchakka burish bloki qaysi?", "rotate servo on pin to 90 degrees", "set pin to HIGH", "play tone 90"],
      ["Servomotorning qora yoki jigarrang simi qayerga ulanadi?", "GND (Yer) ga", "5V ga", "A0 ga"],
      ["Oddiy motordan farqli o'laroq servomotor nimani biladi?", "O'zi qaysi burchakda turganini biladi", "Tezroq aylanadi", "Rangini o'zgartiradi"],
      ["Servomotorning burchagi 0 dan 90 ga o'zgarsa, qanday harakat sodir bo'ladi?", "To'rtdan bir qism aylanadi (to'g'ri burchak)", "To'liq 1 marta aylanadi", "To'xtaydi"],
      ["Blokli kodda servomotor qaysi toifada joylashgan?", "Output (Moviy)", "Math", "Variables"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Servomotorni ochib-yopish",
      steps: [
        "rotate servo on pin [9] to [0] degrees (Yopiq holat)",
        "wait 2 secs kutish",
        "rotate servo on pin [9] to [90] degrees (Darvoza ochildi)",
        "wait 2 secs kutish",
        "rotate servo on pin [9] to [180] degrees (To'liq ochilish)"
      ]
    },
    topic: [
      { e: "🦾", h: "Robot qo'li — manipulyator", p: "Zavodlarda mashina yig'uvchi ulkan robot qo'llarida 6 tagacha katta servomotorlar bo'ladi. Har bir servomotor bitta bo'g'inni boshqaradi va robot odam kabi detallarni olib-qo'yadi.", q: "Bunday robot nima deb ataladi?", a: "Manipulyator robot." },
      { e: "📐", h: "Burchaklar geometriyasi", p: "0° — gorizontal yopiq, 90° — vertikal tik, 180° — qarama-qarshi tomon. Dasturlash orqali siz geometriya burchaklarini jonli harakatga aylantirasiz.", q: "Darvoza tepaga ochilsa necha gradus buriladi?", a: "90 gradus." },
      { e: "🚪", h: "Avtomat to'siqlar", p: "Bozorlarda yoki metro bekatlaridagi turniketlar aynan shunday servomotorlar bilan ishlaydi: chipta tekkanda darvoza ochiladi va odam o'tgach yopiladi.", q: "Turniketni ochish uchun qanday datchik kerak?", a: "Karta o'quvchi yoki masofa sensori." }
    ],
    prog: [{ t: "Servomotor blokli kodi", b: ["y:▶ Boshlash", "o:🔁 Doim [", "g:❓ Agar <tugma == 1> bo'lsa", "b:🚀 rotate servo [9] to [90] deg", "g:❗ Aks holda", "b:🛑 rotate servo [9] to [0] deg", "o:]"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Circuits Servo Motor Block Coding"], ["a68_g2IpepU", "Arduino servomotor bloklar bilan boshqarish"]],
    yq: "tinkercad circuits servo motor block coding tutorial for kids",
    hw: ["Daftaringizga transportir burchaklarini (0°, 45°, 90°, 180°) va servomotor yelkamasining o'sha burchakdagi holatini chizing."]
  },
  {
    n: 19, mod: 3, t: "Ultratovush datchigi bloklarda: To'siqdan qochuvchi robot",
    goal: "O'quvchilar HC-SR04 ultratovush masofa datchigini Tinkercad Circuits'da tayyor «read ultrasonic distance sensor» bloki orqali santimetrlarda o'qishni va to'siqqa 20 sm qolganda ogohlantiruvchi radar tizimini yaratadi.",
    out: ["HC-SR04 datchigini Arduino pinlariga to'g'ri ulaydi", "«read ultrasonic distance sensor on trigger pin ... echo pin ... in cm» blokidan foydalanadi", "Masofaga qarab to'xtash yoki burilish qarorini qabul qiluvchi algoritm tuzadi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Robot devorga urilmasligi uchun oldidagi masofani qanday o'lchaydi? Bloklarda masofa datchigi."], ["8", "HC-SR04 sensori, Trig va Echo pinlari, «read ultrasonic sensor» bloki (santimetrlarda to'g'ridan-to'g'ri o'qish)."], ["23", "Amaliy ish: «To'siqni sezuvchi aqlli ko'z»."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Tinkercad Circuits bloklarida murakkab matematik formula yozish shart emas! Unda bitta tayyor `read ultrasonic distance sensor on trigger pin [7] echo pin [6] in [cm]` bloki bor — u to'g'ridan-to'g'ri santimetrlarni beradi!", "O'zgaruvchi oching: «masofa» degan o'zgaruvchi yaratib, datchik natijasini unga saqlash kodni juda o'qishli va tushunarli qiladi."],
    pt: "Amaliy ish: «To'siqdan ogohlantiruvchi radar»",
    steps: [
      "Tinkercad Circuits'da Arduino, Breadboard va HC-SR04 masofa sensorini qo'ying.",
      "Datchik simlarini ulang: VCC $\\rightarrow$ 5V, GND $\\rightarrow$ GND, Trig $\\rightarrow$ pin 7, Echo $\\rightarrow$ pin 6.",
      "Breadboardga bitta Qizil LED (pin 13) va Pyezo-buzzer (pin 8) qo'ying.",
      "«Code» oynasini oching:",
      "«Variables» (O'zgaruvchilar) bo'limiga kiring va «masofa» nomli yangi o'zgaruvchi oching.",
      "Blokni joylang: `set [masofa] to [read ultrasonic distance sensor on trigger pin 7 echo pin 6 in cm]`.",
      "Tagiga `if ... then ... else` blokini qo'ying:",
      "Shart: `if <masofa < 20>` (agar to'siqqacha masofa 20 sm dan kam bo'lsa!).",
      "`then` (XAVF!): `set pin [13] to HIGH` va `play speaker on pin [8] with tone [60] for [0.2] secs`.",
      "`else` (YO'L BO'SH): `set pin [13] to LOW`.",
      "Simulyatsiyani yoqing va datchik to'sig'ini suring: to'siq 20 sm dan yaqinlashishi bilanoq chiroq yonib, signal chalinadi!"
    ],
    extra: ["Yashil LED qo'shing: yo'l bo'sh bo'lganda yashil yonsin, to'siq chiqqanda qizil yonsin.", "Servomotor qo'shing: agar to'siq yaqinlashsa, shlagbaum darhol yopilsin."],
    ask: [
      ["Ultratovush datchigi masofani qanday o'lchaydi?", "Tovush to'lqini to'siqqa borib-qaytish vaqtini o'lchash orqali."],
      ["Tinkercad blokida masofa qaysi birlikda o'qiladi?", "Santimetrlarda (cm) yoki dyuymlarda (inch)."],
      ["Nega «masofa» nomli o'zgaruvchi ochdik?", "Datchik o'lchagan sonni xotirada saqlab, uni shartlar bilan solishtirish uchun."],
      ["Mobil robot to'siqni sezsa nima qilishi kerak?", "To'xtashi va orqaga qaytib, bo'sh tomonga burilishi kerak."]
    ],
    quiz: [
      ["Ultratovush datchigini o'quvchi blok qaysi toifada?", "Input (Havorang)", "Output", "Control"],
      ["Datchik masofani qaysi o'lchov birligida qaytaradi?", "Santimetrda (cm)", "Kilogrammda", "Litrlarda"],
      ["Agar to'siq 15 sm masofada bo'lsa va shart `< 20` bo'lsa, qaysi qism ishlaydi?", "then (Xavf) qismi", "else qismi", "Hech biri"],
      ["Datchikning tovush chiqaruvchi pini nima deb ataladi?", "Trigger (Trig)", "Echo", "GND"],
      ["Aqlli robot-changyutgichlar mebellarga urilmasligi uchun qaysi datchikdan foydalanadi?", "Ultratovush yoki optik masofa datchigidan", "Faqat chiroqdan", "Termometrdan"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: To'siqdan qochish algoritmi",
      steps: [
        "read ultrasonic distance sensor bloki orqali masofani o'lchash",
        "O'lchangan sonni «masofa» o'zgaruvchisiga saqlash",
        "Taqqoslash: masofa 20 sm dan kichikmi?",
        "Agar kichik bo'lsa (Xavf): qizil chiroqni yoqish va to'xtash",
        "Agar katta bo'lsa (Yo'l bo'sh): yashil chiroqni yoqish va oldinga yurish"
      ]
    },
    topic: [
      { e: "🦇", h: "Robototexnikada biomimetika", p: "Biomimetika — bu tabiatdagi hayvonlar va o'simliklar tuzilishini muhandislikda takrorlashdir. Ko'rshapalaklarning quloqlari robotlarning ultratovush sensoriga aylandi.", q: "Biomimetikaga yana qanday misollar bor?", a: "Qushlarga qarab samolyotlar, baliqlarga qarab suvosti kemalari yaratilgan." },
      { e: "🧹", h: "Robot-changyutgich siri", p: "Uyingizda aylanib yurgan robot-changyutgich devorga borib urilmasdan ohista to'xtaydi va yon tomonga buriladi. Uning ichida aynan shunday masofa datchiklari bor.", q: "U zinadan tushib ketmaslikni qanday biladi?", a: "Pastga qaragan masofa datchiklari pol tugaganini sezadi." },
      { e: "🚘", h: "Haydovchisiz avtomobillar (Avtopilot)", p: "Kelajak mashinalari inson boshqaruvsiz o'zi harakatlanadi. Ular atrofidagi piyodalar va boshqa mashinalarni masofa datchiklari orqali kuzatib boradi.", q: "Ular qanday datchiklar ishlatadi?", a: "Ultratovush, radar, lidar va kameralarni." }
    ],
    prog: [{ t: "Masofa radari kodi", b: ["o:🔁 Doim [", "s:📏 masofa = read ultrasonic pin 7, 6 in cm", "g:❓ Agar <masofa < 20> bo'lsa", "b:🚨 set pin [13] to HIGH // Xavf", "r:🔊 play speaker on pin [8] with tone [C4]", "g:❗ Aks holda", "b:⚫ set pin [13] to LOW // Ochiq yo'l", "o:]"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Circuits Ultrasonic Sensor Block Coding"], ["a68_g2IpepU", "Arduino masofa datchigi bloklarda"]],
    yq: "tinkercad circuits ultrasonic distance sensor block coding tutorial",
    hw: ["Xonangizdagi buyumlar orasidagi masofalarni o'lchov tasmasi bilan o'lchang: 20 sm masofa qanchalik yaqin ekanini tasavvur qiling."]
  },
  {
    n: 20, mod: 3, t: "Tunda ko'ruvchi robot: Fotorezistor va avto-faralar",
    goal: "O'quvchilar fotorezistor (LDR) analog yorug'lik datchigini bloklar orqali o'qishni («read analog pin [A0]») va qorong'i tushganda robotning fara chiroqlarini o'zi avtomatik yoquvchi tizimni yaratadi.",
    out: ["Fotorezistorni kuchlanish bo'lgich (10 kOm rezistor) bilan A0 ga ulaydi", "«read analog pin [A0]» bloki orqali yorug'lik darajasini (0..1023) o'qiydi", "Atrof qorong'ilashganda robotning ikkita fara chirog'ini avtomatik yoqadi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Zamonaviy avtomobillar tunnelga kirganda yoki kechasi chiroqlarini qanday o'zi yoqadi? Avto-fara tizimi."], ["8", "Fotorezistor (LDR), analog o'qish bloki (0..1023 sonlari), qorong'ilik chegarasini aniqlash."], ["23", "Amaliy ish: «Tunda o'zi ko'ruvchi robot faralari»."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Analog pinlar 0 dan 1023 gacha son qaytaradi. Masalan, yorug'da 700–800, qorong'ida 200–300 bo'ladi. Chegara sifatida 500 sonini olish qulay: `if <read analog pin [A0] < 500>`.", "Robotning ikkita farasi uchun ikkita LEDni (masalan: 12 va 13-pinlarga) ulatish robotga haqiqiy mashina ko'rinishini beradi."],
    pt: "Amaliy ish: «Robotning avtomatik faralari»",
    steps: [
      "Tinkercad Circuits'da Arduino, Breadboard va ikkita oq yoki sariq LED (faralar) qo'ying.",
      "Faralarni 220 Om rezistorlar bilan 12 va 13-pinlarga ulang. Katodlarini GND ga ulang.",
      "Kutubxonadan Fotorezistor (Photoresistor) oling.",
      "1-oyog'ini 5V ga, 2-oyog'ini 10 kOm rezistor orqali GND ga ulang.",
      "2-oyoqdan sim olib, Arduino «A0» analog piniga ulang.",
      "«Code» oynasini oching:",
      "«Control» bo'limidan `if ... then ... else` blokini oling.",
      "Shartiga «Math» bo'limidan `[ < ]` kichiklik blokini qo'ying.",
      "Chapiga «Input» bo'limidan `read analog pin [A0]` blokini, o'ngiga `500` sonini yozing.",
      "`then` (Qorong'i tushdi!): `set pin [12] to HIGH` va `set pin [13] to HIGH` (faralar yonsin!).",
      "`else` (Yorug'): `set pin [12] to LOW` va `set pin [13] to LOW` (faralar o'chsin!).",
      "Simulyatsiyani yoqing, fotorezistor ustiga bosing va quyoshni oy tomon suring: qorong'i bo'lishi bilan robot faralari avtomatik charaqlab yonadi!"
    ],
    extra: ["Buzzer qo'shing: tunda faralar yoqilganda qisqa «chertish» (rele tovushi) chiqsin.", "Oldingi darsdagi masofa sensori bilan birlashtiring: ham tunda ko'radi, ham to'siqdan qochadi!"],
    ask: [
      ["Fotorezistor qaysi pinga ulandi?", "A0 analog pinga (chunki u uzluksiz son qaytaradi)."],
      ["`read analog pin [A0]` qanday sonlar oralig'ida qiymat beradi?", "0 dan 1023 gacha."],
      ["Nega chegara sifatida 500 sonini tanladik?", "Chunki 500 — yorug'lik va qorong'ilik o'rtasidagi muvozanatli chegara hisoblanadi."],
      ["Avtomobillarda bu tizim nima deb ataladi?", "«Avtomatik chiroq datchigi» (Auto-headlights sensor)."]
    ],
    quiz: [
      ["Fotorezistorni o'qish uchun qaysi blok kerak?", "read analog pin [A0]", "read digital pin", "set pin to HIGH"],
      ["Analog pinlarda eng katta son necha?", "1023", "255", "100"],
      ["Atrof qorong'ilashganda analog son nima bo'ladi?", "Kamayadi (kichiklashadi)", "Kattalashadi", "O'zgarmaydi"],
      ["Robotning 2 ta farasini yoqish uchun nechta pin kerak bo'ldi?", "2 ta pin (12 va 13)", "Faqat 1 ta", "14 ta"],
      ["Ushbu loyiha qanday foyda keltiradi?", "Robot qorong'i xonalarda ham o'z yo'lini yoritib mustaqil harakatlana oladi", "Platani sovitadi", "Elektrni tugatadi"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Avto-fara ishlash tartibi",
      steps: [
        "A0 analog pinidan joriy yorug'lik darajasini o'qish",
        "Taqqoslash: yorug'lik 500 dan kammi?",
        "Agar kam bo'lsa (Qorong'i): 12 va 13-pindagi faralarni yoqish",
        "Agar ko'p bo'lsa (Yorug'): faralarni o'chirish",
        "Jarayonni uzluksiz takrorlash"
      ]
    },
    topic: [
      { e: "🔦", h: "Tunnel effekti", p: "Tog'li yo'llardagi uzun tunnellarga mashinada kirganingizda, chiroqlar bir zumda o'zi yonadi. Tunneldan chiqqach esa o'chadi. Bu haydovchini qo'lda tugma izlashdan xalos qiladi va xavfsizlikni oshiradi.", q: "Datchik qayerga o'rnatiladi?", a: "Old oyna orqasiga, ko'zguga yaqin joyga." },
      { e: "🤖", h: "Kechasi ishlovchi xizmatchi robotlar", p: "Kasalxonalarda yoki yirik omborlarda tunda tozalovchi robotlar ishlaydi. Ular odamlarga xalaqit bermaslik uchun qorong'ida o'z yo'lini yoritib vazifasini bajaradi.", q: "Robot uxlashi kerakmi?", a: "Yo'q, faqat batareyasini quvvatlab olsa yetarli." },
      { e: "🔋", h: "Energiyani tejash", p: "Agar robotning chiroqlari kunduzi ham yonib yursa, batareyasi tez o'tirib qoladi. Avtomat datchik esa batareya quvvatini ikki barobar tejaydi.", q: "Tejamkorlik robot uchun muhimmi?", a: "Albatta, u uzoqroq xizmat qiladi." }
    ],
    prog: [{ t: "Avto-fara blokli kodi", b: ["o:🔁 Doim [", "s:☀️ nur = read analog pin [A0]", "g:❓ Agar <nur < 500> bo'lsa", "b:💡 set pin [12] to HIGH // Fara 1", "b:💡 set pin [13] to HIGH // Fara 2", "g:❗ Aks holda", "b:⚫ set pin [12, 13] to LOW", "o:]"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Circuits Photoresistor Block Coding"], ["a68_g2IpepU", "Arduino fotorezistor bilan avtomatik fara"]],
    yq: "tinkercad circuits photoresistor automatic headlights block coding tutorial",
    hw: ["Daftaringizga avtomatik farali robot rasmini chizing va fotorezistor qayerga o'rnatilishini ko'rsating."]
  },
  {
    n: 21, mod: 3, t: "Bloklardan C++ kodiga: «Blocks + Text» rejimi",
    goal: "O'quvchilar blokli dasturlashdan professional matnli C++ dasturlashga ko'prik hosil qiladi: Tinkercad'dagi «Blocks + Text» rejimida har bir blok ortida qanday C++ kodi turganini tahlil qiladi.",
    out: ["Bloklar va C++ kod qatorlari o'rtasidagi bog'liqlikni tushuntiradi", "`pinMode()`, `digitalWrite()`, `delay()` C++ buyruqlarini taniydi", "6-sinfdagi matnli Arduino dasturlashiga to'liq tayyor bo'ladi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Biz bloklarni juda yaxshi o'rgandik. Kattalar va professional dasturchilar qanday kod yozadi? C++ tili."], ["8", "«Blocks + Text» oynasi: chapda bloklar, o'ngda C++ kodi. `void setup()`, `void loop()`, jingalak qavslar `{}` va nuqta-vergul `;`."], ["23", "Amaliy ish: «Bloklarni C++ ga tarjima qilish laboratoriyasi»."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["O'quvchilarga C++ tilidan qo'rqmaslikni, u xuddi ingliz tilidagi oddiy so'zlardan (`write` — yozish, `read` — o'qish, `mode` — rejim) iborat ekanini tushuntiring.", "Har bir blok qo'shilganda o'ng tomondagi C++ matnida qaysi yangi qator paydo bo'lganini qizil ramka bilan ko'rsatib, taqqoslang."],
    pt: "Amaliy ish: «Kod tarjimoni tajribasi»",
    steps: [
      "Tinkercad Circuits'da Arduino va bitta LED (13-pinda) sxemasini oching.",
      "«Code» menyusiga kiring va rejimlar ochiladigan ro'yxatdan «Blocks + Text» ni tanlang.",
      "Ekran ikkiga bo'linadi: chapda rangli bloklar, o'ngda haqiqiy C++ kodi!",
      "Chapda `set pin [13] to HIGH` blokini joylang $\\rightarrow$ o'ng tomonda bir zumda `digitalWrite(13, HIGH);` paydo bo'ladi!",
      "Chapda `wait [1] secs` blokini qo'ying $\\rightarrow$ o'ngda darhol `delay(1000);` paydo bo'ladi!",
      "Datchik blokini qo'ying: `read digital pin [2]` $\\rightarrow$ o'ngda `digitalRead(2)` paydo bo'ladi!",
      "C++ qoidalarini ko'rib chiqing: har bir buyruq oxirida nuqta-vergul (`;`) bor, bloklar esa jingalak qavslar `{ }` ichida turibdi.",
      "Simulyatsiyani yoqing: bloklar orqali yozilgan dastur xuddi haqiqiy C++ kodi kabi ishlaydi!"
    ],
    extra: ["«Text» rejimiga o'tib, C++ kodidagi `delay(1000)` ni klaviaturada qo'lda `delay(200)` qilib o'zgartiring va sinang.", "C++ tilidagi izohlar (`// kommentariyalar`) qanday yozilishini o'rganing."],
    ask: [
      ["Nega professional dasturchilar blok emas, matn yozishadi?", "Matnda kod yozish tezroq, ixchamroq va murakkab hisob-kitoblarni bajarish ancha qulay."],
      ["`set pin [13] to HIGH` blokining C++ dagi nusxasi qanday yoziladi?", "`digitalWrite(13, HIGH);`."],
      ["`wait 1 secs` blokining C++ dagi yozilishi qanday?", "`delay(1000);` (chunki C++ da vaqt millisoniyalarda o'lchanadi).", ""],
      ["C++ tilida har bir buyruq oxiriga nima qo'yiladi?", "Nuqta-vergul (`;`) belgisi."]
    ],
    quiz: [
      ["Tinkercad'da blok va matnni birga ko'rsatuvchi rejim qaysi?", "Blocks + Text", "Faqat Blocks", "Faqat Text"],
      ["Arduino mikrokontrolleri qaysi dasturlash tilida kodlanadi?", "C / C++", "HTML", "Scratch"],
      ["C++ tilida 1 soniya kutish qanday yoziladi?", "delay(1000);", "wait(1s);", "stop(1);"],
      ["C++ kodida buyruqlar oxiridagi nuqta-vergul (`;`) nima vazifani bajaradi?", "Buyruq tugaganini (nuqta kabi) bildiradi", "Hech qanday", "Xatolikni bildiradi"],
      ["6-sinfda biz qaysi dasturlash usuliga to'liq o'tamiz?", "Haqiqiy C++ matnli dasturlashiga", "Faqat rasmlarga", "Orqaga qaytamiz"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Blok va C++ juftligi",
      steps: [
        "Blok: set pin [13] to HIGH  <->  C++: digitalWrite(13, HIGH);",
        "Blok: wait 1 secs           <->  C++: delay(1000);",
        "Blok: read digital pin [2]  <->  C++: digitalRead(2);",
        "Blok: set pin [13] to LOW   <->  C++: digitalWrite(13, LOW);",
        "Blok: if ... then           <->  C++: if (shart) { }"
      ]
    },
    topic: [
      { e: "🌉", h: "Buyuk ko'prik", p: "Siz 4-sinfda Scratch'da bloklarni o'rgandingiz, 5-sinfda Arduino bloklarini boshqardingiz, endi esa haqiqiy C++ dasturchilari safiga qadam qo'ymoqdasiz. Bu ta'limdagi eng chiroyli va mustahkam ko'prikdir!", q: "C++ tili qayerlarda ishlatiladi?", a: "O'yin dvigatellarida (Unreal Engine), operatsion tizimlarda (Windows) va robotlarda." },
      { e: "🔤", h: "Nuqta-vergul siri", p: "Inson gapining oxirida nuqta qo'yilgani kabi, C++ da kompyuter buyrug'i oxiriga `;` qo'yiladi. Agar nuqta-vergul unutilsa, kompyuter keyingi so'zga qo'shib yuboradi va tushunmay qoladi.", q: "Nuqta-vergul nima uchun kerak?", a: "Buyruq chegarasini aniq ko'rsatish uchun." },
      { e: "🚀", h: "6-sinfga tayyorgarlik", p: "Keyingi yilda siz xuddi shu bilimlaringiz bilan haqiqiy matnli C++ dasturlarini yoza olasiz va ekranga qaramay buyruqlarni yoddan terishni boshlaysiz!", q: "O'zingizga ishonasizmi?", a: "Ha, bloklar orqali mantiqni to'liq tushunib oldim!" }
    ],
    prog: [{ t: "Blokdan C++ ga ko'prik", b: ["y:🧩 Blok: set pin [13] to HIGH", "b:💻 C++: digitalWrite(13, HIGH);", "y:🧩 Blok: wait 1 secs", "r:💻 C++: delay(1000);", "p:🚀 Siz C++ tilini tushunyapsiz!"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Blocks to C++ Text Tutorial"], ["a68_g2IpepU", "Arduino bloklardan C++ kodiga o'tish"]],
    yq: "tinkercad circuits blocks to text c++ arduino tutorial transition",
    hw: ["Daftaringizga 3 ta sevimli blokingizni va uning yoniga C++ dagi yozilishini chiroyli qilib ko'chirib yozing."]
  },
  {
    n: 22, mod: 3, t: "Ochiq loyiha: 3D dizayn va elektronika rejasini tuzish",
    goal: "O'quvchilar yil davomida olgan bilimlarini (3D korpus loyihalash va blokli Arduino sxemotexnikasi) birlashtirib, o'zlarining mustaqil robot yoki aqlli qurilma loyihasi pasportini, 3D eskizini va sxema rejasini tuzadi.",
    out: ["O'z g'oyasining pasportini (nomi, vazifasi, foydasi) shakllantiradi", "3D korpus eskizini va kerakli elektronika komponentlari ro'yxatini yozadi", "Tinkercad 3D va Circuits loyihalarini reja bo'yicha boshlaydi"],
    need: ["A4 qog'ozlar, rangli qalamlar, daftarlar", "Tinkercad hisobi"],
    plan: [["6", "Katta muhandislik yakuniy loyihasiga start! 5-sinfda o'rgangan 3D dizayn va elektronikani bitta ixtiroda birlashtiramiz."], ["10", "Dizayn-fikrlash: G'oya $\\rightarrow$ 3D korpus qismlari $\\rightarrow$ Elektron komponentlar $\\rightarrow$ Blokli algoritm."], ["22", "Mustaqil ijod: Loyiha pasportini to'ldirish va chizmalar chizish."], ["4", "Do'stlar oldida g'oyani taqdim etish (Pitch)."], ["3", "Xulosa va maslahatlar."]],
    tips: ["O'quvchilarga qiziqarli yo'nalishlar taklif qiling: «To'siqlardan qochuvchi 3D robot», «Avtomatlashtirilgan aqlli shlagbaum va nazorat punkti», «Musiqiy va chiroqli aqlli seyf», «Avtomat stol ventilyatori».", "Har bir o'quvchi ikkita qismni rejalashtirishi kerak: 1) Korpus (Tinkercad 3D), 2) Miya va sxema (Tinkercad Circuits)."],
    pt: "Amaliy ish: «Ixtiro pasportini loyihalash»",
    steps: [
      "A4 qog'ozini oling va loyihangiz nomini yozing (masalan: «To'siqdan qochuvchi 3D robot» yoki «Kiber-seyf»).",
      "1-bo'lim (3D Korpus): qanday qismlardan iborat? (Shassi, g'ildiraklar, datchik o'rindiqlari, qopqoq). O'lchamlarini yozing.",
      "2-bo'lim (Elektronika): qanday komponentlar kerak? (Arduino, qaysi datchik, nechta LED, motor yoki servo, buzzer).",
      "Pinlar ro'yxatini tuzing (masalan: pin 9 — servo, pin 7/6 — masofa datchigi, pin 13 — chiroq).",
      "Blokli algoritm rejasini tuzing: Qachon nima yonadi? Qachon nima aylanadi?",
      "Tinkercad 3D va Tinkercad Circuits'da loyihalar ochib, nomlarini belgilab qo'ying.",
      "O'z g'oyangizni o'qituvchiga va do'stingizga tushuntirib bering va ularning fikrini oling."
    ],
    extra: ["Loyihangiz uchun logotip yoki ramz chizing.", "Qurilmaning haqiqiy hayotda qayerda ishlatilishi mumkinligini yozing."],
    ask: [
      ["Nega muhandislikda korpus va elektronika birga rejalashtiriladi?", "Chunki elektronika korpus ichiga bemalol sig'ishi va simlar qisilib qolmasligi uchun."],
      ["Loyiha pasporti nima uchun kerak?", "Ish jarayonida adashib ketmaslik va qadamma-qadam maqsadga erishish uchun."],
      ["Rejani qog'ozda chizish nimaga yordam beradi?", "G'oyadagi kamchiliklarni vaqt yo'qotmasdan oldindan tuzatishga."],
      ["Yaxshi muhandislik loyihasining siri nimada?", "Oddiy, puxta, chiroyli va mukammal ishlashida."]
    ],
    quiz: [
      ["Loyiha yaratishda birinchi qadam nima?", "G'oya va reja tuzish", "Birovning ishini ko'chirish", "Hammasini o'chirib tashlash"],
      ["5-sinf yakuniy loyihasi qanday ikkita katta qismdan iborat?", "3D korpus (Tinkercad 3D) va Elektronika (Circuits)", "Faqat rasm", "Faqat matn"],
      ["Elektron komponentlar ro'yxatida nimalar yoziladi?", "Kerakli datchiklar, motorlar, LEDlar va pinlar", "Oziq-ovqatlar", "Havo harorati"],
      ["O'z g'oyangizni qisqa va qiziqarli qilib tushuntirib berish nima deyiladi?", "Pitch (Taqdimot)", "Serial", "Analog"],
      ["Loyiha rejasini kim bilan muhokama qilish foydali?", "Mentor va sinfdoshlar bilan", "Hech kim bilan", "Begonalar bilan"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Ixtiro yaratish bosqichlari",
      steps: [
        "Foydali g'oya va loyiha nomini tanlash",
        "3D korpus chizmasi va o'lchamlarini belgilash",
        "Elektron komponentlar va Arduino pinlarini rejalashtirish",
        "Blokli dastur algoritmini qog'ozga tushirish",
        "Tinkercad'da amaliy yig'ishga kirishish"
      ]
    },
    topic: [
      { e: "💡", h: "Haqiqiy startap laboratoriyasi", p: "Bugun siz sinfda oddiy o'quvchi emassiz — siz yangi texnologik gadjet ustida ishlayotgan startap asoschisisiz! Apple, Tesla va SpaceX kompaniyalari ham o'z ishini xuddi shunday qog'ozdagi chizmalardan boshlagan.", q: "Startap nima?", a: "Yangi g'oya va texnologiyaga asoslangan yosh innovatsion loyiha." },
      { e: "📐", h: "Muhandislik chizmalari", p: "Chizma — muhandisning xalqaro tilidir. Qog'ozdagi to'g'ri o'lchamlar bo'yicha chizilgan chizmani dunyoning narigi burchagidagi muhandis ham bir qarashda tushunadi.", q: "Chizmalarda qaysi birlik ishlatiladi?", a: "Millimetrlar (mm)." },
      { e: "🤝", h: "Fikr almashish kuchi", p: "Do'stingizga g'oyangizni aytib berganingizda, u «Bunga chiroq ham qo'shsa zo'r bo'lardi!» deb ajoyib maslahat berishi mumkin. Jamoa bilan ishlash ixtironi ikki barobar kuchaytiradi.", q: "Do'stingiz maslahat bersa xafa bo'lasizmi?", a: "Yo'q, xursand bo'lib loyihamni yaxshilayman!" }
    ],
    prog: [{ t: "Ixtiro pasporti", b: ["y:💡 G'oya va nom", "b:📐 3D korpus chizmasi", "o:🔌 Elektronika va pinlar", "g:🧩 Blokli algoritm", "p:🚀 Amalga oshirishga tayyor!"] }],
    video: [["wY9kQz1B-lM", "How to Design a STEM Robotics Project"], ["a68_g2IpepU", "Yosh ixtirochilar loyiha rejalashtirish"]],
    yq: "stem robotics project design engineering process for kids",
    hw: ["Loyihangizning to'liq chiroyli rasmini rangli qalamlar bilan chizib, taqdimotga tayyorlab keling."]
  },
  {
    n: 23, mod: 3, t: "Ochiq loyiha: Yaratish, sinash va sozlash (Debugging)",
    goal: "O'quvchilar o'tgan darsdagi reja asosida Tinkercad 3D muhitida korpusni to'liq yakunlaydi va Tinkercad Circuits'da sxemani yig'ib, bloklar bilan dasturlaydi, xatolarni tuzatadi (Debugging).",
    out: ["3D korpus va elektronika sxemasini mustaqil ravishda to'liq yig'adi", "Blokli kodni xatolarsiz ishga tushiradi va simulyatsiyada tekshiradi", "Do'stlarining fikrlari asosida loyihani mukammal holga keltiradi"],
    need: ["Kompyuterlar, Tinkercad (3D Designs va Circuits)"],
    plan: [["4", "Yo'riqnoma: bugun hamma o'z rejasini ishlaydigan 3D model va jonli virtual sxemaga aylantiradi."], ["25", "Mustaqil amaliy ijod: 3D modellashtirish va blokli dasturlash."], ["8", "O'zaro sinov (Playtesting) va xatolarni tuzatish (Debugging)."], ["5", "Yakuniy pardoz va taqdimotga tayyorgarlik."], ["3", "Xulosa va maslahatlar."]],
    tips: ["O'quvchilar vaqtni to'g'ri taqsimlashlariga yordam bering: 12 daqiqa 3D korpusga, 13 daqiqa Circuits sxemasi va kodga.", "Agar blokli kod ishlamasa, shartlardagi sonlarni (masalan: masofa < 20 yoki yoruglik < 500) tekshirtiring."],
    pt: "Amaliy ish: «Ixtironi jonlantirish va xatolarni ovlash»",
    steps: [
      "Tinkercad 3D da loyihangiz korpusini oching va barcha detallar to'g'ri birlashganini (Group qilinganini) tekshiring.",
      "Tinkercad Circuits'da yangi sxemani oching: Arduino, Breadboard, datchiklar, motor va LEDlarni rejadagi pinlarga ulang.",
      "«Code» oynasini oching va rejadagi bloklarni tartib bilan tering.",
      "«Start Simulation» ni bosing: tizim qanday ishlayotganini ko'ring.",
      "Xatolarni qidiring (Debugging): chiroq o'z vaqtida yonyaptimi? Datchik to'siqni sezyaptimi? Motor to'g'ri aylanyaptimi?",
      "Yoningizdagi sherigingiz bilan joy almashing: u sizning 3D modelingizni ko'rib, Circuits sxemangizni sinab ko'rsin.",
      "Sherigingiz bergan maslahatlarga qarab kamchiliklarni to'g'rilang.",
      "Loyihangiz to'liq ishchi va ko'rkam holga kelganiga ishonch hosil qiling!"
    ],
    extra: ["Sxemaga ovozli signal (Buzzer) yoki RGB chiroqlar qo'shib, loyihani yanada boyiting.", "3D modelni .STL formatida yuklab olib, 3D bosmaga tayyorlab qo'ying."],
    ask: [
      ["Loyihani sinash (Testing) nima uchun kerak?", "Kutilmagan xatolarni vaqtida aniqlash va loyiha mukammal ishlashiga ishonch hosil qilish uchun."],
      ["Xato topilganda nima qilish kerak?", "Kodni va simlarni qadamma-qadam tekshirib, xato parametrni to'g'rilash kerak."],
      ["3D korpus bilan elektronika sxemasi bir-biriga qanday bog'landi?", "Sxema — robotning miyasi va nerv tizimi, 3D korpus esa uning tanasidir."],
      ["Do'stingiz loyihangizni sinaganda qanday yangi narsani payqadi?", "O'quvchining shaxsiy tajribasi va xulosasi."]
    ],
    quiz: [
      ["Dasturdagi xatolarni qidirib tuzatish nima deyiladi?", "Debugging", "Deleting", "Cloning"],
      ["Agar chiroq yonmasa birinchi navbatda nima tekshiriladi?", "Simlar to'g'ri ulanganmi va pin raqami to'g'rimi", "Kompyuterni o'chirish kerak", "Hech narsa"],
      ["Boshqa odamga loyihani sinatish nima deyiladi?", "Playtesting (sinov)", "Rasm chizish", "Taqdirlash"],
      ["Blokli kodda shart to'g'ri ishlashi uchun nima muhim?", "Taqqoslash belgilari (<, >, ==) va sonlar to'g'ri tanlanishi", "Faqat ranglar", "Faqat soat"],
      ["Ertaga bizni qanday muhim dars kutmoqda?", "Yakuniy ko'rgazma va sertifikatlar topshirish kuni!", "Oddiy dars", "Imtihon"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Xatoni topish va tuzatish",
      steps: [
        "Sxemadagi barcha simlar o'z piniga to'g'ri ulanganini tekshirish",
        "Bloklardagi pin raqamlarini sxema bilan solishtirish",
        "Simulyatsiyani yoqib, datchik va chiroqlarni sinab ko'rish",
        "Ishlamayotgan blokni topib, sozlamasini o'zgartirish",
        "Qayta sinab, to'liq ishchi natijaga erishish"
      ]
    },
    topic: [
      { e: "🛠️", h: "Muhandisning ustaxonasi", p: "Haqiqiy muhandis faqat orzu qilmaydi, u o'z qo'llari bilan yasaydi va ishlatadi. Bugun siz ekrandagi virtual dunyoda bo'lsa ham, haqiqiy muhandislik laboratoriyasida ixtiro yaratdingiz!", q: "Ijod qilish sizga yoqdimi?", a: "Juda qiziqarli va maroqli!" },
      { e: "🐞", h: "Xatolar — eng yaxshi ustoz", p: "Birinchi marta ishlamay qolgan sxemani tuzatib, nihoyat chiroq yonganida yoki motor aylanganida ko'ngildan kechadigan tuyg'u — dunyodagi eng ajoyib g'alabadir.", q: "Qiyinchilikdan qo'rqish kerakmi?", a: "Yo'q, har bir to'siq bizni kuchliroq qiladi!" },
      { e: "🌟", h: "Ertangi bayramga tayyormiz!", p: "Loyihangiz tayyor. Ertaga barcha sinfdoshlar, ustozlar oldida o'z ishingizni namoyish qilasiz va faxr bilan sertifikat olasiz!", q: "Taqdimotga tayyormisiz?", a: "Ha, tayyorman!" }
    ],
    prog: [{ t: "Debugging va sinov", b: ["y:▶ Simulyatsiyani yoq", "o:👀 Natijani kuzat", "g:🔍 Xato blokni to'g'rila", "b:💡 Qayta sina", "p:🎉 Loyiha 100% tayyor!"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Circuits Testing and Debugging Tutorial"], ["a68_g2IpepU", "Arduino loyihalarini sozlash va sinash"]],
    yq: "tinkercad circuits testing debugging block coding tutorial for kids",
    hw: ["Taqdimot uchun 2 daqiqalik nutq tayyorlang: «Mening loyiham nima uchun foydali va u qanday ishlaydi?»"]
  },
  {
    n: 24, mod: 3, t: "Yakuniy ko'rgazma, taqdimot va mini-xakaton (Demo Day)",
    goal: "O'quvchilar yil davomida yaratgan barcha mualliflik loyihalarini (3D modellar va blokli Arduino sxemalarini) omma oldida namoyish etadi (Pitch), muhandislik g'oyalarini himoya qiladi va 5-sinf kursini muvaffaqiyatli yakunlaydi.",
    out: ["O'z 3D modeli va elektronika loyihasini 2 daqiqada chiroyli taqdim etadi (Pitch)", "Sxema qanday ishlashini do'stlariga va ustozlarga ko'rsatib beradi", "5-sinfda erishgan barcha natijalarini sarhisob qilib, sertifikat oladi"],
    need: ["Proyektor yoki katta monitor", "Sertifikatlar va esdalik sovg'alari", "Bayramona kayfiyat"],
    plan: [["5", "Tantanali ochilish: bugun 5-sinf yosh muhandislarining katta «Demo Day» bayrami!"], ["5", "Taqdimot reglamenti: 2 daqiqa loyiha namoyishi, 1 daqiqa savol-javob."], ["28", "O'quvchilar taqdimotlari (har bir o'quvchi o'z 3D modeli va sxemasini ko'rsatadi)."], ["4", "Nominatsiyalar bo'yicha taqdirlash va sertifikatlar topshirish."], ["3", "Yillik esdalik fotosurati va bayramona xulosa."]],
    tips: ["Har bir o'quvchini alohida yutug'i uchun maqtang: «Eng chiroyli 3D dizayn», «Eng aqlli algoritm», «Eng yaxshi xavfsizlik tizimi», «Eng epchil dasturchi» va h.k.", "O'quvchilar nutq so'zlayotganda ularning hayajonini bosish uchun qarsaklar bilan qo'llab-quvvatlang."],
    pt: "Demo Day: «Mening mualliflik ixtirom taqdimoti»",
    steps: [
      "Tinkercad dasturida 3D modelingizni va Circuits sxemangizni ikkita alohida oynada ochib tayyorlab qo'ying.",
      "Taqdimot rejasiga rioya qiling:",
      "1) Ismingiz va loyihangiz nomi.",
      "2) 3D korpus qanday loyihalandi (o'lchamlari va tuzilishi).",
      "3) Elektronikada qanday datchik va motorlar ishlatildi.",
      "4) Jonli simulyatsiya: tugmani bosing, datchikni suring — loyiha qanday ishlashini ko'rsating!",
      "Sinfdoshlar va ustozlar savollariga tabassum bilan javob bering.",
      "Boshqa o'quvchilarning ishlarini diqqat bilan tomosha qilib, ularga ijobiy fikr bildiring.",
      "5-sinf «Tinkercad · Arduino» kursini muvaffaqiyatli tamomlaganlik sertifikatini qabul qilib oling!",
      "Guruh bilan birgalikda esdalik fotosuratiga tushing!"
    ],
    extra: ["Loyihangiz havolasini ota-onangizga yuborib, yutuqlaringizni ko'rsating.", "Keyingi yilda 6-sinfda C++ tili va murakkab sxemalar o'rganishga tayyorlaning!"],
    ask: [
      ["5-sinf davomida o'rgangan eng muhim ikkita sohangiz nima bo'ldi?", "Tinkercad'da murakkab 3D modellashtirish va Tinkercad Circuits'da blokli Arduino dasturlash."],
      ["Kelajakda ushbu bilimlardan qanday foydalanasiz?", "Haqiqiy robotlar yasashda, 3D printerda buyumlar chiqarishda va zamonaviy kasblarni egallashda."],
      ["Taqdimot qilish sizga nimalarni o'rgatdi?", "O'z fikrimni erkin va tushunarli aytib berishni, omma oldida so'zlashni."],
      ["6-sinfda nimalarni o'rganishni orzu qilasiz?", "C++ tilida matnli kod yozish, haqiqiy elektron platalar bilan ishlash va yangi datchiklar."]
    ],
    quiz: [
      ["5-sinfda qaysi ikkita asosiy yo'nalishni o'rgandik?", "Tinkercad 3D va Arduino", "Faqat matematika", "Faqat rasm"],
      ["Taqdimotda eng muhim narsa nima?", "Loyihaning nima maqsadda yaratilgani va qanday ishlashini ko'rsatish", "Juda sekin gapirish", "Ekranni yopib qo'yish"],
      ["Robot korpusi qaysi formatda 3D printerga beriladi?", ".STL", ".MP3", ".DOCX"],
      ["Arduino'da bloklar bilan dasturlash nimaga o'xshash?", "Scratch dasturiga", "Televizorga", "Kitobga"],
      ["Kelgusi 6-sinfda bizni nima kutmoqda?", "Arduino C++ matnli dasturlash va murakkab sxemalar", "Hech narsa", "Orqaga qaytish"]
    ],
    game: {
      type: "quiz",
      title: "Yillik bilimlar sinovi (5-sinf)",
      items: [
        ["Tinkercad'da yordamchi pol qo'yish asbobi qaysi?", "Workplane (W)", "Ruler", "Duplicate"],
        ["Arduino'da chiroqni yoqish bloki qaysi?", "set pin to HIGH", "set pin to LOW", "read pin"],
        ["Burchakka aniq buriluvchi motor qaysi?", "Servomotor", "Oddiy DC motor", "Buzzer"],
        ["Masofa datchigi qaysi?", "Ultratovush sensori (HC-SR04)", "Fotorezistor", "LED"]
      ]
    },
    topic: [
      { e: "🎓", h: "Ulkan marra — 5-sinf tamomlandi!", p: "Bir yil davomida siz ulkan sakrashni amalga oshirdingiz. Siz endi shunchaki kompyuter o'yinchisi emassiz — siz 3D fazoda robot korpusi chiza oladigan va mikrokontrollerlarga buyruq beradigan yosh muhandis-konstruktorsiz!", q: "O'zingiz bilan faxrlanasizmi?", a: "Albatta, bu ajoyib mehnat va bilim natijasi!" },
      { e: "🤝", h: "Do'stlik va jamoa ruhi", p: "Siz bu bilimlarni do'stlaringiz bilan birga o'rgandingiz. Bir-biringizga yordam berdingiz, xatolarni birga tuzatdingiz va birga kashf qildingiz. Eng katta boylik — bu jamoa va do'stlikdir!", q: "Birga ishlash nimani o'rgatdi?", a: "Hamkorlikni va bir-birimizni qo'llab-quvvatlashni." },
      { e: "⚡", h: "Oldinda 6-sinf va C++ dasturlash!", p: "Keyingi sinfda biz bloklar bilan xayrlashib, xuddi professional dasturchilar kabi haqiqiy C++ tilida matnli kod yozamiz va murakkab harorat, harakat datchiklari, LCD displeylarni o'rganamiz!", q: "Kelajakka tayyormisiz?", a: "Ha, tayyormiz, olg'a!" }
    ],
    prog: [{ t: "5-sinf yutug'i", b: ["y:💡 Fikr va qoralama", "b:📐 3D korpus dizayni", "o:🧩 Blokli Arduino sxemasi", "g:🧪 Sinov va xatolarni tuzatish", "p:🏆 Muvaffaqiyatli taqdimot va sertifikat!"] }],
    video: [["wY9kQz1B-lM", "Kids Tinkercad Arduino Demo Day Projects"], ["a68_g2IpepU", "Yosh robototexniklar loyihalari ko'rgazmasi"]],
    yq: "kids tinkercad arduino science fair project exhibition presentation demo day",
    hw: ["O'z sertifikatingizni xonangizga iling va 6-sinfda qanday yangi robot loyihalarini yaratmoqchi ekaningizni orzu qiling!"]
  }
);

