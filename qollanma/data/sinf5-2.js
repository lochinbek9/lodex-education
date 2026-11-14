// 5-sinf · 9–16-darslar: 2-modul. Blokli Arduino va birinchi sxemalar
// Format sinf5.js bilan bir xil.
window.QOLLANMA.grades[5].lessons.push(
  {
    n: 9, mod: 2, t: "Scratch'dan Arduino'ga: Blokli dasturlash muhiti",
    goal: "O'quvchilar Scratch'dagi blokli dasturlash tajribasini Arduino mikrokontrolleriga ko'chiradi: Tinkercad Circuits'dagi «Blocks» muhiti, Arduino Uno platasi va raqamli pinlar tushunchasi bilan tanishadi.",
    out: ["Scratch bloklari va Arduino bloklari o'rtasidagi o'xshashlikni tushuntiradi", "Tinkercad Circuits'da «Code» menyusini ochib, bloklar bilan ishlaydi", "Birinchi marta bloklar yordamida simulyatsiyani ishga tushiradi"],
    need: ["Kompyuterlar, internet, Tinkercad Circuits"],
    plan: [["6", "Scratch'da ekrandagi mushukchani harakatlantirgan edik. Endi o'sha qulay bloklar bilan haqiqiy Arduino platasini boshqaramiz!"], ["8", "Tinkercad Circuits'dagi bloklar turlari: Output (Chiqish — ko'k), Input (Kirish — havorang), Control (Boshqaruv — to'q sariq), Math (Yashil)."], ["23", "Amaliy ish: Bloklar bilan tanishuv va birinchi virtual plata."], ["4", "«Saralash» o'yini."], ["4", "Xulosa va test."]],
    tips: ["O'quvchilarga bu muhit Scratch'ga juda o'xshash ekanini ko'rsatib, ularda «men buni allaqachon bilaman!» degan ishonch va motivatsiya uyg'oting.", "Kod oynasidagi «Blocks» rejimida kod bloklar orqali yozilsa, «Blocks + Text» rejimida o'ng tomonda bir vaqtning o'zida C++ kodi ham hosil bo'lishini ko'rsating."],
    pt: "Amaliy ish: «Arduino bloklari bilan birinchi qadam»",
    steps: [
      "Tinkercad'da «Circuits» (Sxemalar) bo'limiga kiring va «New Circuit» tugmasini bosing.",
      "O'ng paneldan «Arduino Uno R3» platasini ish maydoniga qo'ying.",
      "Yuqori o'ng burchakdagi «Code» (Kod) tugmasini bosing. Sizga tanish bo'lgan rang-barang bloklar ochiladi!",
      "Chapdagi bloklar toifalarini ko'rib chiqing: «Output» (Moviy), «Input» (Havorang), «Control» (To'q sariq), «Math» (Yashil), «Variables» (Qizg'ish).",
      "Maydonda turgan tayyor bloklarni o'rganing: `set built-in LED to HIGH` va `wait 1 secs`.",
      "«Control» bo'limidan `wait 1 secs` blokidagi sonni `2` ga o'zgartiring.",
      "«Start Simulation» tugmasini bosing: platadagi «L» yozuvli kichik LED 2 soniya yonib, 1 soniya o'chadi!",
      "Bloklarni o'zgartirib, miltillash tezligini o'zingiz xohlagandek sozlang."
    ],
    extra: ["«Blocks + Text» rejimini yoqing va bloklar harakatlanganda o'ng tomondagi C++ kodi qanday o'zgarishini kuzating.", "Bloklar yordamida SOS (3 qisqa, 3 uzun, 3 qisqa) xalqaro qutqaruv signalini dasturlang."],
    ask: [
      ["Nega blokli dasturlash o'rganish uchun juda qulay?", "Chunki sintaktik xatolar (nuqta-vergul qolib ketishi) bo'lmaydi va mantiqiy fikrlashni tez shakllantiradi."],
      ["Tinkercad Circuits bloklari qaysi dasturga juda o'xshaydi?", "Scratch dasturiga."],
      ["Arduino'dagi o'rnatilgan sinov LEDi qaysi harf bilan belgilanadi?", "«L» harfi bilan (u 13-raqamli pinga ulangan)."],
      ["Blokli kodni haqiqiy C++ kodiga aylantirish mumkinmi?", "Ha, «Blocks + Text» rejimida dastur avtomatik tarzda C++ kodini ko'rsatib turadi."]
    ],
    quiz: [
      ["Tinkercad Circuits'da kod yozishning qaysi qulay rejimi bor?", "Blocks (Bloklar) rejimi", "Faqat ovozli rejim", "Faqat rasm rejimi"],
      ["Chiroqni yoqish bloki qaysi toifada joylashgan?", "Output (Chiqish — moviy)", "Input", "Math"],
      ["Kutish (pauza) bloki qaysi toifada?", "Control (Boshqaruv — to'q sariq)", "Output", "Variables"],
      ["`set built-in LED to HIGH` bloki nima qiladi?", "Platadagi o'rnatilgan LED chiroqni yoqadi", "Platani o'chiradi", "Kompyuterni o'chiradi"],
      ["5-sinfda biz qanday dasturlash usulidan foydalanamiz?", "Blokli Arduino dasturlashdan", "Faqat inglizcha qiyin matndan", "Faqat qog'ozda"]
    ],
    game: {
      type: "sort",
      title: "Qaysi bloklar toifasi?",
      desc: "Bloklarni o'z guruhiga ajrating:",
      cats: ["Output (Chiqish — moviy)", "Control (Boshqaruv — sariq/to'q sariq)"],
      items: [
        ["set built-in LED to HIGH", 0],
        ["wait 1 secs (kutish)", 1],
        ["rotate servo on pin to 90 degrees", 0],
        ["repeat 10 times (takrorlash)", 1],
        ["play speaker on pin with tone", 0],
        ["if ... then (agar shart)", 1]
      ]
    },
    topic: [
      { e: "🧩", h: "Scratch tajribasi zoe ketmadi!", p: "4-sinfda o'rgangan barcha sikllar, shartlar va bloklar tizimi endi real elektronika olamiga xizmat qiladi. Siz yangi narsani noldan o'rganmayapsiz, balki bilgan bilimlaringizni yangi bosqichga ko'taryapsiz!", q: "Scratch bilan Arduinoning farqi nima?", a: "Scratch faqat ekranda qoladi, Arduino esa chiroqlar va motorlarni jismonan boshqaradi." },
      { e: "💡", h: "«L» diodi — dasturchining sirdoshi", p: "Platadagi mitti «L» chiroqchasi hech qanday sim ulamasdan kod ishlayotganini tekshirish uchun o'rnatilgan. Agar u miltillasa — demak dastur muvaffaqiyatli yuklangan!", q: "U qaysi pinga ulangan?", a: "13-raqamli pinga." },
      { e: "🚀", h: "Kelajakka ko'prik", p: "Bloklar yordamida siz robot miyasi qanday ishlashini to'liq tushunib olasiz. Keyinchalik 6-sinfda bemalol C++ matnli kodiga o'ta olasiz.", q: "Bloklar kattalarda ham bormi?", a: "Ha, ko'plab zamonaviy dasturlar (MakeCode, App Inventor) bloklar bilan ishlaydi." }
    ],
    prog: [{ t: "Blokli Blink kodi", b: ["y:▶ Simulyatsiya boshlanganda", "b:💡 set built-in LED to HIGH", "r:⏳ wait 1 secs", "b:⚫ set built-in LED to LOW", "r:⏳ wait 1 secs", "o:🔁 Doimiy takrorlash"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Circuits Block Coding for Arduino"], ["a68_g2IpepU", "Arduino blokli dasturlash 1-dars"]],
    yq: "tinkercad circuits block coding arduino tutorial for kids beginners",
    hw: ["Daftaringizga `wait 1 secs` va `wait 0.2 secs` bloklarida chiroq qanday miltillashini yozib keling."]
  },
  {
    n: 10, mod: 2, t: "Chiroqni boshqarish: Tashqi LED va Breadboard",
    goal: "O'quvchilar platadagi ichki chiroqdan tashqari Breadboard ustiga tashqi LED va 220 Om rezistor ulashni, «set pin [13] to HIGH» bloki bilan uni boshqarishni o'rganadi.",
    out: ["Arduino'ning 13-pini va GND piniga tashqi LEDni to'g'ri ulaydi", "Blokli kodda «set pin ... to HIGH/LOW» blokidan foydalanadi", "Chiroq yonib-o'chish vaqtlarini erkin dasturlaydi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Platadagi mitti chiroq yaxshi, lekin katta chiroq yoki projektor yoqmoqchi bo'lsak nima qilamiz? Tashqi komponentlar."], ["8", "Sxema: Breadboard, LED diodi (Anod +, Katod -), 220 Om rezistor, GND va 13-pin."], ["23", "Amaliy ish: «Tashqi chiroqni bloklar bilan yoqish»."], ["4", "«Juftini top» o'yini."], ["4", "Xulosa va test."]],
    tips: ["LEDning egilgan oyog'i Anod (+) bo'lib, u 13-pinga rezistor orqali ulanishini, to'g'ri oyog'i Katod (-) esa GND (yer) ga ulanishini eslatib turing.", "Tinkercad'da sim ustiga ikki marta bossangiz, chiroyli burilish nuqtasi (tugun) hosil bo'ladi va simlar to'g'ri burchak ostida chiroyli tortiladi."],
    pt: "Amaliy ish: «Katta yorug'lik mayoqchasi»",
    steps: [
      "Tinkercad Circuits'da Arduino Uno va kichik Breadboard qo'ying.",
      "Kutubxonadan LED oling va Breadboardga o'rnating. Rangini ko'k yoki yashil qiling.",
      "LEDning Anod (+) oyog'iga 220 Om rezistor ulang.",
      "Rezistorning ikkinchi uchidan sim tortib, Arduino 13-raqamli piniga ulang (sim rangini firuza yoki ko'k qiling).",
      "LEDning Katod (-) oyog'idan qora sim tortib, Arduino GND piniga ulang.",
      "«Code» oynasini oching:",
      "«Output» bo'limidan `set pin [13] to [HIGH]` blokini oling.",
      "Tagiga `wait [1] secs` qo'ying.",
      "Keyin `set pin [13] to [LOW]` blokini oling.",
      "Tagiga yana `wait [1] secs` qo'ying.",
      "«Start Simulation» ni bosing: tashqi katta ko'k chirog'ingiz charaqlab yonib-o'chadi!"
    ],
    extra: ["Vaqtni qisqartiring: 0.1 soniya yonsin, 0.9 soniya o'chsin (haqiqiy dengiz mayoqchasi!).", "LED rangini o'zgartirib, yorug'ligini taqqoslang."],
    ask: [
      ["Nega LED diodini to'g'ridan-to'g'ri emas, rezistor orqali ulaymiz?", "Kuchli tok o'tib, LEDni kuydirib yubormasligi uchun."],
      ["`set pin [13] to HIGH` bloki nima qiladi?", "13-pinga 5 Volt quvvat chiqarib, chiroqni yoqadi."],
      ["GND nima?", "Ground — elektr zanjirining manfiy qutbi (Yer)."],
      ["Chiroqni 13-pindan boshqa pinga ulash mumkinmi?", "Albatta, 0 dan 12 gacha bo'lgan istalgan raqamli pinga ulash mumkin."]
    ],
    quiz: [
      ["LEDning qaysi oyog'i musbat qutb hisoblanadi?", "Anod (uzun/egilgan oyoq)", "Katod", "GND"],
      ["Chiroqni o'chirish uchun qaysi parametr tanlanadi?", "LOW", "HIGH", "WAIT"],
      ["220 Om rezistor qaysi rangdagi chiziqlarga ega?", "Qizil-Qizil-Jigarrang", "Qora-Oq-Qora", "Sariq-Ko'k-Yashil"],
      ["Tashqi detalni sim bilan ulash uchun qaysi plata qulay?", "Breadboard (maket platasi)", "Qog'oz", "Batareya"],
      ["13-pin necha Volt kuchlanish chiqaradi?", "5 Volt (HIGH holatida)", "220 Volt", "1000 Volt"]
    ],
    game: {
      type: "memory",
      title: "Juftini top: LED va Arduino bloklari",
      pairs: [
        ["set pin to HIGH", "Chiroqni yoqish"],
        ["set pin to LOW", "Chiroqni o'chirish"],
        ["wait 1 secs", "1 soniya kutish"],
        ["Anod (+)", "Rezistor orqali pinga"],
        ["Katod (-)", "GND ga ulanadi"],
        ["220 Om", "LED himoya rezistori"]
      ]
    },
    topic: [
      { e: "🚢", h: "Dengiz mayoqchalari siri", p: "Tunda adashgan kemalarga yo'l ko'rsatuvchi mayoqchalar qat'iy ma'lum vaqt oralig'ida miltillaydi (masalan: 1 miltillash — Qora dengiz, 2 miltillash — Boltiq dengizi). Dengizchilar miltillash ritmiga qarab qayerda ekanliklarini bilishgan.", q: "Sizning chirog'ingiz qaysi mayoqqa o'xshadi?", a: "Dengiz mayoqchasiga." },
      { e: "🔌", h: "Raqamli pinlar — buyruq eshiklari", p: "Arduino'dagi har bir pin — kompyuter ochib-yopadigan elektron kalitga o'xshaydi. «HIGH» desangiz eshik ochilib 5V tok chiqadi, «LOW» desangiz eshik yopiladi.", q: "Arduino'da nechta shunday eshik bor?", a: "14 ta raqamli pin." },
      { e: "🛡️", h: "Xavfsiz tajriba", p: "Tinkercad Circuits'da agar rezistorni qo'ymay ulasangiz, LED ustida qizil yulduzcha chiqib kuyadi! Bu virtual xatolik sizga haqiqiy hayotda detallarni kuydirmaslikni o'rgatadi.", q: "Xato qilish foydalimi?", a: "Ha, virtualda xato qilib to'g'risini o'rganamiz!" }
    ],
    prog: [{ t: "Tashqi chiroqni yoqish kodi", b: ["y:▶ Boshlash", "b:💡 set pin [13] to HIGH", "r:⏳ wait 0.5 secs", "b:⚫ set pin [13] to LOW", "r:⏳ wait 0.5 secs", "o:🔁 Takrorlash"] }],
    video: [["wY9kQz1B-lM", "Arduino external LED breadboard tutorial"], ["a68_g2IpepU", "Tinkercad Circuits tashqi LED ulash"]],
    yq: "arduino breadboard external led blinking tutorial tinkercad blocks",
    hw: ["Daftaringizga Arduino 13-pini, rezistor, LED va GND ulanish chizmasini chizing."]
  },
  {
    n: 11, mod: 2, t: "Yuguruvchi chiroqlar (Girlyanda) va ketma-ketlik",
    goal: "O'quvchilar bir vaqtning o'zida 3 ta yoki 4 ta LEDni turli pinlarga (13, 12, 11, 10) ulashni va bloklar orqali chiroqlar navbatma-navbat yuguruvchi bayramona girlyanda algoritmini dasturlashni o'rganadi.",
    out: ["Bir nechta LEDlarni Breadboardga to'g'ri tizib ulaydi", "Barcha diodlarning katodlarini bitta umumiy GND liniyasiga birlashtiradi", "Ketma-ket navbat bilan yonuvchi chiroqlar algoritmini tuzadi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["5", "Yangi yil archasidagi girlyandalar qanday yuguradi? Avval 1-chiroq, keyin 2-chiroq..."], ["8", "Sxema va algoritm: 4 ta LED, umumiy yer relsi, ketma-ket yonish va o'chish bloklari."], ["24", "Amaliy ish: «Yuguruvchi bayramona chiroqlar»."], ["4", "Viktorina va muhokama."], ["4", "Xulosa va test."]],
    tips: ["Umumiy GND tushunchasini takrorlang: har bir chiroqdan alohida sim tortib o'tirmasdan, Breadboardning pastki `-` ko'k relsidan umumiy sim tortiladi.", "Bloklarda ketma-ketlik: 13 HIGH $\\rightarrow$ wait $\\rightarrow$ 13 LOW, 12 HIGH $\\rightarrow$ wait $\\rightarrow$ 12 LOW..."],
    pt: "Amaliy ish: «Yuguruvchi chiroqlar girlyandasi»",
    steps: [
      "Tinkercad Circuits'da Arduino va Breadboard qo'ying.",
      "Breadboardga yonma-yon qilib 4 ta turli rangdagi LED o'rnating: Qizil, Sariq, Yashil, Ko'k.",
      "Har bir LEDning Anod oyog'iga 220 Om rezistor qo'ying.",
      "Rezistorlardan sim torting: Qizil $\\rightarrow$ pin 13, Sariq $\\rightarrow$ pin 12, Yashil $\\rightarrow$ pin 11, Ko'k $\\rightarrow$ pin 10.",
      "Barcha 4 ta LEDning Katod oyoqlarini Breadboardning pastki `-` qatoriga, uni esa Arduino GND ga ulang.",
      "«Code» oynasini oching va ketma-ket bloklarni tering:",
      "1) `set pin 13 to HIGH` $\\rightarrow$ `wait 0.2 secs` $\\rightarrow$ `set pin 13 to LOW`.",
      "2) `set pin 12 to HIGH` $\\rightarrow$ `wait 0.2 secs` $\\rightarrow$ `set pin 12 to LOW`.",
      "3) `set pin 11 to HIGH` $\\rightarrow$ `wait 0.2 secs` $\\rightarrow$ `set pin 11 to LOW`.",
      "4) `set pin 10 to HIGH` $\\rightarrow$ `wait 0.2 secs` $\\rightarrow$ `set pin 10 to LOW`.",
      "Simulyatsiyani yoqing: chiroqlar chapdan o'ngga qarab yugurib o'tadi!"
    ],
    extra: ["Teskari yo'nalishni ham qo'shing: o'ngdan chapga qarab qaytib kelsin (Ping-pong effekti).", "Tezlikni oshiring: `wait 0.05 secs` qilib, chaqmoqdek tez yuguradigan qiling."],
    ask: [
      ["Yuguruvchi chiroqlar effekti qanday hosil bo'ladi?", "Chiroqlarni birin-ketin tezlik bilan yoqib va oldingisini o'chirish orqali."],
      ["Nega umumiy GND qatoridan foydalanamiz?", "Simlarni tejash va sxemani chalkashtirmasdan toza saqlash uchun."],
      ["Kutish vaqti (wait) kamaytirilsa nima bo'ladi?", "Yugurish tezligi oshadi."],
      ["Ushbu loyihada nechta rezistor ishlatildi?", "4 ta (har bir LED uchun bittadan 220 Om rezistor)."]
    ],
    quiz: [
      ["4 ta chiroqni ulash uchun nechta raqamli pin kerak?", "4 ta pin", "Faqat 1 ta pin", "14 ta pin"],
      ["Girlyandada chiroqlar tezroq yugurishi uchun qaysi blok o'zgartiriladi?", "wait blokidagi son kamaytiriladi", "Pin raqami o'zgartiriladi", "HIGH o'rniga LOW qilinadi"],
      ["Chiroqlarning hammasi birdaniga yonib qolmasligi uchun nima qilinadi?", "Keyingisi yonishidan oldin oldingisi LOW qilinadi", "Plata o'chiriladi", "Rezistor olib tashlanadi"],
      ["Breadboarddagi ko'k chiziqli qator odatda nima uchun ishlatiladi?", "GND (manfiy/yer) uchun", "5V uchun", "Faqat chiroq uchun"],
      ["Knight Rider (Fantastik avtomobil) chirog'i qanday harakatlanadi?", "Chapdan o'ngga va o'ngdan chapga to'xtovsiz yuguradi", "Faqat yonib turadi", "Aylanadi"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Yuguruvchi chiroqlar algoritmi",
      steps: [
        "1-chiroqni yoqish (pin 13 HIGH)",
        "0.2 soniya kutish va 1-chiroqni o'chirish (LOW)",
        "2-chiroqni yoqish (pin 12 HIGH)",
        "0.2 soniya kutish va 2-chiroqni o'chirish (LOW)",
        "3 va 4-chiroqlarni xuddi shunday ketma-ket takrorlash",
        "Sikl boshiga qaytib, jarayonni davom ettirish"
      ]
    },
    topic: [
      { e: "✨", h: "Shahar illyuminatsiyasi", p: "Kechki payt ko'chalardagi reklama bannerlari, bayram archalari va do'kon peshtoqlaridagi chiroqlar aynan shunday ketma-ketlik algoritmlari bilan boshqariladi. Oddiy mantiq butun shaharga go'zallik ulashadi.", q: "O'zbekiston bayrog'i ranglarida ham qilish mumkinmi?", a: "Ha! Moviy, oq va yashil LEDlarni terib qilish mumkin." },
      { e: "🏎️", h: "Avtomobillardagi dinamik burilish chiroqlari", p: "Zamonaviy mashinalarda (Audi, Lexus) burilish chirog'i miltillamasdan, chiziq bo'ylab yugurib o'tadi (Dynamic indicator). Bu haydovchilarga mashina qayerga burilayotganini aniqroq ko'rsatadi.", q: "Bu xavfsizlikni oshiradimi?", a: "Albatta, orqadagi mashinalar burilishni tezroq payqaydi." },
      { e: "💡", h: "Algoritmik fikrlash", p: "Bugun siz kompyuterga aniq vaqt bo'yicha ketma-ketlikni o'rgatdingiz. Bir buyruq ikkinchisining ortidan intizom bilan kelishi — dasturlashning asosiy qonunidir.", q: "Bitta buyruq o'rni almashib qolsa nima bo'ladi?", a: "Chiroqlar tartibsiz sakrab ketadi." }
    ],
    prog: [{ t: "Yuguruvchi chiroq zanjiri", b: ["b:💡 pin 13: HIGH", "r:⏳ wait 0.2 s", "b:⚫ pin 13: LOW", "b:💡 pin 12: HIGH", "r:⏳ wait 0.2 s", "b:⚫ pin 12: LOW", "o:🔁 11 va 10 ga davom et!"] }],
    video: [["wY9kQz1B-lM", "Arduino Running LEDs Chaser Tutorial"], ["a68_g2IpepU", "Tinkercad Circuits ketma-ket chiroqlar"]],
    yq: "arduino running leds chaser tutorial tinkercad blocks for kids",
    hw: ["Daftaringizga 4 ta LEDning Ping-pong (borib-qaytuvchi) harakati uchun bloklar ketma-ketligini yozib keling."]
  },
  {
    n: 12, mod: 2, t: "Rangli yoritish (RGB LED): Bloklar bilan rang hosil qilish",
    goal: "O'quvchilar ko'p rangli RGB LED diodining ishlashini va bloklar yordamida qizil, yashil, ko'k ranglarni yoqish hamda ularni aralashtirib yangi ranglar (sariq, moviy, oq) hosil qilishni o'rganadi.",
    out: ["RGB LEDning umumiy katod oyog'ini GND ga ulaydi", "Tinkercad bloklarida «set RGB LED pins ... to color» maxsus blokidan foydalanadi", "Ranglar aralashmasini hosil qilib, kayfiyat chirog'i (Mood Light) yaratadi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["5", "Nega bitta chiroq qizil, yashil va ko'k bo'lib yona oladi? Ichida nima bor? RGB siri."], ["8", "RGB LED oyoqlari: Qizil, Katod (GND), Yashil, Ko'k. Tinkercad'dagi maxsus RGB bloki."], ["24", "Amaliy ish: «Rang-barang RGB chirog'i»."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Tinkercad Circuits bloklar kutubxonasida tayyor «set RGB LED pins [R] [G] [B] to [rang]» degan ajoyib vizual blok bor — unda ranglar doiradan to'g'ridan-to'g'ri tanlanadi!", "Har bir rang kanaliga (Red, Green, Blue) 220 Om rezistor ulash shart ekanini unutmang."],
    pt: "Amaliy ish: «Rangini o'zgartiruvchi sehrli chiroq»",
    steps: [
      "Tinkercad Circuits'da Arduino va Breadboard qo'ying.",
      "Kutubxonadan «RGB LED» (Common Cathode) oling va Breadboardga o'rnating.",
      "Eng uzun oyog'ini (Katod) GND ga ulang.",
      "Qizil (Red) oyog'ini 220 Om rezistor bilan 11-pinga ulang.",
      "Yashil (Green) oyog'ini 220 Om rezistor bilan 10-pinga ulang.",
      "Ko'k (Blue) oyog'ini 220 Om rezistor bilan 9-pinga ulang.",
      "«Code» oynasini oching:",
      "«Output» bo'limidan `set RGB LED pins [11] [10] [9] to [Qizil rang]` blokini oling.",
      "Tagiga `wait 1 secs` qo'ying.",
      "Yana o'sha blokni oling va rangini [Yashil] ga o'zgartiring $\\rightarrow$ `wait 1 secs`.",
      "Yana blok oling va rangini [Ko'k], keyin [Sariq], keyin [Binafsha] qiling.",
      "Simulyatsiyani yoqing: chiroq har soniyada ajoyib ranglarga kirib tovlanadi!"
    ],
    extra: ["Ranglar almashinuvini tezlashtirib, diskoteka stroboskopi qiling.", "Oq rang hosil bo'lishini tekshiring (barcha ranglar to'liq yonganda)."],
    ask: [
      ["RGB so'zi qaysi ranglarning bosh harflaridan olingan?", "Red (Qizil), Green (Yashil), Blue (Ko'k)."],
      ["RGB LEDning nechta oyog'i bor?", "4 ta oyog'i bor (3 ta rang uchun va 1 ta umumiy yer)."],
      ["Qizil va Yashil nurlar qo'shilsa qanday rang chiqadi?", "Sariq rang chiqadi."],
      ["Tinkercad bloklarida RGB chiroqni boshqarish qulaymi?", "Juda qulay, rangni palitradan sichqoncha bilan tanlash mumkin."]
    ],
    quiz: [
      ["RGB LEDning umumiy katod oyog'i qayerga ulanadi?", "GND (Yer) ga", "5V ga", "A0 ga"],
      ["Qizil va Ko'k ranglar qo'shilsa qanday rang hosil bo'ladi?", "Binafsha (Magenta)", "Yashil", "Qora"],
      ["RGB LED bitta korpusda nechta mitti diodni birlashtirgan?", "3 ta diodni", "1 ta", "10 ta"],
      ["Ranglarni tanlash bloki qaysi toifada?", "Output (Moviy)", "Math", "Variables"],
      ["Barcha uchala rang (Qizil, Yashil, Ko'k) birga yonsa nima hosil bo'ladi?", "Oq nur", "Qora qorong'ilik", "Jigarrang"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: RGB ranglar ketma-ketligi",
      steps: [
        "RGB LED pinlarini (11, 10, 9) qizil rangga sozlash",
        "1 soniya kutish",
        "RGB LED pinlarini yashil rangga sozlash",
        "1 soniya kutish",
        "RGB LED pinlarini ko'k rangga sozlash",
        "Qizil va yashilni qo'shib sariq rang hosil qilish"
      ]
    },
    topic: [
      { e: "🎨", h: "Piksel qanday ishlaydi?", p: "Smartfoningiz yoki televizoringiz ekraniga kattalashtiruvchi shisha (lupa) bilan qarasangiz, unda millionlab mitti RGB nuqtachalarni ko'rasiz! Butun rangli tasvir shu 3 ta rangdan yig'iladi.", q: "Oq ekranda nima yonib turadi?", a: "Hamma qizil, yashil, ko'k nuqtalar bir vaqtda yonadi." },
      { e: "💡", h: "Smart-lampalar (Aqlli chiroqlar)", p: "Uyga o'rnatiladigan «Smart bulb» aqlli lampalari ichida xuddi shunday kuchli RGB diodlar bo'ladi. Siz telefoningizdan xohlagan rangni tanlab, xonangiz atmosferasini o'zgartirasiz.", q: "Dars qilayotganda qaysi rang ma'qul?", a: "Tiniq oq yoki neytral yorug'lik." },
      { e: "🌈", h: "Yorug'lik fizikasi", p: "Bo'yoqlarni aralashtirsangiz qorayib ketadi. Nurlarni (yorug'likni) aralashtirsangiz esa yorishadi va oq rangga aylanadi. Bu hodisa «Optik additiv sintez» deyiladi.", q: "Kamalakda nechta rang bor?", a: "7 ta asosiy rang bor." }
    ],
    prog: [{ t: "RGB blokli boshqaruvi", b: ["y:▶ Boshlash", "b:🎨 set RGB [11, 10, 9] to 🔴 Qizil", "r:⏳ wait 1 secs", "b:🎨 set RGB [11, 10, 9] to 🟢 Yashil", "r:⏳ wait 1 secs", "b:🎨 set RGB [11, 10, 9] to 🔵 Ko'k", "o:🔁 Takrorlash"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Circuits RGB LED Block Coding"], ["a68_g2IpepU", "Arduino RGB LED bloklar bilan ishlash"]],
    yq: "tinkercad circuits rgb led block coding tutorial for kids",
    hw: ["Daftaringizga doira chizing va uning ichiga Qizil, Yashil va Ko'k aralashmasidan qanday ranglar chiqishini rangli qalamlar bilan tasvirlang."]
  },
  {
    n: 13, mod: 2, t: "Tovushli signallar: Pyezo-buzzer bilan musiqiy bloklar",
    goal: "O'quvchilar pyezo-buzzer (tovush chiqaruvchi element) qanday ulanishini, «play speaker on pin ... with tone ... for ... secs» bloki orqali ohanglar, signallar va musiqiy notalarni chalishni o'rganadi.",
    out: ["Pyezo-buzzerni Arduino raqamli piniga va GND ga to'g'ri ulaydi", "Blokli kodda turli notalar va chastotalarni tanlaydi", "Eshik qo'ng'irog'i yoki sirena ovozini bloklar yordamida dasturlaydi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Robot qanday qilib gapiradi yoki ogohlantiradi? Tovush qanday hosil qilinadi?"], ["8", "Pyezo-buzzer (Piezo), musiqiy notalar (Do, Re, Mi, Fa, Sol...), «play speaker» bloki."], ["23", "Amaliy ish: «Elektron eshik qo'ng'irog'i va sirena»."], ["4", "«Juftini top» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Pyezo-buzzerning musbat oyog'i (odatda qizil yoki yonida `+` belgisi bor) 8-pinga, ikkinchi oyog'i GND ga ulanadi.", "Tinkercad bloklarida «play speaker on pin [8] with tone [60] for [0.5] secs» blokida pianino klaviaturasi ochiladi — notani to'g'ridan-to'g'ri pianino tugmasidan bosib tanlash mumkin!"],
    pt: "Amaliy ish: «Musiqali qo'ng'iroq»",
    steps: [
      "Tinkercad Circuits'da Arduino va Breadboard qo'ying.",
      "Kutubxonadan «Piezo» (Pyezo-buzzer) oling va Breadboardga o'rnating.",
      "Musbat (Positive) oyog'ini Arduino 8-pinga ulang.",
      "Manfiy (Negative) oyog'ini GND ga ulang.",
      "«Code» oynasini oching:",
      "«Output» bo'limidan `play speaker on pin [8] with tone [60] for [0.5] secs` blokini oling.",
      "Son ustiga bosing: ekranda mitti pianino klaviaturasi chiqadi! O'zingiz yoqtirgan notani tanlang (masalan, Do — C4).",
      "Tagiga ikkinchi notani qo'ying: `play speaker on pin [8] with tone [64] for [0.5] secs` (Mi — E4).",
      "Tagiga uchinchi notani qo'ying: Sol — G4.",
      "Simulyatsiyani yoqing: buzzer haqiqiy musiqa ohangini chaladi!",
      "Endi sirena yasang: ikkita baland va past ohangni tez-tez almashtiring."
    ],
    extra: ["Mashhur kuyning (masalan: tug'ilgan kun tabrigi) birinchi 4 ta notasini terib chiqing.", "Tovush chalayotganda LED chiroq ham musiqa taktiga mos miltillaydigan qiling."],
    ask: [
      ["Pyezo-buzzer nima?", "Elektr signallarini tovush to'lqinlariga aylantirib beruvchi mitti tovush elementi."],
      ["Tinkercad blokida nota qanday tanlanadi?", "Blok ustiga bosganda ochiladigan kichik pianino klaviaturasi orqali."],
      ["Pyezo-buzzer qaysi qurilmalarda bor?", "Soatlarda, mikroto'lqinli pechlarda, o'yinchoqlarda va avtomobil signallarida."],
      ["Tovushning baland yoki past bo'lishi nimaga bog'liq?", "Chastotaga (tebranish tezligiga)."]
    ],
    quiz: [
      ["Tovush chiqaruvchi blok qaysi?", "play speaker on pin ... with tone", "set pin to HIGH", "read pin"],
      ["Pyezo-buzzerning manfiy oyog'i qayerga ulanadi?", "GND (Yer) ga", "5V ga", "A0 ga"],
      ["Blok ichidagi pianino klaviaturasi nima beradi?", "Musiqiy notalarni qulay tanlash imkonini", "Rang tanlashni", "Vaqtni o'lchashni"],
      ["`tone` parametrida son qanchalik katta bo'lsa, ovoz qanday bo'ladi?", "Ingichka va baland bo'ladi", "Yo'g'on bo'ladi", "Eshitilmaydi"],
      ["Pyezo-buzzerni qaysi pinga ulash mumkin?", "Istalgan raqamli pinga (masalan: 8)", "Faqat USB ga", "Faqat batareyaga"]
    ],
    game: {
      type: "memory",
      title: "Juftini top: Tovush bloklari",
      pairs: [
        ["play speaker", "Buzzerda ohang chalish"],
        ["tone", "Musiqiy nota / chastota"],
        ["for 0.5 secs", "Tovush davomiyligi"],
        ["Pyezo-buzzer", "Tovush chiqaruvchi detal"],
        ["Sirena", "Baland va past ohanglar almashinuvi"],
        ["GND", "Manfiy qutb"]
      ]
    },
    topic: [
      { e: "🎵", h: "Raqamli musiqa", p: "Kompyuter o'yinlaridagi (Super Mario, Tetris) retro musiqalar xuddi shunday oddiy chastotalardan yaratilgan. Bir nechta notani tartib bilan terib, butun boshli simfoniya yaratish mumkin!", q: "Birinchi kompyuter musiqasi qachon yaratilgan?", a: "1951-yilda Angliyada Alan Tyuring kompyuterida." },
      { e: "⏰", h: "Budilnik va xavfsizlik", p: "Ertalab bizni uyg'otuvchi soatlar yoki yong'in signalizatsiyasi pyezo-buzzerdan foydalanadi. Uning o'tkir ovozi hatto eng chuqur uxlab yotgan odamni ham uyg'ota oladi.", q: "Nega ovozi o'tkir bo'ladi?", a: "Inson qulog'i 2000–3000 Hz chastotani eng kuchli sezadi." },
      { e: "🤖", h: "Robotning his-tuyg'ulari", p: "Yulduzlar jangi filmidagi R2-D2 roboti so'zlar bilan emas, balki qisqa «bip-bup» tovushlari bilan gaplashgan. Siz ham robotingizga xursand yoki xafa bo'lgandagi tovushlarni dasturlashingiz mumkin!", q: "Robotingiz sizga qanday signal berishini xohlaysiz?", a: "Xushchaqchaq salomlashuv ohangi bilan." }
    ],
    prog: [{ t: "Qo'ng'iroq ohangi", b: ["y:▶ Boshlash", "r:🔊 play speaker on pin [8] with tone [C4] for 0.3s", "r:🔊 play speaker on pin [8] with tone [E4] for 0.3s", "r:🔊 play speaker on pin [8] with tone [G4] for 0.5s", "r:⏳ wait 1 secs", "o:🔁 Takrorlash"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Circuits Buzzer Block Coding"], ["a68_g2IpepU", "Arduino pyezo buzzer bloklar bilan musiqa"]],
    yq: "tinkercad circuits buzzer speaker block coding tutorial kids",
    hw: ["Daftaringizga sevimli qo'shig'ingizning boshlang'ich notalarini yoki oddiy 3 ta ohang ketma-ketligini yozib keling."]
  },
  {
    n: 14, mod: 2, t: "Tugma bilan boshqaruv: Qo'lda yoqiladigan fonar",
    goal: "O'quvchilar tugma (Push Button) ishlash prinsipini, «read digital pin» blokini va «if ... then ... else» shartli bloklari yordamida tugma bosilganda chiroq yoki tovushni ishga tushirishni o'rganadi.",
    out: ["Tugmani 10 kOm pull-down rezistor bilan to'g'ri ulaydi", "«read digital pin [2]» blokidan shart ichida foydalanadi", "Tugma bosilganda LED yonadigan haqiqiy qo'l fonarini dasturlaydi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Chiroq o'z-o'zidan emas, biz tugmani bosganimizdagina yonishi kerak. Shartli bloklar qanday ishlaydi?"], ["8", "Tugma ulanishi (Pull-down 10 kOm rezistor), «read digital pin» (1 yoki 0), «if ... then ... else»."], ["23", "Amaliy ish: «Tugmali qo'l fonari»."], ["4", "«Tartibga sol» o'yini."], ["4", "Xulosa va test."]],
    tips: ["Tugma bosilganda 1 (HIGH), qo'yib yuborilganda 0 (LOW) bo'lishini ko'rsating. Shart bloki: `if <read digital pin [2] == 1> then <set pin 13 to HIGH> else <set pin 13 to LOW>`.", "Tugmaga albatta 10 kOm rezistor ulanishi shart ekanini unutmang, aks holda pin havoda adashib qoladi."],
    pt: "Amaliy ish: «Aqlli qo'l fonari»",
    steps: [
      "Tinkercad Circuits'da Arduino, Breadboard va bitta LED (13-pinga ulangan) qo'ying.",
      "Kutubxonadan «Pushbutton» (Tugma) oling va Breadboardga o'rnating.",
      "Tugmaning 1-oyog'iga 5V quvvat ulang.",
      "2-oyog'iga 10 kOm rezistor ulab, uni GND ga ulang.",
      "Xuddi shu 2-oyoqdan sim olib, Arduino 2-raqamli pinga ulang.",
      "«Code» oynasini oching:",
      "«Control» bo'limidan `if ... then ... else` blokini oling.",
      "«Math» bo'limidan `[ 1 ] = [ 1 ]` taqqoslash blokini olib, if shartining ichiga qo'ying.",
      "Chap tomoniga «Input» bo'limidan `read digital pin [2]` blokini qo'ying, o'ng tomoniga `1` yozing.",
      "`then` (unda) ichiga: `set pin [13] to HIGH` (chiroq yonsin!).",
      "`else` (aks holda) ichiga: `set pin [13] to LOW` (chiroq o'chsin!).",
      "Simulyatsiyani yoqing: sichqoncha bilan tugmani bosing — chiroq yonadi, qo'yib yuboring — o'chadi!"
    ],
    extra: ["Tugma bosilganda bir vaqtning o'zida buzzer ham ovoz chiqaradigan qiling (eshik qo'ng'irog'i!).", "Teskari ishlaydigan qiling: tugma bosilganda o'chsin, qo'yib yuborilganda yonsin."],
    ask: [
      ["`read digital pin [2]` bloki nima qiladi?", "2-pinga ulangan tugmaning holatini o'qiydi (bosilgan bo'lsa 1, bosilmagan bo'lsa 0)."],
      ["Nega `if ... then ... else` bloki kerak?", "Chunki kompyuter qaror qabul qilishi kerak: agar tugma bosilsa yoq, aks holda o'chir."],
      ["Tugmaga necha kOm rezistor ulanadi?", "10 kOm (Pull-down rezistori)."],
      ["Tugma qayerlarda ishlatiladi?", "Sichqoncha tugmalarida, eshik qo'ng'irog'ida, joystiklarda, kalkulyatorda."]
    ],
    quiz: [
      ["Tugma bosilganini bildiruvchi son qaysi?", "1 (HIGH)", "0 (LOW)", "-1"],
      ["Raqamli pinni o'qish bloki qaysi toifada?", "Input (Havorang)", "Output", "Math"],
      ["Agar shart bajarilmasa, qaysi qismdagi bloklar ishlaydi?", "else (aks holda) qismidagi", "then qismidagi", "Hech qaysi"],
      ["Tugmani erkin tebranishdan asrovchi rezistor nima deb ataladi?", "Pull-down rezistori", "Kondensator", "Diod"],
      ["Ushbu sxemadan qanday amaliy buyum yasash mumkin?", "Qo'l fonari, eshik qo'ng'irog'i yoki telegraf kaliti", "Faqat soat", "Faqat kompyuter"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Tugmali boshqaruv algoritmi",
      steps: [
        "Tugma holatini `read digital pin [2]` orqali o'qish",
        "Taqqoslash: o'qilgan son 1 ga tengmi?",
        "Agar 1 bo'lsa (Ha): chiroqni yoqish (pin 13 HIGH)",
        "Agar 0 bo'lsa (Yo'q): chiroqni o'chirish (pin 13 LOW)",
        "Sikl boshiga qaytib, tugmani doimiy tekshirib turish"
      ]
    },
    topic: [
      { e: "🔦", h: "Oddiy fonardan aqlli tizimgacha", p: "Oddiy cho'ntak fonarida mexanik kalit tokni uzib-ulaydi. Bizning tizimimizda esa tugma mikrokontrollerga buyruq beradi. Kontroller esa xohlasa chiroqni yoqadi, xohlasa miltillatadi, xohlasa vaqtdan keyin o'chiradi.", q: "Bu ko'proq imkoniyat beradimi?", a: "Albatta, dastur orqali xohlagan yangi rejimni qo'shish mumkin!" },
      { e: "🧠", h: "Qaror qabul qilish — IF siri", p: "Inson har kuni shartlar bilan yashaydi: «Agar yomg'ir yog'sa — soyabon olaman, aks holda — olmayman». Dasturlashdagi `if ... else` bloki kompyuterga xuddi shunday mantiqiy fikrlashni o'rgatadi.", q: "Robot shartlarsiz ishlay oladimi?", a: "Yo'q, shart bo'lmasa robot qaror qabul qila olmaydi." },
      { e: "🎮", h: "O'yin joystiklari", p: "PlayStation yoki kompyuter pultidagi barcha tugmalar xuddi shu prinsipda ishlaydi: har bir bosish kompyuterga 1 signalini jo'natadi va qahramon sakraydi yoki o'q otadi.", q: "Pultda nechta tugma bor?", a: "Odatda 10–14 ta tugma bo'ladi." }
    ],
    prog: [{ t: "Tugmali chiroq kodi", b: ["o:🔁 Doim [", "g:❓ Agar <read pin [2] == 1> bo'lsa", "b:💡 set pin [13] to HIGH", "g:❗ Aks holda", "b:⚫ set pin [13] to LOW", "o:]"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Circuits Button Input Block Tutorial"], ["a68_g2IpepU", "Arduino tugma bilan chiroqni yoqish bloklarda"]],
    yq: "tinkercad circuits push button if else block coding tutorial for kids",
    hw: ["Daftaringizga tugmali fonar sxemasini chizing va uning ishlash qoidasini yozing."]
  },
  {
    n: 15, mod: 2, t: "Harakatlantiruvchi kuch: DC motor va parrak",
    goal: "O'quvchilar doimiy tok dvigateli (DC motor) qanday ishlashini, parrak (propeller) o'rnatishni, motor yo'nalishini o'zgartirishni va tranzistor yoki rele orqali motorni yoqib-o'chirishni o'rganadi.",
    out: ["DC motorning elektr energiyasini aylanish mexanikasiga aylantirishini tushuntiradi", "Motorni to'g'ri va teskari aylanish qutblarini biladi", "Bloklar yordamida mini-ventilyatorni yoqib-o'chirishni dasturlaydi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["6", "Robot qanday qilib oldinga yuradi? Dronlar havoga qanday ko'tariladi? Dvigatellar siri."], ["8", "DC motor (Doimiy tok motori), magnit maydoni, qutblar va quvvat talabi. Transistor yordamida kuchaytirish."], ["23", "Amaliy ish: «Elektron mini-ventilyator»."], ["4", "«Juftini top» o'yini."], ["4", "Xulosa va test."]],
    tips: ["DC motor ko'p tok talab qiladi. To'g'ridan-to'g'ri Arduino piniga ulasangiz, pin zo'riqishi mumkin. Tinkercad'da motorni sinash uchun tranzistor (NPN) yoki to'g'ridan-to'g'ri raqamli pin orqali kichik quvvatda boshqarishni ko'rsating.", "Motor simlari o'rni almashsa, motor teskari tomonga aylanishini amalda ko'rsating."],
    pt: "Amaliy ish: «Aqlli stol ventilyatori»",
    steps: [
      "Tinkercad Circuits'da Arduino va Breadboard qo'ying.",
      "Kutubxonadan «DC Motor» oling va Breadboard yoniga qo'ying.",
      "Motor ustiga bosing va unga parrak o'rnatilganini tasavvur qiling.",
      "Xavfsiz boshqarish: kutubxonadan NPN tranzistor (BJT) oling (u kuchaytirgich kalit vazifasini bajaradi).",
      "Tranzistorning Base (o'rta) oyog'ini 1 kOm rezistor bilan Arduino 9-pinga ulang.",
      "Collector oyog'ini motorning bitta simiga ulang. Motorning ikkinchi simini 5V ga ulang.",
      "Emitter oyog'ini GND ga ulang.",
      "«Code» oynasini oching:",
      "`set pin [9] to HIGH` $\\rightarrow$ `wait 3 secs` $\\rightarrow$ `set pin [9] to LOW` $\\rightarrow$ `wait 2 secs`.",
      "Simulyatsiyani yoqing: motor 3 soniya aylanib shamol beradi va 2 soniya dam oladi!",
      "Ajoyib: siz robotni harakatga keltiruvchi birinchi dvigatelni ishga tushirdingiz!"
    ],
    extra: ["Tugma qo'shing: faqat tugma bosilganda ventilyator aylansin.", "Motor tezligini PWM bloki bilan boshqaring: xira, o'rtacha va juda tez shamol."],
    ask: [
      ["DC motor nima?", "Elektr energiyasini uzluksiz mexanik aylanish harakatiga aylantiruvchi doimiy tok dvigateli."],
      ["Motor qutblari (simlari) almashtirilsa nima bo'ladi?", "U qarama-qarshi tomonga qarab teskari aylanadi."],
      ["Nega motor uchun tranzistor kerak bo'ladi?", "Chunki motor ko'p tok talab qiladi, tranzistor esa kuchaytiruvchi elektron kalit vazifasini o'taydi."],
      ["DC motorlar hayotda qayerda ishlatiladi?", "Dronlarda, o'yinchoq pultli mashinalarda, ventilyatorlarda, fenlarda."]
    ],
    quiz: [
      ["DC motor qanday harakat hosil qiladi?", "Uzluksiz aylanish harakati", "Faqat bir marta sakrash", "Tovush chiqaradi"],
      ["Motor aylanish yo'nalishini qanday o'zgartirish mumkin?", "Simlarning qutblarini (+ va -) almashtirish orqali", "Rangini o'zgartirib", "Yelim surtib"],
      ["Motorni elektron boshqaruvchi kalit nima deb ataladi?", "Tranzistor (Transistor)", "Fotorezistor", "LED"],
      ["Dronlarning uchishiga nima yordam beradi?", "Tez aylanuvchi DC motorlar va parraklar", "Faqat batareya", "Faqat qog'oz"],
      ["Motor tezligini silliq o'zgartirish uchun qaysi texnologiya kerak?", "PWM texnologiyasi", "Faqat o'chirg'ich", "Faqat sim"]
    ],
    game: {
      type: "memory",
      title: "Juftini top: Motor va harakat",
      pairs: [
        ["DC Motor", "Aylanish harakati hosil qiladi"],
        ["Tranzistor", "Kuchli tokni boshqaruvchi kalit"],
        ["Qutblarni almashtirish", "Teskari tomonga aylanish"],
        ["Parrak (Propeller)", "Havo oqimi / shamol hosil qiladi"],
        ["set pin to HIGH", "Motorni ishga tushirish"],
        ["Robot g'ildiraklari", "DC motorlar yordamida aylanadi"]
      ]
    },
    topic: [
      { e: "🌪️", h: "Magnitlar va elektr jangi", p: "Dvigatel ichida doimiy magnitlar va mis simli g'altak (rotor) bor. Tok o'tganda sim magnitga aylanadi va ichki magnitlar bir-birini itarib, motorni sekundiga minglab marta aylantiradi!", q: "Buni kim kashf qilgan?", a: "Buyuk fizik Maykl Faradey (1821-yilda)." },
      { e: "🚁", h: "Dronlar qanday uchadi?", p: "Kvarkopterda 4 ta motor bor: ikkitasi soat yo'nalishida, ikkitasi teskari aylanadi. Bu orqali dron havoda muallaq turadi, oldinga va orqaga uchadi.", q: "Bitta motor to'xtab qolsa nima bo'ladi?", a: "Dron muvozanatni yo'qotib qulaydi." },
      { e: "🤖", h: "Robotimiz harakatga tayyor", p: "Biz 1-modulda shassi va g'ildiraklar yasagan edik. Endi esa ularni aylantiruvchi haqiqiy motorlarni boshqarishni o'rgandik!", q: "Keyingi qadam nima?", a: "Chiroq va motorni bitta aqlli qurilmaga birlashtirish!" }
    ],
    prog: [{ t: "Ventilyator boshqaruvi", b: ["y:▶ Boshlash", "b:🚀 set pin [9] to HIGH (Motor yonsin)", "r:⏳ wait 3 secs", "b:🛑 set pin [9] to LOW (To'xtasin)", "r:⏳ wait 2 secs", "o:🔁 Takrorlash"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Circuits DC Motor Transistor Tutorial"], ["a68_g2IpepU", "Arduino bilan DC motor boshqarish bloklarda"]],
    yq: "tinkercad circuits dc motor transistor block coding tutorial",
    hw: ["Uyingizdagi ichida motor bor 3 ta maishiy texnikani toping (masalan: changyutgich, mikser, soch quritgich)."]
  },
  {
    n: 16, mod: 2, t: "2-modul loyihasi: «Aqlli stol ventilyatori va yoritgich»",
    goal: "O'quvchilar 2-modulda o'rganilgan barcha mavzularni (DC motor, LED chiroq, tugmalar, tranzistor va shartli bloklar) birlashtirib, tugma bilan boshqariladigan ko'p funksiyali aqlli stol jihozini yaratadi.",
    out: ["Motor va LED chiroqni bitta Breadboardda mustaqil ulaydi", "1-tugma chiroqni yoqishi, 2-tugma esa ventilyatorni aylantirishini dasturlaydi", "Mukammal ishlovchi stol gadjetini bloklar yordamida sinovdan o'tkazadi"],
    need: ["Kompyuterlar, Tinkercad Circuits"],
    plan: [["5", "2-modul yakuni: issiq yoz kunlarida dars qilayotgan o'quvchi uchun qanday gadjet kerak? Aqlli ventilyator va chiroq!"], ["8", "Tizim loyihasi: 2 ta tugma, 1 ta motor (parrak bilan), 1 ta LED chiroq, tranzistor va shartli bloklar."], ["25", "Amaliy ish: Sxemani yig'ish va blokli dasturlash."], ["4", "Loyihalarni sinash."], ["3", "2-modul xulosasi."]],
    tips: ["Ikkala tugmaga ham 10 kOm pull-down rezistor ulanishi kerak (biri pin 2 ga, ikkinchisi pin 3 ga).", "Bloklarda ikkita alohida `if ... then ... else` blokini ketma-ket qo'yish orqali ikkala tizimni mustaqil boshqarishni o'rgating."],
    pt: "Yakuniy loyiha: «Aqlli stol gadjeti»",
    steps: [
      "Tinkercad Circuits'da Arduino Uno va Breadboard qo'ying.",
      "Chiroq bo'limi: LEDni (220 Om rezistor bilan) Arduino 13-pinga ulang.",
      "Ventilyator bo'limi: DC motorni NPN tranzistor orqali Arduino 9-pinga ulang.",
      "1-tugma (Chiroq tugmasi): 10 kOm rezistor bilan 2-pinga ulang.",
      "2-tugma (Ventilyator tugmasi): 10 kOm rezistor bilan 3-pinga ulang.",
      "«Code» oynasini oching:",
      "1-shart: `if <read digital pin [2] == 1> then <set pin [13] to HIGH> else <set pin [13] to LOW>` (chiroq boshqaruvi).",
      "2-shart: `if <read digital pin [3] == 1> then <set pin [9] to HIGH> else <set pin [9] to LOW>` (ventilyator boshqaruvi).",
      "Simulyatsiyani ishga tushiring:",
      "1-tugmani bosing — stol chirog'i yonadi!",
      "2-tugmani bosing — ventilyator aylanib salqin shamol esadi!",
      "Ikkala tugmani birga bossangiz — ham chiroq, ham ventilyator bir vaqtda ishlaydi!"
    ],
    extra: ["Pyezo-buzzer qo'shing: tugmalar bosilganda yoqimli «bip» tovushi chiqsin.", "RGB LED ulab, ventilyator ishlaganda ko'k (salqin), chiroq yonganda sariq (iliq) nur taratsin."],
    ask: [
      ["Nega bitta kontroller bilan ikkita turli narsani boshqara oldik?", "Chunki Arduino'da ko'plab mustaqil pinlar bor va dastur ularning har biriga alohida buyruq bera oladi."],
      ["Ikkala tugma bir vaqtda bosilsa nima bo'ladi?", "Dastur ikkala shartni ham ketma-ket tekshirib, ikkala qurilmani ham yoqadi."],
      ["Bu loyihada nechta komponent qatnashdi?", "Arduino, Breadboard, LED, motor, tranzistor, 2 ta tugma, 3 ta rezistor."],
      ["2-modulda bloklar bilan ishlash sizga qiyin bo'lmadimi?", "O'quvchining shaxsiy fikri va xulosasi."]
    ],
    quiz: [
      ["Stol chirog'i va ventilyatorni alohida boshqarish uchun nechta tugma kerak bo'ldi?", "2 ta alohida tugma", "Faqat 1 ta", "10 ta"],
      ["Motor qaysi pin orqali boshqarildi?", "9-pin", "Faqat GND", "Faqat 5V"],
      ["Chiroq qaysi pin orqali boshqarildi?", "13-pin", "A0", "USB"],
      ["2-modulda biz nimalarni o'rgandik?", "Blokli Arduino, LEDlar, RGB, buzzer, tugmalar va DC motorni", "Faqat Scratch o'yinlarini", "Faqat kitob o'qishni"],
      ["Kelgusi 3-modulda nima qilamiz?", "1-moduldagi 3D korpus va 2-moduldagi elektronikani birlashtiramiz!", "Hammasini to'xtatamiz", "Faqat rasm chizamiz"]
    ],
    game: {
      type: "order",
      title: "Tartibga sol: Aqlli gadjet ishlashi",
      steps: [
        "2-pinni o'qib, chiroq tugmasi bosilganini tekshirish",
        "Agar bosilgan bo'lsa: 13-pindagi LEDni yoqish (aks holda o'chirish)",
        "3-pinni o'qib, ventilyator tugmasi bosilganini tekshirish",
        "Agar bosilgan bo'lsa: 9-pindagi motorni yoqish (aks holda to'xtatish)",
        "Jarayonni uzluksiz takrorlash"
      ]
    },
    topic: [
      { e: "🏆", h: "2-modul marrasi zabt etildi!", p: "Siz endi shunchaki ekrandagi bloklar bilan cheklanmaysiz: siz chiroqni yoqadigan, musiqa chaladigan, motorlarni aylantiradigan va tugmalarga javob beradigan elektronika ustasisiz!", q: "O'zingiz bilan faxrlanasizmi?", a: "Albatta, bu katta mahorat!" },
      { e: "🛋️", h: "Haqiqiy foydali asbob", p: "Bugun siz yaratgan sxemani kichik korpusga joylab, stolingiz ustiga qo'ysangiz — haqiqiy qulay va chiroyli shaxsiy gadjetga aylanadi.", q: "Buni 3D printerda chiqarilgan korpusga qo'yish mumkinmi?", a: "Ha! Aynan 3-modulda shuni amalga oshiramiz!" },
      { e: "🚀", h: "Oldinda buyuk birlashuv!", p: "Keyingi modulda biz 1-modulda o'rgangan 3D modellashtirish va 2-moduldagi elektronika bilimlarini birlashtiramiz va haqiqiy aqlli robot yasaymiz!", q: "Tayyormisiz?", a: "Ha, tayyormiz, olg'a!" }
    ],
    prog: [{ t: "Aqlli stol gadjeti kodi", b: ["o:🔁 Doim [", "g:❓ Agar (tugma1 == 1) -> LED: HIGH (aks holda LOW)", "g:❓ Agar (tugma2 == 1) -> Motor: HIGH (aks holda LOW)", "r:⏳ wait 0.05 secs", "o:]"] }],
    video: [["wY9kQz1B-lM", "Tinkercad Circuits Multi-device control project"], ["a68_g2IpepU", "Arduino mini ventilyator va chiroq loyihasi"]],
    yq: "arduino smart desk lamp fan project tinkercad circuits block coding",
    hw: ["Daftaringizga o'z aqlli stol gadjetingizning tashqi ko'rinishi qanday bo'lishini chizib keling."]
  }
);

